import { guides } from '@/app/guides/data';

export interface GuideListItem {
    name: string;
    url: string;
}

/**
 * JSON-LD for `/guides/*` pages. Mirrors ArticleStructuredData but reads from
 * the guides registry, and optionally emits an ItemList for roundup posts.
 */
export default function GuideStructuredData({
    slug,
    itemList,
}: {
    slug: string;
    itemList?: GuideListItem[];
}) {
    const guide = guides.find((g) => g.slug === slug);
    if (!guide) return null;

    const url = `https://pacetospeed.xyz/guides/${guide.slug}`;

    const article = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: guide.title,
        description: guide.description,
        datePublished: `${guide.date}T00:00:00.000Z`,
        url,
        author: {
            '@type': 'Person',
            name: 'Oleg',
            url: 'https://grgrnko.com',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Pace to Speed',
            url: 'https://pacetospeed.xyz',
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
    };

    const list = itemList
        ? {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: guide.title,
              itemListOrder: 'https://schema.org/ItemListOrderDescending',
              numberOfItems: itemList.length,
              itemListElement: itemList.map((item, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  item: {
                      '@type': 'SoftwareApplication',
                      name: item.name,
                      applicationCategory: 'HealthApplication',
                      operatingSystem: 'iOS',
                      url: item.url,
                  },
              })),
          }
        : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
            />
            {list && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(list) }}
                />
            )}
        </>
    );
}
