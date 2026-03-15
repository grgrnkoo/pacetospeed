import Link from 'next/link';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10K to Miles: Exact Conversion + Pace Chart (Complete Guide)',
  description: 'Complete 10K conversion guide with exact distance, pace charts, finish time tables, and split strategies. Convert 10K to miles and plan your race with accurate pace calculations.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['10K to miles', '10K conversion', '10K pace chart', '10K finish time', '10K race pace', 'kilometers to miles', '10K training', '10K time goals', '10K calculator', 'running pace 10K'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/10k-to-miles-conversion',
  },
  openGraph: {
    title: '10K to Miles: Exact Conversion + Pace Chart (Complete Guide)',
    description: 'Complete 10K conversion guide with exact distance, pace charts, finish time tables, and split strategies.',
    type: 'article',
    images: [{ url: '/api/og?slug=10k-to-miles-conversion', width: 1200, height: 630, alt: '' }],
    publishedTime: '2025-05-12T00:00:00.000Z',
    tags: ['10K', 'conversion', 'pace', 'race planning', 'distance', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10K to Miles: Exact Conversion + Pace Chart',
    description: 'Complete 10K conversion guide with exact distance, pace charts, and finish time tables.',
  },
};

export default function TenKToMilesConversionPage() {
  return (
    <div className="min-h-screen">
      {/* Article Content */}
      <article className="max-w-3xl mx-auto py-12 px-4"><ArticleStructuredData slug="10k-to-miles-conversion" />
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            10K to Miles: Exact Conversion + Pace Chart
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>May 12, 2025</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              The 10K race sits in a sweet spot—long enough to test endurance but short enough to maintain a 
              strong pace throughout. It's a favorite among runners worldwide, from beginners stepping up from 
              the 5K to experienced athletes chasing personal records.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              Understanding the exact distance conversion, pace requirements, and strategic splits is essential 
              for 10K success. Whether you're training in kilometers or miles, having accurate conversion data 
              helps you plan workouts, set realistic goals, and execute smart race strategies.
            </p>
            <p className="text-stone-800 leading-relaxed">
              This comprehensive guide covers everything you need: exact 10K conversions, detailed pace charts, 
              finish time tables by ability level, and practical strategies for training and racing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              10K Distance: The Exact Conversion
            </h2>
            
            <div className="bg-stone-800 text-white rounded-lg p-6 mb-4">
              <p className="text-lg font-semibold mb-4 text-center">10K Distance Conversion</p>
              <div className="space-y-2 text-center">
                <p className="text-2xl font-bold">10 kilometers = 6.21371 miles</p>
                <p className="text-lg mt-4">Commonly rounded to: <strong>6.2 miles</strong></p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">Also Equals:</p>
              <ul className="space-y-2 text-stone-800">
                <li>• <strong>10,000 meters</strong></li>
                <li>• <strong>32,808 feet</strong></li>
                <li>• Approximately <strong>12,500 average steps</strong></li>
                <li>• Exactly <strong>25 laps</strong> on a standard 400m track</li>
                <li>• <strong>Twice</strong> the distance of a 5K (3.1 miles)</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500 mt-4">
              <p className="text-stone-800 font-semibold mb-2">📊 Race Context:</p>
              <p className="text-stone-800 text-sm">
                The 10K is the most popular road race distance worldwide. It's challenging enough to require 
                training but accessible enough for most recreational runners to complete within 45-75 minutes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              10K Pace Conversion Chart
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Essential pace conversions for 10K race planning and training:
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
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              10K Finish Time Table by Pace
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Determine your 10K finish time based on your sustained pace:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Pace (min/km)</th>
                    <th className="p-3 text-left">10K Finish Time</th>
                    <th className="p-3 text-left">Pace (min/mile)</th>
                    <th className="p-3 text-left">Performance Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">3:00</td>
                    <td className="p-3">30:00</td>
                    <td className="p-3">4:50</td>
                    <td className="p-3">Elite</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">3:30</td>
                    <td className="p-3">35:00</td>
                    <td className="p-3">5:38</td>
                    <td className="p-3">Elite</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">4:00</td>
                    <td className="p-3">40:00</td>
                    <td className="p-3">6:26</td>
                    <td className="p-3">Advanced</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">4:30</td>
                    <td className="p-3">45:00</td>
                    <td className="p-3">7:14</td>
                    <td className="p-3">Advanced</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">5:00</td>
                    <td className="p-3">50:00</td>
                    <td className="p-3">8:03</td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">5:30</td>
                    <td className="p-3">55:00</td>
                    <td className="p-3">8:51</td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">6:00</td>
                    <td className="p-3">60:00</td>
                    <td className="p-3">9:39</td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">6:30</td>
                    <td className="p-3">65:00</td>
                    <td className="p-3">10:27</td>
                    <td className="p-3">Beginner</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">7:00</td>
                    <td className="p-3">70:00</td>
                    <td className="p-3">11:16</td>
                    <td className="p-3">Beginner</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">7:30</td>
                    <td className="p-3">75:00</td>
                    <td className="p-3">12:04</td>
                    <td className="p-3">Beginner</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              10K Split Times by Goal Finish Time
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Plan your pacing strategy with kilometer splits for common 10K goals:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Goal</th>
                    <th className="p-3 text-left">2K</th>
                    <th className="p-3 text-left">4K</th>
                    <th className="p-3 text-left">6K</th>
                    <th className="p-3 text-left">8K</th>
                    <th className="p-3 text-left">10K</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">35:00</td>
                    <td className="p-3">7:00</td>
                    <td className="p-3">14:00</td>
                    <td className="p-3">21:00</td>
                    <td className="p-3">28:00</td>
                    <td className="p-3">35:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">40:00</td>
                    <td className="p-3">8:00</td>
                    <td className="p-3">16:00</td>
                    <td className="p-3">24:00</td>
                    <td className="p-3">32:00</td>
                    <td className="p-3">40:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">45:00</td>
                    <td className="p-3">9:00</td>
                    <td className="p-3">18:00</td>
                    <td className="p-3">27:00</td>
                    <td className="p-3">36:00</td>
                    <td className="p-3">45:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">50:00</td>
                    <td className="p-3">10:00</td>
                    <td className="p-3">20:00</td>
                    <td className="p-3">30:00</td>
                    <td className="p-3">40:00</td>
                    <td className="p-3">50:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">55:00</td>
                    <td className="p-3">11:00</td>
                    <td className="p-3">22:00</td>
                    <td className="p-3">33:00</td>
                    <td className="p-3">44:00</td>
                    <td className="p-3">55:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">60:00</td>
                    <td className="p-3">12:00</td>
                    <td className="p-3">24:00</td>
                    <td className="p-3">36:00</td>
                    <td className="p-3">48:00</td>
                    <td className="p-3">60:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">65:00</td>
                    <td className="p-3">13:00</td>
                    <td className="p-3">26:00</td>
                    <td className="p-3">39:00</td>
                    <td className="p-3">52:00</td>
                    <td className="p-3">65:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">70:00</td>
                    <td className="p-3">14:00</td>
                    <td className="p-3">28:00</td>
                    <td className="p-3">42:00</td>
                    <td className="p-3">56:00</td>
                    <td className="p-3">70:00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <p className="text-stone-800 font-semibold mb-2">🎯 Pacing Strategy:</p>
              <p className="text-stone-800 text-sm">
                Most runners perform best with even pacing throughout the 10K. Advanced runners may try a 
                negative split strategy (second half 30-60 seconds faster than first half), but this requires 
                excellent fitness and restraint early on.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              10K Mile Split Times
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              For runners tracking progress in miles, here are split times at each mile marker:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Goal Time</th>
                    <th className="p-3 text-left">Mile 1</th>
                    <th className="p-3 text-left">Mile 2</th>
                    <th className="p-3 text-left">Mile 3</th>
                    <th className="p-3 text-left">Mile 4</th>
                    <th className="p-3 text-left">Mile 5</th>
                    <th className="p-3 text-left">Mile 6</th>
                    <th className="p-3 text-left">Final 0.2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">40:00</td>
                    <td className="p-3">6:26</td>
                    <td className="p-3">12:52</td>
                    <td className="p-3">19:18</td>
                    <td className="p-3">25:44</td>
                    <td className="p-3">32:10</td>
                    <td className="p-3">38:36</td>
                    <td className="p-3">40:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">45:00</td>
                    <td className="p-3">7:14</td>
                    <td className="p-3">14:28</td>
                    <td className="p-3">21:42</td>
                    <td className="p-3">28:56</td>
                    <td className="p-3">36:10</td>
                    <td className="p-3">43:24</td>
                    <td className="p-3">45:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">50:00</td>
                    <td className="p-3">8:03</td>
                    <td className="p-3">16:06</td>
                    <td className="p-3">24:09</td>
                    <td className="p-3">32:12</td>
                    <td className="p-3">40:15</td>
                    <td className="p-3">48:18</td>
                    <td className="p-3">50:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">55:00</td>
                    <td className="p-3">8:51</td>
                    <td className="p-3">17:42</td>
                    <td className="p-3">26:33</td>
                    <td className="p-3">35:24</td>
                    <td className="p-3">44:15</td>
                    <td className="p-3">53:06</td>
                    <td className="p-3">55:00</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">60:00</td>
                    <td className="p-3">9:39</td>
                    <td className="p-3">19:18</td>
                    <td className="p-3">28:57</td>
                    <td className="p-3">38:36</td>
                    <td className="p-3">48:15</td>
                    <td className="p-3">57:54</td>
                    <td className="p-3">60:00</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">70:00</td>
                    <td className="p-3">11:16</td>
                    <td className="p-3">22:32</td>
                    <td className="p-3">33:48</td>
                    <td className="p-3">45:04</td>
                    <td className="p-3">56:20</td>
                    <td className="p-3">67:36</td>
                    <td className="p-3">70:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Common 10K Time Goals Explained
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-35 Minutes (Under 35:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 3:30 min/km or 5:38 min/mile</li>
                  <li>• Level: Elite competitive runner</li>
                  <li>• Equivalent to approximately 18-minute 5K fitness</li>
                  <li>• National-level or collegiate championship standard</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-40 Minutes (Under 40:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 4:00 min/km or 6:26 min/mile</li>
                  <li>• Level: Advanced runner</li>
                  <li>• Very competitive in most age-group categories</li>
                  <li>• Typically requires 40-50 miles per week training</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-45 Minutes (Under 45:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 4:30 min/km or 7:14 min/mile</li>
                  <li>• Level: Advanced recreational runner</li>
                  <li>• Popular goal for experienced runners</li>
                  <li>• Achievable with consistent 30-40 miles per week</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-50 Minutes (Under 50:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 5:00 min/km or 8:03 min/mile</li>
                  <li>• Level: Intermediate runner</li>
                  <li>• Excellent goal for runners with 1-2 years of training</li>
                  <li>• Requires tempo runs and interval training</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-60 Minutes (Under 60:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 6:00 min/km or 9:39 min/mile</li>
                  <li>• Level: Intermediate runner</li>
                  <li>• Realistic goal for consistent recreational runners</li>
                  <li>• Focus on building aerobic base and endurance</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-70 Minutes (Under 70:00)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 7:00 min/km or 11:16 min/mile</li>
                  <li>• Level: Beginner to intermediate</li>
                  <li>• Great first 10K goal for newer runners</li>
                  <li>• Emphasis on completing distance comfortably</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              10K vs 5K: Pace Comparison
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Understanding how your paces relate across distances helps with race planning:
            </p>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800 mb-4">
              <p className="text-stone-800 font-semibold mb-3">General Relationship:</p>
              <ul className="space-y-2 text-stone-800 text-sm">
                <li>• Your 10K pace is typically <strong>10-20 seconds per km slower</strong> than your 5K pace</li>
                <li>• Your 10K pace is typically <strong>15-30 seconds per mile slower</strong> than your 5K pace</li>
              </ul>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">5K Time</th>
                    <th className="p-3 text-left">Predicted 10K Time</th>
                    <th className="p-3 text-left">5K Pace</th>
                    <th className="p-3 text-left">10K Pace</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">18:00</td>
                    <td className="p-3">37:30</td>
                    <td className="p-3">3:36/km</td>
                    <td className="p-3">3:45/km</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">20:00</td>
                    <td className="p-3">41:30</td>
                    <td className="p-3">4:00/km</td>
                    <td className="p-3">4:09/km</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">22:00</td>
                    <td className="p-3">45:30</td>
                    <td className="p-3">4:24/km</td>
                    <td className="p-3">4:33/km</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">25:00</td>
                    <td className="p-3">52:00</td>
                    <td className="p-3">5:00/km</td>
                    <td className="p-3">5:12/km</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">28:00</td>
                    <td className="p-3">58:00</td>
                    <td className="p-3">5:36/km</td>
                    <td className="p-3">5:48/km</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">30:00</td>
                    <td className="p-3">62:30</td>
                    <td className="p-3">6:00/km</td>
                    <td className="p-3">6:15/km</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Training Paces for 10K Success
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Build your 10K fitness with these training zones relative to your goal race pace:
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Easy Runs (60-70% effort)
                </h3>
                <p className="text-stone-800 text-sm">
                  <strong>Pace:</strong> 60-90 seconds per km slower than 10K race pace
                  <br />
                  <strong>Purpose:</strong> Build aerobic base, active recovery
                  <br />
                  <strong>Volume:</strong> 60-70% of weekly mileage
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Tempo Runs (80-85% effort)
                </h3>
                <p className="text-stone-800 text-sm">
                  <strong>Pace:</strong> 15-30 seconds per km slower than 10K race pace
                  <br />
                  <strong>Purpose:</strong> Improve lactate threshold
                  <br />
                  <strong>Distance:</strong> 4-8 km sustained effort
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  10K Race Pace Intervals (90-95% effort)
                </h3>
                <p className="text-stone-800 text-sm">
                  <strong>Pace:</strong> Exactly your goal 10K race pace
                  <br />
                  <strong>Purpose:</strong> Practice race pace, build specific endurance
                  <br />
                  <strong>Examples:</strong> 5 × 2K, 3 × 3K, 2 × 5K with recovery
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  5K Pace Intervals (95-100% effort)
                </h3>
                <p className="text-stone-800 text-sm">
                  <strong>Pace:</strong> 10-20 seconds per km faster than 10K race pace
                  <br />
                  <strong>Purpose:</strong> Build speed and VO2 max
                  <br />
                  <strong>Examples:</strong> 8 × 1K, 5 × 1600m, 12 × 800m with recovery
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Race Day Strategy Tips
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  1. Start Conservatively
                </h3>
                <p className="text-stone-800 text-sm">
                  Run the first kilometer 5-10 seconds slower than goal pace. The adrenaline and fast start 
                  can trick you into going out too fast, leading to a painful second half.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  2. Settle Into Rhythm by 2K
                </h3>
                <p className="text-stone-800 text-sm">
                  By the 2K mark, you should have settled into your goal pace. Check your splits and make 
                  small adjustments rather than drastic pace changes.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  3. The Middle 5K is Mental
                </h3>
                <p className="text-stone-800 text-sm">
                  Kilometers 3-7 are where mental toughness matters. Stay relaxed, focus on form, and 
                  trust your training. Don't panic if pace feels hard—it's supposed to.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  4. Push the Last 2K
                </h3>
                <p className="text-stone-800 text-sm">
                  With 2 kilometers remaining, gradually increase effort. At 1K to go, give everything 
                  you have left. A strong finish indicates good pacing.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  5. Practice Negative Splits
                </h3>
                <p className="text-stone-800 text-sm">
                  Aim for your second 5K to be 30-60 seconds faster than your first 5K. This strategy 
                  leads to better overall times and a more enjoyable race experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Quick Mental Math for 10K
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Pace to Finish Time (min/km)
                </h3>
                <p className="text-stone-800 text-sm">
                  Multiply your pace by 10 for finish time in minutes:
                </p>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm mt-2">
                  <li>• 5:00 min/km × 10 = 50:00 finish</li>
                  <li>• 4:30 min/km × 10 = 45:00 finish</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Pace to Finish Time (min/mile)
                </h3>
                <p className="text-stone-800 text-sm">
                  Multiply your pace by 6.2:
                </p>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm mt-2">
                  <li>• 8:00 min/mile × 6.2 = 49:36 finish</li>
                  <li>• 9:00 min/mile × 6.2 = 55:48 finish</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Finish Time to Pace (min/km)
                </h3>
                <p className="text-stone-800 text-sm">
                  Divide your goal time by 10:
                </p>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm mt-2">
                  <li>• 60:00 ÷ 10 = 6:00 min/km needed</li>
                  <li>• 45:00 ÷ 10 = 4:30 min/km needed</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Perfect Your 10K Race Planning
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              These conversion tables and pace charts provide the foundation for 10K success, but having 
              instant access to customized calculations makes training and race planning even more effective.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              Our pace-to-speed converter helps you calculate exact target paces, convert between metric and 
              imperial units, and plan splits for any 10K goal time.
            </p>
            <p className="text-stone-800 leading-relaxed mb-6">
              Whether you're chasing a personal record or tackling your first 10K, precise pace planning helps 
              you train smarter, start wisely, and finish strong.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-stone-800 hover:bg-stone-400 text-white font-medium rounded-lg transition-colors hover:cursor-pointer"
            >
              Calculate Your 10K Pace →
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
}

