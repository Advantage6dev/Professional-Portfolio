import React from 'react';
import Navbar from './Comp/navbar.jsx';
import Hero from './Comp/hero.jsx';
import About from './Comp/about.jsx';
import Services from './Comp/services.jsx';
import HowIWork from './Comp/howiwork.jsx';
import Projects from './Comp/projects.jsx';
import FromTheBuild from './Comp/fromthebuild.jsx';
import FAQ from './Comp/faq.jsx';
import BackToTop from './Comp/topbutton.jsx';
import Contact from './Comp/contact.jsx';

const app = () => {
  return (
    <>
      <BackToTop />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowIWork />
      <Projects />
      <FromTheBuild />
      <FAQ />
      <Contact />
    </>
  );
};

export default app;
