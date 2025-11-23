'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

type Unit = 'km' | 'mile';
type Mode = 'pace' | 'speed';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // State management
  const [unit, setUnit] = useState<Unit>('km');
  const [mode, setMode] = useState<Mode>('pace'); // 'pace' means pace is on top
  const [paceMinutes, setPaceMinutes] = useState<string>('');
  const [paceSeconds, setPaceSeconds] = useState<string>('');
  const [speed, setSpeed] = useState<string>('');

  // Initialize from URL on mount
  useEffect(() => {
    const urlUnit = searchParams.get('unit');
    const urlMode = searchParams.get('mode');
    const urlPaceMin = searchParams.get('paceMin');
    const urlPaceSec = searchParams.get('paceSec');
    const urlSpeed = searchParams.get('speed');

    if (urlUnit === 'km' || urlUnit === 'mile') {
      setUnit(urlUnit);
    }
    if (urlMode === 'pace' || urlMode === 'speed') {
      setMode(urlMode);
    }
    if (urlPaceMin) setPaceMinutes(urlPaceMin);
    if (urlPaceSec) setPaceSeconds(urlPaceSec);
    if (urlSpeed) setSpeed(urlSpeed);
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

  const paceToSpeed = (minutes: number, seconds: number): number => {
    const totalMinutes = minutes + seconds / 60;
    if (totalMinutes <= 0) return 0;
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
  const handlePaceChange = (minutes: string, seconds: string) => {
    setPaceMinutes(minutes);
    setPaceSeconds(seconds);

    const min = parseInt(minutes) || 0;
    const sec = parseInt(seconds) || 0;

    if (min > 0 || sec > 0) {
      const calculatedSpeed = paceToSpeed(min, sec);
      setSpeed(calculatedSpeed.toFixed(2));
      updateURL({
        unit,
        mode: 'pace',
        paceMin: minutes,
        paceSec: seconds,
        speed: calculatedSpeed.toFixed(2),
      });
    } else {
      setSpeed('');
      updateURL({ unit, mode: 'pace', paceMin: '', paceSec: '', speed: '' });
    }
  };

  // Handle speed input changes (when speed is on top - editable)
  const handleSpeedChange = (value: string) => {
    setSpeed(value);

    const speedValue = parseFloat(value);
    if (speedValue > 0) {
      const { minutes, seconds } = speedToPace(speedValue);
      setPaceMinutes(minutes.toString());
      setPaceSeconds(seconds.toString());
      updateURL({
        unit,
        mode: 'speed',
        paceMin: minutes.toString(),
        paceSec: seconds.toString(),
        speed: value,
      });
    } else {
      setPaceMinutes('');
      setPaceSeconds('');
      updateURL({ unit, mode: 'speed', paceMin: '', paceSec: '', speed: '' });
    }
  };

  // Handle unit switch
  const handleUnitSwitch = () => {
    const newUnit: Unit = unit === 'km' ? 'mile' : 'km';
    
    // Convert current values to new unit
    const speedValue = parseFloat(speed);
    if (speedValue > 0) {
      const convertedSpeed = convertUnit(speedValue, unit, newUnit);
      setSpeed(convertedSpeed.toFixed(2));
      
      const { minutes, seconds } = speedToPace(convertedSpeed);
      setPaceMinutes(minutes.toString());
      setPaceSeconds(seconds.toString());
      
      updateURL({
        unit: newUnit,
        mode,
        paceMin: minutes.toString(),
        paceSec: seconds.toString(),
        speed: convertedSpeed.toFixed(2),
      });
    } else {
      updateURL({ unit: newUnit, mode, paceMin: '', paceSec: '', speed: '' });
    }
    
    setUnit(newUnit);
  };

  // Handle swap (switch positions of pace and speed)
  const handleSwap = () => {
    const newMode: Mode = mode === 'pace' ? 'speed' : 'pace';
    setMode(newMode);
    updateURL({
      unit,
      mode: newMode,
      paceMin: paceMinutes,
      paceSec: paceSeconds,
      speed,
    });
  };

  const unitLabel = unit === 'km' ? 'km' : 'mi';
  const unitLabelLong = unit === 'km' ? 'kilometer' : 'mile';

  // Render pace input field
  const renderPaceField = (isEditable: boolean) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Pace (min/{unitLabel})
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="0"
          max="99"
          value={paceMinutes}
          onChange={(e) => isEditable && handlePaceChange(e.target.value, paceSeconds)}
          placeholder="5"
          readOnly={!isEditable}
          className={`flex-1 px-4 py-3 rounded-lg border ${
            isEditable
              ? 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 cursor-not-allowed'
          } text-gray-900 dark:text-white outline-none transition-all`}
        />
        <span className="text-gray-500 dark:text-gray-400 font-medium">:</span>
        <input
          type="number"
          min="0"
          max="59"
          value={paceSeconds}
          onChange={(e) => isEditable && handlePaceChange(paceMinutes, e.target.value)}
          placeholder="30"
          readOnly={!isEditable}
          className={`flex-1 px-4 py-3 rounded-lg border ${
            isEditable
              ? 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 cursor-not-allowed'
          } text-gray-900 dark:text-white outline-none transition-all`}
        />
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        minutes : seconds per {unitLabelLong}
      </p>
    </div>
  );

  // Render speed input field
  const renderSpeedField = (isEditable: boolean) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Speed ({unitLabel}/h)
      </label>
      <input
        type="number"
        step="0.01"
        min="0"
        value={speed}
        onChange={(e) => isEditable && handleSpeedChange(e.target.value)}
        placeholder="10.91"
        readOnly={!isEditable}
        className={`w-full px-4 py-3 rounded-lg border ${
          isEditable
            ? 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 cursor-not-allowed'
        } text-gray-900 dark:text-white outline-none transition-all`}
      />
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {unitLabel === 'km' ? 'kilometers' : 'miles'} per hour
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Pace ⇄ Speed
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Runner's conversion tool
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 space-y-6">
          {/* Unit Toggle */}
          <div className="flex justify-center">
            <button
              onClick={handleUnitSwitch}
              className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  unit === 'km'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Kilometers
              </span>
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  unit === 'mile'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Miles
              </span>
            </button>
          </div>

          {/* Top Field (Editable) */}
          {mode === 'pace' ? renderPaceField(true) : renderSpeedField(true)}

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSwap}
              className="group p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all hover:shadow-xl hover:scale-110 active:scale-95"
              aria-label="Swap pace and speed"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-500 ${
                  mode === 'speed' ? 'rotate-180' : ''
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>

          {/* Bottom Field (Read-only) */}
          {mode === 'pace' ? renderSpeedField(false) : renderPaceField(false)}
        </div>

        {/* Info section */}
        {(paceMinutes || paceSeconds || speed) && (
          <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {paceMinutes || '0'}:{(paceSeconds || '0').padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  min/{unitLabel}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  {speed || '0'}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {unitLabel}/h
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
