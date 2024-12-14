import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from './tracking/Analytics';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "BHUMI SEWA FOUNDATION's Charity Site",
  description: '',
}

export default function RootLayout({ children }) {
  const GA_TRACKING_ID = 'G-JVH5JWNXF5';

  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
        <script async src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={String(inter.className) + " w-full h-full"}>

        <Analytics />
        {children}</body>
    </html>
  )
}
