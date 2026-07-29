'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../lib/theme-context';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex h-7 w-[54px] cursor-pointer items-center rounded-full border outline-none transition-colors duration-300"
      style={{
        borderColor: isDark ? 'rgba(55,65,81,0.7)' : 'rgba(203,213,225,0.7)',
        backgroundColor: isDark
          ? 'rgba(24,32,48,0.8)'
          : 'rgba(255,255,255,0.75)',
        boxShadow: isDark
          ? 'inset 0 1px 2px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.1)'
          : 'inset 0 1px 2px rgba(0,0,0,0.03), 0 1px 3px rgba(0,0,0,0.05)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Track background fill — subtle color hint */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
        style={{
          opacity: isDark ? 0.6 : 0,
          background:
            'linear-gradient(135deg, rgba(77,138,240,0.15) 0%, rgba(99,102,241,0.08) 100%)',
        }}
      />

      {/* Sliding knob */}
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.8 }}
        className="relative z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full shadow-sm"
        style={{
          marginLeft: isDark ? '28px' : '4px',
          backgroundColor: isDark ? '#1e293b' : '#ffffff',
          boxShadow: isDark
            ? '0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(55,65,81,0.3)'
            : '0 1px 3px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.8)',
        }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.svg
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.4 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="size-[13px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ color: '#94a3b8' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.4 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="size-[13px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
              style={{ color: '#64748b' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.span>

      {/* Decorative track labels (hidden from assistive tech) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-between px-[7px] text-[9px] font-medium"
        style={{ color: isDark ? 'rgba(148,163,184,0.4)' : 'rgba(100,116,139,0.3)' }}
      >
        <span className="opacity-0">s</span>
        <span className="opacity-0">m</span>
      </span>
    </motion.button>
  );
}