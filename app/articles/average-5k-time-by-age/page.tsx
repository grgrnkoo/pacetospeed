import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'Average 5K Time by Age (Benchmarks + Pace Range)',
  description: 'See realistic 5K time ranges by age group with pace equivalents and simple goal guidance.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['average 5k time', '5k time by age', '5k pace', '5k benchmarks', '5k run time'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/average-5k-time-by-age',
  },
  openGraph: {
    title: 'Average 5K Time by Age (Benchmarks + Pace Range)',
    description: 'Realistic 5K time ranges by age group with pace equivalents.',
    type: 'article',
    images: [{ url: '/api/og?slug=average-5k-time-by-age', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-13T00:00:00.000Z',
    tags: ['5k', 'benchmarks', 'pace', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Average 5K Time by Age (Benchmarks + Pace Range)',
    description: 'Realistic 5K time ranges by age group with pace equivalents.',
  },
};

export default function Average5KTimeByAgePage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4"><ArticleStructuredData slug="average-5k-time-by-age" />
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Average 5K Time by Age (Benchmarks + Pace Range)
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 13, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Average 5K times vary by age, training history, and experience. Use these ranges as a practical
              benchmark, then adjust for your current fitness and course conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">5K Time Ranges</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Age</th>
                    <th className="p-3 text-left">Recreational</th>
                    <th className="p-3 text-left">Intermediate</th>
                    <th className="p-3 text-left">Advanced</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">18-29</td>
                    <td className="p-3">26-35 min</td>
                    <td className="p-3">22-26 min</td>
                    <td className="p-3">17-22 min</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">30-39</td>
                    <td className="p-3">27-36 min</td>
                    <td className="p-3">23-27 min</td>
                    <td className="p-3">18-23 min</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">40-49</td>
                    <td className="p-3">28-38 min</td>
                    <td className="p-3">24-29 min</td>
                    <td className="p-3">19-24 min</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">50-59</td>
                    <td className="p-3">30-40 min</td>
                    <td className="p-3">25-31 min</td>
                    <td className="p-3">20-26 min</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">60+</td>
                    <td className="p-3">32-45 min</td>
                    <td className="p-3">27-35 min</td>
                    <td className="p-3">22-30 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Goal Guidance</h2>
            <p className="text-stone-800 leading-relaxed">
              Pick a goal that is slightly faster than your recent race pace. Train consistently for six to
              eight weeks and reassess.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
