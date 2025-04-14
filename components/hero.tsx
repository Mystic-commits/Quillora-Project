import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="hero-gradient min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/3 h-auto">
        <img src="/placeholder.svg?height=400&width=400" alt="Decorative element" className="w-full h-auto" />
      </div>
      <div className="absolute right-0 bottom-0 w-1/3 h-auto">
        <img src="/placeholder.svg?height=400&width=400" alt="Decorative element" className="w-full h-auto" />
      </div>
      <div className="max-w-3xl mx-auto z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">Write Your Legend</h1>
        <p className="text-lg md:text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
          Quillora is a fantasy-themed writing platform that allows you to immerse yourself in a world of storytelling
        </p>
        <Link href="/login">
          <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6">Start Writing</Button>
        </Link>
      </div>
    </section>
  )
}
