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

export const metadata: Metadata = {
  title: "FontSnap - Extract Fonts from Any Website",
  description: "Discover and analyze fonts from any website. Just enter a URL and get instant access to all the fonts used.",
  openGraph: {
    title: "FontSnap",
    description: "Extract and analyze fonts from any website instantly.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FontSnap OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FontSnap",
    description: "Extract and analyze fonts from any website instantly.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${manrope.variable} ${geist.variable}`}>
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
