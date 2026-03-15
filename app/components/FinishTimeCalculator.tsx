'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import RenderPaceField from '@/app/components/RenderPaceField';
import RenderTimeField from '@/app/components/RenderTimeField';

type Unit = 'km' | 'mile';
type LastEdited = 'pace' | 'time' | null;

interface FinishTimeCalculatorProps {
    distanceKm: number;
    distanceMiles: number;
}

export default function FinishTimeCalculator({ distanceKm, distanceMiles }: FinishTimeCalculatorProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [unit, setUnit] = useState<Unit>('km');
    const [pace, setPace] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [lastEdited, setLastEdited] = useState<LastEdited>(null);

    // Initialize from URL on mount
    useEffect(() => {
        const urlUnit = searchParams.get('unit');
        if (urlUnit === 'km' || urlUnit === 'mile') {
            setUnit(urlUnit);
        }
    }, [searchParams]);

    // Update URL with current state
    const updateURL = useCallback((params: Record<string, string>) => {
        const newParams = new URLSearchParams(searchParams.toString());
        Object.entries(params).forEach(([key, value]) => {
            if (value) {
                newParams.set(key, value);
            } else {
                newParams.delete(key);
            }
        });
        router.replace(`?${newParams.toString()}`, { scroll: false });
    }, [searchParams, router]);

    // Calculate finish time based on pace
    const calculateFinishTime = useCallback((paceStr: string, distanceKm: number) => {
        const [minStr, secStr] = paceStr.split(':');
        const minutes = parseInt(minStr) || 0;
        const seconds = parseInt(secStr) || 0;

        if (minutes === 0 && seconds === 0) {
            return '00:00:00';
        }

        const paceInMinutes = minutes + seconds / 60;
        const totalMinutes = paceInMinutes * distanceKm;
        
        let hours = Math.floor(totalMinutes / 60);
        let mins = Math.floor(totalMinutes % 60);
        let secs = Math.round((totalMinutes % 1) * 60);

        // Handle seconds overflow
        if (secs >= 60) {
            mins += 1;
            secs = 0;
        }

        // Handle minutes overflow
        if (mins >= 60) {
            hours += 1;
            mins = 0;
        }

        // Cap at 99:59:59
        if (hours > 99) {
            hours = 99;
            mins = 59;
            secs = 59;
        }

        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, []);

    // Calculate pace based on finish time
    const calculatePaceFromTime = useCallback((timeStr: string, distanceKm: number) => {
        const [hourStr, minStr, secStr] = timeStr.split(':');
        const hours = parseInt(hourStr) || 0;
        const minutes = parseInt(minStr) || 0;
        const seconds = parseInt(secStr) || 0;

        if (hours === 0 && minutes === 0 && seconds === 0) {
            return '00:00';
        }

        const totalMinutes = hours * 60 + minutes + seconds / 60;
        const paceInMinutes = totalMinutes / distanceKm;
        
        let paceMinutes = Math.floor(paceInMinutes);
        let paceSeconds = Math.round((paceInMinutes % 1) * 60);

        // Handle seconds overflow
        if (paceSeconds >= 60) {
            paceMinutes += 1;
            paceSeconds = 0;
        }

        // Cap at 99:59
        if (paceMinutes > 99) {
            paceMinutes = 99;
            paceSeconds = 59;
        }

        return `${paceMinutes.toString().padStart(2, '0')}:${paceSeconds.toString().padStart(2, '0')}`;
    }, []);

    // Handle pace changes
    const handlePaceChange = (newPace: string) => {
        setPace(newPace);
        setLastEdited('pace');

        if (newPace === '') { setTime(''); return; }

        const distance = unit === 'km' ? distanceKm : distanceMiles;
        const calculatedTime = calculateFinishTime(newPace, distance);
        setTime(calculatedTime);
    };

    // Handle time changes
    const handleTimeChange = (newTime: string) => {
        setTime(newTime);
        setLastEdited('time');

        if (newTime === '') { setPace(''); return; }

        const distance = unit === 'km' ? distanceKm : distanceMiles;
        if (!isNaN(distance) && distance > 0) {
            const calculatedPace = calculatePaceFromTime(newTime, distance);
            setPace(calculatedPace);
        }
    };

    // Handle unit switch
    const handleUnitSwitch = () => {
        const newUnit: Unit = unit === 'km' ? 'mile' : 'km';
        setUnit(newUnit);

        const distance = newUnit === 'km' ? distanceKm : distanceMiles;

        // Recalculate based on what was last edited
        if (lastEdited === 'pace' && pace) {
            const calculatedTime = calculateFinishTime(pace, distance);
            setTime(calculatedTime);
        } else if (lastEdited === 'time' && time) {
            const calculatedPace = calculatePaceFromTime(time, distance);
            setPace(calculatedPace);
        }

        updateURL({ unit: newUnit });
    };

    const unitLabel = unit === 'km' ? 'km' : 'mi';

    return (
        <div className="lg:text-9xl sm:text-6xl text-4xl font-extrabold" style={{ letterSpacing: '-6%' }}>
            {/* Unit Toggle */}
            <div
                className="flex justify-center hover:cursor-pointer w-fit"
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

            <RenderPaceField unitLabel={unitLabel} pace={pace} handlePaceChange={handlePaceChange} />

            <RenderTimeField time={time} handleTimeChange={handleTimeChange} />
        </div>
    );
}

