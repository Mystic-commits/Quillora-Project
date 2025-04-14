import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { UserProvider } from "@/components/user-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quillora - Online Writing Platform",
  description: "Immerse yourself in a world of storytelling",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}


import './globals.css'