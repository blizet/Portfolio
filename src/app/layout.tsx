import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Anjali Jha | Software Engineer",
  description: "Software Engineer crafting scalable applications with Python, React, and Cloud Infrastructure. Google Summer of Code 2025.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "Python", "TypeScript", "GSoC"],
  authors: [{ name: "Anjali Jha" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
