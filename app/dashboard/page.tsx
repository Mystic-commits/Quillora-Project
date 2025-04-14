"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useUser } from "@/components/user-provider"

export default function DashboardPage() {
  const router = useRouter()
  const { user, isLoggedIn, logout } = useUser()
  const [content, setContent] = useState("")
  const [title, setTitle] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState("")

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [isLoggedIn, router])

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      setSaveMessage("Saved successfully!")
      setTimeout(() => setSaveMessage(""), 3000)
    }, 1000)
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (!isLoggedIn) {
    return null 
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-white p-4 flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="bubble w-8 h-8 top-1/4 left-1/4"></div>
          <div className="bubble w-6 h-6 top-1/3 right-1/3"></div>
        </div>

        <div className="flex items-center gap-2 relative z-10">
          <Link href="/" className="text-xl font-bold group">
            <span className="group-hover:text-accent transition-colors">Quillora</span>
          </Link>
          <span className="text-sm text-white/70">|</span>
          <span className="font-medium">My Story</span>
        </div>
        <div className="flex items-center gap-4 relative z-10">
          {saveMessage && (
            <div className="absolute -bottom-10 left-0 right-0 text-center text-green-400 text-sm animate-slide-up">
              {saveMessage}
            </div>
          )}
          <Button
            variant="ghost"
            className="text-white hover:bg-primary/80 transition-all duration-300"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
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
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
              </svg>
            )}
            Save
          </Button>
          <Button className="bg-accent text-white hover:bg-accent/90 transition-all duration-300 transform hover:scale-105">
            Publish
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-16 md:w-64 bg-white border-r flex flex-col">
          <div className="p-4 hidden md:block">
            <h2 className="font-bold text-primary">Writing Dashboard</h2>
          </div>

          <nav className="flex-1 p-2">
            <ul className="space-y-2">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                  ),
                  label: "Editor",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                  ),
                  label: "Chapters",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                      <path d="M12 7v5l2.5 2.5" />
                    </svg>
                  ),
                  label: "History",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ),
                  label: "Settings",
                },
              ].map((item, i) => (
                <li key={i}>
                  <Button
                    variant={i === 0 ? "default" : "ghost"}
                    className={`w-full justify-start transition-all duration-300 ${
                      i === 0 ? "bg-primary text-white" : "text-primary hover:bg-primary/10"
                    }`}
                  >
                    {item.icon}
                    <span className="ml-2 hidden md:inline">{item.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                {user?.name?.charAt(0) || "U"}
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
                  {user?.name || "Writer"}
                </p>
                <p className="text-xs text-primary/70">Writer Level {user?.level || 1}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto text-primary/70 hover:text-primary"
                onClick={handleLogout}
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
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </Button>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-auto bg-secondary/30 p-6">
          <Tabs defaultValue="write">
            <TabsList className="mb-6">
              <TabsTrigger
                value="write"
                className="data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300"
              >
                Write
              </TabsTrigger>
              <TabsTrigger
                value="preview"
                className="data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300"
              >
                Preview
              </TabsTrigger>
            </TabsList>

            <TabsContent value="write" className="space-y-4 animate-slide-up">
              <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <input
                  type="text"
                  placeholder="Chapter Title"
                  className="w-full text-2xl font-bold border-none outline-none mb-4 text-primary transition-colors focus:text-accent"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  placeholder="Start writing your story here..."
                  className="w-full h-[60vh] border-none outline-none resize-none text-primary/80 transition-colors focus:text-primary"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
            </TabsContent>

            <TabsContent value="preview" className="animate-slide-up">
              <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-primary">{title || "Chapter Title"}</h1>
                <div className="prose text-primary/80 max-w-none">
                  {content ? (
                    <p>{content}</p>
                  ) : (
                    <p className="text-primary/50 italic">Your story preview will appear here as you write...</p>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
