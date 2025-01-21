import React from "react";

export default function HomePage() {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="flex items-center justify-center p-10 pb-0">

        <p className="mt-4 text-white max-w-full text-4xl text-center">
          Hi there! I&apos;m <span className="text-blue-500 font-black"> Joao Maio</span>, a developer based in Portugal,  with a Master&apos;s Degree in Computer Science taken in Universidade da Beira Interior.
          <br></br>
          I love learning new things and solving problems.
        </p>
      </section>

      <div className="flex flex-col items-center justify-center">
        <hr className="w-10 border-t-2 border-gray-300 my-8"></hr>
      </div>

      <section id="workexp" className="min-h-screen flex flex-col items-center p-8 space-y-8">
        {/* First Work Experience */}
        <div className="px-4 py-4 mx-auto font-normal bg-gray-300 rounded-lg w-full max-w-[900px]">
          <div className="flex flex-col justify-between lg:flex-row">
            <h3 className="mb-2 text-2xl font-semibold leading-snug">
              <a className="underline hover:text-blue-500" href="https://latitudde.com">Latitudde</a>
            </h3>
            <div className="flex flex-wrap items-center mb-2 gap-y-2 space-x-2 lg:space-x-2 lg:space-y-0 lg:flex-row">
              <p className="px-2 text-gray-200 bg-angularColor rounded">Angular with TypeScript</p>
              <p className="px-2 text-gray-200 bg-aspnetColor rounded">ASP.NET with C#</p>
              <p className="px-2 text-gray-200 bg-dockerColor rounded">Docker</p>
              <p className="px-2 text-gray-200 bg-htmlColor rounded">HTML</p>
              <p className="px-2 text-gray-200 bg-cssColor rounded">CSS</p>
              <p className="px-2 text-gray-200 bg-drupalColor rounded">Drupal</p>
              <p className="px-2 text-gray-200 bg-phpColor rounded">PHP</p>
            </div>
          </div>
          <p className="text-gray-500">5 Months of Curricular Internship (30/10/2023 until 28/03/2024)</p>
            <ul className="list-disc pl-5">
              <li className="text-gray-700">
                Learned how to use <strong className="font-bold">Angular</strong>, <strong className="font-bold">TypeScript</strong>, <strong className="font-bold">HTML & CSS</strong>,  <strong className="font-bold">ASP.NET</strong>, <strong className="font-bold">C#</strong>, and <strong className="font-bold">Docker</strong> when working on an internal project for the Company.
              </li>
              <li className="text-gray-700">
                I also learned how to use <strong className="font-bold">Drupal</strong> and <strong className="font-bold">PHP</strong> when working on <a href="https://www.infraestruturasdeportugal.pt" className="underline hover:text-blue-500">Infraestruturas de Portugal</a> websites.
              </li>
            </ul>
        </div>


        {/* Vertical Line */}
        <div className="w-[2px] h-20 bg-gray-500"></div>

        {/* Second Work Experience  */}
        <div className="px-4 py-4 mx-auto font-normal bg-gray-300 rounded-lg w-full max-w-[900px]">
          <div className="flex flex-col justify-between lg:flex-row">
            <h3 className="mb-2 text-2xl font-semibold leading-snug">
              <a className="underline hover:text-blue-500" href="https://latitudde.com">Latitudde</a>
            </h3>
            <div className="flex flex-wrap items-center mb-2 gap-y-2 space-x-2 lg:space-x-2 lg:space-y-0 lg:flex-row">
              <p className="px-2 text-gray-200 bg-angularColor rounded">Angular with TypeScript</p>
              <p className="px-2 text-gray-200 bg-aspnetColor rounded">ASP.NET with C#</p>
              <p className="px-2 text-gray-200 bg-dockerColor rounded">Docker</p>
              <p className="px-2 text-gray-200 bg-htmlColor rounded">HTML</p>
              <p className="px-2 text-gray-200 bg-cssColor rounded">CSS</p>
              <p className="px-2 text-gray-200 bg-drupalColor rounded">Drupal</p>
              <p className="px-2 text-gray-200 bg-phpColor rounded">PHP</p>
            </div>
          </div>
          <p className="text-gray-500">9 Months of Paid Internship (28/03/2024 until 31/12/2024)</p>
            <ul className="list-disc pl-5">
              <li className="text-gray-700">
                Used <strong className="font-bold">Angular</strong>, <strong className="font-bold">TypeScript</strong>, <strong className="font-bold">HTML & CSS</strong>,  <strong className="font-bold">ASP.NET</strong>, <strong className="font-bold">C#</strong>, and <strong className="font-bold">Docker</strong> when working on <a href="https://www.bio2.pt" className="underline hover:text-blue-500">Bio2</a> Portal website.
              </li>
              <li className="text-gray-700">
                Continued working on the <a href="https://www.infraestruturasdeportugal.pt" className="underline hover:text-blue-500">Infraestruturas de Portugal</a> websites.
              </li>
            </ul>
        </div>
      </section>


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
