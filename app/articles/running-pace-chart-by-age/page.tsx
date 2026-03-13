import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Running Pace Chart by Age and Ability (Beginner to Advanced)',
  description: 'Find realistic running pace ranges by age and ability level. Includes a simple pace chart and guidance for setting training targets.',
  keywords: ['running pace chart', 'average running pace', 'pace by age', 'beginner running pace', 'advanced running pace', 'race pace guide'],
  openGraph: {
    title: 'Running Pace Chart by Age and Ability (Beginner to Advanced)',
    description: 'Realistic running pace ranges by age and ability level with training guidance.',
    type: 'article',
    publishedTime: '2026-03-09T00:00:00.000Z',
    tags: ['running', 'pace', 'training', 'benchmarks'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Running Pace Chart by Age and Ability',
    description: 'Realistic running pace ranges by age and ability level with training guidance.',
  },
};

export default function RunningPaceChartByAgePage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Running Pace Chart by Age and Ability (Beginner to Advanced)
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 9, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Pace benchmarks help you set realistic targets and track progress. This chart is a practical
              reference for recreational runners, organized by age group and ability level. Use it to set
              training paces, estimate race goals, or simply understand where you are right now.
            </p>
            <p className="text-stone-800 leading-relaxed">
              These ranges are not absolute. Terrain, weather, experience, and training history all matter.
              Use the chart as a guide, not a rule.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Pace Chart (min/km)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Age</th>
                    <th className="p-3 text-left">Beginner</th>
                    <th className="p-3 text-left">Intermediate</th>
                    <th className="p-3 text-left">Advanced</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">18-29</td>
                    <td className="p-3">7:00-8:30</td>
                    <td className="p-3">5:30-6:30</td>
                    <td className="p-3">4:00-5:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">30-39</td>
                    <td className="p-3">7:15-8:45</td>
                    <td className="p-3">5:45-6:45</td>
                    <td className="p-3">4:10-5:10</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">40-49</td>
                    <td className="p-3">7:30-9:00</td>
                    <td className="p-3">6:00-7:00</td>
                    <td className="p-3">4:20-5:20</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">50-59</td>
                    <td className="p-3">7:45-9:15</td>
                    <td className="p-3">6:15-7:15</td>
                    <td className="p-3">4:35-5:35</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">60+</td>
                    <td className="p-3">8:00-9:45</td>
                    <td className="p-3">6:30-7:30</td>
                    <td className="p-3">4:50-6:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-stone-800 leading-relaxed mt-4">
              Prefer miles? Multiply by 1.609 to approximate min/mile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">How to Use This Chart</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Use the beginner range for easy runs and base building.</li>
              <li>Use the intermediate range for tempo and steady-state workouts.</li>
              <li>Use the advanced range for interval training and short race goals.</li>
            </ul>
            <p className="text-stone-800 leading-relaxed mt-4">
              If you are between levels, choose the slower end of the faster range to avoid overtraining.
            </p>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Key Takeaway</h2>
            <p className="text-stone-800 leading-relaxed">
              A pace chart is a guide to help you set realistic expectations. Consistency and gradual progress
              matter more than any single benchmark. Use these ranges to plan and track, then adjust based on
              your own training response.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
