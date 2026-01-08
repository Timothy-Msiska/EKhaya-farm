import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Ekhaya Farms has transformed how our family eats. The quality of their produce is unmatched anywhere in Lilongwe.",
    author: "Grace Banda",
    role: "Customer, Lilongwe",
  },
  {
    quote:
      "As a partner farmer, Ekhaya has provided us with training and fair prices. They truly care about our community.",
    author: "James Phiri",
    role: "Partner Farmer, Mzuzu",
  },
  {
    quote:
      "The convenience of having fresh, locally-grown produce available at every Ekhaya store has been wonderful for our restaurant.",
    author: "Sarah Mwale",
    role: "Restaurant Owner, Blantyre",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blackfont-medium text-sm tracking-wider uppercase mb-4 block">Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF37] text-balance">
            Voices from Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
