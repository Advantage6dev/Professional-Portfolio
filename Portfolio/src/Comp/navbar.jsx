import React, { useState } from 'react';

const navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };
  return (
    <>
      <nav className='border-b-1 border-[var(--border)]  py-3 bg-[var(--navbar)]'>
        <section className='flex justify-between items-center  px-6 sm:px-10 lg:px-12 xl:px-16'>
          <div className='flex gap-5 items-center justify-between'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='relative flex items-center justify-center cursor-pointer md:hidden'
            >
              {' '}
              {/* Menu icon */}{' '}
              <i
                className={`fa-solid fa-bars absolute text-2xl text-[var(--blue-PRY)] transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}`}
              />{' '}
              {/* Close icon */}{' '}
              <i
                className={`fa-solid fa-xmark absolute text-xl text-[var(--blue-PRY)] transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'}`}
              />{' '}
            </button>
            <h2 className='font-semibold text-sm md:text-base bg-white border border-[var(--border)] py-1 lg:py-2 px-[14px] rounded-md cursor-text'>
              Advantage<span className='text-[var(--accent)]'>_dev</span>
            </h2>
          </div>
          <div className='hidden md:flex gap-3 lg:gap-6 items-center justify-between'>
            <a
              href='#projects'
              className='relative font-medium text-lg text-[var(--mainText)]
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-[var(--accent)]
  after:transition-all after:duration-300
  hover:after:w-full'
            >
              Projects
            </a>
            <a
              href='#about'
              className='relative font-medium text-lg text-[var(--mainText)]
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-[var(--accent)]
  after:transition-all after:duration-300
  hover:after:w-full'
            >
              About
            </a>
            <a
              href='#services'
              className='relative font-medium text-lg text-[var(--mainText)]
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-[var(--accent)]
  after:transition-all after:duration-300
  hover:after:w-full'
            >
              Services
            </a>
            <a
              href='#faq'
              className='relative font-medium text-lg text-[var(--mainText)]
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-[var(--accent)]
  after:transition-all after:duration-300
  hover:after:w-full'
            >
              FAQ
            </a>
            <a
              href='#contact'
              className='relative font-medium text-lg text-[var(--mainText)]
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-[var(--accent)]
  after:transition-all after:duration-300
  hover:after:w-full'
            >
              Contact
            </a>
          </div>
          <div className='flex gap-1.5 lg:gap-3 items-center'>
            <button
              onClick={toggleTheme}
              aria-label='Toggle dark mode'
              className='w-9 h-9 flex items-center justify-center rounded-full hover:bg-[var(--border)] transition-all duration-300 cursor-pointer'
            >
              <i
                className={`fa-regular ${isDark ? 'fa-sun' : 'fa-moon'} text-lg transition-all duration-300 text-[var(--blue-PRY)]`}
              ></i>
            </button>
            <button className='bg-[var(--blue-PRY)] text-white font-medium py-1 px-3 hover:bg-[var(--accent)] rounded-lg cursor-pointer hover:-translate-y-0.5 transition-all duration-300 text-sm lg:text-base'>
              Hire Me
            </button>
          </div>
        </section>

        <section
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen
              ? 'max-h-[400px] opacity-100 translate-y-0 pt-3'
              : 'max-h-0 opacity-0 -translate-y-3 pt-0'
          }`}
        >
          <div className='flex flex-col'>
            <a
              href='#projects'
              className=' font-medium text-bse text-[var(--mainText)] hover:text-[var(--blue-PRY)] py-1.5 transition-all duration-300 border-b-1 border-[var(--border)] sm:px-8 px-4
              '
            >
              Projects
            </a>
            <a
              href='#about'
              className='font-medium text-bse text-[var(--mainText)] hover:text-[var(--blue-PRY)] py-1.5 transition-all duration-300 border-b-1 border-[var(--border)] px-4 sm:px-8'
            >
              About
            </a>
            <a
              href='#services'
              className='font-medium text-bse text-[var(--mainText)] hover:text-[var(--blue-PRY)] py-1.5 transition-all duration-300 border-b-1 border-[var(--border)] px-4 sm:px-8'
            >
              Services
            </a>
            <a
              href='#faq'
              className='font-medium text-bse text-[var(--mainText)] hover:text-[var(--blue-PRY)] py-1.5 transition-all duration-300 border-b-1 border-[var(--border)] px-4 sm:px-8'
            >
              FAQ
            </a>
            <a
              href='#contact'
              className='font-medium text-bse text-[var(--mainText)] hover:text-[var(--blue-PRY)] py-1.5 transition-all duration-300 px-4 sm:px-8'
            >
              Contact
            </a>
          </div>
        </section>
      </nav>
    </>
  );
};

export default navbar;
