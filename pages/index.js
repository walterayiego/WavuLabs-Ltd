import Head from "next/head";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Customers from "../components/Customers";
import About from "../components/About";
import Founders from "../components/Founders";

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
        />
        <link rel="icon" href="/public/assets/Transparent.png" />
      </Head>
      <Main />
      <Services />
      <About />
      <Projects />
      <Customers />
      <Founders />
      <Contact />
      <Footer />
    </div>
  );
}
