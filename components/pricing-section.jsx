import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const includes = [
  "2-hour live educational webinar",
  "Interactive Q&A session with expert",
  "Downloadable resource materials",
  "Access to webinar recording (48 hours)",
  "Certificate of participation",
  "Exclusive community access",
]

export function PricingSection() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Secure Your Spot Today</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Limited seats available. Register now to transform your trading knowledge.
          </p>
        </div>

        <Card className="overflow-hidden border-2 border-primary/20 bg-card shadow-2xl">
          <div className="bg-gradient-to-r from-primary to-accent p-6 text-center">
            <p className="text-lg font-medium text-primary-foreground">Educational Webinar Access</p>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="text-5xl font-bold text-primary-foreground">FREE</span>
            </div>
            <p className="mt-2 text-sm text-primary-foreground/90">100% Complimentary • No Hidden Costs</p>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="mb-6 text-center text-xl font-semibold text-card-foreground">What's Included</h3>
            <div className="mb-8 space-y-4">
              {includes.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-success" />
                  <p className="text-card-foreground">{item}</p>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full text-lg font-semibold shadow-lg"
            >
              Secure Your Spot
            </Button>

            <p className="mt-4 text-center text-sm text-muted-foreground">Join 500+ registered participants</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
