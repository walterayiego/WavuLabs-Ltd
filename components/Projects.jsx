import Link from "next/link";
import React from "react";
import Garage from "../public/assets/projects/garage.png";
import kgrid from "../public/assets/projects/k-grid.png";
import ProjectItem from "./ProjectItem";
import RoomHike from "../public/assets/projects/RoomHike.png";
import smalltownzebra from "../public/assets/projects/smalltownzebra.png";
import theryze from "../public/assets/projects/theryze.png";
import kladz from "../public/assets/projects/kladz.png";
import creek from "../public/assets/projects/creek.png";
import mrowa from "../public/assets/projects/mrowa.png";

const Projects = () => {
  return (
    <div id="projects" className={`w-full  `}>
      <div className={`relative px-2 py-16 `}>
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
            title="Ryze Network"
            backgroundImage={theryze}
            projectUrl="https://www.theryze.net/"
            tech="React JS"
            animeStyle="slide_left"
          />
          <ProjectItem
            title="Book a Hike"
            backgroundImage={RoomHike}
            projectUrl="https://roomhike.vercel.app/"
            tech="React JS"
            animeStyle="slide_right"
          />
          <ProjectItem
            title="Online Community"
            backgroundImage={Garage}
            projectUrl="https://thegarage-sepia.vercel.app/"
            tech="React JS"
            animeStyle="slide_left"
          />
          <ProjectItem
            title="Smalltownzebra. Blog Website"
            backgroundImage={smalltownzebra}
            projectUrl="https://smalltownzebra.vercel.app/"
            tech="Next JS"
            animeStyle="slide_right"
          />
          <ProjectItem
            title="Ecommerce Website"
            backgroundImage={kladz}
            projectUrl="https://kladz.vercel.app/"
            tech="React JS"
            animeStyle="slide_left"
          />
          <ProjectItem
            title="Outfit Generator"
            backgroundImage={kgrid}
            projectUrl="https://kgrid.vercel.app/"
            tech="Next JS + AI"
            animeStyle="slide_right"
          />
          <ProjectItem
            title="Landing Page"
            backgroundImage={creek}
            projectUrl="https://creek-agency.vercel.app/"
            tech="Vanilla JS"
            animeStyle="slide_left"
          />
          <ProjectItem
            title="Mrowa. Blog Website"
            backgroundImage={mrowa}
            projectUrl="https://mrowa.vercel.app/"
            tech="Vanilla JS"
            animeStyle="slide_right"
          />
          <div className=" flex flex-col text-center py-3 mb-4 font-semibold text-2xl">
            <p>
              For more visit our
              <Link href="">
                <a className=" text-yellow-800 font-semibold text-2xl ">
                  {" "}
                  Github Page
                </a>
              </Link>
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
