import { useLang } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="bg-white inline-block p-2 rounded mb-5">
              <img
                src="/oasis-logo.jpg"
                alt="Oasis Distribution Logo"
                className="h-12 object-contain"
              />
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Florida-based Latin food distribution for restaurants, cafés, markets, and wholesale clients.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollTo("about")} className="text-muted hover:text-white transition-colors">{t.footer.nav.about}</button></li>
              <li><button onClick={() => scrollTo("partners")} className="text-muted hover:text-white transition-colors">{t.footer.nav.partners}</button></li>
              <li><button onClick={() => scrollTo("services")} className="text-muted hover:text-white transition-colors">{t.footer.nav.services}</button></li>
              <li><button onClick={() => scrollTo("products")} className="text-muted hover:text-white transition-colors">{t.footer.nav.products}</button></li>
              <li><button onClick={() => scrollTo("contact")} className="text-muted hover:text-white transition-colors">{t.footer.nav.contact}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">{t.footer.partners}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://kdlatinfood.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                  K&amp;D Latin Food
                </a>
              </li>
              <li>
                <a href="https://www.pannatogo.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                  PANNA Manufacturing
                </a>
              </li>
            </ul>

            <h4 className="font-bold text-base mt-6 mb-4">{t.footer.contactInfo}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+17862775660" className="text-muted hover:text-white transition-colors">
                  (786) 277-5660
                </a>
              </li>
              <li>
                <a href="mailto:oasisdistributionmiami@gmail.com" className="text-muted hover:text-white transition-colors">
                  oasisdistributionmiami@gmail.com
                </a>
              </li>
              <li className="text-muted">Homestead, Florida</li>
              <li className="text-muted/70 text-xs mt-1">{t.footer.wholesale}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm text-muted">
              {t.footer.serviceList.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-muted-foreground/30 flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Oasis Distribution, LLC. {t.footer.copyright}
          </p>
          <p className="text-xs text-muted/70 max-w-2xl md:text-right">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
