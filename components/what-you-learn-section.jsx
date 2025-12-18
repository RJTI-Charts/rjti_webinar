import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const learningOutcomes = [
  "Technical analysis fundamentals and chart pattern recognition",
  "How to identify support, resistance, and key price levels",
  "Risk-reward ratio calculation and position sizing principles",
  "Developing a personalized trading plan and strategy",
  "Psychology of trading: managing emotions and maintaining discipline",
  "Using indicators effectively without over-complicating analysis",
  "Backtesting strategies and learning from historical data",
  "Real-world case studies of successful and failed trades",
]

export function WhatYouLearnSection() {
  return (
    <section className="bg-background px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">What You Will Learn</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            A comprehensive curriculum designed to build your foundation in structured market analysis.
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
