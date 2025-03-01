// app/api/v1/products/route.ts
import { NextResponse } from "next/server";
import jsonProducts from "@/data/products.json";
import { ProductsTypes } from "@/types/products";

const products: ProductsTypes[] = jsonProducts as ProductsTypes[];

export async function GET() {
  return NextResponse.json(products);
}
