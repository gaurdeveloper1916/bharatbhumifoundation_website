import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "BHUMI SEWA FOUNDATION's Charity Site",
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={String(inter.className) + " w-full h-full"}>{children}</body>
    </html>
  )
}
