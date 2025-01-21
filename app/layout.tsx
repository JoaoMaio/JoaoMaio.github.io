import type { Metadata } from "next";
import "./globals.css";
import TypewriterEffect from "@/components/typewriter";

export const metadata: Metadata = {
  title: "Joao Maio Portfolio",
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
          <nav className="mx-4 py-3 flex flex-col lg:flex-row lg:justify-between lg:items-center">
            {/* Logo */}
            <div className="mb-4 lg:mb-0 flex justify-center">
              <TypewriterEffect words={["<João Maio/>"]} />
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-row space-x-3 items-center justify-center text-sm lg:text-lg lg:space-x-6 lg:justify-end">
              <li>
                <a href="#about" className="block py-2 text-white hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#workexp" className="text-center block py-2 text-white hover:text-blue-500">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="block py-2 text-white hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#currentLearning" className="text-center block py-2 text-white hover:text-blue-500">
                  Currently Learning
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 text-white hover:text-blue-500">
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
