import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Clarity and the Unsearchable | AI and the Dream",
  description: "AI literacy, generational wisdom, and the architecture of purpose.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
