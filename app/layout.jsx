import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import {
  Inter,
  Geist as V0_Font_Geist,
  Abril_Fatface as V0_Font_Abril_Fatface,
} from "next/font/google"
import { Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"
import Script from "next/script"

// Fonts
const inter = Inter({ subsets: ["latin"] })

const geist = V0_Font_Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const abrilFatface = V0_Font_Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata = {
  title: "RJTI Charts - Master Data-Driven Trading | Premium Webinar",
  description:
    "Join our live webinar and learn data-driven market insights, trend identification, and risk management strategies. Premium educational trading webinar.",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17855649640"
          strategy="afterInteractive"
        />

        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17855649640');
          `}
        </Script>

        {/* TikTok Pixel */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject = t;
              var ttq = w[t] = w[t] || [];
              ttq.methods = ["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
              ttq.setAndDefer = function(t, e) {
                t[e] = function() {
                  t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                }
              };
              for (var i = 0; i < ttq.methods.length; i++) {
                ttq.setAndDefer(ttq, ttq.methods[i]);
              }
              ttq.load = function(e) {
                var n = document.createElement("script");
                n.type = "text/javascript";
                n.async = true;
                n.src = "https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=" + e + "&lib=" + t;
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(n, a);
              };
              ttq.load('D5HASG3C77U2AGGFKVN0');
              ttq.page();
            }(window, document, 'ttq');
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