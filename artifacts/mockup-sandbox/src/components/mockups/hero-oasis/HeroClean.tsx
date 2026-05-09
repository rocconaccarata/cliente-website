export function HeroClean() {
  return (
    <section
      className="relative min-h-screen flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/__mockup/images/hero-food.png"
          alt="Latin food"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.30) 100%)",
          }}
        />
      </div>

      {/* Fake header */}
      <div className="relative z-20 flex items-center justify-between px-10 py-5">
        <img
          src="/__mockup/images/oasis-logo.jpg"
          alt="Oasis Distribution"
          className="h-12 object-contain rounded"
        />
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/80">
          <span className="hover:text-white cursor-pointer">About</span>
          <span className="hover:text-white cursor-pointer">Services</span>
          <span className="hover:text-white cursor-pointer">Products</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
          <button
            className="ml-2 px-4 py-2 rounded-full text-xs font-semibold"
            style={{ background: "#2D6A4F", color: "#fff" }}
          >
            Request Info
          </button>
        </nav>
      </div>

      {/* Hero content — left aligned */}
      <div className="relative z-10 flex flex-1 items-center px-10 md:px-16 pb-20">
        <div className="max-w-xl">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-6 px-3 py-1.5 rounded-full"
            style={{ background: "rgba(45,106,79,0.85)", color: "#fff" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#7EE8A2" }}
            />
            Distribuidor Mayorista · Homestead, FL
          </span>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5"
            style={{ letterSpacing: "-0.02em" }}
          >
            Authentic Flavors.{" "}
            <span style={{ color: "#7EE8A2" }}>Reliable Supply.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base text-white/70 leading-relaxed mb-9 max-w-md">
            Your Latin food wholesale partner in Florida — supplying restaurants,
            cafés, markets, and food service operators across South Florida.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white transition-all"
              style={{ background: "#2D6A4F" }}
            >
              Ver Productos
            </button>
            <button
              className="px-7 py-3.5 rounded-lg text-sm font-semibold border transition-all"
              style={{
                borderColor: "rgba(255,255,255,0.4)",
                color: "#fff",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              Contactar Ventas
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 flex items-center divide-x"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(0,0,0,0.50)",
          backdropFilter: "blur(8px)",
        }}
      >
        {[
          { value: "43+", label: "Products" },
          { value: "8+", label: "Years in Business" },
          { value: "Ft. Laud. – Florida City", label: "Delivery Area" },
          { value: "$250 min", label: "Free Delivery" },
        ].map((s, i) => (
          <div key={i} className="flex-1 px-6 py-4 text-center" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
            <div className="text-lg font-bold text-white">{s.value}</div>
            <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
