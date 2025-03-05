// app/api/v1/products/route.ts
import { NextResponse } from "next/server";
import { productsData } from "@/data/products";

export async function GET() {
  return NextResponse.json(productsData);
}
