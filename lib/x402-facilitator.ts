/**
 * x402 Facilitator Server Integration
 * 
 * In production, use a facilitator server to verify and settle payments.
 * This allows the resource server to accept payments without directly
 * managing blockchain nodes or wallets.
 * 
 * Reference: https://github.com/coinbase/x402#facilitator-types--interface
 */

interface FacilitatorVerifyRequest {
  x402Version: number
  paymentHeader: string
  paymentRequirements: any
}

interface FacilitatorVerifyResponse {
  isValid: boolean
  invalidReason: string | null
}

interface FacilitatorSettleRequest {
  x402Version: number
  paymentHeader: string
  paymentRequirements: any
}

interface FacilitatorSettleResponse {
  success: boolean
  error: string | null
  txHash: string | null
  networkId: string | null
}

/**
 * Verify a payment with the facilitator server
 */
export async function verifyPayment(
  paymentHeader: string,
  paymentRequirements: any,
  facilitatorUrl?: string
): Promise<boolean> {
  const facilitator = facilitatorUrl || process.env.X402_FACILITATOR_URL

  if (!facilitator) {
    // In development, accept payment headers as valid
    // In production, always use a facilitator
    console.warn("[x402] No facilitator configured, accepting payment header")
    return paymentHeader.length > 0
  }

  try {
    const response = await fetch(`${facilitator}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        x402Version: 1,
        paymentHeader,
        paymentRequirements
      } as FacilitatorVerifyRequest)
    })

    if (!response.ok) {
      console.error("[x402] Facilitator verification failed:", response.statusText)
      return false
    }

    const result: FacilitatorVerifyResponse = await response.json()
    return result.isValid

  } catch (error) {
    console.error("[x402] Facilitator error:", error)
    return false
  }
}

/**
 * Settle a payment through the facilitator server
 */
export async function settlePayment(
  paymentHeader: string,
  paymentRequirements: any,
  facilitatorUrl?: string
): Promise<FacilitatorSettleResponse> {
  const facilitator = facilitatorUrl || process.env.X402_FACILITATOR_URL

  if (!facilitator) {
    // In development, return mock success
    return {
      success: true,
      error: null,
      txHash: null,
      networkId: paymentRequirements.network || "solana"
    }
  }

  try {
    const response = await fetch(`${facilitator}/settle`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        x402Version: 1,
        paymentHeader,
        paymentRequirements
      } as FacilitatorSettleRequest)
    })

    if (!response.ok) {
      return {
        success: false,
        error: `Facilitator error: ${response.statusText}`,
        txHash: null,
        networkId: null
      }
    }

    return await response.json()

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      txHash: null,
      networkId: null
    }
  }
}

/**
 * Get supported payment schemes and networks from facilitator
 */
export async function getSupportedSchemes(
  facilitatorUrl?: string
): Promise<Array<{ scheme: string; network: string }>> {
  const facilitator = facilitatorUrl || process.env.X402_FACILITATOR_URL

  if (!facilitator) {
    return [
      { scheme: "exact", network: "solana" },
      { scheme: "exact", network: "base" }
    ]
  }

  try {
    const response = await fetch(`${facilitator}/supported`)
    const data = await response.json()
    return data.kinds || []

  } catch (error) {
    console.error("[x402] Failed to get supported schemes:", error)
    return []
  }
}

