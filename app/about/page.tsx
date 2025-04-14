import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="py-16 px-4 md:px-8 bg-sky-light">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Quillora</h1>
          <p className="text-lg text-primary/70 max-w-3xl mb-8">
            Learn about our mission to create the most immersive writing platform
          </p>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-primary/70 mb-6">
              Quillora was born from a passion for storytelling and a desire to create a platform where writers could
              fully immerse themselves in their creative process. Our team of writers, designers, and developers came
              together to build a unique experience that combines the power of technology with the magic of
              storytelling.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-primary/70">
              We believe that everyone has a story to tell. Our mission is to provide writers with the tools,
              inspiration, and community they need to bring their stories to life. Through our fantasy-themed interface,
              gamified writing challenges, and supportive ecosystem, we aim to make the writing process more engaging,
              enjoyable, and rewarding.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
