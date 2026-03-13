import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pacetospeed.xyz';
  
  const distances = ['5k', '10k', 'half-marathon', 'marathon', '50k', '100k', 'custom'];
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/finish-time`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...distances.map(distance => ({
      url: `${baseUrl}/finish-time/${distance}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/why-pace-to-speed-converter-is-must-have`,
      lastModified: new Date('2024-01-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/understanding-running-pace`,
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/running-pace-vs-speed`,
      lastModified: new Date('2025-11-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/how-to-calculate-running-distance`,
      lastModified: new Date('2025-11-22'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/race-distance-conversions`,
      lastModified: new Date('2025-09-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/treadmill-distance-calculator`,
      lastModified: new Date('2025-08-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/walking-distance-calories`,
      lastModified: new Date('2025-07-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/5k-to-miles-conversion-table`,
      lastModified: new Date('2025-06-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/10k-to-miles-conversion`,
      lastModified: new Date('2025-05-12'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/half-marathon-pace-chart`,
      lastModified: new Date('2025-04-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/marathon-distance-explained`,
      lastModified: new Date('2025-03-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/why-running-apps-dont-convert-pace`,
      lastModified: new Date('2025-02-14'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/pace-calculator-min-mile-to-min-km`,
      lastModified: new Date('2026-03-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/running-pace-chart-by-age`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/good-5k-10k-half-marathon-pace`,
      lastModified: new Date('2026-03-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/calculate-pace-from-time-distance`,
      lastModified: new Date('2026-03-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/race-time-predictor`,
      lastModified: new Date('2026-03-06'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/negative-splits-guide`,
      lastModified: new Date('2026-03-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/target-pace-calculator-goal-time`,
      lastModified: new Date('2026-03-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/treadmill-pace-vs-outdoor`,
      lastModified: new Date('2026-03-03'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/treadmill-incline-pace-conversion`,
      lastModified: new Date('2026-03-02'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/average-1-mile-time-by-age`,
      lastModified: new Date('2026-03-13'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/10k-training-plan-8-week`,
      lastModified: new Date('2026-03-12'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/how-to-run-faster-5k`,
      lastModified: new Date('2026-03-11'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/heart-rate-zones-for-running`,
      lastModified: new Date('2026-03-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/vo2-max-for-runners`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/long-run-pace-guide`,
      lastModified: new Date('2026-03-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/marathon-pacing-even-vs-negative`,
      lastModified: new Date('2026-03-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/5k-to-marathon-build-up`,
      lastModified: new Date('2026-03-06'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/running-cadence-what-it-means`,
      lastModified: new Date('2026-03-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/running-fueling-101`,
      lastModified: new Date('2026-03-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
