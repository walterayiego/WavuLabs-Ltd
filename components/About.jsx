import React from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.3 });
  return (
    <div
      
      id="About"
      className="relative w-full h-fit p-2 items-center py-16 text-center"
    >
      <div className="absolute top-10 left-2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply    filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 left-56 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply    filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply    filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-7 right-60 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply    filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div
        className={`relative justify-center ${
          inView2 ? "fade_in" : "opacity-0"
        }`}
      >
        <div ref={ref2} className=" sm:px-20  justify-center">
          <h2 className="text-xl headings tracking-widest uppercase"> ABOUT</h2>
          <h2 className="py-4 items-center text-center">Who Are We?</h2>

          <div className=" relative p-5 bg-white rounded-lg items-center justify-center">
            <h3 className="uppercase text-xl font-semibold text-center tracking-widest text-[#5651e5]">
              Our Vision
            </h3>
            <p className="py-2 text-gray-600">
              <br></br>
              To be at the forefront of building the next generation of software
              products and services in the region as a driver of the fourth
              industrial revolution.
            </p>
            <div className="relative flex justify-center  items-center">
              <div className=" p-5 w-3/4 h-6 rounded-lg bg-gradient-to-r from-yellow-500 to-pink-500 filter blur-xl opacity-50 "></div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>

          <div className=" relative p-5 bg-white rounded-lg items-center justify-center">
            <h3 className="uppercase text-xl font-semibold text-center tracking-widest text-[#5651e5]">
              Our Mission
            </h3>
            <p className="py-2 text-gray-600">
              <br></br>
              Our core mission is to be at the driver&apos;s seat of the fourth
              industrial revolution in the region bringing the best of the web,
              data analytics, distributed systems and the token economy together
              into the most balanced and sensible blend that will give our
              products an edge into the region&lsquo;s future through a robust
              network of innovative platforms that capture, revive and
              ameliorate all that has been left behind by the past tech and
              industrial revolutions.
            </p>
            <div className="relative flex justify-center  items-center">
              <div className="p-5  w-3/4 h-6 rounded-lg  bg-gradient-to-r from-purple-500 to-cyan-500 filter blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
