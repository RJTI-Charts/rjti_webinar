import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter, Geist as V0_Font_Geist, Abril_Fatface as V0_Font_Abril_Fatface } from "next/font/google"
import { Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"
import Script from "next/script"


// Initialize fonts
const _geist = V0_Font_Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _abrilFatface = V0_Font_Abril_Fatface({ subsets: ["latin"], weight: ["400"] })

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RJTI Charts - Master Data-Driven Trading | Premium Webinar",
  description:
    "Join our live webinar and learn data-driven market insights, trend identification, and risk management strategies. Premium educational trading webinar.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads / Google Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17855649640"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17855649640');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
