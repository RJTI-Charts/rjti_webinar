import { Card } from "@/components/ui/card"
import Image from "next/image"

export function MentorSection() {
  return (
    <section className="bg-secondary/30 px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">About Your Mentor</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Learn from an experienced market analyst with a proven track record in education.
          </p>
        </div>

        <Card className="overflow-hidden border-2 border-primary/10 bg-card">
          <div className="grid items-center gap-8 md:grid-cols-5">
            <div className="relative h-full md:col-span-2 md:h-full">
              <Image src="/ceo.png" alt="RJTI Charts Founder" fill className="object-cover" />
            </div>
            <div className="p-8 md:col-span-3">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Founder & CEO
              </div>
              <h3 className="mb-2 text-2xl font-bold text-card-foreground">RJTI Charts</h3>
              <div className="mb-4 h-1 w-16 rounded-full bg-primary"></div>
              <p className="mb-4 text-muted-foreground">
                With over 10 years of experience in financial markets, our founder has dedicated their career to
                democratizing trading education. They specialize in technical analysis, risk management, and developing
                systematic trading approaches.
              </p>
              <p className="mb-4 text-muted-foreground">
                Having trained thousands of students worldwide, they bring a practical, no-nonsense approach to market
                education, focusing on sustainable strategies rather than get-rich-quick schemes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  10+ Years Experience
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  5K+ Students Trained
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Certified Analyst
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
