import React, { useState } from 'react';
import { translations } from '../translations';

export default function VisaTracker({ lang }) {
  const t = translations[lang];

  // Checklist document states
  const [checkedDocs, setCheckedDocs] = useState({
    doc1: false,
    doc2: false,
    doc3: false,
    doc4: false,
    doc5: false,
    doc6: false,
    doc7: false,
    doc8: false,
  });

  const handleToggle = (docId) => {
    setCheckedDocs(prev => ({
      ...prev,
      [docId]: !prev[docId]
    }));
  };

  // Calculate progress
  const totalDocs = Object.keys(checkedDocs).length;
  const completedDocs = Object.values(checkedDocs).filter(Boolean).length;
  const progressPercent = Math.round((completedDocs / totalDocs) * 100);

  // Document details mapper
  const documents = [
    { id: 'doc1', label: t.visa.tracker.doc1, tip: t.visa.tracker.tip1 },
    { id: 'doc2', label: t.visa.tracker.doc2, tip: t.visa.tracker.tip2 },
    { id: 'doc3', label: t.visa.tracker.doc3, tip: t.visa.tracker.tip3 },
    { id: 'doc4', label: t.visa.tracker.doc4, tip: t.visa.tracker.tip4 },
    { id: 'doc5', label: t.visa.tracker.doc5, tip: t.visa.tracker.tip5 },
    { id: 'doc6', label: t.visa.tracker.doc6, tip: t.visa.tracker.tip6 },
    { id: 'doc7', label: t.visa.tracker.doc7, tip: t.visa.tracker.tip7 },
    { id: 'doc8', label: t.visa.tracker.doc8, tip: t.visa.tracker.tip8 },
  ];

  return (
    <div className="visa-tracker" id="visa-document-tracker">
      <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: 'var(--color-navy)' }}>
        {t.visa.tracker.title}
      </h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
        {t.visa.tracker.subtitle}
      </p>

      {/* Dynamic Progress Bar */}
      <div className="tracker-progress-container" id="tracker-progress-wrapper">
        <div className="progress-header">
          <span>{t.visa.tracker.progressLabel}</span>
          <span id="tracker-percentage" style={{ color: 'var(--color-gold)', fontWeight: 700 }}>{progressPercent}%</span>
        </div>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            id="tracker-progress-bar-fill"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Interactive Checkbox List */}
      <div className="checklist-interactive" id="tracker-checklist-list">
        {documents.map((doc) => {
          const isChecked = checkedDocs[doc.id];
          
          return (
            <div key={doc.id} className="checklist-interactive-item" id={`tracker-item-${doc.id}`}>
              <label className="checkbox-label" htmlFor={`tracker-checkbox-${doc.id}`}>
                <input
                  type="checkbox"
                  id={`tracker-checkbox-${doc.id}`}
                  className="checkbox-input"
                  checked={isChecked}
                  onChange={() => handleToggle(doc.id)}
                />
                <span style={isChecked ? { fontWeight: 500, color: 'var(--color-navy)' } : {}}>
                  {doc.label}
                </span>
              </label>
              
              {/* Expand helper advice tip if checked */}
              {isChecked && (
                <div className="checklist-tip" id={`tracker-tip-${doc.id}`}>
                  {doc.tip}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress Completed Message Alert */}
      {progressPercent === 100 && (
        <div className="checklist-complete-alert" id="tracker-complete-alert">
          <svg 
            style={{ width: '20px', height: '20px', fill: 'var(--color-green)', display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          {t.visa.tracker.complete}
        </div>
      )}
    </div>
  );
}
