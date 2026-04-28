import type { Metadata } from "next";
import { Syne, Space_Mono, Caveat, Patrick_Hand } from "next/font/google";
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

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='theme';var d=document.documentElement;var s=localStorage.getItem(k);if(s==='light'||s==='dark'){d.setAttribute('data-theme',s);return;}d.setAttribute('data-theme','dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${spaceMono.variable} ${caveat.variable} ${patrickHand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
