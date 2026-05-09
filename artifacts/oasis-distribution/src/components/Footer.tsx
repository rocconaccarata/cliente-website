export function Footer() {
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
            <h4 className="font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollTo("about")} className="text-muted hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => scrollTo("partners")} className="text-muted hover:text-white transition-colors">Our Partners</button></li>
              <li><button onClick={() => scrollTo("services")} className="text-muted hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => scrollTo("products")} className="text-muted hover:text-white transition-colors">Products</button></li>
              <li><button onClick={() => scrollTo("contact")} className="text-muted hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">Manufacturing Partners</h4>
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

            <h4 className="font-bold text-base mt-6 mb-4">Contact Info</h4>
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
              <li className="text-muted/70 text-xs mt-1">Wholesale Inquiries Only</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>Food Service Distribution</li>
              <li>Wholesale Latin Bakery</li>
              <li>Frozen Food Supply</li>
              <li>Restaurant &amp; Café Supply</li>
              <li>Convenience Store Programs</li>
              <li>Distributor &amp; Market Support</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-muted-foreground/30 flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Oasis Distribution, LLC. All rights reserved.
          </p>
          <p className="text-xs text-muted/70 max-w-2xl md:text-right">
            Oasis Distribution is an independent distributor of Latin food products. Product availability, packaging, and specifications may vary by manufacturing partner.
          </p>
        </div>
      </div>
    </footer>
  );
}
