import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";

function Logo3D() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["17deg", "-17deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-17deg", "17deg"]);
  const glareX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block cursor-pointer"
      style={{ perspective: "800px" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            translateZ: "-40px",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 rounded-3xl bg-black/40 blur-2xl scale-95 translate-y-6"
        />
        <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl px-10 py-8 overflow-hidden border border-white/20">
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([x, y]) =>
                  `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.18) 0%, transparent 70%)`
              ),
            }}
          />
          <img
            src="/oasis-logo.jpg"
            alt="Oasis Distribution"
            className="w-80 md:w-96 lg:w-[26rem] mx-auto object-contain relative z-10"
            draggable={false}
          />
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden bg-black min-h-[92vh] flex flex-col">
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero-food.png"
          alt="Latin Bakery Products"
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 md:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10"
        >
          <Logo3D />
        </motion.div>

        {/* Slogan */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight"
        >
          {t.hero.slogan1}{" "}
          <span className="text-primary">{t.hero.slogan2}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-sm md:text-base text-white/65 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          {t.hero.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("products")}
            data-testid="button-hero-products"
            className="px-8 py-3 text-base"
          >
            {t.hero.viewProducts}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("contact")}
            data-testid="button-hero-contact"
            className="px-8 py-3 text-base bg-white/10 border-white/40 text-white hover:bg-white/20 hover:text-white hover:border-white/60 backdrop-blur-sm"
          >
            {t.hero.contactSales}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
