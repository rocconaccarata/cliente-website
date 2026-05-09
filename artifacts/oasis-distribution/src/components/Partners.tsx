import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const partners = [
  {
    name: "K&D Latin Food",
    url: "https://kdlatinfood.com/",
    logo: "https://kdlatinfood.com/wp-content/uploads/2025/08/Untitled-design-1.webp",
    products: ["Empanadas", "Pastelitos", "Cachitos", "Tequeños", "Pan de Jamón"],
    color: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    tag: "bg-orange-100 text-orange-800",
    descKey: "kd" as const,
  },
  {
    name: "PANNA Manufacturing",
    url: "https://www.pannatogo.com/",
    logo: "https://www.pannatogo.com/wp-content/uploads/2023/08/PANNA-MANUFACTURING.png",
    products: ["Cachitos", "Tequeños", "Empanadas", "Pandebonos", "Sauces"],
    color: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    tag: "bg-sky-100 text-sky-800",
    descKey: "panna" as const,
  },
];

const partnerDescriptions = {
  en: {
    kd: "Specialized in frozen Latin foods including empanadas, pastelitos, cachitos, tequeños, and pan de jamón for restaurants, supermarkets, distributors, and cafés.",
    panna: "Wholesale Latin bakery and frozen food manufacturer offering products such as cachitos, tequeños, empanadas, pandebonos, sauces, and food service solutions.",
  },
  es: {
    kd: "Especialista en comidas latinas congeladas incluyendo empanadas, pastelitos, cachitos, tequeños y pan de jamón para restaurantes, supermercados, distribuidores y cafés.",
    panna: "Fabricante mayorista de panadería latina y alimentos congelados con productos como cachitos, tequeños, empanadas, pandebonos, salsas y soluciones para servicio de alimentos.",
  },
};

export function Partners() {
  const { lang, t } = useLang();

  return (
    <section id="partners" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
            {t.partners.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.partners.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.partners.paragraph}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`bg-gradient-to-br ${partner.color} rounded-2xl border ${partner.border} p-8 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="bg-white rounded-xl p-3 shadow-sm border border-border/50 flex items-center justify-center" style={{ minHeight: 72, minWidth: 140 }}>
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 max-w-[160px] object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-partner-${index}`}
                  className="text-muted-foreground hover:text-primary transition-colors p-1 mt-1"
                  aria-label={`Visit ${partner.name} website`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{partner.name}</h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {partnerDescriptions[lang][partner.descKey]}
              </p>

              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                  {t.partners.keyProducts}
                </p>
                <div className="flex flex-wrap gap-2">
                  {partner.products.map((p, pi) => (
                    <span key={pi} className={`text-xs px-2.5 py-1 rounded-full font-medium ${partner.tag}`}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto px-4 py-4 bg-white/70 rounded-xl border border-border">
            {t.partners.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
