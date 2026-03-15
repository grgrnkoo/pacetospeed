import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Pace to Speed Converter',
        short_name: 'Pace to Speed',
        description: 'Free pace to speed converter for runners. Convert between min/km, min/mile, km/h, and mph.',
        start_url: '/',
        display: 'standalone',
        background_color: '#f5f5f4',
        theme_color: '#292524',
        icons: [
            {
                src: '/icon.png',
                sizes: '1024x1024',
                type: 'image/png',
            },
        ],
    };
}
