import React from 'react';
import CircularTechStack from './floatingIcons.jsx';

const Hero = () => {
  return (
    <>
      <header
        id='hero'
        className='h-[calc(100vh-67px)] max-h-[800px] relative bg-[var(--bgCL)] border-b border-[var(--border)] overflow-hidden  md:block animate-slide-in w-full'
      >
        <section className='px-5 pt-14 md:px-12 md:pt-18 lg:px-32 lg:pt-22  relative z-20 mx-auto flex items-center'>
          <div className=''>
            <div className='flex flex-col gap-4 lg:max-w-200'>
              <div className='flex gap-2 items-center'>
                <span className='bg-[var(--blue-PRY)] w-2 h-2 md:w-2.5 md:h-2.5 rounded-full'></span>
                <h1 className='font-medium text-sm uppercase text-[var(--mainText)]'>
                  Open to opportunities
                </h1>
              </div>
              <h1 className='font-bold text-6xl lg:text-7xl text-[var(--mainText)] leading-tighter md:leading-tight  tracking-wide'>
                Creating{' '}
                <span className='text-[var(--accent)]'>Web Experience</span>{' '}
                That Drives Results
              </h1>
              <p className='text-[var(--secoundaryText)] text-base font-medium leading-tight max-w-160'>
                I build modern, high-performing websites that help businesses
                stand out, connect with their audience, and achieve their goals.
              </p>
              <div className='flex gap-4 items-center '>
                <a
                  href='#contact'
                  className='px-4 py-2 bg-[var(--blue-PRY)] text-white font-medium rounded-md hover:bg-[var(--accent)] transition-all duration-300 hover:-translate-y-1 text-base'
                >
                  Get Started
                </a>
                <a
                  href='#projects'
                  className='group inline-flex items-center gap-2 px-4 py-2 text-[var(--mainText)] font-bold rounded-md border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--border)] bg-[var(--navbar)] text-base'
                >
                  <span>View Projects</span>

                  <i className='fa-solid fa-arrow-right transition-transform duration-300 group-hover:rotate-90'></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Tech stack */}
        <div
          className='
       pointer-events-none
       absolute
       right-[-60%]
       top-[45%]
       scale-85 
  
  sm:right-[-40%]
  sm:top-[30%]
  sm:scale-90

  md:right-[-25%]
  md:top-[37%]
  md:scale-100

  /* Desktop */
  lg:right-[-20%]
  lg:top-[28%]
  lg:scale-120
    '
        >
          <CircularTechStack />
        </div>
      </header>
    </>
  );
};

export default Hero;
