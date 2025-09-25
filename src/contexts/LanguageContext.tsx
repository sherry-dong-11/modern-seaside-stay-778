
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { en } from '../locales/en';
import { it } from '../locales/it';
import { zh } from '../locales/zh';

type Translations = typeof en;

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translations;
}

const translations: Record<string, Translations> = {
  en,
  it,
  zh
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');
  const [t, setT] = useState<Translations>(translations.en);

  console.log('LanguageProvider rendered, current language:', language);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    console.log('Saved language from localStorage:', savedLanguage);
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
      setT(translations[savedLanguage]);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    console.log('Changing language to:', lang);
    if (translations[lang]) {
      setLanguage(lang);
      setT(translations[lang]);
      localStorage.setItem('language', lang);
    }
  };

  const contextValue = { language, setLanguage: changeLanguage, t };
  console.log('LanguageProvider context value:', contextValue);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  console.log('useLanguage called, context:', context);
  if (context === undefined) {
    console.error('LanguageContext is undefined - make sure LanguageProvider is wrapping the component');
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
