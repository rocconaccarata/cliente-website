import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-white border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="link-home"
        >
          <img src="/oasis-logo.jpg" alt="Oasis Distribution Logo" className="h-10 md:h-12 object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("about")} className="text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="nav-about">About</button>
          <button onClick={() => scrollTo("services")} className="text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="nav-services">Services</button>
          <button onClick={() => scrollTo("products")} className="text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="nav-products">Products</button>
          <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="nav-catalog">Catalog</button>
          
          <Button onClick={() => scrollTo("contact")} size="sm" data-testid="button-request-info">
            Request Wholesale Info
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          <button onClick={() => scrollTo("about")} className="text-left text-base font-medium py-2 text-foreground hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollTo("services")} className="text-left text-base font-medium py-2 text-foreground hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollTo("products")} className="text-left text-base font-medium py-2 text-foreground hover:text-primary transition-colors">Products</button>
          <button onClick={() => scrollTo("contact")} className="text-left text-base font-medium py-2 text-foreground hover:text-primary transition-colors">Catalog</button>
          
          <Button onClick={() => scrollTo("contact")} className="w-full mt-2" data-testid="button-mobile-request-info">
            Request Wholesale Info
          </Button>
        </div>
      )}
    </header>
  );
}
