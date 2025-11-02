/**
 * x402 Payment Protocol Integration for SeekerSIM
 * Enables AI agents and automated clients to pay for API requests via HTTP 402
 * 
 * Reference: https://x402.org
 * GitHub: https://github.com/coinbase/x402
 */

const X402_VERSION = 1

/**
 * Payment Requirements as per x402 spec
 */
export interface PaymentRequirements {
  scheme: string
  network: string
  maxAmountRequired: string
  resource: string
  description: string
  mimeType: string
  outputSchema?: object | null
  payTo: string
  maxTimeoutSeconds: number
  asset: string
  extra: object | null
}

/**
 * Payment Required Response (HTTP 402)
 */
export interface PaymentRequiredResponse {
  x402Version: number
  accepts: PaymentRequirements[]
  error?: string
}

/**
 * Get payment requirements for a SeekerSIM API endpoint
 */
export function getPaymentRequirements(
  resource: string,
  description: string,
  amount: string // Amount in atomic units (e.g., "1000000" for 1 USDC = 1,000,000 micro-USDC)
): PaymentRequirements[] {
  const paymentAddress = process.env.X402_PAYMENT_ADDRESS || process.env.NEXT_PUBLIC_PAYMENT_ADDRESS || ""

  return [
    {
      scheme: "exact",
      network: "solana",
      maxAmountRequired: amount,
      resource,
      description,
      mimeType: "application/json",
      payTo: paymentAddress,
      maxTimeoutSeconds: 30,
      asset: process.env.X402_SOLANA_USDC_ADDRESS || "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", // USDC on Solana
      extra: {
        name: "USD Coin",
        version: "1.0.0"
      }
    },
    // Add Base/Ethereum support as alternatives
    {
      scheme: "exact",
      network: "base",
      maxAmountRequired: amount,
      resource,
      description,
      mimeType: "application/json",
      payTo: paymentAddress,
      maxTimeoutSeconds: 30,
      asset: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC on Base
      extra: {
        name: "USD Coin",
        version: "1.0.0"
      }
    }
  ]
}

/**
 * Create a 402 Payment Required response
 */
export function create402Response(
  resource: string,
  description: string,
  amount: string,
  error?: string
): Response {
  const paymentRequirements = getPaymentRequirements(resource, description, amount)

  const response: PaymentRequiredResponse = {
    x402Version: X402_VERSION,
    accepts: paymentRequirements,
    error: error || undefined
  }

  return new Response(JSON.stringify(response), {
    status: 402,
    statusText: "Payment Required",
    headers: {
      "Content-Type": "application/json",
      "X-402-Version": X402_VERSION.toString(),
    }
  })
}

/**
 * Verify if a payment header is present and valid
 * In production, this should verify with a facilitator server
 */
export function hasValidPayment(request: Request): boolean {
  const paymentHeader = request.headers.get("X-PAYMENT")
  return !!paymentHeader && paymentHeader.length > 0
}

/**
 * Extract payment payload from request header
 */
export function getPaymentPayload(request: Request): string | null {
  return request.headers.get("X-PAYMENT")
}

/**
 * Pricing configuration for SeekerSIM API endpoints
 */
export const API_PRICING = {
  "/api/v1/esim/provision": "1000000", // 1 USDC per eSIM provisioning
  "/api/v1/balance": "100000", // 0.1 USDC for balance check
  "/api/v1/usage": "100000", // 0.1 USDC for usage tracking
  "/api/v1/plans": "0", // Free - plan listings
} as const

/**
 * Get price for a specific API endpoint
 */
export function getPriceForEndpoint(path: string): string {
  // Try exact match first
  if (path in API_PRICING) {
    return API_PRICING[path as keyof typeof API_PRICING]
  }

  // Try pattern matching for dynamic routes
  if (path.startsWith("/api/v1/esim/provision")) {
    return API_PRICING["/api/v1/esim/provision"]
  }
  if (path.startsWith("/api/v1/balance")) {
    return API_PRICING["/api/v1/balance"]
  }
  if (path.startsWith("/api/v1/usage")) {
    return API_PRICING["/api/v1/usage"]
  }

  // Default to free for unknown endpoints (or adjust as needed)
  return "0"
}

