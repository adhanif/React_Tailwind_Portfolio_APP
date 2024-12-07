import React, { useState } from 'react';

import { useClickOutside } from '../hooks/useClickOutside';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useLanguage } from '../hooks/useLanguage';
import { languages } from '../hooks/useLanguage';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside(() => setIsOpen(false));
  const { selectedLanguage, handleLanguageChange, getLanguageName } = useLanguage();

  const handleLanguage = async (language) => {
    try {
      await handleLanguageChange(language);
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <div className='relative inline-block' ref={ref}>
      <button
        className='flex items-center justify-center rounded-md bg-red-900 py-2 px-3 border border-transparent text-base text-white shadow-md transition-all hover:shadow-lg mr-2'
        type='button'
        onClick={() => setIsOpen(!isOpen)}>
        {selectedLanguage.code.toLocaleUpperCase()}
        <ChevronDownIcon className={`h-6 w-5 text-white ml-1 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <ul
          role='menu'
          className='absolute z-10 mt-2 w-max border border-slate-200 bg-white p-1.5 shadow-lg focus:outline-none top-full left-0'>
          {languages.map((language) => (
            <li
              key={language.code}
              role='menuitem'
              className='cursor-pointer text-black flex w-full items-center text-base p-2 transition-all hover:bg-slate-100 hover:underline hover:text-orange-500 focus:bg-slate-100 active:bg-slate-100'
              onClick={() => {
                handleLanguage(language);
              }}>
              {getLanguageName(language)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
