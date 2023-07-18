import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import Image from "next/image";
import LogoTransparentLeft from "../public/assets/TransparentLeft.png";
import LogoTransparentRight from "../public/assets/TransparentRight.png";
import { useInView } from "react-intersection-observer";
import Socials from "./Socials";

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
      className="relative w-full h-screen text-center clipPage flex justify-center "
    >
      {/* PAGE LOADING ANIMATION */}
      <div
        className={` ${startAnimation} flex items-center justify-center h-screen w-screen`}
      >
        <div className={` relative h-1/3 w-3/4 wavulogo  `}></div>
      </div>

      {/* BUBBLES ANIMATION */}
      <div className=" w-full h-top h-screen p-2 px-5 flex justify-center items-center ">
        <div className="fixed top-0 left-2 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="fixed top-0 left-60 w-60 h-60 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000"></div>
        <div className="fixed top-1/4 right-1/4 w-60 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="fixed -bottom-7 right-60 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className=" flex flex-col justify-between sm:gap-5 ease-in">
          {/* Image PART */}
          <div
            className={` flex flex-row justify-center items-center ${hideLogo}`}
          >
            <div className="ease-in mergeLeft">
              <Image
                src={LogoTransparentLeft}
                alt="/"
                width={150}
                height={100}
                className={`cursor-pointer slide_left `}
              />
            </div>
            <div className=" ease-in mergeRight">
              <Image
                src={LogoTransparentRight}
                alt="/"
                width={150}
                height={100}
                className={`cursor-pointer `}
              />
            </div>
          </div>

          <p
            className={`sm:hideAtStart ${showLetsBuild} opacity-0 sm:opacity-100 ease-in uppercase text-sm tracking-widest text-gray-600`}
          >
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
          <Socials styles="justify-center gap-3 hideAtStart" />
        </div>
      </div>
    </div>
  );
};

export default Main;
