import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Target, Eye, Heart, Shield, Users, Sprout } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with honesty and transparency in all our dealings with farmers, customers, and partners.",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    description: "Environmental stewardship is at the core of everything we do, ensuring a greener future.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in empowering local communities through fair employment and farmer partnerships.",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Uncompromising standards ensure only the finest produce reaches our customers.",
  },
]

const milestones = [
  { year: "2009", event: "Ekhaya Farms founded in Lilongwe" },
  { year: "2012", event: "First Ekhaya Farm Food Store opens" },
  { year: "2015", event: "Expanded to 3 districts" },
  { year: "2018", event: "Launched farmer partnership program" },
  { year: "2021", event: "Reached all 8 districts of Malawi" },
  { year: "2024", event: "Serving 50,000+ families daily" },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">About Us</span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Our Story: Rooted in Malawian Soil
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ekhaya Farms was born from a vision to transform agriculture in Malawi. What started as a small family
                farm has grown into a nationwide network dedicated to food security, sustainability, and community
                empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide high-quality, sustainably-produced agricultural products to every corner of Malawi, while
                  empowering local farmers and strengthening food security for all communities we serve.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be Malawi's most trusted agricultural brand, recognized for excellence in sustainable farming,
                  community impact, and ensuring every Malawian family has access to fresh, nutritious food.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Our Values</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
                What Guides Us Every Day
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Our Journey</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Milestones Along the Way
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                      <div className="bg-card rounded-xl p-6 border border-border inline-block">
                        <span className="text-primary font-bold text-lg">{milestone.year}</span>
                        <p className="text-foreground mt-1">{milestone.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/african-farmers-smiling-working-together-in-green-.jpg"
                  alt="Ekhaya Farms team"
                  className="rounded-2xl w-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Meet the People Behind Ekhaya</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our team is made up of passionate agriculturalists, community leaders, and dedicated professionals who
                  share a common goal: making quality food accessible to every Malawian family.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From our farmers in the fields to our store managers in every district, each member of the Ekhaya
                  family plays a vital role in our mission to grow Malawi and feed communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
