import React, { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '2349067890701';

const BackToTop = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setShowWhatsApp(window.scrollY > pageHeight * 0.05);
      setShowTop(window.scrollY > pageHeight * 0.2);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonBase =
    'w-11 h-11 sm:w-12 sm:h-12 rounded-full text-white flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1';

  const shown = 'opacity-100 translate-y-0 pointer-events-auto';
  const hidden = 'opacity-0 translate-y-4 pointer-events-none';

  return (
    <div className='fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col gap-4 pointer-events-none'>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Chat on WhatsApp'
        className={`${buttonBase} bg-[#25D366] relative ${showWhatsApp ? shown : hidden}`}
      >
        <span className='absolute inset-0 rounded-full bg-[#25D366] opacity-75 wa-breathe'></span>
        <i className='fa-brands fa-whatsapp text-2xl relative'></i>
      </a>

      <button
        onClick={scrollToTop}
        aria-label='Back to top'
        className={`${buttonBase} bg-[var(--blue-PRY)] ${showTop ? shown : hidden}`}
      >
        <i className='fa-solid fa-angle-up text-xl'></i>
      </button>
    </div>
  );
};

export default BackToTop;
