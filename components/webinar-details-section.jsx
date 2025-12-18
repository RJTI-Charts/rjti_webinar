"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User } from "lucide-react"
import { useEffect, useState } from "react"

export function WebinarDetailsSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-background px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <Card className="overflow-hidden border-2 border-primary/10 bg-card shadow-lg">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold text-card-foreground md:text-4xl">
                Structured Market Analysis Webinar
              </h2>
              <p className="text-lg text-muted-foreground">Join us for an in-depth educational session</p>
            </div>

            {/* Webinar Info Grid */}
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg bg-card p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hosted by</p>
                  <p className="font-semibold text-card-foreground">Founder & CEO, RJTI Charts</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-card p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-semibold text-card-foreground">Saturday, Dec 21, 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-card p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold text-card-foreground">2 Hours • Live Session</p>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-8">
              <p className="mb-4 text-center text-sm font-medium text-muted-foreground">Webinar starts in</p>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg bg-card p-4 text-center">
                    <div className="mb-1 text-3xl font-bold text-primary md:text-4xl">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-muted-foreground md:text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-[#033220] text-primary-foreground hover:bg-primary/90 w-full font-semibold shadow-lg md:w-auto md:px-12"
              >
                Join Live Webinar
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
