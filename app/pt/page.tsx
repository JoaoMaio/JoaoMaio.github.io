'use client';

import React from "react";

export default function HomePage() {
  return (
    <div>

       {/* ----------------------------------------------- About M------------------------------------------------------------ */}

      {/* Section Title */}
      <h2 id="about" className="text-2xl md:text-5xl pt-5 md:pt-10 font-bold text-textColor text-center">Sobre Mim</h2>

      {/* About Section */}
      <section className="flex items-center justify-center pb-0 max-w-3/4 mx-auto">
        <p className="mt-4 text-textColor2 max-w-full text-base md:text-3xl text-center">
        Hello! Eu sou o <span className="text-button font-black"> Joao Maio</span>,, um developer de 23 anos que mora em Portugal, com mestrado em Engenharia Informática na Universidade da Beira Interior.
          <br></br>
          Para além de programar, gosto de jogar RPGs, nadar, trabalhar em projetos pessoais e aprender coisas novas. O meu objetivo é criar software com qualidade que combine funcionalidade com uma excelente experiência para o utilizador.
          <br></br>
          Não hesites em contactar- estou sempre disponível para discutir novas oportunidades interessantes!
        </p>
      </section>

      {/* Divider */}
      <div className="flex flex-col items-center justify-center">
        <hr className="w-10 border-t-2 border-gray-300 my-3 md:my-8"></hr>
      </div>

      {/* ----------------------------------------------- Work Experience------------------------------------------------------------ */}

      {/* Section Title */}
      <h2 id="workexp" className="text-2xl md:text-5xl pt-5 md:pt-10  font-bold text-textColor text-center">Experiência</h2>

      {/* Work Experience Section */}
      <section className="flex flex-col items-center p-8 space-y-8 mx-auto">
        {/* Computer Science Degree */}
        <div className="px-4 py-4 mx-auto font-normal bg-background2 border-borderColor rounded-lg w-full max-w-[1000px]">
          <div className="flex flex-col justify-between lg:flex-row items-center">
            <h3 className="mb-2 text-xl md:text-2xl font-semibold leading-snug text-center lg:text-left">
              <a className="underline text-textColor hover:text-highlight" href="https://www.ubi.pt">Licenciatura e Mestrado na UBI</a>
            </h3>
            <div className="flex flex-wrap justify-center items-center mb-2 gap-y-2 space-x-2 lg:space-x-2 lg:space-y-0 lg:flex-row">
              <p className="px-2 text-textColor bg-angularColor rounded">C e C++</p>
              <p className="px-2 text-textColor bg-aspnetColor rounded">Java</p>
              <p className="px-2 text-textColor bg-dockerColor rounded">Python</p>
            </div>
          </div>
          <p className="text-textColor2 text-sm md:text-lg">5 Anos (2019 - 2024)</p>
            <ul className="list-disc pl-5 text-sm md:text-xl">
              <li className="text-headingColor ">
                Aprendi principalmente <strong className="font-bold">C</strong>, <strong className="font-bold">C++</strong>, <strong className="font-bold">Java</strong> e <strong className="font-bold">Python</strong>.
              </li>
              <li className="text-headingColor">
               Também aprendi um pouco de <strong className="font-bold">HTML & CSS</strong>, <strong className="font-bold">Assembly</strong>, <strong className="font-bold">Arduino</strong> e <strong className="font-bold">Bash</strong>.
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
          <p className="text-textColor2 text-sm md:text-lg">5 Mesed de Estágio Curricular (30/10/2023 até 28/03/2024)</p>
            <ul className="list-disc pl-5 text-sm md:text-xl">
              <li className="text-headingColor">
                  Trabalhei como Full-Stack Developer
              </li>
              <li className="text-headingColor">
                Aprendi a usar <strong className="font-bold">Angular</strong>, <strong className="font-bold">TypeScript</strong>, <strong className="font-bold">HTML & CSS</strong>,  <strong className="font-bold">ASP.NET</strong>, <strong className="font-bold">C#</strong>, e <strong className="font-bold">Docker</strong> enquanto trabalhava num projeto interno.
              </li>
              <li className="text-headingColor">
                Também aprendi a usar <strong className="font-bold">Drupal</strong> e <strong className="font-bold">PHP</strong> enquanto trabalhei nos websites da <a href="https://www.infraestruturasdeportugal.pt" className="underline text-headingColor hover:text-highlight">Infraestruturas de Portugal</a>.
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
          <p className="text-textColor2 text-sm md:text-lg">9 Meses de Estágio Pago (28/03/2024 até 31/12/2024)</p>
            <ul className="list-disc pl-5 text-sm md:text-xl">
              <li className="text-headingColor">
                Trabalhei como Full-Stack Developer
              </li>
              <li className="text-headingColor">
                Usei <strong className="font-bold">Angular</strong>, <strong className="font-bold">TypeScript</strong>, <strong className="font-bold">HTML & CSS</strong>,  <strong className="font-bold">ASP.NET</strong>, <strong className="font-bold">C#</strong>, and <strong className="font-bold">Docker</strong> enquanto trabalhava no Portal dao website da <a href="https://www.bio2.pt" className="underline text-headingColor hover:text-highlight">Bio2</a>.
              </li>
              <li className="text-headingColor">
                Continuei a trabalhar nos websites da <a href="https://www.infraestruturasdeportugal.pt" className="underline text-headingColor hover:text-highlight">Infraestruturas de Portugal</a>.
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
          <p className="text-textColor2 text-sm md:text-lg">11 Meses (03/02/2024 até 31/12/2024)</p>
            <ul className="list-disc pl-5 text-sm md:text-xl">
              <li className="text-headingColor">
              <a href="https://www.facebook.com/ADoTPortugal/?checkpoint_src=any" className="underline text-headingColor hover:text-highlight">ADoT</a> é uma organização sem fins lucrativos que tem como objetivo ajudar jovens estudantes a desenvolver as suas competências na área da informática. O meu trabalho foi ensinar jovens a programar usando <strong className="font-bold">Scratch</strong>, <strong className="font-bold">C</strong>, <strong className="font-bold">Python</strong> e <strong className="font-bold">Java</strong>.
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
      <h2 id="projects" className="text-2xl md:text-5xl pt-5 md:pt-10 font-bold text-textColor text-center">Projetos</h2>

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
                
                <p className="text-headingColor text-sm md:text-lg">Este projeto foi criado para ser uma aplicação de uso pessoal. Foi feito em 2024/2025 com <strong className="font-bold">Angular</strong> para o Front-End e Back-End, com <strong className="font-bold">Capacitor</strong> para transformar numa App Android e <a href="https://www.themoviedb.org/" className="underline text-headingColor hover:text-highlight">The Movie Database</a> para API.</p>                
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

                <a className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-highlight inline-flex items-center" href="https://github.com/JoaoMaio/WatchList-Wizard">Saber Mais
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
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
              
              <p className="text-headingColor text-sm md:text-lg">Este projeto foi criado em 2022, usando <strong className="font-bold">Flutter</strong> para a App, <strong className="font-bold">Python</strong> como um Servidor API que extraía a informação dos websites necessários e <strong className="font-bold">Firebase</strong> como Base de Dados.</p>
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
              <a className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-highlight inline-flex items-center" href="https://github.com/JoaoMaio/Gameify">Saber Mais
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
          </div>
        </div>

        {/* Side Projects*/}
        <div className="bg-background2 p-5 flex flex-col items-center border-b mb-10 border-borderColor rounded-lg max-w-9/10 lg:w-[400px] lg:h-[450px]">

          <div className="h-[80px] w-[80px] inline-flex items-center justify-center flex-shrink-0">
            <img className="h-full w-full object-contain" src="/folder.png" alt="SideProjects" />
          </div>

          <div className="relative flex-grow text-center mt-6 sm:mt-0">
              <h1 className="text-textColor font-bold text-xl md:text-2xl">Projetos Secundários</h1>
              <h3 className="text-textColor2 font-bold text-sm md:text-lg mb-3">Coleção de códigos </h3>  
              
              <p className="text-headingColor text-sm md:text-lg">Este repositório de github é uma coleção de scripts em Python e pequenos projetos que construí durante o meu tempo livre. É uma mistura de ferramentas práticas, experiências pessoais e materiais de ensino (que foram usados durante o meu tempo na <a className="underline text-headingColor hover:text-highlight" href="#adot">ADoT</a>).
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
              <a className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-highlight inline-flex items-center" href="https://github.com/JoaoMaio/Side-Projects">Saber Mais
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
          </div>
        </div>

      </section>

      {/* Divider */}
      <div className="flex flex-col items-center justify-center">
        <hr className="w-10 border-t-2 border-gray-300 my-3 md:my-8"></hr>
      </div>

      {/* ----------------------------------------------------Currently Learning------------------------------------------------------- */}

      {/* Section Title */}
      <h2 id="currentLearning" className="text-2xl md:text-5xl pt-5 md:pt-10  font-bold text-textColor text-center"> Atualmente a Aprender </h2>

      {/* Currently Learning Section */}
      <section className="flex flex-col gap-6 items-center justify-center p-8 w-full max-w-[900px] mx-auto">
        <code className="text-lg inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span className="flex gap-4 text-sm md:text-base">
                <span className="shrink-0 text-textColor2">$</span>
                <span className="flex-1">
                    <span> Rust🦀-</span>
                    <span className="text-headingColor"> A trabalhar num projeto pessoal com a biblioteca Iced.rs</span>
                </span>
            </span>
        </code>
        <code className="text-lg inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
            <span className="flex gap-4 text-sm md:text-base">
                <span className="shrink-0 text-textColor2">$</span>
                <span className="flex-1">
                    <span> Godot🎮-</span>
                    <span className="text-headingColor"> A trabalhar num pequeno jogo para aprender as bases </span>
                </span>
            </span>
        </code>
      </section>

    </div>
  );
}