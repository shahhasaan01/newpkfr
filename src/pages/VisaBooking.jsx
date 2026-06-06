import React from 'react';
import { translations } from '../translations';
import VisaTracker from '../components/VisaTracker';

export default function VisaBooking({ lang }) {
  const t = translations[lang];

  return (
    <div className="visa-booking-view" id="page-visa">
      {/* Page Hero */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80')` }}
        id="visa-hero"
      >
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 id="visa-headline">{t.visa.hero.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontWeight: 300 }} id="visa-subheading">
            {t.visa.hero.subheading}
          </p>
        </div>
      </section>

      {/* Visa info and interactive checklist tracker */}
      <section className="section-padding" id="visa-tracker-section">
        <div className="container">
          <div className="contact-layout" id="visa-main-layout">
            
            {/* Interactive checklist */}
            <div>
              <VisaTracker lang={lang} />
            </div>

            {/* Information specifications */}
            <div id="visa-info-column">
              <h2 className="section-title" id="visa-info-title">{t.visa.info.title}</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }} id="visa-info-subtitle">
                {t.visa.info.subtitle}
              </p>

              <div className="info-card" id="visa-specs-card" style={{ marginBottom: '1.5rem' }}>
                <div className="info-card-item" id="visa-spec-type">
                  <span style={{ fontWeight: 700 }}>{t.visa.info.visaTypeTitle} </span>
                  <span>{t.visa.info.visaTypeText}</span>
                </div>
                <div className="info-card-item" id="visa-spec-time">
                  <span style={{ fontWeight: 700 }}>{t.visa.info.processingTitle} </span>
                  <span>{t.visa.info.processingText}</span>
                </div>
              </div>

              {/* VIP Services inclusions */}
              <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', fontWeight: 700 }}>{t.visa.info.supportTitle}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.50rem' }} id="visa-vip-supports-list">
                {t.visa.info.supports.map((item, idx) => (
                  <div key={idx} className="checklist-item" id={`visa-support-item-${idx}`}>
                    <svg className="checklist-icon" style={{ fill: 'var(--color-green)' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span style={{ fontSize: '0.85rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Milestones Timeline Roadmap */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)' }} id="visa-milestones-section">
        <div className="container">
          <h2 className="section-title text-center mb-lg" id="booking-roadmap-title">{t.visa.booking.title}</h2>
          
          <div className="features-grid grid-5-cols" id="booking-milestones-grid">
            <div className="feature-card" id="milestone-step-1">
              <div className="day-number-badge mb-sm" style={{ backgroundColor: 'var(--color-gold)' }}>1</div>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>{t.visa.booking.step1Title}</h4>
              <p style={{ fontSize: '0.8rem' }}>{t.visa.booking.step1Text}</p>
            </div>
            <div className="feature-card" id="milestone-step-2">
              <div className="day-number-badge mb-sm">2</div>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>{t.visa.booking.step2Title}</h4>
              <p style={{ fontSize: '0.8rem' }}>{t.visa.booking.step2Text}</p>
            </div>
            <div className="feature-card" id="milestone-step-3">
              <div className="day-number-badge mb-sm">3</div>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>{t.visa.booking.step3Title}</h4>
              <p style={{ fontSize: '0.8rem' }}>{t.visa.booking.step3Text}</p>
            </div>
            <div className="feature-card" id="milestone-step-4">
              <div className="day-number-badge mb-sm">4</div>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>{t.visa.booking.step4Title}</h4>
              <p style={{ fontSize: '0.8rem' }}>{t.visa.booking.step4Text}</p>
            </div>
            <div className="feature-card" id="milestone-step-5">
              <div className="day-number-badge mb-sm" style={{ backgroundColor: 'var(--color-green)' }}>5</div>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>{t.visa.booking.step5Title}</h4>
              <p style={{ fontSize: '0.8rem' }}>{t.visa.booking.step5Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Terms & Payment Methods */}
      <section className="section-padding" id="visa-policy-section">
        <div className="container">
          <div className="checklist-grid" id="visa-policy-grid">
            
            {/* Cancellations card */}
            <div className="checklist-card exclusions" id="cancellation-policy-card">
              <h3>
                <svg className="checklist-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
                {t.visa.policy.cancellationTitle}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem', fontSize: '0.85rem' }} id="cancellation-rules-list">
                <p id="cancellation-rule-1">✓ {t.visa.policy.c1}</p>
                <p id="cancellation-rule-2">✓ {t.visa.policy.c2}</p>
                <p id="cancellation-rule-3">✓ {t.visa.policy.c3}</p>
                <p id="cancellation-rule-4">✓ {t.visa.policy.c4}</p>
              </div>
            </div>

            {/* Payment methods */}
            <div className="checklist-card inclusions" style={{ borderColor: 'var(--color-gold)' }} id="payment-methods-card">
              <h3 style={{ color: 'var(--color-gold)', borderBottomColor: 'var(--color-gold)' }}>
                <svg className="checklist-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'var(--color-gold)' }}>
                  <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
                {t.visa.policy.methodsTitle}
              </h3>
              
              <div style={{ marginTop: '1rem' }} id="payment-methods-description">
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
                  {t.visa.policy.methodsText}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: '0.5rem' }}>
                  {lang === 'fr' 
                    ? '* L\'assurance voyage personnelle multirisque doit obligatoirement être contractée pour soumettre votre dossier.' 
                    : '* Personal travel insurance is strictly required to successfully submit your visa.'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
