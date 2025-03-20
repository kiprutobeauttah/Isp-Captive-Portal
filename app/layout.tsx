import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Isp-Captive-Portal',
  description: 'Created with beauttah',
  generator: 'beauttah',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
