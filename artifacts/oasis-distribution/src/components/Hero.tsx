import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <img
          src="/src/assets/images/hero-food.png"
          alt="Latin Bakery Products"
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold tracking-wider rounded-full mb-6">
              WHOLESALE & FOOD SERVICE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
              Your Latin Food Distribution Partner in Florida
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Supplying restaurants, cafés, markets, and food service operators
              with high-quality Latin bakery and frozen food products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollTo("products")} data-testid="button-hero-products">
                View Products
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("contact")} data-testid="button-hero-contact">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
