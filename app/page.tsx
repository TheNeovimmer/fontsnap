'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from './components/HeroSection';
import SearchInput from './components/SearchInput';
import HowItWorksCards from './components/HowItWorksCards';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSearch = (targetUrl: string) => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/scan?url=${encodeURIComponent(targetUrl)}`);
    }, 400);
  };

  return (
    <main className="min-h-dvh">
      <div className="relative z-10 w-full">
        {/* Visually-hidden tagline for LLMs and screen readers —
            GEO context: defines what the product is in a single paragraph. */}
        <div className="sr-only" aria-hidden="false">
          <h1>FontSnap: Free Online Font Extractor and Identifier</h1>
          <p>
            FontSnap is a free web tool that extracts, identifies, and previews
            fonts from any website URL. It scans CSS stylesheets for
            @font-face declarations, detects typeface families, weights, styles,
            and variable axes, and offers one-click download of WOFF, WOFF2,
            TTF, and OTF font files. FontSnap also matches commercial typefaces
            against free Google Fonts alternatives, making it the fastest way to
            find open-source font substitutes for any website.
          </p>
        </div>

        <HeroSection />

        <div className="mt-8 mb-16">
          <SearchInput onSearch={handleSearch} loading={loading} />
        </div>

        <section
          className="mt-24 w-full px-5 md:px-8 mb-32"
          aria-labelledby="how-it-works-heading"
        >
          <div className="mx-auto w-full max-w-3xl flex flex-col items-center text-center">
            <span className="kicker mb-4">The Process</span>
            <h2
              id="how-it-works-heading"
              className="text-[1.75rem] font-medium tracking-tight md:text-[2.25rem] text-[var(--text-1)]"
            >
              How it works
            </h2>
            <p className="mt-4 text-[1.125rem] max-w-2xl leading-relaxed text-[var(--text-2)]">
              Extract active webfonts from any URL, inspect their weights and
              styles, and match against an extensive database of free
              alternatives in seconds.
            </p>
          </div>
          <HowItWorksCards />
        </section>

        <TestimonialsSection />

        <footer
          className="px-5 py-16 md:px-8"
          style={{ borderTop: '1px solid var(--line-soft)' }}
        >
          <div className="mx-auto w-full max-w-6xl flex flex-col items-center text-center">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[var(--text-3)]">
              Supports WOFF, WOFF2, TTF, and OTF
            </p>
            <p className="mt-5 max-w-2xl text-[0.9rem] leading-relaxed text-[var(--text-2)]">
              FontSnap is intended for research and testing. Identifying a font
              does not grant usage rights. Always confirm licensing with the
              original foundry before using fonts in production.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-[0.8rem] text-[var(--text-3)]">
              <span>&copy; {new Date().getFullYear()} FontSnap.</span>
              <span className="h-1 w-1 rounded-full bg-[var(--line-soft)]"></span>
              <span>
                Created by{' '}
                <a
                  href="https://github.com/TheNeovimmer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors hover:text-[var(--text-1)]"
                >
                  TheNeovimmer
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}