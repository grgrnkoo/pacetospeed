import { PaceFormat } from "../page";
import PaceInput from "./PaceInput";

export default function RenderPaceField({ unitLabel, pace, handlePaceChange }: { unitLabel: string, pace: PaceFormat, handlePaceChange: (pace: PaceFormat) => void }) {
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