import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Partner = "kd" | "panna";

const partners = {
  kd: {
    name: "K&D Latin Food",
    url: "https://kdlatinfood.com/",
    tagline: "Frozen Latin foods made in South Florida",
    accentFrom: "from-orange-500",
    accentTo: "to-red-500",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-800",
    borderActive: "border-orange-400",
    bgLight: "bg-orange-50",
  },
  panna: {
    name: "PANNA Manufacturing",
    url: "https://www.pannatogo.com/",
    tagline: "Wholesale Latin bakery & frozen food manufacturer",
    accentFrom: "from-sky-500",
    accentTo: "to-blue-600",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-800",
    borderActive: "border-sky-400",
    bgLight: "bg-sky-50",
  },
};

const kdProducts = [
  {
    id: "kd-pastelitos",
    name: "Pastelitos",
    variant: "Classic",
    description: "Flaky fried pastry dough filled with savory or sweet fillings. A staple of Latin American street food, perfect for cafés and restaurants.",
    image: "/products/kd/pastelitos.webp",
    tags: ["Frozen", "Ready to Fry", "Snack"],
  },
  {
    id: "kd-empanadas-ven",
    name: "Empanadas Venezolanas",
    variant: "Venezuelan Style",
    description: "Corn-dough empanadas with authentic Venezuelan-style fillings. Crispy outside, hearty inside — a top seller for food service operators.",
    image: "/products/kd/empanadas-venezolanas.webp",
    tags: ["Frozen", "Ready to Fry", "Savory"],
  },
  {
    id: "kd-empanadas-arg",
    name: "Empanadas Argentinas",
    variant: "Argentinian Style",
    description: "Baked wheat-dough empanadas with classic Argentinian fillings. Ideal for wholesale restaurant menus and catering service.",
    image: "/products/kd/empanadas-argentinas.webp",
    tags: ["Frozen", "Ready to Bake", "Savory"],
  },
  {
    id: "kd-cachitos",
    name: "Cachitos",
    variant: "Venezuelan",
    description: "Soft rolled bread dough filled with ham and cheese — Venezuela's most beloved breakfast item, now available for wholesale food service.",
    image: "/products/kd/cachitos.webp",
    tags: ["Frozen", "Ready to Bake", "Breakfast"],
  },
  {
    id: "kd-tequenos",
    name: "Tequeños",
    variant: "Cheese",
    description: "Golden cheese sticks wrapped in bread dough. A crowd-pleasing snack and appetizer served at restaurants, events, and cafés.",
    image: "/products/kd/tequenos.webp",
    tags: ["Frozen", "Fry or Bake", "Appetizer"],
  },
  {
    id: "kd-pan-de-jamon",
    name: "Pan de Jamón",
    variant: "Classic",
    description: "Traditional Venezuelan-style ham bread, rolled with ham and olives. Available year-round for restaurants and specialty food retailers.",
    image: "/products/kd/pan-de-jamon.webp",
    tags: ["Frozen", "Ready to Bake", "Specialty"],
  },
];

