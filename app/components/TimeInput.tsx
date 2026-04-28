import { useEffect, useState } from "react";

export default function TimeInput({
    time,
    setTime,
}: {
    time: string;
    setTime: (time: string) => void;
}) {
    const [localTime, setLocalTime] = useState(time);

    // Sync local state when prop changes from parent
    useEffect(() => {
        setLocalTime(time);
    }, [time]);

    const validateAndCorrectTime = (timeValue: string) => {
        const parts = timeValue.split(':');
        let hours = parseInt(parts[0] || '0', 10);
        let minutes = parseInt(parts[1] || '0', 10);
        let seconds = parseInt(parts[2] || '0', 10);

        // Roll over excess seconds into minutes
        if (seconds >= 60) {
            minutes += Math.floor(seconds / 60);
            seconds = seconds % 60;
        }

        // Roll over excess minutes into hours
        if (minutes >= 60) {
            hours += Math.floor(minutes / 60);
            minutes = minutes % 60;
        }

        // Clamp hours to 99
        if (hours > 99) {
            hours = 99;
            minutes = 59;
            seconds = 59;
        }

        const correctedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (correctedTime !== timeValue) {
            setTime(correctedTime);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let v = e.target.value.replace(/\D/g, ""); // only digits
        
        // Check if we already have 6 actual digits with non-zero first digit
        // If so, cap at 6 digits (prevent further input)
        const currentDigits = localTime.replace(/\D/g, "");
        const hasCompleteInput = currentDigits.length >= 6 && currentDigits[0] !== '0';
        
        if (hasCompleteInput && v.length > 6) {
            return; // Don't allow more input
        }
        
        // Cap at 6 digits
        if (v.length > 6) {
            v = v.slice(-6); // keep last 6 digits
        }
        
        v = v.padStart(6, "0");

        let hours = v.slice(0, 2);
        let minutes = v.slice(2, 4);
        let seconds = v.slice(4, 6);

        const newTime = `${hours}:${minutes}:${seconds}`;
        setLocalTime(newTime);
        setTime(newTime);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Handle backspace to remove digits from right
        if (e.key === "Backspace") {
            e.preventDefault();
            const digits = localTime.replace(/\D/g, "");
            const newDigits = digits.slice(0, -1).padStart(6, "0");
            const hours = newDigits.slice(0, 2);
            const minutes = newDigits.slice(2, 4);
            const seconds = newDigits.slice(4, 6);
            const newTime = `${hours}:${minutes}:${seconds}`;
            setLocalTime(newTime);
            
            setTime(newTime);
        }
    };

    const handleBlur = () => {
        const digits = localTime.replace(/\D/g, "");
        if (digits.length === 0 || /^0+$/.test(digits)) {
            setLocalTime('');
            setTime('');
            return;
        }

        validateAndCorrectTime(localTime);
    };

    return (
        <input
            type="text"
            value={localTime}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            className="
        w-[4.5em]
        relative
        lg:bottom-3
        sm:bottom-1.5
        bottom-0
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
            placeholder="03:52:03"
        />
    );
}
