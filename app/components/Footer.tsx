import AddToHomeScreen from './AddToHomeScreen';

export default function Footer() {
    return (
        <footer className="w-full max-w-4xl mx-auto mt-16 py-8 text-center flex flex-row-reverse justify-between items-center">
            <p className="lg:text-lg md:text-base text-sm text-stone-800 font-extrabold">
                built by{' '}
                <a
                    href="https://x.com/grgrnko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    font-extrabold text-stone-400
                     transition-colors
                    hover:cursor-pointer"
                >
                    oleg
                </a>
            </p>
            <div className="flex gap-4 items-center lg:text-lg md:text-base text-sm text-stone-800 font-extrabold">
                <a href='/articles'>
                    articles
                </a>
                <span className="text-stone-300">|</span>
                <AddToHomeScreen />
            </div>
        </footer>
    )
}