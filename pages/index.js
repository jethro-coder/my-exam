import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Statistics from "./Statistics";
import Gallery from "./Gallery";
import About from "./About";

export default function Home() {
  return (
    <div>

      <About />
      <Hero />
      <Statistics />
      <Gallery />

      
    </div>
  );
}
