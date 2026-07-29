'use client';

import { motion } from 'motion/react';
import { useTheme } from '../lib/theme-context';

const ExtractIllustration = ({ isDark }: { isDark: boolean }) => (
  <div className="relative flex h-full w-full items-center justify-center">
    <motion.div 
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative h-28 w-48 overflow-hidden rounded-xl backdrop-blur-md shadow-lg"
      style={{
        border: `1px solid ${isDark ? 'rgba(55,65,81,0.6)' : 'rgba(255,255,255,0.6)'}`,
        backgroundColor: isDark ? 'rgba(30,41,59,0.4)' : 'rgba(255,255,255,0.4)',
      }}
    >
      <div
        className="flex h-7 w-full items-center gap-1.5 px-2.5"
        style={{
          borderBottom: `1px solid ${isDark ? 'rgba(55,65,81,0.4)' : 'rgba(255,255,255,0.4)'}`,
          backgroundColor: isDark ? 'rgba(30,41,59,0.3)' : 'rgba(255,255,255,0.3)',
        }}
      >
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isDark ? '#64748b' : '#94a3b8' }}></div>
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isDark ? '#64748b' : '#94a3b8' }}></div>
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isDark ? '#64748b' : '#94a3b8' }}></div>
        <div
          className="ml-2 h-2.5 w-24 rounded font-mono text-[0.4rem] font-semibold flex items-center px-1 backdrop-blur-sm"
          style={{
            color: isDark ? '#94a3b8' : '#64748b',
            backgroundColor: isDark ? 'rgba(55,65,81,0.5)' : 'rgba(255,255,255,0.5)',
            border: `1px solid ${isDark ? 'rgba(71,85,105,0.4)' : 'rgba(255,255,255,0.4)'}`,
          }}
        >https://example.com</div>
      </div>
      <div className="flex flex-col gap-2.5 p-3">
        <div className="h-3 w-3/4 rounded" style={{ backgroundColor: isDark ? 'rgba(55,65,81,0.7)' : 'rgba(255,255,255,0.7)' }}></div>
        <div className="h-2 w-1/2 rounded" style={{ backgroundColor: isDark ? 'rgba(55,65,81,0.7)' : 'rgba(255,255,255,0.7)' }}></div>
        <div
          className="mt-1 h-8 w-full rounded-md"
          style={{
            border: `1px solid ${isDark ? 'rgba(71,85,105,0.4)' : 'rgba(255,255,255,0.4)'}`,
            backgroundColor: isDark ? 'rgba(30,41,59,0.3)' : 'rgba(255,255,255,0.3)',
          }}
        ></div>
      </div>
      <motion.div 
        animate={{ top: ['0%', '100%', '0%'] }} 
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] w-full bg-[var(--brand-1)] shadow-[0_0_12px_2px_rgba(29,98,221,0.3)] dark:shadow-[0_0_12px_2px_rgba(77,138,240,0.3)]"
      />
    </motion.div>
  </div>
);

