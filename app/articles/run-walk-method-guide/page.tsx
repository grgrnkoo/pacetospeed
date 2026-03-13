import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Run-Walk Method: A Simple Guide for New Runners',
  description: 'Learn how the run-walk method works and how to use it to build endurance safely.',
  keywords: ['run walk method', 'run walk plan', 'beginner running', 'walk run intervals'],
  openGraph: {
    title: 'Run-Walk Method: A Simple Guide for New Runners',
    description: 'How the run-walk method works and how to use it to build endurance safely.',
    type: 'article',
    publishedTime: '2026-03-10T00:00:00.000Z',
    tags: ['beginners', 'running', 'training'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Run-Walk Method: A Simple Guide for New Runners',
    description: 'How the run-walk method works and how to use it to build endurance safely.',
  },
};

export default function RunWalkMethodGuidePage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Run-Walk Method: A Simple Guide for New Runners
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 10, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              The run-walk method alternates short running segments with walking breaks. It reduces impact,
              builds confidence, and helps beginners increase time on their feet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">A Simple Starter Plan</h2>
            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <ul className="space-y-2 text-stone-800">
                <li>Week 1: 1 min run / 2 min walk x 8</li>
                <li>Week 2: 2 min run / 2 min walk x 7</li>
                <li>Week 3: 3 min run / 2 min walk x 6</li>
                <li>Week 4: 4 min run / 2 min walk x 5</li>
              </ul>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Run-walk is not a shortcut. It is a smart progression tool. Use it until you can run continuously,
              then gradually reduce the walk breaks.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
