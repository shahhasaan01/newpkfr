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

  // Format the headline to italicize "Karakoram" with a gold tint for an editorial look
  const renderFormattedHeadline = (headline) => {
    if (headline.includes("Karakoram")) {
      const parts = headline.split("Karakoram");
      return (
        <>
          {parts[0]}
          <span className="italic font-serif text-[#B48C48] font-normal font-serif-italic">Karakoram</span>
          {parts[1]}
        </>
      );
    }
    return headline;
  };

  return (
    <div id="hero-section-container" className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0A0809]">
      {/* Video Background with lower opacity for mystery and depth */}
      <video
        ref={videoRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: videoLoaded ? 0.65 : 0,
          transition: 'opacity 2s ease-in-out',
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

      {/* Luxury Cinematic Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{
          background: 'linear-gradient(to bottom, rgba(10, 8, 9, 0.8) 0%, rgba(10, 8, 9, 0.3) 55%, rgba(10, 8, 9, 0.85) 100%)'
        }}
      />

      {/* Fine-grained noise layer to match cinematic feel */}
      <div 
        className="absolute inset-0 z-15 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" 
        }}
      />

      {/* Hero Content Container */}
      <div className="relative z-20 text-center px-6 max-w-4xl flex flex-col items-center select-none">
        {/* Editorial Sub-label */}
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#B48C48] font-light mb-6 drop-shadow-md animate-[fadeIn_1s_ease-out]">
          {lang === 'fr' ? 'Expéditions de Haute Altitude' : 'High Altitude Expeditions'}
        </span>

        {/* Cinematic Headline with Italic Accent */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white mb-6 drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] animate-[slideUp_1s_ease-out]"
          style={{
            fontFamily: 'var(--font-serif)',
            lineHeight: 1.15,
          }}
        >
          {renderFormattedHeadline(t.home.hero.headline)}
        </h1>

        {/* Elegant Minimal Description */}
        <p
          className="text-xs sm:text-sm md:text-base text-[#D4CDCD] font-light max-w-xl leading-relaxed mb-12 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] animate-[slideUp_1.2s_ease-out]"
          style={{
            fontFamily: 'var(--font-sans)',
          }}
        >
          {t.home.hero.subheading}
        </p>

        {/* Luxury Architectural Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto animate-[slideUp_1.4s_ease-out]">
          {/* Architectural Gold Outline Button */}
          <button
            className="group w-full sm:w-auto px-8 py-4 border border-[#B48C48] bg-[#1A1416]/90 text-[#B48C48] text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#B48C48] hover:text-white hover:shadow-[0_0_20px_rgba(180,140,72,0.2)] cursor-pointer"
            style={{
              fontFamily: 'var(--font-sans)'
            }}
            onClick={() => handleNav('packages')}
          >
            {lang === 'fr' ? "Commencer l'aventure" : 'Start the Adventure'}
          </button>

          {/* Minimalist White Outline Button */}
          <button
            className="group w-full sm:w-auto px-8 py-4 border border-white/20 bg-transparent text-white text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
            style={{
              fontFamily: 'var(--font-sans)'
            }}
            onClick={() => handleNav('contact')}
          >
            {lang === 'fr' ? 'Demander un devis' : 'Request a Quote'}
          </button>
        </div>
      </div>

      {/* Decorative Minimalist Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none opacity-60">
        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-light">
          {lang === 'fr' ? 'Faites défiler' : 'Scroll Down'}
        </span>
        <div className="w-[1px] h-[40px] bg-gradient-to-b from-gray-500 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[15px] bg-[#B48C48] animate-[scrollLine_2s_infinite]" />
        </div>
      </div>
      
      {/* Scroll indicator keyframe styles (scoped custom animation) */}
      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          80% { transform: translateY(300%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </div>
  );
}
