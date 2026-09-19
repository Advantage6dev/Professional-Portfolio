import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // wire this up to your email service / API route
    console.log(form);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('davidjoy@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const servicesRef = useRef(null);

  const isInView = useInView(servicesRef, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      id='contact'
      ref={servicesRef}
      className='relative overflow-hidden bg-[var(--navbar)] px-6 sm:px-10 lg:px-8 py-16 sm:py-24 lg:py-28'
    >
      <div
        className={`max-w-[1200px] relative mx-auto ${isInView ? 'animate-slide-in' : 'opacity-0'}`}
      >
        {/* Header */}
        <div className='flex items-start gap-4'>
          <div>
            <div className='flex items-center gap-2 mb-3.5'>
              <span className='w-1.5 h-1.5 rounded-full bg-[var(--blue-PRY)]'></span>
              <span className='text-sm font-semibold text-[var(--blue-PRY)]'>
                Contact
              </span>
            </div>

            <h2 className='font-semibold text-[var(--mainText)] leading-tight text-[32px] sm:text-[42px] lg:text-[48px]'>
              Let's build something
              <br />
              <span className='text-[var(--blue-PRY)]'>great together.</span>
            </h2>
          </div>

          {/* decorative squiggle arrow, desktop only */}
          <svg
            viewBox='0 0 80 70'
            className='hidden sm:block w-16 lg:w-20 mt-2 flex-shrink-0'
            fill='none'
            stroke='var(--blue-PRY)'
            strokeWidth='2'
            strokeLinecap='round'
          >
            <path d='M8 45c8 10 20 8 22-2s-8-14-14-8 2 20 16 18c10-1 20-12 26-28' />
            <path d='M50 8l8 4-2 9' />
          </svg>
        </div>

        <p className='mt-4 text-[var(--secoundaryText)] text-[15px] sm:text-base max-w-[560px]'>
          Have a project in mind, need a website, or want to work together? Send
          me a message and I'll get back to you as soon as possible.
        </p>

        <div className='mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 lg:gap-8'>
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className='bg-[var(--bgCL)] border border-[var(--border)] rounded-2xl p-6 sm:p-8'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <div>
                <label className='block text-xs font-semibold uppercase tracking-wide text-[var(--mainText)] mb-2'>
                  Name
                </label>
                <div className='relative'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    fill='none'
                    stroke='var(--secoundaryText)'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='absolute left-3.5 top-1/2 -translate-y-1/2'
                  >
                    <circle cx='12' cy='8' r='4' />
                    <path d='M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8' />
                  </svg>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder='Your name'
                    className='w-full border border-[var(--border)] rounded-lg pl-10 pr-3.5 py-3 text-sm text-[var(--mainText)] placeholder:text-[var(--secoundaryText)] focus:outline-none focus:border-[var(--blue-PRY)] transition-colors'
                  />
                </div>
              </div>

              <div>
                <label className='block text-xs font-semibold uppercase tracking-wide text-[var(--mainText)] mb-2'>
                  Email
                </label>
                <div className='relative'>
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    fill='none'
                    stroke='var(--secoundaryText)'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='absolute left-3.5 top-1/2 -translate-y-1/2'
                  >
                    <rect x='2' y='4' width='20' height='16' rx='2' />
                    <path d='m2 7 10 6 10-6' />
                  </svg>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='Your email address'
                    className='w-full border border-[var(--border)] rounded-lg pl-10 pr-3.5 py-3 text-sm text-[var(--mainText)] placeholder:text-[var(--secoundaryText)] focus:outline-none focus:border-[var(--blue-PRY)] transition-colors'
                  />
                </div>
              </div>
            </div>

            <div className='mt-5'>
              <label className='block text-xs font-semibold uppercase tracking-wide text-[var(--mainText)] mb-2'>
                Message
              </label>
              <div className='relative'>
                <svg
                  viewBox='0 0 24 24'
                  width='16'
                  height='16'
                  fill='none'
                  stroke='var(--secoundaryText)'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='absolute left-3.5 top-3.5'
                >
                  <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
                </svg>
                <textarea
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='Tell me about your project, goals, or what you need help with...'
                  rows={5}
                  className='w-full border border-[var(--border)] rounded-lg pl-10 pr-3.5 py-3 text-sm text-[var(--mainText)] placeholder:text-[var(--secoundaryText)] focus:outline-none focus:border-[var(--blue-PRY)] transition-colors resize-none'
                />
              </div>
            </div>

            <button
              type='submit'
              className='mt-6 inline-flex items-center gap-2 bg-[var(--blue-PRY)] hover:bg-[var(--accent)] hover:-translate-y-1 text-white text-xs font-semibold uppercase tracking-wide px-6 py-3.5 rounded-lg transition-all duration-300 cursor-pointer'
            >
              <svg
                viewBox='0 0 24 24'
                width='15'
                height='15'
                fill='none'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='m22 2-7 20-4-9-9-4Z' />
                <path d='M22 2 11 13' />
              </svg>
              Send Message
            </button>
          </form>

          {/* Sidebar */}
          <div className='flex flex-col gap-5'>
            {/* WhatsApp */}
            <a
              href='https://wa.me/9067890701'
              target='_blank'
              rel='noopener noreferrer'
              className='block border border-emerald-200 bg-emerald-50 rounded-2xl p-5  hover:bg-emerald-100 transition-colors'
            >
              <div className='flex items-start gap-3.5'>
                <div className='w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0'>
                  <svg viewBox='0 0 24 24' width='18' height='18' fill='white'>
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413' />
                  </svg>
                </div>
                <div className='min-w-0'>
                  <h3 className='font-semibold text-[#0f172a]'>
                    Quickest way to reach me
                  </h3>
                  <p className='text-[13.5px] text-[var(--secoundaryText)] mt-1 leading-relaxed'>
                    Send me a message on WhatsApp and I’ll get back to you as
                    soon as I can.
                  </p>
                  <span className='mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400'>
                    +234 9067890701
                    <svg
                      viewBox='0 0 24 24'
                      width='13'
                      height='13'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M5 12h14M13 6l6 6-6 6' />
                    </svg>
                  </span>
                </div>
              </div>
            </a>

            {/* Based in */}
            <div
              className='border border-[var(--border)] rounded-2xl p-5'
              style={{ background: 'rgba(37,99,235,0.05)' }}
            >
              <div className='flex items-start gap-3.5'>
                <div className='w-10 h-10 rounded-xl bg-[var(--blue-PRY)] flex items-center justify-center flex-shrink-0'>
                  <svg
                    viewBox='0 0 24 24'
                    width='18'
                    height='18'
                    fill='none'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
                    <circle cx='12' cy='10' r='3' />
                  </svg>
                </div>
                <div className='min-w-0'>
                  <h3 className='font-semibold text-[var(--mainText)]'>
                    Based in
                  </h3>
                  <p className='text-[13.5px] text-[var(--secoundaryText)] mt-1'>
                    Ibadan, Oyo State, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Available for work */}
            <div className='border border-emerald-200 bg-emerald-50 rounded-2xl p-5'>
              <div className='flex items-start gap-3.5'>
                <div className='w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0'>
                  <span className='w-2.5 h-2.5 rounded-full bg-emerald-500' />
                </div>
                <div className='min-w-0'>
                  <h3 className='font-semibold text-[#0f172a]'>
                    Available for Work
                  </h3>
                  <p className='text-[13.5px] text-[var(--secoundaryText)] mt-1 leading-relaxed'>
                    Currently open to freelance projects, collaborations, and
                    frontend development opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
