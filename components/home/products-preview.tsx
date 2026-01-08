import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Fresh Vegetables",
    description: "Locally grown, picked at peak ripeness",
    image: "/fresh-colorful-vegetables-tomatoes-peppers-cabbage.jpg",
  },
  {
    name: "Grains & Cereals",
    description: "Premium quality maize, rice, and more",
    image: "/grains-cereals-maize-rice-in-burlap-sacks.jpg",
  },
  {
    name: "Fresh Fruits",
    description: "Sweet, seasonal fruits from our orchards",
    image: "/fresh-tropical-fruits-mangoes-bananas-oranges.jpg",
  },
  {
    name: "Farm Products",
    description: "Eggs, dairy, and specialty items",
    image: "/farm-products-eggs-milk-dairy-items.jpg",
  },
]

export function ProductsPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">Our Products</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF37] text-balance">
              Fresh From the Farm
            </h2>
          </div>
          <Link href="/products">
            <Button variant="outline" className="rounded-xl gap-2 bg-transparent">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">Available at all Ekhaya Farm Food Stores across Malawi</p>
      </div>
    </section>
  )
}
