import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'How to Calculate Pace from Time and Distance (Step-by-Step)',
  description: 'Learn the exact pace formula, see worked examples, and avoid common mistakes when calculating pace from time and distance.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['calculate pace', 'pace formula', 'pace from time and distance', 'running pace calculator', 'pace math'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/calculate-pace-from-time-distance',
  },
  openGraph: {
    title: 'How to Calculate Pace from Time and Distance (Step-by-Step)',
    description: 'Exact pace formula with examples and common pitfalls.',
    type: 'article',
    images: [{ url: '/api/og?slug=calculate-pace-from-time-distance', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-07T00:00:00.000Z',
    tags: ['pace', 'training', 'running', 'calculator'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Calculate Pace from Time and Distance',
    description: 'Exact pace formula with examples and common pitfalls.',
  },
};

export default function CalculatePaceFromTimeDistancePage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4"><ArticleStructuredData slug="calculate-pace-from-time-distance" />
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            How to Calculate Pace from Time and Distance (Step-by-Step)
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 7, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Pace tells you how long it takes to cover a unit of distance. If you know your total time and
              distance, you can calculate pace in seconds with a simple formula.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Pace Formula</h2>
            <div className="bg-stone-800 text-white rounded-lg p-6">
              <p className="text-lg font-semibold mb-4 text-center">Pace = Time ÷ Distance</p>
              <p className="text-center text-sm opacity-90">Use minutes and kilometers for min/km, or minutes and miles for min/mile.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Example 1: 5K in 25:00</h2>
            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <ol className="list-decimal list-inside space-y-2 text-stone-800 ml-4 text-sm">
                <li>Time: 25 minutes</li>
                <li>Distance: 5 kilometers</li>
                <li>Pace = 25 ÷ 5 = 5.00</li>
                <li>Result: <strong>5:00 min/km</strong></li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Example 2: 10 Miles in 1:30:00</h2>
            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <ol className="list-decimal list-inside space-y-2 text-stone-800 ml-4 text-sm">
                <li>Time: 1:30:00 = 90 minutes</li>
                <li>Distance: 10 miles</li>
                <li>Pace = 90 ÷ 10 = 9.00</li>
                <li>Result: <strong>9:00 min/mile</strong></li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Common Mistakes</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Mixing units (minutes with miles, but expecting min/km).</li>
              <li>Forgetting to convert hours to minutes first.</li>
              <li>Rounding too early and losing precision.</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Summary</h2>
            <p className="text-stone-800 leading-relaxed">
              Pace calculation is simple if units match. Divide time by distance, then format the decimal
              into minutes and seconds. Use a calculator when you need exact values for workouts or races.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
