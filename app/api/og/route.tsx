import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { articles } from '@/app/articles/data';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    const slug = request.nextUrl.searchParams.get('slug');
    const article = articles.find((a) => a.slug === slug);

    const title = article?.title ?? 'Pace to Speed Converter';
    const description = article?.description ?? '';

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '60px',
                    background: 'linear-gradient(135deg, #f1f5f9 0%, #e7e5e4 100%)',
                    fontFamily: 'system-ui, sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    <div
                        style={{
                            fontSize: 48,
                            fontWeight: 800,
                            color: '#292524',
                            lineHeight: 1.15,
                            letterSpacing: '-0.03em',
                        }}
                    >
                        {title}
                    </div>
                    {description && (
                        <div
                            style={{
                                fontSize: 24,
                                color: '#78716c',
                                lineHeight: 1.4,
                            }}
                        >
                            {description.length > 120 ? description.slice(0, 120) + '...' : description}
                        </div>
                    )}
                    <div
                        style={{
                            fontSize: 20,
                            fontWeight: 700,
                            color: '#a8a29e',
                            marginTop: '8px',
                        }}
                    >
                        pacetospeed.xyz
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
