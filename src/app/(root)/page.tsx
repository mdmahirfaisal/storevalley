import Link from "next/link";

export default function Home() {
  console.log("Home conponent page");
  return (
    <div className="p-5">
      <div className="w-[100%] d-flex justify-end"></div>
      <h1 className="text-3xl">Welcome to the Store Valley. -------</h1>
      Go to the <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
