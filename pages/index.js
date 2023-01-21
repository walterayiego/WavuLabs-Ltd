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
    <div className="clipPage">
      <Head>
        <title>WavuLabs</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building 
          (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <Services />
      <About />
      <Projects />
      <Customers />
      <Founders/>
      <Contact />
      <Footer />
    </div>
  );
}
