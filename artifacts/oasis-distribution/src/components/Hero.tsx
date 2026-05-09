import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden bg-black min-h-[92vh] flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero-food.png"
          alt="Latin Bakery Products"
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 md:px-6 py-16">
        {/* Large logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl px-10 py-6 inline-block">
            <img
              src="/oasis-logo.jpg"
              alt="Oasis Distribution"
              className="w-80 md:w-96 lg:w-[26rem] mx-auto object-contain drop-shadow-xl"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base md:text-lg text-white/75 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Your Latin food wholesale partner in Florida — supplying restaurants, cafés, markets, and food service operators.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("products")}
            data-testid="button-hero-products"
            className="px-8 py-3 text-base"
          >
            View Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("contact")}
            data-testid="button-hero-contact"
            className="px-8 py-3 text-base bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white hover:border-white/60 backdrop-blur-sm"
          >
            Contact Sales
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
