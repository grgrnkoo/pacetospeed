import SpeedInput from "./SpeedInput";

export default function RenderSpeedField({ unitLabel, speed, handleSpeedChange }: { unitLabel: string, speed: string, handleSpeedChange: (speed: string) => void }) {
    return (
        <div
            className="flex"
            style={{ letterSpacing: '-6%' }}
        >
            <SpeedInput value={speed} onChange={handleSpeedChange} />
            <p>{unitLabel === 'km' ? 'km/h' : 'mph'}</p>
            <p className="lg:pl-4 sm:pl-2 pl-1 lg:text-5xl sm:text-3xl text-xl mt-auto mb-auto h-fit relative lg:top-4.5 top-1.5">is</p>
        </div>
    );
}