import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stack = [
  {
    name: 'HTML5',
    icon: 'fa-brands fa-html5',
    hover: 'hover:text-orange-500',
  },
  {
    name: 'CSS3',
    icon: 'fa-brands fa-css3-alt',
    hover: 'hover:text-blue-500',
  },
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
  {
    name: 'Git',
    icon: 'fa-brands fa-git-alt',
    hover: 'hover:text-orange-600',
  },
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
  {
    name: 'Figma',
    icon: 'fa-brands fa-figma',
    hover: 'hover:text-purple-500',
  },
  {
    name: 'Framer',
    icon: 'fa-solid fa-layer-group',
    hover: 'hover:text-purple-500',
  },
  {
    name: 'Vite',
    icon: 'fa-solid fa-bolt',
    hover: 'hover:text-yellow-400',
  },
  {
    name: 'Express',
    icon: 'fa-solid fa-server',
    hover: 'hover:text-green-400',
  },
  {
    name: 'HTML5',
    icon: 'fa-brands fa-html5',
    hover: 'hover:text-orange-500',
  },
  {
    name: 'CSS3',
    icon: 'fa-brands fa-css3-alt',
    hover: 'hover:text-blue-500',
  },
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
  {
    name: 'Git',
    icon: 'fa-brands fa-git-alt',
    hover: 'hover:text-orange-600',
  },
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
  {
    name: 'Figma',
    icon: 'fa-brands fa-figma',
    hover: 'hover:text-purple-500',
  },
  {
    name: 'Framer',
    icon: 'fa-solid fa-layer-group',
    hover: 'hover:text-purple-500',
  },
  {
    name: 'Vite',
    icon: 'fa-solid fa-bolt',
    hover: 'hover:text-yellow-400',
  },
  {
    name: 'Express',
    icon: 'fa-solid fa-server',
    hover: 'hover:text-green-400',
  },
];

const About = () => {
  const [isMobile, setIsMobile] = useState(() => {
    return window.innerWidth < 768;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section
      id='about'
      className='bg-[var(--bg-surface)] py-16 sm:py-24 lg:py-28'
    >
      <div className='max-w-[1120px] mx-auto px-6 sm:px-10 lg:px-8 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start'>
          {/* Text side */}
          <motion.div
            initial={{
              opacity: 0,
              x: isMobile ? 0 : -120,
              y: isMobile ? 60 : 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='order-2 md:order-2'
          >
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
                <span className='text-[var(--mainText)] font-medium px-2.5 py-0.5 bg-[var(--navbar)] flex gap-0 w-fit border border-[var(--border)] rounded-lg'>
                  <button className='hover:-translate-x-2 cursor-pointer hover:bg-[var(--accent)] transition-all duration-300 px-3 py-2 rounded-lg hover:text-[var(--bgCL)]'>
                    View CV
                  </button>
                  <button className='hover:translate-x-2 cursor-pointer hover:bg-[var(--accent)] transition-all duration-300 px-3 py-2 rounded-lg hover:text-[var(--bgCL)]'>
                    Download CV
                  </button>
                </span>
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
                <span className='px-3 py-1 border border-[var(--border)] text-[var(--mainText)] font-medium text-base rounded-lg'>
                  HTML5
                </span>
                <span className='px-3 py-1 border border-[var(--border)] text-[var(--mainText)] font-medium text-base rounded-lg'>
                  CSS3
                </span>
                <span className='px-3 py-1 border border-[var(--border)] text-[var(--mainText)] font-medium text-base rounded-lg'>
                  JavaScript
                </span>
                <span className='px-3 py-1 border border-[var(--border)] text-[var(--mainText)] font-medium text-base rounded-lg'>
                  React.js
                </span>
                <span className='px-3 py-1 border border-[var(--border)] text-[var(--mainText)] font-medium text-base rounded-lg'>
                  Tailwind CSS
                </span>
                <span className='px-3 py-1 border border-[var(--border)] text-[var(--mainText)] font-medium text-base rounded-lg'>
                  Framer
                </span>
                <span className='px-3 py-1 border border-[var(--border)] text-[var(--mainText)] font-medium text-base rounded-lg'>
                  GIT
                </span>
              </div>
            </div>

            <div className='flex gap-10 sm:gap-12 mt-4 pt-2'>
              <div>
                <h4 className='text-2xl sm:text-[28px] font-semibold text-[var(--mainText)]'>
                  5
                </h4>
                <span className='text-xs sm:text-[13px] text-[var(--secoundaryText)]'>
                  Projects shipped
                </span>
              </div>
              <div>
                <h4 className='text-2xl sm:text-[28px] font-semibold text-[var(--mainText)]'>
                  2 yrs
                </h4>
                <span className='text-xs sm:text-[13px] text-[var(--secoundaryText)]'>
                  Building for the web
                </span>
              </div>
              <div>
                <h4 className='text-2xl sm:text-[28px] font-semibold text-[var(--mainText)]'>
                  90
                </h4>
                <span className='text-xs sm:text-[13px] text-[var(--secoundaryText)]'>
                  Avg. Lighthouse score
                </span>
              </div>
            </div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            initial={{
              opacity: 0,
              x: isMobile ? 0 : 120,
              y: isMobile ? 60 : 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: isMobile ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='order-1 md:order-2 rounded border border-[var(--border)] flex items-end overflow-hidden h-100 w-full'
          >
            <img
              src='/images/about.jpg'
              alt='about-img'
              className='h-full hover:scale-105 transition-all duration-300 w-full'
            />
            {/* <span className='text-[13px] font-mono text-[var(--secoundaryText)]'>
              [ photo / portrait placeholder ]
            </span> */}
          </motion.div>
        </div>
      </div>
      {/* Tech stack marquee */}
      <div className='border-y border-[var(--border)]  mt-12 lg:mt-20 py-6 px-12'>
        {/* Left cover */}
        <div className='absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-[var(--bg-surface)] z-10 pointer-events-none' />
        <div className='flex  items-center w-full gap-8 md:gap-16 animate-marquee px-12'>
          {stack.map((item) => (
            <span key={item.name}>
              <i
                title={item.name}
                className={`${item.icon} ${item.hover} text-4xl md:text-5xl text-[var(--border)] transition-colors duration-300 cursor-text stack-icon`}
              ></i>
            </span>
          ))}
        </div>
        {/* Right cover */}
        <div className='absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-[var(--bg-surface)] z-10 pointer-events-none' />
      </div>
    </section>
  );
};

export default About;
