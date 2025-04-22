import React, { createContext, useContext, useState, ReactNode } from 'react';
import { en } from '../locales/en';
import { hi } from '../locales/hi';
import { mr } from '../locales/mr';

type Language = 'en' | 'hi' | 'mr';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en,
  hi,
  mr,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let translation: any = translations[language];
    
    for (const k of keys) {
      if (!translation[k]) {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        
        // Fallback to English if key doesn't exist in current language
        if (language !== 'en') {
          let englishTranslation = translations['en'];
          for (const ek of keys) {
            englishTranslation = englishTranslation[ek];
            if (!englishTranslation) break;
          }
          return englishTranslation || key;
        }
        
        return key;
      }
      translation = translation[k];
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};