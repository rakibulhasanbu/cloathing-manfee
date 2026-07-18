import { Geist_Mono, Inter, Montserrat, Bebas_Neue } from "next/font/google"

import "./globals.css"

import { cn } from "@/lib/utils"
import { Providers } from "@/providers"

const inter = Inter({ subsets: [ 'latin' ], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: [ "latin" ],
  variable: "--font-mono",
})

const montserrat = Montserrat({
  subsets: [ "latin" ],
  variable: "--font-montserrat",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: [ "latin" ],
  variable: "--font-bebas",
})

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={ cn("antialiased", fontMono.variable, "font-sans", inter.variable, montserrat.variable, bebasNeue.variable) }
    >
      <body>
        <Providers>{ children }</Providers>
      </body>
    </html>
  )
}

