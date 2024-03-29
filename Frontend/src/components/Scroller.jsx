import React, { useEffect, useState } from 'react';
import scrollUp from '../img/scroll.png';

export default function Scroller() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleVisibility = () => {
    const scrollPosition = window.scrollY;
    const threshold = 300;
    setIsVisible(scrollPosition > threshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibility);
    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  }, [handleVisibility]);

  return (
    <div
      className={`${
        isVisible ? 'opacity-1' : 'hidden'
      } z-50  p-2.5 fixed   bottom-5 right-4 bg-white flex justify-center items-center border-r rounded-full shadow-md shadow-gray-950 hover:bg-[#F5F8FD] cursor-pointer transition-opacity duration-300 ease-in-out text-black`}
      onClick={handleScrollToTop}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m4.5 15.75 7.5-7.5 7.5 7.5'
        />
      </svg>
    </div>
  );
}
