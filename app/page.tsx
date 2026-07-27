'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from './lib/theme-context';
import HeroSection from './components/HeroSection';
import SearchInput from './components/SearchInput';
import HowItWorksCards from './components/HowItWorksCards';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSearch = (targetUrl: string) => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/scan?url=${encodeURIComponent(targetUrl)}`);
    }, 400); 
  };

  return (
    <main className="min-h-screen">
      <div className="relative z-10 w-full">
        <HeroSection />

        <div className="mt-8 mb-16">
          <SearchInput onSearch={handleSearch} loading={loading} />
        </div>

        <section className="mt-24 w-full px-5 md:px-8 mb-32">
          <div className="mx-auto w-full max-w-3xl flex flex-col items-center text-center">
            <span
              className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider"
              style={{
                backgroundColor: isDark ? 'rgba(30,41,59,0.8)' : 'rgba(241,245,249,0.8)',
                color: isDark ? '#94a3b8' : '#475569',
                border: `1px solid ${isDark ? 'rgba(55,65,81,0.5)' : 'rgba(226,232,240,0.5)'}`,
              }}
            >
              The Process
            </span>
            <h2
              className="text-[1.75rem] font-medium tracking-tight md:text-[2.25rem]"
              style={{ color: isDark ? '#ffffff' : '#0f172a' }}
            >
              How it works
            </h2>
            <p
              className="mt-4 text-[1.125rem] max-w-2xl leading-relaxed"
              style={{ color: isDark ? '#94a3b8' : '#64748b' }}
            >
              Extract active webfonts from any URL, inspect their weights and styles, and match against an extensive database of free alternatives in seconds.
            </p>
          </div>
          <HowItWorksCards />
        </section>

        <TestimonialsSection />

        <footer
          className="px-5 py-16 md:px-8"
          style={{
            borderTop: `1px solid ${isDark ? 'rgba(30,41,59,0.6)' : 'rgba(226,232,240,0.6)'}`,
          }}
        >
          <div className="mx-auto w-full max-w-6xl flex flex-col items-center text-center">
            <p
              className="text-[0.72rem] font-semibold uppercase tracking-[0.1em]"
              style={{ color: isDark ? '#64748b' : '#64748b' }}
            >
              Supports WOFF, WOFF2, TTF, and OTF
            </p>
            <p
              className="mt-5 max-w-2xl text-[0.9rem] leading-relaxed"
              style={{ color: isDark ? '#94a3b8' : '#64748b' }}
            >
              FontSnap is intended for research and testing. Identifying a font does not grant usage rights. Always confirm licensing with the original foundry before using fonts in production.
            </p>
            <div
              className="mt-8 flex items-center justify-center gap-2 text-[0.8rem]"
              style={{ color: isDark ? '#64748b' : '#64748b' }}
            >
              <span>&copy; {new Date().getFullYear()} FontSnap.</span>
              <span
                className="h-1 w-1 rounded-full"
                style={{ backgroundColor: isDark ? '#475569' : '#cbd5e1' }}
              ></span>
              <span>Created by <a href="https://github.com/TheNeovimmer" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">TheNeovimmer</a></span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
