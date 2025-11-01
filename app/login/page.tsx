"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

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
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 border border-black opacity-20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-6 h-6 border border-black opacity-15 animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-black opacity-30 animate-ping"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        {/* Logo/Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-light tracking-wider mb-4 font-mono">
            SEEKER<span className="font-bold">SIM</span>
            <sup className="text-2xl">™</sup>
          </h1>
          <div className="w-24 h-px bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-mono">PLATFORM ACCESS</p>
        </div>

        {/* Access Notice */}
        <div className="bg-yellow-50 border-2 border-yellow-400 p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-bold">!</span>
            </div>
            <div>
              <h3 className="font-mono font-bold text-sm mb-2 uppercase tracking-wide">Whitelist Only</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                SeekerSIM platform is currently in private beta. Access is restricted to whitelisted wallets only.
                Join our waitlist to request early access.
              </p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="border-2 border-black bg-white p-8">
          <h2 className="text-2xl font-mono font-bold mb-8 tracking-wide">LOGIN</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Wallet Connection */}
            <div>
              <label className="block text-sm font-mono font-bold mb-3 uppercase tracking-wide">
                Solana Wallet Address
              </label>
              <div className="space-y-3">
                <input
                  type="text"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-black focus:outline-none transition-colors"
                  placeholder="Enter wallet address or connect..."
                />
                <button
                  type="button"
                  onClick={handleConnectWallet}
                  className="w-full border-2 border-gray-300 p-3 font-mono text-sm hover:border-black hover:bg-gray-50 transition-all flex items-center justify-center space-x-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v1M9 12h12m0 0l-3-3m3 3l-3 3" />
                  </svg>
                  <span>CONNECT SEED VAULT</span>
                </button>
              </div>
            </div>

            {/* Access Code */}
            <div>
              <label className="block text-sm font-mono font-bold mb-3 uppercase tracking-wide">
                Access Code (Optional)
              </label>
              <input
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-full border-2 border-gray-300 p-3 font-mono text-sm focus:border-black focus:outline-none transition-colors"
                placeholder="Enter early access code"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-400 p-4">
                <p className="text-sm text-red-700 font-mono">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !walletAddress}
              className="w-full bg-black text-white py-4 font-mono font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed relative"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>VERIFYING...</span>
                </div>
              ) : (
                "ENTER PLATFORM"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center space-x-4 my-8">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-xs font-mono text-gray-400 uppercase">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Request Access */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4 font-mono">Don't have access yet?</p>
            <a
              href="/api-access"
              className="inline-block px-6 py-3 border-2 border-black font-mono font-bold text-sm hover:bg-black hover:text-white transition-all"
            >
              JOIN WAITLIST
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="text-sm font-mono text-gray-500 hover:text-black transition-colors flex items-center justify-center space-x-2"
          >
            <span>←</span>
            <span>BACK TO HOME</span>
          </a>
        </div>

        {/* Support Contact */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-gray-500 mb-2">Need help?</p>
          <a
            href="mailto:support@seekersim.com"
            className="text-sm font-mono text-gray-600 hover:text-black transition-colors underline"
          >
            support@seekersim.com
          </a>
        </div>
      </div>
    </div>
  )
}

