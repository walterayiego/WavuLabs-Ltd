import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import LogoTransparent from '../public/assets/Transparent.png';
import Image from "next/image";
const Footer = () => {
  return (
    <footer
      id="footer"
      className=" relative bottom-0  flex  w-full h-96 justify-center items-end bg-[#1f2937] text-white"
    >
      <div className="wave bg-opacity-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill bg-opacity-0"
          ></path>
        </svg>
      </div>

      <div className="flex  flex-col pb-10 relative max-w-full bottom-0 gap-4  ">
        {/* CREATING THE LOGO DIV */}
        <div className=" flex justify-center items-center grid-cols-3 gap-1 pb-2">
          <div className=" flex justify-center">
            <Image src={LogoTransparent} alt="" width="120px" height="50px" />
          </div>
          <div className="row-span-3 ">
            <h3 className="text-2xl">WavuLabs</h3>
            <h3 className="text-2xl">We Wav u</h3>
          </div>
        </div>
        {/* CREATING THE LOGO DIV END*/}

        <span className="">
          Copyright by {new Date().getFullYear()} All rights reserved
        </span>
        <div className="flex  h-16 items-center justify-between max-w-[330px] m-auto p-4">
          <a
            href="https://www.linkedin.com/in/clint-briley-50056920a/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href="https://github.com/fireclint"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
          </a>
          <Link href="/#contact">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </Link>
          <Link href="/resume">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
