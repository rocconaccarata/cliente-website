import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
              {t.about.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.about.heading}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.paragraph}
            </p>

            <ul className="space-y-3 mb-8">
              {t.about.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {t.about.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-xl md:text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/src/assets/images/about-warehouse.png"
                alt="Wholesale food distribution warehouse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-border max-w-[240px]">
              <p className="text-sm font-semibold text-foreground">
                {t.about.cardText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
