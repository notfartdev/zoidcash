import { Suspense } from "react"
import LoadingSpinner from "../components/LoadingSpinner"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export const metadata = {
  title: "Documentation - SeekerSIM™",
  description: "Complete documentation for SeekerSIM blockchain eSIM platform",
}

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
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
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-light tracking-wider mb-6 font-mono">
            SEEKER<span className="font-bold">SIM</span>
            <sup className="text-2xl">™</sup>
          </h1>
          <div className="w-32 h-px bg-black mb-8"></div>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Complete Technical Documentation
          </p>
          <p className="text-lg text-gray-500 mt-4 font-mono">
            Version 2.1.0 • Updated November 2025
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-16 bg-gray-50 border-2 border-gray-200 p-8">
          <h2 className="text-xl font-mono font-bold mb-6 tracking-wide">TABLE OF CONTENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#overview" className="text-sm font-mono text-gray-600 hover:text-black transition-colors">
              01. Overview
            </a>
            <a href="#problem" className="text-sm font-mono text-gray-600 hover:text-black transition-colors">
              02. Problem Statement
            </a>
            <a href="#solution" className="text-sm font-mono text-gray-600 hover:text-black transition-colors">
              03. Solution
            </a>
            <a href="#how-it-works" className="text-sm font-mono text-gray-600 hover:text-black transition-colors">
              04. How It Works
            </a>
            <a href="#architecture" className="text-sm font-mono text-gray-600 hover:text-black transition-colors">
              05. Technical Architecture
            </a>
            <a href="#features" className="text-sm font-mono text-gray-600 hover:text-black transition-colors">
              06. Key Features
            </a>
            <a href="#market" className="text-sm font-mono text-gray-600 hover:text-black transition-colors">
              07. Market Opportunity
            </a>
            <a href="#getting-started" className="text-sm font-mono text-gray-600 hover:text-black transition-colors">
              08. Getting Started
            </a>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-20">
          {/* Section 1: Overview */}
          <section id="overview" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-black pb-4">
              01. OVERVIEW
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                SeekerSIM™ is a revolutionary blockchain-based global eSIM connectivity platform designed specifically
                for Solana Seeker phones and expanding to all eSIM-capable devices. The platform eliminates traditional
                roaming fees, enables instant activation across 180+ countries, and accepts cryptocurrency payments.
              </p>
              
              <div className="grid grid-cols-3 gap-6 my-8">
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="text-3xl font-mono font-bold mb-2">180+</div>
                  <div className="text-sm text-gray-600 font-mono">Countries Covered</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="text-3xl font-mono font-bold mb-2">650+</div>
                  <div className="text-sm text-gray-600 font-mono">Mobile Networks</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-6">
                  <div className="text-3xl font-mono font-bold mb-2">$0</div>
                  <div className="text-sm text-gray-600 font-mono">Roaming Fees</div>
                </div>
              </div>

              <div className="bg-black text-white p-6 my-8 font-mono text-sm">
                <div className="mb-2 text-gray-400">// Mission Statement</div>
                <p>
                  "Making mobile connectivity as borderless as the internet,<br />
                  and as user-controlled as cryptocurrency."
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Problem */}
          <section id="problem" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-black pb-4">
              02. PROBLEM STATEMENT
            </h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-mono font-bold mb-4">Friction in Global Connectivity</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                International travelers, digital nomads, and mobile users face significant challenges with traditional
                mobile connectivity:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border-2 border-red-200 bg-red-50 p-6">
                  <h4 className="font-mono font-bold text-lg mb-3">💸 Expensive Roaming</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Average roaming cost: <strong>$41 per trip</strong></li>
                    <li>• UK travelers lost <strong>$670M+</strong> in 2022</li>
                    <li>• Hidden fees and bill shock</li>
                  </ul>
                </div>

                <div className="border-2 border-red-200 bg-red-50 p-6">
                  <h4 className="font-mono font-bold text-lg mb-3">🔒 Privacy Concerns</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Personal data sharing required</li>
                    <li>• ID registration mandates</li>
                    <li>• Centralized carrier control</li>
                  </ul>
                </div>

                <div className="border-2 border-red-200 bg-red-50 p-6">
                  <h4 className="font-mono font-bold text-lg mb-3">⏱️ Time & Inconvenience</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Hunting for local SIM cards</li>
                    <li>• Language barriers</li>
                    <li>• Physical SIM swapping hassle</li>
                  </ul>
                </div>

                <div className="border-2 border-red-200 bg-red-50 p-6">
                  <h4 className="font-mono font-bold text-lg mb-3">👨‍💻 Developer Complexity</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Complex carrier contracts</li>
                    <li>• Opaque billing systems</li>
                    <li>• Fragmented APIs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 border-l-4 border-black p-6 my-8">
                <p className="font-mono text-sm mb-2 text-gray-600">KEY INSIGHT:</p>
                <p className="text-lg font-bold">
                  90% of travelers are willing to use eSIMs if given a convenient option
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Yet the $60B+ global roaming market remains fragmented and user-hostile
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Solution */}
          <section id="solution" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-black pb-4">
              03. SOLUTION
            </h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-mono font-bold mb-4">Blockchain-Based Global eSIM Service</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                SeekerSIM is a global mobile service powered by blockchain and eSIM technology. It enables users to
                instantly download local eSIM profiles for data in virtually any country, pay with crypto, and maintain
                privacy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border-2 border-green-200 bg-green-50 p-6">
                  <div className="text-4xl mb-3">🌍</div>
                  <h4 className="font-mono font-bold text-lg mb-2">Global Coverage</h4>
                  <p className="text-sm text-gray-700">
                    Instant provisioning in 180+ countries via 650+ carrier networks
                  </p>
                </div>

                <div className="border-2 border-green-200 bg-green-50 p-6">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="font-mono font-bold text-lg mb-2">Crypto Payments</h4>
                  <p className="text-sm text-gray-700">
                    Pay with SOL/USDC via Seed Vault. ~1 second finality, {"<"}$0.01 fees
                  </p>
                </div>

                <div className="border-2 border-green-200 bg-green-50 p-6">
                  <div className="text-4xl mb-3">🔐</div>
                  <h4 className="font-mono font-bold text-lg mb-2">Privacy First</h4>
                  <p className="text-sm text-gray-700">
                    Zero-knowledge KYC, minimal data collection, pseudonymous by design
                  </p>
                </div>
              </div>

              <div className="bg-black text-white p-8 my-8">
                <h4 className="font-mono font-bold text-xl mb-4">VALUE PROPOSITION</h4>
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-mono font-bold mb-2">94%</div>
                    <div className="text-xs text-gray-400 font-mono uppercase">Cost Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-mono font-bold mb-2">{"<"}3sec</div>
                    <div className="text-xs text-gray-400 font-mono uppercase">Activation Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-mono font-bold mb-2">100%</div>
                    <div className="text-xs text-gray-400 font-mono uppercase">Automated</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: How It Works */}
          <section id="how-it-works" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-black pb-4">
              04. HOW IT WORKS
            </h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-mono font-bold mb-6">User Experience Flow</h3>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "PLAN SELECTION",
                    description: "User opens the SeekerSIM app on their Solana Seeker phone and selects a destination and data package (e.g., 1GB in France for 7 days, or pay-as-you-go).",
                    tech: "UI/UX Layer",
                  },
                  {
                    step: "02",
                    title: "CRYPTO PAYMENT",
                    description: "User approves payment with SOL or USDC via Seed Vault wallet with biometric authentication. Transaction confirmed on Solana blockchain in ~1 second.",
                    tech: "Blockchain Layer",
                  },
                  {
                    step: "03",
                    title: "SMART CONTRACT VERIFICATION",
                    description: "On-chain smart contract verifies payment, credits user balance, and triggers provisioning event. All transparent and auditable on Solana.",
                    tech: "Smart Contract Layer",
                  },
                  {
                    step: "04",
                    title: "API PROVISIONING",
                    description: "Backend service detects blockchain event and calls eSIM provider API (Tier-1/Tier-2 aggregators) to generate eSIM profile and QR code.",
                    tech: "API Integration Layer",
                  },
                  {
                    step: "05",
                    title: "INSTANT ACTIVATION",
                    description: "eSIM profile delivered to device via QR code or direct installation. User connects to local network and is online within seconds.",
                    tech: "Network Layer",
                  },
                ].map((item, index) => (
                  <div key={index} className="border-2 border-gray-200 p-6 relative">
                    <div className="absolute top-0 left-0 w-12 h-12 border-b-2 border-r-2 border-black"></div>
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 border-2 border-black flex items-center justify-center bg-black text-white">
                          <span className="text-xl font-mono font-bold">{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-mono font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>
                        <div className="inline-block px-3 py-1 bg-gray-100 border border-gray-300 text-xs font-mono text-gray-600">
                          {item.tech}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 p-6">
                <h4 className="font-mono font-bold mb-3">⚡ AVERAGE COMPLETION TIME</h4>
                <p className="text-2xl font-mono font-bold">~3 seconds end-to-end</p>
                <p className="text-sm text-gray-600 mt-2">From plan selection to active connectivity</p>
              </div>
            </div>
          </section>

          {/* Section 5: Architecture */}
          <section id="architecture" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-black pb-4">
              05. TECHNICAL ARCHITECTURE
            </h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-mono font-bold mb-6">Platform Layers</h3>

              <div className="space-y-8">
                {/* Client Layer */}
                <div className="border-2 border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="text-xl font-mono font-bold">CLIENT LAYER</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Primary: <strong>Solana Seeker Phone</strong> with built-in Seed Vault wallet and eSIM support
                  </p>
                  <p className="text-sm text-gray-600">
                    Future: Web app, iOS/Android apps, IoT devices, laptops with eSIM
                  </p>
                </div>

                {/* Application Layer */}
                <div className="border-2 border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <h4 className="text-xl font-mono font-bold">APPLICATION LAYER</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Mobile App:</strong> Native Seeker app with Solana Mobile Stack integration</li>
                    <li><strong>SDK:</strong> Developer kit for third-party integrations</li>
                    <li><strong>Seed Vault:</strong> Secure enclave for private key storage and biometric auth</li>
                  </ul>
                </div>

                {/* Infrastructure Layer */}
                <div className="border-2 border-gray-200 p-6 bg-gray-50">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <h4 className="text-xl font-mono font-bold">INFRASTRUCTURE LAYER</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <strong className="font-mono">Solana Blockchain</strong>
                      <p className="text-sm text-gray-600">Payment processing, smart contracts, settlement</p>
                    </div>
                    <div>
                      <strong className="font-mono">Edge API (Vercel)</strong>
                      <p className="text-sm text-gray-600">Global API gateway, low-latency endpoints</p>
                    </div>
                    <div>
                      <strong className="font-mono">IPFS Storage</strong>
                      <p className="text-sm text-gray-600">Decentralized data storage</p>
                    </div>
                    <div>
                      <strong className="font-mono">Auth Layer</strong>
                      <p className="text-sm text-gray-600">zk-KYC, DID verification</p>
                    </div>
                  </div>
                </div>

                {/* Provider Layer */}
                <div className="border-2 border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                    <h4 className="text-xl font-mono font-bold">ESIM PROVIDER LAYER</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Partnerships with tier-1 eSIM aggregators providing global coverage:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Tier-1 Aggregator:</strong> Primary provider with 650+ networks</li>
                    <li>• <strong>Tier-2 Aggregator:</strong> Backup and regional specialists</li>
                    <li>• <strong>Direct MNO:</strong> Future direct carrier partnerships</li>
                  </ul>
                </div>

                {/* Network Layer */}
                <div className="border-2 border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="text-xl font-mono font-bold">GLOBAL NETWORK LAYER</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-mono font-bold">650+</div>
                      <div className="text-xs text-gray-600 font-mono">Carriers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-mono font-bold">180+</div>
                      <div className="text-xs text-gray-600 font-mono">Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-mono font-bold">4G/5G</div>
                      <div className="text-xs text-gray-600 font-mono">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Features */}
          <section id="features" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-black pb-4">
              06. KEY FEATURES
            </h2>
            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "ICCID Search & Validation",
                    description: "Real-time ICCID validation with global database integration",
                    specs: ["99.9% accuracy", "<100ms response", "Global coverage"],
                  },
                  {
                    title: "SM-DP+ Integration",
                    description: "GSMA SGP.22 compliant subscription manager integration",
                    specs: ["TLS 1.3 security", "24/7 availability", "Unlimited profiles"],
                  },
                  {
                    title: "QR Code Activation",
                    description: "Instant eSIM activation via secure QR code generation",
                    specs: ["AES-256 encryption", "99.8% success rate", "Instant delivery"],
                  },
                  {
                    title: "Crypto Payments",
                    description: "Seamless SOL/USDC payments via Seed Vault",
                    specs: ["~1sec speed", "<$0.01 fees", "Solana network"],
                  },
                  {
                    title: "Global Coverage",
                    description: "Access to 650+ networks across 180+ countries",
                    specs: ["Auto-failover", "Best network selection", "99.9% uptime"],
                  },
                  {
                    title: "Privacy Protection",
                    description: "Zero-knowledge proofs and minimal data collection",
                    specs: ["zk-KYC", "DID support", "E2E encryption"],
                  },
                ].map((feature, index) => (
                  <div key={index} className="border-2 border-gray-200 p-6 hover:border-black transition-all duration-300">
                    <h4 className="text-lg font-mono font-bold mb-3">{feature.title}</h4>
                    <p className="text-gray-700 mb-4 text-sm">{feature.description}</p>
                    <div className="space-y-1">
                      {feature.specs.map((spec, i) => (
                        <div key={i} className="text-xs font-mono text-gray-600">
                          • {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: Market */}
          <section id="market" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-black pb-4">
              07. MARKET OPPORTUNITY
            </h2>
            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-mono font-bold mb-4">eSIM Adoption</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• <strong>650M+</strong> eSIM devices in 2023</li>
                    <li>• <strong>2B+</strong> projected by 2025</li>
                    <li>• <strong>441</strong> operators support eSIM (2024)</li>
                    <li>• <strong>90%</strong> operator support by 2025</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-mono font-bold mb-4">Market Size</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• <strong>$1.8B</strong> travel eSIM revenue (2025)</li>
                    <li>• <strong>$8.7B</strong> projected by 2030</li>
                    <li>• <strong>500%</strong> growth 2023-2028</li>
                    <li>• <strong>$60B+</strong> roaming market ripe for disruption</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 p-8 my-8">
                <h4 className="font-mono font-bold text-2xl mb-4">CRYPTO + TELECOM CONVERGENCE</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-mono font-bold mb-2">300M+</div>
                    <div className="text-sm text-gray-600">Global crypto users</div>
                  </div>
                  <div>
                    <div className="text-4xl font-mono font-bold mb-2">150K</div>
                    <div className="text-sm text-gray-600">Seeker phones pre-ordered</div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-mono font-bold mb-4 mt-12">Target Segments</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-gray-300 p-4 text-center">
                  <div className="text-2xl mb-2">🌐</div>
                  <div className="font-mono font-bold text-sm">Digital Nomads</div>
                </div>
                <div className="border border-gray-300 p-4 text-center">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="font-mono font-bold text-sm">Crypto Users</div>
                </div>
                <div className="border border-gray-300 p-4 text-center">
                  <div className="text-2xl mb-2">✈️</div>
                  <div className="font-mono font-bold text-sm">Frequent Travelers</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Getting Started */}
          <section id="getting-started" className="scroll-mt-24">
            <h2 className="text-4xl font-mono font-light tracking-wide mb-6 border-b-2 border-black pb-4">
              08. GETTING STARTED
            </h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-mono font-bold mb-6">For Users</h3>
              
              <div className="bg-gray-900 text-white p-6 rounded font-mono text-sm mb-8">
                <div className="text-gray-400 mb-4"># Quick Start Guide</div>
                <div className="space-y-2">
                  <div><span className="text-green-400">1.</span> Download SeekerSIM app from Solana dApp Store</div>
                  <div><span className="text-green-400">2.</span> Connect your Seed Vault wallet</div>
                  <div><span className="text-green-400">3.</span> Select destination and data package</div>
                  <div><span className="text-green-400">4.</span> Pay with SOL/USDC</div>
                  <div><span className="text-green-400">5.</span> Scan QR code to activate eSIM</div>
                  <div><span className="text-green-400">6.</span> Connected! Enjoy global connectivity</div>
                </div>
              </div>

              <h3 className="text-2xl font-mono font-bold mb-6 mt-12">For Developers</h3>
              
              <div className="bg-gray-900 text-white p-6 rounded font-mono text-sm mb-8">
                <div className="text-gray-400 mb-4"># API Integration Example</div>
                <pre className="text-sm overflow-x-auto">
{`// Initialize SeekerSIM SDK
import { SeekerSIM } from '@seekersim/sdk'

const client = new SeekerSIM({
  network: 'mainnet',
  apiKey: process.env.SEEKERSIM_API_KEY
})

// Purchase eSIM plan
const result = await client.provision({
  country: 'FR',
  dataAmount: '1GB',
  duration: '7days',
  wallet: userWalletAddress
})

// Result includes QR code and activation details
console.log(result.qrCode)
console.log(result.activationCode)`}
                </pre>
              </div>

              <div className="border-2 border-blue-200 bg-blue-50 p-6 mt-8">
                <h4 className="font-mono font-bold mb-3">📚 API DOCUMENTATION</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Full API reference, SDK documentation, and integration guides coming soon.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="px-4 py-2 bg-black text-white font-mono text-sm hover:bg-gray-800 transition-colors">
                    API Reference
                  </a>
                  <a href="#" className="px-4 py-2 border-2 border-black font-mono text-sm hover:bg-black hover:text-white transition-all">
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

