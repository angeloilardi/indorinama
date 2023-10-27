import type { Metadata } from 'next'
import { Inter, Poppins, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--poppins-font",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--roboto-font",
});

export const metadata: Metadata = {
  title: 'Indorinama',
  description: 'Advertising & Digital Marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-neutral-100`} >{children}</body>
    </html>
  )
}
