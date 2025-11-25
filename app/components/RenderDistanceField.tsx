import DistanceInput from "./DistanceInput";

export default function RenderDistanceField({ 
    unitLabel, 
    distance, 
    handleDistanceChange 
}: { 
    unitLabel: string, 
    distance: string, 
    handleDistanceChange: (distance: string) => void 
}) {
    return (
        <div 
        className="space-y-2 flex w-fit align-bottom"
        style={{ letterSpacing: '-6%' }}
        >
            <DistanceInput distance={distance} setDistance={handleDistanceChange} />
            <p>{unitLabel}</p>
        </div>
    );
}

