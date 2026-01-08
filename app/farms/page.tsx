import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Leaf, Droplets, Sun, Wind, ThermometerSun, Tractor } from "lucide-react"

const farmingPractices = [
  {
    icon: Droplets,
    title: "Smart Irrigation",
    description: "Water-efficient drip irrigation systems that conserve resources while maximizing crop yields.",
  },
  {
    icon: Leaf,
    title: "Organic Methods",
    description: "Natural pest control and organic fertilizers that protect soil health and produce quality.",
  },
  {
    icon: Sun,
    title: "Solar Power",
    description: "Renewable energy powers our operations, reducing our carbon footprint significantly.",
  },
  {
    icon: Wind,
    title: "Crop Rotation",
    description: "Strategic rotation maintains soil fertility and prevents pest buildup naturally.",
  },
  {
    icon: ThermometerSun,
    title: "Climate Adaptation",
    description: "Resilient crop varieties and techniques adapted to Malawi's changing climate.",
  },
  {
    icon: Tractor,
    title: "Modern Equipment",
    description: "State-of-the-art machinery that improves efficiency while minimizing environmental impact.",
  },
]

const crops = [
  {
    name: "Vegetables",
    items: ["Tomatoes", "Cabbage", "Onions", "Peppers", "Leafy Greens"],
    image: "/fresh-vegetables-growing-in-farm-field-rows.jpg",
  },
  {
    name: "Grains",
    items: ["Maize", "Rice", "Sorghum", "Millet"],
    image: "/golden-grain-crops-maize-field-ready-for-harvest.jpg",
  },
  {
    name: "Legumes",
    items: ["Beans", "Groundnuts", "Soybeans", "Cowpeas"],
    image: "/legume-crops-beans-growing-in-agricultural-field.jpg",
  },
  {
    name: "Fruits",
    items: ["Mangoes", "Bananas", "Oranges", "Papayas"],
    image: "/tropical-fruit-orchard-mangoes-bananas-growing.jpg",
  },
]

const seasons = [
  { season: "Rainy Season (Nov-Apr)", crops: "Maize, Rice, Vegetables, Legumes", highlight: "Peak growing period" },
  {
    season: "Cool Season (May-Aug)",
    crops: "Leafy Greens, Beans, Potatoes",
    highlight: "Ideal for cool-weather crops",
  },
  {
    season: "Hot Season (Sep-Oct)",
    crops: "Heat-resistant varieties, Citrus",
    highlight: "Irrigation-dependent crops",
  },
]

export default function FarmsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img src="/vast-green-agricultural-farmland-in-africa-aerial-.jpg" alt="Ekhaya Farms fields" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 to-foreground/80" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <span className="text-primary-foreground/80 font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Farms
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-background mb-6 text-balance">
              Where Quality Begins
            </h1>
            <p className="text-background/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Across multiple farming locations in Malawi, we employ sustainable, climate-smart practices to produce the
              freshest, highest-quality agricultural products.
            </p>
          </div>
        </section>

        {/* Farming Practices */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Our Methods</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Sustainable Farming Practices
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We combine traditional wisdom with modern technology to farm responsibly.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {farmingPractices.map((practice, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <practice.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{practice.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crops We Grow */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Our Crops</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">What We Grow</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {crops.map((crop, index) => (
                <div key={index} className="bg-card rounded-2xl overflow-hidden border border-border">
                  <img
                    src={crop.image || "/placeholder.svg"}
                    alt={crop.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-foreground mb-3">{crop.name}</h3>
                    <ul className="space-y-1">
                      {crop.items.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Calendar */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
                Seasonal Production
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Growing Year-Round
              </h2>
            </div>
            <div className="space-y-4">
              {seasons.map((season, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="sm:w-1/3">
                    <h3 className="font-semibold text-foreground">{season.season}</h3>
                    <span className="text-xs text-primary font-medium">{season.highlight}</span>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="text-muted-foreground text-sm">{season.crops}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
