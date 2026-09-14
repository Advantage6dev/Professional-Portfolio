import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const faqs = [
  {
    q: 'What type of websites do you build?',
    a: 'I build modern, responsive websites for businesses, founders, agencies, and personal brands. This includes landing pages, business websites, portfolios, and custom web interfaces.',
  },
  {
    q: 'How long does a typical project take?',
    a: "A landing page usually takes 1–2 weeks. Full web apps depend on scope, but I'll give you a clear timeline before we start, not a rolling estimate.",
  },
  {
    q: 'Do you work with an existing design?',
    a: 'Yes. I can turn an existing Figma, Framer, or other design into a responsive, functional website while keeping the original design and user experience intact.',
  },
  {
    q: 'What do I need to provide before we start?',
    a: "You don't need to have everything figured out. I'll need a clear idea of your goals, the type of website you need, and any content, branding, or references you already have. We can work through the remaining details together.",
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Every project includes a two-week support window after launch, and ongoing maintenance is available beyond that.',
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes, I do. I’m comfortable collaborating remotely with clients, teams, and agencies, regardless of location. We can communicate, share feedback, and keep everything moving smoothly online.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const servicesRef = useRef(null);

  const isInView = useInView(servicesRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      id='faq'
      ref={servicesRef}
      className='w-full bg-[var(--bgCL)] px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 lg:py-28'
    >
      <div
        className={`max-w-[1200px] mx-auto ${isInView ? 'animate-slide-in' : 'opacity-0'}`}
      >
        <div className='flex items-center gap-2 mb-3.5'>
          <span className='w-1.5 h-1.5 rounded-full bg-[var(--blue-PRY)]'></span>
          <span className='text-sm font-semibold text-[var(--blue-PRY)]'>
            FAQ
          </span>
        </div>

        <h2 className='font-semibold text-[var(--mainText)] leading-tight text-[28px] sm:text-[34px] lg:text-[40px] max-w-[600px]'>
          Quick Answers
        </h2>

        <div className='mt-10 sm:mt-12 border-t border-[var(--border)]'>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className='border-b border-[var(--border)] px-4'
              >
                <button
                  onClick={() => toggle(i)}
                  className='w-full flex items-center justify-between gap-6 py-5 sm:py-4 text-left'
                >
                  <span className='text-[15px] sm:text-lg font-medium text-[var(--mainText)]'>
                    {item.q}
                  </span>
                  <span className='grid place-items-center flex-shrink-0 w-5 h-5 text-xl text-[var(--blue-PRY)] cursor-pointer'>
                    <i
                      className={`fa-solid fa-angle-up col-start-1 row-start-1 transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'rotate-90 opacity-0 scale-75'
                          : 'rotate-0 opacity-100 scale-100'
                      }`}
                    />
                    <i
                      className={`fa-solid fa-angle-down col-start-1 row-start-1 transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'rotate-0 opacity-100 scale-100'
                          : '-rotate-90 opacity-0 scale-75'
                      }`}
                    />
                  </span>
                </button>

                <div
                  className='grid transition-all duration-300 ease-in-out'
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className='overflow-hidden'>
                    <p className='text-[var(--secoundaryText)] text-[14px] sm:text-[15px] leading-relaxed pb-5 sm:pb-6 max-w-[620px]'>
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
