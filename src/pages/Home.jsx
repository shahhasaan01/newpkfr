import React from 'react';
import { translations } from '../translations';
import HeroSection from '../components/HeroSection';

export default function Home({ lang, setCurrentPage }) {
  const t = translations[lang];

  const handleNav = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="homepage-view" id="page-home">
      {/* Cinematic Hero Section */}
      <HeroSection handleNav={handleNav} t={t} lang={lang} />

      {/* Features Section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }} id="home-features-section">
        <div className="container text-center">
          <span className="section-subtitle" id="features-subtitle">Explore Pakistan</span>
          <h2 className="section-title mb-lg" id="features-title">{t.home.features.title}</h2>
          
          <div className="features-grid" id="features-grid-box">
            {/* Column 1 */}
            <div className="feature-card" id="feature-card-hotels">
              <div className="feature-icon-container">
                <svg className="feature-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h8v6z" />
                </svg>
              </div>
              <h3 className="feature-title">{t.home.features.col1.title}</h3>
              <p>{t.home.features.col1.desc}</p>
            </div>

            {/* Column 2 */}
            <div className="feature-card" id="feature-card-inclusive">
              <div className="feature-icon-container">
                <svg className="feature-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="feature-title">{t.home.features.col2.title}</h3>
              <p>{t.home.features.col2.desc}</p>
            </div>

            {/* Column 3 */}
            <div className="feature-card" id="feature-card-customized">
              <div className="feature-icon-container">
                <svg className="feature-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5.11L15 7.22V19z" />
                </svg>
              </div>
              <h3 className="feature-title">{t.home.features.col3.title}</h3>
              <p>{t.home.features.col3.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* K2 Challenge Teaser Section */}
      <section 
        className="section-padding k2-section" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1920&q=80')` }}
        id="home-k2-challenge-section"
      >
        <div className="k2-section-overlay"></div>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--color-gold)' }} id="k2-subtitle">Karakoram</span>
          <h2 className="section-title mb-md" id="k2-title">{t.home.k2.title}</h2>
          <p className="mb-lg" style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8 }} id="k2-text">
            {t.home.k2.desc}
          </p>
          <button 
            id="k2-explore-btn"
            className="btn btn-primary" 
            onClick={() => handleNav('k2')}
          >
            {t.cta.exploreK2}
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }} id="home-testimonials-section">
        <div className="container text-center">
          <span className="section-subtitle" id="testimonials-subtitle">Testimonials</span>
          <h2 className="section-title mb-lg" id="testimonials-title">{t.home.testimonials.title}</h2>

          <div className="testimonials-grid" id="testimonials-grid-box">
            {/* Quote 1 */}
            <div className="testimonial-card" id="testimonial-card-1">
              <p className="testimonial-quote">"{t.home.testimonials.q1.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MD</div>
                <span>{t.home.testimonials.q1.author}</span>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="testimonial-card" id="testimonial-card-2">
              <p className="testimonial-quote">"{t.home.testimonials.q2.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">JM</div>
                <span>{t.home.testimonials.q2.author}</span>
              </div>
            </div>

            {/* Quote 3 */}
            <div className="testimonial-card" id="testimonial-card-3">
              <p className="testimonial-quote">"{t.home.testimonials.q3.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SL</div>
                <span>{t.home.testimonials.q3.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner Section */}
      <section className="section-padding" id="home-cta-banner-section">
        <div className="container">
          <div className="cta-bar" id="home-cta-bar-wrapper">
            <h2 id="cta-banner-title">{t.home.ctaSec.title}</h2>
            <p id="cta-banner-text">{t.home.ctaSec.desc}</p>
            <div className="cta-buttons" id="cta-banner-buttons">
              <button 
                id="cta-banner-consultation-btn"
                className="btn btn-primary" 
                onClick={() => handleNav('contact')}
              >
                {t.cta.bookConsultation}
              </button>
              <button 
                id="cta-banner-brochure-btn"
                className="btn btn-secondary" 
                onClick={() => handleNav('packages')}
              >
                {t.cta.downloadBrochure}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
