export interface PackageType {
  id: string
  name: string
  description: string
  price: number
  duration: string
  speed: number
  validityDays: number
  features: string[]
  popular?: boolean
}

