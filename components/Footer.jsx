import React from "react";
import LogoTransparent from "../public/assets/Transparent.png";
import Image from "next/image";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer
      id="footer"
      className=" relative clipPage flex justify-center items-center w-full h-[40vh]  bg-[#1f2937] text-white"
    >
      <div className="wave ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="flex flex-col w-1/2 self-end pb-5 sm:w-1/3 space-y-3 items-center">
        {/* CREATING THE LOGO DIV */}
        <div className="hidden sm:flex  flex-row justify-center items-center w-1/2 h-[10vh] py-2">
          <div className="w-1/2">
            <Image src={LogoTransparent} alt="" className="aspect-auto" />
          </div>
          <div className="px-1">
            <h3 className="text-2xl">WavuLabs</h3>
            <h3 className="text-2xl">We Wav u</h3>
          </div>
        </div>
        {/* CREATING THE LOGO DIV END*/}

        <span className="text-ellipsis">
          Copyright by {new Date().getFullYear()} All rights reserved
        </span>
        <Socials styles="justify-center gap-2 h-16 items-center justify-between max-w-[330px]" />
      </div>
    </footer>
  );
};

export default Footer;
