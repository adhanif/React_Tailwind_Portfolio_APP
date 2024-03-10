import React from 'react';
import logowhite from '../img/logowhite.svg';
import facebook from '../img/icon-facebook.svg';
import xing from '../img/logo-xing.svg';
import linkedin from '../img/linkedin.svg';
import instagram from '../img/icon-instagram.svg';
import github from '../img/github.png';

export default function Footer() {
  const today = new Date();

  const sectionItems = [
    { Home: 'home' },
    { About: 'about' },
    { Skills: 'skills' },
    { Projects: 'projects' },
  ];
  const handleScrollSection = (id) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      const offset = 90;
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <footer className='bg-veryDarkBlue'>
        <div className='container flex flex-col justify-between mx-auto md:px-8 space-y-8 py-10  lg:flex-row  md:space-y-0  '>
          {/* logo container  */}
          <div className='flex flex-col space-y-12 md:mb-8'>
            <img src={logowhite} alt='' className='lg:h-8 ' />
            <div className='flex justify-center space-x-4 '>
              <a href='' className='hover:scale-125 ' target='_blank'>
                <img
                  src={facebook}
                  alt='facebook'
                  className='h-8  rounded-md hover:bg-black'
                />
              </a>
              <a
                href='https://www.xing.com/profile/Adnan_hanif5/cv'
                className='hover:scale-125 bg-white rounded-md'
                target='_blank'
              >
                <img src={xing} alt='' className='h-8 ' />
              </a>
              <a
                href='https://github.com/adhanif'
                className='hover:scale-125 bg-white rounded'
                target='_blank'
              >
                <img src={github} alt='' className='h-8 rounded-md' />
              </a>
              <a
                href='https://www.linkedin.com/in/adnan-hanif/'
                className='hover:scale-125 bg-white rounded-md'
                target='_blank'
              >
                <img src={linkedin} alt='' className='h-8 ' />
              </a>
              <a
                href='https://www.instagram.com/danilonewarrior/'
                className='hover:scale-125'
                target='_blank'
              >
                <img src={instagram} alt='' className='h-8' />
              </a>
            </div>
          </div>
          <div className='flex flex-row justify-around space-x-40 '>
            <div className='flex flex-col space-y-3 text-white '>
              <div className='flex flex-col space-y-3 text-white '>
                {sectionItems.map((item, i) => {
                  const [key, value] = Object.entries(item)[0];
                  return (
                    <p
                      className='flex flex-col space-y-3 text-white hover:text-brightRed hover:scale-110 cursor-pointer'
                      onClick={() => handleScrollSection(value)}
                      key={i}
                    >
                      {key}
                    </p>
                  );
                })}
              </div>
            </div>
            {/*  */}
            <div className='flex flex-col space-y-3 text-white  md:mb-20'>
              <p
                className='flex flex-col space-y-3 text-white hover:text-brightRed hover:scale-110 cursor-pointer'
                onClick={() => handleScrollSection('contact')}
              >
                Contact
              </p>

              <a href='' className='hover:text-brightRed hover:scale-110'>
                Privacy Policy
              </a>
            </div>
          </div>
          {/* searchbar+copyright container */}
          <div className='flex flex-col items-center space-y-12 '>
            <div className='flex space-x-3 '>
              <input
                type='text'
                className='flex-1 px-4 rounded-full focus:outline-none'
                placeholder='Subscribe '
              />
              <button className='px-6 py-2 text-white rounded-full bg-red-900 hover:bg-orange-500 focus:outline-none hover:scale-110'>
                Go
              </button>
            </div>
            <div className='text-white text-center'>
              Copyright &copy; {today.getFullYear()}, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
