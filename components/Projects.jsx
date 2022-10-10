import Image from "next/image";
import Link from "next/link";
import React from "react";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";
import MetaWild from "../public/assets/MetaWild.png";
import Election from "../public/assets/projects/Election.jpeg";
const Projects = () => {
  return (
    <div id="projects" className={`w-full clipPage `}>
      <div className={`relative max-w-[1240px] px-2 py-16 `}>
        <div className=" flex items-center">
          <div className="absolute top-14 left-2 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 left-60 w-60 h-60 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
          <div className="absolute top-1/4 right-10 w-60 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-7 right-60 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className={``}>
          <p className={`text-xl headings tracking-widest uppercase `}>
            Projects
          </p>
          <h2 className="text-center py-4">What we&apos;ve Built</h2>
          
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
            projectUrl="/"
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
            projectUrl="/"
            tech="Next JS"
            animeStyle="slide_right"
          />
          <div className=" flex flex-col text-center py-3 mb-4 font-semibold text-2xl">
            <p>For more visit our
            <Link href="">
              <a className=" text-yellow-800 font-semibold text-2xl "> Github Page</a>
            </Link>
            
            
            </p>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
