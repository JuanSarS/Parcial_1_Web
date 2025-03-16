import { createContext, useContext, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from '../locales/en.json';
import esMessages from '../locales/es.json';

const messages: Record<string, Record<string, string>> = {
  en: enMessages,
  es: esMessages,
};

const LanguageContext = createContext({
  locale: 'en',
  switchLanguage: (lang: string) => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
 
  const browserLocale = navigator.language.split('-')[0];
  const storedLocale = localStorage.getItem('locale');
  const defaultLocale = storedLocale || (messages[browserLocale] ? browserLocale : 'en');

  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const switchLanguage = (lang: string) => {
    setLocale(lang);
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
