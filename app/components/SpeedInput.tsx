export default function SpeedInput({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  let speedWidth: string;
  if (value.length === 0) {
    speedWidth = '2.2em';
  } else {
    speedWidth = `${value.length * 0.5 + 0.31}em`;
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value;

    // Allow only digits and one decimal point
    v = v.replace(/[^\d.]/g, '');

    // Allow only one decimal point
    const parts = v.split('.');
    if (parts.length > 2) {
      v = parts[0] + '.' + parts.slice(1).join('');
    }

    // Validate format: max 2 digits before decimal, max 1 digit after
    if (v.includes('.')) {
      const [before, after] = v.split('.');
      const limitedBefore = before.slice(0, 2);
      const limitedAfter = after ? after.slice(0, 1) : '';
      v = limitedBefore + '.' + limitedAfter;
    } else {
      // No decimal yet: auto-insert when we have 3 digits
      if (v.length >= 3) {
        v = v.slice(0, 2) + '.' + v.slice(2, 3);
      } else {
        v = v.slice(0, 2);
      }
    }

    onChange(v);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to remove last character
    if (e.key === 'Backspace') {
      e.preventDefault();
      onChange(value.slice(0, -1));
    }
  };

  const handleBlur = () => {
    const cleaned = value.replace(/[^\d.]/g, '');
    const numeric = parseFloat(cleaned);
    if (cleaned.length === 0 || isNaN(numeric) || numeric === 0) {
      onChange('');
    }
  };

  return (
    <input
      type="text"
      placeholder="10.9"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      style={{ width: speedWidth }}
      className="
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
      [appearance:textfield]
      [::-webkit-outer-spin-button]:appearance-none
      [::-webkit-inner-spin-button]:appearance-none
      [::-webkit-calendar-picker-indicator]:appearance-none
    "
    />
  );
}
