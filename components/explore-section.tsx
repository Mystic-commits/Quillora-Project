import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ExploreSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-secondary relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1/6 h-full">
        <div className="w-32 h-32 rounded-full bg-accent absolute -left-16 top-1/4"></div>
      </div>
      <div className="absolute right-0 top-0 w-1/6 h-full">
        <div className="w-40 h-40 rounded-full bg-accent absolute -right-20 top-1/3"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Explore Quillora</h2>
        <p className="text-lg text-primary/70 max-w-3xl mb-12">
          Dive into the captivating world of Quillora, where your imagination takes center stage. Craft intricate
          narratives, develop compelling characters, and immerse yourself in a realm of creative possibilities
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 aspect-square rounded-lg overflow-hidden">
                <img
                  src={`/placeholder.svg?height=300&width=300&text=Character+${i}`}
                  alt={`Character ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Quill Holder</h3>
              <p className="text-primary/70 mb-1">Writing Desk</p>
              <p className="text-primary/70 mb-4">Character Creation</p>
              <Link href="/login">
                <Button className="w-full bg-primary text-white hover:bg-primary/90">Start Writing</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
