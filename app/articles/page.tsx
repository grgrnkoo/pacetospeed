import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Running Tips & Training Articles',
  description: 'Expert tips, guides, and insights for runners. Learn about pace, speed, training zones, treadmill workouts, and race planning strategies.',
  keywords: ['pace to speed', 'running tips', 'training articles', 'pace guide', 'running training', 'marathon training', 'treadmill workouts', 'race strategy'],
  openGraph: {
    title: 'Running Tips & Training Articles | Pace to Speed Converter',
    description: 'Expert tips, guides, and insights for runners. Learn about pace, speed, training zones, and race planning.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Running Tips & Training Articles',
    description: 'Expert tips, guides, and insights for runners. Learn about pace, speed, training zones, and race planning.',
  },
};

export default function ArticlesPage() {
  // List of articles
  const articles = [
    {
      slug: 'why-pace-to-speed-converter-is-must-have',
      title: 'Why a Pace-to-Speed Converter Is a Must-Have Tool for Runners',
      description: 'Discover how this simple tool makes training smarter, more consistent, and more enjoyable for runners at every level.',
      date: '2024-01-20',
    },
    {
      slug: 'understanding-running-pace',
      title: 'Understanding Running Pace',
      description: 'Learn how to calculate and use running pace for better training.',
      date: '2024-01-15',
    },
    // Space for more articles...
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Articles
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tips, guides, and insights for runners
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6 hover:scale-[1.02] hover:cursor-pointer"
            >
              <article>
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {article.title}
                  </h2>
                  <time className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {article.description}
                </p>
              </article>
            </Link>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-16 py-8 text-center">
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

