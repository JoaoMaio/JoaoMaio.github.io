'use client';

import OutboundLink from "@/components/outboundclick";
import React from "react";

export default function HomePage() {
  return (
    <div>

       {/* ----------------------------------------------- About M------------------------------------------------------------ */}

      {/* Section Title */}
      <h2 id="about" className="text-2xl md:text-5xl pt-5 md:pt-10 font-bold text-textColor text-center">About Me</h2>

      {/* About Section */}
      <section className="flex items-center justify-center pb-0 max-w-3/4 mx-auto">
        <p className="mt-4 text-textColor2 max-w-full text-base md:text-3xl text-center">
          Hi there! I&apos;m <span className="text-button font-black"> Joao Maio</span>, a 23 year old developer based in Portugal, with a Master&apos;s Degree in Computer Science taken in Universidade da Beira Interior.
          <br></br>
          In addition to coding, I enjoy playing RPGs, swimming, tinkering with personal projects and learning new things. My goal is to create impactful software that combines functionality with great user experience. 
          <br></br>
          Feel free to connect - I&apos;m always open to discussing exciting new opportunities!
        </p>
      </section>

      {/* Divider */}
      <div className="flex flex-col items-center justify-center">
        <hr className="w-10 border-t-2 border-gray-300 my-3 md:my-8"></hr>
      </div>

      {/* ----------------------------------------------- Work Experience------------------------------------------------------------ */}

      {/* Section Title */}
      <h2 id="workexp" className="text-2xl md:text-5xl pt-5 md:pt-10  font-bold text-textColor text-center">Experience</h2>

      {/* Work Experience Section */}
      <section className="flex flex-col items-center p-8 space-y-8 mx-auto">
        {/* Computer Science Degree */}
        <div className="px-4 py-4 mx-auto font-normal bg-background2 border-borderColor rounded-lg w-full max-w-[1000px]">
          <div className="flex flex-col justify-between lg:flex-row items-center">
            <h3 className="mb-2 text-xl md:text-2xl font-semibold leading-snug text-center lg:text-left">
              <a className="underline text-textColor hover:text-highlight" href="https://www.ubi.pt">Bachelor&apos;s and Master&apos;s Degree at UBI</a>
            </h3>
            <div className="flex flex-wrap justify-center items-center mb-2 gap-y-2 space-x-2 lg:space-x-2 lg:space-y-0 lg:flex-row">
              <p className="px-2 text-textColor bg-angularColor rounded">C and C++</p>
              <p className="px-2 text-textColor bg-aspnetColor rounded">Java</p>
              <p className="px-2 text-textColor bg-dockerColor rounded">Python</p>
            </div>
          </div>
          <p className="text-textColor2 text-sm md:text-lg">5 Years (2019 - 2024)</p>
            <ul className="list-disc pl-5 text-sm md:text-xl">
              <li className="text-headingColor ">
                I was primarly teached how to use <strong className="font-bold">C</strong>, <strong className="font-bold">C++</strong>, <strong className="font-bold">Java</strong> and <strong className="font-bold">Python</strong>.
              </li>
              <li className="text-headingColor">
                I also learned a litle bit of <strong className="font-bold">HTML & CSS</strong>, <strong className="font-bold">Assembly</strong>, <strong className="font-bold">Arduino</strong> and <strong className="font-bold">Bash</strong>.
              </li>
            </ul>
        </div>

        {/* Vertical Line */}
        <div className="w-[2px] h-6 md:h-20 bg-gray-500"></div>

        {/* First Work Experience */}
        <div className="px-4 py-4 mx-auto font-normal bg-background2 border-borderColor rounded-lg w-full max-w-[1000px]">
          <div className="flex flex-col justify-between lg:flex-row items-center">
            <h3 className="mb-2 text-xl md:text-2xl font-semibold leading-snug text-center lg:text-left">
              <a className="underline text-textColor hover:text-highlight" href="https://latitudde.com">Latitudde</a>
            </h3>
            <div className="flex flex-wrap justify-center items-center mb-2 gap-y-2 space-x-2 lg:space-x-2 lg:space-y-0 lg:flex-row">
              <p className="px-2 text-textColor bg-angularColor rounded">Angular</p>
              <p className="px-2 text-textColor bg-aspnetColor rounded">ASP.NET</p>
              <p className="px-2 text-textColor bg-dockerColor rounded">SQL</p>
              <p className="px-2 text-textColor bg-dockerColor rounded">Docker</p>
              <p className="px-2 text-textColor bg-htmlColor rounded">HTML</p>
              <p className="px-2 text-textColor bg-cssColor rounded">CSS</p>
              <p className="px-2 text-textColor bg-drupalColor rounded">Drupal</p>
              <p className="px-2 text-textColor bg-phpColor rounded">PHP</p>
            </div>
          </div>
          <p className="text-textColor2 text-sm md:text-lg">5 Months of Curricular Internship (30/10/2023 until 28/03/2024)</p>
            <ul className="list-disc pl-5 text-sm md:text-xl">
              <li className="text-headingColor">
                  Worked as a Full-Stack Developer
              </li>
              <li className="text-headingColor">
                Learned how to use <strong className="font-bold">Angular</strong>, <strong className="font-bold">TypeScript</strong>, <strong className="font-bold">HTML & CSS</strong>,  <strong className="font-bold">ASP.NET</strong>, <strong className="font-bold">C#</strong>, and <strong className="font-bold">Docker</strong> when working on an internal project for the Company.
              </li>
              <li className="text-headingColor">
                I also learned how to use <strong className="font-bold">Drupal</strong> and <strong className="font-bold">PHP</strong> when working on <a href="https://www.infraestruturasdeportugal.pt" className="underline text-headingColor hover:text-highlight">Infraestruturas de Portugal</a> websites.
              </li>
            </ul>
        </div>

        {/* Vertical Line */}
        <div className="w-[2px] h-6 md:h-20 bg-gray-500"></div>

        {/* Second Work Experience  */}
        <div className="px-4 py-4 mx-auto font-normal bg-background2 border-borderColor rounded-lg w-full max-w-[1000px]">
          <div className="flex flex-col justify-between lg:flex-row items-center">
            <h3 className="mb-2 text-xl md:text-2xl font-semibold leading-snug text-center lg:text-left">
              <a className="underline text-textColor hover:text-highlight" href="https://latitudde.com">Latitudde</a>
            </h3>
            <div className="flex flex-wrap justify-center items-center mb-2 gap-y-2 space-x-2 lg:space-x-2 lg:space-y-0 lg:flex-row">
              <p className="px-2 text-textColor bg-angularColor rounded">Angular</p>
              <p className="px-2 text-textColor bg-aspnetColor rounded">ASP.NET</p>
              <p className="px-2 text-textColor bg-dockerColor rounded">SQL</p>
              <p className="px-2 text-textColor bg-dockerColor rounded">Docker</p>
              <p className="px-2 text-textColor bg-htmlColor rounded">HTML</p>
              <p className="px-2 text-textColor bg-cssColor rounded">CSS</p>
              <p className="px-2 text-textColor bg-drupalColor rounded">Drupal</p>
              <p className="px-2 text-textColor bg-phpColor rounded">PHP</p>
            </div>
          </div>
          <p className="text-textColor2 text-sm md:text-lg">9 Months of Paid Internship (28/03/2024 until 31/12/2024)</p>
            <ul className="list-disc pl-5 text-sm md:text-xl">
              <li className="text-headingColor">
                    Worked as a Full-Stack Developer
              </li>
              <li className="text-headingColor">
                Used <strong className="font-bold">Angular</strong>, <strong className="font-bold">TypeScript</strong>, <strong className="font-bold">HTML & CSS</strong>,  <strong className="font-bold">ASP.NET</strong>, <strong className="font-bold">C#</strong>, and <strong className="font-bold">Docker</strong> when working on <a href="https://www.bio2.pt" className="underline text-headingColor hover:text-highlight">Bio2</a> Portal website.
              </li>
              <li className="text-headingColor">
                Continued working on the <a href="https://www.infraestruturasdeportugal.pt" className="underline text-headingColor hover:text-highlight">Infraestruturas de Portugal</a> websites.
              </li>
            </ul>
        </div>

        {/* Vertical Line */}
        <div id="adot" className="w-[2px] h-6 md:h-20 bg-gray-500"></div>

        {/* Third Work Experience */}
        <div  className="px-4 py-4 mx-auto font-normal bg-background2 border-borderColor rounded-lg w-full max-w-[1000px]">
          <div className="flex flex-col justify-between lg:flex-row items-center">
            <h3 className="mb-2 text-xl md:text-2xl font-semibold leading-snug text-center lg:text-left">
              <a className="underline text-textColor hover:text-highlight" href="https://adot.pt">Associação Desenvolver o Talento</a>
            </h3>
            <div className="flex flex-wrap justify-center items-center mb-2 gap-y-2 space-x-2 lg:space-x-2 lg:space-y-0 lg:flex-row">
              <p className="px-2 text-textColor bg-angularColor rounded">Scratch</p>
              <p className="px-2 text-textColor bg-cssColor rounded">C</p>
              <p className="px-2 text-textColor bg-drupalColor rounded">Python</p>
              <p className="px-2 text-textColor bg-phpColor rounded">Java</p>
            </div>
          </div>
          <p className="text-textColor2 text-sm md:text-lg">11 Months (03/02/2024 until 31/12/2024)</p>
            <ul className="list-disc pl-5 text-sm md:text-xl">
              <li className="text-headingColor">
              <a href="https://www.facebook.com/ADoTPortugal/?checkpoint_src=any" className="underline text-headingColor hover:text-highlight">ADoT</a> is a non-profit organization that aims to help young students develop their skills in the IT area. My job was to teach young students how to code using <strong className="font-bold">Scratch</strong>, <strong className="font-bold">C</strong>, <strong className="font-bold">Python</strong> and <strong className="font-bold">Java</strong>.
              </li>
            </ul>
        </div>      
      </section>

      {/* Divider */}
      <div className="flex flex-col items-center justify-center">
        <hr className="w-10 border-t-2 border-gray-300 my-3 md:my-8"></hr>
      </div>

      {/* -----------------------------------------------------Projects------------------------------------------------------ */}

      {/* Section Title */}
      <h2 id="projects" className="text-2xl md:text-5xl pt-5 md:pt-10 font-bold text-textColor text-center">Projects</h2>

      {/* Projects Section */}
      <section className="flex flex-col xl:flex-row gap-6 items-center justify-center p-8 w-full max-w-[1500px] mx-auto">

        {/* WatchList Wizard*/}
        <div className="bg-background2 p-5 flex flex-col items-center border-b mb-10 border-borderColor rounded-lg max-w-9/10 lg:w-[400px] lg:h-[450px]">

            <div className="h-[80px] w-[80px] inline-flex items-center justify-center flex-shrink-0">
              <img className="h-full w-full object-contain" src="/watchlist_wizard.png" alt="Watchlist Wizard" />
            </div>

            <div className="relative flex-grow text-center mt-6 sm:mt-0">
                <h1 className="text-textColor font-bold text-xl md:text-2xl">Watchlist Wizard</h1>
                <h3 className="text-textColor2 font-bold text-base md:text-lg mb-3">Track favorite movies and shows!</h3>  
                
                <p className="text-headingColor text-sm md:text-lg">This project was created to be a personal use App. It was made in 2024/2025 with <strong className="font-bold">Angular</strong> for the Front-End and Back-End, with <strong className="font-bold">Capacitor</strong> to transform it into an Android App and <a href="https://www.themoviedb.org/" className="underline text-headingColor hover:text-highlight">The Movie Database</a> for API.</p>
                

                <div className="py-4">
                    <div className=" inline-block mr-2 mb-2" >
                        <div className="flex  pr-2 h-full items-center">
                          <p className="px-2 text-textColor bg-angularColor rounded">Angular</p>
                        </div>
                    </div>
                    <div className="inline-block mr-2 mb-2" >
                        <div className="flex  pr-2 h-full items-center">
                          <p className="px-2 text-textColor bg-drupalColor rounded">Capacitator</p>
                        </div>
                    </div>
                    <div className=" inline-block mr-2 mb-2" >
                        <div className="flex  pr-2 h-full items-center">
                          <p className="px-2 text-textColor bg-phpColor rounded">SQLite</p>
                        </div>
                    </div>
                </div>

                <OutboundLink action="WatchList-Wizard-Github" href="https://github.com/JoaoMaio/WatchList-Wizard">
                  Learn More 
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </OutboundLink>
            </div>
        </div>

        {/* Gameify*/}
        <div className="bg-background2 p-5 flex flex-col items-center border-b mb-10 border-borderColor rounded-lg max-w-9/10 lg:w-[400px] lg:h-[450px]">

          <div className="h-[80px] w-[80px] inline-flex items-center justify-center flex-shrink-0">
            <img className="h-full w-full object-contain" src="/gameify.png" alt="Gameify" />
          </div>

          <div className="relative flex-grow text-center mt-6 sm:mt-0">
              <h1 className="text-textColor font-bold text-xl md:text-2xl">Gameify</h1>
              <h3 className="text-textColor2 font-bold text-sm md:text-lg mb-3">A Game Price Tracker and Info Extractor!</h3>  
              
              <p className="text-headingColor text-sm md:text-lg">This project was created in 2022, using <strong className="font-bold">Flutter</strong> for the App, <strong className="font-bold">Python</strong> as an API Server that would extract/scrap the information from the websites needed and <strong className="font-bold">Firebase</strong> as a Database.</p>
            
              <div className="py-4">
                  <div className=" inline-block mr-2 mb-2" >
                      <div className="flex  pr-2 h-full items-center">
                        <p className="px-2 text-textColor bg-angularColor rounded">Flutter</p>
                      </div>
                  </div>
                  <div className="inline-block mr-2 mb-2" >
                      <div className="flex  pr-2 h-full items-center">
                        <p className="px-2 text-textColor bg-drupalColor rounded">Python</p>
                      </div>
                  </div>
                  <div className=" inline-block mr-2 mb-2" >
                      <div className="flex  pr-2 h-full items-center">
                        <p className="px-2 text-textColor bg-phpColor rounded">Firebase</p>
                      </div>
                  </div>
              </div>
              <OutboundLink action="Gameify-Github" href="https://github.com/JoaoMaio/Gameify">
                Learn More 
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </OutboundLink>
          </div>
        </div>

        {/* Side Projects*/}
        <div className="bg-background2 p-5 flex flex-col items-center border-b mb-10 border-borderColor rounded-lg max-w-9/10 lg:w-[400px] lg:h-[450px]">

          <div className="h-[80px] w-[80px] inline-flex items-center justify-center flex-shrink-0">
            <img className="h-full w-full object-contain" src="/folder.png" alt="SideProjects" />
          </div>

          <div className="relative flex-grow text-center mt-6 sm:mt-0">
              <h1 className="text-textColor font-bold text-xl md:text-2xl">Side Projects</h1>
              <h3 className="text-textColor2 font-bold text-sm md:text-lg mb-3">Collection of codes</h3>  
              
              <p className="text-headingColor text-sm md:text-lg">This repository is a curated collection of mostly Python scripts and small projects I&apos;ve built during my free time. It&apos;s a mix of practical tools, personal experiments, and teaching materials (during my time at <a className="underline text-headingColor hover:text-highlight" href="#adot">ADoT</a>).
              </p>            
              <div className="py-4">
                  <div className=" inline-block mr-2 mb-2" >
                      <div className="flex  pr-2 h-full items-center">
                        <p className="px-2 text-textColor bg-angularColor rounded">Python</p>
                      </div>
                  </div>
                  <div className="inline-block mr-2 mb-2" >
                      <div className="flex  pr-2 h-full items-center">
                        <p className="px-2 text-textColor bg-drupalColor rounded">Java</p>
                      </div>
                  </div>
                  <div className=" inline-block mr-2 mb-2" >
                      <div className="flex  pr-2 h-full items-center">
                        <p className="px-2 text-textColor bg-phpColor rounded">C</p>
                      </div>
                  </div>
                  <div className=" inline-block mr-2 mb-2" >
                      <div className="flex  pr-2 h-full items-center">
                        <p className="px-2 text-textColor bg-phpColor rounded">Scratch</p>
                      </div>
                  </div>
              </div>
              <OutboundLink action="SideProjects-Github" href="https://github.com/JoaoMaio/Side-Projects">
                Learn More 
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </OutboundLink>
          </div>
        </div>

      </section>

      {/* Divider */}
      <div className="flex flex-col items-center justify-center">
        <hr className="w-10 border-t-2 border-gray-300 my-3 md:my-8"></hr>
      </div>

      {/* ----------------------------------------------------Currently Learning------------------------------------------------------- */}

      {/* Section Title */}
      <h2 id="currentLearning" className="text-2xl md:text-5xl pt-5 md:pt-10  font-bold text-textColor text-center">Currently Learning</h2>

      {/* Currently Learning Section */}
      <section className="flex flex-col gap-6 items-center justify-center p-8 w-full max-w-[900px] mx-auto">
        <code className="text-lg inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span className="flex gap-4 text-sm md:text-base">
                <span className="shrink-0 text-textColor2">$</span>
                <span className="flex-1">
                    <span> Rust🦀-</span>
                    <span className="text-headingColor"> Working on a Personal Project using Iced.rs Library</span>
                </span>
            </span>
        </code>
        <code className="text-lg inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span className="flex gap-4 text-sm md:text-base">
                <span className="shrink-0 text-textColor2">$</span>
                <span className="flex-1">
                    <span> Godot🎮-</span>
                    <span className="text-headingColor"> Working on a Small Game for Learning the basics</span>
                </span>
            </span>
        </code>
      </section>
    </div>
  );
}