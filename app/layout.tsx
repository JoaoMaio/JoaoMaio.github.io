import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TypewriterEffect from "@/components/typewriter";


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
      <body className="bg-gradient-to-l from-Gblack to-Gpurple">
        {/* Header */}
        <header id="home" className="sticky top-0 z-50 shadow-md backdrop-blur-lg">
          <nav className="mx-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <div>
              <TypewriterEffect words={["<João Maio/>"]} />
            </div>    
            
            {/* Navigation Links */}
            <ul className="flex justify-center items-center space-x-6">
              <li>
                <a href="#about" className="text-white hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#workexp" className="text-white hover:text-blue-500">
                  Work Experience
                </a>
              </li>

              <li>
                <a href="#currentLearning" className="text-white hover:text-blue-500">
                  Currently Learning
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="text-center py-4 text-white z-50">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
