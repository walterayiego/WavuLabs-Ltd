import Head from "next/head";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Customers from "../components/Customers";
import About from "../components/About";
import Founders from "../components/Founders";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="mx-auto relative clipPage scrollbar-hide ">
      <Head>
        <title>WavuLab</title>
        <meta
          name="WavuLab"
          content="
        WavuLabs is a software development company that provides custom IT solutions 
        to startups and enterprises. We are a team of software engineers, designers, and project managers. 
        We build custom software for startups and enterprises. 
          "
        />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/dishi-admin-dev-5e5ca.appspot.com/o/images%2Fmenus%2F1683111301776_My%20project-1%20(1)_adobe_express.png?alt=media&token=128bf9b9-f36d-473c-8ab8-73d32a806949"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      <div className="sm:px-3">
        <Main />
        <Services />
        <About />
        <Projects />
        {/* <Founders /> */}
        <Customers />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
