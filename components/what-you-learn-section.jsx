import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const learningOutcomes = [
  "How professional traders approach market analysis using structured methodologies",
  "An introduction to RJTI Charts and how its proprietary indicators work",
  "Understanding market trends, cycles, and price behavior at a high level",
  "How historical market events shape modern trading strategies",
  "The importance of risk management before entering any trade",
  "How to avoid common beginner mistakes in technical analysis",
  "When and why indicators should be used — without overloading charts",
  "What our full trading and analysis services offer and who they are designed for",
]

export function WhatYouLearnSection() {
  return (
    <section className="bg-background px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            What You’ll Take Away
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            A beginner-friendly introduction to our trading philosophy, tools, and professional market approach.
          </p>
        </div>

        <Card className="border-2 border-primary/10 bg-card p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-success" />
                <p className="text-card-foreground">{outcome}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}