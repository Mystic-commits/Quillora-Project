import { Cloud, Shell, Camera } from "lucide-react"

export function Footer() {
  return (
    <footer className="footer-gradient text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="text-center md:text-left">
          <Camera className="w-8 h-8 mx-auto md:mx-0 mb-4" />
          <p className="mb-2">Embark on a thrilling adventure as you weave your own literary masterpiece</p>
        </div>

        <div className="text-center">
          <Cloud className="w-8 h-8 mx-auto mb-4" />
          <p className="mb-2">Discover the power of Quillora's XP system</p>
        </div>

        <div className="text-center md:text-right">
          <Shell className="w-8 h-8 mx-auto md:ml-auto mb-4" />
          <p className="mb-2">Quillora's Quill Trials offer a dynamic and engaging way to hone your writing skills</p>
        </div>
      </div>
    </footer>
  )
}
