import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

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

const Services = () => {
  const servicesRef = useRef(null);

  const isInView = useInView(servicesRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <motion.section
      id='services'
      ref={servicesRef}
      className={`w-full bg-[var(--background)] px-5 py-16 sm:py-24 lg:py-28 sm:px-8 md:px-12 lg:px-16 lg:py-16 ${isInView ? 'animate-slide-in' : 'opacity-0 translate-y-[20px] md:translate-y-[50px]'}`}
    >
      <div className='mx-auto max-w-6xl'>
        {/* Section Header */}
        <div className='max-w-3xl'>
          <div className='flex items-center gap-2 mb-3.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-[var(--blue-PRY)]'></span>
            <span className='text-sm font-semibold text-[var(--blue-PRY)]'>
              Services
            </span>
          </div>

          <h2 className='text-4xl font-bold leading-tight tracking-tight text-[var(--mainText)] sm:text-5xl max-w-3xl'>
            Need it built? Let’s make it happen.
          </h2>

          <p className='mt-5 max-w-2xl text-base leading-7 text-[var(--secoundaryText)] sm:text-lg'>
            From landing pages to full website experiences, I build, improve,
            and maintain websites that work for you.
          </p>
        </div>

        {/* Services */}
        <div className='mt-14 border-t border-[var(--border)]'>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
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
              `}
            >
              {/* Service title */}
              <h3 className='text-lg font-semibold text-[var(--mainText)] sm:text-xl'>
                {service.title}
              </h3>

              {/* Description */}
              <p className='max-w-2xl text-sm leading-6 text-[var(--secoundaryText)] sm:text-base sm:leading-7'>
                {service.description}
              </p>

              {/* Arrow */}
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

              {/* Mobile arrow */}
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
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
