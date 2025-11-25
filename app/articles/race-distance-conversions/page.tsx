import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Many Miles Is a 5K / 10K / Half Marathon / Marathon? Complete Guide',
  description: 'Quick reference guide for converting common race distances from kilometers to miles. Learn the exact distances for 5K, 10K, half marathon, marathon, and ultra races with helpful pace planning tips.',
  keywords: ['5K in miles', '10K in miles', 'half marathon distance', 'marathon distance', 'race distance conversion', 'km to miles running', '5K distance', '10K distance', 'race planning', 'running distances'],
  openGraph: {
    title: 'How Many Miles Is a 5K / 10K / Half Marathon / Marathon? Complete Guide',
    description: 'Quick reference guide for converting common race distances from kilometers to miles with pace planning tips.',
    type: 'article',
    publishedTime: '2025-09-15T00:00:00.000Z',
    tags: ['running', '5K', '10K', 'half marathon', 'marathon', 'race distances', 'conversion'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Miles Is a 5K / 10K / Half Marathon / Marathon?',
    description: 'Quick reference guide for converting common race distances from kilometers to miles.',
  },
};

export default function RaceDistanceConversionsPage() {
  return (
    <div className="min-h-screen">
      {/* Article Content */}
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            How Many Miles Is a 5K / 10K / Half Marathon / Marathon?
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>September 15, 2025</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Whether you're signing up for your first race or comparing your performance across different events, 
              understanding common race distances in both kilometers and miles is essential.
            </p>
            <p className="text-stone-800 leading-relaxed mb-4">
              While most races use metric distances (5K, 10K, marathon), many runners—especially in the US—think 
              in miles. This can create confusion when planning training runs, setting pace goals, or simply 
              understanding what you've signed up for.
            </p>
            <p className="text-stone-800 leading-relaxed">
              Let's break down the exact distances for every major race format, from the 5K to ultramarathons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Quick Answer: Common Race Distances
            </h2>
            
            <div className="bg-stone-800 text-white rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-stone-600 pb-3">
                  <span className="font-semibold">5K</span>
                  <span className="text-xl">3.1 miles</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-600 pb-3">
                  <span className="font-semibold">10K</span>
                  <span className="text-xl">6.2 miles</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-600 pb-3">
                  <span className="font-semibold">Half Marathon</span>
                  <span className="text-xl">13.1 miles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Marathon</span>
                  <span className="text-xl">26.2 miles</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              5K = 3.1 Miles
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              The 5K (5 kilometers) is one of the most popular race distances worldwide—perfect for beginners 
              and seasoned runners alike.
            </p>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800 mb-4">
              <p className="text-stone-800 font-semibold mb-2">Exact Distance:</p>
              <ul className="space-y-1 text-stone-800 ml-4">
                <li>• <strong>5 kilometers = 3.10686 miles</strong></li>
                <li>• Commonly rounded to <strong>3.1 miles</strong></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Why 5K is Popular:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-stone-800 ml-4 text-sm">
                  <li>Achievable for beginners (typically 25-45 minutes)</li>
                  <li>Great for testing speed and pushing pace</li>
                  <li>Available almost every weekend in most cities</li>
                  <li>Can be raced frequently without excessive recovery time</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Typical Finish Times:
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Beginners: 30-40 minutes</li>
                  <li>• Intermediate: 25-30 minutes</li>
                  <li>• Advanced: 20-25 minutes</li>
                  <li>• Elite: Under 15 minutes (men) / Under 17 minutes (women)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              10K = 6.2 Miles
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              The 10K doubles the 5K distance and represents a significant step up in both endurance and challenge.
            </p>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800 mb-4">
              <p className="text-stone-800 font-semibold mb-2">Exact Distance:</p>
              <ul className="space-y-1 text-stone-800 ml-4">
                <li>• <strong>10 kilometers = 6.21371 miles</strong></li>
                <li>• Commonly rounded to <strong>6.2 miles</strong></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Why 10K is Unique:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-stone-800 ml-4 text-sm">
                  <li>Sweet spot between speed and endurance</li>
                  <li>Long enough to require pacing strategy</li>
                  <li>Short enough to maintain relatively fast pace</li>
                  <li>Popular corporate race and fun run distance</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Typical Finish Times:
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Beginners: 60-75 minutes</li>
                  <li>• Intermediate: 50-60 minutes</li>
                  <li>• Advanced: 40-50 minutes</li>
                  <li>• Elite: Under 30 minutes (men) / Under 33 minutes (women)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Half Marathon = 13.1 Miles
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              The half marathon sits perfectly between the 10K and full marathon—challenging but achievable without 
              the extreme training demands of 26.2 miles.
            </p>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800 mb-4">
              <p className="text-stone-800 font-semibold mb-2">Exact Distance:</p>
              <ul className="space-y-1 text-stone-800 ml-4">
                <li>• <strong>21.0975 kilometers = 13.1094 miles</strong></li>
                <li>• Commonly rounded to <strong>13.1 miles</strong></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Why Half Marathon is Popular:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-stone-800 ml-4 text-sm">
                  <li>Serious challenge without extreme commitment</li>
                  <li>Requires dedicated training but manageable recovery</li>
                  <li>Often more scenic routes than shorter races</li>
                  <li>Gateway race to full marathon training</li>
                  <li>Can be raced multiple times per year</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Typical Finish Times:
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• Beginners: 2:15-2:45</li>
                  <li>• Intermediate: 1:45-2:15</li>
                  <li>• Advanced: 1:30-1:45</li>
                  <li>• Elite: Under 1:05 (men) / Under 1:10 (women)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Marathon = 26.2 Miles
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              The marathon is the ultimate test of endurance for most runners—a bucket-list achievement that 
              requires months of preparation.
            </p>

            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800 mb-4">
              <p className="text-stone-800 font-semibold mb-2">Exact Distance:</p>
              <ul className="space-y-1 text-stone-800 ml-4">
                <li>• <strong>42.195 kilometers = 26.2188 miles</strong></li>
                <li>• Commonly rounded to <strong>26.2 miles</strong></li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500 mb-4">
              <p className="text-stone-800 font-semibold mb-2">📖 Historical Note:</p>
              <p className="text-stone-800 text-sm">
                The marathon distance was standardized at 42.195 km (26.2 miles) at the 1908 London Olympics. 
                The course was extended so the race would finish in front of the royal box at the Olympic Stadium.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Marathon Training Requirements:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-stone-800 ml-4 text-sm">
                  <li>Typically 16-20 week training plan</li>
                  <li>Peak weekly mileage: 40-70 miles</li>
                  <li>Multiple 18-22 mile long runs</li>
                  <li>Significant recovery time needed between attempts</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Typical Finish Times:
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• First-timers: 4:30-5:30</li>
                  <li>• Intermediate: 3:30-4:30</li>
                  <li>• Advanced: 3:00-3:30</li>
                  <li>• Elite: Under 2:10 (men) / Under 2:25 (women)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Other Common Race Distances
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Beyond the classic distances, here are other popular race formats you might encounter:
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  1 Mile / 1600m
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• 1 mile = 1.609 kilometers</li>
                  <li>• 1600 meters = 0.994 miles (approximately 1 mile)</li>
                  <li>• Classic track distance, pure speed test</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  15K (9.3 Miles)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• 15 kilometers = 9.32 miles</li>
                  <li>• Less common but growing in popularity</li>
                  <li>• Bridge between 10K and half marathon</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  20K (12.4 Miles)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• 20 kilometers = 12.43 miles</li>
                  <li>• Popular in some countries</li>
                  <li>• Great half marathon tune-up race</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  30K (18.6 Miles)
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• 30 kilometers = 18.64 miles</li>
                  <li>• Excellent marathon preparation race</li>
                  <li>• Tests marathon pace and endurance</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  50K (31.1 Miles) - Ultramarathon
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• 50 kilometers = 31.07 miles</li>
                  <li>• Shortest standard ultramarathon distance</li>
                  <li>• 4.8 miles longer than a marathon</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  100K (62.1 Miles) - Ultramarathon
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• 100 kilometers = 62.14 miles</li>
                  <li>• Elite ultramarathon distance</li>
                  <li>• Requires extensive ultra training experience</li>
                </ul>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  100 Mile - Ultramarathon
                </h3>
                <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                  <li>• 100 miles = 160.93 kilometers</li>
                  <li>• Ultimate endurance challenge</li>
                  <li>• Often run on trails with significant elevation</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Complete Distance Conversion Table
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Here's a comprehensive reference table for all major race distances:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Race Name</th>
                    <th className="p-3 text-left">Kilometers</th>
                    <th className="p-3 text-left">Miles</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">5K</td>
                    <td className="p-3">5 km</td>
                    <td className="p-3">3.1 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">10K</td>
                    <td className="p-3">10 km</td>
                    <td className="p-3">6.2 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">15K</td>
                    <td className="p-3">15 km</td>
                    <td className="p-3">9.3 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">10 Miles</td>
                    <td className="p-3">16.1 km</td>
                    <td className="p-3">10 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">20K</td>
                    <td className="p-3">20 km</td>
                    <td className="p-3">12.4 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">Half Marathon</td>
                    <td className="p-3">21.1 km</td>
                    <td className="p-3">13.1 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">25K</td>
                    <td className="p-3">25 km</td>
                    <td className="p-3">15.5 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">30K</td>
                    <td className="p-3">30 km</td>
                    <td className="p-3">18.6 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">Marathon</td>
                    <td className="p-3">42.2 km</td>
                    <td className="p-3">26.2 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">50K Ultra</td>
                    <td className="p-3">50 km</td>
                    <td className="p-3">31.1 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">50 Mile Ultra</td>
                    <td className="p-3">80.5 km</td>
                    <td className="p-3">50 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">100K Ultra</td>
                    <td className="p-3">100 km</td>
                    <td className="p-3">62.1 mi</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">100 Mile Ultra</td>
                    <td className="p-3">161 km</td>
                    <td className="p-3">100 mi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Using Distance Knowledge for Race Planning
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Understanding exact race distances helps you plan better in several ways:
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  1. Pace Strategy
                </h3>
                <p className="text-stone-800 text-sm">
                  Knowing the exact distance allows you to calculate precise pace targets. For example, to run 
                  a 25-minute 5K, you need to maintain 8:03 min/mile or 5:00 min/km pace.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  2. Training Runs
                </h3>
                <p className="text-stone-800 text-sm">
                  When your coach says "run 10K easy," you know that's 6.2 miles—helping you plan routes and 
                  time commitments accurately.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  3. Realistic Goal Setting
                </h3>
                <p className="text-stone-800 text-sm">
                  Understanding the distance jump from a 5K (3.1 mi) to a 10K (6.2 mi) helps you set appropriate 
                  time goals and training timelines.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">
                  4. Comparing Performances
                </h3>
                <p className="text-stone-800 text-sm">
                  Knowing distances in both units helps you compare performances across races in different countries 
                  or events using different measurement systems.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              The Conversion Formula
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              If you need to convert other distances between kilometers and miles, here's the formula:
            </p>

            <div className="bg-stone-800 text-white rounded-lg p-6 mb-4">
              <div className="space-y-3">
                <div className="text-center pb-3 border-b border-stone-600">
                  <p className="text-lg font-semibold mb-2">Kilometers to Miles</p>
                  <p>Miles = Kilometers × 0.621371</p>
                </div>
                <div className="text-center pt-3">
                  <p className="text-lg font-semibold mb-2">Miles to Kilometers</p>
                  <p>Kilometers = Miles × 1.60934</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg p-4">
              <p className="text-stone-800 font-semibold mb-2">Quick Mental Math Trick:</p>
              <ul className="space-y-1 text-stone-800 ml-4 text-sm">
                <li>• Kilometers to miles: Divide by 1.6 (or multiply by 0.6 for a rough estimate)</li>
                <li>• Miles to kilometers: Multiply by 1.6</li>
              </ul>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Plan Your Race with Our Tools
            </h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              Now that you know the distances, the next step is planning your pace strategy. Our pace-to-speed 
              converter helps you calculate exactly what pace you need to hit your target finish time.
            </p>
            <p className="text-stone-800 leading-relaxed mb-6">
              Whether you're training for a 5K or a marathon, use our calculator to convert between pace and 
              speed, plan splits, and set realistic goals based on your current fitness level.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-stone-800 hover:bg-stone-400 text-white font-medium rounded-lg transition-colors hover:cursor-pointer"
            >
              Calculate Your Race Pace →
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
}

