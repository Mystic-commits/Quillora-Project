import { Navbar } from "@/components/navbar"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function FeaturesPage() {
  return (
    <main>
      <Navbar />
      <div className="py-16 px-4 md:px-8 bg-sky-light">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Features</h1>
          <p className="text-lg text-primary/70 max-w-3xl">
            Discover all the powerful features that Quillora offers to enhance your writing experience
          </p>
        </div>
      </div>
      <Features />
      <Footer />
    </main>
  )
}
