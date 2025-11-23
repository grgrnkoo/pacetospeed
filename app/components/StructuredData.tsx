export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pace to Speed Converter',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    description: 'Free online pace to speed converter for runners. Convert between min/km, min/mile, km/h, and mph instantly.',
    url: 'https://pacetospeed.xyz',
    author: {
      '@type': 'Person',
      name: 'Oleg',
      url: 'https://x.com/grgrnko',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

