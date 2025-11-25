import { Suspense } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import FinishTimeCalculator from '@/app/components/FinishTimeCalculator';
import CustomFinishTimeCalculator from '@/app/components/CustomFinishTimeCalculator';
import LoadingFallback from '@/app/components/LoadingFallback';

interface DistanceConfig {
    name: string;
    slug: string;
    km: number;
    miles: number;
    title: string;
    description: string;
}

const DISTANCES: Record<string, DistanceConfig> = {
    '5k': {
        name: '5K',
        slug: '5k',
        km: 5,
        miles: 3.107,
        title: 'How fast you need to run to finish a 5K',
        description: 'Calculate your required running pace and speed to finish a 5K race in your target time. Find out how fast you need to run in min/km, min/mile, km/h, and mph for your 5 kilometer race.',
    },
    '10k': {
        name: '10K',
        slug: '10k',
        km: 10,
        miles: 6.214,
        title: 'How fast you need to run to finish a 10K',
        description: 'Calculate your required running pace and speed to finish a 10K race in your target time. Find out how fast you need to run in min/km, min/mile, km/h, and mph for your 10 kilometer race.',
    },
    'half-marathon': {
        name: 'Half Marathon',
        slug: 'half-marathon',
        km: 21.0975,
        miles: 13.109,
        title: 'How fast you need to run to finish a Half Marathon',
        description: 'Calculate your required running pace and speed to finish a half marathon (21.1 km / 13.1 mi) in your target time. Find out how fast you need to run in min/km, min/mile, km/h, and mph.',
    },
    'marathon': {
        name: 'Marathon',
        slug: 'marathon',
        km: 42.195,
        miles: 26.219,
        title: 'How fast you need to run to finish a Marathon',
        description: 'Calculate your required running pace and speed to finish a marathon (42.2 km / 26.2 mi) in your target time. Find out how fast you need to run in min/km, min/mile, km/h, and mph.',
    },
    '50k': {
        name: '50K',
        slug: '50k',
        km: 50,
        miles: 31.069,
        title: 'How fast you need to run to finish a 50K',
        description: 'Calculate your required running pace and speed to finish a 50K ultramarathon in your target time. Find out how fast you need to run in min/km, min/mile, km/h, and mph for your 50 kilometer race.',
    },
    '100k': {
        name: '100K',
        slug: '100k',
        km: 100,
        miles: 62.137,
        title: 'How fast you need to run to finish a 100K',
        description: 'Calculate your required running pace and speed to finish a 100K ultramarathon in your target time. Find out how fast you need to run in min/km, min/mile, km/h, and mph for your 100 kilometer race.',
    },
    'custom': {
        name: 'Custom',
        slug: 'custom',
        km: 0,
        miles: 0,
        title: 'How fast you need to run to finish',
        description: 'Calculate your required running pace and speed to finish any custom race distance in your target time. Find out how fast you need to run in min/km, min/mile, km/h, and mph.',
    },
};

interface PageProps {
    params: Promise<{
        distance: string;
    }>;
}

// Generate static params for all distance pages
export async function generateStaticParams() {
    return Object.keys(DISTANCES).map((distance) => ({
        distance,
    }));
}

// Generate metadata for each distance page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { distance } = await params;
    const distanceConfig = DISTANCES[distance];

    if (!distanceConfig) {
        return {
            title: 'Distance not found',
            description: 'The requested race distance was not found.',
        };
    }

    return {
        title: `${distanceConfig.title} | Pace to Speed Converter`,
        description: distanceConfig.description,
        alternates: {
            canonical: `https://pacetospeed.xyz/finish-time/${distance}`,
        },
        openGraph: {
            title: `${distanceConfig.title} | Pace to Speed Converter`,
            description: distanceConfig.description,
            url: `https://pacetospeed.xyz/finish-time/${distance}`,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${distanceConfig.title} | Pace to Speed Converter`,
            description: distanceConfig.description,
        },
    };
}

function DistanceHeader({ config, defaultUnit = 'km' }: { config: DistanceConfig; defaultUnit?: 'km' | 'mile' }) {
    return (
        <div className="mb-4 lg:mb-6">
            <Link
                href="/finish-time"
                className="text-sm lg:text-base text-stone-600 hover:text-stone-800 mb-2 inline-block"
            >
                ← Back to distances
            </Link>
            <h1 className="text-2xl lg:text-4xl font-bold bg-linear-to-r from-stone-800 via-stone-600 to-stone-800 bg-clip-text text-transparent mb-1 lg:mb-2">
                {config.title}
            </h1>
            <p className="text-sm lg:text-base text-stone-800">
                {config.name} / {defaultUnit === 'km' ? `${config.km} km` : `${config.miles.toFixed(2)} mi`}
            </p>
        </div>
    );
}

export default async function DistanceFinishTimePage({ params }: PageProps) {
    const { distance } = await params;
    const distanceConfig = DISTANCES[distance];

    if (!distanceConfig) {
        return (
            <div className="flex-1 flex w-full mx-auto items-center justify-center lg:max-w-4xl sm:max-w-3xl px-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-stone-800 mb-4">Distance not found</h1>
                    <Link href="/finish-time" className="text-stone-600 hover:text-stone-800 underline">
                        Back to calculator
                    </Link>
                </div>
            </div>
        );
    }

    // Handle custom distance with custom calculator
    if (distance === 'custom') {
        return (
            <div className="flex-1 flex w-full mx-auto items-center justify-start lg:max-w-4xl sm:max-w-3xl px-4">
                <div className="w-full max-w-lg">
                    <div className="mb-4 lg:mb-6">
                        <Link
                            href="/finish-time"
                            className="text-sm lg:text-base text-stone-600 hover:text-stone-800 mb-2 inline-block"
                        >
                            ← Back to distances
                        </Link>
                        <h1 className="text-2xl lg:text-4xl font-bold bg-linear-to-r from-stone-800 via-stone-600 to-stone-800 bg-clip-text text-transparent mb-1 lg:mb-2">
                            How fast you need to run to finish
                        </h1>
                        <p className="text-sm lg:text-base text-stone-800">
                            Enter your custom race distance
                        </p>
                    </div>
                    <Suspense fallback={<LoadingFallback />}>
                        <CustomFinishTimeCalculator />
                    </Suspense>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex w-full mx-auto items-center justify-start lg:max-w-4xl sm:max-w-3xl px-4">
            <div className="w-full max-w-lg">
                <DistanceHeader config={distanceConfig} />
                <Suspense fallback={<LoadingFallback />}>
                    <FinishTimeCalculator 
                        distanceKm={distanceConfig.km}
                        distanceMiles={distanceConfig.miles}
                    />
                </Suspense>
            </div>
        </div>
    );
}
