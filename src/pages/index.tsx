import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl font-bold mb-4">Home</h1>

      <Link href="/page-2" className="underline text-blue-600">Page 2</Link>
    </main>
  );
}
