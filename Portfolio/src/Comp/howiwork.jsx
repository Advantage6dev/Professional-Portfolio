import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    num: '01',
    tag: 'Explore',
    title: 'Discovery & Direction',
    desc: 'We start by understanding your goals, audience, and what you need the website to achieve. This gives us a clear direction before any design or development begins.',
  },
  {
    num: '02',
    tag: 'Design',
    title: 'Designing & Planning',
    desc: 'I turn the initial ideas into a clear visual direction, planning the layout, content, and user experience before moving into development.',
  },
];

const step03 = {
  num: '03',
  tag: 'Build',
  title: 'Build & Development',
  desc: "Once the direction is clear, I bring the design to life with clean, responsive code. You'll be able to see the progress and provide feedback as the website takes shape.",
};

const stepsBottom = [
  {
    num: '04',
    tag: 'Refine',
    title: 'Testing & Refinement',
    desc: 'Before launch, I test the website across screen sizes and browsers, fix issues, and refine the details to make sure everything feels polished and works as expected.',
  },
  {
    num: '05',
    tag: 'Launch',
    title: 'Launch & Support',
    desc: 'Once everything is ready, I handle the final checks and get the website live. Need help afterwards? Ongoing updates, fixes, and maintenance are available too.',
  },
];

const StepCard = ({ num, tag, title, desc, className = '' }) => (
  <div
    className={`bg-[var(--whiteCL)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-1.5 rounded-xl p-6 sm:p-7 ${className}`}
  >
    <div className='flex items-start justify-between mb-4'>
      <span className='text-2xl sm:text-3xl font-bold text-[var(--blue-PRY)]'>
        {num}
      </span>
      <span className='text-[11px] sm:text-xs font-mono text-[var(--secoundaryText)] uppercase tracking-wide mt-1.5'>
        {tag}
      </span>
    </div>
    <h3 className='text-base sm:text-lg font-semibold text-[#0f172a] mb-2'>
      {title}
    </h3>
    <p className='text-[13.5px] sm:text-sm text-[var(--secoundaryText)] leading-relaxed'>
      {desc}
    </p>
  </div>
);

const HowIWork = () => {
  const servicesRef = useRef(null);

  const isInView = useInView(servicesRef, {
    once: true,
    amount: 0.1,
  });
  return (
    <motion.section
      id='howiwork'
      ref={servicesRef}
      className={`w-full bg-[var(--navbar)] px-6 sm:px-10 lg:px-8 py-16 sm:py-24 lg:py-28 `}
    >
      <div
        className={`max-w-[1120px] mx-auto ${isInView ? 'animate-slide-in' : 'opacity-0'}`}
      >
        <div className='flex items-center gap-2 mb-3.5'>
          <span className='w-1.5 h-1.5 rounded-full bg-[var(--blue-PRY)]'></span>
          <span className='text-sm font-semibold text-[var(--blue-PRY)]'>
            How I Work
          </span>
        </div>
        <p className='mt-3 text-[var(--secoundaryText)] text-[15px] sm:text-base max-w-[560px]'>
          From the first conversation to the final launch, here's what working
          with me looks like. Clear communication, thoughtful decisions, and a
          process built to keep things moving.
        </p>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5'>
          {steps.map((s) => (
            <StepCard key={s.num} {...s} />
          ))}

          {/* 3rd Card */}
          <div className='sm:col-span-2 bg-[var(--whiteCL)] border border-[var(--border)] rounded-xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5'>
            <div className='flex items-start justify-between mb-4'>
              <span className='text-2xl sm:text-3xl font-bold text-[var(--blue-PRY)]'>
                {step03.num}
              </span>
              <span className='text-[11px] sm:text-xs font-mono text-[var(--secoundaryText)] uppercase tracking-wide mt-1.5'>
                {step03.tag}
              </span>
            </div>

            <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
              <div className='md:flex-1'>
                <h3 className='text-base sm:text-lg font-semibold text-[#0f172a] mb-2'>
                  {step03.title}
                </h3>
                <p className='text-[13.5px] sm:text-sm text-[var(--secoundaryText)] leading-relaxed'>
                  {step03.desc}
                </p>
              </div>
              <div className='md:w-[280px] lg:w-[320px] h-50 flex-shrink-0 aspect-video rounded-lg border border-[var(--border)] bg-[var(--bgCL)] flex items-center justify-center overflow-hidden'>
                <img
                  src='/images/build.png'
                  alt='build-img'
                  className='w-full h-50 hover:scale-105 transition-all duration-300'
                />
              </div>
            </div>
          </div>

          {stepsBottom.map((s) => (
            <StepCard key={s.num} {...s} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowIWork;
