import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'Race Time Predictor: Estimate Your Finish Time (5K to Marathon)',
  description: 'Use simple pacing formulas to predict your 5K, 10K, half marathon, and marathon finish times. Includes examples and pacing tables.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['race time predictor', 'finish time calculator', 'predict race time', 'pace to time', 'running time estimate'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/race-time-predictor',
  },
  openGraph: {
    title: 'Race Time Predictor: Estimate Your Finish Time (5K to Marathon)',
    description: 'Predict your finish time with simple pacing formulas and examples.',
    type: 'article',
    images: [{ url: '/api/og?slug=race-time-predictor', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-06T00:00:00.000Z',
    tags: ['race', 'pace', 'prediction', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Race Time Predictor: Estimate Your Finish Time',
    description: 'Predict your finish time with simple pacing formulas and examples.',
  },
};

export default function RaceTimePredictorPage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4"><ArticleStructuredData slug="race-time-predictor" />
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Race Time Predictor: Estimate Your Finish Time (5K to Marathon)
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 6, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              If you know your target pace, you can predict your finish time for any distance. This is useful
              for planning races, setting realistic goals, and comparing effort across distances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Finish Time Formula</h2>
            <div className="bg-stone-800 text-white rounded-lg p-6">
              <p className="text-lg font-semibold mb-4 text-center">Finish Time = Pace × Distance</p>
              <p className="text-center text-sm opacity-90">Use minutes and kilometers for min/km, or minutes and miles for min/mile.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Example: 5:00 min/km</h2>
            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <ul className="space-y-2 text-stone-800">
                <li>5K: 25:00</li>
                <li>10K: 50:00</li>
                <li>Half Marathon (21.1K): 1:45:30</li>
                <li>Marathon (42.2K): 3:31:00</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Quick Table (min/km)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Pace</th>
                    <th className="p-3 text-left">5K</th>
                    <th className="p-3 text-left">10K</th>
                    <th className="p-3 text-left">Half</th>
                    <th className="p-3 text-left">Marathon</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">4:30</td>
                    <td className="p-3">22:30</td>
                    <td className="p-3">45:00</td>
                    <td className="p-3">1:34:30</td>
                    <td className="p-3">3:09:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">5:00</td>
                    <td className="p-3">25:00</td>
                    <td className="p-3">50:00</td>
                    <td className="p-3">1:45:30</td>
                    <td className="p-3">3:31:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">5:30</td>
                    <td className="p-3">27:30</td>
                    <td className="p-3">55:00</td>
                    <td className="p-3">1:56:30</td>
                    <td className="p-3">3:52:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">6:00</td>
                    <td className="p-3">30:00</td>
                    <td className="p-3">1:00:00</td>
                    <td className="p-3">2:07:00</td>
                    <td className="p-3">4:13:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Use With Caution</h2>
            <p className="text-stone-800 leading-relaxed">
              The formula assumes you can hold the same pace for all distances, which is rarely true. Expect
              longer races to require slower paces. Use this as a starting estimate, then adjust with your
              training history and recent race results.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
