import { useEffect } from "react";
import { PaceFormat } from "../page";

export default function PaceInput({
    pace,
    setPace,
}: {
    pace: PaceFormat;
    setPace: (pace: PaceFormat) => void;
}) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let v = e.target.value.replace(/\D/g, ""); // only digits
        if (v.length > 4) v = v.slice(-4); // keep last 4 digits
        v = v.padStart(4, "0");

        let minutes = v.slice(0, 2);
        let seconds = v.slice(2, 4);

        if (parseInt(seconds, 10) > 59) seconds = "59";

        setPace(`${minutes}:${seconds}` as PaceFormat);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Handle backspace to remove digits from right
        if (e.key === "Backspace") {
            e.preventDefault();
            const digits = pace.replace(/\D/g, "");
            const newDigits = digits.slice(0, -1).padStart(4, "0");
            const minutes = newDigits.slice(0, 2);
            const seconds = newDigits.slice(2, 4);
            setPace(`${minutes}:${seconds}` as PaceFormat);
        }
    };

    useEffect(() => {
        if (pace === '00:00') {
            setPace('');
        }
    }, [pace]);

    return (
        <input
            type="text"
            inputMode="numeric"
            value={pace}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="
        w-[3em]
        relative
        lg:bottom-3
        sm:bottom-1.5
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
