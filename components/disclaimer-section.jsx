import { Card } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export function DisclaimerSection() {
  return (
    <section className="bg-background px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-2 border-muted bg-muted/30 p-6 md:p-8">
          <div className="mb-4 flex items-start gap-3">
            <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-muted-foreground" />
            <div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Important Disclaimer</h3>
              <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <strong>Educational Purpose Only:</strong> This webinar is provided for educational purposes only.
                  RJTI Charts does not provide financial advice, investment recommendations, or trading signals.
                </p>
                <p>
                  <strong>Risk Warning:</strong> Trading and investing in financial markets involves substantial risk of
                  loss. Past performance is not indicative of future results. You should carefully consider your
                  financial situation and risk tolerance before engaging in trading activities.
                </p>
                <p>
                  <strong>No Guarantees:</strong> We make no representations or warranties regarding the accuracy,
                  completeness, or timeliness of any information provided. Results may vary, and no specific outcomes
                  are guaranteed.
                </p>
                <p>
                  <strong>Consult Professionals:</strong> Always consult with qualified financial professionals before
                  making investment decisions. Do your own research and never invest more than you can afford to lose.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
