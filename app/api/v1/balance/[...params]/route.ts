import { NextRequest, NextResponse } from "next/server"
import { create402Response, getPriceForEndpoint, hasValidPayment } from "@/lib/x402"

/**
 * Balance Check API with x402 Support
 * 
 * @example
 * GET /api/v1/balance/ABC...xyz
 * X-PAYMENT: <payment-header>
 */
export async function GET(request: NextRequest, { params }: { params: { params: string[] } }) {
  const wallet = params.params?.[0]
  
  if (!wallet) {
    return NextResponse.json(
      { error: "Wallet address required" },
      { status: 400 }
    )
  }

  // Check for API key or payment
  const apiKey = request.headers.get("X-API-Key")
  const isAuthenticated = !!apiKey && apiKey === process.env.SEEKERSIM_API_KEY
  const hasPayment = hasValidPayment(request)

  if (!isAuthenticated && !hasPayment) {
    const resource = request.nextUrl.pathname
    const amount = getPriceForEndpoint("/api/v1/balance")
    
    if (amount !== "0") {
      return create402Response(resource, `Balance check for wallet ${wallet.substring(0, 8)}...`, amount)
    }
  }

  // Mock balance response
  const mockBalance = {
    wallet,
    balance: {
      sol: (Math.random() * 5).toFixed(4),
      usdc: (Math.random() * 100).toFixed(2),
      credits: `${(Math.random() * 5).toFixed(1)}GB`
    },
    activePlans: Math.floor(Math.random() * 3),
    paymentMethod: hasPayment ? "x402" : (isAuthenticated ? "api_key" : "free")
  }

  return NextResponse.json(mockBalance)
}

