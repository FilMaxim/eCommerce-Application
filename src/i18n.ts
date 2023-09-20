import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';

i18next
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en
    }
  })
  .catch((error) => {
    throw error;
  });
