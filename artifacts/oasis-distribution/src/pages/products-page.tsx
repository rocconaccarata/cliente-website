import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen w-full font-sans text-foreground bg-white">
      <Header />
      <main className="pt-20">
        <Products />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
