import { motion } from "framer-motion";
import { ShieldCheck, Anchor, Box, Zap } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const icons = [ShieldCheck, Anchor, Box, Zap];

export function Quality() {
  const { t } = useLang();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t.quality.heading}
            </h2>
            <p className="text-muted-foreground">
              {t.quality.paragraph}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.quality.items.map((item, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-border mb-4 text-primary">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
