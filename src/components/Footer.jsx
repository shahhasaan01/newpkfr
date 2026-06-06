import React, { useState } from 'react';
import { translations } from '../translations';

export default function Footer({ lang, setCurrentPage }) {
  const t = translations[lang];
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && name.trim()) {
      setSubmitted(true);
      setEmail('');
      setName('');
    }
  };

  const handleNav = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer" id="main-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-brand" id="footer-brand-box">
            <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleNav('home'); }} style={{ color: '#FFFFFF' }}>
              <svg className="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#B48C48' }}>
                <polygon points="10,80 40,40 55,80" fill="#8A8A86" opacity="0.6" />
                <polygon points="45,80 65,45 90,80" fill="#8A8A86" opacity="0.6" />
                <polygon points="25,80 50,25 75,80" fill="#B48C48" />
              </svg>
              <div>
                <span style={{ fontWeight: 700, letterSpacing: '0.05em' }}>EXPLORE</span>
                <span style={{ color: '#B48C48', fontWeight: 400, marginLeft: '4px' }}>PAKISTAN</span>
              </div>
            </a>
            <p>{t.footer.tagline}</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
              {t.footer.officeHours}
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="footer-links-col" id="footer-links-box">
            <h4>{t.nav.about}</h4>
            <ul>
              <li>
                <a href="#destinations" onClick={(e) => { e.preventDefault(); handleNav('destinations'); }} className="footer-link">
                  {t.nav.destinations}
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => { e.preventDefault(); handleNav('packages'); }} className="footer-link">
                  {t.nav.packages}
                </a>
              </li>
              <li>
                <a href="#k2" onClick={(e) => { e.preventDefault(); handleNav('k2'); }} className="footer-link">
                  {t.nav.k2}
                </a>
              </li>
              <li>
                <a href="#visa" onClick={(e) => { e.preventDefault(); handleNav('visa'); }} className="footer-link">
                  {t.nav.visa}
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }} className="footer-link">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }} className="footer-link">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="footer-newsletter" id="footer-newsletter-box">
            <h4>{t.footer.newsletterHeading}</h4>
            <p>{t.footer.newsletterSub}</p>

            {submitted ? (
              <div className="discount-alert" style={{ backgroundColor: 'rgba(180, 140, 72, 0.1)', color: 'var(--color-gold)', borderLeftColor: 'var(--color-gold)', marginTop: '10px' }} id="newsletter-success">
                {t.footer.successMsg}
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe} id="newsletter-form-element">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
                  <input
                    type="text"
                    id="newsletter-name-input"
                    className="newsletter-input"
                    placeholder={t.footer.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="email"
                      id="newsletter-email-input"
                      className="newsletter-input"
                      placeholder={t.footer.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" id="newsletter-submit-btn" className="btn btn-primary" style={{ padding: '0 1.2rem', letterSpacing: 0, textTransform: 'none' }}>
                      {t.footer.subscribe}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <div id="footer-rights-text">{t.footer.rights}</div>
          <div style={{ display: 'flex', gap: '1rem' }} id="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-link">Facebook</a>
            <a href="mailto:info@explorepakistan.fr" className="footer-link">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
