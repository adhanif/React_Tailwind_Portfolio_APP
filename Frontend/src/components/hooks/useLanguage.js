import { useCallback } from 'react';
import i18n from '../../locales/i18n.config';
import { useTranslation } from 'react-i18next';

export const languages = [
  {
    code: 'en',
    names: {
      en: 'English',
      fi: 'Englanti',
    },
    flag: '🇬🇧',
  },
  {
    code: 'fi',
    names: {
      en: 'Finnish',
      fi: 'Suomi',
    },
    flag: '🇫🇮',
  },
];

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = languages.find((lang) => lang.code === i18n.language ?? languages[0]);

  const handleLanguageChange = useCallback(
    async (language) => {
      try {
        // Store in localStorage
        localStorage.setItem('language', language.code);
        // Change i18n language
        await i18n.changeLanguage(language.code);
      } catch (error) {
        console.error('Error changing language:', error);
      }
    },
    [i18n],
  );

  const getLanguageName = useCallback(
    (language) => {
      const currentLang = i18n.language;
      // console.log(language);
      return language.names[currentLang] || language.names.en;
    },
    [i18n.language],
  );

  return {
    selectedLanguage,
    handleLanguageChange,
    getLanguageName,
  };
};
