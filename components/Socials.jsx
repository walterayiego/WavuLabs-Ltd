import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";

function Socials({styles}) {
  return (
    <div className={`flex flex-row py-4 ${styles}`}>
      <a
        href="https://www.linkedin.com/in/wavu-labs-bba2a2253"
        target="_blank"
        rel="noreferrer"
      >
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaLinkedinIn />
        </div>
      </a>

      <a href="https://github.com/WavuLabs" target="_blank" rel="noreferrer">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaGithub />
        </div>
      </a>
      <a href="https://github.com/WavuLabs" target="_blank" rel="noreferrer">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <AiOutlineMail />
        </div>
      </a>
      <a href="https://discord.gg/DaWkYWFP">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaDiscord />
        </div>
      </a>
    </div>
  );
}

export default Socials;
