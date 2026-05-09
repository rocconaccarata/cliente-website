import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: t.header.about, id: "about" },
    { label: t.header.partners, id: "partners" },
    { label: t.header.services, id: "services" },
    { label: t.header.products, id: "products" },
    { label: t.header.catalog, id: "catalog" },
    { label: t.header.contact, id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-border shadow-sm py-2"
          : "bg-white border-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="link-home"
        >
          <img src="/oasis-logo.jpg" alt="Oasis Distribution Logo" className="h-12 md:h-14 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid={`nav-${link.id}`}
            >
              {link.label}
            </button>
          ))}

          {/* Language Toggle */}
          <div className="flex items-center gap-1 border border-border rounded-full px-1 py-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded-full transition-colors ${
                lang === "en"
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`px-2 py-1 rounded-full transition-colors ${
                lang === "es"
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ES
            </button>
          </div>

          <Button onClick={() => scrollTo("contact")} size="sm" data-testid="button-request-info">
            {t.header.cta}
          </Button>
        </nav>

        {/* Mobile: language toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <div className="flex items-center gap-1 border border-border rounded-full px-1 py-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded-full transition-colors ${
                lang === "en" ? "bg-primary text-white" : "text-muted-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`px-2 py-1 rounded-full transition-colors ${
                lang === "es" ? "bg-primary text-white" : "text-muted-foreground"
              }`}
            >
              ES
            </button>
          </div>
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-base font-medium py-2 text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={() => scrollTo("contact")} className="w-full mt-2" data-testid="button-mobile-request-info">
            {t.header.cta}
          </Button>
        </div>
      )}
    </header>
  );
}
