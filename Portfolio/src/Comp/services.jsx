import React, { useRef, useState } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from './revealonscroll';

const services = [
  {
    title: 'Web Development',
    description:
      'Modern, responsive websites built to perform smoothly across devices and browsers.',
  },
  {
    title: 'Landing Page Development',
    description:
      'Focused landing pages designed to communicate your product or service clearly and effectively.',
  },
  {
    title: 'UI Implementation',
    description:
      'Turn Figma or Framer designs into responsive, interactive, and pixel-accurate web interfaces.',
  },
  {
    title: 'Website Redesign',
    description:
      'Transform outdated websites into cleaner, responsive, and more engaging experiences.',
  },
  {
    title: 'Framer Development',
    description:
      'Polished Framer websites with responsive layouts, smooth interactions, and thoughtful animations.',
  },
  {
    title: 'Web Maintenance',
    description:
      'Ongoing website care with updates, bug fixes, content changes, and performance checks — available as a monthly service.',
  },
  {
    title: 'Website Optimization',
    description:
      "Improve your website's speed, responsiveness, and overall performance for a faster, smoother experience.",
  },
];

const ServiceRow = ({ service }) => (
  <div
    className='
      group grid gap-6 border-b border-[var(--border)]
      px-2 py-6
      transition-colors duration-300
      sm:py-9
      md:grid-cols-[1fr_1.7fr_auto]
      md:items-center
      md:gap-10
      md:px-4
      lg:py-8
      hover:bg-[var(--navbar)]
      cursor-text
    '
  >
    <h3 className='text-lg font-semibold text-[var(--mainText)] sm:text-xl'>
      {service.title}
    </h3>

    <p className='max-w-2xl text-sm leading-6 text-[var(--secoundaryText)] sm:text-base sm:leading-7'>
      {service.description}
    </p>

    <span
      className='
        hidden text-2xl text-[var(--accent)]
        transition-transform duration-300
        group-hover:translate-x-2
        md:block
      '
    >
      →
    </span>

    <span
      className='
        block w-fit text-xl text-[var(--accent)]
        transition-transform duration-300
        group-hover:translate-x-2
        md:hidden
      '
    >
      →
    </span>
  </div>
);

const Services = () => {
  const servicesRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const isInView = useInView(servicesRef, {
    once: true,
    amount: 0.1,
  });

  const visibleCount = Math.ceil(services.length * 0.4);
  const alwaysVisible = services.slice(0, visibleCount);
  const revealable = services.slice(visibleCount);

  return (
    <motion.section
      id='services'
      ref={servicesRef}
      className={`w-full bg-[var(--background)] px-5 py-16 sm:py-24 lg:py-28 sm:px-8 md:px-12 lg:px-32 lg:py-16 `}
    >
      <div
        className={`max-w-[1200px] mx-auto ${isInView ? 'animate-slide-in' : 'opacity-0'}`}
      >
        {/* Section Header */}
        <div className='max-w-3xl'>
          <div className='flex items-center gap-2 mb-3.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-[var(--blue-PRY)]'></span>
            <span className='text-sm font-semibold text-[var(--blue-PRY)]'>
              Services
            </span>
          </div>

          <h2 className='text-4xl font-bold leading-tight tracking-tight text-[var(--mainText)] sm:text-5xl max-w-3xl'>
            Need it built? Let's make it happen.
          </h2>

          <p className='mt-5 max-w-2xl text-base leading-7 text-[var(--secoundaryText)] sm:text-lg'>
            From landing pages to full website experiences, I build, improve,
            and maintain websites that work for you.
          </p>
        </div>

        {/* Services */}
        <div className='mt-14 border-t border-[var(--border)]'>
          {alwaysVisible.map((service) => (
            <RevealOnScroll key={service.title}>
              <ServiceRow service={service} />
            </RevealOnScroll>
          ))}

          <AnimatePresence initial={false}>
            {showAll && (
              <motion.div
                key='revealed-services'
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                {revealable.map((service) => (
                  <RevealOnScroll key={service.title}>
                    <ServiceRow service={service} />
                  </RevealOnScroll>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* See more button — disappears permanently once clicked */}
        {!showAll && services.length > visibleCount && (
          <div className='mt-10 flex justify-center'>
            <button
              onClick={() => setShowAll(true)}
              className='
                rounded-full border border-[var(--border)]
                px-6 py-2.5
                text-sm font-semibold text-[var(--mainText)]
                transition-colors duration-300
                hover:bg-[var(--navbar)] cursor-pointer
              '
            >
              See more
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Services;
