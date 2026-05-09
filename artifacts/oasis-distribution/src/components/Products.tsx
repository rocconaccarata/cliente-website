import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

type Partner = "kd" | "panna";

const partners = {
  kd: {
    name: "K&D Latin Food",
    url: "https://kdlatinfood.com/",
    logo: "https://kdlatinfood.com/wp-content/uploads/2025/08/Untitled-design-1.webp",
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
    logo: "https://www.pannatogo.com/wp-content/uploads/2023/08/PANNA-MANUFACTURING.png",
    tagline: "Wholesale Latin bakery & frozen food manufacturer",
    accentFrom: "from-sky-500",
    accentTo: "to-blue-600",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-800",
    borderActive: "border-sky-400",
    bgLight: "bg-sky-50",
  },
};

type KDCategory = "all" | "pastelitos" | "emp-venezolana" | "emp-argentina" | "cachitos" | "tequenos" | "pan-de-jamon";
type PannaCategory = "all" | "cachitos" | "tequenos" | "emp-venezolana" | "emp-argentina" | "pandebono";

interface Product {
  id: string;
  name: string;
  variant: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
}

const kdProducts: Product[] = [
  // Pastelitos
  { id: "kd-past-queso-papa", name: "Pastelito", variant: "Queso y Papa", description: "Flaky fried pastry filled with cheese and potato. A classic Venezuelan street snack, pre-fried and ready to heat.", image: "/products/kd/variants/past-queso-papa.webp", tags: ["Frozen", "Pre-Fried", "Snack"], category: "pastelitos" },
  { id: "kd-past-carne", name: "Pastelito", variant: "Carne", description: "Crispy dough filled with seasoned ground beef. A top-selling item for cafés, lunch counters, and food trucks.", image: "/products/kd/variants/past-carne.webp", tags: ["Frozen", "Pre-Fried", "Savory"], category: "pastelitos" },
  { id: "kd-past-pollo", name: "Pastelito", variant: "Pollo", description: "Flaky pastry stuffed with seasoned shredded chicken. Light, flavorful and a great option for diverse menus.", image: "/products/kd/variants/past-pollo.webp", tags: ["Frozen", "Pre-Fried", "Savory"], category: "pastelitos" },
  { id: "kd-past-queso", name: "Pastelito", variant: "Queso", description: "Simple and crowd-pleasing — fried dough filled with melted white cheese. A vegetarian-friendly staple.", image: "/products/kd/variants/past-queso.webp", tags: ["Frozen", "Pre-Fried", "Vegetarian"], category: "pastelitos" },
  { id: "kd-past-jamon-queso", name: "Pastelito", variant: "Jamón y Queso", description: "Ham and cheese tucked inside crispy pastry dough — a classic combination that never fails.", image: "/products/kd/variants/past-jamon-queso.webp", tags: ["Frozen", "Pre-Fried", "Snack"], category: "pastelitos" },
  { id: "kd-past-pizza", name: "Pastelito", variant: "Pizza", description: "Tomato sauce and cheese in a golden fried pastry — a playful twist on the classic pastelito, popular with all ages.", image: "/products/kd/variants/past-pizza.webp", tags: ["Frozen", "Pre-Fried", "Snack"], category: "pastelitos" },

  // Empanadas Venezolanas
  { id: "kd-ev-queso", name: "Empanada Venezolana", variant: "Queso", description: "Corn masa filled with white cheese, pan-fried to a golden crisp. The most traditional Venezuelan empanada.", image: "/products/kd/variants/emp-ven-queso.webp", tags: ["Frozen", "Pre-Fried", "Vegetarian"], category: "emp-venezolana" },
  { id: "kd-ev-mechada", name: "Empanada Venezolana", variant: "Carne Mechada", description: "Shredded beef slow-cooked with peppers and spices, wrapped in corn dough. A Venezuelan household staple.", image: "/products/kd/variants/emp-ven-mechada.webp", tags: ["Frozen", "Pre-Fried", "Savory"], category: "emp-venezolana" },
  { id: "kd-ev-pollo", name: "Empanada Venezolana", variant: "Pollo", description: "Tender seasoned chicken inside corn masa dough. A lighter option that's consistently popular in food service.", image: "/products/kd/variants/emp-ven-pollo.webp", tags: ["Frozen", "Pre-Fried", "Savory"], category: "emp-venezolana" },
  { id: "kd-ev-molida", name: "Empanada Venezolana", variant: "Carne Molida", description: "Seasoned ground beef in corn dough — hearty, flavorful and a top seller for high-volume food service.", image: "/products/kd/variants/emp-ven-molida.webp", tags: ["Frozen", "Pre-Fried", "Savory"], category: "emp-venezolana" },
  { id: "kd-ev-pabellon", name: "Empanada Venezolana", variant: "Pabellón", description: "Inspired by Venezuela's national dish — black beans, shredded beef, and sweet plantain in corn dough.", image: "/products/kd/variants/emp-ven-pabellon.webp", tags: ["Frozen", "Pre-Fried", "Specialty"], category: "emp-venezolana" },
  { id: "kd-ev-jamon-queso", name: "Empanada Venezolana", variant: "Jamón y Queso", description: "Ham and cheese filling in crispy corn masa — a breakfast and snack favorite for café menus.", image: "/products/kd/variants/emp-ven-jamon-queso.webp", tags: ["Frozen", "Pre-Fried", "Breakfast"], category: "emp-venezolana" },
  { id: "kd-ev-cazon", name: "Empanada Venezolana", variant: "Cazón", description: "Shark fish filling in corn dough — a coastal Venezuelan delicacy ideal for specialty restaurant menus.", image: "/products/kd/variants/emp-ven-cazon.webp", tags: ["Frozen", "Pre-Fried", "Seafood"], category: "emp-venezolana" },
  { id: "kd-ev-camaron", name: "Empanada Venezolana", variant: "Camarón", description: "Seasoned shrimp inside golden corn masa. A premium seafood option for upscale casual dining.", image: "/products/kd/variants/emp-ven-camaron.webp", tags: ["Frozen", "Pre-Fried", "Seafood"], category: "emp-venezolana" },
  { id: "kd-ev-mariscos", name: "Empanada Venezolana", variant: "Mariscos", description: "Mixed seafood filling inside crispy corn dough. Perfect for coastal-themed restaurants and seafood menus.", image: "/products/kd/variants/emp-ven-mariscos.webp", tags: ["Frozen", "Pre-Fried", "Seafood"], category: "emp-venezolana" },
  { id: "kd-ev-chorizo-queso", name: "Empanada Venezolana", variant: "Chorizo y Queso", description: "Smoky chorizo and melted cheese in corn masa dough — bold flavor that stands out on any menu.", image: "/products/kd/variants/emp-ven-chorizo-queso.webp", tags: ["Frozen", "Pre-Fried", "Savory"], category: "emp-venezolana" },

  // Empanadas Argentinas
  { id: "kd-ea-carne", name: "Empanada Argentina", variant: "Carne", description: "Wheat dough filled with seasoned ground beef, hard-boiled egg, and green onion. The Argentinian classic.", image: "/products/kd/variants/emp-arg-carne.webp", tags: ["Frozen", "Bake or Fry", "Savory"], category: "emp-argentina" },
  { id: "kd-ea-pollo", name: "Empanada Argentina", variant: "Pollo", description: "Flaky wheat pastry filled with seasoned chicken. A lighter alternative that suits a wide range of menus.", image: "/products/kd/variants/emp-arg-pollo.webp", tags: ["Frozen", "Bake or Fry", "Savory"], category: "emp-argentina" },
  { id: "kd-ea-jamon-queso", name: "Empanada Argentina", variant: "Jamón y Queso", description: "Ham and melted cheese in a buttery wheat dough — simple, satisfying, and universally popular.", image: "/products/kd/variants/emp-arg-jamon-queso.webp", tags: ["Frozen", "Bake or Fry", "Savory"], category: "emp-argentina" },
  { id: "kd-ea-espinaca", name: "Empanada Argentina", variant: "Espinaca y Queso", description: "Spinach and cheese filling in flaky Argentinian pastry — a vegetarian-friendly menu staple.", image: "/products/kd/variants/emp-arg-espinaca.webp", tags: ["Frozen", "Bake or Fry", "Vegetarian"], category: "emp-argentina" },

  // Cachitos
  { id: "kd-cach-queso", name: "Cachito", variant: "Queso", description: "Soft bread dough rolled around melted white cheese. A Venezuelan breakfast icon, ready to bake.", image: "/products/kd/variants/cachito-queso.webp", tags: ["Frozen", "Ready to Bake", "Breakfast"], category: "cachitos" },
  { id: "kd-cach-jamon-queso", name: "Cachito", variant: "Jamón y Queso", description: "Ham and cheese inside soft Venezuelan bread dough — the most popular cachito for food service.", image: "/products/kd/variants/cachito-jamon-queso.webp", tags: ["Frozen", "Ready to Bake", "Breakfast"], category: "cachitos" },
  { id: "kd-cach-jamon", name: "Cachito", variant: "Jamón", description: "Classic ham-filled cachito — simple and satisfying. A high-volume breakfast item for cafés and bakeries.", image: "/products/kd/variants/cachito-jamon.webp", tags: ["Frozen", "Ready to Bake", "Breakfast"], category: "cachitos" },
  { id: "kd-cach-chorizo-queso", name: "Cachito", variant: "Chorizo y Queso", description: "Smoky chorizo and cheese in a soft bread roll — a bold, flavorful option for specialty breakfast menus.", image: "/products/kd/variants/cachito-chorizo-queso.webp", tags: ["Frozen", "Ready to Bake", "Breakfast"], category: "cachitos" },
  { id: "kd-cach-pavo-crema", name: "Cachito", variant: "Pavo y Crema", description: "Turkey and cream cheese filling in soft bread dough. A premium, lighter alternative for health-conscious menus.", image: "/products/kd/variants/cachito-pavo-crema.webp", tags: ["Frozen", "Ready to Bake", "Specialty"], category: "cachitos" },

  // Tequeños
  { id: "kd-teq-grande", name: "Tequeño", variant: "Queso Grande", description: "Large cheese sticks wrapped in golden dough — ideal as an appetizer or entrée side for restaurant service.", image: "/products/kd/variants/tequeno-queso-grande.webp", tags: ["Frozen", "Pre-Fried", "Appetizer"], category: "tequenos" },
  { id: "kd-teq-pequeno", name: "Tequeño", variant: "Queso Pequeño", description: "Bite-sized cheese tequeños, pre-fried and ready to heat. Perfect for parties, events, and catering.", image: "/products/kd/variants/tequeno-queso-pequeno.webp", tags: ["Frozen", "Pre-Fried", "Catering"], category: "tequenos" },
  { id: "kd-teq-guava", name: "Tequeño", variant: "Guava y Queso", description: "Sweet guava jam and cheese inside golden dough — a sweet-savory fan favorite for specialty menus.", image: "/products/kd/variants/tequeno-guava-queso.webp", tags: ["Frozen", "Pre-Fried", "Specialty"], category: "tequenos" },

  // Pan de Jamón
  { id: "kd-pdj-full", name: "Pan de Jamón", variant: "Classic", description: "Traditional Venezuelan rolled bread filled with ham, olives, and raisins. Available for year-round wholesale.", image: "/products/kd/variants/pan-de-jamon.webp", tags: ["Frozen", "Ready to Bake", "Specialty"], category: "pan-de-jamon" },
  { id: "kd-pdj-mini", name: "Pan de Jamón", variant: "Mini", description: "Individual mini portions of the beloved Venezuelan ham bread — ideal for catering trays and grab-and-go formats.", image: "/products/kd/variants/mini-pan-de-jamon.webp", tags: ["Frozen", "Ready to Bake", "Catering"], category: "pan-de-jamon" },
];

