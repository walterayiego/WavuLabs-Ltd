import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LogoTransparent from "../public/assets/Transparent.png";
import Socials from "./Socials";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [VisibilityNavList, setVisibilityNavList] = useState("hidden");
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [btnShadow, setBtnShadow] = useState("");
  const [showImage, setShowImage] = useState("hidden");
  const [hideLogo, setHideLogo] = useState("");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg(" sm:bg-white/50 ");
        setVisibilityNavList("block");
        setShowImage("block");
        setHideLogo("hidden");
      } else {
        setShadow(false);
        setNavBg("");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={`${navBg} sticky top-0 w-full h-[12%] z-[100] p-2
        ${shadow && " shadow-xl duration-300"}`}
    >
      <div className="flex flex-row justify-between items-center w-full h-full">
        <div className={`slide_left ease-in`}>
          <Link href="/">
            <Image
              src={LogoTransparent}
              alt="/"
              width="125"
              height="50"
              className={`cursor-pointer ${showImage}  `}
            />
          </Link>
        </div>
        <div className={`${VisibilityNavList} ease-in duration-100`}>
          <ul
            style={{ color: `${linkColor}` }}
            className={`hidden md:flex space-x-3`}
          >
            <li className={`nav-list`}>
              <Link href="/#Home">Home</Link>
            </li>
            <li className={` nav-list`}>
              <Link href="/#Services">Services</Link>
            </li>
            <li className={` nav-list`}>
              <Link href="/#About">About</Link>
            </li>
            <li className={` nav-list`}>
              <Link href="/#projects">Projects</Link>
            </li>
            <li className={` nav-list`}>
              <Link href="/#Customers">Customers</Link>
            </li>
            <li className={`ml-10 text-sm uppercase hover:border-b nav-list`}>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav && "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 opacity-0"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <Image src={LogoTransparent} width="87" height="35" alt="/" />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%]">Let&#39;s build!</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#Services">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Services
                </li>
              </Link>
              <Link href="/#About">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#Customers">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Customers
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <Socials styles="justify-center gap-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
