import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
