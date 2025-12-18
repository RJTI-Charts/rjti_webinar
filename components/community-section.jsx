import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Send, Mail } from "lucide-react"

const communityChannels = [
  {
    icon: MessageCircle,
    name: "WhatsApp Community",
    description: "Daily market insights and group discussions",
    members: "2,500+ active members",
  },
  {
    icon: Send,
    name: "Telegram Channel",
    description: "Real-time updates and educational content",
    members: "5,000+ subscribers",
  },
  {
    icon: Mail,
    name: "Email Newsletter",
    description: "Weekly analysis and learning resources",
    members: "10,000+ subscribers",
  },
]

export function CommunitySection() {
  return (
    <section className="bg-background px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Join Our Learning Community</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Connect with fellow traders, share insights, and continue your learning journey with our supportive
            community.
          </p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {communityChannels.map((channel, index) => (
            <Card
              key={index}
              className="border-2 border-primary/10 bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4">
                <channel.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">{channel.name}</h3>
              <p className="mb-3 text-sm text-muted-foreground">{channel.description}</p>
              <p className="text-xs font-medium text-primary">{channel.members}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 font-semibold bg-transparent">
            Join the RJTI Charts Community
          </Button>
        </div>
      </div>
    </section>
  )
}
