import { Suspense } from 'react';
import { Metadata } from 'next';
import DistanceSelector from '@/app/components/DistanceSelector';
import LoadingFallback from '@/app/components/LoadingFallback';

export const metadata: Metadata = {
    title: 'Running Race Finish Time Calculator | Pace to Speed Converter',
    description: 'Calculate your expected race finish time for 5K, 10K, half marathon, marathon, 50K, 100K, and custom distances. Find out how fast you need to run to achieve your target time.',
    alternates: {
        canonical: 'https://pacetospeed.xyz/finish-time',
    },
};

export default function FinishTimePage() {
    return (
        <div className="flex-1 flex w-full mx-auto items-center justify-start lg:max-w-4xl sm:max-w-3xl px-4">
            <div className="w-full max-w-lg">
                <div className="mb-4 lg:mb-6">
                    <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
                        Running Race Finish Time Calculator
                    </h1>
                    <p className="text-sm lg:text-base text-stone-800">
                        Calculate your expected finish time
                    </p>
                </div>

                <Suspense fallback={<LoadingFallback />}>
                    <DistanceSelector />
                </Suspense>
            </div>
        </div>
    );
}

