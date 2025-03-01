import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import Image from "next/image";
export const revalidate = 10; // ISR: Revalidate every 1 hour (3600 seconds)

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export default async function Products() {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) {
    throw new Error("API_URL is not defined in environment variables");
  }

  let products: Product[] = [];
  try {
    const response = await fetch(`${apiUrl}/products`, {
      next: { revalidate: 3600 }, // Ensure fetch respects ISR
    });
    if (!response.ok) {
      throw new Error(
        `Failed to fetch products: ${response.status} ${response.statusText}`
      );
    }
    products = await response.json();
    console.log();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
  if (products.length === 0) {
    return (
      <div className="min-h-screen p-6">
        <h1 className="mb-8 text-4xl font-bold">Products</h1>
        <p className="text-center">No products available.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen p-6">
      <h1 className="mb-8 text-4xl font-bold">Products</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg"
          >
            <CardHeader className="p-0">
              {/* <CardHeader className="p-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={192} // Approx h-48
                  className="h-48 w-full object-cover"
                />
              </CardHeader> */}
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle className="text-lg font-semibold text-gray-900">
                {product.name}
              </CardTitle>
              <p className="mt-1 text-sm">{product.category}</p>
              <p className="mt-2">{product.description}</p>
            </CardContent>
            <CardFooter className="p-4">
              <p className="text-xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
