'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import RenderPaceField from '@/app/components/RenderPaceField';
import RenderSpeedField from '@/app/components/RenderSpeedField';

type Unit = 'km' | 'mile';

export default function ConverterClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State management
  const [unit, setUnit] = useState<Unit>('km');
  const [pace, setPace] = useState<string>('');
  const [speed, setSpeed] = useState<string>('');

  // Initialize from URL on mount
  useEffect(() => {
    const urlUnit = searchParams.get('unit');
    if (urlUnit === 'km' || urlUnit === 'mile') {
      setUnit(urlUnit);
    }
  }, [searchParams]);

  // Update URL with current state (debounced)
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

  // Conversion logic
  const MILE_TO_KM = 1.60934;

  const clampSpeed = (speed: number): number => {
    if (speed < 0) return 0;
    if (speed > 99.9) return 99.9;
    return speed;
  };

  const paceToSpeed = (minutes: number, seconds: number): number => {
    const totalMinutes = minutes + seconds / 60;
    if (totalMinutes === 0) return 0;
    return 60 / totalMinutes;
  };

  const speedToPace = (speedValue: number): { minutes: number; seconds: number } => {
    if (speedValue <= 0) return { minutes: 0, seconds: 0 };
    const totalMinutes = 60 / speedValue;
    const minutes = Math.floor(totalMinutes);
    const seconds = Math.round((totalMinutes - minutes) * 60);
    return { minutes, seconds };
  };

  const convertUnit = (value: number, from: Unit, to: Unit): number => {
    if (from === to) return value;
    if (from === 'km' && to === 'mile') return value / MILE_TO_KM;
    return value * MILE_TO_KM;
  };

  // Handle pace input changes (when pace is on top - editable)
  const handlePaceChange = (pace: string) => {
    setPace(pace);

    if (pace === '') { setSpeed(''); return; }

    const min = parseInt(pace.split(':')[0]) || 0;
    const sec = parseInt(pace.split(':')[1]) || 0;

    const calculatedSpeed = paceToSpeed(min, sec);
    const clampedSpeed = clampSpeed(calculatedSpeed);
    setSpeed(clampedSpeed.toFixed(1));
  };

  // Handle speed input changes (when speed is on top - editable)
  const handleSpeedChange = (value: string) => {
    setSpeed(value);

    if (value === '') { setPace(''); return; }

    const speedValue = parseFloat(value);

    if (!isNaN(speedValue)) {
      const { minutes, seconds } = speedToPace(speedValue);
      setPace(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    } else {
      setPace('');
    }
  };

  // Handle unit switch
  const handleUnitSwitch = () => {
    const newUnit: Unit = unit === 'km' ? 'mile' : 'km';

    // Convert current values to new unit
    const speedValue = parseFloat(speed);
    if (speedValue > 0) {
      const convertedSpeed = convertUnit(speedValue, unit, newUnit);
      const clampedSpeed = clampSpeed(convertedSpeed);
      setSpeed(clampedSpeed.toFixed(1));

      const { minutes, seconds } = speedToPace(clampedSpeed);
      setPace(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

      updateURL({
        unit: newUnit,
      });
    } else {
      updateURL({ unit: newUnit, paceMin: '', paceSec: '', speed: '' });
    }

    setUnit(newUnit);
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
          className={`pr-4 py-2 rounded-full lg:text-5xl sm:text-3xl text-xl font-extrabold transition-all select-none ${unit === 'km'
            ? 'text-stone-800'
            : 'text-stone-400'
            }`}
        >
          km
        </span>
        <span
          className={`pl-4 py-2 rounded-full lg:text-5xl sm:text-3xl text-xl font-extrabold transition-all select-none ${unit === 'km'
            ? 'text-stone-400'
            : 'text-stone-800'
            }`}
        >
          mi
        </span>
      </div>

      <RenderSpeedField unitLabel={unitLabel} speed={speed} handleSpeedChange={handleSpeedChange} />

      <RenderPaceField unitLabel={unitLabel} pace={pace} handlePaceChange={handlePaceChange} />
    </div>
  );
}

