import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Good 5K, 10K, or Half Marathon Pace? (Benchmarks + Tips)',
  description: 'Benchmarks for good 5K, 10K, and half marathon paces with realistic ranges, examples, and how to pick your target pace.',
  keywords: ['good 5k pace', 'good 10k pace', 'good half marathon pace', 'race pace benchmarks', 'running pace guide'],
  openGraph: {
    title: 'What Is a Good 5K, 10K, or Half Marathon Pace? (Benchmarks + Tips)',
    description: 'Benchmarks for good 5K, 10K, and half marathon paces with realistic ranges.',
    type: 'article',
    publishedTime: '2026-03-08T00:00:00.000Z',
    tags: ['running', 'pace', '5k', '10k', 'half marathon'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a Good 5K, 10K, or Half Marathon Pace?',
    description: 'Benchmarks for good 5K, 10K, and half marathon paces with realistic ranges.',
  },
};

export default function GoodRacePacePage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            What Is a Good 5K, 10K, or Half Marathon Pace?
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 8, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              A good pace depends on your experience, training consistency, and the race distance. The same pace
              can feel easy in a 5K and very hard in a half marathon. Use the ranges below to set a realistic
              target, then adjust based on your current fitness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">5K Pace Benchmarks (min/km)</h2>
            <div className="bg-stone-50 rounded-lg p-6">
              <ul className="space-y-2 text-stone-800">
                <li>Beginner: 6:30-8:00</li>
                <li>Intermediate: 5:00-6:15</li>
                <li>Advanced: 3:45-4:45</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">10K Pace Benchmarks (min/km)</h2>
            <div className="bg-stone-50 rounded-lg p-6">
              <ul className="space-y-2 text-stone-800">
                <li>Beginner: 6:45-8:30</li>
                <li>Intermediate: 5:15-6:30</li>
                <li>Advanced: 4:00-5:00</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Half Marathon Pace Benchmarks (min/km)</h2>
            <div className="bg-stone-50 rounded-lg p-6">
              <ul className="space-y-2 text-stone-800">
                <li>Beginner: 7:00-9:00</li>
                <li>Intermediate: 5:30-6:45</li>
                <li>Advanced: 4:10-5:15</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">How to Pick Your Target Pace</h2>
            <ol className="list-decimal list-inside space-y-2 text-stone-800 ml-4">
              <li>Use your recent race time as a baseline.</li>
              <li>Adjust for distance: longer races require slower paces.</li>
              <li>Factor in course profile, weather, and elevation.</li>
              <li>Start conservative if you are unsure.</li>
            </ol>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              A good pace is one you can sustain for the full distance without fading. Use the ranges as a guide,
              then refine your target through training and short test races.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
