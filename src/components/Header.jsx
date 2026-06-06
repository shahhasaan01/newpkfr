import React, { useState } from 'react';
import { translations } from '../translations';

export default function Header({ lang, setLang, currentPage, setCurrentPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang];

  const handleNav = (page) => {
    setCurrentPage(page);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  // Toggle body overflow when mobile menu opens/closes
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <header className="header" id="main-header">
      <div className="container header-container">
        {/* Logo depicting a minimal mountain silhouette (3 peaks, K2 center) */}
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleNav('home'); }} id="logo-link">
          <svg className="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Left Peak */}
            <polygon points="10,80 40,40 55,80" fill="#8A8A86" opacity="0.6" />
            {/* Right Peak */}
            <polygon points="45,80 65,45 90,80" fill="#8A8A86" opacity="0.6" />
            {/* Center Tallest Peak (K2) */}
            <polygon points="25,80 50,25 75,80" fill="#B48C48" />
            {/* Mountain Ridge Accent Lines */}
            <polyline points="50,25 48,50 52,70" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.4" />
          </svg>
          <div>
            <span style={{ fontWeight: 700, letterSpacing: '0.05em' }}>EXPLORE</span>
            <span style={{ color: 'var(--color-gold)', fontWeight: 400, marginLeft: '4px' }}>PAKISTAN</span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className={`nav-links desktop-visible ${mobileOpen ? 'mobile-open' : ''}`} id="nav-menu">
          <a
            href="#home"
            id="nav-home"
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNav('home'); }}
          >
            {t.nav.home}
          </a>
          <a
            href="#destinations"
            id="nav-destinations"
            className={`nav-link ${currentPage === 'destinations' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNav('destinations'); }}
          >
            {t.nav.destinations}
          </a>
          <a
            href="#packages"
            id="nav-packages"
            className={`nav-link ${currentPage === 'packages' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNav('packages'); }}
          >
            {t.nav.packages}
          </a>
          <a
            href="#k2-base-camp"
            id="nav-k2"
            className={`nav-link ${currentPage === 'k2' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNav('k2'); }}
          >
            {t.nav.k2}
          </a>
          <a
            href="#visa-booking"
            id="nav-visa"
            className={`nav-link ${currentPage === 'visa' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNav('visa'); }}
          >
            {t.nav.visa}
          </a>
          <a
            href="#about"
            id="nav-about"
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNav('about'); }}
          >
            {t.nav.about}
          </a>
          <a
            href="#contact"
            id="nav-contact"
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Language Toggler & CTA Button */}
        <div className="header-right">
          <div className="lang-switch" id="lang-switch-box">
            <button
              id="lang-btn-fr"
              className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
            <button
              id="lang-btn-en"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          {/* Mobile-only select dropdown for languages */}
          <select
            id="lang-dropdown"
            className="lang-dropdown"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label="Select language"
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-nav-toggle"
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <span style={mobileOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
            <span style={mobileOpen ? { opacity: 0 } : {}}></span>
            <span style={mobileOpen ? { transform: 'rotate(-45deg) translate(6px, -6px)' } : {}}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