const pannaProducts = [
  {
    id: "panna-cachito-ham",
    name: "Cachito",
    variant: "Ham & Cheese",
    description: "Finely chopped ham and mozzarella stuffed in soft, golden bread dough. A Venezuelan breakfast staple. 1 piece (170g).",
    image: "/products/cachito-ham-cheese.jpg",
    tags: ["Frozen", "Ready to Bake", "Breakfast"],
  },
  {
    id: "panna-cachito-cheese",
    name: "Cachito",
    variant: "Cheese",
    description: "Soft bread dough filled with rich melted cheese. Light and flaky — perfect for breakfast service or café menus. 1 piece (170g).",
    image: "/products/cachito-cheese.jpg",
    tags: ["Frozen", "Ready to Bake", "Breakfast"],
  },
  {
    id: "panna-tequeno-cheese",
    name: "Tequeño",
    variant: "Cheese",
    description: "White cheese wrapped in golden puff pastry, fried or baked to crispy perfection. 12 pieces per container, 74g each.",
    image: "/products/tequeno-cheese.jpg",
    tags: ["Frozen", "Fry or Bake", "Snack"],
  },
  {
    id: "panna-tequeno-guava",
    name: "Tequeño",
    variant: "Guava & Cheese",
    description: "White cheese and sweet guava paste in puff pastry — a sweet-savory combination beloved across Latin America. 74g each.",
    image: "/products/tequeno-guava-cheese.jpg",
    tags: ["Frozen", "Fry or Bake", "Snack"],
  },
  {
    id: "panna-emp-arg-beef",
    name: "Empanada",
    variant: "Argentinian Beef",
    description: "Half-moon dough stuffed with ground beef, green onions, and hard-boiled eggs. 4 pieces per container, 85g each.",
    image: "/products/empanada-argentinian-beef.jpg",
    tags: ["Frozen", "Ready to Bake", "Savory"],
  },
  {
    id: "panna-emp-arg-chicken",
    name: "Empanada",
    variant: "Argentinian Chicken",
    description: "Flaky pastry filled with seasoned shredded chicken. A lighter option for food service and catering menus. 85g each.",
    image: "/products/empanada-argentinian-chicken.jpg",
    tags: ["Frozen", "Ready to Bake", "Savory"],
  },
  {
    id: "panna-emp-arg-spinach",
    name: "Empanada",
    variant: "Argentinian Spinach",
    description: "Golden pastry stuffed with seasoned spinach filling — a vegetarian-friendly option for diverse menus. 85g each.",
    image: "/products/empanada-argentinian-spinach.jpg",
    tags: ["Frozen", "Ready to Bake", "Vegetarian"],
  },
  {
    id: "panna-emp-ven-cheese",
    name: "Empanada",
    variant: "Venezuelan Cheese",
    description: "Corn dough empanada filled with white cheese — a Venezuelan staple for breakfast and all-day menus.",
    image: "/products/empanada-venezolana-cheese.jpg",
    tags: ["Frozen", "Fry or Bake", "Breakfast"],
  },
  {
    id: "panna-emp-ven-chicken",
    name: "Empanada",
    variant: "Venezuelan Chicken",
    description: "Corn dough filled with tender seasoned chicken. Versatile and crowd-pleasing for any meal service.",
    image: "/products/empanada-venezolana-chicken.jpg",
    tags: ["Frozen", "Fry or Bake", "Savory"],
  },
  {
    id: "panna-emp-ven-beef",
    name: "Empanada",
    variant: "Venezuelan Ground Beef",
    description: "Corn dough stuffed with seasoned ground beef. Rich and satisfying — a top seller for restaurants and food trucks.",
    image: "/products/empanada-venezolana-beef.jpg",
    tags: ["Frozen", "Fry or Bake", "Savory"],
  },
  {
    id: "panna-emp-ven-shredded",
    name: "Empanada",
    variant: "Venezuelan Shredded Beef",
    description: "Corn dough with slow-cooked shredded beef. Bold flavor, ideal for wholesale volume food service.",
    image: "/products/empanada-venezolana-shredded-beef.jpg",
    tags: ["Frozen", "Fry or Bake", "Savory"],
  },
  {
    id: "panna-pandebono",
    name: "Pandebono",
    variant: "Classic Cheese",
    description: "White cheese and tapioca baked into puffy buns. Crispy outside, light and chewy inside. 4 pieces per container, 57g each.",
    image: "/products/pandebono.jpg",
    tags: ["Frozen", "Ready to Bake", "Bread"],
  },
  {
    id: "panna-emp-colombiana",
    name: "Empanada",
    variant: "Colombian Style",
    description: "Colombian-style corn empanada with a distinct flavor profile. Perfect for authentic Latin menus and specialty programs.",
    image: "/products/empanada-colombiana.jpg",
    tags: ["Frozen", "Fry or Bake", "Savory"],
  },
];

const productsByPartner: Record<Partner, typeof kdProducts> = {
  kd: kdProducts,
  panna: pannaProducts,
};

export function Products() {
  const [activePartner, setActivePartner] = useState<Partner>("kd");
  const p = partners[activePartner];
  const products = productsByPartner[activePartner];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
            Wholesale Catalog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latin Food Products Available for Wholesale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse by manufacturing partner. All products are available in food service case quantities for restaurants, cafés, supermarkets, and wholesale buyers.
          </p>
        </motion.div>

        {/* Partner Switcher */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {(Object.keys(partners) as Partner[]).map((key) => {
            const partner = partners[key];
            const isActive = activePartner === key;
            return (
              <button
                key={key}
                data-testid={`tab-partner-${key}`}
                onClick={() => setActivePartner(key)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  isActive
                    ? `${partner.borderActive} ${partner.bgLight} shadow-md`
                    : "border-border bg-white hover:border-border/70 hover:shadow-sm"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${partner.accentFrom} ${partner.accentTo} flex items-center justify-center shrink-0`}>
                  <span className="text-white font-black text-xs">{key === "kd" ? "K&D" : "P"}</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground text-sm leading-tight">{partner.name}</div>
                  <div className="text-xs text-muted-foreground leading-tight mt-0.5">{partner.tagline}</div>
                </div>
                {isActive && (
                  <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${partner.badgeBg} ${partner.badgeText}`}>
                    Viewing
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active partner header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePartner}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`flex items-center justify-between mb-8 p-5 rounded-2xl border ${p.bgLight} border-border`}>
              <div>
                <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{products.length} products available for wholesale</p>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-partner-catalog-${activePartner}`}
                className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Visit partner site <ExternalLink size={13} />
              </a>
            </div>

            {/* Product grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  data-testid={`card-product-${product.id}`}
                  className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col"
                >
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.name} ${product.variant}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-foreground shadow-sm">
                      Available Wholesale
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <div className="mb-2">
                      <h3 className="text-base font-bold text-foreground leading-tight">{product.name}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full inline-block mt-1 ${p.badgeBg} ${p.badgeText}`}>
                        {product.variant}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 mb-3 flex-1 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                    <div className="border-t border-border pt-3 flex flex-wrap gap-1.5">
                      {product.tags.map((tag, ti) => (
                        <span key={ti} className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 bg-secondary/50 rounded-2xl p-8 border border-border text-center"
        >
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Oasis Distribution is an independent distributor. Products are manufactured by <strong className="text-foreground">K&D Latin Food</strong> and <strong className="text-foreground">PANNA Manufacturing</strong>. Product availability may vary — contact our sales team for current inventory and pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
