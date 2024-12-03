import React, { useState } from 'react';

import { useClickOutside } from '../hooks/useClickOutside';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const languages = ['Suomi', 'English'];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const ref = useClickOutside(() => setIsOpen(false));

  const handleLanguage = (lan) => {
    setSelectedLanguage(lan);
    setIsOpen(false);
  };

  return (
    <div className='relative inline-block'>
      <button
        className='flex items-center justify-center rounded-md bg-red-900 py-2 px-3 border border-transparent text-base text-white shadow-md transition-all hover:shadow-lg mr-2'
        type='button'
        onClick={() => setIsOpen(!isOpen)}>
        {selectedLanguage === 'English' ? 'EN' : 'FI'}
        <ChevronDownIcon className='h-6 w-5 text-white ml-1' />
      </button>
      {isOpen && (
        <ul
          role='menu'
          className='absolute z-10 mt-2 w-max border border-slate-200 bg-white p-1.5 shadow-lg focus:outline-none top-full left-0'
          ref={ref}>
          {languages.map((lan) => (
            <li
              key={lan}
              role='menuitem'
              className='cursor-pointer text-black flex w-full items-center text-base p-2 transition-all hover:bg-slate-100 hover:underline hover:text-orange-500 focus:bg-slate-100 active:bg-slate-100'
              onClick={() => {
                handleLanguage(lan);
              }}>
              {lan}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
