import Link from "next/link";

export default function Offline() {
  return (
    <main>
      <h1 className="text-xl font-bold mb-4">Offline</h1>

      <p>You are offline</p>

      <button onClick={() => window.location.reload()} className="underline text-blue-600">retry</button>
    </main>
  );
}
