import Link from 'next/link';
import ArticleStructuredData from '@/app/components/ArticleStructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marathon Distance Explained: Why 42.195 km? (History + Conversion)',
  description: 'Discover why marathons are exactly 42.195 kilometers (26.2 miles), explore the fascinating history behind this iconic distance, and get comprehensive pace charts for marathon training.',
  authors: [{ name: 'Pace to Speed' }],
  keywords: ['marathon distance', '42.195 km', '26.2 miles', 'why marathon distance', 'marathon history', 'marathon origin', 'marathon pace chart', 'marathon training', 'marathon conversion', 'marathon facts'],
  alternates: {
    canonical: 'https://pacetospeed.xyz/articles/marathon-distance-explained',
  },
  openGraph: {
    title: 'Marathon Distance Explained: Why 42.195 km? (History + Conversion)',
    description: 'Discover why marathons are exactly 42.195 kilometers and the fascinating history behind this iconic distance.',
    type: 'article',
    images: [{ url: '/api/og?slug=marathon-distance-explained', width: 1200, height: 630, alt: '' }],
    publishedTime: '2025-03-08T00:00:00.000Z',
    tags: ['marathon', 'distance', 'history', 'running', '42.195km', '26.2 miles'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marathon Distance Explained: Why 42.195 km?',
    description: 'Discover why marathons are exactly 42.195 kilometers and the fascinating history behind this distance.',
  },
};

