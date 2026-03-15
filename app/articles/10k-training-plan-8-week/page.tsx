import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: '10K Training Plan: 8-Week Schedule for First-Timers',
  description: 'Beginner-friendly 8-week 10K training plan with weekly structure, key workouts, and pacing guidance.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['10k training plan', '8 week 10k plan', 'beginner 10k', '10k schedule', '10k training'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/10k-training-plan-8-week',
  },
  openGraph: {
    title: '10K Training Plan: 8-Week Schedule for First-Timers',
    description: 'Beginner-friendly 8-week 10K plan with weekly structure and pacing guidance.',
    type: 'article',
    images: [{ url: '/api/og?slug=10k-training-plan-8-week', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-12T00:00:00.000Z',
    tags: ['10k', 'training plan', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10K Training Plan: 8-Week Schedule for First-Timers',
    description: 'Beginner-friendly 8-week 10K plan with weekly structure and pacing guidance.',
  },
};

export default function TenKTrainingPlanPage() {
  return (
    <div className="w-full">
      <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4"><ArticleStructuredData slug="10k-training-plan-8-week" />
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            10K Training Plan: 8-Week Schedule for First-Timers
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 12, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              This plan is designed for runners who can run 5K comfortably and want to step up to a 10K in
              eight weeks. It balances easy runs, one quality session, and a weekly long run.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Weekly Structure</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>3 to 4 runs per week</li>
              <li>1 quality workout (tempo or intervals)</li>
              <li>1 long run</li>
              <li>Easy days between hard efforts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">8-Week Plan Overview</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Week</th>
                    <th className="p-3 text-left">Key Workout</th>
                    <th className="p-3 text-left">Long Run</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">1</td>
                    <td className="p-3">4 x 3 min steady</td>
                    <td className="p-3">6 km</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">2</td>
                    <td className="p-3">20 min tempo</td>
                    <td className="p-3">7 km</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">3</td>
                    <td className="p-3">5 x 3 min steady</td>
                    <td className="p-3">8 km</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">4</td>
                    <td className="p-3">25 min tempo</td>
                    <td className="p-3">8 km</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">5</td>
                    <td className="p-3">6 x 3 min steady</td>
                    <td className="p-3">9 km</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">6</td>
                    <td className="p-3">30 min tempo</td>
                    <td className="p-3">10 km</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">7</td>
                    <td className="p-3">4 x 5 min steady</td>
                    <td className="p-3">8 km</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">8</td>
                    <td className="p-3">2 x 10 min tempo</td>
                    <td className="p-3">6 km</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Race Week Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Reduce volume by 30 to 40 percent.</li>
              <li>Keep one short tempo session to stay sharp.</li>
              <li>Sleep well and avoid new workouts or shoes.</li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
