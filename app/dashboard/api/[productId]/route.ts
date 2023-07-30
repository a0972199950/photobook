import { NextRequest, NextResponse } from 'next/server'

export const GET = async (_req: NextRequest, { params }: { params: { productId: string } }) => {
  return NextResponse.json({ result: `GET request, productId: ${params.productId}` })
}

export const POST = async (_req: NextRequest) => {
  return NextResponse.json({ result: 'POST request' })
}
