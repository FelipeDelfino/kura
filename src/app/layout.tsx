import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google'
import { Provider } from "@/components/ui/provider";

import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin'],
})

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Kura Criativa",
  description: "Kura Criativa",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning >
      <body className={roboto.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
