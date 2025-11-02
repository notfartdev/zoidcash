# x402 Payment Protocol Integration

SeekerSIM now fully supports the [x402 payment protocol](https://x402.org) for AI agents and automated clients to pay for API requests in real-time.

## Implementation Status

✅ **Fully Integrated and Functional**

### What's Implemented

1. **Core x402 Library** (`lib/x402.ts`)
   - Payment requirements generation (Solana, Base networks)
   - HTTP 402 response creation
   - Payment header validation
   - Pricing configuration for all endpoints

2. **Facilitator Integration** (`lib/x402-facilitator.ts`)
   - Payment verification via facilitator server
   - Payment settlement handling
   - Supported schemes discovery

3. **API Endpoints with x402 Support**
   - ✅ `/api/v1/esim/provision` - eSIM provisioning (1.0 USDC)
   - ✅ `/api/v1/balance/[wallet]` - Balance checks (0.1 USDC)
   - ✅ `/api/v1/plans` - Plan listings (Free)
   - ✅ `/api/v1/info` - API information and x402 capabilities

4. **Metadata & Discovery**
   - Meta tags in layout declaring x402 support
   - Payment protocol link header
   - Supported networks: Solana, Base, Ethereum

## How It Works

### For AI Agents

1. Agent makes request without payment header
2. Server responds with HTTP 402 + payment requirements
3. Agent creates payment payload using x402 SDK
4. Agent retries request with `X-PAYMENT` header
5. Server verifies payment and returns resource

### For Traditional Clients

- Use `X-API-Key` header for authenticated requests
- x402 is optional but available for per-request payments

## Testing

### Test HTTP 402 Response

```bash
curl https://seekersim.xyz/api/v1/esim/provision?country=FR&dataAmount=1GB
```

**Expected:** HTTP 402 with payment requirements JSON

### Test API Info

```bash
curl https://seekersim.xyz/api/v1/info
```

**Expected:** JSON with x402 capabilities and supported schemes

## Configuration

Set these environment variables:

```env
X402_PAYMENT_ADDRESS=your-solana-wallet-address
X402_SOLANA_USDC_ADDRESS=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v
X402_FACILITATOR_URL=https://facilitator.example.com  # Optional
SEEKERSIM_API_KEY=your-api-key-for-traditional-auth
```

## Pricing

- **eSIM Provisioning:** 1.0 USDC per request
- **Balance Check:** 0.1 USDC per request  
- **Usage Tracking:** 0.1 USDC per request
- **Plan Listings:** Free

## Next Steps for Production

1. Set up facilitator server or use Coinbase's facilitator
2. Configure actual Solana wallet address in environment
3. Enable on-chain payment verification
4. Add payment webhooks for settlement confirmations
5. Implement rate limiting based on payment verification

## Resources

- [x402 Protocol Spec](https://x402.org)
- [x402 GitHub Repository](https://github.com/coinbase/x402)
- [Client Integration Example](./examples/x402-client-example.md)

