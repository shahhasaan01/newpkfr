import React, { useState, useEffect } from 'react';
import { translations } from '../translations';

export default function ContactForm({ lang, bookingParams }) {
  const t = translations[lang];

  // Booking Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [dates, setDates] = useState('');
  const [message, setMessage] = useState('');
  const [newsletter, setNewsletter] = useState(true);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  // Prefill fields if bookingParams are changed (from PackageCalculator)
  useEffect(() => {
    if (bookingParams) {
      if (bookingParams.travelers) setTravelers(bookingParams.travelers);
      
      let addonNote = '';
      if (bookingParams.k2Selected) {
        addonNote += lang === 'fr' 
          ? '• Extension Trek Camp de Base K2 incluse\n' 
          : '• K2 Base Camp Extension included\n';
      }
      if (bookingParams.photoSelected) {
        addonNote += lang === 'fr' 
          ? '• Atelier Photographie incluse\n' 
          : '• Photography Workshop included\n';
      }
      
      if (addonNote) {
        setMessage(prev => {
          const intro = lang === 'fr' 
            ? `Bonjour, je souhaite réserver une expédition de groupe avec les options :\n${addonNote}Devis estimé : €${bookingParams.calculatedTotal.toLocaleString()}\n\n`
            : `Hello, I want to book a group expedition with the options:\n${addonNote}Estimated Quote: €${bookingParams.calculatedTotal.toLocaleString()}\n\n`;
          return intro + prev;
        });
      }
    }
  }, [bookingParams, lang]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !dates) {
      setFormError(true);
      return;
    }

    setFormError(false);
    setFormSubmitted(true);
    
    // Clear form inputs
    setName('');
    setEmail('');
    setPhone('');
    setDates('');
    setMessage('');
  };

  // Calendly State
  const [selectedDate, setSelectedDate] = useState('Jun 3');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [calendlySubmitted, setCalendlySubmitted] = useState(false);

  const datesList = [
    { dayName: 'MER', dayNum: '3', id: 'Jun 3', full: 'Mercredi 3 Juin 2026', fullEn: 'Wednesday, June 3, 2026' },
    { dayName: 'JEU', dayNum: '4', id: 'Jun 4', full: 'Jeudi 4 Juin 2026', fullEn: 'Thursday, June 4, 2026' },
    { dayName: 'VEN', dayNum: '5', id: 'Jun 5', full: 'Vendredi 5 Juin 2026', fullEn: 'Friday, June 5, 2026' },
    { dayName: 'LUN', dayNum: '8', id: 'Jun 8', full: 'Lundi 8 Juin 2026', fullEn: 'Monday, June 8, 2026' },
    { dayName: 'MAR', dayNum: '9', id: 'Jun 9', full: 'Mardi 9 Juin 2026', fullEn: 'Tuesday, June 9, 2026' },
  ];

  const timeSlots = ['10:00', '11:30', '14:00', '15:30', '17:00'];

  const handleCalendlySubmit = () => {
    if (selectedSlot) {
      setCalendlySubmitted(true);
    }
  };

  const getFullSelectedDate = () => {
    const match = datesList.find(d => d.id === selectedDate);
    if (!match) return '';
    return lang === 'fr' ? match.full : match.fullEn;
  };

  return (
    <div className="contact-layout" id="contact-form-layout">
      {/* Booking Form Card */}
      <div className="form-card" id="booking-inquiry-card">
        <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--color-navy)' }}>
          {t.contact.form.title}
        </h3>

        {formSubmitted ? (
          <div className="form-success-alert" id="form-success-message">
            <svg 
              style={{ width: '48px', height: '48px', fill: 'var(--color-green)', display: 'block', margin: '0 auto 1rem auto' }} 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <p>{t.contact.form.successMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} id="booking-inquiry-form">
            {formError && (
              <div className="form-error-alert" id="form-validation-error">
                {t.contact.form.validationErr}
              </div>
            )}

            <div className="form-grid">
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="form-input-name">{t.contact.form.name}</label>
                <input
                  type="text"
                  id="form-input-name"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label" htmlFor="form-input-email">{t.contact.form.email}</label>
                <input
                  type="email"
                  id="form-input-email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <label className="form-label" htmlFor="form-input-phone">{t.contact.form.phone}</label>
                <input
                  type="tel"
                  id="form-input-phone"
                  className="form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Number of Travelers */}
              <div className="form-group">
                <label className="form-label" htmlFor="form-input-travelers">{t.contact.form.travelers}</label>
                <input
                  type="number"
                  id="form-input-travelers"
                  className="form-input"
                  min="1"
                  max="30"
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                />
              </div>

              {/* Desired Dates */}
              <div className="form-group form-full-width">
                <label className="form-label" htmlFor="form-input-dates">{t.contact.form.dates} *</label>
                <input
                  type="date"
                  id="form-input-dates"
                  className="form-input"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  required
                />
              </div>

              {/* Message */}
              <div className="form-group form-full-width">
                <label className="form-label" htmlFor="form-input-message">{t.contact.form.msg}</label>
                <textarea
                  id="form-input-message"
                  className="form-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Newsletter subscribe */}
              <div className="form-group form-full-width">
                <label className="form-checkbox-label" htmlFor="form-input-newsletter">
                  <input
                    type="checkbox"
                    id="form-input-newsletter"
                    className="checkbox-input"
                    style={{ margin: 0 }}
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                  />
                  <span>{t.contact.form.newsletter}</span>
                </label>
              </div>
            </div>

            <button type="submit" id="booking-submit-btn" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              {t.contact.form.submit}
            </button>
          </form>
        )}
      </div>

      {/* Calendly Scheduler Card */}
      <div className="contact-info-grid">
        {/* Coordonnées box */}
        <div className="info-card" id="contact-coordinates-card">
          <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.35rem' }}>
            {t.contact.infoBox.title}
          </h4>
          <div className="info-card-item" id="coordinate-email">{t.contact.infoBox.email}</div>
          <div className="info-card-item" id="coordinate-whatsapp" style={{ color: 'var(--color-green)', fontWeight: 600 }}>{t.contact.infoBox.whatsapp}</div>
          <div className="info-card-item" id="coordinate-phone">{t.contact.infoBox.phone}</div>
          <div className="info-card-item" id="coordinate-hours" style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{t.contact.infoBox.hours}</div>
          <div className="info-card-item" id="coordinate-guarantee" style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: 700 }}>{t.contact.infoBox.response}</div>
        </div>

        {/* Embedded Interactive Calendly */}
        <div className="calendly-box" id="calendly-widget-card">
          <h4 style={{ fontSize: '1.1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
            {t.contact.calendly.title}
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
            {t.contact.calendly.desc}
          </p>

          {calendlySubmitted ? (
            <div className="form-success-alert" id="calendly-success-message">
              <svg 
                style={{ width: '32px', height: '32px', fill: 'var(--color-gold)', display: 'block', margin: '0 auto 0.5rem auto' }} 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <h5 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', marginBottom: '4px' }}>
                {t.contact.calendly.successMsg}
              </h5>
              <p style={{ fontSize: '0.8rem', margin: 0, fontWeight: 700, color: 'var(--color-navy)' }}>
                {getFullSelectedDate()} @ {selectedSlot} CET
              </p>
            </div>
          ) : (
            <div className="calendly-layout" id="calendly-layout-container">
              {/* Event meta */}
              <div className="calendly-meta">
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', marginBottom: '2px' }}>
                  {t.contact.calendly.mockHeading}
                </h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                  {t.contact.calendly.mockDetails}
                </p>
                <div className="calendly-duration">
                  <svg style={{ width: '14px', height: '14px', fill: 'var(--color-text-muted)' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  20 Min (Paris CET)
                </div>
              </div>

              {/* Scheduler slots */}
              <div className="calendly-slots-container">
                {/* Date Slider */}
                <div className="calendly-date-picker" id="calendly-date-slider">
                  {datesList.map(d => (
                    <button
                      key={d.id}
                      type="button"
                      id={`calendly-date-${d.id}`}
                      className={`calendly-date-btn ${selectedDate === d.id ? 'active' : ''}`}
                      onClick={() => { setSelectedDate(d.id); setSelectedSlot(''); }}
                    >
                      <div style={{ fontSize: '0.65rem', opacity: 0.8 }}>{d.dayName}</div>
                      <div style={{ fontSize: '1rem', fontWeight: 700 }}>{d.dayNum}</div>
                    </button>
                  ))}
                </div>

                {/* Slots Grid */}
                <div className="calendly-slots-grid" id="calendly-slots-grid">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      id={`calendly-slot-${slot.replace(':', '-')}`}
                      className={`calendly-slot-btn ${selectedSlot === slot ? 'active' : ''}`}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                {/* Confirm Button */}
                {selectedSlot && (
                  <div className="calendly-confirm-box" id="calendly-confirmation-btn-wrapper">
                    <button
                      type="button"
                      id="calendly-confirm-submit-btn"
                      className="btn btn-green btn-sm"
                      onClick={handleCalendlySubmit}
                      style={{ width: '100%', padding: '0.5rem', fontSize: '0.8rem', marginTop: '0.5rem' }}
                    >
                      {t.cta.confirmSlots} ({selectedSlot})
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
