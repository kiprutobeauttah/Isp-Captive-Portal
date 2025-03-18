"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Wifi, ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { packages } from "@/lib/data"
import type { PackageType } from "@/lib/types"
import Link from "next/link"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const packageId = searchParams.get("package")

  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [accessCode, setAccessCode] = useState("")

  useEffect(() => {
    if (packageId) {
      const pkg = packages.find((p) => p.id === packageId)
      if (pkg) {
        setSelectedPackage(pkg)
      } else {
        router.push("/")
      }
    } else {
      router.push("/")
    }
  }, [packageId, router])

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and limit to 12 characters
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 12)
    setPhoneNumber(value)
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Please enter a valid phone number")
      return
    }

    setIsLoading(true)
    setPaymentStatus("processing")

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      setPaymentStatus("success")
      // Generate a random access code
      setAccessCode(Math.random().toString(36).substring(2, 10).toUpperCase())
    }, 3000)
  }

  if (!selectedPackage) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white p-4">
      <div className="container mx-auto max-w-md py-8">
        <Link href="/" className="flex items-center text-blue-600 mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to packages
        </Link>

        {paymentStatus === "success" ? (
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="pb-4 text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <CardTitle className="text-2xl text-green-700">Payment Successful!</CardTitle>
              <CardDescription>Your internet access code has been generated</CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-4">
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-green-700 mb-2">Your Access Code:</p>
                <p className="text-2xl font-mono font-bold tracking-wider text-green-800">{accessCode}</p>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Use this code to access the internet. The code is valid for {selectedPackage.validityDays} days.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/access-code">Enter Access Code Now</Link>
              </Button>
              <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-blue-900">Payment</CardTitle>
                <Wifi className="h-5 w-5 text-blue-600" />
              </div>
              <CardDescription>Complete your payment to access the internet</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="mb-6 p-4 bg-sky-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">Package Summary</h3>
                <p className="text-lg font-bold text-blue-900 mb-1">{selectedPackage.name}</p>
                <p className="text-sm text-slate-600 mb-1">
                  {selectedPackage.speed} Mbps • {selectedPackage.validityDays} days
                </p>
                <p className="text-xl font-bold text-blue-900 mt-2">KSh {selectedPackage.price}</p>
              </div>

              <form onSubmit={handlePayment}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">M-Pesa Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="e.g. 07XXXXXXXX"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      required
                      className="border-blue-200 focus:border-blue-400"
                    />
                    <p className="text-xs text-slate-500">Enter the phone number registered with M-Pesa</p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isLoading || paymentStatus === "processing"}
                  >
                    {isLoading || paymentStatus === "processing" ? "Processing..." : "Pay with M-Pesa"}
                  </Button>
                </div>
              </form>

              <div className="mt-6">
                <p className="text-xs text-center text-slate-500">
                  By proceeding with the payment, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

