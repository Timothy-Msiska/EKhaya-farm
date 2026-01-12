import { AnimatedCounter } from "@/components/animated-counter"

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 8, suffix: "", label: "Outlets Served" },
  { value: 500, suffix: "+", label: "Labour Force" },
  { value: 50000, suffix: "+", label: "Families Fed Daily" },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-black mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-black text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
