"use client"

import { useState, useEffect } from "react"
import { Cloud, Zap, Eye } from "lucide-react"

export default function VercelSection() {
  const [deploymentStatus, setDeploymentStatus] = useState("READY")
  const [edgeMetrics, setEdgeMetrics] = useState({
    regions: 23,
    requests: 1247892,
    latency: 47,
    uptime: 99.99,
  })

  const infrastructureFeatures = [
    {
      title: "SOLANA BLOCKCHAIN",
      description: "High-speed payment processing with smart contracts for credits, provisioning, and settlements",
      status: "MAINNET",
      metrics: { speed: "~400ms", tps: "65,000", fees: "<$0.001", finality: "Instant" },
      icon: Zap,
    },
    {
      title: "ESIM NETWORK",
      description: "Global eSIM provisioning via tier-1 aggregators with 650+ carrier networks across 180+ countries",
      status: "ACTIVE",
      metrics: { countries: "180+", carriers: "650+", coverage: "Global", protocol: "SGP.22" },
      icon: Cloud,
    },
    {
      title: "SECURITY LAYER",
      description: "End-to-end encryption with Seed Vault integration and zero-knowledge proof verification",
      status: "SECURED",
      metrics: { encryption: "AES-256", kyc: "zk-Proof", vault: "Seed", compliance: "GSMA" },
      icon: Eye,
    },
    {
      title: "EDGE API",
      description: "Low-latency API endpoints deployed globally for instant provisioning and real-time balance updates",
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

    let animationFrame: number
    let lastUpdate = Date.now()

    const updateMetrics = () => {
      const now = Date.now()
      const delta = Math.min((now - lastUpdate) / 1000, 0.1)
      
      setEdgeMetrics((prev) => ({
        regions: 23,
        requests: prev.requests + Math.floor(Math.random() * 50 * delta),
        latency: Math.max(30, Math.min(80, prev.latency + (Math.random() - 0.5) * 6 * delta)),
        uptime: Math.max(99.9, Math.min(100, prev.uptime + (Math.random() - 0.5) * 0.015 * delta)),
      }))
      
      lastUpdate = now
      animationFrame = requestAnimationFrame(updateMetrics)
    }

    animationFrame = requestAnimationFrame(updateMetrics)

    return () => {
      clearInterval(deploymentInterval)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section id="vercel" className="py-24 sm:py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="circuit-pattern" width="150" height="150" patternUnits="userSpaceOnUse">
              <path
                d="M 0 75 L 37.5 75 L 37.5 37.5 L 112.5 37.5 L 112.5 112.5 L 150 112.5"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />
              <circle cx="37.5" cy="75" r="5" fill="#fff" />
              <circle cx="112.5" cy="37.5" r="5" fill="#fff" />
              <rect x="107.5" y="107.5" width="10" height="10" fill="none" stroke="#fff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-light tracking-wider mb-6 font-mono">PLATFORM INFRASTRUCTURE</h2>
          <div className="w-24 sm:w-32 h-px bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            Enterprise-grade infrastructure combining Solana blockchain, global eSIM networks, and edge computing
          </p>
        </div>

        <div className="mb-16 sm:mb-20 bg-gray-900 border-2 border-gray-700 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
            <h3 className="font-mono font-bold text-lg sm:text-xl tracking-wide">NETWORK STATUS</h3>
            <div
              className={`px-4 py-2 text-sm font-mono ${
                deploymentStatus === "LIVE"
                  ? "bg-green-600"
                  : deploymentStatus === "READY"
                    ? "bg-blue-600"
                    : "bg-yellow-600"
              }`}
            >
              {deploymentStatus}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center transition-all duration-300 hover:scale-105">
              <div className="text-gray-400 text-xs font-mono mb-2 uppercase tracking-wide">ESIM ACTIVATIONS</div>
              <div className="text-3xl font-mono font-bold transition-all duration-300">
                {Math.round(edgeMetrics.requests).toLocaleString()}
              </div>
            </div>
            <div className="text-center transition-all duration-300 hover:scale-105">
              <div className="text-gray-400 text-xs font-mono mb-2 uppercase tracking-wide">COUNTRIES</div>
              <div className="text-3xl font-mono font-bold transition-all duration-300">180+</div>
            </div>
            <div className="text-center transition-all duration-300 hover:scale-105">
              <div className="text-gray-400 text-xs font-mono mb-2 uppercase tracking-wide">AVG LATENCY</div>
              <div className="text-3xl font-mono font-bold transition-all duration-300">
                {Math.round(edgeMetrics.latency)}ms
              </div>
            </div>
            <div className="text-center transition-all duration-300 hover:scale-105">
              <div className="text-gray-400 text-xs font-mono mb-2 uppercase tracking-wide">UPTIME SLA</div>
              <div className="text-3xl font-mono font-bold transition-all duration-300">
                {edgeMetrics.uptime.toFixed(2)}%
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {infrastructureFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="border-2 border-gray-700 bg-gray-900 p-6 sm:p-8 relative group hover:border-gray-500 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="absolute top-6 right-6">
                  <div className="w-3 h-3 bg-white rounded-full opacity-60 animate-pulse"></div>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <IconComponent size={24} className="text-gray-400" />
                  <h3 className="font-mono font-bold text-lg tracking-wide">{feature.title}</h3>
                </div>

                <p className="text-gray-400 text-sm mb-8 leading-relaxed">{feature.description}</p>

                <div className="space-y-3 mb-6">
                  {Object.entries(feature.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-xs font-mono">
                      <span className="text-gray-500 uppercase">{key}:</span>
                      <span className="text-white font-bold">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500">{feature.status}</span>
                  <div className="flex space-x-1">
                    <div className="w-1 h-6 bg-white opacity-80"></div>
                    <div className="w-1 h-6 bg-white opacity-60"></div>
                    <div className="w-1 h-6 bg-white opacity-40"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="border-2 border-gray-700 bg-gray-900 p-6 sm:p-10">
          <h3 className="font-mono font-bold text-xl sm:text-2xl mb-10 sm:mb-12 text-center tracking-wide">PLATFORM ARCHITECTURE</h3>

          <div className="relative">
            {/* Layer 1: Client Layer */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">CLIENT LAYER</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-green-400 group-hover:shadow-lg group-hover:shadow-green-400/50">
                    <span className="text-xs font-mono font-bold">SEEKER</span>
                    <span className="text-xs font-mono text-gray-400">PHONE</span>
                    {deploymentStatus === "LIVE" && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">User Device</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-gray-600 flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/30 group-hover:bg-gray-800">
                    <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-white transition-colors duration-300">WEB</span>
                    <span className="text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors duration-300">APP</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">Browser</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-gray-600 flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/30 group-hover:bg-gray-800">
                    <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-white transition-colors duration-300">OTHER</span>
                    <span className="text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors duration-300">DEVICES</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">Future</span>
                </div>
              </div>
            </div>

            {/* Connection Line with animation */}
            <div className="flex justify-center mb-16">
              <div className="w-px h-20 bg-gray-600 relative overflow-hidden">
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
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">APPLICATION LAYER</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10">
                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-lg group-hover:shadow-white/50">
                    <span className="text-xs font-mono font-bold transition-colors duration-300">APP</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-pulse" style={{ animationDuration: "2s" }}></div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">Mobile App</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-lg group-hover:shadow-white/50">
                    <span className="text-xs font-mono font-bold transition-colors duration-300">SDK</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">Developer Kit</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-lg group-hover:shadow-white/50">
                    <span className="text-xs font-mono font-bold transition-colors duration-300">VAULT</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">Seed Vault</span>
                </div>
              </div>
            </div>

            {/* Connection Line */}
            <div className="flex justify-center mb-16">
              <div className="w-px h-20 bg-gray-600 relative overflow-hidden">
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
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">INFRASTRUCTURE LAYER</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-yellow-400 group-hover:shadow-lg group-hover:shadow-yellow-400/50">
                    <span className="text-xs font-mono font-bold">SOLANA</span>
                    <span className="text-xs font-mono text-gray-400">MAINNET</span>
                    {deploymentStatus === "BUILDING" && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">Smart Contracts</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-400/50">
                    <span className="text-xs font-mono font-bold">VERCEL</span>
                    <span className="text-xs font-mono text-gray-400">EDGE</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDuration: "2s" }}></div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">API Gateway</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-400/50">
                    <span className="text-xs font-mono font-bold">IPFS</span>
                    <span className="text-xs font-mono text-gray-400">STORAGE</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">Decentralized</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-24 h-24 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-red-400 group-hover:shadow-lg group-hover:shadow-red-400/50">
                    <span className="text-xs font-mono font-bold">AUTH</span>
                    <span className="text-xs font-mono text-gray-400">zk-KYC</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">Identity Layer</span>
                </div>
              </div>
            </div>

            {/* Connection Line */}
            <div className="flex justify-center mb-16">
              <div className="w-px h-20 bg-gray-600 relative overflow-hidden">
                <div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full"
                  style={{
                    animation: "deployFlow 2.5s ease-in-out infinite 1s"
                  }}
                ></div>
              </div>
            </div>

            {/* Layer 4: eSIM Provider Layer */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">ESIM PROVIDER LAYER</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10">
                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 group-hover:bg-gray-800">
                    <span className="text-xs font-mono font-bold transition-colors duration-300">TIER-1</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">Primary</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 group-hover:bg-gray-800">
                    <span className="text-xs font-mono font-bold transition-colors duration-300">TIER-2</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">Secondary</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-gray-600 flex items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/30 group-hover:bg-gray-800">
                    <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-white transition-colors duration-300">MORE</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">Expanding</span>
                </div>
              </div>
            </div>

            {/* Branching connections to networks */}
            <div className="flex justify-center mb-8">
              <svg width="400" height="60" className="overflow-visible w-full max-w-xs sm:max-w-md">
                <line x1="200" y1="0" x2="200" y2="30" stroke="#4B5563" strokeWidth="1" />
                <line x1="200" y1="30" x2="100" y2="60" stroke="#4B5563" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;-8" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="200" y1="30" x2="200" y2="60" stroke="#4B5563" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;-8" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="200" y1="30" x2="300" y2="60" stroke="#4B5563" strokeWidth="1" strokeDasharray="4,4">
                  <animate attributeName="stroke-dashoffset" values="0;-8" dur="1s" repeatCount="indefinite" />
                </line>
                <circle cx="200" cy="30" r="4" fill="#fff" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            {/* Layer 5: Network Layer */}
            <div>
              <div className="text-center mb-8">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">GLOBAL NETWORK LAYER</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-green-400 group-hover:shadow-lg group-hover:shadow-green-400/50">
                    <span className="text-lg font-mono font-bold">4G</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDuration: "2s" }}></div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">LTE Networks</span>
                </div>

                <div className="text-center group cursor-pointer">
                  <div className="w-20 h-20 border-2 border-white flex flex-col items-center justify-center mb-3 relative transition-all duration-300 group-hover:border-green-400 group-hover:shadow-lg group-hover:shadow-green-400/50">
                    <span className="text-lg font-mono font-bold">5G</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDuration: "2.5s" }}></div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">5G Networks</span>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-white flex flex-col items-center justify-center mb-3 relative bg-white text-black">
                    <span className="text-sm font-mono font-bold">650+</span>
                    <span className="text-xs font-mono">TOTAL</span>
                    {deploymentStatus === "DEPLOYING" && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-ping"></div>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wide">Carriers Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Details */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-700">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-2xl font-mono font-bold mb-2">Solana</div>
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">Payment Rail</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold mb-2">SGP.22</div>
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">eSIM Protocol</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold mb-2">AES-256</div>
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">Encryption</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold mb-2">180+</div>
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wide">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

