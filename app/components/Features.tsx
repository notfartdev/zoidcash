"use client"

import { useState, useEffect } from "react"
import { Search, Cpu, QrCode, Globe, Wallet, Shield } from "lucide-react"

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "ICCID SEARCH",
      description:
        "Real-time ICCID validation and lookup system with global database integration and instant verification protocols",
      code: "SEARCH_001",
      metrics: { accuracy: "99.9%", speed: "<100ms", coverage: "Global", database: "Real-time" },
      status: "ACTIVE",
      icon: Search,
      schematic: (
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <rect x="10" y="20" width="60" height="20" fill="none" stroke="#000" strokeWidth="1" />
          <line x1="70" y1="30" x2="90" y2="30" stroke="#000" strokeWidth="1" />
          <circle cx="100" cy="30" r="8" fill="none" stroke="#000" strokeWidth="1" />
          <line x1="108" y1="30" x2="130" y2="30" stroke="#000" strokeWidth="1" />
          <rect x="130" y="20" width="60" height="20" fill="none" stroke="#000" strokeWidth="1" />
        </svg>
      ),
    },
    {
      title: "SM-DP+ INTEGRATION",
      code: "SMDP_002",
      metrics: { compliance: "SGP.22", security: "TLS 1.3", availability: "24/7", profiles: "Unlimited" },
      status: "OPERATIONAL",
      icon: Cpu,
      schematic: (
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <rect x="20" y="15" width="40" height="30" fill="none" stroke="#000" strokeWidth="1" />
          <path d="M60 30 Q80 20 100 30 Q120 40 140 30" fill="none" stroke="#000" strokeWidth="1" />
          <rect x="140" y="15" width="40" height="30" fill="none" stroke="#000" strokeWidth="1" />
          <circle cx="100" cy="30" r="3" fill="#000" />
        </svg>
      ),
    },
    {
      title: "QR CODE ACTIVATION",
      description:
        "Instant eSIM activation through secure QR code generation with encrypted profile delivery and validation",
      code: "QR_003",
      metrics: { generation: "Instant", encryption: "AES-256", success: "99.8%", delivery: "Secure" },
      status: "READY",
      icon: QrCode,
      schematic: (
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <rect x="30" y="10" width="40" height="40" fill="none" stroke="#000" strokeWidth="1" />
          <rect x="35" y="15" width="10" height="10" fill="#000" />
          <rect x="50" y="15" width="10" height="10" fill="#000" />
          <rect x="35" y="35" width="10" height="10" fill="#000" />
          <line x1="70" y1="30" x2="130" y2="30" stroke="#000" strokeWidth="1" />
          <rect x="130" y="20" width="40" height="20" fill="none" stroke="#000" strokeWidth="1" />
        </svg>
      ),
    },
    {
      title: "CRYPTO PAYMENTS",
      description:
        "Seamless SOL and USDC payment integration with Seed Vault wallet for one-tap purchases and instant top-ups",
      code: "CRYPTO_004",
      metrics: { speed: "~1sec", fees: "<$0.01", tokens: "SOL/USDC", network: "Solana" },
      status: "ACTIVE",
      icon: Wallet,
      schematic: (
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <circle cx="40" cy="30" r="15" fill="none" stroke="#000" strokeWidth="1" />
          <path d="M 35 30 L 40 25 L 45 30 L 40 35 Z" fill="#000" />
          <line x1="55" y1="30" x2="80" y2="30" stroke="#000" strokeWidth="1" strokeDasharray="4,2" />
          <rect x="80" y="20" width="40" height="20" fill="none" stroke="#000" strokeWidth="1" />
          <line x1="100" y1="25" x2="100" y2="35" stroke="#000" strokeWidth="1" />
          <line x1="95" y1="30" x2="105" y2="30" stroke="#000" strokeWidth="1" />
          <line x1="120" y1="30" x2="150" y2="30" stroke="#000" strokeWidth="1" />
          <circle cx="160" cy="30" r="8" fill="#000" />
        </svg>
      ),
    },
    {
      title: "GLOBAL COVERAGE",
      description:
        "Access to 650+ mobile networks across 180+ countries with automatic best-network selection and failover",
      code: "GLOBAL_005",
      metrics: { countries: "180+", networks: "650+", uptime: "99.9%", roaming: "Auto" },
      status: "LIVE",
      icon: Globe,
      schematic: (
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <circle cx="100" cy="30" r="25" fill="none" stroke="#000" strokeWidth="1" />
          <ellipse cx="100" cy="30" rx="25" ry="10" fill="none" stroke="#000" strokeWidth="1" />
          <ellipse cx="100" cy="30" rx="10" ry="25" fill="none" stroke="#000" strokeWidth="1" />
          <line x1="100" y1="5" x2="100" y2="55" stroke="#000" strokeWidth="1" />
          <circle cx="70" cy="20" r="3" fill="#000" />
          <circle cx="130" cy="25" r="3" fill="#000" />
          <circle cx="100" cy="40" r="3" fill="#000" />
          <circle cx="85" cy="15" r="2" fill="#000" />
          <circle cx="115" cy="35" r="2" fill="#000" />
        </svg>
      ),
    },
    {
      title: "PRIVACY FIRST",
      description:
        "Zero-knowledge KYC and decentralized identity integration with blockchain-based verification and minimal data collection",
      code: "PRIVACY_006",
      metrics: { kyc: "zk-Proof", identity: "DID", data: "Minimal", encryption: "E2E" },
      status: "SECURED",
      icon: Shield,
      schematic: (
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <path d="M 100 10 L 120 20 L 120 35 Q 120 50 100 55 Q 80 50 80 35 L 80 20 Z" fill="none" stroke="#000" strokeWidth="1" />
          <circle cx="100" cy="28" r="8" fill="none" stroke="#000" strokeWidth="1" />
          <rect x="96" y="28" width="8" height="10" fill="none" stroke="#000" strokeWidth="1" />
          <line x1="60" y1="30" x2="80" y2="25" stroke="#000" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="120" y1="25" x2="140" y2="30" stroke="#000" strokeWidth="1" strokeDasharray="2,2" />
          <circle cx="55" cy="30" r="3" fill="#000" />
          <circle cx="145" cy="30" r="3" fill="#000" />
        </svg>
      ),
    },
  ]

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)

    return () => {
      clearInterval(featureInterval)
    }
  }, [])

  return (
    <section id="features" className="py-32 bg-gray-50 relative">
      <div className="absolute inset-0 opacity-8">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="circuit" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 0 60 L 30 60 L 30 30 L 90 30 L 90 90 L 120 90" fill="none" stroke="#000" strokeWidth="1" />
              <circle cx="30" cy="60" r="3" fill="#000" />
              <circle cx="90" cy="30" r="3" fill="#000" />
              <rect x="85" y="85" width="10" height="10" fill="none" stroke="#000" strokeWidth="1" />
            </pattern>
          </defs>
          
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light tracking-wider mb-6 font-mono">CORE FEATURES</h2>
          <div className="w-32 h-px bg-black mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Global eSIM connectivity with crypto payments. No roaming fees, instant activation, privacy-first architecture.
            <br />
            <span className="text-sm font-mono mt-2 inline-block">
              Built for Solana Seeker phones, expanding to all eSIM devices
            </span>
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className={`group relative bg-white border-2 p-8 transition-all duration-500 cursor-pointer ${
                    activeFeature === index
                      ? "border-black shadow-xl transform -translate-y-4 bg-gray-50"
                      : "border-gray-200 hover:border-gray-400 hover:shadow-lg hover:-translate-y-1"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-black transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-black transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-black transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-black transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>

                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-mono text-gray-400">{feature.code}</span>
                    <div className="flex items-center space-x-2">
                      <IconComponent size={20} className="text-gray-600" />
                      <div
                        className={`w-3 h-3 ${activeFeature === index ? "bg-black animate-pulse" : "bg-gray-300"}`}
                      ></div>
                    </div>
                  </div>

                  <h3 className="text-xl font-mono font-bold mb-4 tracking-wide">{feature.title}</h3>

                  <div className="mb-6">{feature.schematic}</div>

                  {feature.description && (
                    <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                  )}

                  {activeFeature === index && (
                    <div className="space-y-3 mb-6 animate-fadeIn">
                      {Object.entries(feature.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-xs font-mono">
                          <span className="text-gray-500 uppercase">{key}:</span>
                          <span className="text-black font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center space-x-2 mt-6">
                    <div className={`w-2 h-2 ${activeFeature === index ? "bg-black" : "bg-gray-400"}`}></div>
                    <span className="text-xs font-mono">{feature.status}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-20 bg-white border-2 border-gray-200 p-10">
          <h3 className="font-mono font-bold text-xl mb-10 text-center tracking-wide">END-TO-END DATA FLOW</h3>
          
          {/* Main Flow */}
          <div className="flex justify-center items-center mb-12">
            {/* Step 1: User Request */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-black flex items-center justify-center mb-3 relative">
                <span className="text-sm font-mono font-bold">USER</span>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-black rounded-full animate-ping" style={{ animationDuration: "2s" }}></div>
              </div>
              <div className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wide">SELECT PLAN</div>
              <div className="text-xs text-gray-400 font-mono">Solana Seeker</div>
            </div>

            {/* Arrow 1 */}
            <div className="flex-1 h-px bg-gray-300 relative overflow-hidden mx-4" style={{ maxWidth: "120px" }}>
              <div className="absolute top-0 left-0 h-full bg-black w-full" style={{ opacity: 0.3 }}></div>
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-black rounded-full"
                style={{ animation: "flowRight 4s linear infinite" }}
              ></div>
            </div>

            {/* Step 2: Crypto Payment */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-black flex items-center justify-center mb-3 relative">
                <span className="text-xs font-mono font-bold">SOL</span>
                <div className="absolute inset-0 border-2 border-black opacity-0 animate-ping" style={{ animationDuration: "2s", animationDelay: "0.5s" }}></div>
              </div>
              <div className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wide">PAYMENT</div>
              <div className="text-xs text-gray-400 font-mono">Seed Vault</div>
            </div>

            {/* Arrow 2 */}
            <div className="flex-1 h-px bg-gray-300 relative overflow-hidden mx-4" style={{ maxWidth: "120px" }}>
              <div className="absolute top-0 left-0 h-full bg-black w-full" style={{ opacity: 0.3 }}></div>
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-black rounded-full"
                style={{ animation: "flowRight 4s linear infinite 1s" }}
              ></div>
            </div>

            {/* Step 3: Smart Contract */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-black flex items-center justify-center mb-3 relative bg-gray-50">
                <span className="text-xs font-mono font-bold">SC</span>
                <div className="absolute inset-0 border-2 border-black opacity-0 animate-ping" style={{ animationDuration: "2s", animationDelay: "1s" }}></div>
              </div>
              <div className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wide">VERIFY</div>
              <div className="text-xs text-gray-400 font-mono">On-chain</div>
            </div>

            {/* Arrow 3 */}
            <div className="flex-1 h-px bg-gray-300 relative overflow-hidden mx-4" style={{ maxWidth: "120px" }}>
              <div className="absolute top-0 left-0 h-full bg-black w-full" style={{ opacity: 0.3 }}></div>
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-black rounded-full"
                style={{ animation: "flowRight 4s linear infinite 2s" }}
              ></div>
            </div>

            {/* Step 4: API Call */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-black flex items-center justify-center mb-3 relative">
                <span className="text-xs font-mono font-bold">API</span>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-black rounded-full animate-ping" style={{ animationDuration: "2s", animationDelay: "1.5s" }}></div>
              </div>
              <div className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wide">PROVISION</div>
              <div className="text-xs text-gray-400 font-mono">eSIM Provider</div>
            </div>

            {/* Arrow 4 */}
            <div className="flex-1 h-px bg-gray-300 relative overflow-hidden mx-4" style={{ maxWidth: "120px" }}>
              <div className="absolute top-0 left-0 h-full bg-black w-full" style={{ opacity: 0.3 }}></div>
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-black rounded-full"
                style={{ animation: "flowRight 4s linear infinite 3s" }}
              ></div>
            </div>

            {/* Step 5: Activation */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-black flex items-center justify-center mb-3 relative bg-black text-white">
                <span className="text-sm font-mono font-bold">✓</span>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 rounded-full animate-pulse"></div>
              </div>
              <div className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wide">ACTIVE</div>
              <div className="text-xs text-gray-400 font-mono">Global Network</div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="grid grid-cols-5 gap-6 mt-12 pt-10 border-t-2 border-gray-200">
            <div className="text-center">
              <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">STEP 1</div>
              <div className="text-sm font-mono font-bold mb-2 tracking-wide">PLAN SELECTION</div>
              <div className="text-xs text-gray-500 leading-relaxed">User chooses destination & data package</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">STEP 2</div>
              <div className="text-sm font-mono font-bold mb-2 tracking-wide">CRYPTO PAYMENT</div>
              <div className="text-xs text-gray-500 leading-relaxed">SOL/USDC via Seed Vault wallet</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">STEP 3</div>
              <div className="text-sm font-mono font-bold mb-2 tracking-wide">ON-CHAIN VERIFY</div>
              <div className="text-xs text-gray-500 leading-relaxed">Smart contract confirms payment</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">STEP 4</div>
              <div className="text-sm font-mono font-bold mb-2 tracking-wide">API PROVISION</div>
              <div className="text-xs text-gray-500 leading-relaxed">Backend generates eSIM QR code</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">STEP 5</div>
              <div className="text-sm font-mono font-bold mb-2 tracking-wide">INSTANT ACCESS</div>
              <div className="text-xs text-gray-500 leading-relaxed">eSIM activated, user online globally</div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="text-center bg-gray-50 p-4 border border-gray-200">
              <div className="text-2xl font-mono font-bold">~3sec</div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wide">END-TO-END TIME</div>
            </div>
            <div className="text-center bg-gray-50 p-4 border border-gray-200">
              <div className="text-2xl font-mono font-bold">{"<$0.01"}</div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wide">TRANSACTION FEE</div>
            </div>
            <div className="text-center bg-gray-50 p-4 border border-gray-200">
              <div className="text-2xl font-mono font-bold">100%</div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wide">AUTOMATED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
