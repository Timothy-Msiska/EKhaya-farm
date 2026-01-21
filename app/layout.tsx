import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import localFont from "next/font/local"

const dmSans = DM_Sans({ subsets: ["latin"] })
const playfairDisplay = Playfair_Display({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

/* Local Ekhaya font (headings) */
const ekhayaFont = localFont({
  src: "../public/fonts/EkhayaDisplayFont.otf",
  variable: "--font-ekhaya",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ekhaya Farms | Growing Malawi, Feeding Communities",
  description:
    "Ekhaya Farms is a trusted Malawian agricultural company producing high-quality fresh produce distributed across all 8 districts of Malawi through Ekhaya Farm Food Stores.",
  keywords: [
    "Ekhaya Farms",
    "Malawi",
    "agriculture",
    "farming",
    "fresh produce",
    "food security",
    "sustainable farming",
  ],
  generator: "v0.app",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
