import React, { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isDiplayed, setIsDiplayed] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 90) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  window.addEventListener('scroll', changeNavBackground);

  const menuItems = [
    { Home: 'home' },
    { About: 'about' },
    { Skills: 'skills' },
    { Projects: 'projects' },
  ];

  function handleClick() {
    setIsDiplayed(!isDiplayed);
  }

  const handleScrollSection = (id) => {
    const sectionElement = document.getElementById(id);
    const offset = 90;
    if (sectionElement) {
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
      <nav
        id='home'
        className={`fixed z-50 px-8 py-4 md:py-2 lg:py-4  text-white w-screen ${
          navbarColor
            ? ' bg-white text-black border-b-2  shadow-lg '
            : 'bg-transparent'
        }`}
      >
        <div className='container mx-auto'>
          <div className='flex flex-col md:flex-row   justify-between md:items-center'>
            <div className=''>
              <h1
                className={`font-bold text-xl lg:text-3xl ${
                  navbarColor ? ' text-black  ' : ' text-white'
                }`}
              >
                Adnan <span className='text-orange-500'>Hanif</span>
              </h1>
            </div>

            {/* Menu icons  */}
            <div
              onClick={handleClick}
              className='absolute right-8 cursor-pointer md:hidden '
            >
              {isDiplayed ? (
                <XMarkIcon
                  className={`h-7 w-7  ${
                    navbarColor ? ' text-black  ' : ' text-white'
                  }`}
                />
              ) : (
                <Bars3Icon
                  className={`h-7 w-7  ${
                    navbarColor ? ' text-black  ' : ' text-white'
                  }`}
                />
              )}
            </div>

            <div
              className={`flex flex-col md:flex-row md:space-x-6 lg:space-x-10 translate-all  Z-[-1] md:Z-auto duration-700 ease-in ${
                !isDiplayed ? 'top-12 hidden md:flex' : 'top-[-490px]'
              }`}
            >
              {menuItems.map((item, index) => {
                const [key, value] = Object.entries(item)[0];
                return (
                  <div
                    key={index}
                    className='my-5 lg:my-0 md:pl-0 hover:scale-110'
                  >
                    <p
                      className={`"hover:text-orange-500 hover:scale-110 font-bold text-xl cursor-pointer ${
                        navbarColor ? ' text-black  ' : ' text-white'
                      }`}
                      onClick={() => handleScrollSection(value)}
                    >
                      {key}
                    </p>
                  </div>
                );
              })}
            </div>
            <button
              className='hidden md:block py-2 px-4  text-white bg-red-900 hover:bg-orange-500  rounded-md text-center  hover:bg-brightRedLigh focus:outline-none hover:scale-110'
              onClick={() => handleScrollSection('contact')}
            >
              {' '}
              Contact me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
