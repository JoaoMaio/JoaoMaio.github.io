'use client';

import { useState } from "react";

export default function EmailCopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("joaomaio.work@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className="relative inline-block">
      <a
        className="text-gray-700 hover:text-orange-600 cursor-pointer"
        aria-label="Copy Joao Maio's email to clipboard"
        onClick={handleCopyEmail}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0,0,256,256"
        >
          <g
            fill="#7f5af0"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
          >
            <g transform="scale(10.66667,10.66667)">
              <path d="M4.5,3c-1.92119,0 -3.5,1.57881 -3.5,3.5v11.5c0,1.64497 1.35503,3 3,3h4v-7.32617l4,3.125l4,-3.125v7.32617h4c1.64497,0 3,-1.35503 3,-3v-11.5c0,-1.92119 -1.57881,-3.5 -3.5,-3.5c-0.74988,0 -1.51745,0.24226 -2.15625,0.74219l-5.34375,4.16992l-5.34375,-4.16992h-0.00195c-0.63849,-0.49911 -1.40503,-0.74219 -2.1543,-0.74219zM4.5,5c0.33012,0 0.64262,0.09829 0.92383,0.31836l0.57617,0.44922v3.80664l-3,-2.3418v-0.73242c0,-0.84081 0.65919,-1.5 1.5,-1.5zM19.5,5c0.84081,0 1.5,0.65919 1.5,1.5v0.73242l-3,2.3418v-3.80664l0.57617,-0.44922c0.2812,-0.22007 0.5937,-0.31836 0.92383,-0.31836zM8,7.32813l4,3.12109l4,-3.12109v3.80859l-4,3.125l-4,-3.125zM3,9.76953l3,2.3418v6.88867h-2c-0.56503,0 -1,-0.43497 -1,-1zM21,9.76953v8.23047c0,0.56503 -0.43497,1 -1,1h-2v-6.88867z"></path>
            </g>
          </g>
        </svg>
      </a>
      {copied && (
        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xl px-2 py-1 rounded">
          Copied!
        </span>
      )}
    </div>
  );
}