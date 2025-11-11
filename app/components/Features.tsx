"use client"

import { useState, useEffect } from "react"
import { Monitor, Network, UserX, Wallet, RefreshCw, Shield } from "lucide-react"

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "ZOID OS",
      description:
        "The secure foundation of Zoidcash. Creates ephemeral sessions that hide device, location, and wallet data. Each session is isolated and destroyed when complete, leaving no trace. Privacy starts here.",
      code: "ZOIDCASH_001",
      metrics: { privacy: "Default", identifiers: "Hidden", fingerprint: "Erased", metadata: "Zero" },
      status: "ACTIVE",
      icon: Monitor,
      howItWorks: [
        "Ephemeral Sessions: Every transaction runs in a short-lived virtual space that's destroyed after completion",
        "Hidden Metadata: Device info and IP data are stripped or rerouted through Zoid relays",
        "Isolated Wallet Keys: Private keys never leave the local environment, separated from interface layer",
        "Secure Routing: All connections pass through encryption and global relays"
      ],
      schematic: (
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <rect x="20" y="15" width="50" height="30" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="25" y1="20" x2="65" y2="20" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="25" y1="30" x2="50" y2="30" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="25" y1="40" x2="60" y2="40" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="75" y1="30" x2="100" y2="30" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <circle cx="110" cy="30" r="10" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="120" y1="30" x2="140" y2="30" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <path d="M 140 20 L 160 30 L 140 40" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
        </svg>
      ),
    },
    {
      title: "TX SHADOWNET",
      description:
        "Private routing network that hides source and destination of transactions. Routes through multiple independent relays where each relay only sees a small part of the path. The whole picture never exists in one place.",
      code: "SHADOW_002",
      metrics: { routing: "Scrambled", metadata: "Zero", relays: "Multi-hop", origin: "Obfuscated" },
      status: "OPERATIONAL",
      icon: Network,
      howItWorks: [
        "Multi-Hop Routing: Transactions split and passed through multiple relays, each re-encrypting and forwarding",
        "Multi-TX Pathways: Large transactions broken into fragments traveling separate routes, reassembled before finalization",
        "Adaptive Mixing: Relays automatically adjust grouping and timing to make pattern analysis difficult",
        "ZK Proofs for Integrity: Lightweight proofs show correct handling without revealing private data"
      ],
      schematic: (
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <circle cx="30" cy="30" r="8" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <path d="M 38 30 Q 50 20 65 30" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="3,2" opacity="0.6" />
          <path d="M 38 30 Q 50 40 65 30" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="3,2" opacity="0.6" />
          <circle cx="70" cy="30" r="8" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <path d="M 78 30 Q 90 20 105 30" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="3,2" opacity="0.6" />
          <path d="M 78 30 Q 90 40 105 30" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="3,2" opacity="0.6" />
          <circle cx="110" cy="30" r="8" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <path d="M 118 30 Q 130 20 145 30" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="3,2" opacity="0.6" />
          <path d="M 118 30 Q 130 40 145 30" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="3,2" opacity="0.6" />
          <circle cx="150" cy="30" r="8" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
        </svg>
      ),
    },
    {
      title: "ID OBFUSCATION",
      description:
        "Removes the concept of fixed identity from Zoidcash. Every action uses new identifiers that cannot be linked to past activity. Even if someone knows one wallet address, they cannot trace what else you've done.",
      code: "ID_OBFUS_003",
      metrics: { identities: "One-time", aliases: "Unlimited", linking: "Unlinkable", zk: "PLONK" },
      status: "SECURED",
      icon: UserX,
      howItWorks: [
        "One-Time Addresses: Each transaction creates a new address only sender and receiver can recognize",
        "Rotating Keys: Encryption keys rotated continuously through multi-party coordination",
        "No Persistent Identifiers: Wallets, sessions, and messages have no fixed fingerprints",
        "MPC-Assisted Forward Secrecy: No single node ever holds all parts of a key"
      ],
      schematic: (
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <circle cx="40" cy="30" r="12" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <circle cx="40" cy="25" r="4" fill="#fff" opacity="0.8" />
          <path d="M 30 35 Q 40 42 50 35" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="55" y1="30" x2="75" y2="30" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <rect x="80" y="20" width="30" height="20" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="95" y1="22" x2="105" y2="22" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="95" y1="30" x2="105" y2="30" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="115" y1="30" x2="135" y2="30" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <circle cx="145" cy="30" r="12" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <circle cx="145" cy="25" r="4" fill="#fff" opacity="0.8" />
          <path d="M 135 35 Q 145 42 155 35" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
        </svg>
      ),
    },
    {
      title: "ZOIDPAY",
      description:
        "Private payment system that lets users send and receive payments on Solana without revealing wallet addresses. Each pay link creates a unique, one-time payment path that disappears once complete. Receiver stays invisible, transaction details stay unlinkable.",
      code: "ZOIDPAY_005",
      metrics: { payments: "Anonymous", linking: "Unlinkable", stealth: "Enabled", trace: "Zero" },
      status: "LIVE",
      icon: Wallet,
      howItWorks: [
        "Connect Wallet: System generates private endpoint linked to wallet",
        "Generate Link: Creates one-time pay link with new stealth address",
        "Share Link: Payer uses link to send payment through ShadowNet",
        "Auto Sweep: Funds automatically swept from temporary address to primary wallet",
        "GHOST Rewards: Payer earns tokens for completing private transactions"
      ],
      schematic: (
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <rect x="30" y="20" width="50" height="20" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="35" y1="25" x2="75" y2="25" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="35" y1="30" x2="70" y2="30" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="85" y1="30" x2="105" y2="30" stroke="#fff" strokeWidth="1" strokeDasharray="3,2" opacity="0.6" />
          <circle cx="115" cy="30" r="10" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="115" y1="20" x2="115" y2="40" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="125" y1="30" x2="145" y2="30" stroke="#fff" strokeWidth="1" strokeDasharray="3,2" opacity="0.6" />
          <rect x="145" y="20" width="50" height="20" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="150" y1="25" x2="190" y2="25" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="150" y1="30" x2="185" y2="30" stroke="#fff" strokeWidth="1" opacity="0.8" />
        </svg>
      ),
    },
    {
      title: "ZOIDROUTE",
      description:
        "Private swap and routing system for Solana. Lets users swap tokens and route payments without exposing who they are, where assets came from, or how the trade was executed. Pairs stealth addresses with ShadowNet relays for hidden end-to-end trade paths.",
      code: "ZOIDROUTE_006",
      metrics: { defi: "Private", mpc: "Enabled", zk: "PLONK", swaps: "Stealth" },
      status: "ACTIVE",
      icon: RefreshCw,
      howItWorks: [
        "One-Time Outputs: Client derives temporary addresses for intermediate steps",
        "Multi-TX Pathways: Orders fragmented and sent through multiple relays",
        "Execute Swaps: Swaps executed across preferred venues, settlement at one-time addresses",
        "Sweep & Finalize: Client verifies outputs, sweeps to destination wallet",
        "No Linkability: Observers see unrelated addresses and hops"
      ],
      schematic: (
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <circle cx="40" cy="30" r="12" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <path d="M 30 30 Q 40 20 50 30" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <path d="M 30 30 Q 40 40 50 30" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="55" y1="30" x2="75" y2="30" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <rect x="80" y="20" width="40" height="20" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="85" y1="25" x2="115" y2="25" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="85" y1="30" x2="110" y2="30" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="125" y1="30" x2="145" y2="30" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <circle cx="155" cy="30" r="12" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <path d="M 145 30 Q 155 20 165 30" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <path d="M 145 30 Q 155 40 165 30" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
        </svg>
      ),
    },
    {
      title: "ZOIDMASK",
      description:
        "Identity shield that protects how users appear across Zoid modules. Makes communication, transactions, and on-chain actions unlinkable to any single identity. Hides wallet addresses, usernames, and device fingerprints while allowing seamless interaction.",
      code: "ZOIDMASK_007",
      metrics: { identities: "Ephemeral", rotation: "Dynamic", fingerprint: "Protected", linking: "Impossible" },
      status: "ACTIVE",
      icon: Shield,
      howItWorks: [
        "Anonymous Session Creation: Spins up ephemeral session with random Zoid ID, no link to wallet or IP",
        "Dynamic Identity Rotation: Zoid ID changes automatically over time or after each action",
        "Encrypted Metadata: All interaction metadata is encrypted and unlinkable",
        "Decoupled Wallet Linking: Uses stealth addresses and temporary keys so Zoid ID never directly interacts with wallet"
      ],
      schematic: (
        <svg width="100%" height="60" viewBox="0 0 200 60">
          <circle cx="30" cy="30" r="10" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <path d="M 20 30 L 15 25 M 20 30 L 15 35" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="40" y1="30" x2="60" y2="30" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <rect x="65" y="20" width="30" height="20" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="70" y1="25" x2="90" y2="25" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="70" y1="30" x2="85" y2="30" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="100" y1="30" x2="120" y2="30" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <circle cx="130" cy="30" r="10" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <path d="M 140 30 L 145 25 M 140 30 L 145 35" stroke="#fff" strokeWidth="1" opacity="0.8" />
          <line x1="150" y1="30" x2="170" y2="30" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
          <circle cx="175" cy="30" r="8" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
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
    <section id="features" className="py-24 sm:py-32 bg-[#0a0a0a] relative z-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "gridMove 20s linear infinite"
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 100}%`,
                opacity: 0.1 + (i % 3) * 0.1,
                animation: `floatParticle ${15 + (i % 10)}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Animated gradient orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
            animation: "pulseOrb 8s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
            animation: "pulseOrb 10s ease-in-out infinite 2s"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-light tracking-wider mb-6 font-mono text-white">CORE FEATURES</h2>
          <div className="w-24 sm:w-32 h-px bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            Privacy-first operating system that erases your fingerprint across comms, wallets, and identity layers. Run aliases. Route through relays. Leave no metadata behind.
            <br />
            <span className="text-xs sm:text-sm font-mono mt-2 inline-block text-gray-500">
              Privacy is the default setting. Transparency is a choice. Built on Solana for speed and scalability.
            </span>
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className={`group relative bg-[#1a1a1a] border-2 p-8 transition-all duration-700 cursor-pointer overflow-hidden ${
                    activeFeature === index
                      ? "border-white shadow-xl shadow-white/20 transform -translate-y-4 bg-[#1a1a1a] scale-105"
                      : "border-white/20 hover:border-white/40 hover:shadow-lg hover:-translate-y-2 hover:scale-102"
                  }`}
                  onClick={() => setActiveFeature(index)}
                  style={{
                    transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  {/* Animated background gradient */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: activeFeature === index 
                        ? "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.05) 100%)"
                        : "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 100%)"
                    }}
                  />
                  
                  {/* Shimmer effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      animation: "shimmer 3s ease-in-out infinite",
                      animationDelay: `${index * 0.2}s`
                    }}
                  />

                  {/* Corner accents with animation */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-white/60" style={{ opacity: activeFeature === index ? 1 : 0.5 }}></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-white/60" style={{ opacity: activeFeature === index ? 1 : 0.5 }}></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-white/60" style={{ opacity: activeFeature === index ? 1 : 0.5 }}></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-white/60" style={{ opacity: activeFeature === index ? 1 : 0.5 }}></div>
                  
                  {/* Pulsing glow for active card */}
                  {activeFeature === index && (
                    <div 
                      className="absolute inset-0 border-2 border-white opacity-30"
                      style={{
                        animation: "pulseGlow 2s ease-in-out infinite",
                        boxShadow: "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)"
                      }}
                    />
                  )}

                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-mono text-gray-500">{feature.code}</span>
                    <div className="flex items-center space-x-2">
                      <IconComponent size={20} className="text-gray-400" />
                      <div
                        className={`w-3 h-3 ${activeFeature === index ? "bg-white animate-pulse" : "bg-gray-600"}`}
                      ></div>
                    </div>
                  </div>

                  <h3 className="text-xl font-mono font-bold mb-4 tracking-wide text-white">{feature.title}</h3>

                  <div className="mb-6">{feature.schematic}</div>

                  {feature.description && (
                    <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                  )}

                  {activeFeature === index && (
                    <div className="space-y-4 mb-6 animate-fadeIn">
                      <div className="space-y-2">
                        {Object.entries(feature.metrics).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-xs font-mono">
                            <span className="text-gray-500 uppercase">{key}:</span>
                            <span className="text-white font-bold">{value}</span>
                          </div>
                        ))}
                      </div>
                      
                      {feature.howItWorks && (
                        <div className="pt-4 border-t border-white/10">
                          <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wide">HOW IT WORKS</div>
                          <ul className="space-y-2">
                            {feature.howItWorks.map((item, idx) => (
                              <li key={idx} className="text-xs text-gray-300 leading-relaxed">
                                <span className="text-white font-bold">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex items-center space-x-2 mt-6">
                    <div className={`w-2 h-2 ${activeFeature === index ? "bg-white" : "bg-gray-600"}`}></div>
                    <span className="text-xs font-mono text-gray-400">{feature.status}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 bg-[#1a1a1a] border-2 border-white/20 p-6 sm:p-10 relative overflow-hidden group">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            {/* Animated flow lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1={`${(i * 12.5) % 100}%`}
                  y1="50%"
                  x2={`${((i * 12.5) + 15) % 100}%`}
                  y2="50%"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  style={{
                    animation: `flowLineDash ${2 + (i % 2)}s linear infinite, flowLineOpacity ${3 + (i % 3)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </svg>

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${(i * 7) % 100}%`,
                  top: `${(i * 6.7) % 100}%`,
                  opacity: 0.1 + (i % 3) * 0.05,
                  animation: `flowParticle ${8 + (i % 5)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}

            {/* Pulsing orbs */}
            <div 
              className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-2xl opacity-15"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                animation: "flowOrb 6s ease-in-out infinite"
              }}
            />
            <div 
              className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full blur-2xl opacity-15"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                animation: "flowOrb 8s ease-in-out infinite 2s"
              }}
            />
          </div>

          <div className="relative z-10">
            <h3 className="font-mono font-bold text-lg sm:text-xl mb-8 sm:mb-10 text-center tracking-wide text-white">PRIVACY-FIRST OPERATING SYSTEM FLOW</h3>

          {/* Main Flow */}
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-6 mb-12">
            {/* Step 1: User Action */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative">
                <span className="text-xs sm:text-sm font-mono font-bold text-white">USER</span>
                <div
                  className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full animate-ping"
                  style={{ animationDuration: "2s" }}
                ></div>
              </div>
              <div className="text-xs font-mono text-gray-400 mb-1 uppercase tracking-wide">ACTION</div>
              <div className="text-xs text-gray-500 font-mono">MoonOS</div>
            </div>

            {/* Arrow 1 */}
            <div
              className="hidden lg:block h-px bg-white/20 relative overflow-hidden w-24 xl:w-32"
              style={{ opacity: 0.8 }}
            >
              <div className="absolute inset-0 bg-white" style={{ opacity: 0.3 }}></div>
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                style={{ animation: "flowRight 4s linear infinite" }}
              ></div>
            </div>
            <div className="lg:hidden flex flex-col items-center">
              <div className="w-px h-10 bg-white/20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Step 2: ID Obfuscation */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative">
                <span className="text-xs font-mono font-bold text-white">ID</span>
                <div
                  className="absolute inset-0 border-2 border-white opacity-0 animate-ping"
                  style={{ animationDuration: "2s", animationDelay: "0.5s" }}
                ></div>
              </div>
              <div className="text-xs font-mono text-gray-400 mb-1 uppercase tracking-wide">OBFUSCATE</div>
              <div className="text-xs text-gray-500 font-mono">One-time Alias</div>
            </div>

            {/* Arrow 2 */}
            <div
              className="hidden lg:block h-px bg-white/20 relative overflow-hidden w-24 xl:w-32"
              style={{ opacity: 0.8 }}
            >
              <div className="absolute inset-0 bg-white" style={{ opacity: 0.3 }}></div>
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                style={{ animation: "flowRight 4s linear infinite 1s" }}
              ></div>
            </div>
            <div className="lg:hidden flex flex-col items-center">
              <div className="w-px h-10 bg-white/20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDuration: "2s" }}></div>
              </div>
            </div>

            {/* Step 3: ShadowNet Routing */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative bg-[#1a1a1a]">
                <span className="text-xs font-mono font-bold text-white">RELAY</span>
                <div
                  className="absolute inset-0 border-2 border-white opacity-0 animate-ping"
                  style={{ animationDuration: "2s", animationDelay: "1s" }}
                ></div>
              </div>
              <div className="text-xs font-mono text-gray-400 mb-1 uppercase tracking-wide">ROUTE</div>
              <div className="text-xs text-gray-500 font-mono">ShadowNet</div>
            </div>

            {/* Arrow 3 */}
            <div
              className="hidden lg:block h-px bg-white/20 relative overflow-hidden w-24 xl:w-32"
              style={{ opacity: 0.8 }}
            >
              <div className="absolute inset-0 bg-white" style={{ opacity: 0.3 }}></div>
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                style={{ animation: "flowRight 4s linear infinite 2s" }}
              ></div>
            </div>
            <div className="lg:hidden flex flex-col items-center">
              <div className="w-px h-10 bg-white/20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDuration: "2.5s" }}></div>
              </div>
            </div>

            {/* Step 4: Encryption */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative">
                <span className="text-xs font-mono font-bold text-white">ZK</span>
                <div
                  className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full animate-ping"
                  style={{ animationDuration: "2s", animationDelay: "1.5s" }}
                ></div>
              </div>
              <div className="text-xs font-mono text-gray-400 mb-1 uppercase tracking-wide">ENCRYPT</div>
              <div className="text-xs text-gray-500 font-mono">HPKE/ZK/MPC</div>
            </div>

            {/* Arrow 4 */}
            <div
              className="hidden lg:block h-px bg-white/20 relative overflow-hidden w-24 xl:w-32"
              style={{ opacity: 0.8 }}
            >
              <div className="absolute inset-0 bg-white" style={{ opacity: 0.3 }}></div>
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                style={{ animation: "flowRight 4s linear infinite 3s" }}
              ></div>
            </div>
            <div className="lg:hidden flex flex-col items-center">
              <div className="w-px h-10 bg-white/20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDuration: "2.8s" }}></div>
              </div>
            </div>

            {/* Step 5: Zero Metadata */}
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative bg-white text-black">
                <span className="text-sm font-mono font-bold">✓</span>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-xs font-mono text-gray-400 mb-1 uppercase tracking-wide">PRIVATE</div>
              <div className="text-xs text-gray-500 font-mono">No Metadata</div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 sm:mt-12 pt-8 sm:pt-10 border-t-2 border-white/20">
            <div className="text-center">
              <div className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">STEP 1</div>
              <div className="text-sm font-mono font-bold mb-2 tracking-wide text-white">ZOIDCASH</div>
              <div className="text-xs text-gray-400 leading-relaxed">Hides device & user identifiers</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">STEP 2</div>
              <div className="text-sm font-mono font-bold mb-2 tracking-wide text-white">ID OBFUSCATION</div>
              <div className="text-xs text-gray-400 leading-relaxed">One-time identities, unlinkable</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">STEP 3</div>
              <div className="text-sm font-mono font-bold mb-2 tracking-wide text-white">SHADOWNET</div>
              <div className="text-xs text-gray-400 leading-relaxed">Scrambled routes & origins</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">STEP 4</div>
              <div className="text-sm font-mono font-bold mb-2 tracking-wide text-white">ENCRYPTION</div>
              <div className="text-xs text-gray-400 leading-relaxed">HPKE, ZK proofs, MPC</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">STEP 5</div>
              <div className="text-sm font-mono font-bold mb-2 tracking-wide text-white">ZERO METADATA</div>
              <div className="text-xs text-gray-400 leading-relaxed">No fingerprint, no trace</div>
            </div>
          </div>

          {/* Privacy Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
            <div className="text-center bg-[#0a0a0a] p-4 border border-white/10">
              <div className="text-2xl font-mono font-bold text-white">Stealth</div>
              <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">ADDRESSES</div>
            </div>
            <div className="text-center bg-[#0a0a0a] p-4 border border-white/10">
              <div className="text-2xl font-mono font-bold text-white">HPKE</div>
              <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">ENCRYPTION</div>
            </div>
            <div className="text-center bg-[#0a0a0a] p-4 border border-white/10">
              <div className="text-2xl font-mono font-bold text-white">PLONK</div>
              <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">ZK PROOFS</div>
            </div>
            <div className="text-center bg-[#0a0a0a] p-4 border border-white/10">
              <div className="text-2xl font-mono font-bold text-white">MPC</div>
              <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">MULTI-PARTY</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
