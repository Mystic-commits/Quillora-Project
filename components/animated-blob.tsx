"use client"

import { useEffect, useState } from "react"

interface AnimatedBlobProps {
  color?: string
  size?: string
  className?: string
}

export function AnimatedBlob({ color = "bg-sky", size = "w-32 h-32", className = "" }: AnimatedBlobProps) {
  const [position, setPosition] = useState({ top: "10%", left: "10%" })

  useEffect(() => {
    // Random position
    const top = `${Math.floor(Math.random() * 80)}%`
    const left = `${Math.floor(Math.random() * 80)}%`
    setPosition({ top, left })
  }, [])

  return (
    <div
      className={`absolute blob-animation ${color} ${size} ${className}`}
      style={{
        top: position.top,
        left: position.left,
        zIndex: 0,
        opacity: 0.6,
      }}
    ></div>
  )
}
