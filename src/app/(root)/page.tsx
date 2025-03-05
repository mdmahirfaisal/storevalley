import Link from "next/link";

export default async function Home() {
  const data = await fetch(`${process.env.API_URL}/products`);
  const products = await data.json();
  console.log("Store Valley home page loaded: ", products);
  return (
    <div className="p-5">
      <div className="w-[100%] d-flex justify-end"></div>
      <h1 className="text-3xl">Welcome to the Store Valley.</h1>
      <p>
        Go to the <Link href={"/dashboard"}>Dashboard</Link>
      </p>
    </div>
  );
}
