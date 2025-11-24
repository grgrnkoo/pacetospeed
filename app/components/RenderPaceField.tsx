// import { PaceFormat } from "../page";
import PaceInput from "./PaceInput";

export default function RenderPaceField({ unitLabel, pace, handlePaceChange }: { unitLabel: string, pace: string, handlePaceChange: (pace: string) => void }) {
    return (
        <div 
        className="space-y-2 flex w-fit align-bottom"
        style={{ letterSpacing: '-6%' }}
        >
            <PaceInput pace={pace} setPace={handlePaceChange} />
            <p>min/{unitLabel}</p>
        </div>

    );
}