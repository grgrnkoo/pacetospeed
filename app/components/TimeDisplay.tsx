export default function TimeDisplay({
    time,
}: {
    time: string;
}) {
    return (
        <div className="flex items-center justify-start w-full mb-4">
            <div className="text-stone-400 lg:text-3xl sm:text-2xl text-xl font-bold mr-4 select-none">
                Time
            </div>
            <div className="text-stone-800 lg:text-9xl sm:text-6xl text-4xl font-extrabold select-none">
                {time || '00:00:00'}
            </div>
        </div>
    );
}

