import { Metadata } from 'next';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';

export const metadata: Metadata = {
  title: 'How to Avoid Shin Splints (Simple Prevention Guide)',
  description: 'Practical steps to prevent shin splints, including training changes, strength work, and recovery tips.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['how to avoid shin splints', 'shin splints prevention', 'running injuries', 'shin pain running'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/how-to-avoid-shin-splints',
  },
  openGraph: {
    title: 'How to Avoid Shin Splints (Simple Prevention Guide)',
    description: 'Practical steps to prevent shin splints with training and recovery tips.',
    type: 'article',
    images: [{ url: '/api/og?slug=how-to-avoid-shin-splints', width: 1200, height: 630, alt: '' }],
    publishedTime: '2026-03-09T00:00:00.000Z',
    tags: ['injury prevention', 'running', 'shin splints'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Avoid Shin Splints (Simple Prevention Guide)',
    description: 'Practical steps to prevent shin splints with training and recovery tips.',
  },
};

export default function HowToAvoidShinSplintsPage() {
  return (
    <div className="w-full">
      <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4"><ArticleStructuredData slug="how-to-avoid-shin-splints" />
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            How to Avoid Shin Splints (Simple Prevention Guide)
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 9, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Shin splints are common when training increases too fast or recovery is missing. The good news is
              that most cases are preventable with small changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Top Prevention Steps</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Increase weekly mileage gradually.</li>
              <li>Alternate hard and easy days.</li>
              <li>Run on softer surfaces occasionally.</li>
              <li>Strengthen calves and tibialis muscles.</li>
              <li>Replace shoes before they are worn out.</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Shin splints usually come from too much, too soon. Consistency and recovery are your best tools
              for staying pain free.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
