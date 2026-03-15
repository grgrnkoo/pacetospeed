import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pacetospeed.xyz'),
  title: {
    default: 'Pace to Speed Converter | Free Running Calculator for km/h & mph',
    template: '%s | Pace to Speed Converter',
  },
  description: 'Free pace to speed converter for runners. Instantly convert between min/km, min/mile, km/h, and mph. Perfect for treadmill training, race planning, and workout optimization.',
  keywords: ['pace to speed', 'pace calculator', 'speed converter', 'running pace', 'treadmill speed', 'min/km to km/h', 'min/mile to mph', 'running calculator', 'pace converter', 'marathon pace', '5k pace'],
  authors: [{ name: 'Oleg', url: 'https://x.com/grgrnko' }],
  creator: 'Oleg',
  publisher: 'Pace to Speed',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pacetospeed.xyz',
    title: 'Pace to Speed Converter | Free Running Calculator',
    description: 'Free pace to speed converter for runners. Instantly convert between min/km, min/mile, km/h, and mph.',
    siteName: 'Pace to Speed Converter',
    images: [
      {
        url: '/icon.png',
        width: 1024,
        height: 1024,
        alt: 'Pace to Speed Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pace to Speed Converter | Free Running Calculator',
    description: 'Free pace to speed converter for runners. Instantly convert between pace and speed units.',
    creator: '@grgrnko',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when ready
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F4M6TDBQQH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F4M6TDBQQH');
          `}
        </Script>
        <div className="flex-1 w-full min-h-screen bg-linear-to-br from-slate-150 to-stone-100 flex flex-col items-center justify-center p-3 md:pt-20 pt-16">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
