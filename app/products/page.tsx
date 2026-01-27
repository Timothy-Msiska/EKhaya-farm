import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const productCategories = [
  {
    name: "Fresh Red Meat",
    description:
      "Professionally slaughtered and hygienically processed red meat sourced from cattle, goats, and sheep.",
    products: [
      { name: "Beef", image: "/meat-splash-1.jpg" },
      { name: "Goat Meat", image: "/meat-splash-2.jpg" },
      { name: "Mutton", image: "/meat-splash-3.jpg" },
      { name: "Mixed Red Meat Cuts", image: "/meat-splash-4.jpg" },
    ],
  },
  {
    name: "Primary Meat Cuts",
    description:
      "Standard meat cuts prepared according to food safety regulations and quality control procedures.",
    products: [
      { name: "Steak Cuts", image: "/meat-splash-1.jpg" },
      { name: "Ribs", image: "/meat-splash-2.jpg" },
      { name: "Brisket", image: "/meat-splash-3.jpg" },
      { name: "Chunks and Portions", image: "/meat-splash-4.jpg" },
      { name: "Bone in Cuts", image: "/meat-splash-1.jpg" },
      { name: "Boneless Cuts", image: "/meat-splash-2.jpg" },
    ],
  },
  {
    name: "Processed Meat Products",
    description:
      "Value added meat products processed for extended shelf life while maintaining quality and safety.",
    products: [
      { name: "Sausages", image: "/meat-splash-3.jpg" },
      { name: "corned Meat", image: "/meat-splash-4.jpg" },
      { name: "Sausages", image: "/meat-splash-1.jpg" },
      { name: "Minced Meat", image: "/meat-splash-2.jpg" },
    ],
  },
  // {
  //   name: "Edible Offals",
  //   description:
  //     "Carefully cleaned and handled edible offals processed in compliance with hygiene standards.",
  //   products: [
  //     { name: "Liver", image: "/meat-splash-3.jpg" },
  //     { name: "Kidneys", image: "/meat-splash-4.jpg" },
  //     { name: "Tripe", image: "/meat-splash-1.jpg" },
  //     { name: "Heart", image: "/meat-splash-2.jpg" },
  //   ],
  // },
  // {
  //   name: "Non Edible By Products",
  //   description:
  //     "Non edible meat by products handled responsibly as part of sustainable abattoir operations.",
  //   products: [
  //     { name: "Bones", image: "/meat-splash-1.jpg" },
  //     { name: "Hides and Skins", image: "/meat-splash-2.jpg" },
  //     { name: "Animal Fat", image: "/meat-splash-3.jpg" },
  //   ],
  // },
]

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
                Meat Processing
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#b5942f] mb-6 text-balance">
                Hygienically Processed Livestock Meat
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We specialize exclusively in livestock slaughter and meat processing,
                ensuring high standards of hygiene, safety, and consistency from intake
                to final distribution.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 text-black">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">
                  Supplied through Ekhaya Farm Food Stores
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        {productCategories.map((category, index) => (
          <section
            key={index}
            className={`py-20 ${index % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
          >
            <div className="max-w-6xl mx-auto px-4">
              <div className="mb-10">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  {category.name}
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.products.map((product, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all group"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="font-medium text-foreground text-sm">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              From Abattoir to Store
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              All processed meat products are distributed exclusively through
              Ekhaya Farm Food Stores, ensuring traceability and quality control.
            </p>
            <Link href="/distribution">
              <Button size="lg" variant="secondary" className="rounded-xl gap-2">
                <MapPin className="w-4 h-4" />
                Find a Store
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
