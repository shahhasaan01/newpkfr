import React from 'react';
import { translations } from '../translations';
import ContactForm from '../components/ContactForm';

export default function Contact({ lang, bookingParams }) {
  const t = translations[lang];

  return (
    <div className="contact-view" id="page-contact">
      {/* Page Hero */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80')` }}
        id="contact-hero"
      >
        <div className="page-hero-overlay"></div>
        <div className="container">
          <h1 id="contact-headline">{t.contact.hero.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontWeight: 300 }} id="contact-subheading">
            {t.contact.hero.subheading}
          </p>
        </div>
      </section>

      {/* Embedded Contact Widgets Form & Calendly */}
      <section className="section-padding" id="contact-elements-section">
        <div className="container">
          <ContactForm lang={lang} bookingParams={bookingParams} />
        </div>
      </section>
    </div>
  );
}
