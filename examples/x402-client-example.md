# x402 Client Integration Example

This document shows how AI agents and automated clients can interact with SeekerSIM's x402-enabled API endpoints.

## Overview

SeekerSIM API endpoints support the [x402 payment protocol](https://x402.org), which allows clients to pay for requests using HTTP headers without registration or OAuth.

## Basic Flow

1. Client makes request **without** payment header
2. Server responds with **HTTP 402 Payment Required** and payment requirements
3. Client creates payment payload and retries with `X-PAYMENT` header
4. Server verifies payment and returns the requested resource

## Example: Provisioning eSIM

### Step 1: Initial Request (No Payment)

```bash
curl -X GET "https://seekersim.xyz/api/v1/esim/provision?country=FR&dataAmount=1GB"
```

**Response: HTTP 402 Payment Required**

```json
{
  "x402Version": 1,
  "accepts": [
    {
      "scheme": "exact",
      "network": "solana",
      "maxAmountRequired": "1000000",
      "resource": "/api/v1/esim/provision?country=FR&dataAmount=1GB",
      "description": "eSIM provisioning for FR, 1GB",
      "payTo": "YOUR_SOLANA_WALLET_ADDRESS",
      "asset": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "mimeType": "application/json",
      "maxTimeoutSeconds": 30,
      "extra": {
        "name": "USD Coin",
        "version": "1.0.0"
      }
    }
  ]
}
```

### Step 2: Create Payment Payload

Using the x402 TypeScript SDK:

```typescript
import { PaymentPayload, ExactPaymentPayload } from "@coinbase/x402"

// Create payment payload for Solana exact scheme
const paymentPayload: PaymentPayload = {
  x402Version: 1,
  scheme: "exact",
  network: "solana",
  payload: {
    // Solana-specific payment details
    // This would be generated using @solana/web3.js or similar
  } as ExactPaymentPayload
}

// Encode as base64
const paymentHeader = Buffer.from(JSON.stringify(paymentPayload)).toString("base64")
```

### Step 3: Retry Request with Payment

```bash
curl -X GET "https://seekersim.xyz/api/v1/esim/provision?country=FR&dataAmount=1GB" \
  -H "X-PAYMENT: eyJ4NDAyVmVyc2lvbiI6MSwic2NoZW1lIjoiZXhhY3QiLCJuZXR3b3JrIjoic29sYW5hIn0="
```

**Response: HTTP 200 OK**

```json
{
  "success": true,
  "qrCode": "LPA:1$smdp.seekersim.com$ABC123",
  "activationCode": "XYZ789",
  "expiresAt": "2025-01-15",
  "country": "FR",
  "dataAmount": "1GB",
  "paymentMethod": "x402",
  "timestamp": "2025-01-08T10:30:00.000Z"
}
```

## Using x402 TypeScript SDK

```typescript
import { createClient } from "@coinbase/x402/client"

const client = createClient({
  facilitatorUrl: "https://facilitator.example.com", // Optional
})

// Make request
const response = await client.request({
  url: "https://seekersim.xyz/api/v1/esim/provision",
  method: "GET",
  params: {
    country: "FR",
    dataAmount: "1GB"
  },
  // Client automatically handles payment if needed
})
```

## Pricing

- **eSIM Provisioning:** 1.0 USDC per request
- **Balance Check:** 0.1 USDC per request
- **Usage Tracking:** 0.1 USDC per request
- **Plan Listings:** Free (no payment required)

## Supported Networks

- Solana (USDC)
- Base (USDC)
- Ethereum (coming soon)

## Resources

- [x402 Protocol Spec](https://x402.org)
- [x402 GitHub](https://github.com/coinbase/x402)
- [SeekerSIM API Docs](/docs)

