import TimeInput from "./TimeInput";

export default function RenderTimeField({ time, handleTimeChange }: { time: string, handleTimeChange: (time: string) => void }) {
    return (
        <div 
        className="space-y-2 flex w-fit align-bottom"
        style={{ letterSpacing: '-6%' }}
        >
            <TimeInput time={time} setTime={handleTimeChange} />
            <p>time</p>
        </div>

    );
}

