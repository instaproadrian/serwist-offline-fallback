import Link from "next/link";

export default function Page2() {
  return (
    <main>
      <h1 className="text-xl font-bold mb-4">Page 2</h1>

      <Link href="/page-3" className="underline text-blue-600">Page 3</Link>
    </main>
  );
}
