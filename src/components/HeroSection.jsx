import React, { useEffect, useRef, useState } from 'react';
import '../styles/fonts.css';
import '../styles/theme.css';

export default function HeroSection({ handleNav, t, lang }) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoCanPlay = () => {
      setVideoLoaded(true);
      video.play().catch(err => console.error('Autoplay error:', err));
    };

    video.addEventListener('canplay', handleVideoCanPlay);

    if (video.readyState >= 3) {
      handleVideoCanPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleVideoCanPlay);
    };
  }, []);

  return (
    <div id="hero-section-container">
      {/* Video Background */}
      <video
        ref={videoRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: videoLoaded ? 0.85 : 0,
          transition: 'opacity 1.5s ease-in-out',
          zIndex: 0,
        }}
        loop={true}
        playsInline
        preload="auto"
        muted
        autoPlay
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Navigation handled by Header component */}

      {/* Hero Section Content */}
      <div className="hero-content">
        {/* Headline */}
        <h1
          className="animate-fade-rise text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-7xl font-normal hero-title"
          style={{
            fontFamily: 'var(--font-serif)',
            color: '#FFFFFF',
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
          }}
        >
          Explore Pakistan — Expéditions de luxe à Skardu &amp; K2
        </h1>

        {/* Description */}
        <p
          className="animate-fade-rise-delay text-base sm:text-lg max-w-2xl mt-6 leading-relaxed hero-subtitle"
          style={{
            color: 'rgba(255,255,255,0.95)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Voyages sur mesure de 15 jours depuis la France : hôtels 5★, pension complète, randonnées guidées et trekking jusqu'au camp de base du K2.
        </p>

        {/* Hero CTA Buttons */}
        <div className="hero-ctas" style={{ marginTop: '1.5rem' }}>
          <button
            className="animate-fade-rise-delay-2 btn btn-primary"
            style={{
              padding: '0.9rem 2rem',
              fontSize: '1rem',
              backgroundColor: 'var(--color-gold)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-sans)'
            }}
            onClick={() => handleNav('packages')}
          >
            Commencer l'aventure
          </button>

          <button
            className="animate-fade-rise-delay-2 btn btn-secondary"
            style={{
              padding: '0.9rem 2rem',
              fontSize: '1rem',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              borderColor: '#FFFFFF',
              fontFamily: 'var(--font-sans)'
            }}
            onClick={() => handleNav('contact')}
          >
            Demander un devis
          </button>
        </div>
      </div>
    </div>
  );
}
