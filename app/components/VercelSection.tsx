"use client"

import { useState, useEffect } from "react"
import { Cloud, Zap, Eye } from "lucide-react"

export default function VercelSection() {
  const [deploymentStatus, setDeploymentStatus] = useState("READY")

  const infrastructureFeatures = [
    {
      title: "SOLANA PRIVACY LAYER",
      description: "High-speed privacy-preserving transactions with stealth addresses and zero-knowledge proofs on Solana blockchain",
      status: "MAINNET",
      metrics: { speed: "~400ms", tps: "65,000", anonymity: "100%", finality: "Instant" },
      icon: Zap,
    },
    {
      title: "SHADOWNET RELAYS",
      description: "Distributed relay network that scrambles transaction routes and origins across multiple hops for complete anonymity",
      status: "ACTIVE",
      metrics: { relays: "100+", hops: "Multi", coverage: "Global", protocol: "ShadowNet" },
      icon: Cloud,
    },
    {
      title: "ENCRYPTION STACK",
      description: "End-to-end encryption with HPKE, PLONK zero-knowledge proofs, and multi-party computation for privacy",
      status: "SECURED",
      metrics: { encryption: "HPKE", zk: "PLONK", mpc: "Enabled", privacy: "100%" },
      icon: Eye,
    },
    {
      title: "PRIVACY API",
      description: "Low-latency privacy API endpoints deployed globally for instant stealth transactions and metadata-free operations",
      status: "DEPLOYED",
      metrics: { regions: "23", latency: "< 50ms", uptime: "99.99%", scaling: "Auto" },
      icon: Zap,
    },
  ]

  useEffect(() => {
    const deploymentInterval = setInterval(() => {
      const statuses = ["READY", "BUILDING", "DEPLOYING", "LIVE"]
      setDeploymentStatus((prev) => {
        const currentIndex = statuses.indexOf(prev)
        return statuses[(currentIndex + 1) % statuses.length]
      })
    }, 4000)

    return () => {
      clearInterval(deploymentInterval)
    }
  }, [])

  return (
    <section id="vercel" className="py-24 sm:py-32 bg-[#0a0a0a] text-white relative overflow-hidden z-10">
      {/* Animated Network Background */}
      <div className="absolute inset-0 opacity-25">
        {/* Animated network grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            animation: "gridMove 25s linear infinite"
          }}
        />

        {/* Network connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
          {[...Array(20)].map((_, i) => {
            const x1 = (i * 8) % 100
            const y1 = (i * 6) % 100
            const x2 = ((i * 8) + 25) % 100
            const y2 = ((i * 6) + 20) % 100
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
                strokeDasharray="4,4"
                style={{
                  animation: `infraLineDash ${4 + (i % 3)}s linear infinite, infraLineOpacity ${3 + (i % 2)}s ease-in-out infinite`
                }}
              />
            )
          })}
        </svg>

        {/* Network nodes */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${(i * 4.2) % 100}%`,
                top: `${(i * 3.8) % 100}%`,
                opacity: 0.2 + (i % 3) * 0.1,
                animation: `nodePulse ${4 + (i % 4)}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
                boxShadow: "0 0 8px rgba(255,255,255,0.6)"
              }}
            />
          ))}
        </div>

        {/* Network orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
            animation: "networkPulse 12s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
            animation: "networkPulse 14s ease-in-out infinite 3s"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-light tracking-wider mb-6 font-mono text-white">PRIVACY INFRASTRUCTURE</h2>
          <div className="w-24 sm:w-32 h-px bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            Enterprise-grade privacy infrastructure combining Solana blockchain, ShadowNet relays, and zero-knowledge proof systems
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {infrastructureFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="border-2 border-white/20 bg-[#1a1a1a] p-6 sm:p-8 relative group hover:border-white transition-all duration-700 hover:transform hover:-translate-y-3 hover:shadow-xl hover:shadow-white/20 overflow-hidden cursor-pointer"
                style={{
                  transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                {/* Animated background gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
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

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/0 group-hover:border-white/50 transition-all duration-500 group-hover:w-8 group-hover:h-8"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/0 group-hover:border-white/50 transition-all duration-500 group-hover:w-8 group-hover:h-8"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/0 group-hover:border-white/50 transition-all duration-500 group-hover:w-8 group-hover:h-8"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/0 group-hover:border-white/50 transition-all duration-500 group-hover:w-8 group-hover:h-8"></div>

                <div className="relative z-10">
                  <div className="absolute top-6 right-6">
                    <div className="w-3 h-3 bg-white rounded-full opacity-60 animate-pulse"></div>
                  </div>

                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    <h3 className="font-mono font-bold text-lg tracking-wide text-white group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>

                  <div className="space-y-3 mb-6">
                    {Object.entries(feature.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-xs font-mono">
                        <span className="text-gray-500 uppercase group-hover:text-gray-400 transition-colors duration-300">{key}:</span>
                        <span className="text-white font-bold">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.status}</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-6 bg-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" style={{ animation: "pulseBar 1.5s ease-in-out infinite" }}></div>
                      <div className="w-1 h-6 bg-white opacity-60 group-hover:opacity-90 transition-opacity duration-300" style={{ animation: "pulseBar 1.5s ease-in-out infinite 0.2s" }}></div>
                      <div className="w-1 h-6 bg-white opacity-40 group-hover:opacity-80 transition-opacity duration-300" style={{ animation: "pulseBar 1.5s ease-in-out infinite 0.4s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="border-2 border-white/20 bg-[#1a1a1a] p-6 sm:p-10">
          <h3 className="font-mono font-bold text-xl sm:text-2xl mb-10 sm:mb-12 text-center tracking-wide text-white">PRIVACY LAYER ARCHITECTURE</h3>

          <div className="relative">
            {/* Layer 1: Client Layer */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">CLIENT LAYER</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-green-400 group-hover:shadow-lg group-hover:shadow-green-400/50">
                    <span className="text-xs font-mono font-bold text-white">WALLET</span>
                    <span className="text-xs font-mono text-gray-400">CLIENT</span>
                    {deploymentStatus === "LIVE" && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">User Wallet</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-white/40 flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/30 group-hover:bg-[#1a1a1a]">
                    <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-white transition-colors duration-300">WEB</span>
                    <span className="text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors duration-300">APP</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Browser</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-white/40 flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/30 group-hover:bg-[#1a1a1a]">
                    <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-white transition-colors duration-300">DAPP</span>
                    <span className="text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors duration-300">INTEGRATION</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">DeFi Apps</span>
                </div>
              </div>
            </div>

            {/* Connection Line with animation */}
            <div className="flex justify-center mb-16">
              <div className="w-px h-20 bg-white/20 relative overflow-hidden">
                <div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full"
                  style={{
                    animation: "deployFlow 2.5s ease-in-out infinite"
                  }}
                ></div>
              </div>
            </div>

            {/* Layer 2: Application Layer */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">PRIVACY LAYER</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10">
                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-lg group-hover:shadow-white/50">
                    <span className="text-xs font-mono font-bold text-white transition-colors duration-300">ZOID OS</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-pulse" style={{ animationDuration: "2s" }}></div>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Privacy OS</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-lg group-hover:shadow-white/50">
                    <span className="text-xs font-mono font-bold text-white transition-colors duration-300">SDK</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Privacy SDK</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-lg group-hover:shadow-white/50">
                    <span className="text-xs font-mono font-bold text-white transition-colors duration-300">ID</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Identity Obfuscation</span>
                </div>
              </div>
            </div>

            {/* Connection Line */}
            <div className="flex justify-center mb-16">
              <div className="w-px h-20 bg-white/20 relative overflow-hidden">
                <div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full"
                  style={{
                    animation: "deployFlow 2.5s ease-in-out infinite 0.5s"
                  }}
                ></div>
              </div>
            </div>

            {/* Layer 3: Infrastructure Layer */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">INFRASTRUCTURE LAYER</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-yellow-400 group-hover:shadow-lg group-hover:shadow-yellow-400/50">
                    <span className="text-xs font-mono font-bold text-white">SOLANA</span>
                    <span className="text-xs font-mono text-gray-400">PRIVACY</span>
                    {deploymentStatus === "BUILDING" && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Stealth Contracts</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-400/50">
                    <span className="text-xs font-mono font-bold text-white">SHADOW</span>
                    <span className="text-xs font-mono text-gray-400">NET</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDuration: "2s" }}></div>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Relay Network</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-400/50">
                    <span className="text-xs font-mono font-bold text-white">ZK</span>
                    <span className="text-xs font-mono text-gray-400">PROOFS</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">PLONK</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-red-400 group-hover:shadow-lg group-hover:shadow-red-400/50">
                    <span className="text-xs font-mono font-bold text-white">MPC</span>
                    <span className="text-xs font-mono text-gray-400">COMPUTE</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Multi-Party</span>
                </div>
              </div>
            </div>

            {/* Connection Line */}
            <div className="flex justify-center mb-16">
              <div className="w-px h-20 bg-white/20 relative overflow-hidden">
                <div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full"
                  style={{
                    animation: "deployFlow 2.5s ease-in-out infinite 1s"
                  }}
                ></div>
              </div>
            </div>

            {/* Layer 4: Relay Layer */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">RELAY LAYER</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10">
                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 group-hover:bg-[#1a1a1a]">
                    <span className="text-xs font-mono font-bold text-white transition-colors duration-300">RELAY-1</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Primary</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 group-hover:bg-[#1a1a1a]">
                    <span className="text-xs font-mono font-bold text-white transition-colors duration-300">RELAY-2</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Secondary</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white/40 flex items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/30 group-hover:bg-[#1a1a1a]">
                    <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-white transition-colors duration-300">MORE</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Expanding</span>
                </div>
              </div>
            </div>

            {/* Branching connections to networks */}
            <div className="flex justify-center mb-8">
              <svg width="400" height="60" className="overflow-visible w-full max-w-xs sm:max-w-md">
                <line x1="200" y1="0" x2="200" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <line x1="200" y1="30" x2="100" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;-8" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="200" y1="30" x2="200" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;-8" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="200" y1="30" x2="300" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;-8" dur="1s" repeatCount="indefinite" />
                </line>
                <circle cx="200" cy="30" r="4" fill="#fff" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            {/* Layer 5: Blockchain Layer */}
            <div>
              <div className="text-center mb-8">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">BLOCKCHAIN LAYER</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-green-400 group-hover:shadow-lg group-hover:shadow-green-400/50">
                    <span className="text-lg font-mono font-bold text-white">SOL</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDuration: "2s" }}></div>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Solana Network</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-green-400 group-hover:shadow-lg group-hover:shadow-green-400/50">
                    <span className="text-lg font-mono font-bold text-white">ZK</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDuration: "2.5s" }}></div>
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Zero-Knowledge</span>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-white flex flex-col items-center justify-center mb-3 relative bg-white text-black">
                    <span className="text-sm font-mono font-bold">100%</span>
                    <span className="text-xs font-mono">PRIVACY</span>
                    {deploymentStatus === "DEPLOYING" && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 font-mono uppercase tracking-wide">Anonymity Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Details */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/20">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-2xl font-mono font-bold mb-2 text-white">Solana</div>
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">Privacy Layer</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold mb-2 text-white">PLONK</div>
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">ZK Proofs</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold mb-2 text-white">HPKE</div>
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">Encryption</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold mb-2 text-white">100+</div>
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">Relay Nodes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

