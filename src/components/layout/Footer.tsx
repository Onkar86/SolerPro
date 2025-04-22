import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-8 h-8 text-orange-400" />
              <span className="font-bold text-2xl text-orange-400">SolarPro</span>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-300 hover:text-orange-400 transition-colors">
                  {t('nav.calculator')}
                </Link>
              </li>
              <li>
                <Link to="/emi-estimator" className="text-gray-300 hover:text-orange-400 transition-colors">
                  {t('nav.emiEstimator')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-orange-400 transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4 text-orange-400">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/govt-schemes" className="text-gray-300 hover:text-orange-400 transition-colors">
                  {t('nav.govtSchemes')}
                </Link>
              </li>
              <li>
                <Link to="/dealers" className="text-gray-300 hover:text-orange-400 transition-colors">
                  {t('nav.dealers')}
                </Link>
              </li>
              <li>
                <Link to="/smart-village" className="text-gray-300 hover:text-orange-400 transition-colors">
                  {t('nav.smartVillage')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-orange-400 transition-colors">
                  {t('nav.faq')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4 text-orange-400">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Solar Street, Green Park</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p>India</p>
              <p className="mt-4">
                <strong>Email:</strong> info@solarpro.in
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}