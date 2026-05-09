import { motion } from "framer-motion";

const categories = [
  {
    name: "Cachitos",
    origin: "Venezuelan",
    description: "Finely chopped ham and cheese stuffed and rolled in soft dough. A beloved Venezuelan breakfast staple, served as a snack or at any time of the day.",
    servingSize: "1 piece (170g)",
    variants: ["Ham & Cheese", "Cheese"],
    tags: ["Frozen", "Ready to Bake", "Breakfast"],
    image: "/src/assets/images/product-cachitos.png",
    color: "from-amber-50 to-orange-50",
    accent: "bg-amber-100 text-amber-800",
  },
  {
    name: "Tequeños",
    origin: "Venezuelan",
    description: "White cheese and guava wrapped in puff pastry dough, fried or baked to golden perfection. Excellent for breakfast or as a snack. 12 pieces per container.",
    servingSize: "1 piece (74g)",
    variants: ["Cheese", "Guava & Cheese"],
    tags: ["Frozen", "Ready to Fry/Bake", "Snack"],
    image: "/src/assets/images/product-tequenos.png",
    color: "from-yellow-50 to-amber-50",
    accent: "bg-yellow-100 text-yellow-800",
  },
  {
    name: "Empanadas",
    origin: "Argentinian",
    description: "Half-moon shaped dough stuffed with ground beef, green onions, and hard-boiled eggs. A hearty classic, perfect for breakfast, lunch, or as a snack. 4 pieces per container.",
    servingSize: "1 piece (85g)",
    variants: ["Beef"],
    tags: ["Frozen", "Ready to Bake", "Savory"],
    image: "/src/assets/images/product-empanadas.png",
    color: "from-orange-50 to-red-50",
    accent: "bg-orange-100 text-orange-800",
  },
  {
    name: "Pandebono",
    origin: "Colombian",
    description: "A delicious cheese and dough mixture rolled into a small bun and baked golden. Delightfully crispy on the outside, decadently soft on the inside. 4 pieces per container.",
    servingSize: "1 piece (57g)",
    variants: ["Classic Cheese"],
    tags: ["Frozen", "Ready to Bake", "Bread"],
    image: null,
    color: "from-lime-50 to-green-50",
    accent: "bg-lime-100 text-lime-800",
  },
  {
    name: "Arepas",
    origin: "Latin American",
    description: "Traditional corn cakes made with quality masarepa flour. Versatile and ready to heat — ideal for breakfast plates, sandwich builds, and side dishes.",
    servingSize: "Per unit",
    variants: ["Plain", "Cheese Filled"],
    tags: ["Frozen", "Heat & Serve", "Versatile"],
    image: "/src/assets/images/product-arepas.png",
    color: "from-sky-50 to-blue-50",
    accent: "bg-sky-100 text-sky-800",
  },
  {
    name: "Yuca Bites",
    origin: "Latin American",
    description: "Crispy on the outside, soft and fluffy on the inside — these yuca bites are a crowd-pleasing appetizer and side dish for restaurants and cafés.",
    servingSize: "Per serving",
    variants: ["Classic", "Seasoned"],
    tags: ["Frozen", "Ready to Fry", "Appetizer"],
    image: null,
    color: "from-teal-50 to-cyan-50",
    accent: "bg-teal-100 text-teal-800",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
            PANNA Manufacturing Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Product Catalog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium frozen Latin bakery products distributed wholesale across South Florida. All items are frozen, consistent in quality, and available in food service volumes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((product, index) => (
            <motion.div
              key={index}
              data-testid={`card-product-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col"
            >
              <div className={`aspect-[16/9] bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <span className="text-4xl font-black text-foreground/10 uppercase tracking-tighter">{product.name}</span>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-foreground shadow-sm">
                  Available Wholesale
                </div>
                <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow-sm">
                  {product.origin}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2 mt-1">{product.servingSize}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                  {product.description}
                </p>

                <div className="border-t border-border pt-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">Variants</p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.variants.map((v, vi) => (
                        <span key={vi} className={`text-xs px-2.5 py-1 rounded-full font-medium ${product.accent}`}>
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.tags.map((tag, ti) => (
                      <span key={ti} className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 bg-secondary/50 rounded-2xl p-8 border border-border text-center"
        >
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            All products are sourced from <strong className="text-foreground">PANNA Manufacturing</strong> — an established Latin food manufacturer with SQF certification and USDA approval. Available in food service case quantities for restaurants, cafés, and wholesale buyers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
