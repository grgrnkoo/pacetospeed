import { useEffect } from "react";

export default function DistanceInput({
    distance,
    setDistance,
}: {
    distance: string;
    setDistance: (distance: string) => void;
}) {
    let distanceWidth: string;
    if (distance.length === 0) {
        distanceWidth = '2.7em';
    } else {
        distanceWidth = `${distance.length * 0.5 + 0.5}em`;
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let v = e.target.value;
        
        // Check if user manually entered a decimal point
        const hasDecimal = v.includes('.');
        
        if (hasDecimal) {
            // Manual decimal entry mode - allow it
            v = v.replace(/[^\d.]/g, '');
            
            // Only allow one decimal point
            const parts = v.split('.');
            if (parts.length > 2) {
                v = parts[0] + '.' + parts.slice(1).join('');
            }
            
            // Limit to 3 digits before decimal and 2 after
            const [before, after] = v.split('.');
            const limitedBefore = before.slice(0, 3);
            const limitedAfter = after ? after.slice(0, 2) : '';
            v = limitedBefore + (v.includes('.') ? '.' + limitedAfter : '');
            
            setDistance(v);
        } else {
            // Auto-format mode - only digits
            v = v.replace(/\D/g, "");
            
            // Cap at 5 digits total (XXX.XX)
            if (v.length > 5) {
                v = v.slice(-5);
            }
            
            // Auto-format with decimal: XXX.XX
            if (v.length === 0) {
                setDistance('');
            } else if (v.length === 1) {
                setDistance(v);
            } else if (v.length === 2) {
                setDistance(v);
            } else if (v.length === 3) {
                setDistance(v);
            } else if (v.length === 4) {
                // XXX.X format
                setDistance(v.slice(0, 3) + '.' + v.slice(3));
            } else {
                // XXX.XX format
                setDistance(v.slice(0, 3) + '.' + v.slice(3));
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Handle backspace
        if (e.key === "Backspace") {
            // Check if current value has manual decimal
            if (distance.includes('.')) {
                // Manual mode - let default backspace behavior work
                return;
            }
            
            // Auto-format mode - remove last digit and reformat
            e.preventDefault();
            const digits = distance.replace(/\D/g, "");
            const newDigits = digits.slice(0, -1);
            
            if (newDigits.length === 0) {
                setDistance('');
            } else if (newDigits.length <= 3) {
                setDistance(newDigits);
            } else if (newDigits.length === 4) {
                setDistance(newDigits.slice(0, 3) + '.' + newDigits.slice(3));
            } else {
                setDistance(newDigits.slice(0, 3) + '.' + newDigits.slice(3));
            }
        }
    };

    useEffect(() => {
        if (distance === '0' || distance === '0.00' || distance === '00.00') {
            setDistance('');
        }
    }, [distance, setDistance]);

    return (
        <input
            type="text"
            value={distance}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            style={{ width: distanceWidth }}
            className="
        max-w-[3.5em]
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
            placeholder="42.19"
        />
    );
}

