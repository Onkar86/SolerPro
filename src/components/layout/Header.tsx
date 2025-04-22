import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageChange = (lang: 'en' | 'hi' | 'mr') => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  const languageNames = {
    en: 'English',
    hi: 'हिंदी',
    mr: 'मराठी',
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Sun className="w-8 h-8 text-orange-500" />
            <span className="font-bold text-xl md:text-2xl text-orange-700">SolarPro</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/calculator" className="text-gray-700 hover:text-orange-500 transition-colors">
              {t('nav.calculator')}
            </Link>
            <Link to="/govt-schemes" className="text-gray-700 hover:text-orange-500 transition-colors">
              {t('nav.govtSchemes')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
              {t('nav.contact')}
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={toggleLanguageMenu} 
                className="flex items-center gap-1 text-gray-700 hover:text-orange-500 transition-colors"
              >
                {languageNames[language]} <ChevronDown size={16} />
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg py-2 w-32">
                  <button 
                    onClick={() => handleLanguageChange('en')} 
                    className={`block w-full text-left px-4 py-2 hover:bg-orange-50 ${
                      language === 'en' ? 'text-orange-500 font-medium' : 'text-gray-700'
                    }`}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => handleLanguageChange('hi')} 
                    className={`block w-full text-left px-4 py-2 hover:bg-orange-50 ${
                      language === 'hi' ? 'text-orange-500 font-medium' : 'text-gray-700'
                    }`}
                  >
                    हिंदी
                  </button>
                  <button 
                    onClick={() => handleLanguageChange('mr')} 
                    className={`block w-full text-left px-4 py-2 hover:bg-orange-50 ${
                      language === 'mr' ? 'text-orange-500 font-medium' : 'text-gray-700'
                    }`}
                  >
                    मराठी
                  </button>
                </div>
              )}
            </div>

            <Link to="/calculator" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition-colors shadow-md transform hover:scale-105">
              {t('common.getQuote')}
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-gray-700 hover:text-orange-500"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 pb-6 px-6 overflow-y-auto">
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.home')}
            </Link>
            <Link to="/about" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.about')}
            </Link>
            <Link to="/calculator" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.calculator')}
            </Link>
            <Link to="/bill-upload" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.billUpload')}
            </Link>
            <Link to="/emi-estimator" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.emiEstimator')}
            </Link>
            <Link to="/govt-schemes" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.govtSchemes')}
            </Link>
            <Link to="/dealers" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.dealers')}
            </Link>
            <Link to="/blog" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.blog')}
            </Link>
            <Link to="/progress-tracker" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.progressTracker')}
            </Link>
            <Link to="/referral" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.referral')}
            </Link>
            <Link to="/smart-village" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.smartVillage')}
            </Link>
            <Link to="/faq" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.faq')}
            </Link>
            <Link to="/contact" className="text-lg font-medium text-gray-700 hover:text-orange-500" onClick={closeMenu}>
              {t('nav.contact')}
            </Link>

            {/* Language Selector Mobile */}
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-sm font-medium text-gray-500 mb-3">{t('nav.language')}</h3>
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => {
                    handleLanguageChange('en');
                    closeMenu();
                  }} 
                  className={`text-left ${language === 'en' ? 'text-orange-500 font-medium' : 'text-gray-700'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => {
                    handleLanguageChange('hi');
                    closeMenu();
                  }} 
                  className={`text-left ${language === 'hi' ? 'text-orange-500 font-medium' : 'text-gray-700'}`}
                >
                  हिंदी
                </button>
                <button 
                  onClick={() => {
                    handleLanguageChange('mr');
                    closeMenu();
                  }} 
                  className={`text-left ${language === 'mr' ? 'text-orange-500 font-medium' : 'text-gray-700'}`}
                >
                  मराठी
                </button>
              </div>
            </div>

            <Link 
              to="/calculator" 
              onClick={closeMenu}
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-center py-3 px-6 rounded-full shadow-md transition-colors"
            >
              {t('common.getQuote')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}