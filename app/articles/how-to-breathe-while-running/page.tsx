import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Breathe While Running (Simple Tips That Work)',
  description: 'Learn easy breathing techniques for running, including rhythm, posture, and relaxation tips.',
  keywords: ['how to breathe while running', 'running breathing', 'breathing techniques for running', 'running tips'],
  openGraph: {
    title: 'How to Breathe While Running (Simple Tips That Work)',
    description: 'Easy breathing techniques for running, including rhythm and posture tips.',
    type: 'article',
    publishedTime: '2026-03-12T00:00:00.000Z',
    tags: ['breathing', 'running', 'tips'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Breathe While Running (Simple Tips That Work)',
    description: 'Easy breathing techniques for running, including rhythm and posture tips.',
  },
};

export default function HowToBreatheWhileRunningPage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            How to Breathe While Running (Simple Tips That Work)
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 12, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              If running feels harder than it should, breathing is often the missing piece. Simple adjustments
              to rhythm and posture can make your pace feel more comfortable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Try a Breathing Rhythm</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Easy pace: 3 steps inhale, 3 steps exhale</li>
              <li>Moderate pace: 2 steps inhale, 2 steps exhale</li>
              <li>Hard pace: 2 steps inhale, 1 step exhale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Posture Cues</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Stand tall and relax your shoulders.</li>
              <li>Open the chest and avoid slouching.</li>
              <li>Exhale fully to clear stale air.</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Breathing improves with practice. Use a rhythm that matches your pace and keep your posture open
              so your lungs can work freely.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
