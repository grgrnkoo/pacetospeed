import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'Running Fueling 101: How to Eat and Drink for Race Day',
  description: 'A simple race-day fueling guide for runners, including carbs, hydration, and timing.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['running nutrition', 'race day fueling', 'hydration for runners', 'carb loading', 'running fuel'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/running-fueling-101',
  },
  openGraph: {
    title: 'Running Fueling 101: How to Eat and Drink for Race Day',
    description: 'A simple race-day fueling guide for runners.',
    type: 'article',
    images: [{ url: '/api/og?slug=running-fueling-101', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-04T00:00:00.000Z',
    tags: ['nutrition', 'race day', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Running Fueling 101: How to Eat and Drink for Race Day',
    description: 'A simple race-day fueling guide for runners.',
  },
};

export default function RunningFuelingPage() {
  return (
    <div className="w-full">
      <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4"><ArticleStructuredData slug="running-fueling-101" />
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Running Fueling 101: How to Eat and Drink for Race Day
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 4, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Race-day fueling does not need to be complicated. A simple plan for carbs, hydration, and timing
              can keep energy steady and reduce stomach issues.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Before the Race</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Eat a familiar carb-heavy meal 2 to 3 hours before start.</li>
              <li>Drink water steadily, not all at once.</li>
              <li>Avoid new foods or supplements on race day.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">During the Race</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>For races under 60 minutes: water only is usually enough.</li>
              <li>For longer races: take 30 to 60 grams of carbs per hour.</li>
              <li>Use gels, chews, or sports drink, then rinse with water.</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Keep fueling simple and practiced. The best plan is the one your stomach tolerates during training.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
