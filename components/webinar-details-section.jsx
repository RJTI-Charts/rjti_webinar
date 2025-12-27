"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

/** Utility: calculate remaining time */
const getTimeLeft = (startAt) => {

  const now = new Date().getTime()
  const startTime = new Date(startAt).getTime()

  const diff = startTime - now

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isLive: false,
  }

}

export function WebinarDetailsSection() {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true)
  const [webinarDetails, setWebinarDetails] = useState(null)
  const [timeLeft, setTimeLeft] = useState(null)

  /** Fetch webinar */
  useEffect(() => {
    const fetchWebinar = async () => {
      try {

        const res = await fetch("/api/webinar")
        const data = await res.json()

        setWebinarDetails(data.webinar)

      } catch (err) {
        console.error("Failed to fetch webinar:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchWebinar()
  }, [])

  /** Countdown interval */
  useEffect(() => {
    if (!webinarDetails?.startAt) return

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(webinarDetails.startAt))
    }, 1000)

    return () => clearInterval(interval)
  }, [webinarDetails])

  return (
    <section id="webinar-details" className="bg-background px-4 py-20 flex flex-col gap-10">

      <div className="container mx-auto max-w-5xl">

        <Card className="overflow-hidden border-2 bg-gradient-to-r from-primary/10 to-accent/10 shadow-lg">
          <div className="p-8 md:p-12">

            {/* HEADER */}
            <div className="mb-8 text-center">
              {isLoading ? (
                <>
                  <div className="mx-auto mb-3 h-8 w-3/4 animate-pulse rounded bg-muted" />
                  <div className="mx-auto h-4 w-1/2 animate-pulse rounded bg-muted" />
                </>
              ) : (
                <>
                  <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                    {webinarDetails.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {webinarDetails.subtitle}
                  </p>
                </>
              )}
            </div>

            {/* INFO GRID */}
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              {isLoading
                ? Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-20 animate-pulse rounded-lg bg-muted"
                  />
                ))
                : (
                  <>
                    <InfoItem
                      icon={<User className="h-6 w-6 text-[#00A977]" />}
                      label="Hosted by"
                      value="John Johnson"
                    />
                    <InfoItem
                      icon={<Calendar className="h-6 w-6 text-[#00A977]" />}
                      label="Date"
                      value={new Date(webinarDetails.startAt).toDateString()}
                    />
                    <InfoItem
                      icon={<Clock className="h-6 w-6 text-[#00A977]" />}
                      label="Duration"
                      value="1 hour"
                    />
                  </>
                )}
            </div>

            {/* COUNTDOWN */}
            {!isLoading && timeLeft && (
              <div className="mb-8">
                <p className="mb-4 text-center text-sm font-medium text-muted-foreground">
                  {timeLeft.isLive ? "Webinar is Live" : "Webinar starts in"}
                </p>

                <div className="grid grid-cols-4 gap-4">
                  {["days", "hours", "minutes", "seconds"].map((key) => (
                    <div key={key} className="rounded-lg bg-card p-4 text-center">
                      <div className="mb-1 text-3xl font-bold text-[#00A977] md:text-4xl">
                        {String(timeLeft[key]).padStart(2, "0")}
                      </div>
                      <div className="text-xs capitalize text-muted-foreground">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                disabled={isLoading}
                onClick={() => {
                  router.push("/register");
                }}
                className="w-full bg-[#00A977] font-semibold md:w-auto md:px-12 cursor-pointer duration-300"
              >
                {timeLeft?.isLive ? "Join Live Webinar" : "Register Now"}
              </Button>
            </div>
          </div>
        </Card>
      </div>

    </section>
  )
}

/** Reusable info item */
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-lg bg-card p-4">
    <div className="rounded-full bg-primary/10 p-3">{icon}</div>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
)