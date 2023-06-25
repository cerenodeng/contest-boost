import Link from "next/link";

export default function RootPage() {
  return (
    <main className="flex flex-col gap-y-10 min-h-screen min-w-full items-center justify-center p-24">
      <h1>Contest Boost</h1>
      <Link href="/admin">Login</Link>
    </main>
  )
}
