import { NextRequest, NextResponse } from "next/server"
import { create402Response, getPriceForEndpoint, hasValidPayment, getPaymentPayload, getPaymentRequirements } from "@/lib/x402"

/**
 * eSIM Provisioning API Endpoint with x402 Payment Support
 * 
 * This endpoint requires payment via x402 protocol for AI agents and automated clients.
 * Traditional API key authentication also works for registered developers.
 * 
 * @example
 * // Without payment (returns 402)
 * GET /api/v1/esim/provision?country=FR&dataAmount=1GB
 * 
 * // With x402 payment header
 * GET /api/v1/esim/provision?country=FR&dataAmount=1GB
 * X-PAYMENT: <base64-encoded-payment-payload>
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const country = searchParams.get("country")
    const dataAmount = searchParams.get("dataAmount")
    const wallet = searchParams.get("wallet")

    // Check for API key authentication (traditional method)
    const apiKey = request.headers.get("X-API-Key")
    const isAuthenticated = !!apiKey && apiKey === process.env.SEEKERSIM_API_KEY

    // Check for x402 payment
    const hasPayment = hasValidPayment(request)
    const paymentPayload = hasPayment ? getPaymentPayload(request) : null

    // If no API key and no payment, require payment
    if (!isAuthenticated && !hasPayment) {
      const resource = request.nextUrl.pathname + request.nextUrl.search
      const description = `eSIM provisioning for ${country || "any country"}, ${dataAmount || "data plan"}`
      const amount = getPriceForEndpoint(request.nextUrl.pathname)

      return create402Response(resource, description, amount)
    }

    // Validate required parameters
    if (!country || !dataAmount) {
      return NextResponse.json(
        { error: "Missing required parameters: country and dataAmount" },
        { status: 400 }
      )
    }

    // If payment is present, verify it with facilitator server
    if (hasPayment && paymentPayload) {
      const { verifyPayment } = await import("@/lib/x402-facilitator")
      const amount = getPriceForEndpoint(request.nextUrl.pathname)
      const resource = request.nextUrl.pathname + request.nextUrl.search
      const description = `eSIM provisioning for ${country || "any country"}, ${dataAmount || "data plan"}`
      const requirements = getPaymentRequirements(resource, description, amount)[0] // Use Solana for now

      const isValid = await verifyPayment(paymentPayload, requirements)
      if (!isValid) {
        return create402Response(resource, description, amount, "Invalid or unverified payment")
      }

      console.log("[x402] Payment verified:", {
        resource: request.nextUrl.pathname,
        network: requirements.network,
        amount
      })
    }

    // Process eSIM provisioning
    // In production, this would:
    // 1. Verify payment on-chain (if x402)
    // 2. Call eSIM provider API
    // 3. Generate QR code
    // 4. Store provisioning record

    const mockResponse = {
      success: true,
      qrCode: `LPA:1$${process.env.NEXT_PUBLIC_ESIM_SERVER || "smdp.example.com"}$${Math.random().toString(36).substring(7)}`,
      activationCode: Math.random().toString(36).substring(2, 9).toUpperCase(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      country,
      dataAmount,
      paymentMethod: hasPayment ? "x402" : "api_key",
      timestamp: new Date().toISOString()
    }

    return NextResponse.json(mockResponse, {
      headers: {
        "X-Payment-Method": hasPayment ? "x402" : "api_key",
        // Include settlement response if payment was processed
        ...(hasPayment && paymentPayload ? {
          "X-Payment-Response": Buffer.from(JSON.stringify({
            success: true,
            txHash: null, // Would be populated by facilitator
            networkId: "solana"
          })).toString("base64")
        } : {})
      }
    })

  } catch (error) {
    console.error("[API] Provisioning error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { country, dataAmount, duration, wallet } = body

    // Check for API key or x402 payment
    const apiKey = request.headers.get("X-API-Key")
    const isAuthenticated = !!apiKey && apiKey === process.env.SEEKERSIM_API_KEY
    const hasPayment = hasValidPayment(request)

    if (!isAuthenticated && !hasPayment) {
      const resource = request.nextUrl.pathname
      const description = `eSIM provisioning: ${country || "any"}, ${dataAmount || "plan"}, ${duration || "duration"}`
      const amount = getPriceForEndpoint(resource)

      return create402Response(resource, description, amount)
    }

    // Process provisioning (same logic as GET)
    const mockResponse = {
      success: true,
      qrCode: `LPA:1$${process.env.NEXT_PUBLIC_ESIM_SERVER || "smdp.example.com"}$${Math.random().toString(36).substring(7)}`,
      activationCode: Math.random().toString(36).substring(2, 9).toUpperCase(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      country,
      dataAmount,
      duration,
      wallet,
      paymentMethod: hasPayment ? "x402" : "api_key"
    }

    return NextResponse.json(mockResponse)

  } catch (error) {
    console.error("[API] Provisioning error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

