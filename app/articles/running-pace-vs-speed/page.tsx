import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Running Pace vs Speed: What\'s the Difference and How to Convert Them',
  description: 'Understand the key differences between running pace and speed, learn why runners use both metrics, and master simple conversion methods for min/km, min/mile, km/h, and mph.',
  keywords: ['pace vs speed', 'running pace', 'running speed', 'pace to speed conversion', 'speed to pace', 'min/km to km/h', 'mph to min/mile', 'pace calculator', 'speed calculator', 'running metrics'],
  openGraph: {
    title: 'Running Pace vs Speed: What\'s the Difference and How to Convert Them',
    description: 'Understand the key differences between running pace and speed, and learn simple conversion methods.',
    type: 'article',
    publishedTime: '2025-11-23T00:00:00.000Z',
    tags: ['running', 'pace', 'speed', 'conversion', 'training', 'metrics'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Running Pace vs Speed: What\'s the Difference and How to Convert Them',
    description: 'Understand the key differences between running pace and speed, and learn simple conversion methods.',
  },
};

export default function RunningPaceVsSpeedPage() {
  return (
    <div className="min-h-screen">
      {/* Article Content */}
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Running Pace vs Speed: What's the Difference and How to Convert Them
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>November 23, 2025</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              If you've ever felt confused by running metrics—wondering whether to track your workout in minutes per 
              kilometer or kilometers per hour—you're not alone.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              Pace and speed are two sides of the same coin, but they serve different purposes and are used in 
              different contexts. Understanding both, and knowing how to convert between them, is key to smarter training.
            </p>
            <p className="text-stone-800 leading-relaxed">
              Let's break down what each metric means, why runners use both, and how to convert between them effortlessly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              What is Running Pace?
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Pace measures <strong>how long it takes</strong> to cover a specific distance. It answers the question: 
              "How many minutes does it take me to run one kilometer (or mile)?"
            </p>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800 mb-4">
              <p className="text-stone-800 font-semibold mb-3">Common Pace Units:</p>
              <ul className="space-y-2 text-stone-800">
                <li>• <strong>Minutes per kilometer (min/km)</strong> – Used primarily in metric countries</li>
                <li>• <strong>Minutes per mile (min/mi)</strong> – Popular in the US and UK</li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-lg p-6">
              <p className="text-stone-800 font-semibold mb-2">Examples:</p>
              <ul className="space-y-1 text-stone-800 ml-4">
                <li>• A pace of 5:00 min/km means you run 1 kilometer in 5 minutes</li>
                <li>• A pace of 8:00 min/mile means you run 1 mile in 8 minutes</li>
                <li>• A pace of 4:30 min/km means you're covering ground faster than someone at 6:00 min/km</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              What is Running Speed?
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Speed measures <strong>how much distance</strong> you cover in a given time period. It answers the question: 
              "How many kilometers (or miles) do I run in one hour?"
            </p>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800 mb-4">
              <p className="text-stone-800 font-semibold mb-3">Common Speed Units:</p>
              <ul className="space-y-2 text-stone-800">
                <li>• <strong>Kilometers per hour (km/h)</strong> – Standard metric measurement</li>
                <li>• <strong>Miles per hour (mph)</strong> – Used in the US and UK</li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-lg p-6">
              <p className="text-stone-800 font-semibold mb-2">Examples:</p>
              <ul className="space-y-1 text-stone-800 ml-4">
                <li>• A speed of 12 km/h means you cover 12 kilometers in one hour</li>
                <li>• A speed of 7.5 mph means you run 7.5 miles in one hour</li>
                <li>• A speed of 15 km/h is faster than 10 km/h</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              The Key Difference: Inverse Relationship
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Here's the crucial concept: <strong>pace and speed are inversely related</strong>.
            </p>

            <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500 mb-4">
              <p className="text-stone-800 font-semibold mb-3">What This Means:</p>
              <ul className="space-y-2 text-stone-800">
                <li>• <strong>Faster pace = Lower numbers</strong> (e.g., 4:00 min/km is faster than 6:00 min/km)</li>
                <li>• <strong>Faster speed = Higher numbers</strong> (e.g., 15 km/h is faster than 10 km/h)</li>
              </ul>
            </div>

            <p className="text-stone-800 leading-relaxed mb-4">
              This can feel counterintuitive at first, but think of it this way:
            </p>

            <div className="bg-stone-50 rounded-lg p-6">
              <p className="text-stone-800 mb-4">
                If you're running <strong>faster</strong>, you need <strong>less time</strong> to cover each kilometer 
                (lower pace numbers), but you cover <strong>more distance</strong> per hour (higher speed numbers).
              </p>
              <p className="text-stone-800 italic text-sm">
                Example: 4:00 min/km pace = 15 km/h speed (both represent the same running performance)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Why Do Runners Use Both Metrics?
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Different situations call for different measurements:
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  When Pace is More Useful:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-stone-800 ml-4 text-sm">
                  <li>Planning race strategies and split times</li>
                  <li>Following training plans (most coaches prescribe workouts in pace)</li>
                  <li>Outdoor running with GPS watches (typically display pace)</li>
                  <li>Comparing performance across different race distances</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  When Speed is More Useful:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-stone-800 ml-4 text-sm">
                  <li>Treadmill workouts (treadmills display speed, not pace)</li>
                  <li>Comparing running to other activities (cycling, driving)</li>
                  <li>Quick mental estimates (easier to think "I'm running at 12 km/h")</li>
                  <li>Understanding overall training intensity</li>
                </ul>
              </div>
            </div>

            <p className="text-stone-800 leading-relaxed mt-4">
              Being fluent in both metrics—and able to convert between them—makes you a more versatile and adaptable runner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              How to Convert Pace to Speed
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Converting from pace (min/km or min/mile) to speed (km/h or mph) uses a simple division formula:
            </p>

            <div className="bg-stone-800 text-white rounded-lg p-6 mb-4">
              <p className="text-lg font-semibold mb-4 text-center">Pace → Speed Conversion</p>
              <div className="space-y-2">
                <p className="text-center"><strong>Speed (km/h) = 60 ÷ Pace (min/km)</strong></p>
                <p className="text-center"><strong>Speed (mph) = 60 ÷ Pace (min/mile)</strong></p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">Step-by-Step Examples:</p>
              
              <div className="mb-4">
                <p className="text-stone-800 font-semibold mb-2">Example 1: Convert 5:00 min/km to km/h</p>
                <ol className="list-decimal list-inside space-y-1 text-stone-800 ml-4 text-sm">
                  <li>Pace: 5:00 min/km = 5.0 minutes</li>
                  <li>Apply formula: 60 ÷ 5.0 = 12</li>
                  <li>Result: <strong>12 km/h</strong></li>
                </ol>
              </div>

              <div className="mb-4">
                <p className="text-stone-800 font-semibold mb-2">Example 2: Convert 6:30 min/km to km/h</p>
                <ol className="list-decimal list-inside space-y-1 text-stone-800 ml-4 text-sm">
                  <li>Pace: 6:30 min/km = 6.5 minutes (convert 30 seconds: 30÷60 = 0.5)</li>
                  <li>Apply formula: 60 ÷ 6.5 = 9.23</li>
                  <li>Result: <strong>9.23 km/h</strong></li>
                </ol>
              </div>

              <div>
                <p className="text-stone-800 font-semibold mb-2">Example 3: Convert 8:00 min/mile to mph</p>
                <ol className="list-decimal list-inside space-y-1 text-stone-800 ml-4 text-sm">
                  <li>Pace: 8:00 min/mile = 8.0 minutes</li>
                  <li>Apply formula: 60 ÷ 8.0 = 7.5</li>
                  <li>Result: <strong>7.5 mph</strong></li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              How to Convert Speed to Pace
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Converting from speed (km/h or mph) to pace (min/km or min/mile) uses the same formula in reverse:
            </p>

            <div className="bg-stone-800 text-white rounded-lg p-6 mb-4">
              <p className="text-lg font-semibold mb-4 text-center">Speed → Pace Conversion</p>
              <div className="space-y-2">
                <p className="text-center"><strong>Pace (min/km) = 60 ÷ Speed (km/h)</strong></p>
                <p className="text-center"><strong>Pace (min/mile) = 60 ÷ Speed (mph)</strong></p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">Step-by-Step Examples:</p>
              
              <div className="mb-4">
                <p className="text-stone-800 font-semibold mb-2">Example 1: Convert 12 km/h to min/km</p>
                <ol className="list-decimal list-inside space-y-1 text-stone-800 ml-4 text-sm">
                  <li>Speed: 12 km/h</li>
                  <li>Apply formula: 60 ÷ 12 = 5.0</li>
                  <li>Result: <strong>5:00 min/km</strong></li>
                </ol>
              </div>

              <div className="mb-4">
                <p className="text-stone-800 font-semibold mb-2">Example 2: Convert 10 km/h to min/km</p>
                <ol className="list-decimal list-inside space-y-1 text-stone-800 ml-4 text-sm">
                  <li>Speed: 10 km/h</li>
                  <li>Apply formula: 60 ÷ 10 = 6.0</li>
                  <li>Result: <strong>6:00 min/km</strong></li>
                </ol>
              </div>

              <div>
                <p className="text-stone-800 font-semibold mb-2">Example 3: Convert 13.5 km/h to min/km</p>
                <ol className="list-decimal list-inside space-y-1 text-stone-800 ml-4 text-sm">
                  <li>Speed: 13.5 km/h</li>
                  <li>Apply formula: 60 ÷ 13.5 = 4.44</li>
                  <li>Convert to minutes:seconds: 4.44 = 4:26 (0.44 × 60 = 26 seconds)</li>
                  <li>Result: <strong>4:26 min/km</strong></li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Quick Conversion Reference Table
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Here are the most common pace and speed conversions for quick reference:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Pace (min/km)</th>
                    <th className="p-3 text-left">Speed (km/h)</th>
                    <th className="p-3 text-left">Pace (min/mile)</th>
                    <th className="p-3 text-left">Speed (mph)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">3:00</td>
                    <td className="p-3">20.0</td>
                    <td className="p-3">4:50</td>
                    <td className="p-3">12.4</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">4:00</td>
                    <td className="p-3">15.0</td>
                    <td className="p-3">6:26</td>
                    <td className="p-3">9.3</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">5:00</td>
                    <td className="p-3">12.0</td>
                    <td className="p-3">8:03</td>
                    <td className="p-3">7.5</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">5:30</td>
                    <td className="p-3">10.9</td>
                    <td className="p-3">8:51</td>
                    <td className="p-3">6.8</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">6:00</td>
                    <td className="p-3">10.0</td>
                    <td className="p-3">9:39</td>
                    <td className="p-3">6.2</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">7:00</td>
                    <td className="p-3">8.6</td>
                    <td className="p-3">11:16</td>
                    <td className="p-3">5.3</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">8:00</td>
                    <td className="p-3">7.5</td>
                    <td className="p-3">12:52</td>
                    <td className="p-3">4.7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Converting Between Decimal and Time Format
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              When converting speed to pace, you'll often get a decimal result that needs to be converted to 
              minutes:seconds format.
            </p>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">Conversion Process:</p>
              <ol className="list-decimal list-inside space-y-2 text-stone-800 mb-4">
                <li>The whole number = minutes</li>
                <li>The decimal portion × 60 = seconds</li>
                <li>Combine: minutes:seconds</li>
              </ol>

              <div className="border-t border-stone-200 pt-4">
                <p className="text-stone-800 font-semibold mb-2">Example: Convert 5.75 to time format</p>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Whole number: 5 minutes</li>
                  <li>• Decimal: 0.75 × 60 = 45 seconds</li>
                  <li>• Result: <strong>5:45</strong></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Real-World Scenario: Treadmill Training
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Let's look at a common situation where pace-speed conversion is essential:
            </p>

            <div className="bg-stone-50 rounded-lg p-6">
              <p className="text-stone-800 font-semibold mb-3">Scenario:</p>
              <p className="text-stone-800 mb-4">
                Your training plan calls for 30 minutes at 5:30 min/km pace, but you're running on a treadmill 
                that only displays speed in km/h.
              </p>

              <p className="text-stone-800 font-semibold mb-2">Solution:</p>
              <ol className="list-decimal list-inside space-y-2 text-stone-800 ml-4 mb-4">
                <li>Convert pace to decimal: 5:30 = 5.5 minutes</li>
                <li>Apply conversion formula: 60 ÷ 5.5 = 10.91 km/h</li>
                <li>Set treadmill to approximately 10.9 km/h</li>
                <li>Run for 30 minutes at that speed</li>
              </ol>

              <p className="text-stone-800 text-sm italic">
                Result: You've perfectly matched your outdoor training pace on the treadmill!
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Common Conversion Mistakes to Avoid
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-lg">
                <p className="text-stone-800 font-semibold mb-2">❌ Treating Seconds as Decimals</p>
                <p className="text-stone-800 text-sm mb-2">
                  5:30 min/km is NOT 5.30 minutes—it's 5.50 minutes (30 seconds = 0.5 minutes).
                </p>
                <p className="text-stone-800 text-sm">
                  Always convert seconds by dividing by 60 before calculations.
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-lg">
                <p className="text-stone-800 font-semibold mb-2">❌ Mixing Metric and Imperial</p>
                <p className="text-stone-800 text-sm">
                  Don't convert min/km pace to mph speed (or vice versa) without accounting for the 
                  kilometer-to-mile conversion factor (1.609).
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-lg">
                <p className="text-stone-800 font-semibold mb-2">❌ Forgetting the Inverse Relationship</p>
                <p className="text-stone-800 text-sm">
                  Remember: lower pace numbers = faster running, higher speed numbers = faster running.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Tips for Mastering Both Metrics
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  1. Memorize Your Key Paces/Speeds
                </h3>
                <p className="text-stone-800 text-sm">
                  Know your easy pace, tempo pace, and race paces in both formats. This eliminates the need 
                  for constant conversion during training.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  2. Use the "60 Rule" Mental Shortcut
                </h3>
                <p className="text-stone-800 text-sm">
                  Remember that pace × speed = 60. If you know your pace is 5 min/km, your speed must be 12 km/h 
                  because 5 × 12 = 60.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  3. Practice with Common Numbers
                </h3>
                <p className="text-stone-800 text-sm">
                  Get comfortable with round numbers first (5:00, 6:00, 10 km/h, 12 km/h) before tackling 
                  more complex conversions.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  4. Keep a Conversion Tool Handy
                </h3>
                <p className="text-stone-800 text-sm">
                  Bookmark a reliable pace-speed converter for quick lookups during workout planning or 
                  mid-training adjustments.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Skip the Math: Use Our Instant Converter
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              While understanding the relationship between pace and speed is valuable, you don't need to calculate 
              conversions manually every time.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              Our pace-to-speed converter handles all the math instantly—supporting min/km, min/mile, km/h, and mph. 
              Simply input your value, and get accurate conversions in real-time.
            </p>
            <p className="text-stone-800 leading-relaxed mb-6">
              Perfect for treadmill workouts, training plan adjustments, and understanding your running data across 
              different metrics.
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

