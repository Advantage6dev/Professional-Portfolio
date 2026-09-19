import React from 'react';

const navigationLinks = [
  {
    href: '#about',
    text: 'About',
  },
  {
    href: '#services',
    text: 'Services',
  },
  {
    href: '#how-i-work',
    text: 'How I Work',
  },
  {
    href: '#project',
    text: 'Projects',
  },
  {
    href: '#build',
    text: 'From the Build',
  },
  {
    href: '#faq',
    text: 'FAQ',
  },
];

const socialLinks = [
  {
    href: 'https://x.com/Advantage__dev',
    text: 'X',
  },
  {
    href: 'https://www.linkedin.com/in/advantagedev/',
    text: 'LinkedIn',
  },
  {
    href: 'https://github.com/Advantage6dev',
    text: 'GitHub',
  },
];

const Footer = () => {
  return (
    <section className='w-full bg-[var(--random-cl)] relative overflow-hidden px-5 sm:px-8 md:px-12 lg:px-16  border-t border-[var(--border)]'>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8 sm:gap-10 py-8 sm:py-10'>
        <div className='w-full sm:max-w-100'>
          <h2 className='font-semibold text-sm md:text-base bg-white border border-[var(--border)] py-1 lg:py-2 px-[14px] rounded-md cursor-text w-fit'>
            Advantage<span className='text-[var(--accent)]'>_dev</span>
          </h2>

          <p className='font-medium text-lg lg:text-xl text-[#f8fafc] mt-2 max-w-70 sm:max-w-0'>
            Creating{' '}
            <span className='text-[var(--accent)]'>Web Experience</span> That
            Drives Results.
          </p>
        </div>

        {/* Link columns — grouped together, right edge */}
        <div className='flex gap-10 sm:gap-16'>
          <div className=''>
            <h2 className='text-[var(--blue-PRY)] text-lg font-medium'>
              Explore
            </h2>
            <span className='flex flex-col gap-1 mt-2'>
              {navigationLinks.map((link, id) => {
                return (
                  <a
                    href={link.href}
                    key={id}
                    className='block text-[var(--secoundaryText)] font-medium hover:text-[#f8fafc] '
                  >
                    {link.text}
                  </a>
                );
              })}
            </span>
          </div>
          <div className=''>
            <h2 className='text-[var(--blue-PRY)] text-lg font-medium mb-2'>
              Socials
            </h2>
            <span className='flex flex-col gap-1 mt-2'>
              {socialLinks.map((link, id) => {
                return (
                  <a
                    href={link.href}
                    key={id}
                    target='_blank'
                    className='block text-[var(--secoundaryText)] font-medium hover:text-[#f8fafc]'
                  >
                    {link.text}
                  </a>
                );
              })}
            </span>
          </div>
        </div>
      </div>
      <div className='border-t border-[var(--border)] py-4'>
        <div className='w-full text-center'>
          <p className='text-[var(--secoundaryText)] text-base'>
            &copy; {new Date().getFullYear()} Advantage_dev. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
