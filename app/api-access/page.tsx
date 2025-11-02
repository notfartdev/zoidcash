"use client"

import { Suspense, useState } from "react"
import LoadingSpinner from "../components/LoadingSpinner"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function APIPage() {
  return (
    <main className="min-h-screen bg-white text-black">
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
    // TODO: Implement actual waitlist submission
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
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-light tracking-wider mb-6 font-mono">
            API <span className="font-bold">ACCESS</span>
          </h1>
          <div className="w-32 h-px bg-black mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Developer API for Global eSIM Provisioning
          </p>
          <div className="mt-6 inline-flex items-center space-x-3 px-6 py-3 bg-yellow-50 border-2 border-yellow-400">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="font-mono font-bold text-sm uppercase tracking-wide">Coming Soon • Join Waitlist</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left: API Info */}
          <div>
            <h2 className="text-3xl font-mono font-bold mb-8 tracking-wide">SEEKERSIM API</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Build global connectivity into your applications with our powerful API. Programmatically provision eSIM
              profiles, manage data plans, and handle payments with cryptocurrency.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-12">
              <div className="border-2 border-gray-200 p-6 hover:border-black transition-all duration-300">
                <h3 className="font-mono font-bold text-lg mb-3">⚡ INSTANT PROVISIONING</h3>
                <p className="text-gray-600 text-sm">
                  RESTful API for instant eSIM activation across 180+ countries with real-time status updates
                </p>
              </div>

              <div className="border-2 border-gray-200 p-6 hover:border-black transition-all duration-300">
                <h3 className="font-mono font-bold text-lg mb-3">🔐 CRYPTO PAYMENTS</h3>
                <p className="text-gray-600 text-sm">
                  Accept SOL/USDC payments via smart contracts with automatic settlement and transparent pricing
                </p>
              </div>

              <div className="border-2 border-blue-200 bg-blue-50 p-6 hover:border-blue-400 transition-all duration-300">
                <h3 className="font-mono font-bold text-lg mb-3">🤖 x402 AGENT SUPPORT</h3>
                <p className="text-gray-600 text-sm">
                  AI agents and automated clients can pay for API requests in real-time using HTTP 402 protocol. Zero fees, instant settlement, no registration required.
                </p>
                <div className="mt-3 flex items-center space-x-2 text-xs font-mono text-blue-600">
                  <span>•</span>
                  <a href="https://x402.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    x402.org
                  </a>
                </div>
              </div>

              <div className="border-2 border-gray-200 p-6 hover:border-black transition-all duration-300">
                <h3 className="font-mono font-bold text-lg mb-3">📊 USAGE ANALYTICS</h3>
                <p className="text-gray-600 text-sm">
                  Real-time data consumption tracking, balance monitoring, and usage reporting via webhooks
                </p>
              </div>

              <div className="border-2 border-gray-200 p-6 hover:border-black transition-all duration-300">
                <h3 className="font-mono font-bold text-lg mb-3">🌐 GLOBAL COVERAGE</h3>
                <p className="text-gray-600 text-sm">
                  Access 650+ carrier networks worldwide with automatic best-network selection and failover
                </p>
              </div>
            </div>

            {/* API Specs */}
            <div className="bg-gray-900 text-white p-8">
              <h3 className="font-mono font-bold text-xl mb-6">API SPECIFICATIONS</h3>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Protocol</div>
                  <div className="font-mono font-bold">REST / GraphQL</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Authentication</div>
                  <div className="font-mono font-bold">API Key + Wallet</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Payment Protocol</div>
                  <div className="font-mono font-bold">x402 Enabled</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Rate Limits</div>
                  <div className="font-mono font-bold">1000 req/min</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Response Time</div>
                  <div className="font-mono font-bold">{"<"} 100ms</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Uptime SLA</div>
                  <div className="font-mono font-bold">99.99%</div>
                </div>
                <div>
                  <div className="text-gray-400 font-mono mb-1 uppercase text-xs">Support</div>
                  <div className="font-mono font-bold">24/7 Developer</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <a
                  href="/api/v1/info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-blue-400 hover:text-blue-300 hover:underline flex items-center space-x-2"
                >
                  <span>View API Info & x402 Support</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Waitlist Form */}
          <div>
            <div className="border-2 border-black p-8 sticky top-24">
              <h3 className="text-2xl font-mono font-bold mb-6 tracking-wide">JOIN API WAITLIST</h3>
              
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-mono font-bold text-xl mb-3">YOU'RE ON THE LIST!</h4>
                  <p className="text-gray-600 font-mono text-sm">
                    We'll notify you when API access is available
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-mono font-bold mb-2 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-black focus:outline-none transition-colors"
                      placeholder="developer@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono font-bold mb-2 uppercase tracking-wide">
                      Company / Project
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-black focus:outline-none transition-colors"
                      placeholder="Your company or dApp name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono font-bold mb-2 uppercase tracking-wide">
                      Use Case *
                    </label>
                    <textarea
                      required
                      value={useCase}
                      onChange={(e) => setUseCase(e.target.value)}
                      rows={4}
                      className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-black focus:outline-none transition-colors resize-none"
                      placeholder="Describe how you plan to use the SeekerSIM API..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 font-mono font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
                  >
                    Join Waitlist
                  </button>

                  <p className="text-xs text-gray-500 font-mono text-center">
                    Early access developers will receive exclusive benefits
                  </p>
                </form>
              )}

              {/* Benefits */}
              <div className="mt-8 pt-8 border-t-2 border-gray-200">
                <h4 className="font-mono font-bold text-sm mb-4 uppercase tracking-wide">Early Access Benefits:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-mono">Free API credits ($500 value)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-mono">Priority support channel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-mono">Beta feature access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-mono">Discounted pricing tier</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* API Preview */}
        <div className="mb-20">
          <h2 className="text-4xl font-mono font-light tracking-wide mb-12 text-center">API PREVIEW</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Code Example 1 */}
            <div className="border-2 border-gray-200">
              <div className="bg-gray-900 text-white p-4 border-b-2 border-gray-200">
                <div className="font-mono text-sm font-bold uppercase tracking-wide">Provision eSIM</div>
              </div>
              <div className="bg-gray-900 text-white p-6">
                <pre className="font-mono text-xs overflow-x-auto">
{`POST /api/v1/esim/provision

{
  "country": "FR",
  "dataAmount": "1GB",
  "duration": "7days",
  "wallet": "ABC...xyz"
}

Response:
{
  "success": true,
  "qrCode": "LPA:1$...",
  "activationCode": "ABC123",
  "expiresAt": "2025-01-15"
}`}
                </pre>
              </div>
            </div>

            {/* Code Example 2 */}
            <div className="border-2 border-gray-200">
              <div className="bg-gray-900 text-white p-4 border-b-2 border-gray-200">
                <div className="font-mono text-sm font-bold uppercase tracking-wide">Check Balance</div>
              </div>
              <div className="bg-gray-900 text-white p-6">
                <pre className="font-mono text-xs overflow-x-auto">
{`GET /api/v1/balance/:wallet

Response:
{
  "wallet": "ABC...xyz",
  "balance": {
    "sol": "1.25",
    "usdc": "50.00",
    "credits": "2.5GB"
  },
  "activePlans": 2
}`}
                </pre>
              </div>
            </div>

            {/* Code Example 3 */}
            <div className="border-2 border-gray-200">
              <div className="bg-gray-900 text-white p-4 border-b-2 border-gray-200">
                <div className="font-mono text-sm font-bold uppercase tracking-wide">List Available Plans</div>
              </div>
              <div className="bg-gray-900 text-white p-6">
                <pre className="font-mono text-xs overflow-x-auto">
{`GET /api/v1/plans?country=FR

Response:
{
  "plans": [
    {
      "id": "fr-1gb-7d",
      "name": "France 1GB",
      "data": "1GB",
      "duration": "7 days",
      "price": "5.00 USDC"
    }
  ]
}`}
                </pre>
              </div>
            </div>

            {/* Code Example 4 */}
            <div className="border-2 border-gray-200">
              <div className="bg-gray-900 text-white p-4 border-b-2 border-gray-200">
                <div className="font-mono text-sm font-bold uppercase tracking-wide">Usage Tracking</div>
              </div>
              <div className="bg-gray-900 text-white p-6">
                <pre className="font-mono text-xs overflow-x-auto">
{`GET /api/v1/usage/:iccid

Response:
{
  "iccid": "8901...",
  "used": "450MB",
  "remaining": "550MB",
  "status": "active",
  "expiresAt": "2025-01-15"
}`}
                </pre>
              </div>
            </div>

            {/* Code Example 5: x402 */}
            <div className="border-2 border-blue-300 col-span-1 md:col-span-2">
              <div className="bg-blue-900 text-white p-4 border-b-2 border-blue-300">
                <div className="font-mono text-sm font-bold uppercase tracking-wide flex items-center space-x-2">
                  <span>🤖 x402 Agent Payment</span>
                  <a href="https://x402.org" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline">
                    Learn more →
                  </a>
                </div>
              </div>
              <div className="bg-blue-950 text-white p-6">
                <pre className="font-mono text-xs overflow-x-auto">
{`// AI agents can pay per request with x402
GET /api/v1/esim/provision
X-PAYMENT: <base64-encoded-payment-payload>

// Server responds with 402 if payment missing
HTTP/1.1 402 Payment Required
Content-Type: application/json

{
  "x402Version": 1,
  "accepts": [{
    "scheme": "exact",
    "network": "solana",
    "maxAmountRequired": "1000000",
    "resource": "/api/v1/esim/provision",
    "description": "eSIM provisioning request",
    "payTo": "0xYourAddress",
    "asset": "USDC",
    "mimeType": "application/json"
  }]
}

// Client includes payment header and retries
GET /api/v1/esim/provision
X-PAYMENT: eyJ4NDAyVmVyc2lvbiI6MSwic2NoZW1lIjoiZXhhY3Q...
→ HTTP 200 OK`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-4xl font-mono font-light tracking-wide mb-12 text-center">USE CASES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "TRAVEL APPS",
                icon: "✈️",
                description: "Embed instant connectivity for travelers. Offer eSIM data plans directly in your travel booking or itinerary app.",
                examples: ["City guides", "Travel planners", "Booking platforms"],
              },
              {
                title: "WEB3 DAPPS",
                icon: "💎",
                description: "Provide connectivity as a service in your dApp. Enable users to purchase data plans with crypto seamlessly.",
                examples: ["Wallets", "DeFi platforms", "NFT marketplaces"],
              },
              {
                title: "AI AGENTS",
                icon: "🤖",
                description: "Agents can use x402 protocol to pay for API requests in real-time. Perfect for autonomous systems requiring connectivity.",
                examples: ["AI assistants", "Automated traders", "IoT controllers"],
              },
              {
                title: "IOT DEVICES",
                icon: "📡",
                description: "Connect IoT devices globally with programmable eSIM. Pay-per-use billing with micro-transactions on Solana.",
                examples: ["Trackers", "Sensors", "Smart devices"],
              },
            ].map((useCase, index) => (
              <div key={index} className="border-2 border-gray-200 p-8 hover:border-black transition-all duration-300 group">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-mono font-bold mb-4 tracking-wide">{useCase.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, i) => (
                    <div key={i} className="text-xs font-mono text-gray-500">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SDK Languages */}
        <div className="mb-20 bg-gray-50 border-2 border-gray-200 p-12">
          <h2 className="text-3xl font-mono font-bold mb-8 text-center tracking-wide">PLANNED SDK SUPPORT</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["JavaScript", "TypeScript", "Python", "Rust", "Go", "Java", "Swift", "Kotlin"].map((lang, index) => (
              <div
                key={index}
                className="border-2 border-gray-300 bg-white p-6 text-center hover:border-black transition-all duration-300 cursor-pointer"
              >
                <div className="font-mono font-bold text-lg">{lang}</div>
                <div className="text-xs text-gray-500 font-mono mt-2">SDK</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

