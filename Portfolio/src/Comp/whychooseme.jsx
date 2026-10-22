import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RevealOnScroll from './revealonscroll.jsx';

const steps = [
  {
    num: '01',
    title: 'Modern Technology',
    desc: 'I use modern web technologies to create interactive, scalable, and maintainable digital experiences.',
  },
  {
    num: '02',
    title: 'Efficient Development',
    desc: 'I build functional, high-quality websites with a focus on clean code, performance, and maintainability.',
  },
  {
    num: '03',
    title: 'Responsive Design',
    desc: 'I create responsive, user-friendly interfaces that work seamlessly across desktops, tablets, and mobile devices.',
  },
  {
    num: '04',
    title: 'On-Going Support',
    desc: "We don't just ship and leave; we partner for long-term growth.",
  },
];

const StepCard = ({ num, tag, title, desc, className = '' }) => (
  <div
    className={`group bg-[var(--whiteCL)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-1.5 rounded-xl p-6 sm:p-7 ${className} sm:h-60 md:h-50`}
  >
    <div className='flex items-start justify-between mb-4'>
      <span className='text-2xl sm:text-3xl font-bold text-[var(--secoundaryText)]/60 group-hover:text-[var(--blue-PRY)] transition-colors duration-75'>
        {num}
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

const WhyChooseMe = () => {
  const servicesRef = useRef(null);

  const isInView = useInView(servicesRef, {
    once: true,
    amount: 0.1,
  });
  return (
    <motion.section
      id='why-choose-me'
      ref={servicesRef}
      className={`w-full bg-[var(--navbar)] px-5 sm:px-8 md:px-12 lg:px-32 py-16 sm:py-24 lg:py-28 `}
    >
      <div
        className={`max-w-[1200px] mx-auto ${isInView ? 'animate-slide-in' : 'opacity-0'}`}
      >
        <div className='flex items-center gap-2 mb-3.5'>
          <span className='w-1.5 h-1.5 rounded-full bg-[var(--blue-PRY)]'></span>
          <span className='text-sm font-semibold text-[var(--blue-PRY)]'>
            Why Choose Me
          </span>
        </div>

        <h2 className='text-4xl font-bold leading-tight tracking-tight text-[var(--mainText)] sm:text-5xl max-w-3xl'>
          Why Brands work with me
        </h2>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5'>
          {steps.map((s, i) => (
            <RevealOnScroll key={s.num} delay={i * 0.08}>
              <StepCard {...s} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseMe;
