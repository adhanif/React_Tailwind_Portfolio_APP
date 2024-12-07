export const i18nOptions = {
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['navbar'],
  load: 'currentOnly',
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
  returnEmptyString: false,
  react: {
    useSuspense: true,
  },
};
