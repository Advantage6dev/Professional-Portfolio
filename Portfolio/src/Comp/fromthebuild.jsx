import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const posts = [
  {
    badge: 'Build Update',
    badgeColor: '#2563EB',
    date: 'Sep 13, 2026',
    title:
      'Finally started rebuilding my portfolio after weeks of postponing it…',
    excerpt:
      'After weeks of putting it off, I finally started building my new portfolio this week. It feels good to be back…',
  },
  {
    badge: 'Tech Tip',
    badgeColor: '#2563EB',
    date: 'Sep 10, 2026',
    title:
      'Why 100dvh can be a better choice than 100vh for modern responsive layouts',
    excerpt:
      "I've been testing a lot of viewport behaviour lately, and 100dvh has made a huge difference, especially…",
  },
  {
    badge: 'Design & Dev',
    badgeColor: '#2563EB',
    date: 'Sep 7, 2026',
    title:
      'Why I design in Framer before coding (instead of the other way around)',
    excerpt:
      'I used to code first, then keep changing the design. Now I design in Framer first, and it saves me…',
  },
  {
    badge: 'Progress',
    badgeColor: '#2563EB',
    date: 'Sep 2, 2026',
    title:
      'Working on a big React project and learning real-world dependencies',
    excerpt:
      'This week has been all about setting up the project structure, handling dependencies, routing…',
  },
];

const AUTHOR = 'Ojekunle David-Joy';

const FromTheBuild = () => {
  const servicesRef = useRef(null);

  const isInView = useInView(servicesRef, {
    once: true,
    amount: 0.1,
  });
  return (
    <motion.section
      id='build'
      ref={servicesRef}
      className='w-full px-6 sm:px-10 lg:px-8 py-16 sm:py-24 lg:py-28'
      style={{
        background:
          'radial-gradient(120% 100% at 20% 0%, #16233d 0%, #0B1120 55%)',
      }}
    >
      <div
        className={`max-w-[1200px] mx-auto ${isInView ? 'animate-slide-in' : 'opacity-0'}`}
      >
        {/* Header */}
        <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16'>
          <div>
            <div className='flex items-center gap-2 mb-3.5'>
              <span className='w-1.5 h-1.5 rounded-full bg-[#3B82F6]'></span>
              <span className='text-sm font-semibold text-[#3B82F6]'>
                From the Build
              </span>
            </div>

            <h2 className='font-semibold text-white leading-tight text-[26px] sm:text-[34px] lg:text-[40px] max-w-[620px]'>
              What I'm building, learning, and figuring out{' '}
              <span className='text-[#3B82F6]'>along the way</span>
            </h2>

            <p className='mt-4 text-[#94A3B8] text-[15px] sm:text-base max-w-[560px] leading-relaxed'>
              A collection of ideas, lessons, and build updates from my journey
              as a developer — shared as I learn, experiment, and ship.
            </p>
          </div>

          <div className='flex items-center gap-4 flex-shrink-0'>
            <a
              href='https://x.com/Advantage__dev'
              aria-label='X'
              className='text-white hover:text-[#3B82F6] transition-colors'
            >
              <svg
                viewBox='0 0 24 24'
                width='18'
                height='18'
                fill='currentColor'
              >
                <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
              </svg>
            </a>
            <span className='w-px h-4 bg-white/20' />
            <a
              href='https://www.linkedin.com/in/advantagedev/'
              aria-label='LinkedIn'
              className='text-white hover:text-[#3B82F6] transition-colors'
            >
              <svg
                viewBox='0 0 24 24'
                width='18'
                height='18'
                fill='currentColor'
              >
                <path d='M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55z' />
              </svg>
            </a>
            <p className='flex items-center gap-1.5 text-sm text-white'>
              Follow me for more
              <svg
                viewBox='0 0 24 24'
                width='14'
                height='14'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M5 12h14M13 6l6 6-6 6' />
              </svg>
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6'>
          {posts.map((post) => (
            <div
              key={post.title}
              className='bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden flex flex-col'
            >
              {/* image placeholder with badge */}
              <div
                className='relative aspect-[4/3]'
                style={{
                  background: 'linear-gradient(135deg, #1e3a8a, #0f172a)',
                }}
              >
                <span
                  className='absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full'
                  style={{ background: post.badgeColor }}
                >
                  {post.badge}
                </span>
              </div>

              <div className='p-5 flex flex-col flex-1'>
                {/* author row */}
                <div className='flex items-center gap-2.5 mb-4'>
                  <div className='w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-semibold text-white flex-shrink-0'>
                    {AUTHOR.split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div className='leading-tight'>
                    <p className='text-[13px] font-medium text-white'>
                      {AUTHOR}
                    </p>
                    <p className='text-[12px] text-[#64748B]'>{post.date}</p>
                  </div>
                </div>

                <h3 className='text-white font-semibold text-[15px] sm:text-base leading-snug mb-2.5'>
                  {post.title}
                </h3>

                <p className='text-[#94A3B8] text-[13.5px] leading-relaxed mb-5 flex-1'>
                  {post.excerpt}
                </p>

                <a
                  href='#'
                  className='inline-flex items-center gap-1.5 text-sm font-semibold text-[#3B82F6] hover:text-[#60A5FA] transition-colors'
                >
                  Read post
                  <svg
                    viewBox='0 0 24 24'
                    width='14'
                    height='14'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M5 12h14M13 6l6 6-6 6' />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FromTheBuild;
