const features = [
  {
    title: "From Our Fields",
    description:
      "Every product starts at our carefully managed farms across Malawi, where sustainable practices meet traditional knowledge.",
    image: "/field-image.png",
  },
  {
    title: "Quality Processing",
    description: "State of the art facilities ensure our produce maintains peak freshness from harvest to store.",
    image: "/quality-pro.png",
  },
  {
    title: "To Your Community",
    description:
      "Our network of Ekhaya Farm Food Stores delivers farm-fresh goodness to neighborhoods across all 8 districts.",
    image: "/meat-shelf.png",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-6 text-balance">
            Farm to Table Excellence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We control every step of the journey to ensure quality and freshness.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full aspect-[3/2] object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#D4AF37] text-black font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
