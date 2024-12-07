import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from './resources';
import { detectionOptions } from './config/detection';
import { i18nOptions } from './config/option';

export const SUPPORTED_LANGUAGES = Object.keys(resources);

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: SUPPORTED_LANGUAGES,
    detection: detectionOptions,
    ...i18nOptions,
  });

export default i18n;
