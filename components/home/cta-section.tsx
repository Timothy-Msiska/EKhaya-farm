import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-black text-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-balance">
          Ready to Experience Farm-Fresh Quality?
        </h2>
        <p className="text-background/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Visit your nearest Ekhaya Farm Food Store and discover the difference that sustainable, locally grown produce
          can make for your family.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/distribution">
            <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 gap-2">
              <MapPin className="w-4 h-4" />
              Find a Store Near You
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl text-base px-8 gap-2 border-background/30 text-background hover:bg-background/10 bg-transparent"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
