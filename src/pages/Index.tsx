import FloatingParticles from "@/components/FloatingParticles";
import FlipBook from "@/components/FlipBook";
import { Camera } from "lucide-react";

const Index = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-12 px-4">
      <FloatingParticles />

      {/* Hero header */}
      <header className="relative z-10 text-center mb-10 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Camera className="w-5 h-5 text-primary" />
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body">
            Photography Collection
          </span>
          <Camera className="w-5 h-5 text-primary" />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold gold-text mb-3">
          The Gallery Book
        </h1>
        <p className="text-muted-foreground font-body text-lg max-w-md mx-auto">
          Flip through stunning landscapes from around the world
        </p>
      </header>

      {/* Book */}
      <section className="relative z-10 animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
        <FlipBook />
      </section>

      {/* Footer hint */}
      <footer className="relative z-10 mt-8 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
     <p className="text-xl text-gray-200 tracking-widest font-semibold">
    Swap The Page Of Book
  </p>
      </footer>
    </main>
  );
};

export default Index;
