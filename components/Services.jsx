import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Block2 from "../public/assets/Icons/Block2.png";
import Block3 from "../public/assets/Icons/Block3.png";
import Maintenance from "../public/assets/Icons/Maintenance.png";
import DigitalMarketing from "../public/assets/Icons/DigitalMarketing.png";
import BusinessAnalyticts from "../public/assets/Icons/BusinessAnalyticts.png";
import bootcamp from "../public/assets/Icons/bootcamp.png";
import { Link } from "@nextui-org/react";
const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.8, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      id="Services"
      className="relative w-full h-fit p-2 items-center py-16 text-center"
    >
      <span className="text-center pt-9 font-bold text-2xl headings ">
        SERVICES
      </span>
      <h2 className="py-4">What do we offfer?</h2>

      <div className="absolute top-0 left-2 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      <div className="absolute top-1/4 right-10 w-60 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-7 -right-1/4 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className=" gap-y-6 mx-2 px-1 sm:px-10 ">
        <div
          ref={ref}
          className="sm:grid grid-cols-3 bg-slate-200 scale-105 drop-shadow-2xl  rounded-xl py-7"
        >
          <div className={`col-span-2  ${inView ? "slide_left" : "opacity-0"}`}>
            <h3 className="uppercase text-2xl text-[#5651e5]">
              Software Development
            </h3>
            {/* <h2 className="py-4">What do we offfer</h2> */}
            <p className="py-2 text-gray-600">
              We build custom software solutions for your business.
            </p>
            <p className="py-4 px-4 text-gray-600">
              General or bespoke systems, applications or websites including
              fintech applications, dapps, APIs and business management systems
              for small scale and enterprise level. With a large team and a
              robust tech stack,
            </p>
            <p>We can build anything!</p>
          </div>
          {/* image div */}
          <div
            className={`w-full h-full ${
              inView ? "fade_in" : "opacity-0"
            } shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300`}
          >
            <Image
              src={Block2}
              className="w-full h-full rounded-xl object-cover"
              alt="/"
            />
          </div>
        </div>

        {/* Service 2 */}
        <div ref={ref2} className=" my-7 sm:grid grid-cols-3 gap-8 py-7">
          <div
            className={`${
              inView2 ? "fade_in" : "opacity-0"
            } w-full h-full shadow-xl shadow-gray-400 rounded-xl flex items-center 
                justify-center p-4 hover:scale-105 ease-in duration-300`}
          >
            <Image src={Block3} className="rounded-xl h-full" alt="/" />
          </div>

          {/* content div */}
          <div
            className={` my-4 col-span-2 ${
              inView2 ? "slide_right" : "opacity-0"
            }`}
          >
            <h3 className=" uppercase text-2xl text-[#4f1669]">Consultancy</h3>
            {/* <h2 className="py-4">What do we offfer</h2> */}
            <p className="py-2 text-gray-600">
              Expert advice on your business needs.
            </p>
            <p className="py-2 text-gray-600">
              We offer IT consultancy; which includes both advisory and
              implementation services. Data Analytics is already a core company
              function cutting across most of our projects but our expertise
              spans across Software Management, Enterprise Resource
              Planning(ERP), Systems Integration & IT security, strategy,
              implementation and architecture.
            </p>
          </div>
        </div>
        {/* Service 3 */}

        <div
          ref={ref3}
          className=" sm:grid grid-cols-3 my-6 bg-slate-200 scale-105 drop-shadow-2xl rounded-xl py-7"
        >
          <div
            className={` relative grid col-span-2 ${
              inView3 ? "slide_left" : "opacity-0"
            }`}
          >
            <h3 className="uppercase text-2xl text-[#5651e5]">Maintenance</h3>
            <p className="py-2 text-gray-600">
              Fully serviced IT support and maintenance.
            </p>
            {/* <h2 className="py-4">What do we offfer</h2> */}
            <p className=" py-2 text-center text-gray-600">
              We offer both software and hardware maintenance support for all
              types of businesses, organizations or firms. These include:{" "}
            </p>
            <div className=" flex justify-center ">
              <ol className=" ml-9 text-left list-disc ">
                <li>Quality customer care</li>
                <li>Remote and on-site maintenance</li>
                <li>Strategic repair and replacements</li>
                <li>Easy to implement and understand solutions</li>
                <li>Warranty services</li>
              </ol>
            </div>
          </div>
          <div
            className={`${
              inView3 ? "fade_in" : "opacity-0"
            } w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 
            hover:scale-105 ease-in duration-300`}
          >
            <Image src={Maintenance} className="rounded-xl h-full" alt="/" />
          </div>
        </div>

        {/* Other Services */}
        <div className="w-full p-2">
          <div className=" mx-auto grid grid-col justify-center items-center h-fit">
            <h4 className="text-xl tracking-widest uppercase headings leading-tight text-center">
              Other services
            </h4>

            <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
              {/* content */}
              <div className=" shadow-xl rounded-xl hover:scale-105 ease-in duration-300 p-3 h-full">
                <div className="grid grid-rows-3 gap-4 justify-start items-center">
                  <div className="">
                    <Image
                      src={BusinessAnalyticts}
                      width="64px"
                      height="64px"
                      alt="/"
                    />
                  </div>
                  <div className="grid grid-col row-span-2 items-center justify-start">
                    <h3 className="uppercase text-xl tracking-widest text-[#5651e5]">
                      BUSINESS ANALYTICS
                    </h3>
                    <p className={`text-gray-600 text-lg py-2`}>
                      Understand and optimize your business
                    </p>
                    <p className="text-gray-600 text-center">
                      Through data analysis, we bring deep learning tools and AI
                      to grow your business to the next level. Understanding
                      customer behaviour and mapping said behaviour helps us
                      create incentive structures for your customers
                      personalizing their experience and establishing their
                      loyalty.{" "}
                    </p>
                    <p>
                      A universal product for the aforementined service is at
                      its core.
                    </p>
                    <p className="text-lg font-semibold">
                      Become an early adopter!
                    </p>
                  </div>
                </div>
              </div>

              <div className=" shadow-xl rounded-xl hover:scale-105 ease-in duration-300 p-3 h-full  bg-white/30">
                <div className="grid grid-rows-3 gap-4 justify-start items-center">
                  <div className=" row-span-1 my-6">
                    <Image
                      src={DigitalMarketing}
                      width="64px"
                      height="64px"
                      alt="/"
                    />
                  </div>
                  <div className="grid grid-col row-span-2 justify-start">
                    <h3 className="uppercase text-xl tracking-widest text-[#5651e5]">
                      DIGITAL MARKETING
                    </h3>
                    <p className={`text-gray-600 text-lg py-2`}>
                      Have your radiant online presence;
                    </p>
                    <p className="text-gray-600 text-center">
                      With the right digital marketing strategy, you can reach
                      your target audience. With our tools and comprehensive
                      digital marketing network of partners, we have the
                      wherewithal to help you dominate the online world!
                    </p>
                    <p className=" my-3 text-lg font-semibold">
                      Glow and Grow!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* last div */}

            <div className=" mt-10 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white">
              <div className="grid grid-rows-3 gap-4 justify-start items-center">
                <div className="">
                  <Image src={bootcamp} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col row-span-2 items-center justify-start">
                  <h3 className="uppercase text-xl tracking-widest text-[#5651e5]">
                    BOOTCAMP AND TRAINING
                  </h3>
                  <p className={`text-gray-600 text-lg py-2`}>
                    Learn and grow with us
                  </p>
                  <p className="text-gray-600 text-center">
                    We offer bootcamps and training services for people of all
                    ages. We aim to nurture and build talent in various fields
                    but mainly focused on web development, web3, graphics and
                    animation and mobile application development.{" "}
                  </p>
                  <p>
                    Drilled by our devs to have the impetus to even supplant
                    them.
                  </p>
                  <div className="flex flex-row justify-center items-start space-x-2">
                    <p>Check out our latest</p>
                    <a
                      // https://pdfhost.io/edit?doc=0918362b-a3ac-413c-9386-38d28f2fcdcc
                      href="https://pdfhost.io/v/sQnDyjJMu_BootCamp"
                      className="text-lg text-[#5651e5]"
                    >
                      BootCamp
                    </a>
                  </div>

                  <p className="text-lg font-semibold">
                    Talk is cheap.Show me the code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" h-16 bottom-0 hue-rotate-15 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-25"></div> */}
    </div>
  );
};

export default Services;
