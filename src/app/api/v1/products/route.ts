import { NextResponse } from 'next/server';
import jsonProducts from '@/data/products.json';


export async function GET() {
  return NextResponse.json(jsonProducts);
}

export async function GET_ID(request: Request, { params }: { params: { id: string } }) {
  const product = jsonProducts.find((p) => p.id === params.id);
  return product ? NextResponse.json(product) : NextResponse.json({ error: 'Product not found' }, { status: 404 });
}