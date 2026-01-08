import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const productCategories = [
  {
    name: "Fresh Vegetables",
    description: "Farm-fresh vegetables harvested at peak ripeness for maximum nutrition and flavor.",
    products: [
      { name: "Tomatoes", image: "/fresh-red-ripe-tomatoes.jpg" },
      { name: "Cabbage", image: "/placeholder.svg?height=200&width=200" },
      { name: "Onions", image: "/placeholder.svg?height=200&width=200" },
      { name: "Peppers", image: "/placeholder.svg?height=200&width=200" },
      { name: "Leafy Greens", image: "/placeholder.svg?height=200&width=200" },
      { name: "Carrots", image: "/placeholder.svg?height=200&width=200" },
    ],
  },
  {
    name: "Grains & Cereals",
    description: "Premium quality grains grown in Malawi's fertile soil, processed to the highest standards.",
    products: [
      { name: "Maize", image: "/placeholder.svg?height=200&width=200" },
      { name: "Rice", image: "/placeholder.svg?height=200&width=200" },
      { name: "Sorghum", image: "/placeholder.svg?height=200&width=200" },
      { name: "Millet", image: "/placeholder.svg?height=200&width=200" },
    ],
  },
  {
    name: "Fresh Fruits",
    description: "Sweet, juicy fruits from our orchards, picked at the perfect moment of ripeness.",
    products: [
      { name: "Mangoes", image: "/placeholder.svg?height=200&width=200" },
      { name: "Bananas", image: "/placeholder.svg?height=200&width=200" },
      { name: "Oranges", image: "/placeholder.svg?height=200&width=200" },
      { name: "Papayas", image: "/placeholder.svg?height=200&width=200" },
      { name: "Avocados", image: "/placeholder.svg?height=200&width=200" },
    ],
  },
  {
    name: "Legumes",
    description: "Protein-rich legumes essential for a balanced, healthy diet.",
    products: [
      { name: "Beans", image: "/placeholder.svg?height=200&width=200" },
      { name: "Groundnuts", image: "/placeholder.svg?height=200&width=200" },
      { name: "Soybeans", image: "/placeholder.svg?height=200&width=200" },
      { name: "Cowpeas", image: "/placeholder.svg?height=200&width=200" },
    ],
  },
  {
    name: "Farm Products",
    description: "Quality farm products from our livestock and processing facilities.",
    products: [
      { name: "Fresh Eggs", image: "/placeholder.svg?height=200&width=200" },
      { name: "Honey", image: "/placeholder.svg?height=200&width=200" },
      { name: "Dairy", image: "/placeholder.svg?height=200&width=200" },
    ],
  },
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
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Our Products</span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Fresh From Our Farms to You
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Discover our range of high-quality agricultural products, grown with care and delivered fresh to Ekhaya
                Farm Food Stores across all 8 districts of Malawi.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Available at all Ekhaya Farm Food Stores</span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        {productCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
            <div className="max-w-6xl mx-auto px-4">
              <div className="mb-10">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">{category.name}</h2>
                <p className="text-muted-foreground max-w-2xl">{category.description}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.products.map((product, productIndex) => (
                  <div
                    key={productIndex}
                    className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all group"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="font-medium text-foreground text-sm">{product.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4">Find These Products Near You</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              All our products are available exclusively at Ekhaya Farm Food Stores. Find your nearest location and
              experience farm-fresh quality today.
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
      <Footer />
    </>
  )
}
