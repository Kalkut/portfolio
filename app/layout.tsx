import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { Inter } from "next/font/google";
import "./globals.css";
import Office from "./babylon/Office";
import { headers } from 'next/headers'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="h-screen w-screen bg-[#425c87]">
        <Office />
        <header className="absolute right-0 bottom-0 p-4 2xl:p-8">
          <h1 className="text-white text-3xl sm:text-4xl 2xl:text-6xl font-bold text-end">
            Bérenger Makita
          </h1>
          <h2 className="text-end sm:text-2xl 2xl:text-3xl">
            Fullstack & 3D/XR Web Development
          </h2>
        </header>
        {children}
      </body>
    </html>
  );
}
