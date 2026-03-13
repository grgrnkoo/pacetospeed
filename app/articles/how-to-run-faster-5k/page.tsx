import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Run a Faster 5K: 7 Practical Changes That Work',
  description: 'Seven proven ways to improve your 5K time, from pacing to workouts and recovery.',
  keywords: ['faster 5k', 'improve 5k time', '5k training tips', '5k pacing', '5k workouts'],
  openGraph: {
    title: 'How to Run a Faster 5K: 7 Practical Changes That Work',
    description: 'Seven proven ways to improve your 5K time, from pacing to workouts and recovery.',
    type: 'article',
    publishedTime: '2026-03-11T00:00:00.000Z',
    tags: ['5k', 'training', 'running', 'performance'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Run a Faster 5K: 7 Practical Changes That Work',
    description: 'Seven proven ways to improve your 5K time, from pacing to workouts and recovery.',
  },
};

export default function HowToRunFaster5KPage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            How to Run a Faster 5K: 7 Practical Changes That Work
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 11, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Getting faster at the 5K does not require complex training. The biggest gains come from a small
              set of changes you can repeat every week. Here are seven that consistently work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">1. Run One Tempo per Week</h2>
            <p className="text-stone-800 leading-relaxed">
              A 15 to 25 minute tempo at comfortably hard effort builds threshold speed without burning you out.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">2. Add Short Intervals</h2>
            <p className="text-stone-800 leading-relaxed">
              Try 6 to 10 repeats of 400 meters at 5K pace with easy jogging recovery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">3. Build a Real Warmup</h2>
            <p className="text-stone-800 leading-relaxed">
              Start with 10 minutes easy plus strides. It improves form and makes race pace feel smoother.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">4. Practice Pacing</h2>
            <p className="text-stone-800 leading-relaxed">
              Start slightly controlled and aim for even or negative splits. Most 5K PRs come from steady pacing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">5. Strength Train Once Weekly</h2>
            <p className="text-stone-800 leading-relaxed">
              A short routine for hips, glutes, and calves improves running economy and reduces injury risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">6. Keep Easy Runs Easy</h2>
            <p className="text-stone-800 leading-relaxed">
              Easy runs build volume. If they are too fast, quality workouts suffer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">7. Race or Time Trial Regularly</h2>
            <p className="text-stone-800 leading-relaxed">
              A low-pressure 5K every 4 to 6 weeks helps you practice pacing and track progress.
            </p>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Small, consistent changes matter more than perfect training plans. Pick two or three of these
              ideas and apply them for the next month.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
