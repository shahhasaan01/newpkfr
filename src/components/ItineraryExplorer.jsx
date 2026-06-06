import React, { useState } from 'react';
import { translations } from '../translations';

export default function ItineraryExplorer({ lang }) {
  const t = translations[lang];
  const daysData = t.destinations.itinerary.days;
  
  const [activeDay, setActiveDay] = useState(1);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', fr: 'Tout l\'Itinéraire', en: 'Full Itinerary' },
    { id: 'gateway', fr: 'Islamabad & Skardu', en: 'Islamabad & Skardu' },
    { id: 'trekking', fr: 'Hauts Plateaux & Trekking (4000m+)', en: 'High Plateaus & Trekking' },
    { id: 'heritage', fr: 'Patrimoine Royal Shigar/Khaplu', en: 'Royal Heritage Shigar/Khaplu' },
    { id: 'valleys', fr: 'Hunza & Vallées Suspendues', en: 'Hunza & Suspended Valleys' }
  ];

  // Map day numbers to regions for filtering
  const getDayRegion = (dayNum) => {
    if (dayNum === 1 || dayNum === 2 || dayNum === 3 || dayNum === 15) return 'gateway';
    if (dayNum >= 4 && dayNum <= 8) return 'trekking';
    if (dayNum === 9 || dayNum === 10 || dayNum === 11) return 'heritage';
    if (dayNum >= 12 && dayNum <= 14) return 'valleys';
    return 'all';
  };

  const filteredDays = daysData.filter(d => {
    if (activeFilter === 'all') return true;
    return getDayRegion(d.day) === activeFilter;
  });

  const toggleAccordion = (dayNum) => {
    setActiveDay(activeDay === dayNum ? null : dayNum);
  };

  return (
    <div className="itinerary-explorer" id="itinerary-widget">
      {/* Category Filtering Tabs */}
      <div 
        className="calendly-date-picker mb-md" 
        style={{ justifyContent: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}
        id="itinerary-filters"
      >
        {filterTabs.map(tab => (
          <button
            key={tab.id}
            id={`filter-tab-${tab.id}`}
            className={`calendly-date-btn ${activeFilter === tab.id ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter(tab.id);
              // Open first matching day when filter changes
              const matches = daysData.filter(d => tab.id === 'all' || getDayRegion(d.day) === tab.id);
              if (matches.length > 0) {
                setActiveDay(matches[0].day);
              }
            }}
            style={{ whiteSpace: 'nowrap', minWidth: 'auto', fontWeight: 600 }}
          >
            {lang === 'fr' ? tab.fr : tab.en}
          </button>
        ))}
      </div>

      <p className="text-center mb-md" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
        {t.destinations.itinerary.subtitle}
      </p>

      {/* Accordion List */}
      <div className="itinerary-layout" id="itinerary-accordion-list">
        {filteredDays.map((item) => {
          const isActive = activeDay === item.day;
          
          return (
            <div 
              key={item.day} 
              className={`day-accordion-item ${isActive ? 'active' : ''}`}
              id={`itinerary-day-${item.day}`}
            >
              <div 
                className="day-accordion-header" 
                onClick={() => toggleAccordion(item.day)}
                id={`itinerary-day-header-${item.day}`}
              >
                <div className="day-title-block">
                  <div className="day-number-badge">
                    {item.day}
                  </div>
                  <div className="day-title-text">
                    {item.title}
                  </div>
                </div>

                <div className="day-header-meta">
                  <span className="day-activity-badge">
                    {item.activity}
                  </span>
                  <span className="day-elevation-badge">
                    {item.elevation}
                  </span>
                  <svg className="accordion-arrow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </div>
              </div>

              {/* Accordion Content with smooth height transition */}
              <div 
                className="day-accordion-content"
                style={isActive ? { maxHeight: '600px' } : { maxHeight: '0px' }}
                id={`itinerary-day-content-${item.day}`}
              >
                <div className="day-accordion-inner">
                  <p className="day-description">{item.details}</p>
                  
                  <div className="day-details-grid">
                    <div className="day-meta-item">
                      <svg className="feature-icon" style={{ width: '16px', height: '16px', fill: 'var(--color-gold)' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <div>
                        <span className="day-meta-label">
                          {lang === 'fr' ? 'Hébergement : ' : 'Accommodation: '}
                        </span>
                        <span className="day-meta-value">{item.overnight}</span>
                      </div>
                    </div>

                    <div className="day-meta-item">
                      <svg className="feature-icon" style={{ width: '16px', height: '16px', fill: 'var(--color-green)' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6zm-1 6h2v2h-2zm0 4h2v2h-2z" />
                      </svg>
                      <div>
                        <span className="day-meta-label">
                          {lang === 'fr' ? 'Altitude Maximale : ' : 'Max Elevation: '}
                        </span>
                        <span className="day-meta-value">{item.elevation}</span>
                      </div>
                    </div>
                  </div>

                  {/* 3 to 4 High-Resolution Destination Photos Grid */}
                  {item.photos && item.photos.length > 0 && (
                    <div className="day-photos-grid">
                      {item.photos.map((photoUrl, pIdx) => (
                        <div 
                          key={pIdx} 
                          className="day-photo-item"
                          onClick={() => window.open(photoUrl, '_blank')}
                          title={lang === 'fr' ? "Agrandir l'image" : "Enlarge image"}
                        >
                          <img 
                            src={photoUrl} 
                            alt={`${item.title} - View ${pIdx + 1}`} 
                            className="day-photo-img"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
