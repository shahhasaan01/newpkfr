import React from 'react';
import { translations } from '../translations';
import PackageCalculator from '../components/PackageCalculator';

export default function Packages({ lang, setCurrentPage, setBookingParams }) {
  const t = translations[lang];

  return (
    <div className="packages-view" id="page-packages">
      {/* Page Hero */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80')` }}
        id="packages-hero"
      >
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 id="packages-headline">{t.packages.hero.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontWeight: 300 }} id="packages-subheading">
            {t.packages.hero.subheading}
          </p>

          {/* Luxury Tour Key Stats */}
          <div className="package-hero-stats" id="packages-stats-bar">
            <div className="hero-stat-card" id="stat-price">
              <div className="hero-stat-label">{t.packages.overview.perPerson}</div>
              <div className="hero-stat-val gold">{t.packages.overview.price}</div>
            </div>
            <div className="hero-stat-card" id="stat-duration">
              <div className="hero-stat-label">{t.packages.overview.durationLabel}</div>
              <div className="hero-stat-val">{t.packages.overview.durationVal}</div>
            </div>
            <div className="hero-stat-card" id="stat-groups">
              <div className="hero-stat-label">{t.packages.overview.groupLabel}</div>
              <div className="hero-stat-val">{t.packages.overview.groupVal}</div>
            </div>
            <div className="hero-stat-card" id="stat-departures">
              <div className="hero-stat-label">{t.packages.overview.departureLabel}</div>
              <div className="hero-stat-val">{t.packages.overview.departureVal}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Package details & calculator */}
      <section className="section-padding" id="packages-calculator-section">
        <div className="container">
          <div className="contact-layout" id="packages-main-layout">
            
            {/* Live Pricing Calculator Widget */}
            <div>
              <PackageCalculator 
                lang={lang} 
                setCurrentPage={setCurrentPage} 
                setBookingParams={setBookingParams} 
              />
            </div>

            {/* Inclusions value breakdown table */}
            <div id="breakdown-details-column">
              <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }} id="breakdown-title">
                {t.packages.breakdown.title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                {t.packages.breakdown.desc}
              </p>

              <div className="breakdown-table" id="breakdown-table-element">
                <div className="breakdown-row" id="breakdown-row-accomm">
                  <span>{t.packages.breakdown.accommodation}</span>
                  <span style={{ fontWeight: 600 }}>€950</span>
                </div>
                <div className="breakdown-row" id="breakdown-row-meals">
                  <span>{t.packages.breakdown.meals}</span>
                  <span style={{ fontWeight: 600 }}>€480</span>
                </div>
                <div className="breakdown-row" id="breakdown-row-transport">
                  <span>{t.packages.breakdown.transport}</span>
                  <span style={{ fontWeight: 600 }}>€600</span>
                </div>
                <div className="breakdown-row" id="breakdown-row-guides">
                  <span>{t.packages.breakdown.guides}</span>
                  <span style={{ fontWeight: 600 }}>€250</span>
                </div>
                <div className="breakdown-row" id="breakdown-row-activities">
                  <span>{t.packages.breakdown.activities}</span>
                  <span style={{ fontWeight: 600 }}>€120</span>
                </div>
                <div className="breakdown-row" id="breakdown-row-visa">
                  <span>{t.packages.breakdown.visa}</span>
                  <span style={{ fontWeight: 600 }}>€80</span>
                </div>
                <div className="breakdown-row total-row" id="breakdown-row-total-val">
                  <h4 style={{ fontSize: '1.05rem' }}>{t.packages.breakdown.totalValue}</h4>
                  <span>€2 480</span>
                </div>
                <div className="breakdown-row our-price-row" id="breakdown-row-our-price">
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-gold)' }}>{t.packages.breakdown.ourPrice}</h4>
                  <span>€2 450</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Steps Roadmap & Group Discount Perks */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)' }} id="packages-steps-section">
        <div className="container">
          <div className="checklist-grid" id="packages-steps-grid">
            
            {/* Step roadmap */}
            <div className="checklist-card inclusions" style={{ borderColor: 'var(--color-gold)' }} id="booking-roadmap-card">
              <h3 style={{ color: 'var(--color-gold)', borderBottomColor: 'var(--color-gold)' }}>
                <svg className="checklist-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'var(--color-gold)' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                {t.packages.upgrades.bookingStepsTitle}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }} id="booking-steps-list">
                <p style={{ margin: 0, fontWeight: 500, fontSize: '0.95rem' }} id="booking-step-1">{t.packages.upgrades.step1}</p>
                <p style={{ margin: 0, fontWeight: 500, fontSize: '0.95rem' }} id="booking-step-2">{t.packages.upgrades.step2}</p>
                <p style={{ margin: 0, fontWeight: 500, fontSize: '0.95rem' }} id="booking-step-3">{t.packages.upgrades.step3}</p>
                <p style={{ margin: 0, fontWeight: 500, fontSize: '0.95rem' }} id="booking-step-4">{t.packages.upgrades.step4}</p>
              </div>
            </div>

            {/* Discount advantages */}
            <div className="checklist-card inclusions" id="discounts-advantages-card">
              <h3>
                <svg className="checklist-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.25z" />
                </svg>
                {t.packages.upgrades.title}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1.5rem' }} id="discounts-advantages-list">
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }} id="discount-bullet-1">
                  <svg className="checklist-icon" style={{ fill: 'var(--color-green)' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{t.packages.upgrades.group4}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }} id="discount-bullet-2">
                  <svg className="checklist-icon" style={{ fill: 'var(--color-green)' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{t.packages.upgrades.group6}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
