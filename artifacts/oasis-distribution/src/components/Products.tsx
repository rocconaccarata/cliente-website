import React from "react";
import { motion } from "framer-motion";

export function Products() {
  const products = [
    {
      name: "Tequeños",
      description: "Crispy cheese-filled bread sticks, perfect for appetizers and events.",
      image: "/src/assets/images/product-tequenos.png",
      featured: true
    },
    {
      name: "Empanadas",
      description: "Golden savory hand pies with authentic, rich fillings.",
      image: "/src/assets/images/product-empanadas.png",
      featured: true
    },
    {
      name: "Arepas",
      description: "Traditional corn cakes, ready to heat and serve.",
      image: "/src/assets/images/product-arepas.png",
      featured: true
    },
    {
      name: "Cachitos",
      description: "Flaky filled pastries, a Venezuelan breakfast staple.",
      image: null,
      featured: false
    },
    {
      name: "Pandebonos",
      description: "Colombian cheese bread with a perfect chewy texture.",
      image: null,
      featured: false
    },
    {
      name: "Yuca Bites",
      description: "Crispy yuca appetizers that are crispy outside, soft inside.",
      image: null,
      featured: false
    },
    {
      name: "Sauces",
      description: "Authentic Latin sauces and condiments to complement any dish.",
      image: null,
      featured: false
    },
    {
      name: "Pastries",
      description: "Assorted Latin sweet pastries for your dessert selection.",
      image: null,
      featured: false
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Premium Product Lines
            </h2>
            <p className="text-lg text-muted-foreground">
              We stock the highest quality Latin bakery and frozen items, ready for volume food service distribution.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm group hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/50 text-muted-foreground font-medium">
                    {product.name}
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-foreground shadow-sm">
                  Available Wholesale
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
