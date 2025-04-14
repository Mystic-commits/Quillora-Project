"use client"

import { useState } from "react"
import Image from "next/image"

interface AnimatedCharacterProps {
  src: string
  alt: string
  className?: string
}

export function AnimatedCharacter({ src, alt, className = "" }: AnimatedCharacterProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative transition-all duration-500 ${className} ${isHovered ? "transform scale-105" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transition-all duration-500 ${isHovered ? "animate-bounce-gentle" : "animate-float"}`}>
        <Image src={src || "/placeholder.svg"} alt={alt} width={300} height={300} className="w-full h-auto" />
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-accent rounded-full animate-pulse-gentle opacity-20"></div>
        </div>
      )}
    </div>
  )
}
