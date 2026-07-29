import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "./lib/theme-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://fontsnap.vercel.app";
const SITE_NAME = "FontSnap";
const SITE_DESCRIPTION =
  "Extract, preview, and download fonts from any website. Identify typefaces, inspect weights and styles, and find free Google Font alternatives instantly.";
const SITE_KEYWORDS = [
  "font extractor",
  "what font is this",
  "identify font from website",
  "font finder",
  "web font detector",
  "typeface identifier",
  "CSS font extractor",
  "Google Fonts alternative",
  "free fonts",
  "font discovery tool",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Extract Fonts from Any Website`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "TheNeovimmer", url: "https://github.com/TheNeovimmer" }],
  creator: "TheNeovimmer",
  publisher: "FontSnap",
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Extract Fonts from Any Website`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — font extraction and discovery tool`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Extract Fonts from Any Website`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@TheNeovimmer",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png", sizes: "1024x1024" },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "developer tools",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web browser",
      browserRequirements: "Requires JavaScript",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Person",
        name: "TheNeovimmer",
        url: "https://github.com/TheNeovimmer",
      },
      keywords: SITE_KEYWORDS.join(", "),
    },
    {
      "@type": "HowTo",
      name: "How to extract fonts from a website",
      description:
        "Extract, preview, and download fonts used on any website in seconds.",
      totalTime: "PT1M",
      tool: {
        "@type": "HowToTool",
        name: "FontSnap",
      },
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Enter a website URL",
          text: "Type or paste any website URL into the search field.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Analyze the fonts",
          text: "FontSnap scans the site's stylesheets and extracts every @font-face declaration, including weights, styles, and variable axes.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Preview and download",
          text: "Browse extracted fonts with live preview, then download individual files or find free Google Font alternatives.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I find what font a website is using?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Enter the website URL into FontSnap. It scans the site's CSS and extracts every font family, weight, and style automatically.",
          },
        },
        {
          "@type": "Question",
          name: "Is FontSnap free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, FontSnap is completely free. Enter any URL to extract and preview fonts with no account required.",
          },
        },
        {
          "@type": "Question",
          name: "Can I download fonts extracted from a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can download individual font files in WOFF, WOFF2, TTF, and OTF formats. Always verify the license before using downloaded fonts in your own projects.",
          },
        },
        {
          "@type": "Question",
          name: "Does FontSnap support Google Fonts alternatives?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. After extracting fonts from a site, click 'Find similar free fonts' to discover free open-source alternatives from the Google Fonts library that closely match the commercial typefaces.",
          },
        },
        {
          "@type": "Question",
          name: "What font formats does FontSnap support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FontSnap supports WOFF, WOFF2, TTF, and OTF font formats commonly used on the web.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} ${geist.variable}`}
    >
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="lazyOnload"
        />
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}