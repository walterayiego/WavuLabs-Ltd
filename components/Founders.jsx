import React from "react";
import Image from "next/image";
import WaltPassport from "../public/assets/waltpassport.jpg";
import AlvoPassport from "../public/assets/AlvoPassport.jpeg";

function Founders() {
  return (
    <div className="w-full h-fit p-6 ">
      <div className=" mx-auto gird grid-col justify-center items-center h-full">
        <h4 className="text-xl tracking-widest uppercase headings leading-tight text-center p-6">
          Founders
        </h4>

        <div className=" grid grid-cols-1 md:grid-cols-2 h-full items-center gap-8">
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-rows-3 gap-4 justify-start items-center">
              <div className="  m-auto">
                <Image
                  src={WaltPassport}
                  width="100%"
                  height="100%"
                  alt="/"
                  className="ring-offset-purple-300 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col row-span-2 items-center justify-start">
                <h3 className="uppercase text-xl tracking-widest text-[#5651e5]">
                  Walter Ayiego
                </h3>
                <p className={`text-gray-600 text-lg py-2`}>Co-Founder & CEO</p>
                <p className="text-gray-600 text-center">
                  Has a strong background in computer science, with a degree in
                  the field and a certificate in mobile app development.
                  Well-versed in JavaScript using in JavaScript frameworks such
                  as Node.js and using React, and React Native to develop
                  full-stack applications. Experienced with Java.
                </p>
              </div>
            </div>
          </div>

          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-rows-3 gap-4 justify-start items-center">
              <div className="  m-auto">
                <Image
                  src={AlvoPassport}
                  width="100%"
                  height="100%"
                  alt="/"
                  className="ring-offset-purple-300 rounded-full"
                />
              </div>
              <div className="flex flex-col row-span-2 items-center justify-start">
                <h3 className="uppercase text-xl tracking-widest text-[#5651e5]">
                  Alvin Kibet Kwalia
                </h3>
                <p className={`text-gray-600 text-lg py-2`}>Co-Founder & MD</p>
                <p className="text-gray-600 text-center">
                A degree in computer science.
                Strong background in Python Django development. 
                Experience working with Firebase,building 
                robust and scalable applications.
                Familiar with web3 technology, building decentralized applications on Zilliqa and EVM blockchains. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founders;