const AnalyzeIllustration = ({ isDark }: { isDark: boolean }) => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="relative flex items-center justify-center">
      <span
        className="font-serif text-[4.5rem] leading-none -tracking-tight"
        style={{ color: isDark ? '#e2e8f0' : '#1e293b' }}
      >Aa</span>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="absolute inset-0 m-[-10px] border-[1.5px] border-dashed border-[var(--brand-1)]/40"
      >
        <div
          className="absolute -left-1.5 -top-1.5 h-2.5 w-2.5 border-2 border-[var(--brand-1)] backdrop-blur-sm"
          style={{ backgroundColor: isDark ? 'rgba(30,41,59,0.8)' : 'rgba(255,255,255,0.8)' }}
        ></div>
        <div
          className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 border-2 border-[var(--brand-1)] backdrop-blur-sm"
          style={{ backgroundColor: isDark ? 'rgba(30,41,59,0.8)' : 'rgba(255,255,255,0.8)' }}
        ></div>
        <div
          className="absolute -bottom-1.5 -left-1.5 h-2.5 w-2.5 border-2 border-[var(--brand-1)] backdrop-blur-sm"
          style={{ backgroundColor: isDark ? 'rgba(30,41,59,0.8)' : 'rgba(255,255,255,0.8)' }}
        ></div>
        <div
          className="absolute -bottom-1.5 -right-1.5 h-2.5 w-2.5 border-2 border-[var(--brand-1)] backdrop-blur-sm"
          style={{ backgroundColor: isDark ? 'rgba(30,41,59,0.8)' : 'rgba(255,255,255,0.8)' }}
        ></div>
        
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-16 -top-8 flex items-center gap-1.5 rounded-md backdrop-blur-md px-2 py-1 shadow-lg"
          style={{
            border: `1px solid ${isDark ? 'rgba(71,85,105,0.5)' : 'rgba(255,255,255,0.5)'}`,
            backgroundColor: isDark ? 'rgba(30,41,59,0.4)' : 'rgba(255,255,255,0.4)',
          }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-[var(--brand-1)]"></div>
          <span
            className="font-mono text-[0.65rem] font-medium"
            style={{ color: isDark ? '#e2e8f0' : '#334155' }}
          >600W</span>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-8 -left-14 flex items-center gap-1.5 rounded-md backdrop-blur-md px-2 py-1 shadow-lg"
          style={{
            border: `1px solid ${isDark ? 'rgba(71,85,105,0.5)' : 'rgba(255,255,255,0.5)'}`,
            backgroundColor: isDark ? 'rgba(30,41,59,0.4)' : 'rgba(255,255,255,0.4)',
          }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
          <span
            className="font-mono text-[0.65rem] font-medium"
            style={{ color: isDark ? '#e2e8f0' : '#334155' }}
          >Italic</span>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

const MatchIllustration = ({ isDark }: { isDark: boolean }) => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="relative flex w-full max-w-[200px] flex-col gap-4">
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="z-10 ml-auto flex w-44 items-center justify-between rounded-xl backdrop-blur-md px-3 py-2.5 shadow-lg"
        style={{
          border: `1px solid ${isDark ? 'rgba(71,85,105,0.5)' : 'rgba(255,255,255,0.5)'}`,
          backgroundColor: isDark ? 'rgba(30,41,59,0.4)' : 'rgba(255,255,255,0.4)',
        }}
      >
        <div className="flex flex-col gap-0.5">
          <span
            className="text-[0.6rem] font-bold uppercase tracking-wider"
            style={{ color: isDark ? '#94a3b8' : '#64748b' }}
          >Commercial</span>
          <span
            className="text-xs font-semibold line-through"
            style={{ color: isDark ? '#e2e8f0' : '#334155', textDecorationColor: isDark ? '#64748b' : '#94a3b8' }}
          >Circular Pro</span>
        </div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </div>
      </motion.div>

      <div className="absolute left-1/4 top-1/2 z-0 -translate-y-1/2" style={{ color: isDark ? '#475569' : '#cbd5e1' }}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M25 6v38M5 25h40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-50" />
        </svg>
      </div>

      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="z-20 mr-auto flex w-44 items-center justify-between rounded-xl backdrop-blur-md px-3 py-2.5 shadow-lg ring-1 ring-inset ring-[var(--brand-1)]/10"
        style={{
          border: `1px solid rgba(59,130,246,0.2)`,
          backgroundColor: isDark ? 'rgba(30,58,138,0.2)' : 'rgba(239,246,255,0.4)',
        }}
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[var(--brand-1)]">Free Variant</span>
          <span className="font-sans text-xs font-bold text-[var(--text-1)]">Plus Jakarta</span>
        </div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--brand-1)] text-white shadow-sm shadow-[var(--brand-1)]/30">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        </div>
      </motion.div>
    </div>
  </div>
);

export default function HowItWorksCards() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const cards = [
    {
      title: "Extract Configuration",
      description: "Provide any URL to let our engine parse its stylesheets, instantly extracting all font files and DOM declarations.",
      illustration: <ExtractIllustration isDark={isDark} />
    },
    {
      title: "Analyze Fonts",
      description: "We deep-dive into the CSS properties, isolating perfect weights, optical sizing, and specific variable axes in play.",
      illustration: <AnalyzeIllustration isDark={isDark} />
    },
    {
      title: "Discover Alternatives",
      description: "Our database cross-references commercial typefaces against thousands of free Google Fonts to find the exact geometric match.",
      illustration: <MatchIllustration isDark={isDark} />
    }
  ];

  return (
    <div className="mx-auto mt-16 grid w-full max-w-[70rem] grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
          className="relative flex flex-col items-center text-center"
        >
          <div className="relative flex h-48 w-full items-center justify-center mb-6">
            {card.illustration}
          </div>
          
          <div className="flex flex-col items-center px-2">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full text-[0.65rem] font-bold"
                style={{
                  backgroundColor: isDark ? 'rgba(55,65,81,0.5)' : 'rgba(226,232,240,0.5)',
                  color: isDark ? '#94a3b8' : '#475569',
                }}
              >
                0{i + 1}
              </span>
              <h3
                className="text-[1.2rem] font-semibold tracking-tight"
                style={{ color: isDark ? '#ffffff' : '#0f172a' }}
              >
                {card.title}
              </h3>
            </div>
            <p
              className="text-[1rem] leading-relaxed max-w-sm"
              style={{ color: isDark ? '#94a3b8' : '#64748b' }}
            >
              {card.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
