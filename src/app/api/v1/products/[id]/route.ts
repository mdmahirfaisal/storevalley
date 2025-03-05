// app/api/v1/products/[id]/route.ts
import { NextResponse } from "next/server";
import { productsData } from "@/data/products";
export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop();
  if (id && id !== "products") {
    const product = productsData.find((p) => p.id === id);
    return product
      ? NextResponse.json(product)
      : NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(productsData);
}
