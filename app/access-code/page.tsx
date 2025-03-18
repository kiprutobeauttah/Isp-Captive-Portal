"use client"

import type React from "react"

import { useState } from "react"
import { Wifi, ArrowLeft, CheckCircle2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AccessCodePage() {
  const [accessCode, setAccessCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleAccessCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Convert to uppercase and remove spaces
    const value = e.target.value
      .replace(/[^A-Za-z0-9]/g, "")
      .toUpperCase()
      .slice(0, 10)
    setAccessCode(value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!accessCode || accessCode.length < 6) {
      alert("Please enter a valid access code")
      return
    }

    setIsLoading(true)

    // Simulate verification process
    setTimeout(() => {
      setIsLoading(false)
      // For demo purposes, any code that starts with "TEST" will be successful
      if (accessCode.startsWith("TEST")) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white p-4">
      <div className="container mx-auto max-w-md py-8">
        <Link href="/" className="flex items-center text-blue-600 mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to home
        </Link>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl text-blue-900">Access Internet</CardTitle>
              <Wifi className="h-5 w-5 text-blue-600" />
            </div>
            <CardDescription>Enter your access code to connect to the internet</CardDescription>
          </CardHeader>
          <CardContent>
            {status === "idle" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="accessCode">Access Code</Label>
                  <Input
                    id="accessCode"
                    placeholder="Enter your access code"
                    value={accessCode}
                    onChange={handleAccessCodeChange}
                    className="text-center font-mono tracking-wider uppercase border-blue-200 focus:border-blue-400"
                    required
                  />
                  <p className="text-xs text-slate-500 text-center">Enter the code you received after payment</p>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                  {isLoading ? "Verifying..." : "Connect"}
                </Button>
              </form>
            )}

            {status === "success" && (
              <div className="text-center">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-700 mb-2">Connected Successfully!</h3>
                <p className="text-slate-600 mb-6">
                  You are now connected to SpeedNet ISP. Enjoy your internet access!
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
              </div>
            )}

            {status === "error" && (
              <div className="text-center">
                <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-700 mb-2">Invalid Code</h3>
                <p className="text-slate-600 mb-4">The access code you entered is invalid or has expired.</p>
                <p className="text-sm text-slate-500 mb-6">For demo purposes, use a code that starts with "TEST"</p>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 mb-3"
                  onClick={() => setStatus("idle")}
                >
                  Try Again
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/">Purchase a Package</Link>
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4">
            <p className="text-xs text-slate-500">Need help? Contact support at support@speednet-isp.com</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

