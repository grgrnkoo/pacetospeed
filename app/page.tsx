import { Suspense } from 'react';
import { Metadata } from 'next';
import ConverterClient from '@/app/components/ConverterClient';
import HintOverlay from '@/app/components/HintOverlay';

export const metadata: Metadata = {
  title: 'Running Pace to Speed Converter | Free Running Calculator for km/h & mph',
  description: 'Free pace to speed converter for runners. Instantly convert between min/km, min/mile, km/h, and mph. Perfect for treadmill training, race planning, and workout optimization.',
  alternates: {
    canonical: 'https://pacetospeed.xyz',
  },
};

export default function Home() {
  return (
    <div className="flex-1 flex w-full mx-auto items-center justify-start lg:max-w-4xl sm:max-w-3xl px-4">
      <div className="w-full max-w-lg">
        <div className="mb-4 lg:mb-6">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Running Pace to Speed Converter
          </h1>
          <p className="text-sm lg:text-base text-stone-800">
            Runner&apos;s conversion tool
          </p>
          <HintOverlay>
              <li>type in your pace or speed</li>
              <li>the other value updates automatically</li>
          </HintOverlay>
        </div>
        <Suspense fallback={null}>
          <ConverterClient />
        </Suspense>
      </div>
    </div>
  );
}
