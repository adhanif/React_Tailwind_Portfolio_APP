import React from 'react';
import portfolioImage from '../img/portfolio.jpeg';
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar';

export default function HeroSection() {
  return (
    <>
      <div
        className='flex justify-center relative overflow-hidden  bg-no-repeat bg-right-bottom md:bg-center bg-cover  h-[300px] md:h-[810px]  md:bg-fixed'
        style={{
          backgroundImage: `url(${portfolioImage})`,
        }}
      >
        <Navbar />

        <div
          className='flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-opacity-50   '
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
          <h1 className='text-white font-medium text-4xl md:text-6xl lg:text-8xl text-center'>
            I am Adnan Hanif
          </h1>
          <span className='text-white mt-5 md:mt-10 font text-xl md:text-2xl lg:text-5xl'>
            {' '}
            <Typewriter
              options={{
                strings: [
                  'Full-Stack Web Developer',
                  'Front-end Focus',
                  'Enjoy solving problems ',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>
    </>
  );
}
