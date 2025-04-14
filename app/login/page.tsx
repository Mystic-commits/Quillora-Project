"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedBlob } from "@/components/animated-blob"
import { useUser } from "@/components/user-provider"

export default function LoginPage() {
  const router = useRouter()
  const { login, signup } = useUser()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      if (loginData.email && loginData.password) {
        login(loginData.email, "")
        router.push("/dashboard")
      } else {
        setError("Please fill in all fields")
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validate
    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      if (signupData.name && signupData.email && signupData.password) {
        signup(signupData.name, signupData.email)
        router.push("/dashboard")
      } else {
        setError("Please fill in all fields")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-sky-light flex flex-col relative overflow-hidden">
      <AnimatedBlob color="bg-accent/20" size="w-40 h-40" className="left-0 top-1/4" />
      <AnimatedBlob color="bg-sky/30" size="w-32 h-32" className="right-10 bottom-10" />

      <nav className="flex items-center justify-between p-4 md:p-6 relative z-10">
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
          <Link href="/" className="text-xl font-bold text-primary">
            Quillora
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center p-4 py-16 relative z-10">
        <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg animate-scale-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">Welcome to Quillora</h2>
            <p className="text-primary/70">Sign in to continue your writing journey</p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 animate-slide-down">
              {error}
            </div>
          )}

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Login
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Sign Up
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="animate-slide-up">
              <form className="space-y-6" onSubmit={handleLogin}>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="border-primary/20 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="#" className="text-sm text-accent hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="border-primary/20 focus:border-primary focus:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 ripple-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="signup" className="animate-slide-up">
              <form className="space-y-6" onSubmit={handleSignup}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={signupData.name}
                    onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    className="border-primary/20 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    className="border-primary/20 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    className="border-primary/20 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    className="border-primary/20 focus:border-primary focus:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 ripple-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <footer className="bg-primary text-white py-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 Quillora. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
