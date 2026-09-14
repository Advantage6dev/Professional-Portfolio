import React from 'react';
import Navbar from './Comp/navbar.jsx';
import Hero from './Comp/hero.jsx';
import About from './Comp/about.jsx';
import Services from './Comp/services.jsx';
import HowIWork from './Comp/howiwork.jsx';
import Projects from './Comp/projects.jsx';
import FromTheBuild from './Comp/fromthebuild.jsx';

const app = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowIWork />
      <Projects />
      <FromTheBuild />
    </>
  );
};

export default app;