export default function MarathonDistanceExplainedPage() {
  return (
    <div className="w-full">
      {/* Article Content */}
      <article className="max-w-3xl mx-auto py-8 sm:py-12 px-4"><ArticleStructuredData slug="marathon-distance-explained" />
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Marathon Distance Explained: Why 42.195 km?
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 8, 2025</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 space-y-4 sm:space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Of all running distances, the marathon holds a special place in athletic culture. The number 
              26.2 miles (or 42.195 kilometers) is instantly recognizable to runners and non-runners alike—a 
              symbol of human endurance and determination.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              But have you ever wondered why marathons are exactly this distance? Why not a round number like 
              25 miles or 40 kilometers? The answer involves ancient Greek legends, British royalty, and an 
              Olympic decision that standardized the distance forever.
            </p>
            <p className="text-stone-800 leading-relaxed">
              Let's explore the fascinating history behind the marathon distance, its exact measurements, and 
              what this iconic distance means for runners today.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              The Exact Marathon Distance
            </h2>
            
            <div className="bg-stone-800 text-white rounded-lg p-4 sm:p-6 mb-4">
              <p className="text-lg font-semibold mb-4 text-center">Official Marathon Distance</p>
              <div className="space-y-2 text-center">
                <p className="text-2xl font-bold">42.195 kilometers</p>
                <p className="text-2xl font-bold">26 miles 385 yards</p>
                <p className="text-xl mt-4">Commonly: <strong>26.2 miles</strong></p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg p-4 sm:p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">Exact Measurements:</p>
              <ul className="space-y-2 text-stone-800">
                <li>• <strong>42,195 meters</strong> (42.195 km)</li>
                <li>• <strong>26 miles and 385 yards</strong> (26.21875 miles)</li>
                <li>• <strong>138,435 feet</strong></li>
                <li>• <strong>1,661,220 inches</strong></li>
                <li>• Approximately <strong>53,000 average steps</strong></li>
                <li>• <strong>105.5 laps</strong> on a standard 400m track</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              The Ancient Origin: The Legend of Pheidippides
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              The marathon's origin story dates back to 490 BCE and the Battle of Marathon in ancient Greece.
            </p>

            <div className="bg-stone-50 rounded-lg p-4 sm:p-6 mb-4">
              <p className="text-stone-800 font-semibold mb-3">The Legend:</p>
              <p className="text-stone-800 mb-3">
                According to historical accounts, after the Athenians defeated the Persian army at Marathon, 
                a messenger named Pheidippides ran from the battlefield to Athens to announce the victory. 
                Upon arriving and delivering the message "Nenikēkamen" ("We have won"), he collapsed and died 
                from exhaustion.
              </p>
              <p className="text-stone-800 text-sm italic">
                The distance from Marathon to Athens: approximately 40 kilometers (25 miles)
              </p>
            </div>

            <div className="bg-amber-50 rounded-lg p-3 sm:p-4 border-l-4 border-amber-500">
              <p className="text-stone-800 font-semibold mb-2">📜 Historical Note:</p>
              <p className="text-stone-800 text-sm">
                While this story is legendary, historians debate its accuracy. Some accounts suggest Pheidippides 
                actually ran a much longer distance (about 240 km) from Athens to Sparta to request aid before 
                the battle, then returned. Regardless, the Marathon-to-Athens run became the inspiration for the 
                modern marathon race.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              The First Modern Olympic Marathon (1896)
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              When the modern Olympic Games were revived in Athens in 1896, organizers wanted to include a 
              race honoring the legendary run of Pheidippides.
            </p>

            <div className="bg-stone-50 rounded-lg p-4 sm:p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">1896 Olympic Marathon:</p>
              <ul className="space-y-2 text-stone-800">
                <li>• <strong>Distance:</strong> Approximately 40 kilometers (24.85 miles)</li>
                <li>• <strong>Course:</strong> Marathon to Athens (following the historical route)</li>
                <li>• <strong>Winner:</strong> Spyridon Louis (Greece) in 2:58:50</li>
                <li>• <strong>Runners:</strong> 17 competitors started, 9 finished</li>
              </ul>
            </div>

            <p className="text-stone-800 leading-relaxed mt-4">
              The race was a huge success, but early marathons varied in distance. Different Olympic Games 
              featured marathons of different lengths—anywhere from 40 to 42.75 kilometers—depending on the 
              local course layout.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              1908 London Olympics: The Distance That Stuck
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              The modern marathon distance was standardized at the 1908 London Olympics—and it happened 
              somewhat by accident.
            </p>

            <div className="bg-stone-50 rounded-lg p-4 sm:p-6 border-l-4 border-stone-800 mb-4">
              <p className="text-stone-800 font-semibold mb-3">The 1908 London Marathon Course:</p>
              <ul className="space-y-2 text-stone-800">
                <li>• <strong>Start:</strong> Windsor Castle (requested to start on the lawn so royal children could watch)</li>
                <li>• <strong>Finish:</strong> Olympic Stadium at White City</li>
                <li>• <strong>Extended finish:</strong> The race was extended 385 yards so it would finish directly in front of the royal box</li>
                <li>• <strong>Total distance:</strong> 26 miles 385 yards (42.195 km)</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-3 sm:p-4 border-l-4 border-amber-500">
              <p className="text-stone-800 font-semibold mb-2">👑 The Royal Influence:</p>
              <p className="text-stone-800 text-sm">
                The extra 385 yards weren't part of any historical significance—they were simply added so 
                Queen Alexandra could have the best view of the finish. This arbitrary adjustment would 
                become the permanent standard distance for all future marathons.
              </p>
            </div>

            <p className="text-stone-800 leading-relaxed mt-4">
              The 1908 race itself became famous for another reason: Italian runner Dorando Pietri entered 
              the stadium first but collapsed multiple times and was helped across the finish line, leading 
              to his disqualification. The drama captivated the public and helped popularize marathon running.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Official Standardization (1921)
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              For over a decade after 1908, marathons still varied in distance. The standardization came in 1921.
            </p>

            <div className="bg-stone-50 rounded-lg p-4 sm:p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">1921 IAAF Decision:</p>
              <p className="text-stone-800 mb-3">
                The International Amateur Athletic Federation (IAAF, now World Athletics) officially adopted 
                the 1908 London Olympic distance as the standard marathon distance.
              </p>
              <p className="text-stone-800 font-semibold">From that point forward:</p>
              <ul className="space-y-1 text-stone-800 ml-4 text-sm mt-2">
                <li>• All official marathons would measure exactly 42.195 kilometers</li>
                <li>• Course certification would ensure accuracy</li>
                <li>• World records would only be recognized at this distance</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Why Not a Round Number?
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              It seems unusual that marathons aren't 40 km or 25 miles—a nice, round number. Here's why:
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  1. Historical Accident
                </h3>
                <p className="text-stone-800 text-sm">
                  The distance was never intentionally chosen. It evolved from the approximate Marathon-to-Athens 
                  distance, was modified for the 1908 royal viewing, and then standardized. No one sat down and 
                  said "42.195 km sounds perfect."
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  2. Tradition and Recognition
                </h3>
                <p className="text-stone-800 text-sm">
                  By 1921, the distance had been used in several Olympics and major races. The specific number 
                  26.2 had already become recognizable to the running community. Changing it would have erased 
                  that history.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  3. The Challenge Factor
                </h3>
                <p className="text-stone-800 text-sm">
                  Ironically, the awkward distance adds to the mystique. 26.2 miles feels more specific and 
                  challenging than "25 miles." The odd number has become part of the marathon's identity and 
                  difficulty.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Marathon Pace Conversion Chart
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Understanding pace requirements for the full 42.195 km distance:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Pace (min/km)</th>
                    <th className="p-3 text-left">Pace (min/mile)</th>
                    <th className="p-3 text-left">Marathon Time</th>
                    <th className="p-3 text-left">Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">3:00</td>
                    <td className="p-3">4:50</td>
                    <td className="p-3">2:06:35</td>
                    <td className="p-3">World Class</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">3:30</td>
                    <td className="p-3">5:38</td>
                    <td className="p-3">2:27:41</td>
                    <td className="p-3">Elite</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">4:00</td>
                    <td className="p-3">6:26</td>
                    <td className="p-3">2:48:47</td>
                    <td className="p-3">Advanced</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">4:30</td>
                    <td className="p-3">7:14</td>
                    <td className="p-3">3:09:53</td>
                    <td className="p-3">Advanced</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">5:00</td>
                    <td className="p-3">8:03</td>
                    <td className="p-3">3:30:58</td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">5:30</td>
                    <td className="p-3">8:51</td>
                    <td className="p-3">3:52:04</td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">6:00</td>
                    <td className="p-3">9:39</td>
                    <td className="p-3">4:13:10</td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">6:30</td>
                    <td className="p-3">10:27</td>
                    <td className="p-3">4:34:16</td>
                    <td className="p-3">Beginner</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">7:00</td>
                    <td className="p-3">11:16</td>
                    <td className="p-3">4:55:22</td>
                    <td className="p-3">Beginner</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Common Marathon Time Goals
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-2:00 Marathon (Elite Goal)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 2:50 min/km or 4:34 min/mile</li>
                  <li>• Level: World-class elite runners only</li>
                  <li>• Historical note: Eliud Kipchoge broke 2 hours in a special event (1:59:40) in 2019, though not in an official race</li>
                  <li>• Official world record: 2:00:35 (Kelvin Kiptum, 2023)</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-3:00 Marathon
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 4:16 min/km or 6:52 min/mile</li>
                  <li>• Level: Elite/advanced competitive runner</li>
                  <li>• Typically requires 70-100 miles per week training</li>
                  <li>• Boston Marathon qualifying standard for many age groups</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-3:30 Marathon
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 4:58 min/km or 8:00 min/mile</li>
                  <li>• Level: Advanced runner</li>
                  <li>• Popular goal for experienced marathoners</li>
                  <li>• Requires consistent training and multiple long runs</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-4:00 Marathon
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 5:41 min/km or 9:09 min/mile</li>
                  <li>• Level: Intermediate to advanced</li>
                  <li>• Very popular "milestone" goal</li>
                  <li>• Achievable with 4-5 months dedicated training</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Sub-4:30 Marathon
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Required pace: Under 6:23 min/km or 10:16 min/mile</li>
                  <li>• Level: Intermediate runner</li>
                  <li>• Great goal for first-time marathoners</li>
                  <li>• Focus on building endurance and completing long runs</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Just Finish (4:30+)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Pace: 6:30+ min/km or 10:30+ min/mile</li>
                  <li>• Level: Beginner or run/walk strategy</li>
                  <li>• Completion is the goal, not time</li>
                  <li>• Most races have a 6-7 hour time limit</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Interesting Marathon Facts
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  🏃 Most Popular Marathon
                </h3>
                <p className="text-stone-800 text-sm">
                  The New York City Marathon is the world's largest, with over 50,000 finishers annually. 
                  Other major marathons include Boston, London, Berlin, Chicago, and Tokyo.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  ⏱️ World Records
                </h3>
                <p className="text-stone-800 text-sm">
                  Men's: 2:00:35 by Kelvin Kiptum (Chicago, 2023)
                  <br />
                  Women's: 2:11:53 by Tigst Assefa (Berlin, 2023)
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  🔥 Calories Burned
                </h3>
                <p className="text-stone-800 text-sm">
                  The average runner burns approximately 2,600-3,000 calories completing a marathon, though 
                  this varies significantly by body weight and pace.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  📈 Marathon Participation
                </h3>
                <p className="text-stone-800 text-sm">
                  Over 1.1 million people complete a marathon annually worldwide. The median finish time is 
                  approximately 4:30 for men and 5:00 for women.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  🎯 Boston Marathon Standards
                </h3>
                <p className="text-stone-800 text-sm">
                  The Boston Marathon requires qualifying times, making it one of the most prestigious marathons. 
                  For example, men aged 18-34 need to run under 3:00, women aged 18-34 need under 3:30.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Marathon vs Half Marathon
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Understanding the relationship between these two popular distances:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Aspect</th>
                    <th className="p-3 text-left">Half Marathon</th>
                    <th className="p-3 text-left">Full Marathon</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">Distance</td>
                    <td className="p-3">21.1 km / 13.1 mi</td>
                    <td className="p-3">42.195 km / 26.2 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">Training Time</td>
                    <td className="p-3">12-16 weeks</td>
                    <td className="p-3">16-20 weeks</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">Peak Mileage</td>
                    <td className="p-3">30-40 miles/week</td>
                    <td className="p-3">40-70 miles/week</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">Recovery Time</td>
                    <td className="p-3">1-2 weeks</td>
                    <td className="p-3">3-4 weeks</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3 font-semibold">Median Finish</td>
                    <td className="p-3">~2:00 (men), ~2:15 (women)</td>
                    <td className="p-3">~4:30 (men), ~5:00 (women)</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3 font-semibold">Pace Difference</td>
                    <td className="p-3">Baseline</td>
                    <td className="p-3">20-30 sec/km slower</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              The Marathon Legacy Today
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              From its ancient Greek origins to the 1908 royal adjustment to today's global phenomenon, the 
              marathon has become more than just a race—it's a cultural icon.
            </p>

            <div className="bg-stone-50 rounded-lg p-4 sm:p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">Why 42.195 km Matters:</p>
              <ul className="space-y-2 text-stone-800 text-sm">
                <li>
                  <strong>Universal Challenge:</strong> Whether you're in New York, Tokyo, or Paris, the distance 
                  is always the same. This standardization allows runners worldwide to compare performances and 
                  chase the same goal.
                </li>
                <li>
                  <strong>Historical Connection:</strong> Every marathoner participates in a tradition stretching 
                  back over 2,500 years, connecting modern athletes to ancient legends.
                </li>
                <li>
                  <strong>Personal Achievement:</strong> The specific 26.2 number has become synonymous with 
                  endurance, determination, and personal accomplishment. "I ran a marathon" means something 
                  precise and universally understood.
                </li>
                <li>
                  <strong>The Perfect Distance:</strong> While accidental, 42.195 km happens to be an ideal 
                  endurance test—long enough to be genuinely challenging but short enough to be achievable 
                  with proper training.
                </li>
              </ul>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4">
              Plan Your Marathon Journey
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Now that you understand why marathons are 42.195 kilometers, the next step is planning your own 
              marathon journey. Whether you're targeting a specific finish time or just want to complete the 
              distance, accurate pace planning is essential.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              Our pace-to-speed converter helps you calculate exact target paces for the full 26.2 miles, 
              convert between metric and imperial units, and plan splits for any marathon goal.
            </p>
            <p className="text-stone-800 leading-relaxed mb-6">
              From your first marathon to chasing a Boston qualifier, understanding your pace requirements helps 
              you train smarter and race strategically across all 42.195 kilometers.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-stone-800 hover:bg-stone-400 text-white font-medium rounded-lg transition-colors hover:cursor-pointer"
            >
              Calculate Your Marathon Pace →
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
}

