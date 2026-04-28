'use client';

import { useState } from 'react';

export default function HintOverlay({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="text-sm lg:text-base text-stone-400 hover:text-stone-600 transition-colors select-none"
            >
                how it works
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                    <div
                        className="relative bg-stone-50 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors text-xl leading-none"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl lg:text-3xl font-extrabold text-stone-800 mb-4">
                            how it works
                        </h2>
                        <ul className="list-disc pl-4 space-y-2 text-stone-700 text-sm sm:text-base font-bold leading-relaxed">
                            {children}
                            <li>pace and time fields start as zeroes (MM:SS or HH:MM:SS) - just tap and type, digits fill in from right to left
                                <div className="mt-1 flex items-center gap-1.5 text-xs sm:text-sm text-stone-400 font-mono">
                                    <span className="bg-stone-200/60 rounded px-1.5 py-0.5 font-extrabold">00:00</span>
                                    <span>&#8594;</span>    
                                    <span className="bg-stone-200/60 rounded px-1.5 py-0.5 font-extrabold">00:05</span>
                                    <span>&#8594;</span>
                                    <span className="bg-stone-200/60 rounded px-1.5 py-0.5 font-extrabold">00:52</span>
                                    <span>&#8594;</span>
                                    <span className="bg-stone-200/60 rounded px-1.5 py-0.5 font-extrabold">05:25</span>
                                </div>
                            </li>
                            <li>distance and speed fields work like regular inputs</li>
                            <li>once you click outside the field, your input is tidied up into the standard MM:SS or HH:MM:SS format - so 75 seconds becomes 1 min 15 sec
                                <div className="mt-1 flex items-center gap-1.5 text-xs sm:text-sm text-stone-400 font-mono">
                                    <span className="bg-stone-200/60 rounded px-1.5 py-0.5 font-extrabold">00:75</span>
                                    <span>&#8594;</span>
                                    <span className="bg-stone-200/60 rounded px-1.5 py-0.5 font-extrabold">01:15</span>
                                </div>
                            </li>
                            <li>tap km / mi to switch units</li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}
