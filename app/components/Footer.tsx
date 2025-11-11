"use client"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"

export default function Footer() {
  const [systemStatus, setSystemStatus] = useState({
    blockchain: "MAINNET",
    privacy: "OPERATIONAL",
    network: "OPTIMAL",
    security: "SECURE",
  })

  useEffect(() => {
    const statusInterval = setInterval(() => {
      const statuses = ["MAINNET", "ACTIVE", "LIVE"]
      const networkStatuses = ["OPTIMAL", "EXCELLENT", "STRONG"]
      setSystemStatus((prev) => ({
        blockchain: statuses[Math.floor(Math.random() * statuses.length)],
        privacy: "OPERATIONAL",
        network: networkStatuses[Math.floor(Math.random() * networkStatuses.length)],
        security: "SECURE",
      }))
    }, 12000)

    return () => clearInterval(statusInterval)
  }, [])

  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t-2 border-white/10 py-16 sm:py-20 relative z-10">
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full animate-pulse"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-12 left-12 w-4 h-4 border border-white opacity-20 rotate-45 animate-spin"
          style={{ animationDuration: "15s" }}
        ></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 border border-white opacity-15 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-12 bg-white opacity-10 rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 border border-white opacity-10 rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-12 sm:mb-16 bg-[#1a1a1a] border-2 border-white/20 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <h3 className="font-mono font-bold text-base sm:text-lg text-white">SYSTEM STATUS</h3>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono">
              {Object.entries(systemStatus).map(([key, status]) => (
                <div key={key} className="flex items-center space-x-2 transition-all duration-500">
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      status === "SECURE" || status === "OPERATIONAL" || status === "MAINNET" || status === "ACTIVE" || 
                      status === "LIVE" || status === "OPTIMAL" || status === "EXCELLENT" || status === "STRONG"
                        ? "bg-white animate-pulse"
                        : "bg-gray-600"
                    }`}
                    style={{ animationDuration: "2s" }}
                  ></div>
                  <span className="uppercase transition-all duration-500 text-gray-400">
                    {key}: <span className="transition-all duration-500 text-white">{status}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-mono font-bold text-3xl sm:text-4xl mb-6 sm:mb-8 tracking-wider text-white">
              ZOID<span className="font-light">CASH</span>
            </h3>
            <p className="text-gray-400 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg">
              The privacy layer of Solana. A modular system that makes privacy a native feature of the blockchain. From stealth transactions to encrypted communication, Zoidcash enables you to stay invisible while staying connected.
            </p>

            <div className="border-2 border-white/20 p-6 sm:p-8 inline-block w-full sm:w-auto hover:border-white transition-colors duration-300 mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
                <div className="w-16 h-16 border-2 border-white flex items-center justify-center">
                  <span className="text-2xl font-mono font-bold text-white">P</span>
                </div>
                <div>
                  <div className="text-xl font-mono font-bold text-white">PRIVACY FIRST</div>
                  <div className="text-sm text-gray-400 font-mono">ZERO METADATA • ANONYMITY GUARANTEED</div>
                  <div className="text-xs text-gray-500 font-mono mt-1">PRIVACY LAYER OF SOLANA</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
              <div>
                <div className="text-gray-400 text-xs font-mono mb-2">API VERSION</div>
                <div className="font-mono font-bold text-lg text-white">v2.1.0</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs font-mono mb-2">ZK PROTOCOL</div>
                <div className="font-mono font-bold text-lg text-white">PLONK</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs font-mono mb-2">ENCRYPTION</div>
                <div className="font-mono font-bold text-lg text-white">HPKE</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs font-mono mb-2">PRIVACY</div>
                <div className="font-mono font-bold text-lg text-white">100%</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-bold mb-8 tracking-wide text-xl text-white">CONTACT</h4>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-center space-x-3 mb-2">
                  <Mail size={16} className="text-gray-400" />
                  <div className="text-gray-400 text-xs font-mono uppercase tracking-wide">EMAIL</div>
                </div>
                <div className="font-mono text-gray-400 group-hover:text-white transition-colors pl-7">
                  contact@zoidcash.xyz
                  <br />
                  support@zoidcash.xyz
                </div>
              </div>
              <div className="group">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <div className="text-gray-400 text-xs font-mono uppercase tracking-wide">TWITTER</div>
                </div>
                <a 
                  href="https://x.com/zoidcash_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-gray-400 group-hover:text-white transition-colors pl-7 hover:underline"
                >
                  @zoidcash_
                  <br />
                  <span className="text-sm text-gray-500">Follow for updates</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-bold mb-8 tracking-wide text-xl text-white">PERFORMANCE</h4>
            <div className="space-y-6">
              <div>
                <div className="text-gray-400 text-xs font-mono mb-2 uppercase tracking-wide">RELAY NODES</div>
                <div className="font-mono font-bold text-2xl text-white">100+</div>
                <div className="text-xs text-gray-500">Global Network</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs font-mono mb-2 uppercase tracking-wide">TRANSACTIONS</div>
                <div className="font-mono font-bold text-2xl text-white">1M+</div>
                <div className="text-xs text-gray-500">Stealth Protected</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs font-mono mb-2 uppercase tracking-wide">PRIVACY</div>
                <div className="font-mono font-bold text-2xl text-white">100%</div>
                <div className="text-xs text-gray-500">Anonymity Level</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs font-mono mb-2 uppercase tracking-wide">METADATA</div>
                <div className="font-mono font-bold text-2xl text-white">0</div>
                <div className="text-xs text-gray-500">Zero Leakage</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs font-mono mb-2 uppercase tracking-wide">UPTIME</div>
                <div className="font-mono font-bold text-2xl text-white">99.99%</div>
                <div className="text-xs text-gray-500">SLA Guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t-2 border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 font-mono mb-6 md:mb-0">
              © 2025 ZOIDCASH. ALL RIGHTS RESERVED. • PRIVACY LAYER OF SOLANA
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-8 text-xs sm:text-sm font-mono">
              <span className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-white animate-pulse"></div>
                <span className="text-gray-400 group-hover:text-white transition-colors">SOLANA PRIVACY</span>
              </span>
              <span className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-gray-500"></div>
                <span className="text-gray-400 group-hover:text-white transition-colors">STEALTH ADDRESSES</span>
              </span>
              <span className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-white"></div>
                <span className="text-gray-400 group-hover:text-white transition-colors">ZERO METADATA</span>
              </span>
              <span className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-gray-500"></div>
                <span className="text-gray-400 group-hover:text-white transition-colors">ZK PROOFS</span>
              </span>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center">
            <div className="text-xs font-mono text-gray-500 space-x-6">
              <span>SOLANA MAINNET</span>
              <span>•</span>
              <span>100+ RELAY NODES</span>
              <span>•</span>
              <span>HPKE ENCRYPTED</span>
              <span>•</span>
              <span>PLONK ZK PROOFS</span>
              <span>•</span>
              <span>PRIVACY FIRST</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
