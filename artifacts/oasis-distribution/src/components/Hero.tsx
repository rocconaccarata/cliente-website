import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { t } = useLang();
  const [, navigate] = useLocation();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-black min-h-[96vh] flex flex-col isolate">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/opengraph.jpg"
          alt="Latin Bakery Products"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 md:px-6 pt-28 md:pt-32 pb-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src="/oasis-logo.jpg"
            alt="Oasis Distribution"
            className="h-24 md:h-28 w-auto object-contain"
            draggable={false}
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-16 h-px bg-primary mb-8"
        />

        {/* Slogan */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight leading-tight"
        >
          {t.hero.slogan1}{" "}
          <span className="text-primary">{t.hero.slogan2}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => navigate("/products")}
            data-testid="button-hero-products"
            className="px-8 py-3 text-base"
          >
            {t.hero.viewProducts}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("contact")}
            data-testid="button-hero-contact"
            className="px-8 py-3 text-base bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white hover:border-white/60"
          >
            {t.hero.contactSales}
          </Button>
        </motion.div>

        {/* Scroll hint */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          onClick={() => scrollTo("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
