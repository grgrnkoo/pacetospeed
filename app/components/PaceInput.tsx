import { useEffect, useRef, useState } from "react";

export default function PaceInput({
    pace,
    setPace,
}: {
    pace: string;
    setPace: (pace: string) => void;
}) {
    const [localPace, setLocalPace] = useState(pace);
    const validationTimerRef = useRef<NodeJS.Timeout | null>(null);
    const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
    
    // Sync local state when prop changes from parent
    useEffect(() => {
        setLocalPace(pace);
    }, [pace]);

    const validateAndCorrectPace = (paceValue: string) => {
        const parts = paceValue.split(':');
        let minutes = parseInt(parts[0] || '0', 10);
        let seconds = parseInt(parts[1] || '0', 10);

        // Roll over excess seconds into minutes
        if (seconds >= 60) {
            minutes += Math.floor(seconds / 60);
            seconds = seconds % 60;
        }

        // Clamp minutes to 99
        if (minutes > 99) {
            minutes = 99;
            seconds = 59;
        }

        const correctedPace = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (correctedPace !== paceValue) {
            setPace(correctedPace);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let v = e.target.value.replace(/\D/g, ""); // only digits
        
        // Check if we already have 4 actual digits with non-zero first digit
        // If so, cap at 4 digits (prevent further input)
        const currentDigits = localPace.replace(/\D/g, "");
        const hasCompleteInput = currentDigits.length >= 4 && currentDigits[0] !== '0';
        
        if (hasCompleteInput && v.length > 4) {
            return; // Don't allow more input
        }
        
        v = v.padStart(4, "0");
        if (v.length > 4) v = v.slice(-4); // keep last 4 digits

        let minutes = v.slice(0, 2);
        let seconds = v.slice(2, 4);

        const newPace = `${minutes}:${seconds}`;
        setLocalPace(newPace);

        // Clear existing timers
        if (validationTimerRef.current) {
            clearTimeout(validationTimerRef.current);
        }
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }

        // Debounce callback to parent
        debounceTimerRef.current = setTimeout(() => {
            setPace(newPace);
        }, 500);

        // Set new timer to validate after 500ms
        validationTimerRef.current = setTimeout(() => {
            validateAndCorrectPace(newPace);
        }, 500);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Handle backspace to remove digits from right
        if (e.key === "Backspace") {
            e.preventDefault();
            const digits = localPace.replace(/\D/g, "");
            const newDigits = digits.slice(0, -1).padStart(4, "0");
            const minutes = newDigits.slice(0, 2);
            const seconds = newDigits.slice(2, 4);
            const newPace = `${minutes}:${seconds}`;
            setLocalPace(newPace);
            
            // Clear existing timers
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
            
            // Debounce callback to parent
            debounceTimerRef.current = setTimeout(() => {
                setPace(newPace);
            }, 150);
        }
    };

    useEffect(() => {
        if (localPace === '00:00') {
            setLocalPace('');
            setPace('');
        }
    }, [localPace, setPace]);

    // Cleanup timers on unmount
    useEffect(() => {
        return () => {
            if (validationTimerRef.current) {
                clearTimeout(validationTimerRef.current);
            }
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
        };
    }, []);

    return (
        <input
            type="text"
            inputMode="numeric"
            value={localPace}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="
        w-[3em]
        relative
        lg:bottom-3
        sm:bottom-1.5
        bottom-1
        bg-transparent
        text-stone-800
        placeholder:text-stone-400
        border-none
        outline-none
        ring-0
        focus:outline-none
        focus:ring-0
        focus:border-none
        focus-visible:outline-none
      "
            placeholder="05:30"
        />
    );
}
