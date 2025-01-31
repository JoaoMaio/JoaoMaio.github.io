'use client';

import "../globals.css";
import TypewriterEffect from "@/components/typewriter";
import { ReactNode } from 'react';
import Link from "next/link";

type Props = {
  children: ReactNode;
};

export default function RootLayout({children }: Props) {

  return (
      <div>

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
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#workexp" className="text-center block py-2 text-white hover:text-blue-500">
                  Experiência
                </a>
              </li>
              <li>
                <a href="#projects" className="block py-2 text-white hover:text-blue-500">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#currentLearning" className="text-center block py-2 text-white hover:text-blue-500">
                Atualmente a Aprender
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 text-white hover:text-blue-500">
                  Contactos
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Language Switcher */}
        <div className="fixed bottom-0 right-0 m-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <span className="ms-3 text-lg font-medium text-gray-900 dark:text-gray-300">
              <Link href="/en">
                <img src="/en.png" alt="English" className="w-10 h-10 inline-block mr-2"  />
                <span className="text-white hidden md:inline">English</span>
              </Link>
            </span>
          </label>
        </div>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="text-center py-4 text-white z-50">

          {/* Contact Section */}
          <section id="contact" className="flex items-center justify-center p-8 max-w-3/4 mx-auto">
            <div className="flex items-center gap-6">
              {/* Linkedin */}
              <a className="text-gray-700 hover:text-orange-600" aria-label="Visit Joao Maio LinkedIn" href="https://www.linkedin.com/in/joaomaio04/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                  <g fill="#7f5af0" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(10.66667,10.66667)"><path d="M5,3c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM5,5h14v14h-14zM7.7793,6.31641c-0.857,0 -1.37109,0.51517 -1.37109,1.20117c0,0.686 0.51416,1.19922 1.28516,1.19922c0.857,0 1.37109,-0.51322 1.37109,-1.19922c0,-0.686 -0.51416,-1.20117 -1.28516,-1.20117zM6.47656,10v7h2.52344v-7zM11.08203,10v7h2.52344v-3.82617c0,-1.139 0.81264,-1.30273 1.05664,-1.30273c0.244,0 0.89649,0.24473 0.89649,1.30273v3.82617h2.44141v-3.82617c0,-2.197 -0.97627,-3.17383 -2.19727,-3.17383c-1.221,0 -1.87226,0.40656 -2.19726,0.97656v-0.97656z"></path></g></g>
                </svg>
              </a>
              {/* Github */}
              <a className="text-gray-700 hover:text-orange-600" aria-label="Visit Joao Maio Github" href="https://github.com/JoaoMaio" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                  <g fill="#7f5af0" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(10.66667,10.66667)"><path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path></g></g>
                </svg>
              </a>

              {/* Email */}
              <a className="text-gray-700 hover:text-orange-600" aria-label="Send Email to Joao Maio" href="mailto:joaomaio.work@gmail.com" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                  <g fill="#7f5af0" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(10.66667,10.66667)"><path d="M4.5,3c-1.92119,0 -3.5,1.57881 -3.5,3.5v11.5c0,1.64497 1.35503,3 3,3h4v-7.32617l4,3.125l4,-3.125v7.32617h4c1.64497,0 3,-1.35503 3,-3v-11.5c0,-1.92119 -1.57881,-3.5 -3.5,-3.5c-0.74988,0 -1.51745,0.24226 -2.15625,0.74219l-5.34375,4.16992l-5.34375,-4.16992h-0.00195c-0.63849,-0.49911 -1.40503,-0.74219 -2.1543,-0.74219zM4.5,5c0.33012,0 0.64262,0.09829 0.92383,0.31836l0.57617,0.44922v3.80664l-3,-2.3418v-0.73242c0,-0.84081 0.65919,-1.5 1.5,-1.5zM19.5,5c0.84081,0 1.5,0.65919 1.5,1.5v0.73242l-3,2.3418v-3.80664l0.57617,-0.44922c0.2812,-0.22007 0.5937,-0.31836 0.92383,-0.31836zM8,7.32813l4,3.12109l4,-3.12109v3.80859l-4,3.125l-4,-3.125zM3,9.76953l3,2.3418v6.88867h-2c-0.56503,0 -1,-0.43497 -1,-1zM21,9.76953v8.23047c0,0.56503 -0.43497,1 -1,1h-2v-6.88867z"></path></g></g></svg>
              </a>

              {/* Telegram */}
              <a className="text-gray-700 hover:text-orange-600" aria-label="Visit Joao Maio Telegram" href="https://t.me/joaomaio04" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                  <g fill="#7f5af0" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(10.66667,10.66667)"><path d="M20.57227,3.01172c-0.33237,-0.03525 -0.69364,0.01666 -1.05664,0.16016c-0.45,0.177 -7.50122,3.14316 -14.07422,5.91016l-2.17188,0.91406c-0.841,0.341 -1.26562,0.89558 -1.26562,1.64258c0,0.523 0.22134,1.23239 1.27734,1.65039l3.66602,1.46875c0.317,0.951 1.05328,3.15909 1.23828,3.74609c0.11,0.348 0.38784,1.22469 1.08984,1.42969c0.144,0.049 0.29427,0.07422 0.44727,0.07422c0.443,0 0.76197,-0.20617 0.91797,-0.32617l2.33008,-1.9707l2.83008,2.61719c0.109,0.111 0.68594,0.67188 1.46094,0.67188c0.967,0 1.70051,-0.80498 1.85352,-1.58398c0.083,-0.427 2.8125,-14.12895 2.8125,-14.12695c0.245,-1.099 -0.19552,-1.66911 -0.47852,-1.91211c-0.2425,-0.2075 -0.54458,-0.32998 -0.87695,-0.36523zM19.91016,5.17188c-0.377,1.89 -2.43214,12.20636 -2.74414,13.69336l-4.13672,-3.82617l-2.80664,2.37695l0.77734,-3.04102c0,0 5.36255,-5.42814 5.68555,-5.74414c0.26,-0.253 0.31445,-0.34169 0.31445,-0.42969c0,-0.117 -0.06022,-0.20117 -0.19922,-0.20117c-0.125,0 -0.29477,0.11978 -0.38477,0.17578c-1.14335,0.71282 -6.01192,3.48646 -8.4082,4.84961l-3.47656,-1.38867l1.6875,-0.70899c4.299,-1.81 11.95541,-5.03386 13.69141,-5.75586z"></path></g></g>
                </svg>
              </a>
            </div>
          </section>

          &copy; {new Date().getFullYear()} Joao Maio Portfolio. All rights reserved.
        </footer>
      </div>
  );
}
