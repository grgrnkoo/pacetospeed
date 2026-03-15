import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'Treadmill Pace vs Outdoor Pace: Why They Feel Different',
  description: 'Understand why treadmill pace feels easier or harder than outdoor running and how to adjust your training for accurate effort.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['treadmill pace vs outdoor', 'treadmill pace conversion', 'indoor running pace', 'treadmill running tips', 'outdoor vs treadmill'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/treadmill-pace-vs-outdoor',
  },
  openGraph: {
    title: 'Treadmill Pace vs Outdoor Pace: Why They Feel Different',
    description: 'Why treadmill pace feels different and how to adjust for accurate effort.',
    type: 'article',
    images: [{ url: '/api/og?slug=treadmill-pace-vs-outdoor', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-03T00:00:00.000Z',
    tags: ['treadmill', 'running', 'pace', 'training'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treadmill Pace vs Outdoor Pace',
    description: 'Why treadmill pace feels different and how to adjust for accurate effort.',
  },
};

export default function TreadmillPaceVsOutdoorPage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4"><ArticleStructuredData slug="treadmill-pace-vs-outdoor" />
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Treadmill Pace vs Outdoor Pace: Why They Feel Different
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 3, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Many runners notice that the same pace feels easier or harder on a treadmill compared to the road.
              The numbers might match, but the effort often does not. Here is why that happens and how to adjust.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Why It Feels Different</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>No air resistance indoors, which can make fast paces feel easier.</li>
              <li>The belt assists leg turnover, reducing ground reaction variability.</li>
              <li>Outdoor terrain includes small elevation changes that add effort.</li>
              <li>Heat and humidity control indoors can change perceived exertion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Simple Adjustment</h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              A common rule is to add a small incline to mimic outdoor effort.
            </p>
            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800">
                Set the treadmill to <strong>1 percent incline</strong> for most steady runs. For windy outdoor
                conditions, use 1.5 to 2 percent.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">When Not to Adjust</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>If you are rehabbing or returning from injury, keep effort lower.</li>
              <li>If your treadmill is uncalibrated, prioritize effort over numbers.</li>
              <li>If the workout is short and fast, focus on form and cadence.</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Pace parity between treadmill and outdoor runs is not always realistic. Use effort as your guide
              and adjust incline to approximate real-world resistance.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
