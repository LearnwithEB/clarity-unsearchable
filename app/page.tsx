import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bp-canvas)]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Clarity and the Unsearchable</h1>
        <Link 
          href="/clarity-unsearchable"
          className="text-blue-600 hover:underline"
        >
          View Presentation →
        </Link>
      </div>
    </div>
  )
}
