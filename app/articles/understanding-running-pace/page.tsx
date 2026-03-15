import Link from 'next/link';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding Running Pace: A Complete Guide for Runners',
  description: 'Learn everything about running pace - what it is, how it differs from speed, why it matters for training, and common training paces including easy, tempo, and race pace.',
  keywords: ['pace to speed', 'running pace', 'pace vs speed', 'training pace', 'easy pace', 'tempo pace', 'race pace', 'running training zones', 'pace calculation', 'marathon pace'],
  authors: [{ name: 'Pace to Speed' }],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/understanding-running-pace',
  },
  openGraph: {
    title: 'Understanding Running Pace: A Complete Guide for Runners',
    description: 'Learn everything about running pace - what it is, how it differs from speed, and why it matters for your training.',
    type: 'article',
    images: [{ url: '/api/og?slug=understanding-running-pace', width: 1200, height: 630, alt: '' }],
    publishedTime: '2024-01-15T00:00:00.000Z',
    authors: ['Oleg'],
    tags: ['running', 'pace', 'training', 'tempo', 'easy pace', 'race pace'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding Running Pace: A Complete Guide',
    description: 'Learn everything about running pace and why it matters for your training.',
    creator: '@grgrnko',
  },
};

export default function UnderstandingRunningPacePage() {
  return (
    <div className="w-full">
      {/* Article Content */}
      <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4"><ArticleStructuredData slug="understanding-running-pace" />
        <header className="mb-6 sm:mb-8">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">
            Understanding Running Pace
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>January 15, 2024</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-6">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              What is Running Pace?
            </h2>
            <p className="text-stone-800 leading-relaxed">
              Running pace refers to the amount of time it takes you to cover a specific distance, 
              typically measured in minutes per kilometer (min/km) or minutes per mile (min/mi). 
              Understanding your pace is crucial for training effectively and achieving your running goals.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Pace vs Speed
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              While pace tells you how long it takes to cover a distance (e.g., 5:30 min/km), 
              speed tells you how much distance you cover in a given time (e.g., 10.91 km/h). 
              They're inversely related - a faster pace means a higher speed.
            </p>
            <div className="bg-stone-50 rounded-lg p-4 border-l-4 border-stone-800">
              <p className="text-stone-800">
                <strong>Quick conversion:</strong> Speed (km/h) = 60 ÷ Pace (min/km)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Why Pace Matters
            </h2>
            <ul className="list-disc list-inside space-y-2 text-stone-800">
              <li>Helps you plan training runs at the right intensity</li>
              <li>Essential for race strategy and pacing</li>
              <li>Allows you to track improvement over time</li>
              <li>Makes it easier to compare performances across different distances</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Common Training Paces
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Easy Pace (Conversational)
                </h3>
                <p className="text-stone-800 text-sm">
                  You should be able to hold a conversation. Typically 60-70% of max effort.
                </p>
              </div>
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Tempo Pace (Comfortably Hard)
                </h3>
                <p className="text-stone-800 text-sm">
                  Sustainable for about an hour. Around 80-90% of max effort.
                </p>
              </div>
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Race Pace
                </h3>
                <p className="text-stone-800 text-sm">
                  Your target pace for a specific race distance. Practice this during training!
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Using the Pace-Speed Converter
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Our converter makes it easy to switch between pace and speed, whether you're 
              planning a training run or analyzing race results. Simply enter your pace or speed, 
              and the tool will instantly calculate the conversion for you.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-stone-800 hover:bg-stone-400 text-white font-medium rounded-lg transition-colors hover:cursor-pointer"
            >
              Try the Converter →
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
}

