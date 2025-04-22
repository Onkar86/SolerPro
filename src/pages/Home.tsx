import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Upload, Calculator, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';
import Section from '../components/ui/Section';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg" 
            alt="Solar panels on roof" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <Link to="/calculator">
            <Button 
              size="lg" 
              className="animate-pulse"
            >
              {t('home.hero.cta')}
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <Section background="white" spacing="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t('home.features.title')}
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card hoverable className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Sun className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {t('home.features.feature1.title')}
            </h3>
            <p className="text-gray-600">
              {t('home.features.feature1.description')}
            </p>
          </Card>

          <Card hoverable className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {t('home.features.feature2.title')}
            </h3>
            <p className="text-gray-600">
              {t('home.features.feature2.description')}
            </p>
          </Card>

          <Card hoverable className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {t('home.features.feature3.title')}
            </h3>
            <p className="text-gray-600">
              {t('home.features.feature3.description')}
            </p>
          </Card>

          <Card hoverable className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M14 4h6v6" />
                <path d="M20 4L2 22" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {t('home.features.feature4.title')}
            </h3>
            <p className="text-gray-600">
              {t('home.features.feature4.description')}
            </p>
          </Card>
        </div>
      </Section>

      {/* Calculator Options Section */}
      <Section background="primary" spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card hoverable className="p-6 flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Upload className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              {t('nav.billUpload')}
            </h3>
            <p className="text-gray-600 text-center mb-6">
              {t('billUpload.subtitle')}
            </p>
            <Link to="/bill-upload" className="mt-auto">
              <Button>
                {t('common.uploadBill')}
              </Button>
            </Link>
          </Card>

          <Card hoverable className="p-6 flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              {t('nav.calculator')}
            </h3>
            <p className="text-gray-600 text-center mb-6">
              {t('manualCalculator.subtitle')}
            </p>
            <Link to="/calculator" className="mt-auto">
              <Button>
                {t('common.calculate')}
              </Button>
            </Link>
          </Card>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="light" spacing="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t('home.stats.title')}
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-500 mb-2">5000+</div>
            <p className="text-xl text-gray-700">{t('home.stats.homes')}</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-green-500 mb-2">200+</div>
            <p className="text-xl text-gray-700">{t('home.stats.villages')}</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-yellow-500 mb-2">₹2500</div>
            <p className="text-xl text-gray-700">{t('home.stats.savedMonthly')}</p>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="white" spacing="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t('home.testimonials.title')}
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hoverable className="p-6">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                alt="Rajesh Kumar" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="font-semibold">Rajesh Kumar</h4>
                <p className="text-sm text-gray-600">Farmer, Nashik</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Installing solar panels on my farm was the best decision. I now save ₹3000 every month on electricity and can run my water pump without worrying about power cuts."
            </p>
          </Card>

          <Card hoverable className="p-6">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                alt="Priya Sharma" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="font-semibold">Priya Sharma</h4>
                <p className="text-sm text-gray-600">Homeowner, Pune</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "SolarPro made the entire process seamless. From consultation to installation, everything was professional. My electricity bills have reduced by 70%!"
            </p>
          </Card>

          <Card hoverable className="p-6">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                alt="Mohammed Ismail" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="font-semibold">Mohammed Ismail</h4>
                <p className="text-sm text-gray-600">Village Head, Karnataka</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Our entire village now has reliable electricity thanks to SolarPro's community solar project. Children can study at night, and we have street lights for safety."
            </p>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Link to="/blog">
            <Button variant="outline">
              {t('home.testimonials.viewAll')}
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" spacing="lg" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('common.getQuote')}
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers across India who have switched to clean solar energy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/calculator">
            <Button size="lg">
              {t('common.getStarted')}
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-800">
              {t('common.contactUs')}
            </Button>
          </Link>
        </div>
      </Section>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919309865542?text=I'm%20interested%20in%20getting%20a%20solar%20quote" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}