const pannaProducts: Product[] = [
  { id: "panna-cachito-ham", name: "Cachito", variant: "Ham & Cheese", description: "Finely chopped ham and mozzarella stuffed in soft, golden bread dough. A Venezuelan breakfast staple. 1 piece (170g).", image: "/products/cachito-ham-cheese.jpg", tags: ["Frozen", "Ready to Bake", "Breakfast"], category: "cachitos" },
  { id: "panna-cachito-cheese", name: "Cachito", variant: "Cheese", description: "Soft bread dough filled with rich melted cheese. Light and flaky — perfect for breakfast service or café menus. 1 piece (170g).", image: "/products/cachito-cheese.jpg", tags: ["Frozen", "Ready to Bake", "Breakfast"], category: "cachitos" },
  { id: "panna-tequeno-cheese", name: "Tequeño", variant: "Cheese", description: "White cheese wrapped in golden puff pastry, fried or baked to crispy perfection. 12 pieces per container, 74g each.", image: "/products/tequeno-cheese.jpg", tags: ["Frozen", "Fry or Bake", "Snack"], category: "tequenos" },
  { id: "panna-tequeno-guava", name: "Tequeño", variant: "Guava & Cheese", description: "White cheese and sweet guava paste in puff pastry — a sweet-savory combination beloved across Latin America. 74g each.", image: "/products/tequeno-guava-cheese.jpg", tags: ["Frozen", "Fry or Bake", "Snack"], category: "tequenos" },
  { id: "panna-emp-arg-beef", name: "Empanada Argentina", variant: "Ground Beef", description: "Half-moon dough stuffed with ground beef, green onions, and hard-boiled eggs. 4 pieces per container, 85g each.", image: "/products/empanada-argentinian-beef.jpg", tags: ["Frozen", "Ready to Bake", "Savory"], category: "emp-argentina" },
  { id: "panna-emp-arg-chicken", name: "Empanada Argentina", variant: "Chicken", description: "Flaky pastry filled with seasoned shredded chicken. A lighter option for food service and catering menus. 85g each.", image: "/products/empanada-argentinian-chicken.jpg", tags: ["Frozen", "Ready to Bake", "Savory"], category: "emp-argentina" },
  { id: "panna-emp-arg-spinach", name: "Empanada Argentina", variant: "Spinach", description: "Golden pastry stuffed with seasoned spinach filling — a vegetarian-friendly option for diverse menus. 85g each.", image: "/products/empanada-argentinian-spinach.jpg", tags: ["Frozen", "Ready to Bake", "Vegetarian"], category: "emp-argentina" },
  { id: "panna-emp-ven-cheese", name: "Empanada Venezolana", variant: "Cheese", description: "Corn dough empanada filled with white cheese — a Venezuelan staple for breakfast and all-day menus.", image: "/products/empanada-venezolana-cheese.jpg", tags: ["Frozen", "Fry or Bake", "Breakfast"], category: "emp-venezolana" },
  { id: "panna-emp-ven-chicken", name: "Empanada Venezolana", variant: "Chicken", description: "Corn dough filled with tender seasoned chicken. Versatile and crowd-pleasing for any meal service.", image: "/products/empanada-venezolana-chicken.jpg", tags: ["Frozen", "Fry or Bake", "Savory"], category: "emp-venezolana" },
  { id: "panna-emp-ven-beef", name: "Empanada Venezolana", variant: "Ground Beef", description: "Corn dough stuffed with seasoned ground beef. Rich and satisfying — a top seller for restaurants and food trucks.", image: "/products/empanada-venezolana-beef.jpg", tags: ["Frozen", "Fry or Bake", "Savory"], category: "emp-venezolana" },
  { id: "panna-emp-ven-shredded", name: "Empanada Venezolana", variant: "Shredded Beef", description: "Corn dough with slow-cooked shredded beef. Bold flavor, ideal for wholesale volume food service.", image: "/products/empanada-venezolana-shredded-beef.jpg", tags: ["Frozen", "Fry or Bake", "Savory"], category: "emp-venezolana" },
  { id: "panna-pandebono", name: "Pandebono", variant: "Classic Cheese", description: "White cheese and tapioca baked into puffy buns. Crispy outside, light and chewy inside. 4 pieces per container, 57g each.", image: "/products/pandebono.jpg", tags: ["Frozen", "Ready to Bake", "Bread"], category: "pandebono" },
  { id: "panna-emp-col", name: "Empanada Colombiana", variant: "Colombian Style", description: "Colombian-style corn empanada with a distinct flavor profile. Perfect for authentic Latin menus and specialty programs.", image: "/products/empanada-colombiana.jpg", tags: ["Frozen", "Fry or Bake", "Savory"], category: "emp-argentina" },
];

