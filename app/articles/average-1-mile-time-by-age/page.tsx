import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Average 1 Mile Run Time by Age and Gender (With Pace Breakdown)',
  description: 'See realistic average mile times by age group with pace conversions and guidance for setting a personal goal.',
  keywords: ['average mile time', '1 mile run time', 'mile pace by age', 'running benchmarks', 'mile pace'],
  openGraph: {
    title: 'Average 1 Mile Run Time by Age and Gender (With Pace Breakdown)',
    description: 'Average mile times by age group with pace conversions and goal guidance.',
    type: 'article',
    publishedTime: '2026-03-13T00:00:00.000Z',
    tags: ['mile', 'pace', 'running', 'benchmarks'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Average 1 Mile Run Time by Age and Gender',
    description: 'Average mile times by age group with pace conversions and goal guidance.',
  },
};

export default function AverageMileTimeByAgePage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Average 1 Mile Run Time by Age and Gender (With Pace Breakdown)
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 13, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              The 1-mile run is one of the simplest benchmarks in running. It is short enough to test speed,
              yet long enough to reflect real fitness. Use the ranges below as a starting point, then refine
              your goal based on training history and terrain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Average Mile Time by Age</h2>
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
                    <td className="p-3">8:00-10:00</td>
                    <td className="p-3">6:30-7:45</td>
                    <td className="p-3">5:00-6:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">30-39</td>
                    <td className="p-3">8:15-10:15</td>
                    <td className="p-3">6:45-8:00</td>
                    <td className="p-3">5:10-6:10</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">40-49</td>
                    <td className="p-3">8:30-10:30</td>
                    <td className="p-3">7:00-8:15</td>
                    <td className="p-3">5:25-6:25</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">50-59</td>
                    <td className="p-3">8:45-10:45</td>
                    <td className="p-3">7:15-8:30</td>
                    <td className="p-3">5:40-6:40</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">60+</td>
                    <td className="p-3">9:00-11:15</td>
                    <td className="p-3">7:30-9:00</td>
                    <td className="p-3">6:00-7:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-stone-800 leading-relaxed mt-4">
              To convert mile times to pace, use min/mile directly. For min/km, divide by 1.609.
            </p>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">How to Use This</h2>
            <p className="text-stone-800 leading-relaxed">
              Choose a goal slightly faster than your current average to drive progress. Consistency matters
              more than chasing a perfect number.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
