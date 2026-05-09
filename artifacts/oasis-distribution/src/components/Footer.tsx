import React from "react";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="bg-white inline-block p-2 rounded mb-6">
              <img 
                src="/oasis-logo.jpg" 
                alt="Oasis Distribution Logo" 
                className="h-12 object-contain" 
              />
            </div>
            <p className="text-muted max-w-sm">
              Your reliable partner for wholesale Latin bakery and frozen food products.
              Serving South Florida's food service industry.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo("about")} className="text-muted hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => scrollTo("services")} className="text-muted hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => scrollTo("products")} className="text-muted hover:text-white transition-colors">Products</button></li>
              <li><button onClick={() => scrollTo("contact")} className="text-muted hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted">
              <li>Homestead, Florida</li>
              <li>sales@oasisdistribution.com</li>
              <li>Wholesale Inquiries Only</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-muted-foreground/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted text-center md:text-left">
            &copy; {new Date().getFullYear()} Oasis Distribution, LLC. All rights reserved.
          </p>
          <p className="text-xs text-muted/70 text-center md:text-right max-w-2xl">
            Disclaimer: Oasis Distribution is an independent distributor of Latin food products. 
            Product availability may vary. Authorized distributor of PANNA Manufacturing products.
          </p>
        </div>
      </div>
    </footer>
  );
}
