export function HeroBold() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", background: "#0a0a0a" }}
    >
      {/* Full-bleed background with stronger, warmer overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/__mockup/images/hero-food.png"
          alt="Latin food"
          className="w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(45,106,79,0.18) 0%, transparent 65%), linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%)",
          }}
        />
      </div>

      {/* Fake header */}
      <div className="relative z-20 flex items-center justify-between px-10 py-5">
        <img
          src="/__mockup/images/oasis-logo.jpg"
          alt="Oasis Distribution"
          className="h-11 object-contain rounded"
        />
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/70">
          <span className="hover:text-white cursor-pointer">About</span>
          <span className="hover:text-white cursor-pointer">Services</span>
          <span className="hover:text-white cursor-pointer">Products</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
          <button
            className="ml-2 px-5 py-2.5 rounded-lg text-xs font-semibold border"
            style={{ borderColor: "rgba(126,232,162,0.5)", color: "#7EE8A2" }}
          >
            Request Wholesale Info
          </button>
        </nav>
      </div>

      {/* Hero — centered, two-column split */}
      <div className="relative z-10 flex flex-1 items-center px-10 md:px-16">
        <div className="w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span
                className="h-px flex-1 max-w-[40px]"
                style={{ background: "#7EE8A2" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#7EE8A2" }}
              >
                Wholesale · Homestead, FL
              </span>
            </div>

            <h1
              className="text-5xl md:text-[64px] font-black text-white leading-none mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              Sabores <br />
              <span
                style={{
                  WebkitTextStroke: "2px #7EE8A2",
                  color: "transparent",
                }}
              >
                Auténticos.
              </span>
              <br />
              Entrega <br />
              Confiable.
            </h1>

            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-sm">
              Distribuimos productos de comida latina a restaurantes, cafeterías,
              mercados y operadores de servicio de alimentos en toda la Florida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 rounded-xl text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #2D6A4F 0%, #40916C 100%)",
                  boxShadow: "0 8px 32px rgba(45,106,79,0.4)",
                }}
              >
                Ver Catálogo Completo →
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { value: "43+", label: "Productos" },
                { value: "8+ años", label: "Experiencia" },
                { value: "Desde $250", label: "Envío gratis" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-lg font-extrabold text-white">{s.value}</div>
                  <div className="text-xs text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: floating contact card */}
          <div className="hidden md:flex justify-end">
            <div
              className="w-72 rounded-2xl p-7"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(16px)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: "#7EE8A2" }}
              >
                Pide tu cotización
              </p>
              <div className="space-y-4 text-sm">
                <div
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <span style={{ color: "#7EE8A2" }}>📞</span>
                  <div>
                    <div className="text-white/50 text-xs">Teléfono / WhatsApp</div>
                    <div className="text-white font-semibold">(786) 277-5660</div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <span style={{ color: "#7EE8A2" }}>✉️</span>
                  <div>
                    <div className="text-white/50 text-xs">Email</div>
                    <div className="text-white font-semibold text-xs">oasisdistributionmiami<br />@gmail.com</div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <span style={{ color: "#7EE8A2" }}>🚚</span>
                  <div>
                    <div className="text-white/50 text-xs">Área de entrega</div>
                    <div className="text-white font-semibold">Ft. Laud. – Florida City</div>
                  </div>
                </div>
              </div>
              <button
                className="w-full mt-6 py-3 rounded-xl text-sm font-bold text-white"
                style={{ background: "#2D6A4F" }}
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="relative z-10 h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #2D6A4F 30%, #7EE8A2 50%, #2D6A4F 70%, transparent 100%)",
        }}
      />
    </section>
  );
}
