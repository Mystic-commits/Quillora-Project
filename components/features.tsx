import { Code, Users, HelpCircle, Mail } from "lucide-react"

export function Features() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-accent mb-2">About</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Features</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div className="w-16 h-16 rounded-full bg-sky flex items-center justify-center flex-shrink-0">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Quill Trials</h3>
              <p className="text-primary/70">
                Hone your writing skills and unlock new levels of achievement through Quillora's Quill Trials
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Partners</h3>
              <p className="text-primary/70">
                Quillora is proud to partner with leading industry giants, providing you with a robust and supportive
                ecosystem to enhance your writing
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-16 h-16 rounded-full bg-sky flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">FAQ</h3>
              <p className="text-primary/70">
                Have questions about Quillora? Explore our comprehensive FAQ section to find answers
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Contact</h3>
              <p className="text-primary/70">
                Get in touch with our dedicated Quillora team for any inquiries, feedback, or support needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
