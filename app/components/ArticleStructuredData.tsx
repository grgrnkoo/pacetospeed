import { articles } from '@/app/articles/data';

export default function ArticleStructuredData({ slug }: { slug: string }) {
    const article = articles.find((a) => a.slug === slug);
    if (!article) return null;

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        datePublished: `${article.date}T00:00:00.000Z`,
        url: `https://pacetospeed.xyz/articles/${article.slug}`,
        author: {
            '@type': 'Organization',
            name: 'Pace to Speed',
            url: 'https://pacetospeed.xyz',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Pace to Speed',
            url: 'https://pacetospeed.xyz',
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://pacetospeed.xyz/articles/${article.slug}`,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
