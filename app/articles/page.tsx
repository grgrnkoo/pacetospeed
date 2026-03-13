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
      slug: 'average-1-mile-time-by-age',
      title: 'Average 1 Mile Run Time by Age and Gender (With Pace Breakdown)',
      description: 'See realistic average mile times by age group with pace conversions and goal guidance.',
      date: '2026-03-13',
    },
    {
      slug: '10k-training-plan-8-week',
      title: '10K Training Plan: 8-Week Schedule for First-Timers',
      description: 'Beginner-friendly 8-week 10K plan with weekly structure and pacing guidance.',
      date: '2026-03-12',
    },
    {
      slug: 'how-to-run-faster-5k',
      title: 'How to Run a Faster 5K: 7 Practical Changes That Work',
      description: 'Seven proven ways to improve your 5K time, from pacing to workouts and recovery.',
      date: '2026-03-11',
    },
    {
      slug: 'heart-rate-zones-for-running',
      title: 'Heart Rate Zones for Running: How to Find Yours',
      description: 'Learn what heart rate zones mean, how to estimate your max HR, and how to use zones in training.',
      date: '2026-03-10',
    },
    {
      slug: 'vo2-max-for-runners',
      title: 'VO2 Max for Runners: What It Is and How to Improve It',
      description: 'Learn what VO2 max means for runners and how to improve it with training.',
      date: '2026-03-09',
    },
    {
      slug: 'long-run-pace-guide',
      title: 'Long Run Pace: How Slow Is Too Slow?',
      description: 'Find the right long run pace to build endurance without overtraining.',
      date: '2026-03-08',
    },
    {
      slug: 'marathon-pacing-even-vs-negative',
      title: 'Marathon Pacing Strategy: Even Splits vs Negative Splits',
      description: 'Compare even splits and negative splits with pros, cons, and guidance.',
      date: '2026-03-07',
    },
    {
      slug: '5k-to-marathon-build-up',
      title: '5K to Marathon: How to Build Up Safely (Mileage Progression Guide)',
      description: 'A practical progression guide to safely increase weekly mileage.',
      date: '2026-03-06',
    },
    {
      slug: 'running-cadence-what-it-means',
      title: 'Cadence for Runners: What It Means and Why It Matters',
      description: 'Understand running cadence, how it affects efficiency, and how to improve it.',
      date: '2026-03-05',
    },
    {
      slug: 'running-fueling-101',
      title: 'Running Fueling 101: How to Eat and Drink for Race Day',
      description: 'A simple race-day fueling guide for runners, including carbs, hydration, and timing.',
      date: '2026-03-04',
    },
    {
      slug: 'pace-calculator-min-mile-to-min-km',
      title: 'Pace Calculator: Convert Minutes per Mile to Minutes per Kilometer',
      description: 'Learn how to convert min/mile to min/km with simple formulas, a quick reference table, and practical examples.',
      date: '2026-03-10',
    },
    {
      slug: 'running-pace-chart-by-age',
      title: 'Running Pace Chart by Age and Ability (Beginner to Advanced)',
      description: 'Find realistic running pace ranges by age and ability level with a simple chart and guidance for targets.',
      date: '2026-03-09',
    },
    {
      slug: 'good-5k-10k-half-marathon-pace',
      title: 'What Is a Good 5K, 10K, or Half Marathon Pace? (Benchmarks + Tips)',
      description: 'Benchmarks for good 5K, 10K, and half marathon paces with realistic ranges and how to pick a target.',
      date: '2026-03-08',
    },
    {
      slug: 'calculate-pace-from-time-distance',
      title: 'How to Calculate Pace from Time and Distance (Step-by-Step)',
      description: 'Learn the exact pace formula, see worked examples, and avoid common mistakes.',
      date: '2026-03-07',
    },
    {
      slug: 'race-time-predictor',
      title: 'Race Time Predictor: Estimate Your Finish Time (5K to Marathon)',
      description: 'Use simple pacing formulas to predict finish times for common race distances.',
      date: '2026-03-06',
    },
    {
      slug: 'negative-splits-guide',
      title: 'Negative Splits: What They Are and How to Plan Them',
      description: 'Learn why negative splits work and how to plan pacing for a strong finish.',
      date: '2026-03-05',
    },
    {
      slug: 'target-pace-calculator-goal-time',
      title: 'Target Pace Calculator: How Fast You Need to Run for a Goal Time',
      description: 'Calculate target pace for any goal time and distance with examples and tips.',
      date: '2026-03-04',
    },
    {
      slug: 'treadmill-pace-vs-outdoor',
      title: 'Treadmill Pace vs Outdoor Pace: Why They Feel Different',
      description: 'Understand why treadmill pace feels different and how to adjust for accurate effort.',
      date: '2026-03-03',
    },
    {
      slug: 'treadmill-incline-pace-conversion',
      title: 'Treadmill Incline Pace Conversion: How to Adjust for Hills',
      description: 'Use incline adjustments to better match outdoor effort on a treadmill.',
      date: '2026-03-02',
    },
    {
      slug: 'running-pace-vs-speed',
      title: 'Running Pace vs Speed: What\'s the Difference and How to Convert Them',
      description: 'Understand the key differences between running pace and speed, learn why runners use both metrics, and master simple conversion methods.',
      date: '2025-11-23',
    },
    {
      slug: 'how-to-calculate-running-distance',
      title: 'How to Calculate Running Distance Based on Time and Pace (Simple Guide)',
      description: 'Learn how to calculate running distance using time and pace with simple formulas, practical examples, and tips for accurate distance estimation.',
      date: '2025-11-22',
    },
    {
      slug: 'race-distance-conversions',
      title: 'How Many Miles Is a 5K / 10K / Half Marathon / Marathon?',
      description: 'Quick reference guide for converting common race distances from kilometers to miles with helpful pace planning tips.',
      date: '2025-09-15',
    },
    {
      slug: 'treadmill-distance-calculator',
      title: 'How to Use a Distance Calculator for Treadmill Running Accuracy',
      description: 'Learn how to accurately calculate distance on a treadmill and ensure your indoor running matches outdoor training goals.',
      date: '2025-08-10',
    },
    {
      slug: 'walking-distance-calories',
      title: 'Convert Walking Distance to Calories: How Far Should You Walk Per Day?',
      description: 'Learn how to calculate calories burned while walking and understand daily walking distance goals for fitness and weight loss.',
      date: '2025-07-18',
    },
    {
      slug: '5k-to-miles-conversion-table',
      title: '5K to Miles Conversion Table (Pace, Time, Distance)',
      description: 'Complete 5K conversion reference with pace charts, finish time tables, and split times for effective race planning.',
      date: '2025-06-05',
    },
    {
      slug: '10k-to-miles-conversion',
      title: '10K to Miles: Exact Conversion + Pace Chart',
      description: 'Complete 10K conversion guide with exact distance, pace charts, finish time tables, and split strategies for race success.',
      date: '2025-05-12',
    },
    {
      slug: 'half-marathon-pace-chart',
      title: 'Half Marathon Pace Chart and Distance Explained',
      description: 'Complete half marathon guide with exact distance, comprehensive pace charts, finish time tables, and race strategies for 13.1 miles.',
      date: '2025-04-20',
    },
    {
      slug: 'marathon-distance-explained',
      title: 'Marathon Distance Explained: Why 42.195 km?',
      description: 'Discover the fascinating history behind the marathon distance and why it\'s exactly 42.195 kilometers (26.2 miles).',
      date: '2025-03-08',
    },
    {
      slug: 'why-running-apps-dont-convert-pace',
      title: 'Why Most Running Apps Don\'t Let You Convert Pace to Speed',
      description: 'Explore why popular running apps lack pace-to-speed conversion features and why dedicated converter tools are essential.',
      date: '2025-02-14',
    },
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
