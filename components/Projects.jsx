import Image from "next/image";
import Link from "next/link";
import React from "react";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";
import MetaWild from "../public/assets/MetaWild.png";
import Election from "../public/assets/projects/Election.jpeg";
const Projects = () => {
  return (
    <div id="projects" className={`w-full `}>
      <div className={`relative max-w-[1240px] mx-auto px-2 py-16 `}>
        <div className=" flex items-center">
          <div className="absolute top-14 left-2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 left-56 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-7 right-60 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className={``}>
          <p className={`text-xl headings tracking-widest uppercase `}>
            Projects
          </p>
          <h2 className="text-center py-4">Snip of what we&apos;ve Built</h2>
          <p>For more visit our github page</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="MetaWild"
            backgroundImg={MetaWild}
            projectUrl="https://www.metawild.org/"
            tech="React JS"
            animeStyle="slide_left"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
            animeStyle="slide_right"
          />
          <ProjectItem
            title="Election Dapp"
            backgroundImg={Election}
            projectUrl="https://github.com/Walt437/election"
            tech="React JS and Solidity"
            animeStyle="slide_left"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
            animeStyle="slide_right"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
