'use client';

import { useEffect, useState, useCallback } from 'react';

interface BeforeInstallPromptEvent extends Event {
    prompt(): Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

function getIsInstalled() {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(display-mode: standalone)').matches;
}

export default function AddToHomeScreen() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isInstalled, setIsInstalled] = useState(getIsInstalled);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (isInstalled) return;

        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
        };

        window.addEventListener('beforeinstallprompt', handler);

        window.addEventListener('appinstalled', () => {
            setIsInstalled(true);
            setDeferredPrompt(null);
            setShowModal(false);
        });

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, [isInstalled]);

    const handleInstall = useCallback(async () => {
        if (deferredPrompt) {
            await deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                setIsInstalled(true);
            }
            setDeferredPrompt(null);
            setShowModal(false);
        }
    }, [deferredPrompt]);

    if (isInstalled) return null;

    const isIOS = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/.test(navigator.userAgent);

    return (
        <>
            <button
                onClick={() => {
                    if (deferredPrompt) {
                        handleInstall();
                    } else {
                        setShowModal(true);
                    }
                }}
                className="lg:text-lg md:text-base text-sm text-stone-800 font-extrabold hover:cursor-pointer bg-transparent border-none p-0"
            >
                add to home screen
            </button>

            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    onClick={() => setShowModal(false)}
                >
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                    <div
                        className="relative bg-stone-50 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors text-xl leading-none font-normal"
                        >
                            &times;
                        </button>

                        {/* phone icon
                        <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-stone-200/60 flex items-center justify-center">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-800">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                <circle cx="12" cy="18" r="0.5" fill="currentColor" />
                            </svg>
                        </div> */}

                        <h2 className="text-2xl lg:text-3xl font-extrabold text-stone-800 mb-4 text-left">
                            add pace to speed to your home screen
                        </h2>

                        <p className="text-stone-500 text-sm sm:text-base mb-6 leading-relaxed text-left">
                            next time you go for a run, just tap the icon and you’ll have pace to speed right there with you. <br/><br/>
                            just follow instructions to <br/> add it to your home screen
                        </p>

                        <div className="bg-stone-200/40 rounded-xl p-4 mb-2 text-left">
                            <p className="font-extrabold text-stone-800 text-sm sm:text-base mb-2">
                                {isIOS ? 'quick steps for iOS (use Safari)' : 'quick steps for Android (use Chrome)'}
                            </p>
                            <div className="space-y-1 text-stone-700 text-sm sm:text-base font-bold leading-relaxed">
                                {isIOS ? (
                                    <>
                                        <p>open in Safari or Chrome</p>
                                        <p>tap Share → Add to Home Screen</p>
                                    </>
                                ) : (
                                    <>
                                        <p>tap the menu <span className="font-extrabold">⋮</span></p>
                                        <p>tap Add to Home Screen or Install App</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
