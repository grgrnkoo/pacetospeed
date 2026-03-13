import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Long Run Pace: How Slow Is Too Slow?',
  description: 'Find the right long run pace to build endurance without overtraining. Includes practical pacing ranges and tips.',
  keywords: ['long run pace', 'easy run pace', 'aerobic pace', 'training pace', 'long run tips'],
  openGraph: {
    title: 'Long Run Pace: How Slow Is Too Slow?',
    description: 'Find the right long run pace to build endurance without overtraining.',
    type: 'article',
    publishedTime: '2026-03-08T00:00:00.000Z',
    tags: ['long run', 'pace', 'training', 'endurance'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Long Run Pace: How Slow Is Too Slow?',
    description: 'Find the right long run pace to build endurance without overtraining.',
  },
};

export default function LongRunPaceGuidePage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Long Run Pace: How Slow Is Too Slow?
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 8, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              The long run is about endurance, not speed. Running too fast can compromise recovery and make
              your next workouts harder. The right pace keeps effort steady and sustainable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Simple Guideline</h2>
            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800">
                Long run pace is typically <strong>45 to 90 seconds per kilometer slower</strong> than 10K pace
                (or 60 to 120 seconds per mile slower).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">How It Should Feel</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>You can speak in full sentences.</li>
              <li>Your breathing stays steady.</li>
              <li>You finish feeling strong, not drained.</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              There is no such thing as too slow if the goal is aerobic endurance. Keep long runs comfortable
              and you will see steady progress.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
