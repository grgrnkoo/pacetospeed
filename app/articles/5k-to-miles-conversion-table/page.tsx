import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5K to Miles Conversion Table (Pace, Time, Distance) - Complete Guide',
  description: 'Complete 5K conversion reference with pace charts, finish time tables, and distance conversions. Plan your 5K race strategy with accurate km to mile calculations and pace targets.',
  keywords: ['5K to miles', '5K conversion', '5K pace chart', '5K finish time', '5K race pace', 'kilometers to miles', '5K training', '5K time goals', 'running pace table', '5K calculator'],
  openGraph: {
    title: '5K to Miles Conversion Table (Pace, Time, Distance) - Complete Guide',
    description: 'Complete 5K conversion reference with pace charts, finish time tables, and distance conversions.',
    type: 'article',
    publishedTime: '2025-06-05T00:00:00.000Z',
    tags: ['5K', 'conversion', 'pace', 'race planning', 'distance', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5K to Miles Conversion Table (Pace, Time, Distance)',
    description: 'Complete 5K conversion reference with pace charts, finish time tables, and distance conversions.',
  },
};

export default function FiveKToMilesConversionPage() {
  return (
    <div className="min-h-screen">
      {/* Article Content */}
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            5K to Miles Conversion Table (Pace, Time, Distance)
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>June 5, 2025</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              The 5K is one of the most popular race distances worldwide, but the mix of metric (5 kilometers) 
              and imperial (3.1 miles) measurements can create confusion when planning pace strategies and 
              setting time goals.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              Whether you're training for your first 5K or chasing a personal record, having quick access to 
              accurate conversion tables for distance, pace, and finish times is essential for effective race planning.
            </p>
            <p className="text-stone-800 leading-relaxed">
              This comprehensive guide provides everything you need: exact distance conversions, pace comparison 
              charts, finish time tables, and practical tips for using these numbers in your training.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              5K Distance: The Exact Conversion
            </h2>
            
            <div className="bg-stone-800 text-white rounded-lg p-6 mb-4">
              <p className="text-lg font-semibold mb-4 text-center">5K Distance Conversion</p>
              <div className="space-y-2 text-center">
                <p className="text-2xl font-bold">5 kilometers = 3.10686 miles</p>
                <p className="text-lg mt-4">Commonly rounded to: <strong>3.1 miles</strong></p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">Also Equals:</p>
              <ul className="space-y-2 text-stone-800">
                <li>• <strong>5,000 meters</strong></li>
                <li>• <strong>16,404 feet</strong></li>
                <li>• <strong>197,000 inches</strong></li>
                <li>• Approximately <strong>6,250 average steps</strong></li>
                <li>• About <strong>12.5 laps</strong> on a standard 400m track</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500 mt-4">
              <p className="text-stone-800 font-semibold mb-2">💡 Why 3.1 Miles?</p>
              <p className="text-stone-800 text-sm">
                The 5K distance became popular because it's exactly 5 kilometers—a round number in the metric 
                system. The imperial equivalent of 3.1 miles is less round, but that's simply the conversion result.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              5K Pace Conversion Chart
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Understanding how pace translates between min/km and min/mile is crucial for race planning:
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
                    <td className="p-3">3:30</td>
                    <td className="p-3">5:38</td>
                    <td className="p-3">17.1</td>
                    <td className="p-3">10.6</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">4:00</td>
                    <td className="p-3">6:26</td>
                    <td className="p-3">15.0</td>
                    <td className="p-3">9.3</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">4:30</td>
                    <td className="p-3">7:14</td>
                    <td className="p-3">13.3</td>
                    <td className="p-3">8.3</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">5:00</td>
                    <td className="p-3">8:03</td>
                    <td className="p-3">12.0</td>
                    <td className="p-3">7.5</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">5:30</td>
                    <td className="p-3">8:51</td>
                    <td className="p-3">10.9</td>
                    <td className="p-3">6.8</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">6:00</td>
                    <td className="p-3">9:39</td>
                    <td className="p-3">10.0</td>
                    <td className="p-3">6.2</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">6:30</td>
                    <td className="p-3">10:27</td>
                    <td className="p-3">9.2</td>
                    <td className="p-3">5.7</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">7:00</td>
                    <td className="p-3">11:16</td>
                    <td className="p-3">8.6</td>
                    <td className="p-3">5.3</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">7:30</td>
                    <td className="p-3">12:04</td>
                    <td className="p-3">8.0</td>
                    <td className="p-3">5.0</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">8:00</td>
                    <td className="p-3">12:52</td>
                    <td className="p-3">7.5</td>
                    <td className="p-3">4.7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              5K Finish Time Table by Pace
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Use this table to determine your 5K finish time based on your target pace:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Pace (min/km)</th>
                    <th className="p-3 text-left">5K Finish Time</th>
                    <th className="p-3 text-left">Pace (min/mile)</th>
                    <th className="p-3 text-left">Performance Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">3:00</td>
                    <td className="p-3">15:00</td>
                    <td className="p-3">4:50</td>
                    <td className="p-3">Elite</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">3:30</td>
                    <td className="p-3">17:30</td>
                    <td className="p-3">5:38</td>
                    <td className="p-3">Elite</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">4:00</td>
                    <td className="p-3">20:00</td>
                    <td className="p-3">6:26</td>
                    <td className="p-3">Advanced</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">4:30</td>
                    <td className="p-3">22:30</td>
                    <td className="p-3">7:14</td>
                    <td className="p-3">Advanced</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">5:00</td>
                    <td className="p-3">25:00</td>
                    <td className="p-3">8:03</td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">5:30</td>
                    <td className="p-3">27:30</td>
                    <td className="p-3">8:51</td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">6:00</td>
                    <td className="p-3">30:00</td>
                    <td className="p-3">9:39</td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">6:30</td>
                    <td className="p-3">32:30</td>
                    <td className="p-3">10:27</td>
                    <td className="p-3">Beginner</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">7:00</td>
                    <td className="p-3">35:00</td>
                    <td className="p-3">11:16</td>
                    <td className="p-3">Beginner</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">7:30</td>
                    <td className="p-3">37:30</td>
                    <td className="p-3">12:04</td>
                    <td className="p-3">Beginner</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">8:00</td>
                    <td className="p-3">40:00</td>
                    <td className="p-3">12:52</td>
                    <td className="p-3">Beginner</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              5K Split Times by Goal Finish Time
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Plan your race strategy with kilometer splits for popular 5K goal times:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Finish Time</th>
                    <th className="p-3 text-left">1K Split</th>
                    <th className="p-3 text-left">2K Split</th>
                    <th className="p-3 text-left">3K Split</th>
                    <th className="p-3 text-left">4K Split</th>
                    <th className="p-3 text-left">5K Split</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">20:00</td>
                    <td className="p-3">4:00</td>
                    <td className="p-3">8:00</td>
                    <td className="p-3">12:00</td>
                    <td className="p-3">16:00</td>
                    <td className="p-3">20:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">22:00</td>
                    <td className="p-3">4:24</td>
                    <td className="p-3">8:48</td>
                    <td className="p-3">13:12</td>
                    <td className="p-3">17:36</td>
                    <td className="p-3">22:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">25:00</td>
                    <td className="p-3">5:00</td>
                    <td className="p-3">10:00</td>
                    <td className="p-3">15:00</td>
                    <td className="p-3">20:00</td>
                    <td className="p-3">25:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">27:00</td>
                    <td className="p-3">5:24</td>
                    <td className="p-3">10:48</td>
                    <td className="p-3">16:12</td>
                    <td className="p-3">21:36</td>
                    <td className="p-3">27:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">30:00</td>
                    <td className="p-3">6:00</td>
                    <td className="p-3">12:00</td>
                    <td className="p-3">18:00</td>
                    <td className="p-3">24:00</td>
                    <td className="p-3">30:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">35:00</td>
                    <td className="p-3">7:00</td>
                    <td className="p-3">14:00</td>
                    <td className="p-3">21:00</td>
                    <td className="p-3">28:00</td>
                    <td className="p-3">35:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">40:00</td>
                    <td className="p-3">8:00</td>
                    <td className="p-3">16:00</td>
                    <td className="p-3">24:00</td>
                    <td className="p-3">32:00</td>
                    <td className="p-3">40:00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <p className="text-stone-800 font-semibold mb-2">💡 Pacing Strategy Tip:</p>
              <p className="text-stone-800 text-sm">
                For best results, aim to run even or negative splits (second half slightly faster than first half). 
                Starting too fast is the most common pacing mistake in 5K races.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              5K Mile Split Times
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              For those who prefer tracking progress in miles, here are the split times at each mile marker:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Goal Time</th>
                    <th className="p-3 text-left">Mile 1</th>
                    <th className="p-3 text-left">Mile 2</th>
                    <th className="p-3 text-left">Mile 3</th>
                    <th className="p-3 text-left">Final 0.1 mi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">18:00</td>
                    <td className="p-3">5:48</td>
                    <td className="p-3">11:36</td>
                    <td className="p-3">17:24</td>
                    <td className="p-3">18:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">20:00</td>
                    <td className="p-3">6:26</td>
                    <td className="p-3">12:52</td>
                    <td className="p-3">19:18</td>
                    <td className="p-3">20:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">25:00</td>
                    <td className="p-3">8:03</td>
                    <td className="p-3">16:06</td>
                    <td className="p-3">24:09</td>
                    <td className="p-3">25:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">30:00</td>
                    <td className="p-3">9:39</td>
                    <td className="p-3">19:18</td>
                    <td className="p-3">28:57</td>
                    <td className="p-3">30:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">35:00</td>
                    <td className="p-3">11:16</td>
                    <td className="p-3">22:32</td>
                    <td className="p-3">33:48</td>
                    <td className="p-3">35:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">40:00</td>
                    <td className="p-3">12:52</td>
                    <td className="p-3">25:44</td>
                    <td className="p-3">38:36</td>
                    <td className="p-3">40:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Common 5K Time Goals and What They Mean
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-20 Minutes (Under 20:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 4:00 min/km or 6:26 min/mile</li>
                  <li>• Level: Advanced competitive runner</li>
                  <li>• Achievable for dedicated runners with consistent training</li>
                  <li>• Elite club or varsity high school standard</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-25 Minutes (Under 25:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 5:00 min/km or 8:03 min/mile</li>
                  <li>• Level: Intermediate to advanced runner</li>
                  <li>• Popular goal for runners with 6-12 months of training</li>
                  <li>• Requires regular speed work and tempo runs</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-30 Minutes (Under 30:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 6:00 min/km or 9:39 min/mile</li>
                  <li>• Level: Intermediate runner</li>
                  <li>• Excellent first-year goal for new runners</li>
                  <li>• Achievable with consistent 3-4 runs per week</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-35 Minutes (Under 35:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 7:00 min/km or 11:16 min/mile</li>
                  <li>• Level: Beginner to intermediate</li>
                  <li>• Realistic first 5K goal for many beginners</li>
                  <li>• Focus on completing distance comfortably</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-40 Minutes (Under 40:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 8:00 min/km or 12:52 min/mile</li>
                  <li>• Level: Beginner runner</li>
                  <li>• Great goal for complete beginners or walkers transitioning to running</li>
                  <li>• Emphasis on finishing rather than speed</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              How to Use These Tables for Training
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  1. Set a Realistic Goal Time
                </h3>
                <p className="text-stone-800 text-sm">
                  Use the performance level column to identify where you currently stand. Your first 5K goal 
                  should be completion-focused; subsequent races can target specific times.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  2. Determine Your Target Pace
                </h3>
                <p className="text-stone-800 text-sm">
                  Once you have a goal time, find the corresponding pace in the conversion table. This is the 
                  pace you need to sustain for the entire 5K distance.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  3. Practice Your Goal Pace in Training
                </h3>
                <p className="text-stone-800 text-sm">
                  Run intervals or tempo runs at your target 5K pace. Start with shorter distances (1K repeats) 
                  and gradually increase until you can hold the pace for 3-4 kilometers.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  4. Memorize Your Split Times
                </h3>
                <p className="text-stone-800 text-sm">
                  Study the split table for your goal time. During the race, check your watch at each kilometer 
                  (or mile) marker to ensure you're on pace.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  5. Adjust for Conditions
                </h3>
                <p className="text-stone-800 text-sm">
                  Hot weather, hills, or strong winds will slow your pace. On challenging courses, aim for your 
                  split times but be prepared to adjust based on effort level rather than pace alone.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  6. Test Your Fitness
                </h3>
                <p className="text-stone-800 text-sm">
                  Run time trials at shorter distances (1K or 1 mile) at race pace to gauge whether your goal 
                  is realistic. If you can't sustain the pace for 1K, a full 5K at that pace isn't achievable yet.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Converting Other Distances to 5K Pace
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              If you know your pace at other distances, here's how it typically relates to 5K pace:
            </p>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">Pace Relationship Guidelines:</p>
              <ul className="space-y-2 text-stone-800 text-sm">
                <li>• <strong>1 Mile pace:</strong> Typically 15-20 seconds faster per km than 5K pace</li>
                <li>• <strong>5K pace:</strong> Base reference</li>
                <li>• <strong>10K pace:</strong> Typically 10-15 seconds slower per km than 5K pace</li>
                <li>• <strong>Half marathon pace:</strong> Typically 30-45 seconds slower per km than 5K pace</li>
                <li>• <strong>Marathon pace:</strong> Typically 60-90 seconds slower per km than 5K pace</li>
              </ul>
              <p className="text-stone-800 text-sm mt-3 italic">
                Note: These are generalizations. Actual pace relationships depend on individual strengths 
                (speed vs endurance) and training focus.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Quick Mental Math for 5K Conversions
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Pace to Finish Time (min/km)
                </h3>
                <p className="text-stone-800 text-sm mb-2">
                  Multiply your pace by 5:
                </p>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• 5:00 min/km × 5 = 25:00 finish</li>
                  <li>• 6:00 min/km × 5 = 30:00 finish</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Pace to Finish Time (min/mile)
                </h3>
                <p className="text-stone-800 text-sm mb-2">
                  Multiply your pace by 3.1:
                </p>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• 8:00 min/mile × 3.1 = 24:48 finish</li>
                  <li>• 10:00 min/mile × 3.1 = 31:00 finish</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Finish Time to Pace (min/km)
                </h3>
                <p className="text-stone-800 text-sm mb-2">
                  Divide your goal time by 5:
                </p>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• 30:00 ÷ 5 = 6:00 min/km needed</li>
                  <li>• 22:30 ÷ 5 = 4:30 min/km needed</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Calculate Your Perfect 5K Race Strategy
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              These conversion tables provide the foundation for smart race planning, but having instant access 
              to pace and time calculations makes training and racing even easier.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              Our pace-to-speed converter lets you quickly calculate target paces, convert between metric and 
              imperial units, and plan your 5K strategy with precision.
            </p>
            <p className="text-stone-800 leading-relaxed mb-6">
              Whether you're aiming for a personal best or tackling your first 5K, accurate pace calculations 
              help you start smart, stay on target, and finish strong.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-stone-800 hover:bg-stone-400 text-white font-medium rounded-lg transition-colors hover:cursor-pointer"
            >
              Plan Your 5K Race Pace →
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
}

