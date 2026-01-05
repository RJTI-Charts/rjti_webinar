import { Card } from "@/components/ui/card"
import { BarChart3, TrendingUp, Shield, Brain, Target } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Proven Market Structure Insights",
    description:
      "Analyze price action and market structure using proprietary indicators refined through decades of real-world futures, equities, and global market experience.",
  },
  {
    icon: TrendingUp,
    title: "Trend Forecasting Backed by History",
    description:
      "Identify and follow market trends using methodologies that have navigated major events—from bull markets and crashes to commodity cycles and global shifts.",
  },
  {
    icon: Shield,
    title: "Institutional-Grade Risk Control",
    description:
      "Apply disciplined risk management principles shaped by professional trading floors, helping protect capital across volatile market conditions.",
  },
  {
    icon: Brain,
    title: "Experience-Driven Decision Frameworks",
    description:
      "Leverage structured decision-making frameworks developed from decades of observing and trading real market behavior—not theory alone.",
  },
  {
    icon: Target,
    title: "Precision Entry & Exit Signals",
    description:
      "Execute trades with confidence using time-tested entry and exit signals that have successfully identified major tops, bottoms, and turning points.",
  },
];

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
