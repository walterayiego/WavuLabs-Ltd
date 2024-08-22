import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LogoTransparent from "../public/assets/Transparent.png";
import Socials from "./Socials";

const linkColor = "#1f2937";

const Navbar = () => {
  const [navState, setNavState] = useState({
    nav: false,
    showNav: "hidden",
    shadow: false,
    navBg: "",
  });

  const handleNav = () => setNavState({ ...navState, nav: !navState.nav });

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setNavState({
          ...navState,
          shadow: true,
          navBg: "sm:bg-white/50",
          showNav: "block",
        });
      } else {
        setNavState({
          ...navState,
          shadow: false,
          navBg: "",
          showNav: "block",
        });
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  const closeNav = () => setNavState({ ...navState, nav: false });

  const generateListItems = () => {
    const sections = [
      "Home",
      "Services",
      "About",
      "Projects",
      "Customers",
      "Contact",
    ];
    return sections.map((section) => (
      <Link href={`/#${section}`} key={section}>
        <li onClick={closeNav} className="py-4 px-1 text-sm nav-list cursor-pointer">
          {section}
        </li>
      </Link>
    ));
  };

  return (
    <div
      className={`${navState.navBg} sticky top-0 w-full h-[12%] z-[100] p-2 ${
        navState.shadow ? "shadow-xl ease-in-out duration-300" : ""
      }`}
    >
      <div
        className={`flex justify-between items-center w-full h-full ease-in duration-100 ${navState.showNav}`}
      >
        <div className="slide_left ease-in cursor-pointer">
          <Link href="/">
            <Image src={LogoTransparent} alt="/" width="125" height="50" />
          </Link>
        </div>
        <div className="flex flex-row justify-end ease-in duration-100 w-1/2">
          <ul
            style={{ color: linkColor }}
            className="hidden md:flex md:justify-between md:flex-1"
          >
            {generateListItems()}
          </ul>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            style={{ color: linkColor }}
            className="md:hidden cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          navState.nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            navState.nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 opacity-0"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={LogoTransparent} width="87" height="35" alt="/" />
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
            <ul className="uppercase">{generateListItems()}</ul>
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
