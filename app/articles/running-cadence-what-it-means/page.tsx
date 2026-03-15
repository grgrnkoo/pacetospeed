import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'Cadence for Runners: What It Means and Why It Matters',
  description: 'Understand running cadence, how it affects efficiency, and how to improve it without overthinking.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['running cadence', 'steps per minute', 'stride rate', 'cadence tips', 'running form'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/running-cadence-what-it-means',
  },
  openGraph: {
    title: 'Cadence for Runners: What It Means and Why It Matters',
    description: 'Understand running cadence and how to improve it.',
    type: 'article',
    images: [{ url: '/api/og?slug=running-cadence-what-it-means', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-05T00:00:00.000Z',
    tags: ['cadence', 'form', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadence for Runners: What It Means and Why It Matters',
    description: 'Understand running cadence and how to improve it.',
  },
};

export default function RunningCadencePage() {
  return (
    <div className="w-full">
      <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4"><ArticleStructuredData slug="running-cadence-what-it-means" />
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Cadence for Runners: What It Means and Why It Matters
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 5, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Cadence is your step rate, usually measured in steps per minute. It influences efficiency and
              impact forces, but it is not a one-size-fits-all number.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Why Cadence Matters</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Higher cadence reduces overstriding.</li>
              <li>It can lower impact stress on joints.</li>
              <li>Small changes often improve running economy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">How to Improve Cadence</h2>
            <ol className="list-decimal list-inside space-y-2 text-stone-800 ml-4">
              <li>Start with a 3 to 5 percent increase, not 10 percent.</li>
              <li>Use short strides at easy pace to practice.</li>
              <li>Add strides or short intervals to build rhythm.</li>
            </ol>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Good cadence is the cadence that keeps you relaxed and efficient. Improve it gradually and focus
              on smooth form.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
