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
  title: "Moonware OS - Privacy Layer of Solana",
  description:
    "The privacy layer of Solana. A modular system that makes privacy a native feature of the blockchain. From stealth transactions to encrypted communication, Moonware enables you to stay invisible while staying connected.",
  keywords: "privacy, Solana, blockchain, stealth addresses, zero-knowledge proofs, encrypted communication, privacy layer, Moonware, anonymity, DeFi privacy",
  authors: [{ name: "Moonware OS" }],
  robots: "index, follow",
  openGraph: {
    title: "Moonware OS - Privacy Layer of Solana",
    description: "The privacy layer of Solana. A modular system that makes privacy a native feature of the blockchain.",
    type: "website",
    locale: "en_US",
    siteName: "Moonware OS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonware OS - Privacy Layer of Solana",
    description: "The privacy layer of Solana. A modular system that makes privacy a native feature of the blockchain.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0a0a0a",
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
