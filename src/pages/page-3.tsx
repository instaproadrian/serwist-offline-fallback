import Link from "next/link";

export default function Page3() {
  return (
    <main>
      <h1 className="text-xl font-bold mb-4">Page 3</h1>

      <Link href="/" className="underline text-blue-600">Home</Link>
    </main>
  );
}
