import { NextResponse } from "next/server"
import { getSupportedSchemes } from "@/lib/x402-facilitator"

/**
 * API Info Endpoint
 * Returns information about API capabilities, including x402 support
 */
export async function GET() {
  const supportedSchemes = await getSupportedSchemes()

  return NextResponse.json({
    name: "SeekerSIM API",
    version: "2.1.0",
    x402: {
      enabled: true,
      version: 1,
      supportedSchemes: supportedSchemes,
      supportedNetworks: ["solana", "base", "ethereum"],
      pricing: {
        "/api/v1/esim/provision": "1.0 USDC",
        "/api/v1/balance": "0.1 USDC",
        "/api/v1/usage": "0.1 USDC",
        "/api/v1/plans": "Free"
      }
    },
    authentication: {
      methods: ["api_key", "x402"],
      apiKeyHeader: "X-API-Key",
      paymentHeader: "X-PAYMENT"
    },
    documentation: {
      main: "https://seekersim.xyz/docs",
      x402: "https://x402.org",
      github: "https://github.com/notfartdev/seekersim"
    }
  }, {
    headers: {
      "X-402-Enabled": "true",
      "X-402-Version": "1"
    }
  })
}

