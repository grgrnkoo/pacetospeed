import Link from 'next/link';
import { Metadata } from 'next';
import { articles } from './data';

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
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Articles
          </h1>
          <p className="text-lg text-gray-600">
            Tips, guides, and insights for runners
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 hover:scale-[1.02] hover:cursor-pointer"
            >
              <article>
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {article.title}
                  </h2>
                  <time className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <p className="text-gray-600">
                  {article.description}
                </p>
              </article>
            </Link>
          ))}
        </div>

      </main>
    </div>
  );
}
