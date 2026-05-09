import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "cachitos" | "tequenos" | "empanadas" | "colombian";

const products = [
  {
    id: "cachito-ham-cheese",
    name: "Cachito",
    variant: "Ham & Cheese",
    origin: "Venezuelan",
    category: "cachitos" as Category,
    description: "Finely chopped ham and mozzarella cheese stuffed and rolled in soft, golden bread dough. A Venezuelan breakfast staple.",
    servingSize: "1 piece (170g)",
    image: "/products/cachito-ham-cheese.jpg",
    tags: ["Frozen", "Ready to Bake", "Breakfast"],
    accent: "bg-amber-100 text-amber-800",
  },
  {
    id: "cachito-cheese",
    name: "Cachito",
    variant: "Cheese",
    origin: "Venezuelan",
    category: "cachitos" as Category,
    description: "Soft bread dough filled with rich, melted cheese. Light, flaky, and perfect for breakfast service or café menus.",
    servingSize: "1 piece (170g)",
    image: "/products/cachito-cheese.jpg",
    tags: ["Frozen", "Ready to Bake", "Breakfast"],
    accent: "bg-amber-100 text-amber-800",
  },
  {
    id: "tequeno-cheese",
    name: "Tequeño",
    variant: "Cheese",
    origin: "Venezuelan",
    category: "tequenos" as Category,
    description: "White cheese wrapped in golden puff pastry dough, fried or baked to crispy perfection. 12 pieces per container.",
    servingSize: "1 piece (74g)",
    image: "/products/tequeno-cheese.jpg",
    tags: ["Frozen", "Fry or Bake", "Snack"],
    accent: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "tequeno-guava-cheese",
    name: "Tequeño",
    variant: "Guava & Cheese",
    origin: "Venezuelan",
    category: "tequenos" as Category,
    description: "White cheese and sweet guava paste wrapped in puff pastry — a sweet-savory combination beloved across Latin America.",
    servingSize: "1 piece (74g)",
    image: "/products/tequeno-guava-cheese.jpg",
    tags: ["Frozen", "Fry or Bake", "Snack"],
    accent: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "empanada-arg-beef",
    name: "Empanada",
    variant: "Argentinian Beef",
    origin: "Argentinian",
    category: "empanadas" as Category,
    description: "Half-moon dough stuffed with ground beef, green onions, and hard-boiled eggs. A hearty classic, 4 pieces per container.",
    servingSize: "1 piece (85g)",
    image: "/products/empanada-argentinian-beef.jpg",
    tags: ["Frozen", "Ready to Bake", "Savory"],
    accent: "bg-orange-100 text-orange-800",
  },
  {
    id: "empanada-arg-chicken",
    name: "Empanada",
    variant: "Argentinian Chicken",
    origin: "Argentinian",
    category: "empanadas" as Category,
    description: "Flaky pastry filled with seasoned shredded chicken. A lighter option ideal for food service and catering.",
    servingSize: "1 piece (85g)",
    image: "/products/empanada-argentinian-chicken.jpg",
    tags: ["Frozen", "Ready to Bake", "Savory"],
    accent: "bg-orange-100 text-orange-800",
  },
  {
    id: "empanada-arg-spinach",
    name: "Empanada",
    variant: "Argentinian Spinach",
    origin: "Argentinian",
    category: "empanadas" as Category,
    description: "Golden pastry stuffed with seasoned spinach filling. A vegetarian-friendly option for diverse menus.",
    servingSize: "1 piece (85g)",
    image: "/products/empanada-argentinian-spinach.jpg",
    tags: ["Frozen", "Ready to Bake", "Vegetarian"],
    accent: "bg-orange-100 text-orange-800",
  },
  {
    id: "empanada-ven-cheese",
    name: "Empanada",
    variant: "Venezuelan Cheese",
    origin: "Venezuelan",
    category: "empanadas" as Category,
    description: "Corn dough empanada filled with white cheese — a Venezuelan staple served at breakfast and throughout the day.",
    servingSize: "1 piece",
    image: "/products/empanada-venezolana-cheese.jpg",
    tags: ["Frozen", "Ready to Fry/Bake", "Breakfast"],
    accent: "bg-red-100 text-red-800",
  },
  {
    id: "empanada-ven-chicken",
    name: "Empanada",
    variant: "Venezuelan Chicken",
    origin: "Venezuelan",
    category: "empanadas" as Category,
    description: "Corn dough filled with tender seasoned chicken. A versatile and crowd-pleasing option for any meal service.",
    servingSize: "1 piece",
    image: "/products/empanada-venezolana-chicken.jpg",
    tags: ["Frozen", "Ready to Fry/Bake", "Savory"],
    accent: "bg-red-100 text-red-800",
  },
  {
    id: "empanada-ven-beef",
    name: "Empanada",
    variant: "Venezuelan Ground Beef",
    origin: "Venezuelan",
    category: "empanadas" as Category,
    description: "Corn dough stuffed with seasoned ground beef. Rich and satisfying — a top seller for restaurants and food trucks.",
    servingSize: "1 piece",
    image: "/products/empanada-venezolana-beef.jpg",
    tags: ["Frozen", "Ready to Fry/Bake", "Savory"],
    accent: "bg-red-100 text-red-800",
  },
  {
    id: "empanada-ven-shredded-beef",
    name: "Empanada",
    variant: "Venezuelan Shredded Beef",
    origin: "Venezuelan",
    category: "empanadas" as Category,
    description: "Corn dough with slow-cooked shredded beef filling. Bold flavor, ideal for wholesale volume food service.",
    servingSize: "1 piece",
    image: "/products/empanada-venezolana-shredded-beef.jpg",
    tags: ["Frozen", "Ready to Fry/Bake", "Savory"],
    accent: "bg-red-100 text-red-800",
  },
  {
    id: "pandebono",
    name: "Pandebono",
    variant: "Classic Cheese",
    origin: "Colombian",
    category: "colombian" as Category,
    description: "White cheese and tapioca flour baked into small, puffy buns. Crispy outside, light and chewy inside. 4 pieces per container.",
    servingSize: "1 piece (57g)",
    image: "/products/pandebono.jpg",
    tags: ["Frozen", "Ready to Bake", "Bread"],
    accent: "bg-lime-100 text-lime-800",
  },
  {
    id: "empanada-colombiana",
    name: "Empanada",
    variant: "Colombian Style",
    origin: "Colombian",
    category: "colombian" as Category,
    description: "Colombian-style corn empanada with a distinct flavor profile. Perfect for authentic Latin menus and specialty food programs.",
    servingSize: "1 piece",
    image: "/products/empanada-colombiana.jpg",
    tags: ["Frozen", "Ready to Fry/Bake", "Savory"],
    accent: "bg-lime-100 text-lime-800",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Products", value: "all" },
  { label: "Cachitos", value: "cachitos" },
  { label: "Tequeños", value: "tequenos" },
  { label: "Empanadas", value: "empanadas" },
  { label: "Colombian", value: "colombian" },
];

export function Products() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
            PANNA Manufacturing Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Product Catalog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium frozen Latin bakery products distributed wholesale across South Florida. All items are available in food service case quantities.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              data-testid={`filter-${f.value}`}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === f.value
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-white text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
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
                  <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow-sm">
                    {product.origin}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-1">
                    <h3 className="text-base font-bold text-foreground leading-tight">{product.name}</h3>
                    <p className={`text-xs font-semibold px-2 py-0.5 rounded-full inline-block mt-1 ${product.accent}`}>
                      {product.variant}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground mt-2 mb-4 flex-1 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <div className="border-t border-border pt-3 flex flex-wrap gap-1.5">
                    {product.tags.map((tag, ti) => (
                      <span key={ti} className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground ml-auto">
                      {product.servingSize}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 bg-secondary/50 rounded-2xl p-8 border border-border text-center"
        >
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            All products are manufactured by <strong className="text-foreground">PANNA Manufacturing</strong> — an SQF-certified, USDA-approved Latin food producer. Available in food service case quantities for restaurants, cafés, supermarkets, and wholesale buyers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
