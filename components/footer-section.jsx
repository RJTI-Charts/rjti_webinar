import { MessageCircle, Send, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#033220] px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="mb-3 text-2xl font-bold text-white">RJTI Charts</h3>
            <p className="mb-4 text-sm text-white/60">
              Empowering traders with data-driven insights and structured educational content. Building a community of
              disciplined, informed market participants.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F1EC] text-primary transition-colors hover:bg-primary/20"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F1EC] text-primary transition-colors hover:bg-primary/20"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F1EC] text-primary transition-colors hover:bg-primary/20"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Webinar Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Learning Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Risk Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-muted pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} RJTI Charts. All rights reserved.</p>
          <p className="mt-2">
            Educational content for informational purposes only. Not financial advice. Trading involves risk.
          </p>
        </div>
      </div>
    </footer>
  )
}
