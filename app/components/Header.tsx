'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full max-w-4xl mx-auto py-4 px-4 flex justify-between items-center">
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
        </Link>
      </div>
    </header>
  );
}

