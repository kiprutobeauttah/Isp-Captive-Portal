import { Wifi, Shield, Clock, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PackageCard from "@/components/package-card"
import { packages } from "@/lib/data"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Wifi className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-900">SpeedNet ISP</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#packages" className="text-blue-900 hover:text-blue-600 font-medium">
              Packages
            </Link>
            <Link href="#features" className="text-blue-900 hover:text-blue-600 font-medium">
              Features
            </Link>
            <Link href="#support" className="text-blue-900 hover:text-blue-600 font-medium">
              Support
            </Link>
          </nav>
          <Link href="/access-code">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Enter Access Code
            </Button>
          </Link>
        </div>
      </header>

      <main>
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">Connect to High-Speed Internet</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Choose from our range of affordable packages and get online in minutes with our easy payment system.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg" asChild>
              <Link href="#packages">View Packages</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="py-16 bg-white px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Choose SpeedNet?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-sky-50 p-6 rounded-xl text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">High-Speed</h3>
                <p className="text-slate-600">
                  Enjoy blazing fast internet speeds for streaming, gaming, and browsing.
                </p>
              </div>
              <div className="bg-sky-50 p-6 rounded-xl text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Secure</h3>
                <p className="text-slate-600">
                  Our network is protected with advanced security features to keep you safe.
                </p>
              </div>
              <div className="bg-sky-50 p-6 rounded-xl text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">24/7 Support</h3>
                <p className="text-slate-600">Our customer support team is available around the clock to assist you.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="py-16 px-4 bg-gradient-to-b from-white to-sky-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Choose Your Package</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Select from our range of packages designed to suit your internet needs and budget.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </div>
        </section>

        <section id="support" className="py-16 bg-white px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Need Help?</h2>
            <div className="bg-sky-50 p-8 rounded-xl">
              <p className="text-slate-600 mb-6 text-center">
                If you need assistance with your connection or have questions about our packages, our support team is
                here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">Contact Support</Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  FAQs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wifi className="h-6 w-6 text-blue-300" />
                <h3 className="text-xl font-bold">SpeedNet ISP</h3>
              </div>
              <p className="text-blue-200">Providing high-speed internet solutions for homes and businesses.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#packages" className="text-blue-200 hover:text-white">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-blue-200 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#support" className="text-blue-200 hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/access-code" className="text-blue-200 hover:text-white">
                    Enter Access Code
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
              <p className="text-blue-200 mb-2">support@speednet-isp.com</p>
              <p className="text-blue-200">+254 700 000 000</p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} SpeedNet ISP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

