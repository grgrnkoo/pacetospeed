'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

type Unit = 'km' | 'mile';

interface Distance {
    name: string;
    slug: string;
    km: number;
    miles: number;
}

const DISTANCES: Distance[] = [
    { name: '5K', slug: '5k', km: 5, miles: 3.107 },
    { name: '10K', slug: '10k', km: 10, miles: 6.214 },
    { name: 'Half Marathon', slug: 'half-marathon', km: 21.0975, miles: 13.109 },
    { name: 'Marathon', slug: 'marathon', km: 42.195, miles: 26.219 },
    { name: '50K', slug: '50k', km: 50, miles: 31.069 },
    { name: '100K', slug: '100k', km: 100, miles: 62.137 },
    { name: 'Custom', slug: 'custom', km: 0, miles: 0 },
];

export default function DistanceSelector() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [unit, setUnit] = useState<Unit>('km');

    useEffect(() => {
        const urlUnit = searchParams.get('unit');
        if (urlUnit === 'km' || urlUnit === 'mile') {
            setUnit(urlUnit);
        }
    }, [searchParams]);

    const handleUnitSwitch = () => {
        const newUnit: Unit = unit === 'km' ? 'mile' : 'km';
        setUnit(newUnit);
        
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('unit', newUnit);
        router.replace(`?${newParams.toString()}`, { scroll: false });
    };

    return (
        <div className="lg:text-9xl sm:text-6xl text-4xl font-extrabold" style={{ letterSpacing: '-6%' }}>
            {/* Unit Toggle */}
            <div
                className="flex justify-center hover:cursor-pointer w-fit mb-8"
                onClick={handleUnitSwitch}
            >
                <span
                    className={`pr-4 py-2 rounded-full lg:text-5xl sm:text-3xl text-xl font-extrabold transition-all select-none ${
                        unit === 'km' ? 'text-stone-800' : 'text-stone-400'
                    }`}
                >
                    km
                </span>
                <span
                    className={`pl-4 py-2 rounded-full lg:text-5xl sm:text-3xl text-xl font-extrabold transition-all select-none ${
                        unit === 'km' ? 'text-stone-400' : 'text-stone-800'
                    }`}
                >
                    mi
                </span>
            </div>

            {/* Distance Selector */}
            <div className="grid grid-cols-1 gap-4 text-base font-extrabold">
                {DISTANCES.map((distance) => (
                    <Link
                        key={distance.slug}
                        href={`/finish-time/${distance.slug}?unit=${unit}`}
                        className="flex align-bottom "
                    >
                        <div className="text-2xl font-extrabold mb-2">{distance.name}</div>
                        <div className="text-lg text-stone-400 mt-auto relative bottom-[.4em] pl-2">
                            {unit === 'km' 
                                ? distance.slug === 'custom' ? 'enter your distance' : `${distance.km} km` 
                                : distance.slug === 'custom' ? 'enter your distance' : `${distance.miles.toFixed(2)} mi`}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

