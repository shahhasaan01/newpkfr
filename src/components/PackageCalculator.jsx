import React, { useState, useEffect } from 'react';
import { translations } from '../translations';

export default function PackageCalculator({ lang, setCurrentPage, setBookingParams }) {
  const t = translations[lang];
  const [travelers, setTravelers] = useState(2);
  const [k2Addon, setK2Addon] = useState(false);
  const [photoAddon, setPhotoAddon] = useState(false);
  
  // Pricing Constants
  const BASE_PRICE = 2450;
  const K2_COST = 800;
  const PHOTO_COST = 250;

  // Calculate discounts
  let discountRate = 0;
  if (travelers >= 4 && travelers < 6) {
    discountRate = 0.08; // 8%
  } else if (travelers >= 6) {
    discountRate = 0.12; // 12%
  }

  const discountAmount = BASE_PRICE * discountRate;
  const addonsCost = (k2Addon ? K2_COST : 0) + (photoAddon ? PHOTO_COST : 0);
  const finalPricePerPerson = BASE_PRICE - discountAmount + addonsCost;
  const totalCost = finalPricePerPerson * travelers;

  const handleBookNow = () => {
    // Set booking parameters globally so the contact form is pre-filled!
    setBookingParams({
      travelers: travelers,
      k2Selected: k2Addon,
      photoSelected: photoAddon,
      calculatedTotal: totalCost
    });
    setCurrentPage('contact');
    window.scrollTo(0, document.getElementById('main-header').offsetTop);
  };

  return (
    <div className="calculator-box" id="pricing-calculator">
      <div className="day-accordion-header" style={{ cursor: 'default', backgroundColor: 'var(--color-navy)', color: '#FFFFFF' }}>
        <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }}>
          {t.packages.calculator.title}
        </h3>
      </div>
      
      <div className="calculator-body">
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
          {t.packages.calculator.subtitle}
        </p>

        <div className="calculator-controls">
          {/* Travelers Selector */}
          <div className="control-group">
            <label className="control-label" htmlFor="travelers-range-input">
              {t.packages.calculator.labelTravelers}
            </label>
            <div className="travelers-selector">
              <input
                type="range"
                id="travelers-range-input"
                className="travelers-range"
                min="2"
                max="8"
                step="1"
                value={travelers}
                onChange={(e) => setTravelers(parseInt(e.target.value))}
              />
              <span className="travelers-count" id="travelers-count-display">{travelers}</span>
            </div>
            
            {/* Real-time group discount notifications */}
            {travelers >= 4 && travelers < 6 && (
              <div className="discount-alert" id="discount-alert-8">
                {t.packages.calculator.discount8}
              </div>
            )}
            {travelers >= 6 && (
              <div className="discount-alert" id="discount-alert-12" style={{ backgroundColor: 'rgba(45, 93, 79, 0.1)' }}>
                {t.packages.calculator.discount12}
              </div>
            )}
          </div>

          {/* Upgrades Checkboxes */}
          <div className="control-group">
            <span className="control-label">{t.packages.calculator.addonsTitle}</span>
            <div className="checkbox-options" id="addons-checkbox-group">
              <label className="checkbox-label" htmlFor="k2-addon-checkbox">
                <input
                  type="checkbox"
                  id="k2-addon-checkbox"
                  className="checkbox-input"
                  checked={k2Addon}
                  onChange={(e) => setK2Addon(e.target.checked)}
                />
                <span>{t.packages.calculator.k2Addon}</span>
              </label>

              <label className="checkbox-label" htmlFor="photo-addon-checkbox">
                <input
                  type="checkbox"
                  id="photo-addon-checkbox"
                  className="checkbox-input"
                  checked={photoAddon}
                  onChange={(e) => setPhotoAddon(e.target.checked)}
                />
                <span>{t.packages.calculator.photoAddon}</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Summary Output */}
      <div className="calculator-summary" id="pricing-summary-box">
        <h4 style={{ fontSize: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>
          {t.packages.calculator.summaryTitle}
        </h4>
        
        <div className="summary-grid">
          <div className="summary-row">
            <span>{t.packages.calculator.basePrice}</span>
            <span style={{ fontWeight: 600 }}>€{BASE_PRICE}</span>
          </div>

          {discountAmount > 0 && (
            <div className="summary-row" style={{ color: 'var(--color-green)' }}>
              <span>{t.packages.calculator.discountAmount} ({(discountRate * 100)}%) :</span>
              <span style={{ fontWeight: 600 }}>- €{discountAmount}</span>
            </div>
          )}

          {addonsCost > 0 && (
            <div className="summary-row">
              <span>{t.packages.calculator.addonsCost}</span>
              <span style={{ fontWeight: 600 }}>+ €{addonsCost}</span>
            </div>
          )}

          <div className="summary-row total-pers">
            <span>{t.packages.calculator.finalPricePerPers}</span>
            <span id="final-price-per-person">€{finalPricePerPerson.toLocaleString()}</span>
          </div>

          <div className="summary-row total-all">
            <span style={{ color: 'var(--color-navy)' }}>{t.packages.calculator.totalCost}</span>
            <span id="final-total-cost" style={{ fontSize: '1.6rem' }}>€{totalCost.toLocaleString()}</span>
          </div>
        </div>

        <button 
          id="calculator-book-btn"
          className="btn btn-primary" 
          onClick={handleBookNow} 
          style={{ width: '100%', marginTop: '0.5rem' }}
        >
          {t.cta.bookJourney}
        </button>
      </div>
    </div>
  );
}
