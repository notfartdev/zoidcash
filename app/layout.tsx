import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SeekerSIM™ - Blockchain eSIM for Solana Seeker Phones",
  description:
    "GSMA-compliant blockchain eSIM and IoT connectivity platform compatible with Solana Seeker phones. Advanced AI-powered solutions with global reach, powered by Vercel infrastructure.",
  keywords: "eSIM, IoT, blockchain, Solana, Seeker phone, GSMA, AI, connectivity, telecommunications, Vercel, edge computing, SGP.22",
  authors: [{ name: "SeekerSIM" }],
  robots: "index, follow",
  openGraph: {
    title: "SeekerSIM™ - Blockchain eSIM for Solana Seeker Phones",
    description: "GSMA-compliant blockchain eSIM and IoT connectivity platform compatible with Solana Seeker phones",
    type: "website",
    locale: "en_US",
    siteName: "SeekerSIM",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeekerSIM™ - Blockchain eSIM for Solana Seeker Phones",
    description: "GSMA-compliant blockchain eSIM and IoT connectivity platform compatible with Solana Seeker phones",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="x402:payment-protocol" content="enabled" />
        <meta name="x402:supported-schemes" content="exact" />
        <meta name="x402:supported-networks" content="solana,base,ethereum" />
        <link rel="payment-protocol" href="https://x402.org" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
