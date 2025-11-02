import { NextRequest, NextResponse } from "next/server"

/**
 * Plans Listing API - Free endpoint (no payment required)
 * 
 * @example
 * GET /api/v1/plans?country=FR
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const country = searchParams.get("country") || "FR"

  // This endpoint is free, no payment required
  const mockPlans = [
    {
      id: `${country.toLowerCase()}-1gb-7d`,
      name: `${country} 1GB`,
      data: "1GB",
      duration: "7 days",
      price: "5.00 USDC",
      country
    },
    {
      id: `${country.toLowerCase()}-3gb-14d`,
      name: `${country} 3GB`,
      data: "3GB",
      duration: "14 days",
      price: "12.00 USDC",
      country
    },
    {
      id: `${country.toLowerCase()}-5gb-30d`,
      name: `${country} 5GB`,
      data: "5GB",
      duration: "30 days",
      price: "20.00 USDC",
      country
    }
  ]

  return NextResponse.json({ plans: mockPlans })
}

