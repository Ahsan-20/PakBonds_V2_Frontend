import DrawSchedule from '@/views/Blog/posts/DrawSchedule';

export const metadata = {
    title: '2026 Prize Bond Draw Schedule | Official Dates & Locations',
    description: 'Mark your calendars. Get the complete and official 2026 draw schedule for all active Pakistan Prize Bond denominations (100 to 40,000 Premium).',
    keywords: ['Prize Bond Schedule 2026', 'Pakistan Prize Bond Draw Dates', 'National Savings Schedule', 'Premium Prize Bond Draw Dates'],
    openGraph: {
        title: '2026 Prize Bond Draw Schedule | Official List',
        description: 'Get the complete and official 2026 draw schedule for all active Pakistan Prize Bond denominations.',
        type: 'article',
        url: 'https://pakbonds.com/blog/schedule-2026',
    images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '2026 Prize Bond Draw Schedule',
        description: 'Mark your calendars with the official 2026 draw dates.',
    },
    alternates: {
        canonical: 'https://pakbonds.com/blog/schedule-2026',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '2026 Pakistan Prize Bond Draw Schedule',
    description: 'Mark your calendars. Get the complete and official 2026 draw schedule for all active Pakistan Prize Bond denominations (100 to 40,000 Premium).',
    url: 'https://pakbonds.com/blog/schedule-2026',
    author: {
        '@type': 'Organization',
        name: 'PakBonds',
        url: 'https://pakbonds.com'
    },
    publisher: {
        '@type': 'Organization',
        name: 'PakBonds',
        logo: {
            '@type': 'ImageObject',
            url: 'https://pakbonds.com/icon.png'
        }
    }
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DrawSchedule />
        </>
    );
}
