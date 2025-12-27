import { Card } from "@/components/ui/card"
import { BarChart3, TrendingUp, Shield, Brain, Target } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Market Structure Analysis",
    description: "Understand price action, market phases, and structural patterns that drive trading decisions.",
  },
  {
    icon: TrendingUp,
    title: "Trend Identification",
    description: "Learn systematic approaches to identify, validate, and follow market trends with confidence.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Master position sizing, stop-loss strategies, and portfolio protection techniques.",
  },
  {
    icon: Brain,
    title: "Decision-Making Frameworks",
    description: "Develop disciplined trading psychology and structured decision-making processes.",
  },
  {
    icon: Target,
    title: "Entry & Exit Strategies",
    description: "Discover data-backed methodologies for timing market entries and exits effectively.",
  },
]

export function WhyAttendSection() {
  return (
    <section className="bg-secondary/30 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Why Attend This Webinar?</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Gain practical knowledge and structured methodologies to approach financial markets with discipline and
            clarity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-2 border-primary/10 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex gap-4 items-center">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-[#00A977]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
              </div>

              <p className="text-muted-foreground">{feature.description}</p>

            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
