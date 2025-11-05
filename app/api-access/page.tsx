"use client"

import { Suspense, useState } from "react"
import LoadingSpinner from "../components/LoadingSpinner"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import FluidBackground from "../components/FluidBackground"

export default function APIPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] relative">
      <FluidBackground />
      <Navigation />
      <Suspense fallback={<LoadingSpinner />}>
        <APIContent />
      </Suspense>
      <Footer />
    </main>
  )
}

function APIContent() {
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [useCase, setUseCase] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, company, useCase })
    setSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setCompany("")
      setUseCase("")
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="pt-24 pb-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-light tracking-wider mb-6 font-mono text-white">
            MOON<span className="font-bold">WARE</span> API
          </h1>
          <div className="w-32 h-px bg-white mx-auto mb-8"></div>
          <p className="text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Privacy API for Solana - Stealth Transactions, Encrypted Messaging, and Private DeFi
          </p>
          <div className="mt-6 inline-flex items-center space-x-3 px-6 py-3 bg-[#1a1a1a] border-2 border-white/30">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="font-mono font-bold text-sm uppercase tracking-wide text-white">Coming Soon • Join Waitlist</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left: API Info */}
          <div>
            <h2 className="text-3xl font-mono font-bold mb-8 tracking-wide text-white">MOONWARE OS API</h2>
            
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Build privacy into your Solana applications with our powerful API. Programmatically create stealth transactions, 
              send encrypted messages, and enable private DeFi operations.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-12">
              <div className="border-2 border-white/20 bg-[#1a1a1a] p-6 hover:border-white/40 transition-all duration-300">
                <h3 className="font-mono font-bold text-lg mb-3 text-white">🔒 STEALTH TRANSACTIONS</h3>
                <p className="text-gray-300 text-sm">
                  API for creating stealth transactions with one-time addresses. Route through ShadowNet relays for complete anonymity.
                </p>
              </div>

              <div className="border-2 border-white/20 bg-[#1a1a1a] p-6 hover:border-white/40 transition-all duration-300">
                <h3 className="font-mono font-bold text-lg mb-3 text-white">💬 ENCRYPTED MESSAGING</h3>
                <p className="text-gray-300 text-sm">
                  End-to-end encrypted messaging with HPKE. Metadata-free communications with Darkrelay messaging layer.
                </p>
              </div>

              <div className="border-2 border-white/30 bg-[#1a1a1a] p-6 hover:border-white/50 transition-all duration-300">
                <h3 className="font-mono font-bold text-lg mb-3 text-white">💳 PRIVATE PAYMENTS</h3>
                <p className="text-gray-300 text-sm">
                  Generate private pay links with MoonPay. Stealth addresses enable unlinkable transactions. Receiver stays invisible.
                </p>
              </div>

              <div className="border-2 border-white/20 bg-[#1a1a1a] p-6 hover:border-white/40 transition-all duration-300">
                <h3 className="font-mono font-bold text-lg mb-3 text-white">🔄 PRIVATE DEFI</h3>
                <p className="text-gray-300 text-sm">
                  Execute private swaps with MoonRoute. Multi-party computation and zero-knowledge proofs for complete anonymity.
                </p>
              </div>

              <div className="border-2 border-white/20 bg-[#1a1a1a] p-6 hover:border-white/40 transition-all duration-300">
                <h3 className="font-mono font-bold text-lg mb-3 text-white">🛡️ IDENTITY PROTECTION</h3>
                <p className="text-gray-300 text-sm">
                  MoonMask API for ephemeral identities. Rotating Moon IDs prevent linkability across all interactions.
                </p>
              </div>
            </div>

            {/* API Specs */}
            <div className="bg-[#0a0a0a] border-2 border-white/20 text-white p-8">
              <h3 className="font-mono font-bold text-xl mb-6 text-white">API SPECIFICATIONS</h3>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Protocol</div>
                  <div className="font-mono font-bold text-white">REST / GraphQL</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Authentication</div>
                  <div className="font-mono font-bold text-white">API Key + Wallet</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Privacy Level</div>
                  <div className="font-mono font-bold text-white">100% Metadata Free</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Rate Limits</div>
                  <div className="font-mono font-bold text-white">1000 req/min</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Response Time</div>
                  <div className="font-mono font-bold text-white">{"<"} 50ms</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Uptime SLA</div>
                  <div className="font-mono font-bold text-white">99.99%</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Network</div>
                  <div className="font-mono font-bold text-white">Solana Mainnet</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Support</div>
                  <div className="font-mono font-bold text-white">24/7 Developer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Waitlist Form */}
          <div>
            <div className="border-2 border-white/20 bg-[#1a1a1a] p-8 sticky top-24">
              <h3 className="text-2xl font-mono font-bold mb-6 tracking-wide text-white">JOIN API WAITLIST</h3>
              
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-mono font-bold text-xl mb-3 text-white">YOU'RE ON THE LIST!</h4>
                  <p className="text-gray-400 font-mono text-sm">
                    We'll notify you when API access is available
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-mono font-bold mb-2 uppercase tracking-wide text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-2 border-white/20 bg-[#0a0a0a] text-white p-3 font-mono text-sm focus:border-white focus:outline-none transition-colors"
                      placeholder="developer@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono font-bold mb-2 uppercase tracking-wide text-gray-300">
                      Company / Project
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full border-2 border-white/20 bg-[#0a0a0a] text-white p-3 font-mono text-sm focus:border-white focus:outline-none transition-colors"
                      placeholder="Your company or dApp name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono font-bold mb-2 uppercase tracking-wide text-gray-300">
                      Use Case *
                    </label>
                    <textarea
                      required
                      value={useCase}
                      onChange={(e) => setUseCase(e.target.value)}
                      rows={4}
                      className="w-full border-2 border-white/20 bg-[#0a0a0a] text-white p-3 font-mono text-sm focus:border-white focus:outline-none transition-colors resize-none"
                      placeholder="Describe how you plan to use the Moonware OS API..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black py-4 font-mono font-bold text-sm uppercase tracking-wide hover:bg-gray-200 transition-colors"
                  >
                    Join Waitlist
                  </button>

                  <p className="text-xs text-gray-500 font-mono text-center">
                    Early access developers will receive exclusive benefits
                  </p>
                </form>
              )}

              {/* Benefits */}
              <div className="mt-8 pt-8 border-t-2 border-white/20">
                <h4 className="font-mono font-bold text-sm mb-4 uppercase tracking-wide text-white">Early Access Benefits:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-mono">Free API credits ($500 value)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-mono">Priority support channel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-mono">Beta feature access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="font-mono">Discounted pricing tier</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* API Preview */}
        <div className="mb-20">
          <h2 className="text-4xl font-mono font-light tracking-wide mb-12 text-center text-white">API PREVIEW</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Code Example 1: Private Payment */}
            <div className="border-2 border-white/20 bg-[#1a1a1a]">
              <div className="bg-[#0a0a0a] text-white p-4 border-b-2 border-white/20">
                <div className="font-mono text-sm font-bold uppercase tracking-wide">Create Private Payment</div>
              </div>
              <div className="bg-[#0a0a0a] text-white p-6">
                <pre className="font-mono text-xs overflow-x-auto text-gray-300">
{`POST /api/v1/moonpay/create

{
  "amount": "10 USDC",
  "token": "USDC",
  "stealth": true
}

Response:
{
  "success": true,
  "payLink": "moonware.os/pay/...",
  "stealthAddress": "hidden",
  "qrCode": "..."
}`}
                </pre>
              </div>
            </div>

            {/* Code Example 2: Stealth Transaction */}
            <div className="border-2 border-white/20 bg-[#1a1a1a]">
              <div className="bg-[#0a0a0a] text-white p-4 border-b-2 border-white/20">
                <div className="font-mono text-sm font-bold uppercase tracking-wide">Send Stealth Transaction</div>
              </div>
              <div className="bg-[#0a0a0a] text-white p-6">
                <pre className="font-mono text-xs overflow-x-auto text-gray-300">
{`POST /api/v1/shadow/send

{
  "to": "recipientAddress",
  "amount": "1 SOL",
  "stealth": true,
  "relays": "auto"
}

Response:
{
  "success": true,
  "txHash": "hidden",
  "relayPath": "encrypted",
  "metadata": "zero"
}`}
                </pre>
              </div>
            </div>

            {/* Code Example 3: Encrypted Message */}
            <div className="border-2 border-white/20 bg-[#1a1a1a]">
              <div className="bg-[#0a0a0a] text-white p-4 border-b-2 border-white/20">
                <div className="font-mono text-sm font-bold uppercase tracking-wide">Send Encrypted Message</div>
              </div>
              <div className="bg-[#0a0a0a] text-white p-6">
                <pre className="font-mono text-xs overflow-x-auto text-gray-300">
{`POST /api/v1/darkrelay/send

{
  "to": "moonID_...",
  "message": "encrypted_data",
  "hpke": true
}

Response:
{
  "success": true,
  "messageId": "...",
  "commitment": "on-chain",
  "metadata": "zero"
}`}
                </pre>
              </div>
            </div>

            {/* Code Example 4: Private Swap */}
            <div className="border-2 border-white/20 bg-[#1a1a1a]">
              <div className="bg-[#0a0a0a] text-white p-4 border-b-2 border-white/20">
                <div className="font-mono text-sm font-bold uppercase tracking-wide">Execute Private Swap</div>
              </div>
              <div className="bg-[#0a0a0a] text-white p-6">
                <pre className="font-mono text-xs overflow-x-auto text-gray-300">
{`POST /api/v1/moonroute/swap

{
  "from": "USDC",
  "to": "SOL",
  "amount": "100",
  "stealth": true
}

Response:
{
  "success": true,
  "swapId": "...",
  "oneTimeAddress": "hidden",
  "route": "encrypted"
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-4xl font-mono font-light tracking-wide mb-12 text-center text-white">USE CASES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "PRIVATE WALLETS",
                icon: "💎",
                description: "Integrate stealth transactions into wallet applications. Users can send and receive funds anonymously.",
                examples: ["Solana wallets", "Multi-chain wallets", "Privacy wallets"],
              },
              {
                title: "DEFI PLATFORMS",
                icon: "🔄",
                description: "Enable private swaps and DeFi operations. Protect user trading strategies from front-running.",
                examples: ["DEX aggregators", "Yield farms", "Lending platforms"],
              },
              {
                title: "MESSAGING APPS",
                icon: "💬",
                description: "Build encrypted messaging on Solana. Metadata-free communications with Darkrelay integration.",
                examples: ["Chat apps", "DAO communication", "Private forums"],
              },
              {
                title: "PRIVACY TOOLS",
                icon: "🛡️",
                description: "Create privacy-preserving applications. Identity protection and unlinkable interactions.",
                examples: ["Voting systems", "Reputation systems", "Anonymous apps"],
              },
            ].map((useCase, index) => (
              <div key={index} className="border-2 border-white/20 bg-[#1a1a1a] p-8 hover:border-white/40 transition-all duration-300 group">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-mono font-bold mb-4 tracking-wide text-white">{useCase.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, i) => (
                    <div key={i} className="text-xs font-mono text-gray-400">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SDK Languages */}
        <div className="mb-20 bg-[#1a1a1a] border-2 border-white/20 p-12">
          <h2 className="text-3xl font-mono font-bold mb-8 text-center tracking-wide text-white">PLANNED SDK SUPPORT</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["JavaScript", "TypeScript", "Python", "Rust", "Go", "Java", "Swift", "Kotlin"].map((lang, index) => (
              <div
                key={index}
                className="border-2 border-white/20 bg-[#0a0a0a] p-6 text-center hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                <div className="font-mono font-bold text-lg text-white">{lang}</div>
                <div className="text-xs text-gray-400 font-mono mt-2">SDK</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
