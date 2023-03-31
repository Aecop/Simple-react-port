
import React from "react";

import Navbar from './components/navbar/Navbar';
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-6 ">
        <Navbar />
      <div className="max-w-screen-xl mx-auto px-16">

          <Banner />
          <Features />
          <Projects />
          <Resume />
          <Contact />
      </div>
    </div>
  );
}

export default App;
