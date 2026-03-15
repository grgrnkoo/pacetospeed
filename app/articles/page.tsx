import Link from 'next/link';
import { Metadata } from 'next';
import { articles } from './data';

export const metadata: Metadata = {
  title: 'Running Tips & Training Articles',
  description: 'Expert tips, guides, and insights for runners. Learn about pace, speed, training zones, treadmill workouts, and race planning strategies.',
  keywords: ['pace to speed', 'running tips', 'training articles', 'pace guide', 'running training', 'marathon training', 'treadmill workouts', 'race strategy'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles',
  },
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
    <div className="w-full">
      <main className="max-w-4xl mx-auto py-8 sm:py-12 px-4">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-800 mb-1 sm:mb-2">
            Articles
          </h1>
          <p className="text-sm sm:text-base text-stone-500">
            Tips, guides, and insights for runners
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-4 sm:p-6 hover:scale-[1.02] hover:cursor-pointer"
            >
              <article>
                <time className="text-xs sm:text-sm text-stone-400 mb-1 block">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-800 mb-1">
                  {article.title}
                </h2>
                <p className="text-sm sm:text-base text-stone-500">
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
