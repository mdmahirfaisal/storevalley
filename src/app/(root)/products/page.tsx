export default async function Products() {
  const products = await fetch(`${process.env.API_URL}/products`).then((res) =>
    res.json()
  );
  console.log(products);
  return (
    <div className="p-5">
      <h1 className="text-3xl">this is products page</h1>
    </div>
  );
}
