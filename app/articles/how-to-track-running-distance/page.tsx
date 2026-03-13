import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Track Running Distance (GPS, Phone, and Treadmill)',
  description: 'Compare the best ways to track running distance outdoors and indoors, with simple accuracy tips.',
  keywords: ['track running distance', 'gps running', 'running distance app', 'treadmill distance'],
  openGraph: {
    title: 'How to Track Running Distance (GPS, Phone, and Treadmill)',
    description: 'Compare the best ways to track running distance outdoors and indoors.',
    type: 'article',
    publishedTime: '2026-03-08T00:00:00.000Z',
    tags: ['distance', 'gps', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Track Running Distance (GPS, Phone, and Treadmill)',
    description: 'Compare the best ways to track running distance outdoors and indoors.',
  },
};

export default function HowToTrackRunningDistancePage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            How to Track Running Distance (GPS, Phone, and Treadmill)
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 8, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Accurate distance tracking helps you pace properly and measure progress. The best method depends
              on where you run and what gear you have.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Outdoor Options</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>GPS watch: most accurate and consistent</li>
              <li>Phone app: convenient but more battery heavy</li>
              <li>Measured routes: best for exact distance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Indoor Options</h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              <li>Treadmill display: easy but may be off</li>
              <li>Footpod: improves accuracy indoors</li>
              <li>Manual calculation: time x speed</li>
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Bottom Line</h2>
            <p className="text-stone-800 leading-relaxed">
              Use GPS outdoors and a footpod or treadmill plus manual checks indoors. Consistency matters more
              than perfect precision.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
