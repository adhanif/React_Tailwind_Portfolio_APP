import React, { useEffect, useState } from 'react';
import scrollUp from '../img/scroll.png';

export default function Scroller() {
  const [isVisible, setIsVisible] = useState(false);
  //   className={`${isVisible} ? visible: invisible`}

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
    <div className={`${isVisible ? 'opacity-1' : 'hidden'}`}>
      <img
        src={scrollUp}
        alt='scroller'
        className=' h-8 rounded-full fixed bottom-5 right-5 transition-opacity duration-300 ease-in-out cursor-pointer  bg-white hover:bg-white opacity-1'
        onClick={handleScrollToTop}
      />
    </div>
  );
}
