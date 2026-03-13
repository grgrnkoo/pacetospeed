import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pace Calculator: Convert Minutes per Mile to Minutes per Kilometer',
  description: 'Learn how to convert min/mile to min/km with simple formulas, a quick reference table, and practical examples. Perfect for runners switching between units.',
  keywords: ['min/mile to min/km', 'pace calculator', 'pace conversion', 'minutes per mile to minutes per kilometer', 'running pace converter', 'min/km pace'],
  openGraph: {
    title: 'Pace Calculator: Convert Minutes per Mile to Minutes per Kilometer',
    description: 'Convert min/mile to min/km with formulas, examples, and a quick reference table.',
    type: 'article',
    publishedTime: '2026-03-10T00:00:00.000Z',
    tags: ['pace', 'conversion', 'running', 'training'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pace Calculator: Convert Minutes per Mile to Minutes per Kilometer',
    description: 'Convert min/mile to min/km with formulas, examples, and a quick reference table.',
  },
};

export default function PaceCalculatorMinMileToMinKmPage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Pace Calculator: Convert Minutes per Mile to Minutes per Kilometer
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 10, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Runners often switch between miles and kilometers depending on race location, watch settings, or
              training plans. If you follow a plan in min/mile but race in kilometers, you need a quick, accurate
              conversion to avoid pacing mistakes.
            </p>
            <p className="text-stone-800 leading-relaxed">
              This guide gives you the exact formula, step-by-step examples, and a conversion table you can
              reference in seconds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">The Core Formula</h2>
            <div className="bg-stone-800 text-white rounded-lg p-6">
              <p className="text-lg font-semibold mb-4 text-center">Minutes per Mile to Minutes per Kilometer</p>
              <p className="text-center text-xl"><strong>min/km = min/mile ÷ 1.60934</strong></p>
            </div>
            <p className="text-stone-800 leading-relaxed mt-4">
              Because one mile equals 1.60934 kilometers, you divide your per-mile pace by 1.60934 to get the
              per-kilometer pace.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Step-by-Step Example</h2>
            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800 font-semibold mb-3">Example: 8:00 min/mile</p>
              <ol className="list-decimal list-inside space-y-2 text-stone-800 ml-4 text-sm">
                <li>Convert 8:00 to minutes = 8.00</li>
                <li>Apply formula: 8.00 ÷ 1.60934 = 4.97</li>
                <li>Convert 0.97 minutes to seconds: 0.97 × 60 = 58</li>
                <li>Result: <strong>4:58 min/km</strong></li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Quick Conversion Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Pace (min/mile)</th>
                    <th className="p-3 text-left">Pace (min/km)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">6:00</td>
                    <td className="p-3">3:44</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">7:00</td>
                    <td className="p-3">4:21</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">8:00</td>
                    <td className="p-3">4:58</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">9:00</td>
                    <td className="p-3">5:35</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">10:00</td>
                    <td className="p-3">6:13</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">11:00</td>
                    <td className="p-3">6:50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Reverse Conversion</h2>
            <p className="text-stone-800 leading-relaxed mb-4">
              If you need to go from min/km to min/mile, multiply by 1.60934:
            </p>
            <div className="bg-stone-800 text-white rounded-lg p-6">
              <p className="text-center text-xl"><strong>min/mile = min/km × 1.60934</strong></p>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Summary</h2>
            <p className="text-stone-800 leading-relaxed">
              Converting min/mile to min/km is straightforward once you know the formula. Use the conversion
              table for quick lookups, or plug your pace into the formula for precise results. If you are
              switching between races and training plans, this simple calculation keeps your pacing consistent.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
