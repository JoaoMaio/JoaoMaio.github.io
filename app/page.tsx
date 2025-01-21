import React from "react";

export default function HomePage() {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="flex items-center justify-center p-10 pb-0">
  
        <p className="mt-4 text-white max-w-full text-4xl text-center">
          Hi there! I'm <span className="text-blue-500 font-black"> João Maio</span>, a developer based in Portugal,  with a Master's Degree in Computer Science taken in Universidade da Beira Interior. 
          <br></br>
          I love learning new things and solving problems.
        </p>
      </section>

      <div className="flex flex-col items-center justify-center">
        <hr className="w-10 border-t-2 border-gray-300 my-8"></hr>
      </div>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center p-8">
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
      <section id="contact" className="min-h-screen flex items-center justify-center p-8">
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
