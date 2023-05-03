import Head from "next/head";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Customers from "../components/Customers";
import About from "../components/About";
import Founders from "../components/Founders";
import Image from "next/image";

export default function Home() {
  return (
    <div className="clipPage scrollbar-hide ">
      <Head>
        <title>WavuLabs</title>
        <meta
          name="WavuLabs"
          content="
        WavuLabs is a software development company that provides custom IT solutions 
        to startups and enterprises. We are a team of software engineers, designers, and project managers. 
        We build custom software for startups and enterprises. 
          "
          about="WavuLabs is a software development company that provides custom IT solutions 
        to startups and enterprises. We are a team of software engineers, designers, and project managers. 
        We build custom software for startups and enterprises. "
          keywords="Software Development, Software Development Company, 
          Software Development Company in Kenya, Software Development Company in Nakuru, 
          Software Development Company in Africa, Software Development Company in Nairobi,
          Mobile App Development, Mobile App Development Company, Mobile App Development Company in Kenya,
          Mobile App Development Company in Nakuru, Mobile App Development Company in Africa,
          Web Development, Web Development Company, Web Development Company in Kenya,
          Website Development, Website Development Company, Website Development Company in Kenya,
          WavuLabs, WavuLabs Company, WavuLabs Company in Kenya, WavuLabs Company in Nakuru,
          Wavu Labs Company in Africa, Wavu Labs Company in Nairobi, Wavu Labs Company in Nakuru,
          
           "
        />
        <link
          rel="icon"
          href="https://i.ibb.co/Fgf5z6b/Transparent.png"
          type="image/x-icon"
        />
      </Head>
      <Main />
      <Services />
      <About />
      <Projects />
      <Founders />
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
}
