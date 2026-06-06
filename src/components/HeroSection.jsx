import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import '../styles/fonts.css';
import '../styles/theme.css';

export default function HeroSection({ handleNav, t, lang }) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Mouse positions for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for natural motion
  const springConfig = { stiffness: 150, damping: 25 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Map mouse coordinates to 3D rotation degrees
  const rotateX = useTransform(smoothY, [-400, 400], [8, -8]);
  const rotateY = useTransform(smoothX, [-400, 400], [-8, 8]);

  // Translate overlay slightly in opposite direction for parallax depth
  const translateOverlayX = useTransform(smoothX, [-400, 400], [-5, 5]);
  const translateOverlayY = useTransform(smoothY, [-400, 400], [-5, 5]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force play on mount to guarantee autoplay
    const attemptPlay = () => {
      setVideoLoaded(true);
      video.play().catch(err => {
        console.warn('Autoplay prevented, retrying on interaction...', err);
        // Fallback: play on user interaction if blocked
        const playOnInteraction = () => {
          video.play().catch(e => console.error(e));
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
      });
    };

    video.addEventListener('canplay', attemptPlay);
    video.addEventListener('loadedmetadata', attemptPlay);

    if (video.readyState >= 2) {
      attemptPlay();
    }

    return () => {
      video.removeEventListener('canplay', attemptPlay);
      video.removeEventListener('loadedmetadata', attemptPlay);
    };
  }, []);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = event.clientX - rect.left - width / 2;
    const y = event.clientY - rect.top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      id="hero-section-container" 
      className="relative w-full h-[calc(100dvh-60px)] sm:h-[calc(100vh-70px)] flex items-center justify-center overflow-hidden bg-[#0C0B0A]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }} // Establishes 3D space
    >
      {/* HTML5 Native Video element configured to suppress all native mobile overlay signs */}
      <video
        ref={videoRef}
        className="absolute object-cover pointer-events-none select-none"
        style={{
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          opacity: videoLoaded ? 0.6 : 0,
          transition: 'opacity 1.5s ease-in-out',
          zIndex: 0,
          filter: 'brightness(0.85) contrast(1.05)',
        }}
        loop
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        muted
        autoPlay
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Vignette & Warm Tint Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at center, rgba(12, 11, 10, 0.1) 0%, rgba(12, 11, 10, 0.55) 60%, rgba(12, 11, 10, 0.9) 100%)'
        }}
      />

      {/* Film grain noise overlay */}
      <div 
        className="absolute inset-0 z-15 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" 
        }}
      />

      {/* 3D Tilting Content Layout */}
      <motion.div 
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d",
          z: 50 // Push forward slightly in 3D space
        }}
        className="relative z-20 text-center px-4 sm:px-6 max-w-3xl flex flex-col items-center select-none"
      >
        {/* Fine gold line top border detail with balanced spacing */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.75 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transform: "translateZ(30px)" }}
          className="w-12 h-[1px] bg-[#B48C48] mb-8" 
        />

        {/* Elegant Minimal Sub-heading with close vertical spacing */}
        <motion.span 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ transform: "translateZ(40px)" }}
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.45em] text-[#B48C48] font-medium mb-6"
        >
          {lang === 'fr' ? 'Expéditions de Prestige' : 'Prestige Expeditions'}
        </motion.span>

        {/* High-End Editorial Title with tight bottom margin */}
        <motion.h1
          initial={{ y: 30, rotateX: 15, opacity: 0 }}
          animate={{ y: 0, rotateX: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
          style={{
            fontFamily: 'var(--font-serif)',
            lineHeight: 1.25,
            transform: "translateZ(60px)", // More depth for the main header
          }}
          className="text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#F3EFE9] mb-12 drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]"
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
        </motion.h1>

        {/* Muted Premium Subtitle (Removed per request) */}

        {/* Luxury Architectural Gold Border Buttons - Flex-Row for Mobile */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          style={{ transform: "translateZ(50px)" }}
          className="flex flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-[340px] sm:max-w-none"
        >
          {/* Main Action Button */}
          <button
            className="flex-1 sm:flex-initial sm:px-8 py-3.5 sm:py-4 border border-[#B48C48]/30 bg-transparent text-[#F3EFE9] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#B48C48] hover:bg-[#B48C48]/5 hover:text-white cursor-pointer whitespace-nowrap"
            style={{ fontFamily: 'var(--font-sans)' }}
            onClick={() => handleNav('packages')}
          >
            {lang === 'fr' ? 'Découvrir' : 'Explore'}
          </button>

          {/* Secondary Action Button */}
          <button
            className="flex-1 sm:flex-initial sm:px-8 py-3.5 sm:py-4 border border-[#B48C48]/30 bg-transparent text-[#C5BEB5] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#B48C48] hover:bg-[#B48C48]/5 hover:text-white cursor-pointer whitespace-nowrap"
            style={{ fontFamily: 'var(--font-sans)' }}
            onClick={() => handleNav('contact')}
          >
            {lang === 'fr' ? 'Contact' : 'Contact Us'}
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative Minimalist Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none"
      >
        <div className="w-[1px] h-[35px] sm:h-[50px] bg-gradient-to-b from-[#B48C48] to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[15px] bg-[#F3EFE9] animate-[scrollLine_2.5s_infinite]" />
        </div>
      </motion.div>
      
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
