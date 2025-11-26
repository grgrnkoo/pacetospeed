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

    // Calculate distance based on pace and time
    const calculateDistanceFromPaceAndTime = useCallback((paceStr: string, timeStr: string) => {
        const [paceMin, paceSec] = paceStr.split(':');
        const paceMinutes = parseInt(paceMin) || 0;
        const paceSeconds = parseInt(paceSec) || 0;

        const [hourStr, minStr, secStr] = timeStr.split(':');
        const hours = parseInt(hourStr) || 0;
        const minutes = parseInt(minStr) || 0;
        const seconds = parseInt(secStr) || 0;

        if ((paceMinutes === 0 && paceSeconds === 0) || (hours === 0 && minutes === 0 && seconds === 0)) {
            return '';
        }

        const paceInMinutes = paceMinutes + paceSeconds / 60;
        const totalMinutes = hours * 60 + minutes + seconds / 60;
        
        let distance = totalMinutes / paceInMinutes;

        // Cap at 999.9
        if (distance > 999.9) {
            distance = 999.9;
        }

        return distance.toFixed(2);
    }, []);

    // Handle distance changes
    const handleDistanceChange = (newDistance: string) => {
        let cappedDistance = newDistance;
        const distValue = parseFloat(newDistance);
        
        // Cap at 999.9
        if (!isNaN(distValue) && distValue > 999.9) {
            cappedDistance = '999.9';
        }
        
        if (unit === 'km') {
            setDistanceKm(cappedDistance);
            // Update miles
            const kmValue = parseFloat(cappedDistance);
            if (!isNaN(kmValue) && kmValue > 0) {
                const milesValue = kmValue * KM_TO_MILES;
                setDistanceMiles(milesValue > 999.9 ? '999.9' : milesValue.toFixed(2));
            } else {
                setDistanceMiles('');
            }
        } else {
            setDistanceMiles(cappedDistance);
            // Update km
            const milesValue = parseFloat(cappedDistance);
            if (!isNaN(milesValue) && milesValue > 0) {
                const kmValue = milesValue * MILES_TO_KM;
                setDistanceKm(kmValue > 999.9 ? '999.9' : kmValue.toFixed(2));
            } else {
                setDistanceKm('');
            }
        }
        
        setLastEdited('distance');

        // Recalculate based on what was last edited (pace or time)
        const distance = parseFloat(cappedDistance);
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
        
        // If distance exists, calculate time
        if (!isNaN(distance) && distance > 0) {
            const calculatedTime = calculateFinishTime(newPace, distance);
            setTime(calculatedTime);
        } 
        // If distance is empty but time exists, calculate distance
        else if (time && time !== '00:00:00' && newPace && newPace !== '00:00') {
            const calculatedDistance = calculateDistanceFromPaceAndTime(newPace, time);
            if (calculatedDistance) {
                if (unit === 'km') {
                    setDistanceKm(calculatedDistance);
                    const kmValue = parseFloat(calculatedDistance);
                    const milesValue = kmValue * KM_TO_MILES;
                    setDistanceMiles(milesValue > 999.9 ? '999.9' : milesValue.toFixed(2));
                } else {
                    setDistanceMiles(calculatedDistance);
                    const milesValue = parseFloat(calculatedDistance);
                    const kmValue = milesValue * MILES_TO_KM;
                    setDistanceKm(kmValue > 999.9 ? '999.9' : kmValue.toFixed(2));
                }
            }
        }
    };

    // Handle time changes
    const handleTimeChange = (newTime: string) => {
        setTime(newTime);
        setLastEdited('time');
        
        const distance = parseFloat(unit === 'km' ? distanceKm : distanceMiles);
        
        // If distance exists, calculate pace
        if (!isNaN(distance) && distance > 0) {
            const calculatedPace = calculatePaceFromTime(newTime, distance);
            setPace(calculatedPace);
        }
        // If distance is empty but pace exists, calculate distance
        else if (pace && pace !== '00:00' && newTime && newTime !== '00:00:00') {
            const calculatedDistance = calculateDistanceFromPaceAndTime(pace, newTime);
            if (calculatedDistance) {
                if (unit === 'km') {
                    setDistanceKm(calculatedDistance);
                    const kmValue = parseFloat(calculatedDistance);
                    const milesValue = kmValue * KM_TO_MILES;
                    setDistanceMiles(milesValue > 999.9 ? '999.9' : milesValue.toFixed(2));
                } else {
                    setDistanceMiles(calculatedDistance);
                    const milesValue = parseFloat(calculatedDistance);
                    const kmValue = milesValue * MILES_TO_KM;
                    setDistanceKm(kmValue > 999.9 ? '999.9' : kmValue.toFixed(2));
                }
            }
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

