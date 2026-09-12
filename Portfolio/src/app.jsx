import React from 'react';
import Navbar from './Comp/navbar.jsx';
import Hero from './Comp/hero.jsx';
import About from './Comp/about.jsx';
import Services from './Comp/services.jsx';
import HowIWork from './Comp/howiwork.jsx';

const app = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowIWork />
    </>
  );
};

export default app;
