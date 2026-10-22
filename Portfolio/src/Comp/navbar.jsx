import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why-choose-me', label: '  Why choose me' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const allSections = [
      'about',
      'services',
      'how-i-work',
      'projects',
      'why-choose-me',
      'build',
      'faq',
      'contact',
    ];
    // only these get a link in the navbar
    const linkedSections = [
      'projects',
      'about',
      'services',
      'why-choose-me',
      'faq',
      'contact',
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);

      const scrollPos = window.scrollY + window.innerHeight * 0.45;
      const sorted = allSections
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .sort((a, b) => a.offsetTop - b.offsetTop);

      let current = '';
      for (const el of sorted) {
        if (el.offsetTop <= scrollPos) current = el.id;
      }

      // if the current section has no nav link, clear activeSection
      setActiveSection(linkedSections.includes(current) ? current : '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`border-b-1 border-[var(--border)] w-full  py-3 bg-[var(--navbar)] ${
          isScrolled ? 'fixed top-0 left-0 shadow-md' : 'relative'
        } z-50`}
      >
        <section className='flex justify-between items-center  px-6 sm:px-10 lg:px-12 xl:px-16'>
          <div className='flex gap-5 items-center justify-between'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='relative flex items-center justify-center cursor-pointer lg:hidden'
            >
              {' '}
              {/* Menu icon */}{' '}
              <i
                className={`fa-solid fa-bars absolute text-2xl text-[var(--blue-PRY)] transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}`}
              />{' '}
              {/* Close icon */}{' '}
              <i
                className={`fa-solid fa-xmark absolute text-2xl text-[var(--blue-PRY)] transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'}`}
              />{' '}
            </button>
            <h2 className='font-semibold text-sm md:text-base bg-white border border-[var(--border)] py-1.5 lg:py-2 px-[14px] rounded-md cursor-text'>
              Advantage<span className='text-[var(--accent)]'>__dev</span>
            </h2>
          </div>
          <div className='hidden lg:flex lg:gap-6 items-center justify-between'>
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`relative font-medium text-lg text-[var(--mainText)]
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px]
  after:bg-[var(--accent)]
  after:transition-all after:duration-300
  hover:after:w-full
  ${activeSection === href.slice(1) ? 'after:w-full' : 'after:w-0'}`}
              >
                {label}
              </a>
            ))}
          </div>
          <div className='flex gap-1.5 lg:gap-3 items-center'>
            <button
              onClick={toggleTheme}
              role='switch'
              aria-checked={isDark}
              aria-label='Toggle dark mode'
              className={`relative w-12 h-[26px] rounded-full transition-colors duration-300 cursor-pointer ${
                isDark ? 'bg-slate-700' : 'bg-slate-200'
              }`}
            >
              <span
                className={`absolute top-[3px] left-[3px] w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? 'translate-x-[22px] bg-slate-900 text-blue-400'
                    : 'translate-x-0 bg-white text-yellow-500'
                }`}
              >
                {isDark ? <FiMoon size={14} /> : <FiSun size={14} />}
              </span>
            </button>
            <a
              href='#contact'
              className='bg-[var(--blue-PRY)] text-white font-medium py-1 px-3 hover:bg-[var(--accent)] rounded-md cursor-pointer hover:-translate-y-0.5 transition-all duration-300 text-sm lg:text-base'
            >
              Hire Me
            </a>
          </div>
        </section>

        <section
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen
              ? 'max-h-[400px] opacity-100 translate-y-0 pt-3'
              : 'max-h-0 opacity-0 -translate-y-3 pt-0'
          }`}
        >
          <div className='flex flex-col'>
            <a
              href='#projects'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=' font-medium text-bse text-[var(--mainText)] hover:text-[var(--blue-PRY)] py-1.5 transition-all duration-300 border-b-1 border-[var(--border)] sm:px-8 px-4
              '
            >
              Projects
            </a>
            <a
              href='#about'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='font-medium text-bse text-[var(--mainText)] hover:text-[var(--blue-PRY)] py-1.5 transition-all duration-300 border-b-1 border-[var(--border)] px-4 sm:px-8'
            >
              About
            </a>
            <a
              href='#services'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='font-medium text-bse text-[var(--mainText)] hover:text-[var(--blue-PRY)] py-1.5 transition-all duration-300 border-b-1 border-[var(--border)] px-4 sm:px-8'
            >
              Services
            </a>
            <a
              href='#why-choose-me'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='font-medium text-bse text-[var(--mainText)] hover:text-[var(--blue-PRY)] py-1.5 transition-all duration-300 border-b-1 border-[var(--border)] px-4 sm:px-8'
            >
              Why Choose me
            </a>
            <a
              href='#faq'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='font-medium text-bse text-[var(--mainText)] hover:text-[var(--blue-PRY)] py-1.5 transition-all duration-300 border-b-1 border-[var(--border)] px-4 sm:px-8'
            >
              FAQ
            </a>
            <a
              href='#contact'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='font-medium text-bse text-[var(--mainText)] hover:text-[var(--blue-PRY)] py-1.5 transition-all duration-300 px-4 sm:px-8'
            >
              Contact
            </a>
          </div>
        </section>
      </nav>
      {isScrolled && <div style={{ height: '64px' }} />}
    </>
  );
};

export default navbar;
