import React from 'react';
import { translations } from '../translations';

export default function K2Experience({ lang, setCurrentPage }) {
  const t = translations[lang];

  return (
    <div className="k2-experience-view" id="page-k2">
      {/* Page Hero */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1920&q=80')` }}
        id="k2-hero"
      >
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 id="k2-headline">{t.k2.hero.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontWeight: 300 }} id="k2-subheading">
            {t.k2.hero.subheading}
          </p>
        </div>
      </section>

      {/* About K2 & High Altitude Warning */}
      <section className="section-padding" id="k2-details-section">
        <div className="container">
          <div className="contact-layout" id="k2-main-layout">
            
            {/* Explanations & Warning */}
            <div>
              <h2 className="section-title" id="k2-about-title">{t.k2.about.title}</h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }} id="k2-about-intro">
                {t.k2.about.intro}
              </p>

              {/* Red-border mountaineering safety warning box */}
              <div className="warning-box" id="k2-safety-warning">
                <div className="warning-title">
                  <svg style={{ width: '20px', height: '20px', fill: '#C0392B', display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L1 21h22L12 2zm1 14h-2v-2h2v2zm0-4h-2V8h2v4z" />
                  </svg>
                  {t.k2.about.warningTitle}
                </div>
                <p className="warning-text">{t.k2.about.warningText}</p>
              </div>
            </div>

            {/* Trek stats highlights card */}
            <div className="info-card" id="k2-quick-specs">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.35rem' }}>
                {lang === 'fr' ? 'Spécifications Techniques' : 'Technical Specifications'}
              </h4>
              <div className="info-card-item" id="spec-duration">
                <span style={{ fontWeight: 700 }}>{lang === 'fr' ? 'Durée : ' : 'Duration: '}</span>
                <span>3 - 4 {lang === 'fr' ? 'Jours' : 'Days'}</span>
              </div>
              <div className="info-card-item" id="spec-elevation">
                <span style={{ fontWeight: 700 }}>{lang === 'fr' ? 'Altitude Max : ' : 'Max Elevation: '}</span>
                <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>5 128m (16,810 ft)</span>
              </div>
              <div className="info-card-item" id="spec-difficulty">
                <span style={{ fontWeight: 700 }}>{lang === 'fr' ? 'Difficulté : ' : 'Difficulty: '}</span>
                <span style={{ color: '#C0392B', fontWeight: 700 }}>EXPERT</span>
              </div>
              <div className="info-card-item" id="spec-season">
                <span style={{ fontWeight: 700 }}>{lang === 'fr' ? 'Saison idéale : ' : 'Best Season: '}</span>
                <span>{lang === 'fr' ? 'Juin - Septembre' : 'June - September'}</span>
              </div>
              <div className="info-card-item" id="spec-cost">
                <span style={{ fontWeight: 700 }}>{lang === 'fr' ? 'Tarif Supplément : ' : 'Add-on Fee: '}</span>
                <span style={{ fontWeight: 700 }}>€800 / {lang === 'fr' ? 'personne' : 'person'}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Day-by-Day Trek Itinerary */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)' }} id="k2-itinerary-section">
        <div className="container">
          <h2 className="section-title text-center mb-lg" id="k2-itinerary-title">{t.k2.itinerary.title}</h2>
          
          <div className="features-grid grid-4-cols" id="k2-itinerary-grid">
            <div className="feature-card" id="k2-day-1">
              <div className="day-number-badge mb-sm">1</div>
              <h4 style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>{t.k2.itinerary.d1Title}</h4>
              <p style={{ fontSize: '0.85rem' }}>{t.k2.itinerary.d1Text}</p>
            </div>
            <div className="feature-card" id="k2-day-2">
              <div className="day-number-badge mb-sm">2</div>
              <h4 style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>{t.k2.itinerary.d2Title}</h4>
              <p style={{ fontSize: '0.85rem' }}>{t.k2.itinerary.d2Text}</p>
            </div>
            <div className="feature-card" id="k2-day-3">
              <div className="day-number-badge mb-sm" style={{ backgroundColor: 'var(--color-gold)' }}>3</div>
              <h4 style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>{t.k2.itinerary.d3Title}</h4>
              <p style={{ fontSize: '0.85rem' }}>{t.k2.itinerary.d3Text}</p>
            </div>
            <div className="feature-card" id="k2-day-4">
              <div className="day-number-badge mb-sm">4</div>
              <h4 style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>{t.k2.itinerary.d4Title}</h4>
              <p style={{ fontSize: '0.85rem' }}>{t.k2.itinerary.d4Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites & Professional Gear Inclusions */}
      <section className="section-padding" id="k2-requirements-section">
        <div className="container">
          <div className="checklist-grid" id="k2-requirements-grid">
            
            {/* Prerequisites list */}
            <div className="checklist-card exclusions" id="k2-prereqs-card">
              <h3>
                <svg className="checklist-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                {t.k2.requirements.title}
              </h3>
              <div style={{ marginTop: '1rem' }} id="k2-prereqs-list">
                {t.k2.requirements.reqs.map((item, idx) => (
                  <div key={idx} className="checklist-item" id={`k2-req-item-${idx}`}>
                    <svg className="checklist-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gear provided */}
            <div className="checklist-card inclusions" id="k2-gear-card">
              <h3>
                <svg className="checklist-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                {lang === 'fr' ? 'Matériel & Sécurité de Pointe Fournis' : 'State-of-the-Art Gear Provided'}
              </h3>
              <div style={{ marginTop: '1rem' }} id="k2-gear-list">
                {t.k2.requirements.incs.map((item, idx) => (
                  <div key={idx} className="checklist-item" id={`k2-inc-item-${idx}`}>
                    <svg className="checklist-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Centered CTA */}
          <div className="text-center" style={{ marginTop: '3rem' }} id="k2-booking-call-wrapper">
            <button 
              id="k2-schedule-call-btn"
              className="btn btn-primary" 
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo(0, document.getElementById('main-header').offsetTop);
              }}
            >
              {t.cta.bookConsultation}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
