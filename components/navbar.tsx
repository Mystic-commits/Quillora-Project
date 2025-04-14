import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 md:p-6">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
          <Search className="w-4 h-4 text-white" />
        </div>
        <Link href="/" className="text-xl font-bold text-primary">
          Quillora
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-primary hover:text-primary/80">
          Home
        </Link>
        <Link href="/about" className="text-primary hover:text-primary/80">
          About
        </Link>
        <Link href="/features" className="text-primary hover:text-primary/80">
          Features
        </Link>
        <Link href="/quill-trials" className="text-primary hover:text-primary/80">
          Quill Trials
        </Link>
        <Button className="bg-primary text-white hover:bg-primary/90">Contact</Button>
      </div>
      <div className="md:hidden">
        <Button variant="ghost" className="p-2">
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
            className="text-primary"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
      </div>
    </nav>
  )
}
