import React from 'react';

const Hero = () => {
  return (
    <>
      <header className=' h-screen'>
        <section className='px-8 py-12 md:px-12 md:py-20 lg:px-32 lg:py-24 '>
          <div className=''>
            <div className='flex flex-col gap-3 md:max-w-200'>
              <div className='flex gap-2 items-center'>
                <span className='bg-[var(--blue-PRY)] w-3 h-3 rounded-full'></span>
                <h1 className='font-medium text-base uppercase text-[var(--mainText)]'>
                  Open to opportunities
                </h1>
              </div>
              <h1 className='font-bold text-6xl lg:text-7xl text-[var(--mainText)] leading-tight  tracking-wide leading-none'>
                Creating{' '}
                <span className='text-[var(--accent)]'>Web Experience</span>{' '}
                That Drives Results
              </h1>
              <p className='text-[var(--mainText)] text-lg font-medium leading-tight max-w-160'>
                I build modern, high-performing websites that help businesses
                stand out, connect with their audience, and achieve their goals.
              </p>
              <div className='flex gap-4 items-center mt-4'>
                <a
                  href='#contact'
                  className='px-4 py-2 bg-[var(--blue-PRY)] text-white font-bold rounded-md hover:bg-[var(--accent)] transition-all duration-300 hover:-translate-y-1'
                >
                  Get Started
                </a>
                <a
                  href='#projects'
                  className='px-4 py-2  text-[var(--mainText)] font-bold rounded-md border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--navbar)]'
                >
                  View Projects <i className='fa-solid fa-arrow-right ml-2'></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Hero;
