import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import RevealOnScroll from './revealonscroll.jsx';
import { IoMdArrowForward } from 'react-icons/io';

const projects = [
  {
    tag: '01 — Recipe App',
    title: 'Forkify App',
    desc: 'A JavaScript-powered recipe application featuring API-based recipe search, detailed recipe views, pagination, and saved recipes that persist between sessions.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Parcel'],
    img: '/images/Forkify.png',
    livelink: 'https://forkifyapp-millionrecipe.vercel.app/',
    gitlink: 'https://github.com/Advantage6dev/Forkify-App',
    reverse: false,
    status: 'completed',
  },
  {
    tag: '02 — Fitness Tracker',
    title: 'Mapty App',
    desc: 'A location-based workout tracker for logging running and cycling activities on an interactive map, with persistent workout data stored in the browser.',
    stack: [
      'Vanilla JavaScript (OOP/ES6 Classes)',
      'Leaflet.js',
      'Geolocation API',
      'Local Storage',
    ],
    img: '/images/Mapty.png',
    livelink: 'https://mapty-nu-steel.vercel.app/',
    gitlink: 'https://github.com/Advantage6dev/Mapty',
    reverse: true,
    status: 'completed',
  },
  {
    tag: '03 — E-commerce',
    title: 'Grandeur Treats and Beads',
    desc: 'A responsive e-commerce website designed to showcase handmade beads and food products, featuring product browsing, clear product details, and direct WhatsApp ordering to make purchasing simple for customers.',
    stack: ['Framer', 'HTML5', 'CSS3', 'JavaScript'],
    img: '/images/Grandeur.png',
    livelink: 'https://grandeurs.vercel.app/',
    gitlink: 'https://github.com/Advantage6dev/Grandeur',
    reverse: false,
    status: 'completed',
  },
];

const ProjectCard = ({ p }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-center py-10 sm:py-12'>
      {/* image */}
      <div
        className={`relative w-full md:h-80 rounded border border-[var(--border)] overflow-hidden ${
          p.reverse ? 'md:order-2' : 'md:order-1'
        }`}
      >
        <span
          className={`absolute top-3 left-3 z-10 text-xs font-semibold px-3 py-1 rounded-full border ${
            p.status === 'ongoing'
              ? 'bg-amber-100 text-amber-700 border-amber-200'
              : 'bg-emerald-100 text-emerald-700 border-emerald-200'
          }`}
        >
          {p.status === 'ongoing' ? 'Ongoing Project' : 'Completed'}
        </span>

        <img src={p.img} alt={p.title} className='block w-full h-full' />
      </div>

      {/* text */}
      <div className={p.reverse ? 'md:order-1' : 'md:order-2'}>
        <span className='text-sm font-medium tracking-wide text-[var(--blue-PRY)]'>
          {p.tag}
        </span>
        <h3 className='text-xl sm:text-2xl font-semibold text-[var(--mainText)] mt-2.5 mb-3'>
          {p.title}
        </h3>
        <p className='text-[var(--secoundaryText)] text-[15px] leading-relaxed max-w-[440px] mb-4'>
          {p.desc}
        </p>
        <div className='flex flex-wrap gap-2 mb-5'>
          {p.stack.map((s) => (
            <span
              key={s}
              className='px-3 py-1 border border-[var(--border)] text-[var(--mainText)] font-medium text-sm rounded-lg'
            >
              {s}
            </span>
          ))}
        </div>
        <div>
          {p.status === 'ongoing' ? (
            <span
              aria-disabled='true'
              className='inline-flex items-center gap-2 px-4 py-2 text-[var(--secoundaryText)] font-bold rounded-md border border-[var(--border)] bg-[var(--navbar)] text-base opacity-50 cursor-not-allowed'
            >
              <span>Coming Soon</span>
            </span>
          ) : (
            <a
              href={p.livelink}
              target='_blank'
              className='group inline-flex items-center gap-1 px-4 py-2 text-white font-bold rounded-md transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent)] bg-[var(--blue-PRY)] text-base'
            >
              <span>Live Demo</span>
              <span className='transition-transform duration-300 rotate-[-30deg] group-hover:rotate-0 w-fit text-xl text-white'>
                <IoMdArrowForward />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });

  return (
    <section
      id='projects'
      className='w-full bg-[var(--bg-CL)] px-5 sm:px-8 md:px-12 lg:px-32 py-16 sm:py-24 lg:py-28'
    >
      <div className='max-w-[1200px] mx-auto'>
        <div
          ref={headerRef}
          className={`transition-opacity duration-700 ${headerInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className='flex items-center gap-2 mb-3.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-[var(--blue-PRY)]'></span>
            <span className='text-sm font-semibold text-[var(--blue-PRY)]'>
              Work I've shipped
            </span>
          </div>

          <h2 className='font-semibold text-[var(--mainText)] leading-tight text-[28px] sm:text-[34px] lg:text-[40px] max-w-[600px]'>
            A look at some of the products and experiences I've built.
          </h2>
        </div>

        <div className='mt-6 sm:mt-10'>
          {projects.map((p, i) => (
            <RevealOnScroll
              key={p.title}
              className={i !== 0 ? 'border-t border-[var(--border)]' : ''}
            >
              <ProjectCard p={p} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
