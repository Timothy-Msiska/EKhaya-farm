import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-farm.png"
          alt="Ekhaya Farms agricultural fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 text-background/90 text-sm mb-8">
          <MapPin className="w-4 h-4" />
          <span>Serving all 8 outlets of Malawi</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-tight mb-6 text-balance">
          Growing Malawi,
          <br />
          <span className="text-accent">Feeding Communities</span>
        </h1>

        <p className="text-lg sm:text-xl text-background/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Ekhaya Farms is a trusted Malawian agricultural company specializing in the production of high quality meat products, supplied exclusively through Ekhaya Farm Food Stores.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/distribution">
            <Button
              size="lg"
              className="rounded-xl text-white bg-background/10 hover:bg-[#b5942f] text-base px-8 gap-2"
            >
              Find a Store
              <MapPin className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/farms">
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl text-base px-8 gap-2 bg-background/10 border-background/30 text-white hover:bg-[#b5942f] hover:text-background"
            >
              Our Farming Practices
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
