import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const SolarCalculator = lazy(() => import('./pages/SolarCalculator'));
const BillUpload = lazy(() => import('./pages/BillUpload'));
const ManualCalculator = lazy(() => import('./pages/ManualCalculator'));

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calculator" element={<SolarCalculator />} />
            <Route path="/bill-upload" element={<BillUpload />} />
            <Route path="/manual-calculator" element={<ManualCalculator />} />
            {/* Other routes will be added later */}
          </Routes>
        </Suspense>
        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  );
}
