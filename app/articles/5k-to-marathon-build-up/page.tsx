import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: '5K to Marathon: How to Build Up Safely (Mileage Progression Guide)',
  description: 'A practical progression guide to safely increase weekly mileage from 5K fitness to marathon readiness.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['mileage progression', 'build running base', 'increase mileage', 'marathon training base', 'running progression'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/5k-to-marathon-build-up',
  },
  openGraph: {
    title: '5K to Marathon: How to Build Up Safely (Mileage Progression Guide)',
    description: 'A practical progression guide to safely increase weekly mileage.',
    type: 'article',
    images: [{ url: '/api/og?slug=5k-to-marathon-build-up', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-06T00:00:00.000Z',
    tags: ['marathon', 'training', 'mileage'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5K to Marathon: How to Build Up Safely',
    description: 'A practical progression guide to safely increase weekly mileage.',
  },
};

export default function BuildUpFrom5KToMarathonPage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4"><ArticleStructuredData slug="5k-to-marathon-build-up" />
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            5K to Marathon: How to Build Up Safely (Mileage Progression Guide)
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 6, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              The jump from 5K fitness to marathon readiness is mostly about gradual mileage. A slow progression
              builds durability and reduces injury risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Simple Progression Rule</h2>
            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800">
                Increase weekly mileage by <strong>5 to 10 percent</strong> every 2 to 3 weeks, then take a lighter
                week to absorb training.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Example Progression</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Weeks 1-4: 15 to 22 km per week</li>
              <li>Weeks 5-8: 22 to 30 km per week</li>
              <li>Weeks 9-12: 30 to 40 km per week</li>
              <li>Weeks 13-16: 40 to 55 km per week</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Key Takeaway</h2>
            <p className="text-stone-800 leading-relaxed">
              Consistency beats speed of progression. Focus on time on feet and recovery, and add intensity only
              after the base is stable.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
