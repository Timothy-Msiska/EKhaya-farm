import { Droplets, Sun, Wind, ThermometerSun, Tractor } from "lucide-react";

/* ------------------ Practices ------------------ */
const livestockPractices = [
  {
    icon: Droplets,
    title: "Efficient Water Management",
    description:
      "Clean and reliable water systems support animal health, digestion, and steady growth throughout all production stages.",
  },
  {
    icon: Sun,
    title: "Energy Efficient Operations",
    description:
      "Solar-powered infrastructure reduces costs while maintaining consistent feeding, lighting, and animal care systems.",
  },
  {
    icon: Wind,
    title: "Rotational Grazing",
    description:
      "Managed grazing improves pasture quality, supports natural feeding behavior, and promotes sustainable land use.",
  },
  {
    icon: ThermometerSun,
    title: "Climate Responsive Housing",
    description:
      "Livestock facilities are designed to minimize heat stress and protect animals from extreme weather conditions.",
  },
  {
    icon: Tractor,
    title: "Modern Farm Equipment",
    description:
      "Advanced feeding, monitoring, and handling equipment ensures efficiency, animal comfort, and consistent quality.",
  },
];

/* ------------------ Livestock ------------------ */
const livestock = [
  {
    name: "Cattle",
    items: ["Beef Cattle", "Dairy Cattle", "Improved Crossbreeds"],
    image: "/livestock/cattle.jpg",
  },
  {
    name: "Goats",
    items: ["Meat Goats", "Dairy Goats", "Indigenous Breeds"],
    image: "/livestock/goats.jpg",
  },
  {
    name: "Sheep",
    items: ["Meat Sheep", "Wool Sheep", "Local Breeds"],
    image: "/livestock/sheep.jpg",
  },
];

/* ------------------ Production Process ------------------ */
const livestockProduction = [
  {
    stage: "Breeding and Selection",
    description:
      "Breeding stock is carefully selected based on health, genetics, and performance to produce strong and resilient animals.",
  },
  {
    stage: "Early Rearing",
    description:
      "Young animals are raised under close supervision with proper nutrition, vaccinations, and disease prevention measures.",
  },
  {
    stage: "Growth and Development",
    description:
      "Livestock are supported through natural grazing and supplementary feeding to achieve steady and healthy weight gain.",
  },
  {
    stage: "Conditioning and Fattening",
    description:
      "Targeted feeding programs are introduced to improve muscle development and overall body condition.",
  },
  {
    stage: "Health Assessment and Slaughter Readiness",
    description:
      "Final veterinary inspections ensure animals meet welfare, quality, and market standards before processing.",
  },
];

/* ------------------ Page ------------------ */
export default function FarmsPage() {
  return (
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
          <span className="text-white text-sm tracking-wider uppercase mb-4 block">
            Our Farms
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#b5942f] mb-6">
            Where Quality Begins
          </h1>

          <p className="text-background/80 text-lg max-w-2xl mx-auto">
            Across Malawi, our farms apply responsible, climate-smart livestock
            systems to deliver healthy and market-ready animals.
          </p>
        </div>
      </section>

      {/* Practices */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider block mb-4">
              Our Methods
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#b5942f] mb-6">
              Sustainable Livestock Practices
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {livestockPractices.map((practice, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-[#b5942f]/10 rounded-xl flex items-center justify-center mb-4">
                  <practice.icon className="w-6 h-6 text-[#b5942f]" />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {practice.title}
                </h3>

                <p className="text-sm text-muted-foreground">
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
            <span className="text-sm uppercase tracking-wider block mb-4">
              Our Livestock
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#b5942f]">
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
                  <h3 className="font-semibold text-lg mb-3">
                    {animal.name}
                  </h3>

                  <ul className="space-y-1">
                    {animal.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-[#b5942f] rounded-full" />
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

      {/* Production Process */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider block mb-4">
              Production Process
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#b5942f]">
              From Farm to Market Readiness
            </h2>
          </div>

          <div className="space-y-4">
            {livestockProduction.map((step, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {step.stage}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
