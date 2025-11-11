"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import FluidBackground from "../components/FluidBackground"

export default function LoginPage() {
  const router = useRouter()
  const [walletAddress, setWalletAddress] = useState("")
  const [accessCode, setAccessCode] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Simulate whitelist check
    setTimeout(() => {
      setLoading(false)
      setError("Access restricted. Your wallet is not on the whitelist. Please contact us for early access.")
    }, 1500)
  }

  const handleConnectWallet = () => {
    // TODO: Implement actual Solana wallet connection
    setError("Wallet connection coming soon. Please enter manually for now.")
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] relative overflow-hidden">
      <FluidBackground />
      <Navigation />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen py-24">
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

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-4 h-4 border border-white opacity-20 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-6 h-6 border border-white opacity-15 animate-bounce"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-white opacity-30 animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-1 bg-white opacity-10 rotate-12"></div>
          <div className="absolute top-1/2 left-10 w-8 h-8 border border-white opacity-10 rotate-45"></div>
        </div>

        <div className="relative z-10 w-full max-w-md mx-auto px-6">
          {/* Logo/Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-light tracking-wider mb-4 font-mono text-white">
              ZOID<span className="font-bold">CASH</span>
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 font-mono">PLATFORM ACCESS</p>
          </div>

          {/* Access Notice */}
          <div className="bg-[#1a1a1a] border-2 border-white/30 p-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-black text-sm font-bold">!</span>
              </div>
              <div>
                <h3 className="font-mono font-bold text-sm mb-2 uppercase tracking-wide text-white">Whitelist Only</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Zoidcash is currently in private beta. Access is restricted to whitelisted wallets only.
                  Join our waitlist to request early access.
                </p>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="border-2 border-white/20 bg-[#1a1a1a] p-8">
            <h2 className="text-2xl font-mono font-bold mb-8 tracking-wide text-white">LOGIN</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Wallet Connection */}
              <div>
                <label className="block text-sm font-mono font-bold mb-3 uppercase tracking-wide text-gray-300">
                  Solana Wallet Address
                </label>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full border-2 border-white/20 bg-[#0a0a0a] text-white p-3 font-mono text-sm focus:border-white focus:outline-none transition-colors"
                    placeholder="Enter wallet address or connect..."
                  />
                  <button
                    type="button"
                    onClick={handleConnectWallet}
                    className="w-full border-2 border-white/20 bg-[#0a0a0a] text-white p-3 font-mono text-sm hover:border-white hover:bg-[#1a1a1a] transition-all flex items-center justify-center space-x-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v1M9 12h12m0 0l-3-3m3 3l-3 3" />
                    </svg>
                    <span>CONNECT WALLET</span>
                  </button>
                </div>
              </div>

              {/* Access Code */}
              <div>
                <label className="block text-sm font-mono font-bold mb-3 uppercase tracking-wide text-gray-300">
                  Access Code (Optional)
                </label>
                <input
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="w-full border-2 border-white/20 bg-[#0a0a0a] text-white p-3 font-mono text-sm focus:border-white focus:outline-none transition-colors"
                  placeholder="Enter early access code"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-[#1a1a1a] border-2 border-white/30 p-4">
                  <p className="text-sm text-gray-300 font-mono">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !walletAddress}
                className="w-full bg-white text-black py-4 font-mono font-bold text-sm uppercase tracking-wide hover:bg-gray-200 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed relative"
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>VERIFYING...</span>
                  </div>
                ) : (
                  "ENTER PLATFORM"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center space-x-4 my-8">
              <div className="flex-1 h-px bg-white/20"></div>
              <span className="text-xs font-mono text-gray-400 uppercase">Or</span>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            {/* Request Access */}
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4 font-mono">Don't have access yet?</p>
              <a
                href="/api-access"
                className="inline-block px-6 py-3 border-2 border-white text-white font-mono font-bold text-sm hover:bg-white hover:text-black transition-all"
              >
                JOIN WAITLIST
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <a
              href="/"
              className="text-sm font-mono text-gray-400 hover:text-white transition-colors flex items-center justify-center space-x-2"
            >
              <span>←</span>
              <span>BACK TO HOME</span>
            </a>
          </div>

          {/* Support Contact */}
          <div className="mt-12 text-center">
            <p className="text-xs font-mono text-gray-500 mb-2">Need help?</p>
            <a
              href="mailto:support@zoidcash.xyz"
              className="text-sm font-mono text-gray-400 hover:text-white transition-colors underline"
            >
              support@zoidcash.xyz
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
