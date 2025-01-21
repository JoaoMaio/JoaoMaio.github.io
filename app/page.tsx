import TypewriterEffect from "@/components/typewriter";
import React from "react";




export default function HomePage() {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="min-h-screen bg-white flex-col items-center justify-center p-8">
  
        <p className="mt-4 text-gray-700 max-w-2xl">
          Hi there! I'm João Maio, a full-stack developer based in Portugal!
          I'm a passionate developer with a Master's Degree in Computer Science in Universidade da Beira Interior. 
          I love learning new things and solving problems.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Project 1: Amazing Web App
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Project 2: Cool Automation Tool
            </a>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white flex items-center justify-center p-8">
        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
        <p className="mt-4 text-gray-700">
          Email me at:{" "}
          <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">
            your-email@example.com
          </a>
        </p>
      </section>
    </div>
  );
}
