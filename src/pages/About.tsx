import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, Sun, Users, Zap, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative py-20 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.title')}
            </h1>
            <div className="flex items-center justify-center text-sm md:text-base text-white">
              <Link to="/" className="hover:underline">
                {t('nav.home')}
              </Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span>{t('nav.about')}</span>
            </div>
          </div>
        </div>
        
        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg" 
              alt="Rural village with solar panels" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <div className="inline-flex items-center text-sm font-medium text-orange-500 mb-2">
              <Sun className="mr-2 h-4 w-4" />
              <span>SolarPro Solutions</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('about.mission.title')}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('about.mission.description')}
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{t('about.vision.title')}</h3>
            <p className="text-lg text-gray-600 mb-8">
              {t('about.vision.description')}
            </p>
            
            <Link to="/contact">
              <Button>{t('common.contactUs')}</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Impact Section */}
      <Section background="primary" spacing="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {t('about.impact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.impact.description')}
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Zap className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">12 GW</h3>
            <p className="text-gray-600">Solar Capacity Installed</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">25,000+</h3>
            <p className="text-gray-600">Families Benefited</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <BarChart className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">180,000+</h3>
            <p className="text-gray-600">Tons of CO₂ Reduced</p>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section spacing="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals behind SolarPro who are dedicated to bringing clean energy solutions to rural and urban India.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
            <img 
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" 
              alt="Amit Patel" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-gray-800">Amit Patel</h3>
              <p className="text-orange-500 mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With 15+ years in renewable energy, Amit is committed to making solar accessible to all of India.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
            <img 
              src="https://images.pexels.com/photos/1181691/pexels-photo-1181691.jpeg" 
              alt="Sunita Sharma" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-gray-800">Sunita Sharma</h3>
              <p className="text-orange-500 mb-3">CTO</p>
              <p className="text-gray-600 text-sm">
                Sunita leads our technical innovation, ensuring we deliver cutting-edge solar solutions.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
            <img 
              src="https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg" 
              alt="Raj Kumar" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-gray-800">Raj Kumar</h3>
              <p className="text-orange-500 mb-3">Head of Rural Operations</p>
              <p className="text-gray-600 text-sm">
                Raj specializes in implementing solar solutions in India's most remote villages.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
            <img 
              src="https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg" 
              alt="Priya Singh" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-gray-800">Priya Singh</h3>
              <p className="text-orange-500 mb-3">Head of Sustainability</p>
              <p className="text-gray-600 text-sm">
                Priya ensures our solutions meet the highest standards of environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" spacing="lg" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Join the Solar Revolution?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Take the first step towards energy independence and a sustainable future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/calculator">
            <Button size="lg">
              {t('common.getQuote')}
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-800">
              {t('common.contactUs')}
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}