import React from "react";

export default function HomePage() {
  return (
    <div>

      {/* Section Title */}
      <h2 id="about" className="text-5xl pt-20 font-bold text-gray-200 text-center">About Me</h2>

      {/* About Section */}
      <section className="flex items-center justify-center p-10 pb-0 max-w-3/4 mx-auto">
        <p className="mt-4 text-white max-w-full text-3xl text-center">
          Hi there! I&apos;m <span className="text-blue-500 font-black"> Joao Maio</span>, a 23 year old developer based in Portugal, with a Master&apos;s Degree in Computer Science taken in Universidade da Beira Interior.
          <br></br>
          In addition to coding, I enjoy playing RPGs, swimming, tinkering with personal projects and learning new things. My goal is to create impactful software that combines functionality with great user experience. 
          <br></br>
          Feel free to connect - I&apos;m always open to discussing exciting new opportunities!
        </p>
      </section>

      {/* Divider */}
      <div className="flex flex-col items-center justify-center">
        <hr className="w-10 border-t-2 border-gray-300 my-8"></hr>
      </div>

      {/* ----------------------------------------------------------------------------------------------------------- */}

      {/* Section Title */}
      <h2 id="workexp" className="text-5xl pt-20 font-bold text-gray-200 text-center">Experience</h2>

      {/* Work Experience Section */}
      <section className="flex flex-col items-center p-8 space-y-8 max-w-3/4 mx-auto">
        {/* Computer Science Degree */}
        <div className="px-4 py-4 mx-auto font-normal bg-gray-300 rounded-lg w-full max-w-[900px]">
          <div className="flex flex-col justify-between lg:flex-row">
            <h3 className="mb-2 text-2xl font-semibold leading-snug">
              <a className="underline hover:text-blue-500" href="https://www.ubi.pt">Bachelor&apos;s and Master&apos;s Degree at UBI</a>
            </h3>
            <div className="flex flex-wrap items-center mb-2 gap-y-2 space-x-2 lg:space-x-2 lg:space-y-0 lg:flex-row">
              <p className="px-2 text-gray-200 bg-angularColor rounded">C and C++</p>
              <p className="px-2 text-gray-200 bg-aspnetColor rounded">Java</p>
              <p className="px-2 text-gray-200 bg-dockerColor rounded">Python</p>
            </div>
          </div>
          <p className="text-gray-500">5 Years (2019 - 2024)</p>
            <ul className="list-disc pl-5">
              <li className="text-gray-700">
                I was primarly teached how to use <strong className="font-bold">C</strong>, <strong className="font-bold">C++</strong>, <strong className="font-bold">Java</strong> and <strong className="font-bold">Python</strong>.
              </li>
              <li className="text-gray-700">
                I also learned a litle bit of <strong className="font-bold">HTML & CSS</strong>, <strong className="font-bold">Assembly</strong>, <strong className="font-bold">Arduino</strong> and <strong className="font-bold">Bash</strong>.
              </li>
            </ul>
        </div>

        {/* Vertical Line */}
        <div className="w-[2px] h-20 bg-gray-500"></div>

        {/* First Work Experience */}
        <div className="px-4 py-4 mx-auto font-normal bg-gray-300 rounded-lg w-full max-w-[900px]">
          <div className="flex flex-col justify-between lg:flex-row">
            <h3 className="mb-2 text-2xl font-semibold leading-snug">
              <a className="underline hover:text-blue-500" href="https://latitudde.com">Latitudde</a>
            </h3>
            <div className="flex flex-wrap items-center mb-2 gap-y-2 space-x-2 lg:space-x-2 lg:space-y-0 lg:flex-row">
              <p className="px-2 text-gray-200 bg-angularColor rounded">Angular with TypeScript</p>
              <p className="px-2 text-gray-200 bg-aspnetColor rounded">ASP.NET with C#</p>
              <p className="px-2 text-gray-200 bg-dockerColor rounded">SQL</p>
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
                  Worked as a Full-Stack Developer
              </li>
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
              <p className="px-2 text-gray-200 bg-dockerColor rounded">SQL</p>
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
                    Worked as a Full-Stack Developer
              </li>
              <li className="text-gray-700">
                Used <strong className="font-bold">Angular</strong>, <strong className="font-bold">TypeScript</strong>, <strong className="font-bold">HTML & CSS</strong>,  <strong className="font-bold">ASP.NET</strong>, <strong className="font-bold">C#</strong>, and <strong className="font-bold">Docker</strong> when working on <a href="https://www.bio2.pt" className="underline hover:text-blue-500">Bio2</a> Portal website.
              </li>
              <li className="text-gray-700">
                Continued working on the <a href="https://www.infraestruturasdeportugal.pt" className="underline hover:text-blue-500">Infraestruturas de Portugal</a> websites.
              </li>
            </ul>
        </div>

        {/* Vertical Line */}
        <div className="w-[2px] h-20 bg-gray-500"></div>

        {/* Third Work Experience */}
        <div className="px-4 py-4 mx-auto font-normal bg-gray-300 rounded-lg w-full max-w-[900px]">
          <div className="flex flex-col justify-between lg:flex-row">
            <h3 className="mb-2 text-2xl font-semibold leading-snug">
              <a className="underline hover:text-blue-500" href="https://adot.pt">Associação Desenvolver o Talento</a>
            </h3>
            <div className="flex flex-wrap items-center mb-2 gap-y-2 space-x-2 lg:space-x-2 lg:space-y-0 lg:flex-row">
              <p className="px-2 text-gray-200 bg-angularColor rounded">Scratch</p>
              <p className="px-2 text-gray-200 bg-cssColor rounded">C</p>
              <p className="px-2 text-gray-200 bg-drupalColor rounded">Python</p>
              <p className="px-2 text-gray-200 bg-phpColor rounded">Java</p>
            </div>
          </div>
          <p className="text-gray-500">11 Months (03/02/2024 until 31/12/2024)</p>
            <ul className="list-disc pl-5">
              <li className="text-gray-700">
              <a href="https://www.facebook.com/ADoTPortugal/?checkpoint_src=any" className="underline hover:text-blue-500">ADoT</a> is a non-profit organization that aims to help young students develop their skills in the IT area. My job was to teach young students how to code using <strong className="font-bold">Scratch</strong>, <strong className="font-bold">C</strong>, <strong className="font-bold">Python</strong> and <strong className="font-bold">Java</strong>.
              </li>
            </ul>
        </div>      
      </section>

      {/* Divider */}
      <div className="flex flex-col items-center justify-center">
        <hr className="w-10 border-t-2 border-gray-300 my-8"></hr>
      </div>

      {/* ----------------------------------------------------------------------------------------------------------- */}

      {/* Section Title */}
      <h2 id="projects" className="text-5xl pt-20 font-bold text-gray-200 text-center">Projects</h2>

      {/* Projects Section */}
      <section className="flex items-center justify-center p-8 max-w-3/4 mx-auto">

        {/* WatchList Wizard*/}
        <div className="bg-gray-300 p-5 flex flex-col items-center mx-auto border-b mb-10 border-gray-200 rounded-lg w-full max-w-[420px]">

            <div className="h-[80px] w-[80px] inline-flex items-center justify-center flex-shrink-0">
              <img className="h-full w-full object-contain" src="/watchlist_wizard.png" alt="Watchlist Wizard" />
            </div>

            <div className="flex-grow text-center mt-6 sm:mt-0">
                <h1 className="text-black font-bold text-2xl">Watchlist Wizard</h1>
                <h3 className="text-gray-500 font-bold text-lg  mb-3">Easily track favorite movies and shows!</h3>  
                
                <p>This project was created to be a personal use App. It was made in 2024/2025 with <strong className="font-bold">Angular</strong> for the Front-End and Back-End, with <strong className="font-bold">Capacitor</strong> to transform it into an Android App and <a href="https://www.themoviedb.org/" className="underline hover:text-blue-500">The Movie Database</a> for API.</p>
                
                <div className="py-4">
                    <div className=" inline-block mr-2 mb-2" >
                        <div className="flex  pr-2 h-full items-center">
                          <p className="px-2 text-gray-200 bg-angularColor rounded">Angular</p>
                        </div>
                    </div>
                    <div className="inline-block mr-2 mb-2" >
                        <div className="flex  pr-2 h-full items-center">
                          <p className="px-2 text-gray-200 bg-drupalColor rounded">Capacitator</p>
                        </div>
                    </div>
                    <div className=" inline-block mr-2 mb-2" >
                        <div className="flex  pr-2 h-full items-center">
                          <p className="px-2 text-gray-200 bg-phpColor rounded">SQLite</p>
                        </div>
                    </div>
                </div>
                <a className="mt-3 text-indigo-500 inline-flex items-center" href="https://github.com/JoaoMaio/WatchList-Wizard">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
            </div>
        </div>

        {/* Gameify*/}
        <div className="bg-gray-300 p-5 flex flex-col items-center mx-auto border-b mb-10 border-gray-200 rounded-lg w-full max-w-[420px]">

          <div className="h-[80px] w-[80px] inline-flex items-center justify-center flex-shrink-0">
            <img className="h-full w-full object-contain" src="/gameify.png" alt="Watchlist Wizard" />
          </div>

          <div className="flex-grow text-center mt-6 sm:mt-0">
              <h1 className="text-black font-bold text-2xl">Gameify</h1>
              <h3 className="text-gray-500 font-bold text-lg  mb-3">A Game Price Tracker and Info Extractor!</h3>  
              
              <p>This project was created in 2022, using <strong className="font-bold">Flutter</strong> for the App, <strong className="font-bold">Python</strong> as an API Server that would extract/scrap the information from the websites needed and <strong className="font-bold">Firebase</strong> as a Database.</p>
            
              <div className="py-4">
                  <div className=" inline-block mr-2 mb-2" >
                      <div className="flex  pr-2 h-full items-center">
                        <p className="px-2 text-gray-200 bg-angularColor rounded">Flutter</p>
                      </div>
                  </div>
                  <div className="inline-block mr-2 mb-2" >
                      <div className="flex  pr-2 h-full items-center">
                        <p className="px-2 text-gray-200 bg-drupalColor rounded">Python</p>
                      </div>
                  </div>
                  <div className=" inline-block mr-2 mb-2" >
                      <div className="flex  pr-2 h-full items-center">
                        <p className="px-2 text-gray-200 bg-phpColor rounded">Firebase</p>
                      </div>
                  </div>
              </div>
              <a className="mt-3 text-indigo-500 inline-flex items-center" href="https://github.com/JoaoMaio/Gameify">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
          </div>
          </div>

      </section>

      {/* Divider */}
      <div className="flex flex-col items-center justify-center">
        <hr className="w-10 border-t-2 border-gray-300 my-8"></hr>
      </div>

      {/* Section Title */}
      <h2 id="contact" className="text-5xl pt-20 font-bold text-gray-200 text-center">Contact</h2>

      {/* Contact Section */}
      <section  className="flex items-center justify-center p-8 max-w-3/4 mx-auto">
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
