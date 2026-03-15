import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'Marathon Pacing Strategy: Even Splits vs Negative Splits',
  description: 'Compare even splits and negative splits for marathon pacing, with pros, cons, and practical guidance.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['marathon pacing', 'even splits', 'negative splits marathon', 'race strategy', 'marathon pace'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/marathon-pacing-even-vs-negative',
  },
  openGraph: {
    title: 'Marathon Pacing Strategy: Even Splits vs Negative Splits',
    description: 'Compare even splits and negative splits with pros, cons, and guidance.',
    type: 'article',
    images: [{ url: '/api/og?slug=marathon-pacing-even-vs-negative', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-07T00:00:00.000Z',
    tags: ['marathon', 'pacing', 'strategy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marathon Pacing Strategy: Even Splits vs Negative Splits',
    description: 'Compare even splits and negative splits with pros, cons, and guidance.',
  },
};

export default function MarathonPacingEvenVsNegativePage() {
  return (
    <div className="w-full">
      <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4"><ArticleStructuredData slug="marathon-pacing-even-vs-negative" />
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Marathon Pacing Strategy: Even Splits vs Negative Splits
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 7, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Marathon pacing is more about discipline than speed. The two most common strategies are even
              splits and negative splits. Both can work, but they carry different risks.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Even Splits</h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Even splits mean you run each segment at the same pace from start to finish.
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Pros: predictable, easy to execute</li>
              <li>Cons: can feel hard late in the race if you start too fast</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Negative Splits</h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Negative splits mean you run the second half faster than the first.
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Pros: reduces early fatigue, strong finish</li>
              <li>Cons: requires patience and confidence</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Which Should You Choose?</h2>
            <p className="text-stone-800 leading-relaxed">
              Most runners benefit from slight negative splits. Start controlled, then increase effort after
              halfway if you feel strong. If you are new to the marathon, aim for even splits with a conservative
              start.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
