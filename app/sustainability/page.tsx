import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Leaf, Droplets, Recycle, Users, Sun, TreePine, Award } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"

const initiatives = [
  {
    icon: Droplets,
    title: "Water Conservation",
    description:
      "Our drip irrigation systems reduce water usage by 60% compared to traditional methods, preserving this precious resource.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Solar panels power 80% of our farm operations, significantly reducing our carbon footprint.",
  },
  {
    icon: Recycle,
    title: "Zero-Waste Goals",
    description: "Crop residues are composted and returned to the soil, creating a closed-loop system.",
  },
  {
    icon: TreePine,
    title: "Agroforestry",
    description: "We integrate trees into our farming systems, improving biodiversity and soil health.",
  },
  {
    icon: Leaf,
    title: "Organic Practices",
    description: "Natural pest control and organic fertilizers protect our soil and produce quality.",
  },
  {
    icon: Users,
    title: "Community Training",
    description: "We share sustainable practices with partner farmers, multiplying our environmental impact.",
  },
]

const impactStats = [
  { value: 60, suffix: "%", label: "Water Saved Through Smart Irrigation" },
  { value: 80, suffix: "%", label: "Operations Powered by Solar" },
  { value: 500, suffix: "+", label: "Farmers Trained in Sustainability" },
  { value: 10000, suffix: "+", label: "Trees Planted Annually" },
]

const communityPrograms = [
  {
    title: "Farmer Partnership Program",
    description:
      "We work with over 500 local farmers, providing training, quality seeds, and fair market prices. This program has helped increase household incomes by an average of 40%.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Youth Employment Initiative",
    description:
      "Our farms and stores provide employment opportunities for young Malawians, with comprehensive training programs that build careers in agriculture.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "School Nutrition Program",
    description:
      "We supply fresh produce to schools in underserved areas, ensuring children have access to nutritious meals that support their learning.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=600&width=1920"
              alt="Sustainable farming at Ekhaya Farms"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 to-foreground/80" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <span className="text-primary-foreground/80 font-medium text-sm tracking-wider uppercase mb-4 block">
              Sustainability
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-background mb-6 text-balance">
              Farming for Future Generations
            </h1>
            <p className="text-background/80 text-lg max-w-2xl mx-auto leading-relaxed">
              At Ekhaya Farms, sustainability is not just a goal—it's our responsibility. We're committed to farming
              practices that protect our environment and empower our communities.
            </p>
          </div>
        </section>

        {/* Environmental Initiatives */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
                Environmental Stewardship
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Our Green Initiatives
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From water conservation to renewable energy, we're reducing our environmental footprint.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiatives.map((initiative, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <initiative.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{initiative.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-primary">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4">Our Environmental Impact</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
                Community Impact
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Empowering Malawian Communities
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our success is measured not just in harvests, but in the lives we touch and improve.
              </p>
            </div>
            <div className="space-y-12">
              {communityPrograms.map((program, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
                >
                  <div className="flex-1">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="rounded-2xl w-full object-cover aspect-[4/3]"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{program.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Food Safety */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Food Safety & Quality Standards</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We adhere to the highest food safety standards at every stage—from planting to harvest, processing to
              delivery. Our quality control team ensures every product that reaches our stores meets our rigorous
              criteria for freshness, safety, and nutrition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                HACCP Certified
              </div>
              <div className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Regular Quality Audits
              </div>
              <div className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Traceability Systems
              </div>
              <div className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Cold Chain Maintained
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
