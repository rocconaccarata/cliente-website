import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";

export function CatalogCTA() {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="catalog" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          {t.catalogCta.heading}
        </h2>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {t.catalogCta.paragraph}
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="text-primary font-semibold px-8"
          onClick={() => scrollTo("contact")}
          data-testid="button-catalog-cta"
        >
          {t.catalogCta.button}
        </Button>
      </div>
    </section>
  );
}
