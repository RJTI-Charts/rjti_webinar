import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Retail Trader",
    content:
      "This webinar changed my entire approach to trading. The focus on risk management and discipline was exactly what I needed.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Investment Analyst",
    content:
      "Clear, structured, and professional. The educational content was top-notch without any hype or unrealistic promises.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Finance Student",
    content:
      "As a beginner, I appreciated the step-by-step approach. The mentor explained complex concepts in an easy-to-understand way.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Part-Time Trader",
    content:
      "The backtesting strategies and real-world case studies were incredibly valuable. Highly recommend for serious learners.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary/30 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">What Our Students Say</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Join thousands of satisfied learners who have transformed their trading approach.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-primary/10 bg-card p-6">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 text-card-foreground">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
