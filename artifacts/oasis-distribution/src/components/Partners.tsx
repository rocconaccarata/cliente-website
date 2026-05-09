import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "K&D Latin Food",
    url: "https://kdlatinfood.com/",
    logo: "https://kdlatinfood.com/wp-content/uploads/2025/08/Untitled-design-1.webp",
    description:
      "Specialized in frozen Latin foods including empanadas, pastelitos, cachitos, tequeños, and pan de jamón for restaurants, supermarkets, distributors, and cafés.",
    products: ["Empanadas", "Pastelitos", "Cachitos", "Tequeños", "Pan de Jamón"],
    color: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    tag: "bg-orange-100 text-orange-800",
    logoBg: "bg-white",
  },
  {
    name: "PANNA Manufacturing",
    url: "https://www.pannatogo.com/",
    logo: "https://www.pannatogo.com/wp-content/uploads/2023/08/PANNA-MANUFACTURING.png",
    description:
      "Wholesale Latin bakery and frozen food manufacturer offering products such as cachitos, tequeños, empanadas, pandebonos, sauces, and food service solutions.",
    products: ["Cachitos", "Tequeños", "Empanadas", "Pandebonos", "Sauces"],
    color: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    tag: "bg-sky-100 text-sky-800",
    logoBg: "bg-white",
  },
];

export function Partners() {
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
            Trusted Sources
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Manufacturing Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oasis Distribution works with established Latin food manufacturers to bring consistent, high-quality products to food service and wholesale clients across Florida.
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
                <div className={`${partner.logoBg} rounded-xl p-3 shadow-sm border border-border/50 flex items-center justify-center`} style={{ minHeight: 72, minWidth: 140 }}>
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 max-w-[160px] object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
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
                {partner.description}
              </p>

              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                  Key Products
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
            Oasis Distribution is an independent distributor and does not claim ownership of partner brands. Brand names are used only to identify manufacturing partners and product sources.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
