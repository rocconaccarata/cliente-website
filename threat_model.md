# Threat Model

## Project Overview

This repository is a pnpm monorepo with a small production surface today: an Express 5 API server in `artifacts/api-server`, a React/Vite marketing and catalog frontend in `artifacts/oasis-distribution`, and shared libraries for PostgreSQL access (`lib/db`), OpenAPI definitions (`lib/api-spec`), generated Zod schemas (`lib/api-zod`), and a reusable typed fetch client (`lib/api-client-react`).

At present, the production API exposes only a health check endpoint and the frontend is a public site with static content plus client-side contact helpers (`mailto:` and WhatsApp links). There is no implemented login flow, protected API, user identity schema, or server-side session layer yet.

Assumptions for future scans:
- Only production-reachable issues should be reported.
- `NODE_ENV` is `production` in deployed environments.
- Replit deployment provides TLS for client/server traffic.
- `artifacts/mockup-sandbox` is development-only and should be ignored unless production reachability is demonstrated.

## Assets

- **Service availability** — the API and public catalog site must remain reachable. Even with minimal functionality, denial of service against the public API or static frontend would impact users.
- **Application secrets** — `DATABASE_URL` and any future auth or third-party API secrets must remain server-side. Exposure would allow database or service compromise.
- **Future bearer tokens and session material** — the shared API client already supports bearer-token injection. If the application later enables auth, tokens become a high-value asset immediately.
- **Business contact information and prospective customer inquiries** — the current frontend exposes public business contact channels and may later collect inquiry data through backend APIs.
- **Database contents** — the DB layer exists even though the schema is currently empty. Any future tables added under the current architecture will be directly reachable from the API server trust boundary.

## Trust Boundaries

- **Browser to API (`artifacts/oasis-distribution` -> `artifacts/api-server`)** — all client input crossing into Express is untrusted and must be validated server-side.
- **API to PostgreSQL (`artifacts/api-server` -> `lib/db`)** — the API server holds database connectivity. Any injection or missing authorization in the API layer would immediately affect database integrity and confidentiality.
- **Frontend to external destinations** — the production site links to third-party destinations (`mailto:`, WhatsApp, manufacturer websites). These are user-initiated navigations, not server-side fetches, so SSRF is not currently in play.
- **Shared helper boundary (`lib/api-client-react`)** — this library can attach bearer tokens to outgoing requests. If future production callers use it with attacker-influenced URLs, it becomes a token-handling trust boundary worth re-reviewing.
- **Production vs dev-only artifacts** — `artifacts/mockup-sandbox` and Vite dev-only plugins are not part of the production attack surface unless deployment configuration changes.

## Scan Anchors

- **Production API entry points**: `artifacts/api-server/src/index.ts`, `artifacts/api-server/src/app.ts`, `artifacts/api-server/src/routes/**`
- **Production frontend entry points**: `artifacts/oasis-distribution/src/main.tsx`, `artifacts/oasis-distribution/src/App.tsx`
- **Highest-risk shared code for future changes**: `lib/api-client-react/src/custom-fetch.ts`, `lib/db/src/index.ts`, `lib/db/src/schema/**`, `lib/api-spec/openapi.yaml`
- **Public surface today**: `GET /api/healthz` plus the public catalog/marketing pages
- **Authenticated/admin surface today**: none implemented
- **Usually dev-only / skip unless proven reachable**: `artifacts/mockup-sandbox/**`, Vite development/preview configuration

## Threat Categories

### Spoofing

The current production system has no implemented user authentication, so classic account spoofing is not yet part of the live attack surface. The relevant guarantee for future work is that any newly added protected endpoint MUST enforce server-side authentication, and any bearer-token mechanism added through `lib/api-client-react` or future middleware MUST bind requests to the intended audience and origin.

### Tampering

The main tampering risk is future API expansion: Express routes under `artifacts/api-server/src/routes` will sit directly on the browser/server boundary and can mutate database state once tables are added. All future request bodies, query params, and path params MUST be validated server-side before use, and all business-sensitive decisions MUST be enforced on the server rather than the client.

### Information Disclosure

The current code already contains useful guardrails: request logging redacts `Authorization`, `Cookie`, and `Set-Cookie` data in `artifacts/api-server/src/lib/logger.ts`. That guarantee must remain in place as auth is added. Secrets such as `DATABASE_URL` MUST remain server-only, error responses from future APIs MUST avoid leaking stack traces or internal DB details, and any future customer or user records MUST be scoped to the requesting principal.

### Denial of Service

Today the only API route is a health check, so the live DoS impact is limited. As the API grows, public endpoints MUST impose reasonable limits on body size, parsing cost, and expensive downstream work; unauthenticated endpoints that trigger DB queries or external calls will need explicit rate-limiting and timeouts.

### Elevation of Privilege

There is no current role or user model, so privilege escalation is not yet implemented as a live user-to-user risk. The important future guarantee is that once authenticated routes, ownership checks, or admin capabilities exist, authorization MUST be enforced in server code on every sensitive route, and shared helpers MUST NOT allow auth material to be sent to unintended destinations.
