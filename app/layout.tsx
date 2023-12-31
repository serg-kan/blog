import type { Metadata } from 'next'
// import { Inter as FontSans } from 'next/font/google'
import { Poppins as FontSans } from 'next/font/google';


import './globals.css'
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })
const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >{children}</body>
    </html>
  )
}
