import { Navbar } from "@/components/navbar";
import { Droplets, Sun, Wind, ThermometerSun, Tractor } from "lucide-react";

/* Data */
const livestockPractices = [
  {
    icon: Droplets,
    title: "Smart Hydration",
    description:
      "Water management systems ensure animals are hydrated efficiently for optimal health and growth.",
  },
  {
    icon: Sun,
    title: "Solar Powered Facilities",
    description:
      "Renewable energy powers our livestock units, improving efficiency while reducing environmental impact.",
  },
  {
    icon: Wind,
    title: "Pasture Rotation",
    description:
      "Rotating grazing areas maintains healthy pastures and prevents overgrazing, supporting sustainable livestock farming.",
  },
  {
    icon: ThermometerSun,
    title: "Climate Adaptation",
    description:
      "Livestock housing and care techniques adapted to Malawi’s changing climate for animal welfare.",
  },
  {
    icon: Tractor,
    title: "Modern Equipment",
    description:
      "State of the art feeding, milking, and management tools improve efficiency and animal comfort.",
  },
];

const livestock = [
  {
    name: "Cattle",
    items: ["Dairy Cows", "Beef Cattle", "Crossbreeds"],
    image: "/livestock/cattle.jpg",
  },
  {
    name: "Goats",
    items: ["Meat Goats", "Dairy Goats", "Local Breeds"],
    image: "/livestock/goats.jpg",
  },
  {
    name: "Sheep",
    items: ["Meat Sheep", "Wool Sheep", "Local Breeds"],
    image: "/livestock/sheep.jpg",
  },
];

const livestockSeasons = [
  {
    season: "Rainy Season (Nov–Apr)",
    livestock: "Cattle, Goats",
    highlight: "Peak breeding and growth period",
  },
  {
    season: "Cool Season (May–Aug)",
    livestock: "Sheep",
    highlight: "Ideal for fattening and feed supplementation",
  },
  {
    season: "Hot Season (Sep–Oct)",
    livestock: "Heat resistant cattle and goats",
    highlight: "Extra care and hydration required",
  },
];

/* Page */

export default function FarmsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/livestock/farm-livestock-overview.jpg"
              alt="Ekhaya Livestock Farm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 to-foreground/80" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <span className="text-white font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Farms
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#b5942f] mb-6 text-balance">
              Where Quality Begins
            </h1>

            <p className="text-background/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Across multiple livestock farming locations in Malawi, we employ sustainable,
              climate smart practices to produce healthy, high quality animals.
            </p>
          </div>
        </section>

        {/* Livestock Practices */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
                Our Methods
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#b5942f] mb-6 text-balance">
                Sustainable Livestock Practices
              </h2>

              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We combine traditional knowledge with modern technology to ensure animal health and productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {livestockPractices.map((practice, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#b5942f]/10 flex items-center justify-center mb-4">
                    <practice.icon className="w-6 h-6 text-[#b5942f]" />
                  </div>

                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {practice.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Livestock */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
                Our Livestock
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#b5942f] text-balance">
                What We Raise
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {livestock.map((animal, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl overflow-hidden border border-border"
                >
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full aspect-[4/3] object-cover"
                  />

                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-foreground mb-3">
                      {animal.name}
                    </h3>

                    <ul className="space-y-1">
                      {animal.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#b5942f]" />
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

        {/* Livestock Seasons */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
                Seasonal Production
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#b5942f] text-balance">
                Livestock Throughout the Year
              </h2>
            </div>

            <div className="space-y-4">
              {livestockSeasons.map((season, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="sm:w-1/3">
                    <h3 className="font-semibold text-foreground">
                      {season.season}
                    </h3>
                    <span className="text-xs text-[#b5942f] font-medium">
                      {season.highlight}
                    </span>
                  </div>

                  <div className="sm:w-2/3">
                    <p className="text-muted-foreground text-sm">
                      {season.livestock}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
