import React from 'react';
import { translations } from '../translations';

export default function About({ lang }) {
  const t = translations[lang];

  return (
    <div className="about-view" id="page-about">
      {/* Page Hero */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1920&q=80')` }}
        id="about-hero"
      >
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 id="about-headline">{t.about.hero.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontWeight: 300 }} id="about-subheading">
            {t.about.hero.subheading}
          </p>
        </div>
      </section>

      {/* Our Story section */}
      <section className="section-padding" id="about-story-section-wrapper">
        <div className="container">
          <div className="about-story-section" id="about-story-row">
            
            {/* Story text */}
            <div className="about-story-content" id="about-story-text-box">
              <span className="section-subtitle" id="story-subtitle">{lang === 'fr' ? 'Notre Vocation' : 'Our Mission'}</span>
              <h2 className="section-title mb-md" id="story-title">{t.about.story.title}</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.85, fontWeight: 300 }}>
                {t.about.story.text}
              </p>
            </div>

            {/* Visual banner */}
            <div 
              style={{
                height: '350px',
                borderRadius: 'var(--border-radius)',
                backgroundImage: `url('https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'var(--box-shadow)'
              }}
              id="about-story-visual-card"
            ></div>

          </div>
        </div>
      </section>

      {/* Why Choose Us: 5 competitive columns */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)' }} id="about-why-us-section">
        <div className="container">
          <h2 className="section-title text-center mb-lg" id="why-us-headline">{t.about.whyUs.title}</h2>
          
          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }} id="why-us-grid">
            <div className="feature-card" id="why-card-luxury">
              <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                {t.about.whyUs.box1Title}
              </h4>
              <p style={{ fontSize: '0.85rem' }}>{t.about.whyUs.box1Text}</p>
            </div>
            
            <div className="feature-card" id="why-card-safety">
              <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                {t.about.whyUs.box2Title}
              </h4>
              <p style={{ fontSize: '0.85rem' }}>{t.about.whyUs.box2Text}</p>
            </div>

            <div className="feature-card" id="why-card-authentic">
              <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                {t.about.whyUs.box3Title}
              </h4>
              <p style={{ fontSize: '0.85rem' }}>{t.about.whyUs.box3Text}</p>
            </div>

            <div className="feature-card" id="why-card-french" style={{ gridColumn: 'span 1' }}>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                {t.about.whyUs.box4Title}
              </h4>
              <p style={{ fontSize: '0.85rem' }}>{t.about.whyUs.box4Text}</p>
            </div>

            <div className="feature-card" id="why-card-custom" style={{ gridColumn: 'span 2' }}>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                {t.about.whyUs.box5Title}
              </h4>
              <p style={{ fontSize: '0.85rem' }}>{t.about.whyUs.box5Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide details & certifications */}
      <section className="section-padding" id="about-team-section">
        <div className="container">
          <div className="about-team-grid" id="about-team-row">
            
            {/* Hassan Guide Card */}
            <div className="about-team-box" id="guide-profile-card">
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }} id="team-title">
                {t.about.team.title}
              </h3>
              
              <div className="team-card" id="guide-details-card">
                <div 
                  className="team-image-placeholder" 
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  id="guide-avatar"
                ></div>
                <div className="team-info" id="guide-text-info">
                  <h4>Hassan</h4>
                  <div className="team-role">{t.about.team.hassanTitle}</div>
                  <p className="team-bio">{t.about.team.hassanBio}</p>
                </div>
              </div>
            </div>

            {/* Certifications and credentials list */}
            <div className="about-team-box" id="credentials-card" style={{ backgroundColor: '#FFFCF9' }}>
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                {lang === 'fr' ? 'Accréditations & Normes' : 'Credentials & Norms'}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} id="credentials-list">
                <div className="day-meta-item">
                  <span className="day-activity-badge">✓</span>
                  <span>{lang === 'fr' ? 'Agréé par le Ministère du Tourisme (PTB Licensed)' : 'Licensed by the Pakistan Tourism Board (PTB)'}</span>
                </div>
                <div className="day-meta-item">
                  <span className="day-activity-badge">✓</span>
                  <span>{lang === 'fr' ? 'Membre de l\'Association Internationale des Guides de Montagne' : 'Member of the International Mountain Guide Association'}</span>
                </div>
                <div className="day-meta-item">
                  <span className="day-activity-badge">✓</span>
                  <span>{lang === 'fr' ? 'Sécurité et Qualité ISO 9001 en Management de séjour' : 'ISO 9001 Certified Quality Management'}</span>
                </div>
                <div className="day-meta-item">
                  <span className="day-activity-badge">✓</span>
                  <span>{lang === 'fr' ? 'Tous nos guides sont secouristes formés au trauma d\'altitude' : 'All guides trained in Wilderness Advanced First Aid'}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sustainable travel commitment */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-navy)', color: '#FFFFFF' }} id="about-sustainability-section">
        <div className="container text-center" style={{ maxWidth: '750px' }}>
          <span className="section-subtitle" style={{ color: 'var(--color-gold)' }} id="sustainability-subtitle">{lang === 'fr' ? 'Éco-Tourisme' : 'Eco-Tourism'}</span>
          <h2 className="section-title mb-md" style={{ color: '#FFFFFF' }} id="sustainability-title">{t.about.sustainability.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.85, fontWeight: 300 }} id="sustainability-text">
            {t.about.sustainability.text}
          </p>
        </div>
      </section>
    </div>
  );
}
