'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTheme } from '../lib/theme-context';
import ThemeToggle from './ThemeToggle';

const FLOATING_FONTS = [
  { id: 'inter', name: 'Inter', variable: 'var(--font-inter)', className: 'top-[5%] md:top-[10%] left-[2%] md:left-[12%] rotate-[-4deg]' },
  { id: 'geist', name: 'Geist', variable: 'var(--font-geist)', className: 'top-[5%] md:top-[12%] right-[2%] md:right-[15%] rotate-[3deg]' },
  { id: 'manrope', name: 'Manrope', variable: 'var(--font-manrope)', className: 'bottom-[-15%] md:bottom-[-20%] left-[10%] md:left-[22%] rotate-[2deg]' },
  { id: 'serif', name: 'Georgia', variable: 'Georgia, serif', className: 'bottom-[-10%] md:bottom-[-15%] right-[8%] md:right-[20%] rotate-[-3deg]' },
  { id: 'system', name: 'System', variable: 'system-ui, sans-serif', className: 'top-[45%] md:top-[50%] left-[-2%] md:left-[4%] rotate-[-5deg]' },
  { id: 'mono', name: 'Mono', variable: 'var(--font-geist-mono, monospace)', className: 'top-[35%] md:top-[40%] right-[-2%] md:right-[6%] rotate-[4deg]' },
];

const FontSnapLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="size-[20px]"
    aria-hidden="true"
  >
    {/* Letter F made of two bars */}
    <rect x="4" y="4" width="4" height="16" rx="1" className="fill-[var(--brand-1)]" />
    <rect x="4" y="4" width="12" height="4" rx="1" className="fill-[var(--brand-1)] opacity-70" />
    <rect x="4" y="10" width="9" height="3.5" rx="1" className="fill-[var(--brand-1)] opacity-50" />
    {/* Capture / snap dot */}
    <circle cx="19" cy="19" r="3" className="fill-[var(--brand-1)]" />
    <circle cx="19" cy="19" r="1.2" fill="white" />
  </svg>
);

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleFontChange = (fontVar: string) => {
    document.documentElement.style.setProperty('--active-font', fontVar);
  };

  const isDark = theme === 'dark';

  return (
    <>
      {/* Nav Bar */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-lg"
        style={{
          borderBottom: `1px solid ${isDark ? 'rgba(55,65,81,0.6)' : 'rgba(203,213,225,0.6)'}`,
          backgroundColor: isDark ? 'rgba(12,16,24,0.8)' : 'rgba(255,255,255,0.8)',
        }}
      >
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-2">
              <FontSnapLogo />
              <span
                className="text-[1.05rem] font-semibold tracking-tight"
                style={{ color: isDark ? '#e4e9f2' : '#102035' }}
              >
                FontSnap
              </span>
            </span>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <section className="relative px-5 pt-20 pb-10 md:px-8 md:pt-32 md:pb-16 mt-0">
        {/* Floating Font Triggers — Desktop */}
        {mounted && FLOATING_FONTS.map((font, index) => (
          <motion.button
            key={font.id}
            onClick={() => handleFontChange(font.variable)}
            className={`absolute z-0 hidden md:block text-2xl md:text-[1.35rem] font-semibold tracking-tight transition-colors duration-300 cursor-pointer hover:z-20 ${font.className}`}
            style={{
              fontFamily: font.variable,
              color: isDark ? 'rgba(148,163,184,0.5)' : 'rgba(100,116,139,0.4)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 + index * 0.1 },
              scale: { duration: 0.8, delay: 0.2 + index * 0.1, type: 'spring' },
              y: {
                duration: 3 + (index % 3),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              },
            }}
            whileHover={{ scale: 1.08, rotate: 0, color: isDark ? '#e4e9f2' : '#102035' }}
            whileTap={{ scale: 0.92 }}
            aria-label={`Preview font: ${font.name}`}
          >
            {font.name}
          </motion.button>
        ))}

        {/* Floating Font Triggers — Mobile */}
        {mounted && FLOATING_FONTS.slice(0, 4).map((font, index) => (
          <motion.button
            key={`mob-${font.id}`}
            onClick={() => handleFontChange(font.variable)}
            className={`absolute z-0 md:hidden text-lg font-semibold tracking-tight transition-colors duration-300 cursor-pointer ${font.className}`}
            style={{
              fontFamily: font.variable,
              color: isDark ? 'rgba(148,163,184,0.5)' : 'rgba(100,116,139,0.4)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -3, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.2 + index * 0.1 },
              y: {
                duration: 3 + (index % 3),
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            whileHover={{ scale: 1.08, rotate: 0 }}
          >
            {font.name}
          </motion.button>
        ))}

        <div className="relative z-10 mx-auto w-full max-w-6xl flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          >
            <h1
              className="text-[2rem] font-medium md:text-[3.2rem] leading-[1.15] tracking-tight"
              style={{ color: isDark ? '#e4e9f2' : '#102035' }}
            >
              Font intelligence, simplified.
            </h1>
            <p
              className="mt-3 max-w-xl text-[1rem] leading-relaxed md:text-[1.1rem]"
              style={{ color: isDark ? '#94a3b8' : '#475569' }}
            >
              Extract, compare, and discover open alternatives for any website instantly.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}