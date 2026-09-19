import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

const Projects = () => {
  const servicesRef = useRef(null);

  const isInView = useInView(servicesRef, {
    once: true,
    amount: 0.1,
  });
  return (
    <section
      id='projects'
      ref={servicesRef}
      className='w-full bg-[var(--bg-CL)] px-5 sm:px-8 md:px-12 lg:px-32 py-16 sm:py-24 lg:py-28'
    >
      <div
        className={`max-w-[1200px] mx-auto ${isInView ? 'animate-slide-in' : 'opacity-0'}`}
      >
        <div className='flex items-center gap-2 mb-3.5'>
          <span className='w-1.5 h-1.5 rounded-full bg-[var(--blue-PRY)]'></span>
          <span className='text-sm font-semibold text-[var(--blue-PRY)]'>
            Projects
          </span>
        </div>

        <h2 className='font-semibold text-[var(--mainText)] leading-tight text-[28px] sm:text-[34px] lg:text-[40px] max-w-[600px]'>
          A few things I've shipped recently
        </h2>

        <div className='mt-6 sm:mt-10'>
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-center py-10 sm:py-12 ${
                i !== 0 ? 'border-t border-[var(--border)]' : ''
              }`}
            >
              {/* image */}
              <div
                className={`relative aspect-[16/11] rounded border border-[var(--border)] ${
                  p.reverse ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border ${
                    p.status === 'ongoing'
                      ? 'bg-amber-100 text-amber-700 border-amber-200'
                      : 'bg-emerald-100 text-emerald-700 border-emerald-200'
                  }`}
                >
                  {p.status === 'ongoing' ? 'Ongoing Project' : 'Completed'}
                </span>
                <img src={p.img} alt='project-img' className='' />
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
                    <span className='px-3 py-1 border border-[var(--border)] text-[var(--mainText)] font-medium text-sm rounded-lg'>
                      {s}
                    </span>
                  ))}
                </div>
                <div className='flex items-center gap-2 md:gap-4'>
                  <a
                    href={p.gitlink}
                    className='px-2 py-1.5 bg-[var(--blue-PRY)] text-white font-medium rounded-md hover:bg-[var(--accent)] transition-all duration-300 hover:-translate-y-1 text-base'
                  >
                    <i className='fa-brands fa-github text-2xl'></i>
                  </a>

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
                      className='group inline-flex items-center gap-2 px-4 py-2 text-[var(--mainText)] font-bold rounded-md border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--border)] bg-[var(--navbar)] text-base'
                    >
                      <span>Live Demo</span>
                      <i className='fa-solid fa-arrow-up transition-transform duration-300 rotate-45 group-hover:rotate-90'></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
