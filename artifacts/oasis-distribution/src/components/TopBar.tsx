import { Phone, Truck, Clock } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export function TopBar() {
  const { t } = useLang();

  return (
    <div className="bg-foreground text-background text-xs py-2 px-4 hidden md:block">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a
            href="tel:+17862775660"
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
          >
            <Phone size={11} />
            (786) 277-5660
          </a>
          <span className="flex items-center gap-1.5 text-white/70">
            <Clock size={11} />
            {t.topBar.cutoff}
          </span>
          <span className="flex items-center gap-1.5 text-white/70">
            <Truck size={11} />
            {t.topBar.delivery}
          </span>
        </div>
        <span className="text-white/50">{t.topBar.area}</span>
      </div>
    </div>
  );
}
