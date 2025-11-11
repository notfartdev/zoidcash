"use client"

import { Suspense } from "react"
import LoadingSpinner from "../components/LoadingSpinner"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import FluidBackground from "../components/FluidBackground"

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] overflow-hidden relative">
      <FluidBackground />
      <Navigation />
      <Suspense fallback={<LoadingSpinner />}>
        <DocsContent />
      </Suspense>
      <Footer />
    </main>
  )
}

function DocsContent() {
  return (
    <div className="pt-24 pb-20 relative z-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-4 h-4 border border-white opacity-20 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/4 right-32 w-6 h-6 border border-white opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white opacity-30 animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-1 bg-white opacity-10 rotate-12"></div>
        <div className="absolute top-2/3 left-10 w-8 h-8 border border-white opacity-10 rotate-45"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-light tracking-wider mb-6 font-mono text-white">
            ZOID<span className="font-bold">CASH</span>
          </h1>
          <div className="w-32 h-px bg-white mb-8"></div>
          <p className="text-2xl text-gray-400 leading-relaxed">
            The Privacy Layer of Solana
          </p>
          <p className="text-lg text-gray-500 mt-4 font-mono">
            Complete Technical Documentation • Version 1.0.0
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-16 bg-[#1a1a1a] border-2 border-white/20 p-8">
          <h2 className="text-xl font-mono font-bold mb-6 tracking-wide text-white">TABLE OF CONTENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "#overview", label: "01. Overview" },
              { href: "#mission", label: "02. Mission & Vision" },
              { href: "#architecture", label: "03. Architecture" },
              { href: "#modules", label: "04. Core Modules" },
              { href: "#cryptography", label: "05. Cryptography" },
              { href: "#privacy", label: "06. Privacy by Design" },
              { href: "#getting-started", label: "07. Getting Started" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-mono text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-20">
          {/* Section 1: Overview */}
          <section id="overview" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-white pb-4 text-white">
              01. OVERVIEW
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                Zoidcash is the privacy layer of Solana. It is a modular system that makes privacy a native feature 
                of the blockchain. From stealth transactions to encrypted communication, Zoidcash enables you to stay 
                invisible while staying connected.
              </p>
              
              <div className="bg-[#1a1a1a] border-2 border-white/20 p-6 my-8">
                <div className="mb-2 text-gray-400 font-mono text-sm">// Mission Statement</div>
                <p className="text-white font-mono">
                  "Privacy is not about hiding. It is about protecting what matters."
                </p>
                <div className="mt-2 text-xs text-gray-500 font-mono">- The Zoidcash Team</div>
              </div>

              <div className="grid grid-cols-3 gap-6 my-8">
                <div className="bg-[#1a1a1a] border border-white/10 p-6">
                  <div className="text-3xl font-mono font-bold mb-2 text-white">100%</div>
                  <div className="text-sm text-gray-400 font-mono">Privacy</div>
                </div>
                <div className="bg-[#1a1a1a] border border-white/10 p-6">
                  <div className="text-3xl font-mono font-bold mb-2 text-white">0</div>
                  <div className="text-sm text-gray-400 font-mono">Metadata</div>
                </div>
                <div className="bg-[#1a1a1a] border border-white/10 p-6">
                  <div className="text-3xl font-mono font-bold mb-2 text-white">∞</div>
                  <div className="text-sm text-gray-400 font-mono">Aliases</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Mission */}
          <section id="mission" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-white pb-4 text-white">
              02. MISSION & VISION
            </h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-mono font-bold mb-4 text-white">Our Mission</h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                We believe privacy is not a privilege but a right. Zoidcash exists to restore digital freedom by 
                building privacy, anonymity, and control into Solana. Our tools let you transact, communicate, and 
                build without exposure or surveillance.
              </p>

              <div className="bg-[#1a1a1a] border-l-4 border-white p-6 my-8">
                <p className="font-mono text-sm mb-2 text-gray-400">PHILOSOPHY:</p>
                <p className="text-lg font-bold text-white">
                  Privacy by default, transparency by choice.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Cryptography replaces trust. Decentralization is defense.
                </p>
              </div>

              <h3 className="text-2xl font-mono font-bold mb-4 mt-8 text-white">The Vision</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Zoidcash was created to make privacy simple, accessible, and built into the core of blockchain. 
                Our vision is a world where every digital interaction can be private by default. We want to make privacy 
                feel normal again, as natural as sending a message or making a payment.
              </p>
            </div>
          </section>

          {/* Section 3: Architecture */}
          <section id="architecture" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-white pb-4 text-white">
              03. ARCHITECTURE
            </h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-mono font-bold mb-6 text-white">Modular System Design</h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                Zoidcash is built as a set of independent yet connected modules. Each one brings a layer of privacy 
                to the Solana ecosystem. You can use them individually or as one integrated privacy layer.
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: "ZOID OS",
                    description: "Secure foundation that creates ephemeral sessions. Hides device, location, and wallet data behind temporary, disposable sessions.",
                    features: ["Ephemeral Sessions", "Hidden Metadata", "Isolated Wallet Keys", "Secure Routing"]
                  },
                  {
                    title: "TX SHADOWNET",
                    description: "Private routing network that hides source and destination. Routes through multiple independent relays where each relay only sees part of the path.",
                    features: ["Multi-Hop Routing", "Multi-TX Pathways", "Adaptive Mixing", "ZK Proofs for Integrity"]
                  },
                  {
                    title: "ID OBFUSCATION",
                    description: "Removes fixed identity concept. Every action uses new identifiers that cannot be linked to past activity.",
                    features: ["One-Time Addresses", "Rotating Keys", "No Persistent Identifiers", "MPC Forward Secrecy"]
                  },
                  {
                    title: "ZOIDPAY",
                    description: "Private payment system. Each pay link creates a unique, one-time payment path. Receiver stays invisible.",
                    features: ["Stealth Addresses", "ShadowNet Routing", "HPKE Encryption", "Auto Sweep"]
                  },
                  {
                    title: "ZOIDROUTE",
                    description: "Private swap system for DeFi. Pairs stealth addresses with ShadowNet relays for hidden end-to-end trade paths.",
                    features: ["One-Time Outputs", "Multi-TX Pathways", "Private Execution", "No Linkability"]
                  },
                  {
                    title: "ZOIDMASK",
                    description: "Identity shield that protects how users appear. Makes communication, transactions, and actions unlinkable.",
                    features: ["Ephemeral Zoid IDs", "Dynamic Rotation", "Encrypted Metadata", "Decoupled Wallet Linking"]
                  },
                ].map((module, index) => (
                  <div key={index} className="border-2 border-white/20 bg-[#1a1a1a] p-6 hover:border-white/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <h4 className="text-xl font-mono font-bold text-white">{module.title}</h4>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{module.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {module.features.map((feature, i) => (
                        <div key={i} className="text-xs font-mono text-gray-400">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Modules */}
          <section id="modules" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-white pb-4 text-white">
              04. CORE MODULES
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-8">
                Together, these systems create the Zoidcash privacy stack. Each module works independently but 
                can be combined for maximum privacy protection.
              </p>

              <div className="bg-[#1a1a1a] border-2 border-white/20 p-8 my-8">
                <h4 className="font-mono font-bold text-lg mb-4 text-white">PRIVACY-FIRST OPERATING SYSTEM FLOW</h4>
                <div className="space-y-4">
                  {[
                    { step: "1", name: "USER ACTION", detail: "Zoidcash creates ephemeral session" },
                    { step: "2", name: "ID OBFUSCATION", detail: "One-time alias generated" },
                    { step: "3", name: "SHADOWNET ROUTING", detail: "Transaction routed through relays" },
                    { step: "4", name: "ENCRYPTION", detail: "HPKE, ZK proofs, MPC applied" },
                    { step: "5", name: "ZERO METADATA", detail: "Complete privacy achieved" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center space-x-4">
                      <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
                        <span className="text-sm font-mono font-bold text-white">{item.step}</span>
                      </div>
                      <div>
                        <div className="font-mono font-bold text-white">{item.name}</div>
                        <div className="text-xs text-gray-400 font-mono">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Cryptography */}
          <section id="cryptography" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-white pb-4 text-white">
              05. CRYPTOGRAPHY
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-8">
                Zoidcash is powered by modern cryptography. Privacy is the default setting. Transparency is a choice.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Stealth Addresses",
                    description: "Make each payment unlinkable. Receivers accept payments without exposing permanent addresses.",
                    details: "One-time addresses generated per transaction, only sender and receiver can recognize"
                  },
                  {
                    title: "HPKE",
                    description: "Hybrid Public Key Encryption encrypts messages from sender to receiver.",
                    details: "Non-interactive, fast, lightweight. Perfect for blockchain use."
                  },
                  {
                    title: "Zero Knowledge Proofs (PLONK)",
                    description: "Prove validity without revealing data. Fast enough to keep up with Solana's speed.",
                    details: "Universal setup, small proofs, fast verification, flexible for complex logic"
                  },
                  {
                    title: "MPC",
                    description: "Multi-Party Computation splits secrets between nodes so no one controls the full picture.",
                    details: "Secret sharing, distributed computation, threshold security, automatic rotation"
                  },
                ].map((item, index) => (
                  <div key={index} className="border-2 border-white/20 bg-[#1a1a1a] p-6">
                    <h4 className="text-lg font-mono font-bold mb-3 text-white">{item.title}</h4>
                    <p className="text-gray-300 mb-3 text-sm">{item.description}</p>
                    <p className="text-xs text-gray-400 font-mono">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: Privacy */}
          <section id="privacy" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-white pb-4 text-white">
              06. PRIVACY BY DESIGN
            </h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-mono font-bold mb-4 text-white">Guiding Principles</h3>

              <div className="space-y-6">
                {[
                  {
                    principle: "Privacy by Default",
                    description: "Privacy should not require extra effort. Every part of Zoidcash protects users automatically."
                  },
                  {
                    principle: "Transparency by Choice",
                    description: "Users decide what they reveal and when. Everything is open for community review."
                  },
                  {
                    principle: "Technology over Trust",
                    description: "Zoidcash uses encryption, zero-knowledge proofs, and distributed systems. Privacy depends on code, not trust."
                  },
                  {
                    principle: "Decentralization as Defense",
                    description: "No single server, company, or government can compromise privacy. Trust spreads across a global network."
                  },
                  {
                    principle: "Simple and Usable",
                    description: "Privacy should not be complicated. Zoidcash is designed to be fast and familiar."
                  },
                  {
                    principle: "Open and Verifiable",
                    description: "The code that protects users must be open to the public. Always transparent about how it works."
                  },
                  {
                    principle: "Freedom for Everyone",
                    description: "Zoidcash is for individuals, not institutions. Everyone deserves the right to act freely without being tracked."
                  },
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-white/40 pl-6">
                    <h4 className="font-mono font-bold text-lg mb-2 text-white">{item.principle}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: Getting Started */}
          <section id="getting-started" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-white pb-4 text-white">
              07. GETTING STARTED
            </h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-mono font-bold mb-6 text-white">For Users</h3>
              
              <div className="bg-[#0a0a0a] border-2 border-white/20 text-white p-6 font-mono text-sm mb-8">
                <div className="text-gray-400 mb-4"># Quick Start Guide</div>
                <div className="space-y-2 text-gray-300">
                  <div><span className="text-white font-bold">1.</span> Connect your Solana wallet</div>
                  <div><span className="text-white font-bold">2.</span> Enable Zoidcash for ephemeral sessions</div>
                  <div><span className="text-white font-bold">3.</span> Use ZoidPay for private payments</div>
                  <div><span className="text-white font-bold">4.</span> Route transactions through ShadowNet</div>
                  <div><span className="text-white font-bold">5.</span> Execute private swaps with ZoidRoute</div>
                  <div><span className="text-white font-bold">6.</span> Stay invisible. Privacy by default.</div>
                </div>
              </div>

              <h3 className="text-2xl font-mono font-bold mb-6 mt-12 text-white">For Developers</h3>
              
              <div className="bg-[#0a0a0a] border-2 border-white/20 text-white p-6 font-mono text-sm mb-8">
                <div className="text-gray-400 mb-4"># Zoidcash SDK Example</div>
                <pre className="text-xs overflow-x-auto text-gray-300">
{`import { Zoidcash } from '@zoidcash/sdk'

const zoidcash = new Zoidcash({
  network: 'mainnet',
  apiKey: process.env.ZOIDCASH_API_KEY
})

// Create private payment link
const payment = await zoidcash.zoidPay.create({
  amount: '10 USDC',
  token: 'USDC'
})

// Send private transaction
const tx = await zoidcash.shadowNet.send({
  to: recipientAddress,
  amount: '1 SOL',
  stealth: true
})

// Execute private swap
await zoidcash.zoidRoute.swap({
  from: 'USDC',
  to: 'SOL',
  amount: '100',
  stealth: true
})`}
                </pre>
              </div>

              <div className="border-2 border-white/20 bg-[#1a1a1a] p-6 mt-8">
                <h4 className="font-mono font-bold mb-3 text-white">📚 DOCUMENTATION</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Full API reference, SDK documentation, and integration guides available.
                </p>
                <div className="flex space-x-4">
                  <a href="/api-access" className="px-4 py-2 bg-white text-black font-mono text-sm hover:bg-gray-200 transition-colors">
                    API Reference
                  </a>
                  <a href="#" className="px-4 py-2 border-2 border-white font-mono text-sm hover:bg-white hover:text-black transition-all text-white">
                    SDK Docs
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
