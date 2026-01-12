import { Quote } from "lucide-react"

const testimonials = [
{
  quote:
    "Seeing families enjoy healthier meals because of the produce we grow and supply is what makes my work at Ekhaya Farms truly meaningful.",
  author: "Grace Banda",
  role: "Customer Relations Officer",
},
{
  quote:
    "Working closely with our partner farmers and supporting them with training and fair pricing reminds me every day that Ekhaya Farms is about people, not just produce.",
  author: "James Phiri",
  role: "Farmer Partnership Coordinator",
},
{
  quote:
    "Knowing that restaurants rely on us for fresh, locally-grown produce motivates our team to maintain high standards across every Ekhaya store.",
  author: "Sarah Mwale",
  role: "Retail & Hospitality Liaison",
},
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blackfont-medium text-sm tracking-wider uppercase mb-4 block">Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#D4AF37] text-balance">
            Voices from the Inside 
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
