import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import RnD from "./components/RnD";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="page">
        <Hero />
        <About />
        <Services />
        <Projects />
        <RnD />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
