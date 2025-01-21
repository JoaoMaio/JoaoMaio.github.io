import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TypewriterEffect from "@/components/typewriter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Testing",
  description: "Showcasing my work and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header */}
        <header id="home" className="sticky top-0 z-50 shadow-md">
          <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <div>
              <TypewriterEffect words={["<João Maio/>"]} />
            </div>    
            
            {/* Navigation Links */}
            <ul className="flex justify-center items-center space-x-6">
              <li>
                <a href="#about" className="text-gray-700 hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-700 hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="text-center py-4 bg-gray-100 text-gray-600">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
