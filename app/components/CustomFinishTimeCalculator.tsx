'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import RenderPaceField from '@/app/components/RenderPaceField';
import RenderTimeField from '@/app/components/RenderTimeField';
import RenderDistanceField from '@/app/components/RenderDistanceField';

type Unit = 'km' | 'mile';
type LastEdited = 'pace' | 'time' | 'distance' | null;

const KM_TO_MILES = 0.621371;
const MILES_TO_KM = 1.60934;

export default function CustomFinishTimeCalculator() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [unit, setUnit] = useState<Unit>('km');
    const [distanceKm, setDistanceKm] = useState<string>('');
    const [distanceMiles, setDistanceMiles] = useState<string>('');
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
    const calculateFinishTime = useCallback((paceStr: string, distance: number) => {
        const [minStr, secStr] = paceStr.split(':');
        const minutes = parseInt(minStr) || 0;
        const seconds = parseInt(secStr) || 0;

        if (minutes === 0 && seconds === 0) {
            return '';
        }

        if (distance === 0) {
            return '';
        }

        const paceInMinutes = minutes + seconds / 60;
        const totalMinutes = paceInMinutes * distance;
        
        const hours = Math.floor(totalMinutes / 60);
        const mins = Math.floor(totalMinutes % 60);
        const secs = Math.round((totalMinutes % 1) * 60);

        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, []);

    // Calculate pace based on finish time
    const calculatePaceFromTime = useCallback((timeStr: string, distance: number) => {
        const [hourStr, minStr, secStr] = timeStr.split(':');
        const hours = parseInt(hourStr) || 0;
        const minutes = parseInt(minStr) || 0;
        const seconds = parseInt(secStr) || 0;

        if (hours === 0 && minutes === 0 && seconds === 0) {
            return '';
        }

        if (distance === 0) {
            return '';
        }

        const totalMinutes = hours * 60 + minutes + seconds / 60;
        const paceInMinutes = totalMinutes / distance;
        
        const paceMinutes = Math.floor(paceInMinutes);
        const paceSeconds = Math.round((paceInMinutes % 1) * 60);

        return `${paceMinutes.toString().padStart(2, '0')}:${paceSeconds.toString().padStart(2, '0')}`;
    }, []);

    // Handle distance changes
    const handleDistanceChange = (newDistance: string) => {
        if (unit === 'km') {
            setDistanceKm(newDistance);
            // Update miles
            const kmValue = parseFloat(newDistance);
            if (!isNaN(kmValue) && kmValue > 0) {
                setDistanceMiles((kmValue * KM_TO_MILES).toFixed(2));
            } else {
                setDistanceMiles('');
            }
        } else {
            setDistanceMiles(newDistance);
            // Update km
            const milesValue = parseFloat(newDistance);
            if (!isNaN(milesValue) && milesValue > 0) {
                setDistanceKm((milesValue * MILES_TO_KM).toFixed(2));
            } else {
                setDistanceKm('');
            }
        }
        
        setLastEdited('distance');

        // Recalculate based on what was last edited (pace or time)
        const distance = parseFloat(newDistance);
        if (!isNaN(distance) && distance > 0) {
            if (pace && pace !== '00:00') {
                const calculatedTime = calculateFinishTime(pace, distance);
                setTime(calculatedTime);
            } else if (time && time !== '00:00:00') {
                const calculatedPace = calculatePaceFromTime(time, distance);
                setPace(calculatedPace);
            }
        }
    };

    // Handle pace changes
    const handlePaceChange = (newPace: string) => {
        setPace(newPace);
        setLastEdited('pace');
        
        const distance = parseFloat(unit === 'km' ? distanceKm : distanceMiles);
        if (!isNaN(distance) && distance > 0) {
            const calculatedTime = calculateFinishTime(newPace, distance);
            setTime(calculatedTime);
        }
    };

    // Handle time changes
    const handleTimeChange = (newTime: string) => {
        setTime(newTime);
        setLastEdited('time');
        
        const distance = parseFloat(unit === 'km' ? distanceKm : distanceMiles);
        if (!isNaN(distance) && distance > 0) {
            const calculatedPace = calculatePaceFromTime(newTime, distance);
            setPace(calculatedPace);
        }
    };

    // Handle unit switch
    const handleUnitSwitch = () => {
        const newUnit: Unit = unit === 'km' ? 'mile' : 'km';
        setUnit(newUnit);

        const distance = parseFloat(newUnit === 'km' ? distanceKm : distanceMiles);

        // Recalculate based on what was last edited
        if (!isNaN(distance) && distance > 0) {
            if (lastEdited === 'pace' && pace) {
                const calculatedTime = calculateFinishTime(pace, distance);
                setTime(calculatedTime);
            } else if (lastEdited === 'time' && time) {
                const calculatedPace = calculatePaceFromTime(time, distance);
                setPace(calculatedPace);
            }
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

            <RenderDistanceField 
                unitLabel={unitLabel} 
                distance={unit === 'km' ? distanceKm : distanceMiles} 
                handleDistanceChange={handleDistanceChange} 
            />

            <RenderPaceField unitLabel={unitLabel} pace={pace} handlePaceChange={handlePaceChange} />

            <RenderTimeField time={time} handleTimeChange={handleTimeChange} />
        </div>
    );
}

