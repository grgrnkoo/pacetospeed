import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'How Many Calories Does Running Burn? (Simple Estimates)',
  description: 'Get simple calorie burn estimates for running based on distance, pace, and body weight.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['calories burned running', 'running calorie calculator', 'how many calories does running burn', 'running calories'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/how-many-calories-does-running-burn',
  },
  openGraph: {
    title: 'How Many Calories Does Running Burn? (Simple Estimates)',
    description: 'Simple calorie burn estimates for running based on distance and pace.',
    type: 'article',
    images: [{ url: '/api/og?slug=how-many-calories-does-running-burn', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-07T00:00:00.000Z',
    tags: ['calories', 'running', 'fitness'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Calories Does Running Burn? (Simple Estimates)',
    description: 'Simple calorie burn estimates for running based on distance and pace.',
  },
};

export default function HowManyCaloriesDoesRunningBurnPage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4"><ArticleStructuredData slug="how-many-calories-does-running-burn" />
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            How Many Calories Does Running Burn? (Simple Estimates)
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 7, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Calorie burn depends on body weight, pace, and distance. A simple rule of thumb is about
              60 to 100 calories per mile for most runners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Quick Estimates</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>5K: roughly 300 to 450 calories</li>
              <li>10K: roughly 600 to 900 calories</li>
              <li>Half marathon: roughly 1200 to 1800 calories</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Use estimates as a guide, not a precision metric. Distance matters more than speed for calorie
              burn, and consistency matters most.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
