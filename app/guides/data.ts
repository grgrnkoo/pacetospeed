export interface GuideEntry {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
}

/**
 * Guides are app/product write-ups kept separate from the running articles in
 * `/app/articles/data.ts` so the running content keeps its own topical focus.
 * Adding one: append an entry here, then create `/app/guides/<slug>/page.tsx`.
 */
export const guides: GuideEntry[] = [
  {
    slug: 'best-pedometer-apps-iphone',
    title: '7 Best Pedometer Apps for iPhone in 2026',
    description:
      'Compare 7 of the best pedometer apps for iPhone in 2026, including Senda, Pedometer++, StepsApp, Pacer, ActivityTracker, Duffy, and more.',
    date: '2026-08-19',
  },
];