const kdCategories: { key: KDCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "pastelitos", label: "Pastelitos" },
  { key: "emp-venezolana", label: "Emp. Venezolanas" },
  { key: "emp-argentina", label: "Emp. Argentinas" },
  { key: "cachitos", label: "Cachitos" },
  { key: "tequenos", label: "Tequeños" },
  { key: "pan-de-jamon", label: "Pan de Jamón" },
];

const pannaCategories: { key: PannaCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "cachitos", label: "Cachitos" },
  { key: "tequenos", label: "Tequeños" },
  { key: "emp-venezolana", label: "Emp. Venezolanas" },
  { key: "emp-argentina", label: "Emp. Argentinas" },
  { key: "pandebono", label: "Pandebono" },
];

export function Products() {
  const { t } = useLang();
  const [activePartner, setActivePartner] = useState<Partner>("kd");
  const [kdCategory, setKdCategory] = useState<KDCategory>("all");
  const [pannaCategory, setPannaCategory] = useState<PannaCategory>("all");

  const p = partners[activePartner];

  const filteredKd = kdCategory === "all" ? kdProducts : kdProducts.filter((pr) => pr.category === kdCategory);
  const filteredPanna = pannaCategory === "all" ? pannaProducts : pannaProducts.filter((pr) => pr.category === pannaCategory);
  const products = activePartner === "kd" ? filteredKd : filteredPanna;

  const activeCategory = activePartner === "kd" ? kdCategory : pannaCategory;
  const categories = activePartner === "kd" ? kdCategories : pannaCategories;

  function setCategory(key: string) {
    if (activePartner === "kd") setKdCategory(key as KDCategory);
    else setPannaCategory(key as PannaCategory);
  }

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
            {t.products.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.products.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.products.paragraph}
          </p>
        </motion.div>

        {/* Partner Switcher */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {(Object.keys(partners) as Partner[]).map((key) => {
            const partner = partners[key];
            const isActive = activePartner === key;
            return (
              <button
                key={key}
                onClick={() => setActivePartner(key)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  isActive
                    ? `${partner.borderActive} ${partner.bgLight} shadow-md`
                    : "border-border bg-white hover:border-border/70 hover:shadow-sm"
                }`}
              >
                <div className="w-16 h-10 rounded-xl bg-white border border-border/50 flex items-center justify-center shrink-0 overflow-hidden px-1">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-8 max-w-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground text-sm leading-tight">{partner.name}</div>
                  <div className="text-xs text-muted-foreground leading-tight mt-0.5">{partner.tagline}</div>
                </div>
                {isActive && (
                  <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${partner.badgeBg} ${partner.badgeText}`}>
                    {t.products.viewing}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePartner}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                const count = cat.key === "all"
                  ? (activePartner === "kd" ? kdProducts.length : pannaProducts.length)
                  : (activePartner === "kd" ? kdProducts : pannaProducts).filter((pr) => pr.category === cat.key).length;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setCategory(cat.key)}
                    className={`text-sm px-4 py-1.5 rounded-full font-medium transition-all duration-200 border ${
                      isActive
                        ? `${p.badgeBg} ${p.badgeText} border-transparent shadow-sm`
                        : "bg-white border-border text-muted-foreground hover:border-border/70"
                    }`}
                  >
                    {cat.label}
                    <span className={`ml-1.5 text-xs font-normal ${isActive ? p.badgeText : "text-muted-foreground/60"}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Partner info bar */}
            <div className={`flex items-center justify-between mb-6 p-4 rounded-2xl border ${p.bgLight} border-border`}>
              <p className="text-sm text-muted-foreground">
                Showing <strong className="text-foreground">{products.length}</strong> products from <strong className="text-foreground">{p.name}</strong>
              </p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Visit partner site <ExternalLink size={13} />
              </a>
            </div>

            {/* Product grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col"
                  >
                    <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={`${product.name} ${product.variant}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-foreground shadow-sm">
                        Wholesale
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
              </motion.div>
            </AnimatePresence>
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
