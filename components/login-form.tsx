import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function LoginForm() {
  return (
    <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary">Welcome Back</h2>
        <p className="text-primary/70 mt-2">Sign in to continue your writing journey</p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="#" className="text-sm text-accent hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>

        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
          Sign In
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-primary/70">
          Don't have an account?{" "}
          <Link href="#" className="text-accent hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
