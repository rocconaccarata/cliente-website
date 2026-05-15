import { useEffect } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useLang } from "@/contexts/LanguageContext";
import { Phone } from "lucide-react";

function ProductsCTA() {
  const { t } = useLang();
  const [, navigate] = useLocation();

  return (
    <section className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {t.productsCTA.heading}
        </h2>
        <p className="text-white/60 mb-8 max-w-lg mx-auto">
          {t.productsCTA.subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+17862775660"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            <Phone size={16} />
            (786) 277-5660
          </a>
          <a
            href="https://wa.me/17862775660"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            WhatsApp
          </a>
          <button
            onClick={() => {
              sessionStorage.setItem("scrollTo", "contact");
              navigate("/");
            }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            {t.productsCTA.form}
          </button>
        </div>
        <p className="text-white/40 text-xs mt-6">{t.productsCTA.note}</p>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen w-full font-sans text-foreground bg-white">
      <Header />
      <main className="pt-20">
        <Products />
        <ProductsCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
