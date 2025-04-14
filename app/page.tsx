import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedBlob } from "@/components/animated-blob"

export default function Home() {
  return (
    <main className="bg-secondary overflow-hidden">
      <nav className="flex items-center justify-between p-4 md:p-6 bg-sky-light z-10 relative">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary animate-pulse-gentle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <span className="text-xl font-bold text-primary">Quillora</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-primary hover:text-primary/80 transition-colors">
            About
          </Link>
          <Link href="/features" className="text-primary hover:text-primary/80 transition-colors">
            Features
          </Link>
          <Link href="/quill-trials" className="text-primary hover:text-primary/80 transition-colors">
            Quill Trials
          </Link>
          <Button className="bg-primary text-white hover:bg-primary/90 ripple-button">Contact</Button>
        </div>
      </nav>

      <section className="bg-secondary relative overflow-hidden px-4 py-16 md:py-24">
        <AnimatedBlob color="bg-sky" size="w-40 h-40" className="-right-10 top-10" />
        <AnimatedBlob color="bg-accent/30" size="w-32 h-32" className="left-1/4 bottom-1/4" />
        <AnimatedBlob color="bg-sky/20" size="w-24 h-24" className="right-1/3 top-1/3" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-float">
            <img
              src="./Screenshot Apr 14 2025 from Remove.bg (1) (1).png"
              alt="Blue character on orange platform"
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2 z-10 animate-slide-right">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Craft Your Legend</h1>
            <p className="text-primary/70 mb-8">
              Embrace the magic of Quillora, a platform where your imagination knows no bounds. Craft intricate worlds,
              develop captivating characters, and weave narratives that will captivate your readers
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/login">
                <Button className="bg-primary text-white hover:bg-primary/90 button-hover transform transition-transform hover:scale-105">
                  Start Now
                </Button>
              </Link>
              <Button variant="ghost" className="text-primary hover:bg-primary/10 transition-colors">
                Join the Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 relative overflow-hidden">
        <AnimatedBlob color="bg-accent/20" size="w-48 h-48" className="left-0 top-1/4" />
        <AnimatedBlob color="bg-sky/30" size="w-32 h-32" className="right-10 bottom-10" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="animate-float">
            <img
              src="./Screenshot 2025-04-14 at 6.05.29 PM.png"
              alt="Blue jellyfish character"
              className="w-full h-auto rounded-lg transform transition-transform hover:scale-105 duration-300"
            />
          </div>
          <div className="animate-slide-left">
            <p className="text-accent mb-2 font-medium">Featured Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Explore the Wonders of Quillora</h2>
            <p className="text-primary/70 mb-6">
              Quillora's jellyfish-inspired interface and seamless integration with your local storage create a truly
              immersive writing experience. Lose yourself in a world of creative possibilities as you craft your
              literary masterpiece, unlocking new levels of achievement and earning prestigious badges along the way
            </p>
            <p className="text-accent mb-2 font-medium">Quill Trials</p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="text-primary border-primary hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
              >
                Join the Challenge
              </Button>
              <Button variant="ghost" className="text-accent hover:bg-accent/10 transition-colors">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-4 py-16 relative overflow-hidden">
        <AnimatedBlob color="bg-sky/30" size="w-40 h-40" className="left-10 top-20" />
        <AnimatedBlob color="bg-accent/20" size="w-32 h-32" className="right-1/4 bottom-10" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="border-l-4 border-accent pl-4 mb-6 animate-slide-right">
            <p className="text-accent font-medium">Featured Content</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Discover the Secrets of Quillora</h2>
              <p className="text-primary/70 mb-6">
                Quillora is a captivating writing platform that combines the power of technology with the magic of
                storytelling. Immerse yourself in a world of creative possibilities, where your words come to life and
                your imagination knows no bounds. Unlock a thrilling XP system, earn prestigious badges, and delve into
                a community of fellow writers who share your passion for crafting unforgettable tales
              </p>
              <p className="text-accent mb-2 font-medium">Quill Trials</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="text-primary border-primary rounded-full hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                  Join the Challenge
                </Button>
                <Button variant="ghost" className="text-accent hover:bg-accent/10 transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="animate-float">
              <img
                src="./Screenshot 2025-04-14 at 6.07.14 PM.png"
                alt="Blue character"
                className="w-full h-auto rounded-lg border-4 border-blue-500 transform transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 relative overflow-hidden">
  <AnimatedBlob color="bg-accent/20" size="w-40 h-40" className="right-0 top-1/3" />
  <AnimatedBlob color="bg-sky/30" size="w-32 h-32" className="left-1/4 bottom-1/4" />

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="animate-slide-up mb-12">
      <p className="text-accent mb-2 font-medium">About</p>
      <h2 className="text-4xl md:text-5xl font-bold text-primary">Features</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Left Column – Features */}
      <div className="space-y-12">
        {/* Feature Item */}
        <div className="flex gap-6 group animate-slide-right">
          <div className="w-16 h-16 rounded-full bg-sky flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
            {/* Icon */}
            <svg>...Quill Trials SVG...</svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
              Quill Trials
            </h3>
            <p className="text-primary/70">
              Hone your writing skills and unlock new levels of achievement through Quillora's Quill Trials
            </p>
          </div>
        </div>

        {/* Repeat for other features: Partners, FAQ, Contact */}
        {/* Feature Item - Partners */}
        <div className="flex gap-6 group animate-slide-left">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
            {/* Icon */}
            <svg>...Partners SVG...</svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
              Partners
            </h3>
            <p className="text-primary/70">
              Quillora is proud to partner with leading industry giants, providing you with a robust and supportive ecosystem.
            </p>
          </div>
        </div>

        {/* Feature Item - FAQ */}
        <div className="flex gap-6 group animate-slide-right">
          <div className="w-16 h-16 rounded-full bg-sky flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
            {/* Icon */}
            <svg>...FAQ SVG...</svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
              FAQ
            </h3>
            <p className="text-primary/70">
              Have questions about Quillora? Explore our comprehensive FAQ section to find answers.
            </p>
          </div>
        </div>

        {/* Feature Item - Contact */}
        <div className="flex gap-6 group animate-slide-left">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
            {/* Icon */}
            <svg>...Contact SVG...</svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
              Contact
            </h3>
            <p className="text-primary/70">
              Get in touch with our dedicated Quillora team for any inquiries, feedback, or support needs.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column – Image */}
      <div className="animate-float flex justify-center">
        <img
          src="./Screenshot 2025-04-14 at 6.09.48 PM.png"
          alt="Mushroom tower illustration"
          className="max-w-md w-full h-auto transform transition-transform hover:scale-105 duration-300"
        />
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-primary text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="bubble w-12 h-12 top-1/4 left-1/4"></div>
          <div className="bubble w-8 h-8 top-1/3 right-1/3"></div>
          <div className="bubble w-16 h-16 bottom-1/4 right-1/4"></div>
          <div className="bubble w-10 h-10 bottom-1/3 left-1/3"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">
          <div className="text-center md:text-left animate-slide-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 mx-auto md:mx-0 mb-4 animate-pulse-gentle"
            >
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <path d="M8.5 8.5v.01" />
              <path d="M16 15.5v.01" />
              <path d="M12 12v.01" />
              <path d="M11 17v.01" />
              <path d="M7 14v.01" />
            </svg>
            <p className="mb-2">Embark on a thrilling adventure as you weave your own literary masterpiece</p>
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 mx-auto mb-4 animate-pulse-gentle"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
            <p className="mb-2">Discover the power of Quillora's XP system</p>
          </div>

          <div className="text-center md:text-right animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 mx-auto md:ml-auto mb-4 animate-pulse-gentle"
            >
              <path d="M5 8a4 4 0 1 1 8 0c0 1.098-.564 2.025-1.159 2.815L8 16h6" />
              <path d="M16 8h.01" />
            </svg>
            <p className="mb-2">Quillora's Quill Trials offer a dynamic and engaging way to hone your writing skills</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
