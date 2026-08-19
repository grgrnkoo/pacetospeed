import Link from 'next/link';
import { Metadata } from 'next';
import { guides } from './data';

export const metadata: Metadata = {
  title: 'App Guides & Roundups',
  description:
    'Hands-on guides and app roundups for tracking your steps, walks, and workouts on iPhone and Apple Watch.',
  keywords: ['app guides', 'pedometer apps', 'step counter apps', 'walking apps', 'iPhone fitness apps'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/guides',
  },
  openGraph: {
    title: 'App Guides & Roundups | Pace to Speed',
    description:
      'Hands-on guides and app roundups for tracking your steps, walks, and workouts on iPhone and Apple Watch.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Guides & Roundups',
    description:
      'Hands-on guides and app roundups for tracking your steps, walks, and workouts on iPhone and Apple Watch.',
  },
};

export default function GuidesPage() {
  return (
    <div className="w-full">
      <main className="max-w-4xl mx-auto py-8 sm:py-12 px-4">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-800 mb-1 sm:mb-2">
            Guides
          </h1>
          <p className="text-sm sm:text-base text-stone-500">
            App roundups and hands-on guides for tracking your steps and walks
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-4 sm:p-6 hover:scale-[1.02] hover:cursor-pointer"
            >
              <article>
                <time className="text-xs sm:text-sm text-stone-400 mb-1 block">
                  {new Date(guide.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-800 mb-1">
                  {guide.title}
                </h2>
                <p className="text-sm sm:text-base text-stone-500">{guide.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
