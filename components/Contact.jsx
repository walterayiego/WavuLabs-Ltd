import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoTransparent from "../public/assets/Transparent.png";
import Socials from "./Socials";

const Contact = () => {
  return (
    <div id="contact" className=" relative items-center w-full h-fit py-16">
      <p className="text-xl tracking-widest uppercase headings">Contact</p>
      <h2 className="text-center py-2 m-1"> Get In Touch</h2>
      <div className="grid lg:grid-cols-5 items-center m-4 gap-2 ">
        {/* left */}
        <div className="col-span-3 sm:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="lg:p-4 h-full ">
            <div>
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src={LogoTransparent}
                alt="/"
              />
            </div>
            <div>
              <h2 className="py-2"> WavuLabs</h2>
              <p>Software Development company</p>
              <p className="py-4">
                We are available for all kinds of projects. Contact us and
                let&apos;s talk.
              </p>
              {/*View Company Profile */}

              <div className="flex flex-col">
                <p className="">
                  Click here to view
                  <a
                    className="text-lg pl-2 tracking-widest text-[#5651e5]"
                    href="https://pdfhost.io/v/nmvXEZJdG_Dark_Modern_and_Elegant_Company_Profile_Presentation"
                  >
                    Company Profile
                  </a>
                </p>
              </div>
            </div>
            <div>
              <embed src="" />
              <p className="uppercase pt-8">Connect With Us</p>
              <Socials />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form
              action="https://formsubmit.co/wavulabs@gmail.com"
              method="POST"
              // encType='multipart/form-data'
            >
              <input type="hidden" name="_captcha" value="false"></input>

              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                  name="message"
                  required
                ></textarea>
              </div>
              <button className="w-full p-4 text-gray-100 mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
