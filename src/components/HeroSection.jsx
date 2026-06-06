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
    <div id="hero-section-container" className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-black">
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
          opacity: videoLoaded ? 0.75 : 0,
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

      {/* Dark Premium Gradient Overlay for Readability */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.75) 100%)'
        }}
      />

      {/* Hero Content Container */}
      <div className="relative z-20 text-center px-6 max-w-4xl flex flex-col items-center">
        {/* Sub-label */}
        <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#B48C48] font-semibold mb-4 drop-shadow-md animate-[fadeIn_1s_ease-out]">
          {lang === 'fr' ? 'Expéditions de Prestige' : 'Bespoke Alpine Expeditions'}
        </span>

        {/* Dynamic Localized Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] animate-[slideUp_1s_ease-out]"
          style={{
            fontFamily: 'var(--font-serif)',
            lineHeight: 1.1,
          }}
        >
          {t.home.hero.headline}
        </h1>

        {/* Dynamic Localized Subtitle */}
        <p
          className="text-sm sm:text-base md:text-lg text-gray-200 font-light max-w-2xl leading-relaxed mb-10 drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)] animate-[slideUp_1.2s_ease-out]"
          style={{
            fontFamily: 'var(--font-sans)',
          }}
        >
          {t.home.hero.subheading}
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-[slideUp_1.4s_ease-out]">
          {/* Main CTA */}
          <button
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-[2px] cursor-pointer"
            style={{
              backgroundColor: 'var(--color-gold)',
              boxShadow: '0 4px 20px rgba(180, 140, 72, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              fontFamily: 'var(--font-sans)'
            }}
            onClick={() => handleNav('packages')}
          >
            {lang === 'fr' ? "Commencer l'aventure" : 'Start the Adventure'}
          </button>

          {/* Secondary CTA (Glassmorphic) */}
          <button
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-[2px] border cursor-pointer"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              fontFamily: 'var(--font-sans)'
            }}
            onClick={() => handleNav('contact')}
          >
            {lang === 'fr' ? 'Demander un devis' : 'Request a Quote'}
          </button>
        </div>
      </div>

      {/* Decorative Bouncing Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-80">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">
          {lang === 'fr' ? 'Faites défiler' : 'Scroll Down'}
        </span>
        <div className="w-[18px] h-[30px] rounded-full border border-gray-400 flex justify-center p-1">
          <div className="w-[4px] h-[6px] bg-[#B48C48] rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
