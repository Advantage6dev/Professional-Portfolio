import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => setStatus('idle'), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_LINK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(import.meta.env.VITE_MAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className='bg-[var(--bgCL)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 md:h-97'
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
                required
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
                required
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
              required
              className='w-full border border-[var(--border)] rounded-lg pl-10 pr-3.5 py-3 text-sm text-[var(--mainText)] placeholder:text-[var(--secoundaryText)] focus:outline-none focus:border-[var(--blue-PRY)] transition-colors resize-none'
            />
          </div>
        </div>

        <button
          type='submit'
          disabled={status === 'sending'}
          className='mt-6 inline-flex items-center gap-2 bg-[var(--blue-PRY)] hover:bg-[var(--accent)] hover:-translate-y-1 text-white text-xs font-semibold uppercase tracking-wide px-6 py-3.5 rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0'
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
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className='mt-3 text-sm text-green-500'>
            Thanks! Your message has been sent.
          </p>
        )}
        {status === 'error' && (
          <p className='mt-3 text-sm text-red-500'>
            Something went wrong, Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
