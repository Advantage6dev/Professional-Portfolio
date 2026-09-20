import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setIsVisible(window.scrollY > pageHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label='Back to top'
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-11 h-11 sm:w-12 sm:h-12
        rounded-full bg-[var(--blue-PRY)] hover:-translate-y-1 text-white
        flex items-center justify-center shadow-lg cursor-pointer
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <i className='fa-solid fa-angle-up text-xl'></i>
    </button>
  );
};

export default BackToTop;
