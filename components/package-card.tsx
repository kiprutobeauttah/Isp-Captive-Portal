"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi } from "lucide-react"
import { useRouter } from "next/navigation"
import type { PackageType } from "@/lib/types"

interface PackageCardProps {
  package: PackageType
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  const router = useRouter()

  const handleSelectPackage = () => {
    router.push(`/payment?package=${pkg.id}`)
  }

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${pkg.popular ? "border-blue-500 shadow-md" : ""}`}
    >
      {pkg.popular && <div className="bg-blue-600 text-white text-center py-1 text-sm font-medium">Most Popular</div>}
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold text-blue-900">{pkg.name}</CardTitle>
          <Wifi className={`h-5 w-5 ${pkg.speed >= 50 ? "text-blue-600" : "text-blue-400"}`} />
        </div>
        <CardDescription>{pkg.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-blue-900">KSh {pkg.price}</span>
          <span className="text-slate-500 ml-1">/{pkg.duration}</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              {pkg.speed} Mbps
            </Badge>
          </div>
          <p className="text-sm text-slate-600">Valid for {pkg.validityDays} days</p>
          {pkg.features.map((feature, index) => (
            <p key={index} className="text-sm text-slate-600">
              • {feature}
            </p>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleSelectPackage}>
          Select Package
        </Button>
      </CardFooter>
    </Card>
  )
}

