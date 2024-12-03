import React, { useState } from 'react';

import { useClickOutside } from '../hooks/useClickOutside';

const languages = ['Suomi', 'English'];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const ref = useClickOutside(() => setIsOpen(false));

  const handleLanguage = (lan) => {
    setSelectedLanguage(lan);
  };

  return (
    <>
      <button
        className='dropdown-button rounded-md bg-red-900 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg  mr-2 w-[5rem]'
        type='button'
        onClick={() => setIsOpen(!isOpen)}>
        {selectedLanguage}
      </button>
      {isOpen && (
        <ul
          role='menu'
          className=' absolute z-10 min-w-[150px] ml-[-2.15rem] border border-slate-200 bg-white p-1.5 shadow-lg focus:outline-none mt-[7.7rem] '
          ref={ref}>
          {languages.map((lan) => (
            <li
              key={lan}
              role='menuitem'
              className='cursor-pointer text-slate-800 flex w-full text-sm items-center  p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'
              onClick={() => {
                handleLanguage(lan);
              }}>
              {lan}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default LanguageSwitcher;
