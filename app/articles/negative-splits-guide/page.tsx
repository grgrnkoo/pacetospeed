import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'Negative Splits: What They Are and How to Plan Them',
  description: 'Learn what negative splits are, why they work, and how to plan your pacing for smarter races and workouts.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['negative splits', 'race pacing', 'pace strategy', 'marathon pacing', 'running strategy'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/negative-splits-guide',
  },
  openGraph: {
    title: 'Negative Splits: What They Are and How to Plan Them',
    description: 'What negative splits are and how to plan them for smarter races.',
    type: 'article',
    images: [{ url: '/api/og?slug=negative-splits-guide', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-05T00:00:00.000Z',
    tags: ['pacing', 'strategy', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Negative Splits: What They Are and How to Plan Them',
    description: 'What negative splits are and how to plan them for smarter races.',
  },
};

export default function NegativeSplitsGuidePage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4"><ArticleStructuredData slug="negative-splits-guide" />
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Negative Splits: What They Are and How to Plan Them
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 5, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              A negative split means your second half is faster than your first. It is one of the most reliable
              ways to run a strong race because it controls early effort and builds momentum late.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Why Negative Splits Work</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>You avoid early fatigue and preserve glycogen.</li>
              <li>Small pace increases feel easier later in the race.</li>
              <li>You finish strong while others slow down.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Simple Split Plan</h2>
            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">Example for a 10K goal of 50:00</p>
              <ul className="space-y-2 text-stone-800">
                <li>First 5K: 25:15</li>
                <li>Second 5K: 24:45</li>
                <li>Average pace: 5:00 min/km</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">How to Execute</h2>
            <ol className="list-decimal list-inside space-y-2 text-stone-800 ml-4">
              <li>Start 1 to 3 percent slower than goal pace.</li>
              <li>Settle into goal pace by the midpoint.</li>
              <li>Increase effort slightly in the final third.</li>
            </ol>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Negative splits are not about starting slow. They are about starting controlled, then finishing
              strong. Plan the split early and practice it in training so race day feels predictable.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
