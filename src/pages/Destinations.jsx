import React from 'react';
import { translations } from '../translations';
import ItineraryExplorer from '../components/ItineraryExplorer';

export default function Destinations({ lang }) {
  const t = translations[lang];

  return (
    <div className="destinations-view" id="page-destinations">
      {/* Page Hero */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=80')` }}
        id="destinations-hero"
      >
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 id="destinations-headline">{t.destinations.hero.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontWeight: 300 }} id="destinations-subheading">
            {t.destinations.hero.subheading}
          </p>
        </div>
      </section>

      {/* Itinerary Explorer section */}
      <section className="section-padding" id="destinations-itinerary-section">
        <div className="container">
          <h2 className="section-title text-center mb-lg" id="itinerary-title">
            {t.destinations.itinerary.title}
          </h2>
          <ItineraryExplorer lang={lang} />
        </div>
      </section>

      {/* Checklist section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)' }} id="destinations-checklist-section">
        <div className="container">
          <div className="checklist-grid" id="checklist-grid-box">
            {/* Inclusions */}
            <div className="checklist-card inclusions" id="inclusions-card">
              <h3>
                <svg className="checklist-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                {t.destinations.checklist.incTitle}
              </h3>
              <div style={{ marginTop: '1rem' }} id="inclusions-list">
                {t.destinations.checklist.inclusions.map((item, idx) => (
                  <div key={idx} className="checklist-item" id={`inclusion-item-${idx}`}>
                    <svg className="checklist-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions */}
            <div className="checklist-card exclusions" id="exclusions-card">
              <h3>
                <svg className="checklist-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                {t.destinations.checklist.excTitle}
              </h3>
              <div style={{ marginTop: '1rem' }} id="exclusions-list">
                {t.destinations.checklist.exclusions.map((item, idx) => (
                  <div key={idx} className="checklist-item" id={`exclusion-item-${idx}`}>
                    <svg className="checklist-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
