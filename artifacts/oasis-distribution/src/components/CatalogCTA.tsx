import React from "react";
import { Button } from "@/components/ui/button";

export function CatalogCTA() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Need the Wholesale Catalog?
        </h2>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Our team can help you choose the right products for your business. Let's discuss volume requirements and delivery logistics.
        </p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="text-primary font-semibold px-8"
          onClick={() => scrollTo("contact")}
          data-testid="button-catalog-cta"
        >
          Request Catalog
        </Button>
      </div>
    </section>
  );
}
