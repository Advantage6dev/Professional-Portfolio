import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    tag: '01 — E-COMMERCE',
    title: 'Northfield Goods',
    desc: 'A headless storefront rebuilt for speed — cut load time by 60% and lifted checkout conversion in the first month.',
    stack: ['Next.js', 'Shopify', 'Tailwind'],
    reverse: false,
  },
  {
    tag: '02 — SAAS DASHBOARD',
    title: 'Ledgerly',
    desc: 'A finance dashboard redesigned around clarity — fewer clicks to the numbers that actually matter to the user.',
    stack: ['React', 'TypeScript', 'Recharts'],
    reverse: true,
  },
  {
    tag: '03 — PORTFOLIO SITE',
    title: 'Studio Marrow',
    desc: 'A minimal, image-forward site for a small design studio — built to let the work do the talking.',
    stack: ['Framer', 'CMS'],
    reverse: false,
  },
  {
    tag: '02 — SAAS DASHBOARD',
    title: 'Ledgerly',
    desc: 'A finance dashboard redesigned around clarity — fewer clicks to the numbers that actually matter to the user.',
    stack: ['React', 'TypeScript', 'Recharts'],
    reverse: true,
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
      className='w-full bg-[var(--bg-CL)] px-6 sm:px-10 lg:px-8 py-16 sm:py-24 lg:py-28'
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
                className={`aspect-[16/11] rounded border border-[var(--border)] ${
                  p.reverse ? 'md:order-2' : 'md:order-1'
                }`}
                style={{
                  background:
                    'linear-gradient(120deg, var(--whiteCL), rgba(37,99,235,0.12))',
                }}
              />

              {/* text */}
              <div className={p.reverse ? 'md:order-1' : 'md:order-2'}>
                <span className='font-mono text-xs text-[var(--blue-PRY)]'>
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
                      className='text-xs text-[var(--secoundaryText)] border border-[var(--border)] px-2.5 py-1 rounded-full'
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className='flex items-center gap-2 md:gap-4'>
                  <a
                    href='#contact'
                    className='px-2 py-1.5 bg-[var(--blue-PRY)] text-white font-medium rounded-md hover:bg-[var(--accent)] transition-all duration-300 hover:-translate-y-1 text-base'
                  >
                    <i className='fa-brands fa-github text-2xl'></i>
                  </a>
                  <a
                    href='#projects'
                    className='group inline-flex items-center gap-2 px-4 py-2 text-[var(--mainText)] font-bold rounded-md border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--border)] bg-[var(--navbar)] text-base'
                  >
                    <span>View Live</span>

                    <i className='fa-solid fa-arrow-up transition-transform duration-300 rotate-45 group-hover:rotate-90'></i>
                  </a>
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
