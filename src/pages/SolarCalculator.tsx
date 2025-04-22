import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, Upload, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';

export default function SolarCalculator() {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative py-20 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('calculator.title')}
            </h1>
            <p className="text-xl text-white mb-6">
              {t('calculator.subtitle')}
            </p>
            <div className="flex items-center justify-center text-sm md:text-base text-white">
              <Link to="/" className="hover:underline">
                {t('nav.home')}
              </Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span>{t('nav.calculator')}</span>
            </div>
          </div>
        </div>

        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="#ffffff"
          >
            <path d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Calculator Options */}
      <Section spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card hoverable className="flex flex-col items-center p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Upload className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {t('calculator.options.billUpload')}
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Upload your recent electricity bill and we'll analyze it to
              recommend the perfect solar solution for your needs.
            </p>
            <Link to="/bill-upload" className="mt-auto">
              <Button size="lg">{t('common.uploadBill')}</Button>
            </Link>
          </Card>

          <Card hoverable className="flex flex-col items-center p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Calculator className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {t('calculator.options.manualEntry')}
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Manually enter your appliances and their usage to calculate your
              solar system requirements.
            </p>
            <Link to="/manual-calculator" className="mt-auto">
              <Button size="lg" variant="secondary">
                {t('common.calculate')}
              </Button>
            </Link>
          </Card>
        </div>
      </Section>

      {/* Why Use Our Calculator */}
      <Section background="light" spacing="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Why Use Our Solar Calculator?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our calculator provides accurate estimates based on your specific
            energy needs and local conditions.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Precise Sizing
            </h3>
            <p className="text-gray-600">
              Get an accurate estimate of the solar system size you need based
              on your actual energy consumption.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Cost Savings
            </h3>
            <p className="text-gray-600">
              See exactly how much you can save on your electricity bills by
              switching to solar energy.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Environmental Impact
            </h3>
            <p className="text-gray-600">
              Calculate your carbon footprint reduction and see the positive
              environmental impact of your solar system.
            </p>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section spacing="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple process makes it easy to get a detailed solar quote that
            meets your specific needs.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-orange-200 transform -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Step 1: Choose Your Method
                </h3>
                <p className="text-gray-600">
                  Select either bill upload or manual entry to begin calculating
                  your solar needs.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12 relative">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 md:translate-x-0 md:left-0 md:-translate-x-1/2 border-4 border-white">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 order-2 md:order-1 relative">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 md:translate-x-0 md:right-0 md:left-auto md:translate-x-1/2 border-4 border-white">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-2 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Step 2: Provide Details
                </h3>
                <p className="text-gray-600">
                  Upload your electricity bill or enter your appliance usage
                  details to help us understand your energy needs.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Step 3: Get Your Results
                </h3>
                <p className="text-gray-600">
                  Receive an instant estimate of your recommended solar system
                  size, cost, and potential savings.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12 relative">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 md:translate-x-0 md:left-0 md:-translate-x-1/2 border-4 border-white">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 order-2 md:order-1 relative">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 md:translate-x-0 md:right-0 md:left-auto md:translate-x-1/2 border-4 border-white">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-1 md:order-2 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Step 4: Custom PDF Quote
                </h3>
                <p className="text-gray-600">
                  We'll email you a detailed PDF quote with all the
                  specifications and pricing tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" spacing="lg" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Harness the Power of the Sun?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get started with your free solar calculation today and take the first
          step towards energy independence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/bill-upload">
            <Button size="lg">{t('common.uploadBill')}</Button>
          </Link>
          <Link to="/manual-calculator">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-800"
            >
              {t('common.calculate')}
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
