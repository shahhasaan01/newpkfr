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
    <div id="hero-section-container" className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0C0B0A]">
      {/* Video Background - Dark and muted to enhance readability */}
      <video
        ref={videoRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: videoLoaded ? 0.6 : 0,
          transition: 'opacity 2.5s ease-in-out',
          zIndex: 0,
          filter: 'brightness(0.9) contrast(1.05)',
        }}
        loop={true}
        playsInline
        preload="auto"
        muted
        autoPlay
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Vignette & Warm Tint Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at center, rgba(12, 11, 10, 0.2) 0%, rgba(12, 11, 10, 0.6) 60%, rgba(12, 11, 10, 0.9) 100%)'
        }}
      />

      {/* Noise layer for organic film texture */}
      <div 
        className="absolute inset-0 z-15 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" 
        }}
      />

      {/* Content Layout */}
      <div className="relative z-20 text-center px-8 max-w-3xl flex flex-col items-center select-none">
        {/* Fine gold line top border detail */}
        <div className="w-12 h-[1px] bg-[#B48C48] mb-8 opacity-75" />

        {/* Elegant Minimal Sub-heading */}
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.45em] text-[#B48C48] font-medium mb-6">
          {lang === 'fr' ? 'Expéditions de Prestige' : 'Prestige Expeditions'}
        </span>

        {/* High-End Editorial Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#F3EFE9] mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
          style={{
            fontFamily: 'var(--font-serif)',
            lineHeight: 1.2,
          }}
        >
          {lang === 'fr' ? (
            <>
              L'Art du Voyage au Cœur du <span className="italic font-normal text-[#DFD5C6]">Karakoram</span>
            </>
          ) : (
            <>
              The Art of Ascent in the <span className="italic font-normal text-[#DFD5C6]">Karakoram</span>
            </>
          )}
        </h1>

        {/* Muted Premium Subtitle */}
        <p
          className="text-xs sm:text-sm text-[#C5BEB5] font-light max-w-lg leading-relaxed mb-12 tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          style={{
            fontFamily: 'var(--font-sans)',
          }}
        >
          {t.home.hero.subheading}
        </p>

        {/* Ultra-Minimal Luxury Buttons */}
        <div className="flex flex-row items-center justify-center gap-8 animate-[fadeIn_1.5s_ease-out]">
          {/* Main Action Link with expanding gold underline */}
          <button
            className="group relative py-2 text-[#F3EFE9] text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer"
            style={{ fontFamily: 'var(--font-sans)' }}
            onClick={() => handleNav('packages')}
          >
            {lang === 'fr' ? 'Découvrir' : 'Explore'}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B48C48] scale-x-50 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </button>

          {/* Divider Dot */}
          <span className="text-[#B48C48] text-[8px] opacity-40 select-none">✦</span>

          {/* Secondary Action Link */}
          <button
            className="group relative py-2 text-[#C5BEB5] text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 hover:text-white cursor-pointer"
            style={{ fontFamily: 'var(--font-sans)' }}
            onClick={() => handleNav('contact')}
          >
            {lang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </button>
        </div>
      </div>

      {/* Decorative Minimalist Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none opacity-40">
        <div className="w-[1px] h-[50px] bg-gradient-to-b from-[#B48C48] to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[15px] bg-[#F3EFE9] animate-[scrollLine_2.5s_infinite]" />
        </div>
      </div>
      
      {/* Scroll indicator keyframe styles */}
      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          80% { transform: translateY(350%); }
          100% { transform: translateY(350%); }
        }
      `}</style>
    </div>
  );
}
