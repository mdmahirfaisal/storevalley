// app/api/v1/products/[id]/route.ts
import { NextResponse } from "next/server";
import jsonProducts from "@/data/products.json";
// import { ProductsTypes } from "@/types/products";

// const products: ProductsTypes[] = jsonProducts as ProductsTypes[];
export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop();
  if (id && id !== "products") {
    const product = jsonProducts.find((p) => p.id === id);
    return product
      ? NextResponse.json(product)
      : NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(jsonProducts);
}
