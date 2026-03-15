import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'VO2 Max for Runners: What It Is and How to Improve It',
  description: 'Learn what VO2 max means for runners and how to improve it with workouts, volume, and consistency.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['vo2 max running', 'increase vo2 max', 'running fitness metrics', 'vo2 max workouts', 'running performance'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/vo2-max-for-runners',
  },
  openGraph: {
    title: 'VO2 Max for Runners: What It Is and How to Improve It',
    description: 'What VO2 max means and how to improve it with training.',
    type: 'article',
    images: [{ url: '/api/og?slug=vo2-max-for-runners', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-09T00:00:00.000Z',
    tags: ['vo2 max', 'training', 'running', 'performance'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VO2 Max for Runners: What It Is and How to Improve It',
    description: 'What VO2 max means and how to improve it with training.',
  },
};

export default function VO2MaxForRunnersPage() {
  return (
    <div className="w-full">
      <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4"><ArticleStructuredData slug="vo2-max-for-runners" />
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            VO2 Max for Runners: What It Is and How to Improve It
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 9, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              VO2 max is the maximum amount of oxygen your body can use during intense exercise. It is a strong
              indicator of endurance performance, but it is only one part of the picture.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Why It Matters</h2>
            <p className="text-stone-800 leading-relaxed">
              Higher VO2 max generally means you can sustain faster speeds for longer. It influences race pace,
              recovery between efforts, and overall fitness.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">How to Improve VO2 Max</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Short intervals at 3K to 5K pace</li>
              <li>Steady weekly mileage with easy runs</li>
              <li>Strength training to improve running economy</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Key Takeaway</h2>
            <p className="text-stone-800 leading-relaxed">
              VO2 max improves with consistent training, not one-off workouts. Keep sessions controlled and
              build over time.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
