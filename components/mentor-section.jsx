import { Card } from "@/components/ui/card"
import Image from "next/image"

export function MentorSection() {
  return (
    <section className="bg-secondary/30 px-4 py-20">
      <div className="container mx-auto max-w-5xl">

        {/* SECTION HEADER */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            About Your Mentor
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Learn from decades of real market experience — across bull markets,
            crashes, and global macro cycles.
          </p>
        </div>

        <Card className="overflow-hidden border-2 border-primary/10 bg-card">
          <div className="grid gap-8 md:grid-cols-5">

            {/* IMAGE (optional – keep commented if not ready) */}
            {/* 
            <div className="relative md:col-span-2">
              <Image
                src="/mentor.png"
                alt="RJTI Charts Founder"
                fill
                className="object-cover"
              />
            </div>
            */}

            {/* CONTENT */}
            <div className="p-8 md:col-span-5">

              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Founder · Market Analyst · CTA
              </div>

              <h3 className="mb-2 text-2xl font-bold">
                John Johnson — RJTI Charts
              </h3>

              <div className="mb-6 h-1 w-16 rounded-full bg-primary"></div>

              <p className="mb-4 text-muted-foreground">
                RJTI Charts’ proprietary indicators were developed by John Johnson,
                a seasoned market professional with over <strong>four decades of
                  firsthand experience</strong> in the global futures, equities,
                currencies, and commodities markets.
              </p>

              <p className="mb-4 text-muted-foreground">
                John began his career in 1981 on the Chicago Board of Trade (CBOT)
                as a runner and later as an Arb-Clerk, working closely with
                institutional traders. He went on to trade and analyze markets at
                the Chicago Mercantile Exchange (CME), covering currencies,
                indices, and macro-driven futures markets.
              </p>

              <p className="mb-4 text-muted-foreground">
                He witnessed and traded through some of the most significant
                market events in history — including the <strong>1987 Stock Market
                  Crash</strong>, the 1982 equity bull market, the 1989–1990 Desert
                Storm period, the 1999–2000 Nasdaq bubble, the 2008 financial
                crisis, historic Treasury yield lows, extreme crude oil cycles,
                and major global market shifts across the S&P 500, Nikkei, DAX,
                FTSE, precious metals, and currencies.
              </p>

              <p className="mb-4 text-muted-foreground">
                After leaving the trading floor, John became a registered
                Commodity Trading Adviser (CTA) and broker, later founding and
                operating his own commodities firm for over 11 years. Throughout
                his career, he has produced analytical signals during major
                historical turning points — sometimes identifying potential tops
                and bottoms across markets such as Gold, Silver, Coffee, Energy,
                equities, and the U.S. Dollar.
              </p>

              <p className="mb-4 font-semibold text-muted-foreground">
                These experiences led to the development of the
                <span className="text-primary">
                  {" "}RJTICHARTS Proprietary Trading Signals & Alerts System
                </span>,
                designed to help traders identify structured market opportunities
                across Futures, Equities, and Forex.
              </p>

              <p className="mb-6 text-sm font-semibold text-red-700">
                There is no guarantee in any investment or trading strategy.
                RJTI Charts focuses on education, structured analysis, and
                disciplined decision-making — not promises or predictions.
              </p>

              {/* STATS */}
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-secondary px-4 py-1 text-sm">
                  40+ Years Market Experience
                </span>
                <span className="rounded-full bg-secondary px-4 py-1 text-sm">
                  Former CTA & Broker
                </span>
                <span className="rounded-full bg-secondary px-4 py-1 text-sm">
                  Global Markets Expertise
                </span>
                <span className="rounded-full bg-secondary px-4 py-1 text-sm">
                  Proprietary Signal Systems
                </span>
              </div>

            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}