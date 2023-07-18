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
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container className="relative clipPage scrollbar-hide ">
      <Head>
        <title>WavuLabs</title>
      </Head>
      <Navbar />
      <Main />
      <Services />
      <About />
      <Projects />
      <Founders />
      <Customers />
      <Contact />
      <Footer />
    </Container>
  );
}
