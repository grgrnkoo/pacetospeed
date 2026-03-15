import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'Running Warm-Up and Cool-Down: Simple Routines That Work',
  description: 'Easy warm-up and cool-down routines to improve performance and reduce injury risk.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['running warm up', 'cool down after running', 'warm up routine', 'running recovery'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/running-warm-up-cool-down',
  },
  openGraph: {
    title: 'Running Warm-Up and Cool-Down: Simple Routines That Work',
    description: 'Easy warm-up and cool-down routines to improve performance and reduce injury risk.',
    type: 'article',
    images: [{ url: '/api/og?slug=running-warm-up-cool-down', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-11T00:00:00.000Z',
    tags: ['warm up', 'cool down', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Running Warm-Up and Cool-Down: Simple Routines That Work',
    description: 'Easy warm-up and cool-down routines to improve performance and reduce injury risk.',
  },
};

export default function RunningWarmUpCoolDownPage() {
  return (
    <div className="w-full">
      <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4"><ArticleStructuredData slug="running-warm-up-cool-down" />
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Running Warm-Up and Cool-Down: Simple Routines That Work
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 11, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              A short warm-up improves performance and reduces injury risk. A cool-down helps your body recover
              and keeps the next run easier.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">5-Minute Warm-Up</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>2 minutes easy jog or brisk walk</li>
              <li>Leg swings, 10 per side</li>
              <li>High knees, 20 steps</li>
              <li>3 short strides at moderate pace</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">5-Minute Cool-Down</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>3 minutes easy jog or walk</li>
              <li>Calf stretch and hip flexor stretch</li>
              <li>Slow breathing to relax the system</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Warm-ups and cool-downs do not need to be long. Consistency matters more than complexity.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
