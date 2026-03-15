import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'Running in the Heat: Safety Tips and Pace Adjustments',
  description: 'Learn how to run safely in hot weather with hydration, pacing, and timing strategies.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['running in the heat', 'hot weather running', 'summer running tips', 'heat safety running'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/running-in-the-heat-tips',
  },
  openGraph: {
    title: 'Running in the Heat: Safety Tips and Pace Adjustments',
    description: 'Run safely in hot weather with hydration, pacing, and timing strategies.',
    type: 'article',
    images: [{ url: '/api/og?slug=running-in-the-heat-tips', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-06T00:00:00.000Z',
    tags: ['heat', 'running', 'safety'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Running in the Heat: Safety Tips and Pace Adjustments',
    description: 'Run safely in hot weather with hydration, pacing, and timing strategies.',
  },
};

export default function RunningInTheHeatTipsPage() {
  return (
    <div className="w-full">
      <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4"><ArticleStructuredData slug="running-in-the-heat-tips" />
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Running in the Heat: Safety Tips and Pace Adjustments
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 6, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Heat raises heart rate and perceived effort. Running safely in hot weather means adjusting pace,
              hydrating smartly, and choosing the right time of day.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Practical Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Slow your pace by 10 to 30 seconds per km depending on heat.</li>
              <li>Run early morning or after sunset.</li>
              <li>Drink consistently and include electrolytes on longer runs.</li>
              <li>Watch for dizziness, chills, or confusion and stop if needed.</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Heat makes every pace feel harder. Adjust effort, stay hydrated, and choose safe conditions to
              keep training consistent.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
