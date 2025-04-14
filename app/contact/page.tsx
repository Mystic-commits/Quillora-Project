import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="py-16 px-4 md:px-8 bg-sky-light">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-lg text-primary/70 max-w-3xl mb-8">
            Get in touch with our dedicated Quillora team for any inquiries, feedback, or support needs
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Send us a message</h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                </div>

                <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <p className="text-primary/70">support@quillora.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-primary">Office Hours</h3>
                  <p className="text-primary/70">Monday - Friday: 9am - 5pm</p>
                </div>

                <div>
                  <h3 className="font-semibold text-primary">Social Media</h3>
                  <div className="flex gap-4 mt-2">
                    {["Twitter", "Instagram", "Facebook"].map((platform) => (
                      <Button key={platform} variant="outline" className="text-primary">
                        {platform}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
