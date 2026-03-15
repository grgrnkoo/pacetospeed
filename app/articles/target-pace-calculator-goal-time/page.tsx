import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'Target Pace Calculator: How Fast You Need to Run for a Goal Time',
  description: 'Calculate target pace for any goal time and distance. Includes formula, examples, and pacing tips.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['target pace', 'goal time', 'pace for finish time', 'race pace calculator', 'pace planning'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/target-pace-calculator-goal-time',
  },
  openGraph: {
    title: 'Target Pace Calculator: How Fast You Need to Run for a Goal Time',
    description: 'Calculate target pace for any goal time and distance with examples.',
    type: 'article',
    images: [{ url: '/api/og?slug=target-pace-calculator-goal-time', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-04T00:00:00.000Z',
    tags: ['pace', 'goal time', 'running', 'calculator'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Target Pace Calculator: How Fast You Need to Run for a Goal Time',
    description: 'Calculate target pace for any goal time and distance with examples.',
  },
};

export default function TargetPaceCalculatorGoalTimePage() {
  return (
    <div className="w-full">
      <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4"><ArticleStructuredData slug="target-pace-calculator-goal-time" />
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Target Pace Calculator: How Fast You Need to Run for a Goal Time
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 4, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              If you have a goal time in mind, the next step is to figure out the pace required to hit it.
              This lets you plan workouts, set splits, and verify whether your goal is realistic.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Target Pace Formula</h2>
            <div className="bg-stone-800 text-white rounded-lg p-4 sm:p-6">
              <p className="text-lg font-semibold mb-4 text-center">Target Pace = Goal Time ÷ Distance</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Example: Sub-50 10K</h2>
            <div className="bg-stone-50 rounded-lg p-4 sm:p-6 border-l-4 border-stone-800">
              <ol className="list-decimal list-inside space-y-2 text-stone-800 ml-4 text-sm">
                <li>Goal time: 50:00 = 50 minutes</li>
                <li>Distance: 10K</li>
                <li>Pace = 50 ÷ 10 = 5.00</li>
                <li>Target pace: <strong>5:00 min/km</strong></li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Example: 2:00 Half Marathon</h2>
            <div className="bg-stone-50 rounded-lg p-4 sm:p-6 border-l-4 border-stone-800">
              <ol className="list-decimal list-inside space-y-2 text-stone-800 ml-4 text-sm">
                <li>Goal time: 2:00:00 = 120 minutes</li>
                <li>Distance: 21.1K</li>
                <li>Pace = 120 ÷ 21.1 = 5.69</li>
                <li>Target pace: <strong>5:41 min/km</strong></li>
              </ol>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Practical Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Use your target pace in training once or twice per week.</li>
              <li>Practice race-day fueling and hydration at that pace.</li>
              <li>Adjust for weather and course elevation on race day.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
