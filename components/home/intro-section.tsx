import { Leaf, Users, ShieldCheck, Truck } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Climate-smart agricultural practices that protect our environment for future generations.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Empowering local farmers and creating employment opportunities across Malawi.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Rigorous quality standards ensuring the freshest produce reaches your table.",
  },
  {
    icon: Truck,
    title: "Nationwide Distribution",
    description: "Our network of stores brings farm-fresh products to all 8 districts.",
  },
];

export function IntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-6 text-balance">
            Rooted in Malawi, Growing for Tomorrow
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            At Ekhaya Farms, we believe in the power of sustainable agriculture to transform communities and ensure food
            security for all Malawians.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border-2 border-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/10 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.6)] transition-all duration-300">
                <item.icon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
