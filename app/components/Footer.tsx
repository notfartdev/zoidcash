"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const [systemStatus, setSystemStatus] = useState({
    blockchain: "MAINNET",
    esim: "OPERATIONAL",
    network: "OPTIMAL",
    security: "SECURE",
  })

  useEffect(() => {
    const statusInterval = setInterval(() => {
      const statuses = ["MAINNET", "ACTIVE", "LIVE"]
      const networkStatuses = ["OPTIMAL", "EXCELLENT", "STRONG"]
      setSystemStatus((prev) => ({
        blockchain: statuses[Math.floor(Math.random() * statuses.length)],
        esim: "OPERATIONAL",
        network: networkStatuses[Math.floor(Math.random() * networkStatuses.length)],
        security: "SECURE",
      }))
    }, 12000)

    return () => clearInterval(statusInterval)
  }, [])

  return (
    <footer id="contact" className="bg-gray-50 border-t-2 border-gray-200 py-20 relative">
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full animate-pulse"
          style={{
            backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-12 left-12 w-4 h-4 border border-black opacity-20 rotate-45 animate-spin"
          style={{ animationDuration: "15s" }}
        ></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 border border-black opacity-15 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-12 bg-black opacity-10 rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 border border-black opacity-10 rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16 bg-white border-2 border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-mono font-bold text-lg">SYSTEM STATUS</h3>
            <div className="flex items-center space-x-6 text-sm font-mono">
              {Object.entries(systemStatus).map(([key, status]) => (
                <div key={key} className="flex items-center space-x-2 transition-all duration-500">
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      status === "SECURE" || status === "OPERATIONAL" || status === "MAINNET" || status === "ACTIVE" || 
                      status === "LIVE" || status === "OPTIMAL" || status === "EXCELLENT" || status === "STRONG"
                        ? "bg-black animate-pulse"
                        : "bg-gray-400"
                    }`}
                    style={{ animationDuration: "2s" }}
                  ></div>
                  <span className="uppercase transition-all duration-500">
                    {key}: <span className="transition-all duration-500">{status}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-mono font-bold text-4xl mb-8 tracking-wider">
              SEEKER<span className="font-light">SIM</span>
              <sup className="text-lg">™</sup>
            </h3>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Global eSIM connectivity platform powered by Solana blockchain. Pay with crypto, activate instantly in 180+ countries,
              with zero roaming fees. GSMA SGP.22 compliant with zero-knowledge privacy protection and AI-driven network optimization.
            </p>

            <div className="border-2 border-gray-300 p-8 inline-block hover:border-black transition-colors duration-300 mb-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 border-2 border-black flex items-center justify-center">
                  <span className="text-2xl font-mono font-bold">G</span>
                </div>
                <div>
                  <div className="text-xl font-mono font-bold">GSMA CERTIFIED</div>
                  <div className="text-sm text-gray-500 font-mono">SGP.22 COMPLIANT • SECURITY ASSURED</div>
                  <div className="text-xs text-gray-400 font-mono mt-1">CERTIFICATE ID: GSMA-SGP22-2024-001</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-gray-500 text-xs font-mono mb-2">API VERSION</div>
                <div className="font-mono font-bold text-lg">v2.1.0</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs font-mono mb-2">PROTOCOL</div>
                <div className="font-mono font-bold text-lg">SGP.22</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs font-mono mb-2">ENCRYPTION</div>
                <div className="font-mono font-bold text-lg">AES-256</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs font-mono mb-2">COMPLIANCE</div>
                <div className="font-mono font-bold text-lg">GSMA</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-bold mb-8 tracking-wide text-xl">CONTACT</h4>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin size={16} className="text-gray-500" />
                  <div className="text-gray-500 text-xs font-mono uppercase tracking-wide">HEADQUARTERS</div>
                </div>
                <div className="group-hover:text-gray-600 transition-colors pl-7">
                  Global Operations
                  <br />
                  Blockchain Infrastructure Hub
                  <br />
                  Edge Network Deployment
                </div>
              </div>
              <div className="group">
                <div className="flex items-center space-x-3 mb-2">
                  <Mail size={16} className="text-gray-500" />
                  <div className="text-gray-500 text-xs font-mono uppercase tracking-wide">EMAIL</div>
                </div>
                <div className="font-mono group-hover:text-gray-600 transition-colors pl-7">
                  contact@seekersim.com
                  <br />
                  support@seekersim.com
                </div>
              </div>
              <div className="group">
                <div className="flex items-center space-x-3 mb-2">
                  <Phone size={16} className="text-gray-500" />
                  <div className="text-gray-500 text-xs font-mono uppercase tracking-wide">SUPPORT</div>
                </div>
                <div className="font-mono group-hover:text-gray-600 transition-colors pl-7">
                  24/7 TECHNICAL
                  <br />
                  Blockchain Support
                  <br />
                  Solana Integration
                </div>
              </div>
              <div className="group">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <div className="text-gray-500 text-xs font-mono uppercase tracking-wide">TWITTER</div>
                </div>
                <a 
                  href="https://x.com/seekersim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono group-hover:text-gray-600 transition-colors pl-7 hover:underline"
                >
                  @seekersim
                  <br />
                  <span className="text-sm text-gray-500">Follow for updates</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-bold mb-8 tracking-wide text-xl">PERFORMANCE</h4>
            <div className="space-y-6">
              <div>
                <div className="text-gray-500 text-xs font-mono mb-2 uppercase tracking-wide">COUNTRIES</div>
                <div className="font-mono font-bold text-2xl">180+</div>
                <div className="text-xs text-gray-400">Global Coverage</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs font-mono mb-2 uppercase tracking-wide">NETWORKS</div>
                <div className="font-mono font-bold text-2xl">650+</div>
                <div className="text-xs text-gray-400">Carrier Partners</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs font-mono mb-2 uppercase tracking-wide">ACTIVATION</div>
                <div className="font-mono font-bold text-2xl">{"< 3sec"}</div>
                <div className="text-xs text-gray-400">Average Time</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs font-mono mb-2 uppercase tracking-wide">COST SAVINGS</div>
                <div className="font-mono font-bold text-2xl">94%</div>
                <div className="text-xs text-gray-400">vs Roaming</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs font-mono mb-2 uppercase tracking-wide">UPTIME</div>
                <div className="font-mono font-bold text-2xl">99.99%</div>
                <div className="text-xs text-gray-400">SLA Guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t-2 border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 font-mono mb-6 md:mb-0">
              © 2025 SEEKERSIM™. ALL RIGHTS RESERVED. • BLOCKCHAIN ESIM INFRASTRUCTURE
            </div>

            <div className="flex items-center space-x-8 text-sm font-mono">
              <span className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-black animate-pulse"></div>
                <span className="group-hover:text-gray-600 transition-colors">SOLANA BLOCKCHAIN</span>
              </span>
              <span className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-gray-400"></div>
                <span className="group-hover:text-gray-600 transition-colors">CRYPTO PAYMENTS</span>
              </span>
              <span className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-black"></div>
                <span className="group-hover:text-gray-600 transition-colors">PRIVACY FIRST</span>
              </span>
              <span className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-gray-600"></div>
                <span className="group-hover:text-gray-600 transition-colors">GSMA SGP.22</span>
              </span>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 text-center">
            <div className="text-xs font-mono text-gray-400 space-x-6">
              <span>SOLANA MAINNET</span>
              <span>•</span>
              <span>650+ GLOBAL NETWORKS</span>
              <span>•</span>
              <span>AES-256 ENCRYPTED</span>
              <span>•</span>
              <span>zk-KYC PRIVACY</span>
              <span>•</span>
              <span>GSMA SGP.22 CERTIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
