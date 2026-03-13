import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Treadmill Incline Pace Conversion: How to Adjust for Hills',
  description: 'Use incline adjustments to match outdoor effort on a treadmill. Includes simple guidance and a quick reference table.',
  keywords: ['treadmill incline', 'incline pace', 'treadmill pace adjustment', 'incline conversion', 'treadmill running'],
  openGraph: {
    title: 'Treadmill Incline Pace Conversion: How to Adjust for Hills',
    description: 'Use incline adjustments to match outdoor effort on a treadmill.',
    type: 'article',
    publishedTime: '2026-03-02T00:00:00.000Z',
    tags: ['treadmill', 'incline', 'pace', 'running'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treadmill Incline Pace Conversion',
    description: 'Use incline adjustments to match outdoor effort on a treadmill.',
  },
};

export default function TreadmillInclinePaceConversionPage() {
  return (
    <div className="min-h-screen">
      <article className="max-w-3xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-stone-800 mb-1 lg:mb-2">
            Treadmill Incline Pace Conversion: How to Adjust for Hills
          </h1>
          <div className="flex items-center gap-4 text-stone-800">
            <time>March 2, 2026</time>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-stone-800 leading-relaxed mb-4">
              Outdoor runs rarely stay flat. If you train indoors, adding incline can make treadmill effort
              closer to outdoor effort. The goal is not a perfect science. It is a practical adjustment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Simple Rule of Thumb</h2>
            <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-800">
              <p className="text-stone-800">
                Use <strong>1 percent incline</strong> for steady runs. Increase to 2 to 4 percent for hill
                workouts or when simulating rolling terrain.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Quick Reference Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="p-3 text-left">Incline</th>
                    <th className="p-3 text-left">Adjustment</th>
                    <th className="p-3 text-left">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">0%</td>
                    <td className="p-3">None</td>
                    <td className="p-3">Recovery runs, rehab</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">1%</td>
                    <td className="p-3">Outdoor equivalent</td>
                    <td className="p-3">Most steady runs</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="p-3">2-3%</td>
                    <td className="p-3">Moderate hills</td>
                    <td className="p-3">Tempo or progression</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="p-3">4-6%</td>
                    <td className="p-3">Hills</td>
                    <td className="p-3">Hill repeats, strength</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Key Takeaway</h2>
            <p className="text-stone-800 leading-relaxed">
              The incline setting is a tool to match effort, not a precise conversion. Use it consistently and
              track how it feels. Your perceived effort is the best guide.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
