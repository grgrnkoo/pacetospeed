import Link from 'next/link';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Calculate Running Distance Based on Time and Pace (Simple Guide)',
  description: 'Learn how to calculate running distance using time and pace with simple formulas, practical examples, and tips for accurate distance estimation. Perfect for runners planning workouts and tracking training.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['running distance calculator', 'calculate running distance', 'pace and time', 'distance formula', 'running math', 'pace calculator', 'training distance', 'running metrics', 'workout planning', 'min/km to distance'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/how-to-calculate-running-distance',
  },
  openGraph: {
    title: 'How to Calculate Running Distance Based on Time and Pace (Simple Guide)',
    description: 'Learn how to calculate running distance using time and pace with simple formulas and practical examples.',
    type: 'article',
    images: [{ url: '/api/og?slug=how-to-calculate-running-distance', width: 1200, height: 630, alt: '' }],
    publishedTime: '2025-11-22T00:00:00.000Z',
    tags: ['running', 'distance', 'pace', 'calculation', 'training', 'workout planning'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Calculate Running Distance Based on Time and Pace (Simple Guide)',
    description: 'Learn how to calculate running distance using time and pace with simple formulas and practical examples.',
  },
};

export default function HowToCalculateRunningDistancePage() {
  return (
    <div className="min-h-screen">
      {/* Article Content */}
      <article className="max-w-3xl mx-auto py-12 px-4"><ArticleStructuredData slug="how-to-calculate-running-distance" />
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            How to Calculate Running Distance Based on Time and Pace (Simple Guide)
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>November 22, 2025</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Whether you're planning a training session, tracking your progress, or just curious about how far you've run, 
              knowing how to calculate distance from time and pace is an essential skill for every runner.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              The good news? The math is simpler than you might think. With a basic formula and a few practical examples, 
              you'll be calculating distances like a pro in no time.
            </p>
            <p className="text-stone-800 leading-relaxed">
              Let's break down exactly how to do it—step by step.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              The Basic Formula
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              At its core, calculating distance from time and pace is straightforward:
            </p>
            
            <div className="bg-stone-800 text-white rounded-lg p-6 mb-4 text-center">
              <p className="text-xl font-semibold mb-2">Distance = Time ÷ Pace</p>
              <p className="text-sm opacity-90">
                (When pace is in minutes per distance unit)
              </p>
            </div>

            <p className="text-stone-800 leading-relaxed mb-2">
              However, there's an important catch: <strong>your units need to match</strong>.
            </p>
            <p className="text-stone-800 leading-relaxed">
              Let's explore how this works with both metric and imperial measurements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Method 1: Using Minutes per Kilometer (min/km)
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              If your pace is measured in minutes per kilometer, the formula becomes:
            </p>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800 mb-4">
              <p className="text-stone-800 font-semibold mb-3">Formula:</p>
              <p className="text-stone-800 mb-4">
                <strong>Distance (km) = Running Time (minutes) ÷ Pace (min/km)</strong>
              </p>
              
              <p className="text-stone-800 font-semibold mb-2">Example 1:</p>
              <ul className="space-y-1 text-stone-800 ml-4 mb-4">
                <li>• Running time: 30 minutes</li>
                <li>• Pace: 5:00 min/km</li>
                <li>• Distance: 30 ÷ 5 = <strong>6 kilometers</strong></li>
              </ul>

              <p className="text-stone-800 font-semibold mb-2">Example 2:</p>
              <ul className="space-y-1 text-stone-800 ml-4">
                <li>• Running time: 45 minutes</li>
                <li>• Pace: 6:30 min/km (6.5 minutes)</li>
                <li>• Distance: 45 ÷ 6.5 = <strong>6.92 kilometers</strong></li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <p className="text-stone-800 font-semibold mb-2">💡 Quick Tip:</p>
              <p className="text-stone-800 text-sm">
                When your pace includes seconds (like 6:30), convert it to decimal minutes first. 
                6:30 = 6.5 minutes, 5:45 = 5.75 minutes, 4:20 = 4.33 minutes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Method 2: Using Minutes per Mile (min/mi)
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              The exact same principle applies when working in miles:
            </p>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800 mb-4">
              <p className="text-stone-800 font-semibold mb-3">Formula:</p>
              <p className="text-stone-800 mb-4">
                <strong>Distance (miles) = Running Time (minutes) ÷ Pace (min/mile)</strong>
              </p>
              
              <p className="text-stone-800 font-semibold mb-2">Example 1:</p>
              <ul className="space-y-1 text-stone-800 ml-4 mb-4">
                <li>• Running time: 40 minutes</li>
                <li>• Pace: 8:00 min/mile</li>
                <li>• Distance: 40 ÷ 8 = <strong>5 miles</strong></li>
              </ul>

              <p className="text-stone-800 font-semibold mb-2">Example 2:</p>
              <ul className="space-y-1 text-stone-800 ml-4">
                <li>• Running time: 60 minutes</li>
                <li>• Pace: 9:30 min/mile (9.5 minutes)</li>
                <li>• Distance: 60 ÷ 9.5 = <strong>6.32 miles</strong></li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Step-by-Step: Converting Time to Decimal Minutes
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Since pace is usually displayed as minutes:seconds (like 5:30), you'll often need to convert 
              this to decimal format before calculating.
            </p>

            <div className="bg-stone-50 rounded-lg p-6 mb-4">
              <p className="text-stone-800 font-semibold mb-3">Conversion Process:</p>
              <ol className="list-decimal list-inside space-y-3 text-stone-800">
                <li>Take the seconds portion</li>
                <li>Divide it by 60</li>
                <li>Add it to the minutes portion</li>
              </ol>
              
              <div className="mt-4 pt-4 border-t border-stone-200">
                <p className="text-stone-800 font-semibold mb-2">Common Conversions:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• 5:00 = 5.00 minutes</div>
                  <div>• 5:30 = 5.50 minutes</div>
                  <div>• 6:15 = 6.25 minutes</div>
                  <div>• 6:45 = 6.75 minutes</div>
                  <div>• 4:20 = 4.33 minutes</div>
                  <div>• 7:10 = 7.17 minutes</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Real-World Example: Planning a 10K Training Run
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Let's say you have 60 minutes available for a run, and you want to maintain a comfortable pace 
              of 5:30 min/km. How far will you run?
            </p>

            <div className="bg-stone-50 rounded-lg p-6">
              <p className="text-stone-800 font-semibold mb-3">Solution:</p>
              <ol className="list-decimal list-inside space-y-2 text-stone-800 mb-4">
                <li>Convert pace to decimal: 5:30 = 5.5 minutes</li>
                <li>Apply formula: 60 ÷ 5.5 = 10.91 km</li>
                <li>Round if needed: approximately 11 kilometers</li>
              </ol>
              
              <p className="text-stone-800 text-sm italic">
                Result: You'll cover just under 11 kilometers in your 60-minute run at 5:30 pace.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Using Speed Instead of Pace
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              If you prefer working with speed (km/h or mph) rather than pace, the calculation is even simpler:
            </p>

            <div className="bg-stone-800 text-white rounded-lg p-6 mb-4 text-center">
              <p className="text-xl font-semibold mb-2">Distance = Speed × Time</p>
              <p className="text-sm opacity-90">
                (When time is in hours)
              </p>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-2">Example:</p>
              <ul className="space-y-1 text-stone-800 ml-4 mb-4">
                <li>• Speed: 12 km/h</li>
                <li>• Time: 0.75 hours (45 minutes)</li>
                <li>• Distance: 12 × 0.75 = <strong>9 kilometers</strong></li>
              </ul>
              
              <p className="text-stone-800 text-sm italic">
                Note: Remember to convert minutes to hours by dividing by 60 (e.g., 45 min = 0.75 hours).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Practical Applications for Runners
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Understanding distance calculation helps you in several key training scenarios:
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  1. Planning Time-Based Workouts
                </h3>
                <p className="text-stone-800 text-sm">
                  When you have a fixed time window (e.g., 45-minute lunch break), calculate how far you'll 
                  go at your target pace to plan your route accordingly.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  2. Estimating GPS-Free Runs
                </h3>
                <p className="text-stone-800 text-sm">
                  If your watch dies mid-run or you're running without GPS, use your average pace and 
                  running time to estimate the distance covered.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  3. Verifying Training Data
                </h3>
                <p className="text-stone-800 text-sm">
                  Double-check your running app's distance readings by calculating manually—useful when 
                  GPS signals are poor or route measurements seem off.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  4. Setting Realistic Goals
                </h3>
                <p className="text-stone-800 text-sm">
                  Calculate what pace you need to maintain to cover a specific distance in your available time, 
                  helping you set achievable training targets.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Common Mistakes to Avoid
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-lg">
                <p className="text-stone-800 font-semibold mb-2">❌ Mixing Units</p>
                <p className="text-stone-800 text-sm">
                  Don't mix kilometers and miles in the same calculation. If your pace is in min/km, 
                  your result will be in kilometers—not miles.
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-lg">
                <p className="text-stone-800 font-semibold mb-2">❌ Forgetting to Convert Seconds</p>
                <p className="text-stone-800 text-sm">
                  A pace of 5:30 is not 5.30 minutes—it's 5.50 minutes. Always convert the seconds 
                  portion by dividing by 60.
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-lg">
                <p className="text-stone-800 font-semibold mb-2">❌ Using the Wrong Formula</p>
                <p className="text-stone-800 text-sm">
                  For pace (min/km), divide time by pace. For speed (km/h), multiply speed by time. 
                  Don't confuse the two approaches.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Quick Reference Table
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Here are some common scenarios for quick reference:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Time</th>
                    <th className="p-3 text-left">Pace</th>
                    <th className="p-3 text-left">Distance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">30 min</td>
                    <td className="p-3">5:00 min/km</td>
                    <td className="p-3">6.00 km</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">45 min</td>
                    <td className="p-3">5:30 min/km</td>
                    <td className="p-3">8.18 km</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">60 min</td>
                    <td className="p-3">6:00 min/km</td>
                    <td className="p-3">10.00 km</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">40 min</td>
                    <td className="p-3">8:00 min/mile</td>
                    <td className="p-3">5.00 miles</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">50 min</td>
                    <td className="p-3">10:00 min/mile</td>
                    <td className="p-3">5.00 miles</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              The Easier Way: Use Our Calculator
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              While understanding the math behind distance calculation is valuable, you don't always have time 
              to crunch numbers mid-training.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              Our pace-to-speed converter handles all the conversions instantly—no manual calculations needed. 
              Simply input your pace and time, and get accurate distance results in seconds.
            </p>
            <p className="text-stone-800 leading-relaxed mb-6">
              Whether you're planning workouts, verifying GPS data, or setting training goals, the tool makes 
              distance calculation effortless and error-free.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-stone-800 hover:bg-stone-400 text-white font-medium rounded-lg transition-colors hover:cursor-pointer"
            >
              Try the Calculator →
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
}

