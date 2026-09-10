import React from 'react';
import Navbar from './Comp/navbar.jsx';
import Hero from './Comp/hero.jsx';
import About from './Comp/about.jsx';
import Services from './Comp/services.jsx';

const app = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
};

export default app;
