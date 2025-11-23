import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding Running Pace: A Complete Guide for Runners',
  description: 'Learn everything about running pace - what it is, how it differs from speed, why it matters for training, and common training paces including easy, tempo, and race pace.',
  keywords: ['pace to speed', 'running pace', 'pace vs speed', 'training pace', 'easy pace', 'tempo pace', 'race pace', 'running training zones', 'pace calculation', 'marathon pace'],
  authors: [{ name: 'Oleg', url: 'https://x.com/grgrnko' }],
  openGraph: {
    title: 'Understanding Running Pace: A Complete Guide for Runners',
    description: 'Learn everything about running pace - what it is, how it differs from speed, and why it matters for your training.',
    type: 'article',
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
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 pt-16 md:pt-0">
      {/* Article Content */}
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Understanding Running Pace
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <time>January 15, 2024</time>
          </div>
        </header>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What is Running Pace?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Running pace refers to the amount of time it takes you to cover a specific distance, 
              typically measured in minutes per kilometer (min/km) or minutes per mile (min/mi). 
              Understanding your pace is crucial for training effectively and achieving your running goals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Pace vs Speed
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              While pace tells you how long it takes to cover a distance (e.g., 5:30 min/km), 
              speed tells you how much distance you cover in a given time (e.g., 10.91 km/h). 
              They're inversely related - a faster pace means a higher speed.
            </p>
            <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-4 border-l-4 border-blue-600">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Quick conversion:</strong> Speed (km/h) = 60 ÷ Pace (min/km)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Pace Matters
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Helps you plan training runs at the right intensity</li>
              <li>Essential for race strategy and pacing</li>
              <li>Allows you to track improvement over time</li>
              <li>Makes it easier to compare performances across different distances</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Common Training Paces
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Easy Pace (Conversational)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  You should be able to hold a conversation. Typically 60-70% of max effort.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Tempo Pace (Comfortably Hard)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Sustainable for about an hour. Around 80-90% of max effort.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Race Pace
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Your target pace for a specific race distance. Practice this during training!
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Using the Pace-Speed Converter
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Our converter makes it easy to switch between pace and speed, whether you're 
              planning a training run or analyzing race results. Simply enter your pace or speed, 
              and the tool will instantly calculate the conversion for you.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors hover:cursor-pointer"
            >
              Try the Converter →
            </Link>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto mt-16 py-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          built by{' '}
          <a
            href="https://x.com/grgrnko"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-500 transition-colors underline hover:cursor-pointer"
          >
            oleg
          </a>
        </p>
      </footer>
    </div>
  );
}

