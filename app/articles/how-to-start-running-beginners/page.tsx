import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'How to Start Running: A Beginner-Friendly Guide',
  description: 'A simple step-by-step guide for starting running safely, including a run-walk plan and pacing tips.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['how to start running', 'running for beginners', 'beginner running plan', 'run walk method', 'start jogging'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/how-to-start-running-beginners',
  },
  openGraph: {
    title: 'How to Start Running: A Beginner-Friendly Guide',
    description: 'A simple guide for starting running safely with a beginner plan.',
    type: 'article',
    images: [{ url: '/api/og?slug=how-to-start-running-beginners', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-13T00:00:00.000Z',
    tags: ['beginners', 'running', 'training'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start Running: A Beginner-Friendly Guide',
    description: 'A simple guide for starting running safely with a beginner plan.',
  },
};

export default function HowToStartRunningBeginnersPage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4"><ArticleStructuredData slug="how-to-start-running-beginners" />
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            How to Start Running: A Beginner-Friendly Guide
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 13, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Starting to run is easier if you keep it simple. Focus on consistency, short sessions, and effort
              that feels easy. The goal is to build a habit, not to go fast.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">A Simple Run-Walk Plan</h2>
            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <ul className="space-y-2 text-stone-800">
                <li>Week 1: 1 min run / 2 min walk x 8</li>
                <li>Week 2: 2 min run / 2 min walk x 7</li>
                <li>Week 3: 3 min run / 2 min walk x 6</li>
                <li>Week 4: 5 min run / 2 min walk x 4</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Pacing Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Keep the effort easy enough to hold a conversation.</li>
              <li>Stop if pain is sharp or changes your form.</li>
              <li>Run 3 days per week, rest or cross-train on others.</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Start slow, stay consistent, and increase time gradually. A month of steady work is enough to
              feel a real difference.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
