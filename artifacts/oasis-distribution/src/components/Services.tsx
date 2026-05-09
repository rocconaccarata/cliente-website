import React from "react";
import { motion } from "framer-motion";
import { 
  Truck, 
  Croissant, 
  Store, 
  ChefHat, 
  Package, 
  Snowflake 
} from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Food Service Distribution",
      description: "Comprehensive distribution services tailored for the demanding needs of food service operators.",
      icon: Truck
    },
    {
      title: "Wholesale Latin Bakery",
      description: "Consistent, high-quality traditional Latin pastries ready for your display case.",
      icon: Croissant
    },
    {
      title: "Convenience Store Program",
      description: "High-turnover Latin food programs designed for quick-service convenience environments.",
      icon: Store
    },
    {
      title: "Restaurant & Café Supply",
      description: "Reliable ingredient and ready-to-bake supply for busy restaurant and café kitchens.",
      icon: ChefHat
    },
    {
      title: "Private Label Support",
      description: "Partnership opportunities for established brands looking for distribution reach.",
      icon: Package
    },
    {
      title: "Frozen Logistics",
      description: "Expert cold-chain management ensuring product integrity from our warehouse to your freezer.",
      icon: Snowflake
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Distribution Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide specialized supply chain solutions designed specifically for the food service industry.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={item}
                className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
