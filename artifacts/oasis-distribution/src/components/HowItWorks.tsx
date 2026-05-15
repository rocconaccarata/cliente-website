import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Truck } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const icons = [Phone, ClipboardCheck, Truck];

export function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
            {t.howItWorks.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.howItWorks.heading}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t.howItWorks.subheading}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px bg-border z-0" />

          <div className="grid md:grid-cols-3 gap-10 relative z-10">
            {t.howItWorks.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-5 border-4 border-white shadow-md relative">
                    <Icon className="text-primary" size={28} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center bg-secondary/40 rounded-2xl px-6 py-8 border border-border"
        >
          <p className="text-foreground font-semibold mb-1">{t.howItWorks.ctaText}</p>
          <a
            href="tel:+17862775660"
            className="text-2xl font-bold text-primary hover:underline"
          >
            (786) 277-5660
          </a>
          <span className="text-muted-foreground mx-3">·</span>
          <a
            href="https://wa.me/17862775660"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
