import Link from 'next/link';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Half Marathon Pace Chart and Distance Explained (Complete Guide)',
  description: 'Complete half marathon guide with exact distance conversion, comprehensive pace charts, finish time tables, split strategies, and training tips for 13.1 miles.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['half marathon pace', 'half marathon distance', '13.1 miles', 'half marathon pace chart', 'half marathon training', '21k pace', 'half marathon finish time', 'half marathon splits', 'half marathon calculator'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/half-marathon-pace-chart',
  },
  openGraph: {
    title: 'Half Marathon Pace Chart and Distance Explained (Complete Guide)',
    description: 'Complete half marathon guide with exact distance, pace charts, finish time tables, and split strategies.',
    type: 'article',
    images: [{ url: '/api/og?slug=half-marathon-pace-chart', width: 1200, height: 630, alt: '' }],
    publishedTime: '2025-04-20T00:00:00.000Z',
    tags: ['half marathon', '13.1 miles', 'pace', 'race planning', 'distance', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Half Marathon Pace Chart and Distance Explained',
    description: 'Complete half marathon guide with exact distance, pace charts, and finish time tables.',
  },
};

export default function HalfMarathonPaceChartPage() {
  return (
    <div className="min-h-screen">
      {/* Article Content */}
      <article className="max-w-3xl mx-auto py-12 px-4"><ArticleStructuredData slug="half-marathon-pace-chart" />
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Half Marathon Pace Chart and Distance Explained
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>April 20, 2025</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              The half marathon is arguably the perfect race distance—long enough to be a genuine endurance 
              challenge but not so demanding that it requires months of recovery. At 13.1 miles, it strikes 
              an ideal balance between accessibility and accomplishment.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              Whether you're training for your first half marathon or chasing a personal best, understanding 
              exact distances, target paces, and strategic splits is essential for success. The half marathon 
              requires smart pacing—start too fast and you'll struggle in the final miles; too conservative 
              and you'll leave time on the table.
            </p>
            <p className="text-stone-800 leading-relaxed">
              This comprehensive guide provides everything you need: exact distance conversions, detailed pace 
              charts for all ability levels, finish time tables, mile-by-mile splits, and race-day strategies 
              from experienced half marathoners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Half Marathon Distance: The Exact Conversion
            </h2>
            
            <div className="bg-stone-800 text-white rounded-lg p-6 mb-4">
              <p className="text-lg font-semibold mb-4 text-center">Half Marathon Distance</p>
              <div className="space-y-2 text-center">
                <p className="text-2xl font-bold">21.0975 kilometers = 13.1094 miles</p>
                <p className="text-lg mt-4">Commonly called: <strong>13.1 miles</strong> or <strong>21.1K</strong></p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">Also Equals:</p>
              <ul className="space-y-2 text-stone-800">
                <li>• <strong>21,097.5 meters</strong></li>
                <li>• <strong>69,206 feet</strong></li>
                <li>• Approximately <strong>26,400 average steps</strong></li>
                <li>• About <strong>52.75 laps</strong> on a standard 400m track</li>
                <li>• Exactly <strong>half</strong> of a full marathon (42.195K / 26.2 miles)</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500 mt-4">
              <p className="text-stone-800 font-semibold mb-2">🏃 Why 13.1 Miles?</p>
              <p className="text-stone-800 text-sm">
                The half marathon gained popularity as runners wanted a challenging distance between the 10K 
                and full marathon. Being exactly half a marathon distance makes it mathematically clean and 
                mentally manageable for those considering stepping up to 26.2 miles.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Half Marathon Pace Conversion Chart
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Essential pace conversions for half marathon planning and training:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Pace (min/km)</th>
                    <th className="p-3 text-left">Pace (min/mile)</th>
                    <th className="p-3 text-left">Speed (km/h)</th>
                    <th className="p-3 text-left">Speed (mph)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">4:00</td>
                    <td className="p-3">6:26</td>
                    <td className="p-3">15.0</td>
                    <td className="p-3">9.3</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">4:30</td>
                    <td className="p-3">7:14</td>
                    <td className="p-3">13.3</td>
                    <td className="p-3">8.3</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">5:00</td>
                    <td className="p-3">8:03</td>
                    <td className="p-3">12.0</td>
                    <td className="p-3">7.5</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">5:30</td>
                    <td className="p-3">8:51</td>
                    <td className="p-3">10.9</td>
                    <td className="p-3">6.8</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">6:00</td>
                    <td className="p-3">9:39</td>
                    <td className="p-3">10.0</td>
                    <td className="p-3">6.2</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">6:30</td>
                    <td className="p-3">10:27</td>
                    <td className="p-3">9.2</td>
                    <td className="p-3">5.7</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">7:00</td>
                    <td className="p-3">11:16</td>
                    <td className="p-3">8.6</td>
                    <td className="p-3">5.3</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">7:30</td>
                    <td className="p-3">12:04</td>
                    <td className="p-3">8.0</td>
                    <td className="p-3">5.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Half Marathon Finish Time Table
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Determine your half marathon finish time based on sustained pace:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Pace (min/km)</th>
                    <th className="p-3 text-left">Half Marathon Time</th>
                    <th className="p-3 text-left">Pace (min/mile)</th>
                    <th className="p-3 text-left">Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">3:30</td>
                    <td className="p-3">1:13:51</td>
                    <td className="p-3">5:38</td>
                    <td className="p-3">Elite</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">4:00</td>
                    <td className="p-3">1:24:23</td>
                    <td className="p-3">6:26</td>
                    <td className="p-3">Advanced</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">4:30</td>
                    <td className="p-3">1:34:56</td>
                    <td className="p-3">7:14</td>
                    <td className="p-3">Advanced</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">5:00</td>
                    <td className="p-3">1:45:29</td>
                    <td className="p-3">8:03</td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">5:30</td>
                    <td className="p-3">1:56:02</td>
                    <td className="p-3">8:51</td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">6:00</td>
                    <td className="p-3">2:06:35</td>
                    <td className="p-3">9:39</td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">6:30</td>
                    <td className="p-3">2:17:08</td>
                    <td className="p-3">10:27</td>
                    <td className="p-3">Beginner</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">7:00</td>
                    <td className="p-3">2:27:41</td>
                    <td className="p-3">11:16</td>
                    <td className="p-3">Beginner</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">7:30</td>
                    <td className="p-3">2:38:14</td>
                    <td className="p-3">12:04</td>
                    <td className="p-3">Beginner</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Half Marathon Split Times (5K Intervals)
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Track your progress with 5K split times for popular half marathon goals:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Goal Time</th>
                    <th className="p-3 text-left">5K</th>
                    <th className="p-3 text-left">10K</th>
                    <th className="p-3 text-left">15K</th>
                    <th className="p-3 text-left">20K</th>
                    <th className="p-3 text-left">21.1K</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">1:30:00</td>
                    <td className="p-3">21:19</td>
                    <td className="p-3">42:38</td>
                    <td className="p-3">63:57</td>
                    <td className="p-3">85:16</td>
                    <td className="p-3">90:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">1:45:00</td>
                    <td className="p-3">24:52</td>
                    <td className="p-3">49:44</td>
                    <td className="p-3">74:36</td>
                    <td className="p-3">99:28</td>
                    <td className="p-3">1:45:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">2:00:00</td>
                    <td className="p-3">28:26</td>
                    <td className="p-3">56:52</td>
                    <td className="p-3">1:25:18</td>
                    <td className="p-3">1:53:44</td>
                    <td className="p-3">2:00:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">2:15:00</td>
                    <td className="p-3">31:59</td>
                    <td className="p-3">1:03:58</td>
                    <td className="p-3">1:35:57</td>
                    <td className="p-3">2:07:56</td>
                    <td className="p-3">2:15:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">2:30:00</td>
                    <td className="p-3">35:33</td>
                    <td className="p-3">1:11:06</td>
                    <td className="p-3">1:46:39</td>
                    <td className="p-3">2:22:12</td>
                    <td className="p-3">2:30:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Half Marathon Mile-by-Mile Splits
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Detailed mile splits for common half marathon goal times:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-2 text-left">Goal</th>
                    <th className="p-2">Mile 3</th>
                    <th className="p-2">Mile 6</th>
                    <th className="p-2">Mile 9</th>
                    <th className="p-2">Mile 10</th>
                    <th className="p-2">Mile 11</th>
                    <th className="p-2">Mile 12</th>
                    <th className="p-2">Mile 13</th>
                    <th className="p-2">Finish</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-2 font-semibold">1:30:00</td>
                    <td className="p-2">20:33</td>
                    <td className="p-2">41:06</td>
                    <td className="p-2">1:01:39</td>
                    <td className="p-2">1:08:30</td>
                    <td className="p-2">1:15:21</td>
                    <td className="p-2">1:22:12</td>
                    <td className="p-2">1:29:03</td>
                    <td className="p-2">1:30:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-2 font-semibold">1:45:00</td>
                    <td className="p-2">24:09</td>
                    <td className="p-2">48:18</td>
                    <td className="p-2">1:12:27</td>
                    <td className="p-2">1:20:30</td>
                    <td className="p-2">1:28:33</td>
                    <td className="p-2">1:36:36</td>
                    <td className="p-2">1:44:39</td>
                    <td className="p-2">1:45:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-2 font-semibold">2:00:00</td>
                    <td className="p-2">27:27</td>
                    <td className="p-2">54:54</td>
                    <td className="p-2">1:22:21</td>
                    <td className="p-2">1:31:30</td>
                    <td className="p-2">1:40:39</td>
                    <td className="p-2">1:49:48</td>
                    <td className="p-2">1:58:57</td>
                    <td className="p-2">2:00:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-2 font-semibold">2:15:00</td>
                    <td className="p-2">30:51</td>
                    <td className="p-2">1:01:42</td>
                    <td className="p-2">1:32:33</td>
                    <td className="p-2">1:42:45</td>
                    <td className="p-2">1:52:57</td>
                    <td className="p-2">2:03:09</td>
                    <td className="p-2">2:13:21</td>
                    <td className="p-2">2:15:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-2 font-semibold">2:30:00</td>
                    <td className="p-2">34:18</td>
                    <td className="p-2">1:08:36</td>
                    <td className="p-2">1:42:54</td>
                    <td className="p-2">1:54:00</td>
                    <td className="p-2">2:05:06</td>
                    <td className="p-2">2:16:12</td>
                    <td className="p-2">2:27:18</td>
                    <td className="p-2">2:30:00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-800 text-sm mt-4 italic">
              Note: These are cumulative times showing when you should reach each mile marker if maintaining even pace.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Common Half Marathon Time Goals
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-1:30 (Under 1:30:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 4:16 min/km or 6:52 min/mile</li>
                  <li>• Level: Elite/advanced competitive runner</li>
                  <li>• Typically requires 50-70 miles per week training</li>
                  <li>• Age-group podium potential in most races</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-1:45 (Under 1:45:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 4:58 min/km or 8:00 min/mile</li>
                  <li>• Level: Advanced runner</li>
                  <li>• Popular goal for experienced runners</li>
                  <li>• Requires consistent tempo and interval training</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-2:00 (Under 2:00:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 5:41 min/km or 9:09 min/mile</li>
                  <li>• Level: Intermediate to advanced</li>
                  <li>• Achievable with 3-4 months dedicated training</li>
                  <li>• Popular "milestone" goal for many runners</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-2:15 (Under 2:15:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 6:23 min/km or 10:16 min/mile</li>
                  <li>• Level: Intermediate runner</li>
                  <li>• Great goal for first-time half marathoners with running experience</li>
                  <li>• Focus on consistent long runs and building base</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-2:30 (Under 2:30:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 7:06 min/km or 11:26 min/mile</li>
                  <li>• Level: Beginner to intermediate</li>
                  <li>• Excellent first half marathon goal</li>
                  <li>• Emphasize completing distance comfortably</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Just Finish (2:30:00+)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Pace: 7:00+ min/km or 11:30+ min/mile</li>
                  <li>• Level: Beginner runner or walker</li>
                  <li>• Goal is completion, not time</li>
                  <li>• Focus on building up long run distance gradually</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Training Paces for Half Marathon Success
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Build your half marathon fitness with these training zones relative to goal race pace:
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Easy Runs (60-70% effort)
                </h3>
                <p className="text-stone-800 text-sm">
                  <strong>Pace:</strong> 60-90 seconds per km slower than half marathon race pace
                  <br />
                  <strong>Purpose:</strong> Build aerobic base, recover between hard workouts
                  <br />
                  <strong>Volume:</strong> 70-80% of weekly mileage
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Long Runs (65-75% effort)
                </h3>
                <p className="text-stone-800 text-sm">
                  <strong>Pace:</strong> 45-75 seconds per km slower than half marathon pace
                  <br />
                  <strong>Purpose:</strong> Build endurance, mental toughness
                  <br />
                  <strong>Distance:</strong> Build up to 16-18 km (10-11 miles)
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Tempo Runs (80-85% effort)
                </h3>
                <p className="text-stone-800 text-sm">
                  <strong>Pace:</strong> 20-30 seconds per km slower than half marathon pace
                  <br />
                  <strong>Purpose:</strong> Improve lactate threshold
                  <br />
                  <strong>Distance:</strong> 6-10 km sustained effort
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Half Marathon Pace Runs (85-90% effort)
                </h3>
                <p className="text-stone-800 text-sm">
                  <strong>Pace:</strong> Exactly your goal half marathon race pace
                  <br />
                  <strong>Purpose:</strong> Practice race pace, build specific endurance
                  <br />
                  <strong>Examples:</strong> 3 × 5K, 2 × 8K, 1 × 15K at race pace
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  10K Pace Intervals (90-95% effort)
                </h3>
                <p className="text-stone-800 text-sm">
                  <strong>Pace:</strong> 15-20 seconds per km faster than half marathon pace
                  <br />
                  <strong>Purpose:</strong> Build speed endurance and VO2 max
                  <br />
                  <strong>Examples:</strong> 6 × 1600m, 5 × 2K, 8 × 1K with recovery
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Half Marathon Race Strategy
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  1. The First 5K: Controlled Start
                </h3>
                <p className="text-stone-800 text-sm">
                  Start 5-10 seconds per km slower than goal pace. With race-day adrenaline, you'll feel like 
                  you're going slow, but this restraint pays huge dividends in the final miles. The race doesn't 
                  really start until 15K.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  2. Miles 4-9: Settle Into Rhythm
                </h3>
                <p className="text-stone-800 text-sm">
                  This is where you lock into your goal pace. Focus on staying relaxed, maintaining good form, 
                  and running efficiently. Don't surge to pass unless necessary. Steady effort beats erratic pacing.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  3. Miles 10-11: The Mental Battle
                </h3>
                <p className="text-stone-800 text-sm">
                  These miles are tough—you're tired but still have 3+ miles to go. This is where training and 
                  mental preparation matter most. Break it into smaller chunks: "Just get to mile 11, then mile 12..."
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  4. Mile 12-13: Dig Deep
                </h3>
                <p className="text-stone-800 text-sm">
                  With 2 miles left, gradually increase effort. At the mile 13 marker, give everything you have. 
                  If you finish feeling like you could run another mile, you paced conservatively (not a bad thing 
                  for your first time).
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  5. The Final 0.1 Mile: Empty the Tank
                </h3>
                <p className="text-stone-800 text-sm">
                  When you see the finish line, sprint. You've trained months for this—leave nothing on the course. 
                  The final kick won't save your time if pacing was off, but it's a satisfying way to finish strong.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Half Marathon vs Other Distances
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Understanding pace relationships helps with goal setting:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">10K Time</th>
                    <th className="p-3 text-left">Predicted Half</th>
                    <th className="p-3 text-left">Predicted Marathon</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">40:00</td>
                    <td className="p-3">1:27:00</td>
                    <td className="p-3">3:00:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">45:00</td>
                    <td className="p-3">1:38:00</td>
                    <td className="p-3">3:23:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">50:00</td>
                    <td className="p-3">1:49:00</td>
                    <td className="p-3">3:46:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">55:00</td>
                    <td className="p-3">2:00:00</td>
                    <td className="p-3">4:08:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">60:00</td>
                    <td className="p-3">2:11:00</td>
                    <td className="p-3">4:31:00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-800 text-sm mt-4 italic">
              Note: These are general predictions. Actual performance depends on training specificity, endurance 
              base, and race conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Common Half Marathon Pacing Mistakes
            </h2>

            <div className="space-y-3">
              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-lg">
                <p className="text-stone-800 font-semibold mb-2">❌ Starting Too Fast</p>
                <p className="text-stone-800 text-sm">
                  Running the first 3 miles 15-20 seconds per mile faster than goal pace. This feels easy 
                  early but leads to suffering after mile 10. Patience in the first 5K pays massive dividends.
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-lg">
                <p className="text-stone-800 font-semibold mb-2">❌ Ignoring Race Conditions</p>
                <p className="text-stone-800 text-sm">
                  Sticking to pace targets in 85°F heat or strong headwinds. Adjust goals based on conditions—
                  effort matters more than hitting exact splits when weather isn't cooperating.
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-lg">
                <p className="text-stone-800 font-semibold mb-2">❌ Not Practicing Race Pace</p>
                <p className="text-stone-800 text-sm">
                  Never running at goal pace during training. You should do at least 3-4 workouts at race pace 
                  before the event so your body knows what to expect.
                </p>
              </div>

              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-lg">
                <p className="text-stone-800 font-semibold mb-2">❌ Unrealistic Goal Setting</p>
                <p className="text-stone-800 text-sm">
                  Targeting a time that requires pace you can't sustain for 10K. If you can't run your goal 
                  half marathon pace for 10K in training, the full 21.1K at that pace isn't realistic yet.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Plan Your Perfect Half Marathon
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Success in the half marathon comes down to smart pacing and proper preparation. These charts 
              provide the foundation, but having quick access to customized pace calculations makes race 
              planning even more effective.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              Our pace-to-speed converter helps you calculate exact target paces, convert between metric and 
              imperial units, and plan splits for any half marathon goal time.
            </p>
            <p className="text-stone-800 leading-relaxed mb-6">
              Whether you're chasing a PR or completing your first 13.1 miles, accurate pace planning helps 
              you train smarter, start wisely, and finish strong.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-stone-800 hover:bg-stone-400 text-white font-medium rounded-lg transition-colors hover:cursor-pointer"
            >
              Calculate Your Half Marathon Pace →
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
}

