import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'Heart Rate Zones for Running: How to Find Yours',
  description: 'Learn what heart rate zones mean, how to estimate your max HR, and how to use zones in training.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['heart rate zones', 'running zones', 'zone 2 running', 'heart rate training', 'max heart rate'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/heart-rate-zones-for-running',
  },
  openGraph: {
    title: 'Heart Rate Zones for Running: How to Find Yours',
    description: 'What heart rate zones mean and how to use them in training.',
    type: 'article',
    images: [{ url: '/api/og?slug=heart-rate-zones-for-running', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-10T00:00:00.000Z',
    tags: ['heart rate', 'training', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heart Rate Zones for Running: How to Find Yours',
    description: 'What heart rate zones mean and how to use them in training.',
  },
};

export default function HeartRateZonesForRunningPage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4"><ArticleStructuredData slug="heart-rate-zones-for-running" />
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Heart Rate Zones for Running: How to Find Yours
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 10, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Heart rate zones give you a simple way to control effort. You can build endurance in low zones,
              improve threshold in mid zones, and develop speed in higher zones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Estimate Your Max Heart Rate</h2>
            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800">Simple estimate: <strong>Max HR = 220 − age</strong></p>
            </div>
            <p className="text-stone-800 leading-relaxed mt-4">
              This is a rough estimate. Field tests or lab testing are more accurate, but this works for a
              practical starting point.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Zone Breakdown</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Zone 1 (50-60%): Recovery</li>
              <li>Zone 2 (60-70%): Aerobic base</li>
              <li>Zone 3 (70-80%): Tempo endurance</li>
              <li>Zone 4 (80-90%): Threshold</li>
              <li>Zone 5 (90-100%): VO2 max</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">How to Use Zones</h2>
            <p className="text-stone-800 leading-relaxed">
              Build most weekly mileage in Zone 2, add one threshold session in Zone 4, and use Zone 5 for
              short intervals. The mix keeps training balanced.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
