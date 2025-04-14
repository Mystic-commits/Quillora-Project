"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  name: string
  email: string
  level: number
}

type UserContextType = {
  user: User | null
  setUser: (user: User | null) => void
  isLoggedIn: boolean
  login: (email: string, name: string) => void
  signup: (name: string, email: string) => void
  logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const isLoggedIn = user !== null

  // Check for saved user on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("quillora-user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  // Save user to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("quillora-user", JSON.stringify(user))
    } else {
      localStorage.removeItem("quillora-user")
    }
  }, [user])

  const login = (email: string, name: string) => {
    setUser({
      name: name || "Writer",
      email,
      level: 3,
    })
  }

  const signup = (name: string, email: string) => {
    setUser({
      name,
      email,
      level: 1,
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, login, signup, logout }}>{children}</UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
