import { Metadata } from 'next';
import GuideStructuredData from '@/app/components/GuideStructuredData';
import { pedometerApps } from './apps';

export const metadata: Metadata = {
  title: '7 Best Pedometer Apps for iPhone in 2026',
  description:
    'Compare 7 of the best pedometer apps for iPhone in 2026, including Senda, Pedometer++, StepsApp, Pacer, ActivityTracker, Duffy, and more.',
  authors: [{ name: 'Oleg', url: 'https://grgrnko.com' }],
  keywords: [
    'best pedometer app for iPhone',
    'iPhone pedometer app',
    'step counter app',
    'walking tracker app',
    'Apple Health pedometer',
    'Apple Watch step counter',
    'best step counter app',
    'pedometer app with widgets',
  ],
  alternates: {
    canonical: 'https://pacetospeed.xyz/guides/best-pedometer-apps-iphone',
  },
  openGraph: {
    title: '7 Best Pedometer Apps for iPhone in 2026',
    description:
      'Compare 7 of the best pedometer apps for iPhone in 2026, including Senda, Pedometer++, StepsApp, Pacer, and more.',
    type: 'article',
    images: [
      {
        url: '/api/og?slug=best-pedometer-apps-iphone',
        width: 1200,
        height: 630,
        alt: '7 Best Pedometer Apps for iPhone in 2026',
      },
    ],
    publishedTime: '2026-08-19T00:00:00.000Z',
    tags: ['pedometer', 'iPhone', 'step counter', 'walking'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Best Pedometer Apps for iPhone in 2026',
    description:
      'Compare 7 of the best pedometer apps for iPhone in 2026, including Senda, Pedometer++, StepsApp, Pacer, and more.',
  },
};

export default function BestPedometerAppsIphonePage() {
  return (
    <div className="w-full">
      <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4">
        <GuideStructuredData
          slug="best-pedometer-apps-iphone"
          itemList={pedometerApps.map((app) => ({ name: app.name, url: app.appStoreUrl }))}
        />
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            7 Best Pedometer Apps for iPhone in 2026
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time dateTime="2026-08-19">August 19, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              If you are looking for the best pedometer app for iPhone, you have plenty of options.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              Some apps are built for detailed tracking. Some focus on motivation, streaks, or Apple
              Watch support. And some try to make your step data more useful or more shareable.
            </p>
            <p className="text-stone-800 leading-relaxed">
              Below is a comparison of seven pedometer apps for iPhone in 2026, including Senda.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Best pedometer apps for iPhone at a glance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">App</th>
                    <th className="p-3 text-left">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {pedometerApps.map((app, index) => (
                    <tr
                      key={app.name}
                      className={`border-b border-stone-200 ${index % 2 === 0 ? 'bg-stone-50' : ''}`}
                    >
                      <td className="p-3 font-semibold">{app.name}</td>
                      <td className="p-3">{app.bestForShort}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {pedometerApps.map((app, index) => (
            <section key={app.name}>
              <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
                {index + 1}. {app.heading}
              </h2>
              <p className="text-stone-800 leading-relaxed mb-4">
                <strong>Best for:</strong> {app.bestForLong}
              </p>
              {app.body.map((paragraph) => (
                <p key={paragraph} className="text-stone-800 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              <p className="text-stone-800 font-semibold mb-2">Why choose {app.name}:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4 mb-4">
                {app.why.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-stone-500 hover:text-stone-800 transition-colors"
              >
                View {app.name} on the App Store &rarr;
              </a>
            </section>
          ))}

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Which pedometer app is best?
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              The best pedometer app depends on what you want from it.
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-800 ml-4">
              {pedometerApps.map((app) => (
                <li key={app.name}>
                  <strong>Choose {app.name}</strong> {app.verdict}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">Final thoughts</h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Most pedometer apps are built around one question: how do you track more clearly?
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              Senda stands out because it also focuses on a second question: what do you do with that
              data after the walk? If you want something made for sharing, it has a very different
              angle from the other apps on this list.
            </p>
            <p className="text-stone-800 leading-relaxed">
              That said, all seven apps have a valid place depending on whether you care most about
              tracking, motivation, widgets, Apple Watch support, or social sharing.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
