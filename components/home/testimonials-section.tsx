import { Quote } from "lucide-react"

const testimonials = [
{
  quote:
    "Seeing families enjoy healthier meals because of the quality meat we raise and supply from our livestock farms is what makes my work at Ekhaya Farms truly meaningful.",
  author: "Grace Banda",
  role: "Customer Relations Officer",
},
{
  quote:
    "Working closely with our livestock farmers and supporting them with training, animal welfare guidance, and fair pricing reminds me every day that Ekhaya Farms is about people, not just meat.",
  author: "James Phiri",
  role: "Farmer Partnership Coordinator",
},
{
  quote:
    "Knowing that households and restaurants rely on us for fresh, responsibly processed beef, goat, and sheep meat motivates our team to maintain high standards across every Ekhaya Farm Food Store.",
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
           Hear from Our Farmers
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
