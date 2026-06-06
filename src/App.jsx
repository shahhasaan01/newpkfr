import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import K2Experience from './pages/K2Experience';
import VisaBooking from './pages/VisaBooking';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  // Global States
  const [lang, setLang] = useState('fr'); // Default French for explorepakistan.fr
  const [currentPage, setCurrentPage] = useState('home');
  
  // Connects Calculator math configurations to pre-fill inside the Contact Form!
  const [bookingParams, setBookingParams] = useState(null);

  // Simple state router
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home lang={lang} setCurrentPage={setCurrentPage} />;
      case 'destinations':
        return <Destinations lang={lang} />;
      case 'packages':
        return (
          <Packages 
            lang={lang} 
            setCurrentPage={setCurrentPage} 
            setBookingParams={setBookingParams} 
          />
        );
      case 'k2':
        return <K2Experience lang={lang} setCurrentPage={setCurrentPage} />;
      case 'visa':
        return <VisaBooking lang={lang} />;
      case 'about':
        return <About lang={lang} />;
      case 'contact':
        return <Contact lang={lang} bookingParams={bookingParams} />;
      default:
        return <Home lang={lang} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} id="app-root-shell">
      {/* Sticky Header with Navigation and Language toggle */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />

      {/* Main Page Content Shell */}
      <main style={{ flexGrow: 1 }} id="main-content-view">
        {renderPage()}
      </main>

      {/* Localized Footer with Newsletter signups */}
      <Footer 
        lang={lang} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
}
