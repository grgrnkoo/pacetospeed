'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-3 hover:cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          <img
            src="/icon.png"
            alt="Pace to Speed Converter"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          />
          <span className="hidden md:block text-xl font-semibold text-gray-900 dark:text-white drop-shadow-lg">
            Pace to Speed
          </span>
        </Link>
        <Link
          href="/articles"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium hover:cursor-pointer drop-shadow-lg"
        >
          Articles
        </Link>
      </div>
    </header>
  );
}

