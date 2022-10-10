import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import LogoTransparent from '../public/assets/Transparent.png';
import { useInView } from 'react-intersection-observer';

const Navbar = (  ) => {
  const [nav, setNav] = useState(false);
  const [VisibilityNavList, setVisibilityNavList] = useState("hidden");
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const [btnShadow, setBtnShadow] = useState('');
  const [showImage, setShowImage] = useState("hidden");
  const [hideLogo, setHideLogo] = useState("");
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg('bg-gradient-to-r from-purple-500 via-yellow-300 to-cyan-200 ');
        setBtnShadow('');
        setVisibilityNavList("block");
        setShowImage('block');
        setHideLogo('hidden');
      } else {
        setShadow(false);
        setNavBg('');
        setBtnShadow('drop-shadow-2xl shadow-red-200 hover:scale-110 ');
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      // style={{ backgroundColor: `${navBg}` }}
      className={ ` ${navBg} 
        ${shadow
          ? 'fixed w-full h-16 bg-transparent shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-16 bg-transparent z-[100]'}
          hideAtStart `}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a className={``}>
           <div className={`slide_left ${showImage} ease-in`}>
            <Image
              src={LogoTransparent}
              alt='/'
              width='125'
              height='50'
              className={`cursor-pointer `}
            />
            </div>
          </a>
        </Link>
        <div className={`${VisibilityNavList} ease-in duration-100`}>
          <ul style={{ color: `${linkColor}` }} className={`hidden md:flex`}>
            <li className={`ml-10 text-sm uppercase hover:border-b ${btnShadow}`}>
              <Link href='/#Home'>Home</Link>
            </li>
            <li className={`ml-10 text-sm uppercase hover:border-b ${btnShadow}`}>
              <Link href='/#Services'>Services</Link>
            </li>
            <li className={`ml-10 text-sm uppercase hover:border-b ${btnShadow}`}>
              <Link href='/#About'>About</Link>
            </li>
            <li className={`ml-10 text-sm uppercase hover:border-b ${btnShadow}`}>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className={`ml-10 text-sm uppercase hover:border-b ${btnShadow}`}>
              <Link href='/#Customers'>Customers</Link>
            </li>
            <li className={`ml-10 text-sm uppercase hover:border-b ${btnShadow}`}>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 opacity-0'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={LogoTransparent}
                    width='87'
                    height='35'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%]'>
                Let&#39;s build!
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#Services'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Services
                </li>
              </Link>
              <Link href='/#About'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#Customers'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Customers
                </li>
              </Link>
              {/* <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link> */}
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/WavuLabs'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
