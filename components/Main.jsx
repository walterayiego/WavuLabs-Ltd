import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import LogoTransparent from "../public/assets/Transparent.png";
import LogoTransparentLeft from "../public/assets/TransparentLeft.png";
import LogoTransparentRight from "../public/assets/TransparentRight.png";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const [startAnimation, setStartAnimation] = useState("fixed");
  const [hideLogo, setHideLogo] = useState("");
  const [showLetsBuild, setShowLetsBuild] = useState("hidden ");
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 500) {
        setStartAnimation("hidden");
      }
      if (window.scrollY >= 150) {
        setHideLogo("fade_out");
        setShowLetsBuild("block");
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      ref={ref}
      id="Home"
      className="relative w-screen h-screen text-center clipPage flex justify-center "
    >
      {/* PAGE LOADING ANIMATION */}
      <div
        className={` ${startAnimation} flex items-center justify-center h-screen w-screen`}
      >
        <div className={` relative h-1/3 w-3/4 wavulogo  `}></div>
      </div>

      {/* BUBBLES ANIMATION */}
      <div className="max-w-[1240px] w-full h-top h-full p-2 px-5 flex justify-center items-center ">
        <div className="fixed top-0 left-2 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="fixed top-0 left-60 w-60 h-60 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000"></div>
        <div className="fixed top-1/4 right-1/4 w-60 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="fixed -bottom-7 right-60 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        {/* <div className={` absolute h-1/3 w-3/4 wavulogo `} ></div> */}
        <div className=" flex flex-col justify-between sm:gap-5 ease-in">
            {/* Image PART */}
          <div className={` flex flex-row justify-center ${hideLogo}`}>
            {/* Image left */}
            <div className="mergeLeft">
              <Image
                src={LogoTransparentLeft}
                alt="/"
                width="200"
                height="100"
                className={`cursor-pointer slide_left `}
              />
            </div>
            {/* Image Right */}
            <div className=" ease-in mergeRight">
              <Image
                src={LogoTransparentRight}
                alt="/"
                width="200"
                height="100"
                className={`cursor-pointer `}
              />
            </div>
          </div>
          <p className= {`sm:hideAtStart ${showLetsBuild} opacity-0 sm:opacity-100 ease-in uppercase text-sm tracking-widest text-gray-600`}>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <div className=" hideAtStart flex justify-center">
            <div className=" w-fit text-gray-700 py-1 sm:py-2 font-bold text-3xl sm:text-5xl md:text-6xl font-[Raleway]">
              <p data-text=" WavuLabs" className="changeColor typewriter ">
                Welcome to
              </p>
            </div>
          </div>
          <div className=" hideAtStart ">
            <h1 className=" text-2xl sm:text-3xl  md:text-4xl py-2 sm:py-0 text-gray-700">
              A Software Development & IT Company
            </h1>
          </div>

          <p className=" hideAtStart py-3 text-gray-600 sm:max-w-[70%] m-auto">
            Building next generation technology solutions for web3, mobile,
            fintech, data analytics, machine learning and cybersecurity
            <span className=" hidden sm:inline">
              ; new paradigm applications cutting across all industries and
              sectors.
            </span>
          </p>
          <div className=" hideAtStart flex items-center justify-between max-w-[330px] m-auto py-4">
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
      </div>
    </div>
  );
};

export default Main;
