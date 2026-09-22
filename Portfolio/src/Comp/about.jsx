import React, { useRef, useState, useEffect } from 'react';
import RevealOnScroll from './revealonscroll';
import { useInView } from 'framer-motion';

const CountUp = ({ to, duration = 1.2, suffix = '' }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setValue(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(to); // snap to exact final number, avoids rounding short
    };
    requestAnimationFrame(step);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

const stack_Icon = [
  { name: 'HTML5', icon: 'fa-brands fa-html5', hover: 'hover:text-orange-500' },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt', hover: 'hover:text-blue-500' },
  {
    name: 'JavaScript',
    icon: 'fa-brands fa-js',
    hover: 'hover:text-yellow-400',
  },
  {
    name: 'React.js',
    icon: 'fa-brands fa-react',
    hover: 'hover:text-cyan-400',
  },
  {
    name: 'Node.js',
    icon: 'fa-brands fa-node-js',
    hover: 'hover:text-green-500',
  },
  { name: 'Git', icon: 'fa-brands fa-git-alt', hover: 'hover:text-orange-600' },
  {
    name: 'GitHub',
    icon: 'fa-brands fa-github',
    hover: 'hover:text-[var(--mainText)]',
  },
  {
    name: 'Tailwind CSS',
    icon: 'fa-solid fa-wind',
    hover: 'hover:text-cyan-400',
  },
  { name: 'Figma', icon: 'fa-brands fa-figma', hover: 'hover:text-purple-500' },
  {
    name: 'Framer',
    icon: 'fa-solid fa-layer-group',
    hover: 'hover:text-purple-500',
  },
  { name: 'Vite', icon: 'fa-solid fa-bolt', hover: 'hover:text-yellow-400' },
  {
    name: 'Express',
    icon: 'fa-solid fa-server',
    hover: 'hover:text-green-400',
  },
  { name: 'HTML5', icon: 'fa-brands fa-html5', hover: 'hover:text-orange-500' },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt', hover: 'hover:text-blue-500' },
  {
    name: 'JavaScript',
    icon: 'fa-brands fa-js',
    hover: 'hover:text-yellow-400',
  },
  {
    name: 'React.js',
    icon: 'fa-brands fa-react',
    hover: 'hover:text-cyan-400',
  },
  {
    name: 'Node.js',
    icon: 'fa-brands fa-node-js',
    hover: 'hover:text-green-500',
  },
  { name: 'Git', icon: 'fa-brands fa-git-alt', hover: 'hover:text-orange-600' },
  {
    name: 'GitHub',
    icon: 'fa-brands fa-github',
    hover: 'hover:text-[var(--mainText)]',
  },
  {
    name: 'Tailwind CSS',
    icon: 'fa-solid fa-wind',
    hover: 'hover:text-cyan-400',
  },
  { name: 'Figma', icon: 'fa-brands fa-figma', hover: 'hover:text-purple-500' },
  {
    name: 'Framer',
    icon: 'fa-solid fa-layer-group',
    hover: 'hover:text-purple-500',
  },
  { name: 'Vite', icon: 'fa-solid fa-bolt', hover: 'hover:text-yellow-400' },
  {
    name: 'Express',
    icon: 'fa-solid fa-server',
    hover: 'hover:text-green-400',
  },
];

const stack_Text = [
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React.js' },
  { name: 'Tailwind CSS' },
  { name: 'Framer' },
  { name: 'Git' },
  { name: 'GitHub' },
];

const About = () => {
  return (
    <section id='about' className='bg-[var(--bg-CL)] w-full'>
      <div className='max-w-[1120px] mx-auto px-6 sm:px-10 lg:px-8 py-16 sm:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start'>
          {/* Text side */}
          <RevealOnScroll delay={0.2} className='order-2 md:order-1'>
            <div className='flex items-center gap-2 mb-3.5'>
              <span className='w-1.5 h-1.5 rounded-full bg-[var(--blue-PRY)]'></span>
              <span className='text-sm font-semibold text-[var(--blue-PRY)]'>
                About
              </span>
            </div>

            <div className='mt-5 space-y-2 max-w-[520px]'>
              <p className='text-[var(--secoundaryText)] text-[15px] sm:text-base leading-relaxed'>
                I'm a web developer who enjoys turning ideas into clean,
                interactive, and meaningful digital experiences. I care about
                the details that make a website feel smooth not just how it
                looks, but how it works and feels to use.
              </p>

              <p className='text-[var(--secoundaryText)] text-[15px] sm:text-base leading-relaxed'>
                My journey started with HTML, CSS, and JavaScript, and I've
                since grown into working with React, Tailwind CSS, and other
                modern web technologies. Most of what I know has come from
                building real projects, experimenting, breaking things, fixing
                them, and constantly learning along the way.
              </p>

              <div className='mt-4'>
                <button className='px-7 py-2 bg-[var(--blue-PRY)] text-white font-medium rounded-md hover:bg-[var(--accent)] transition-all duration-300 hover:-translate-y-1 text-base cursor-pointer'>
                  View CV
                </button>
              </div>
            </div>

            <div className='flex items-center gap-2 mt-6 mb-2'>
              <span className='w-1.5 h-1.5 rounded-full bg-[var(--blue-PRY)]'></span>
              <span className='text-sm font-semibold text-[var(--blue-PRY)]'>
                The tools i use to build for the web
              </span>
            </div>

            <div className='space-y-2 max-w-[520px]'>
              <p className='text-[var(--secoundaryText)] text-[15px] sm:text-base leading-relaxed'>
                From interfaces to full web experiences, I use a modern stack to
                turn ideas into fast, functional, and polished websites.
              </p>
              <div className='mt-4 flex gap-2 items-center flex-wrap'>
                {stack_Text.map((item) => (
                  <span
                    key={item.name}
                    className='px-3 py-1 border border-[var(--border)] text-[var(--mainText)] font-medium text-sm rounded-lg'
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex gap-10 sm:gap-12 mt-4 pt-2'>
              <div>
                <h4 className='text-2xl sm:text-[28px] font-semibold text-[var(--mainText)]'>
                  <CountUp to={5} />
                </h4>
                <span className='text-xs sm:text-[13px] text-[var(--secoundaryText)] font-medium'>
                  Projects shipped
                </span>
              </div>
              <div>
                <h4 className='text-2xl sm:text-[28px] font-semibold text-[var(--mainText)]'>
                  <CountUp to={2} suffix=' yrs' />
                </h4>
                <span className='text-xs sm:text-[13px] text-[var(--secoundaryText)] font-medium'>
                  Building for the web
                </span>
              </div>
              <div>
                <h4 className='text-2xl sm:text-[28px] font-semibold text-[var(--mainText)]'>
                  <CountUp to={90} />
                </h4>
                <span className='text-xs sm:text-[13px] text-[var(--secoundaryText)] font-medium'>
                  Avg. Lighthouse score
                </span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Photo side — sticky on large screens so it stays put while
              the (taller) text column scrolls past it */}
          <RevealOnScroll
            delay={0.1}
            className='order-1 md:order-2 lg:sticky lg:top-34 rounded border border-[var(--border)] flex items-end overflow-hidden h-100 w-full'
          >
            <img
              src='/images/about.jpg'
              alt='about-img'
              className='h-full hover:scale-105 transition-all duration-300 w-full'
            />
          </RevealOnScroll>
        </div>
      </div>

      {/* Tech stack marquee */}
      <div className='border-y border-[var(--border)] py-4 md:py-6 relative w-full overflow-hidden'>
        <div className='absolute left-0 top-0 bottom-0 w-4 bg-[var(--bg-surface)]/85 z-10 pointer-events-none' />
        <div className='flex items-center w-full gap-8 md:gap-16 animate-marquee px-12'>
          {stack_Icon.map((item, i) => (
            <span key={`${item.name}-${i}`}>
              <i
                title={item.name}
                className={`${item.icon} ${item.hover} text-4xl md:text-5xl text-[var(--border)] transition-colors duration-300 cursor-text stack-icon`}
              ></i>
            </span>
          ))}
        </div>
        <div className='absolute right-0 top-0 bottom-0 w-4 bg-[var(--bg-surface)]/85 z-10 pointer-events-none' />
      </div>
    </section>
  );
};

export default About;
