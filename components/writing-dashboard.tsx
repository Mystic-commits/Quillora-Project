import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Edit, History, Settings, Save } from "lucide-react"

export function WritingDashboard() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          <span className="font-bold">My Story</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-primary/80">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button className="bg-accent text-white hover:bg-accent/90">Publish</Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-16 md:w-64 bg-white border-r flex flex-col">
          <div className="p-4 hidden md:block">
            <h2 className="font-bold text-primary">Quillora</h2>
          </div>

          <nav className="flex-1 p-2">
            <ul className="space-y-2">
              {[
                { icon: <Edit className="w-5 h-5" />, label: "Editor" },
                { icon: <BookOpen className="w-5 h-5" />, label: "Chapters" },
                { icon: <History className="w-5 h-5" />, label: "History" },
                { icon: <Settings className="w-5 h-5" />, label: "Settings" },
              ].map((item, i) => (
                <li key={i}>
                  <Button
                    variant={i === 0 ? "default" : "ghost"}
                    className={`w-full justify-start ${i === 0 ? "bg-primary text-white" : "text-primary"}`}
                  >
                    {item.icon}
                    <span className="ml-2 hidden md:inline">{item.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 overflow-auto bg-secondary/30 p-6">
          <Tabs defaultValue="write">
            <TabsList className="mb-6">
              <TabsTrigger value="write">Write</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>

            <TabsContent value="write" className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <input
                  type="text"
                  placeholder="Chapter Title"
                  className="w-full text-2xl font-bold border-none outline-none mb-4 text-primary"
                />
                <textarea
                  placeholder="Start writing your story here..."
                  className="w-full h-[60vh] border-none outline-none resize-none text-primary/80"
                ></textarea>
              </div>
            </TabsContent>

            <TabsContent value="preview">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold mb-4 text-primary">Chapter Title</h1>
                <p className="text-primary/80">Your story preview will appear here as you write...</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
