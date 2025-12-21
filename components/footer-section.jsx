import { MessageCircle, Send, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#033220] px-4 py-12">

      <div className="container mx-auto max-w-6xl">

        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">

            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="RJTI Charts"
                width={140}
                height={40}
                priority
                className="object-contain"
              />
            </div>

            <p className="mb-4 text-sm text-white/60">
              Empowering traders with data-driven insights and structured educational content. Building a community of
              disciplined, informed market participants.
            </p>
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
                <a href="/#webinar-details" className="hover:text-primary">
                  Webinar Details
                </a>
              </li>
              <li>
                <a href="/#community" className="hover:text-primary">
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
                <a href="https://rjticharts.com/terms" className="hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://rjticharts.com/privacy" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://rjticharts.com/contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-muted pt-8 text-center text-sm text-white/60">
          © 2013–{new Date().getFullYear()} <strong>Revelations of JTICharts</strong> — Pioneering Algorithmic Signals Before the AI Era | All rights reserved
        </div>

      </div>
    </footer>
  )
}
