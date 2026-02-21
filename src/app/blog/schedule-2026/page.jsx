import DrawSchedule from '@/views/Blog/posts/DrawSchedule';

export const metadata = {
    title: '2026 Prize Bond Draw Schedule | Official Dates & Locations',
    description: 'Mark your calendars. Get the complete and official 2026 draw schedule for all active Pakistan Prize Bond denominations (100 to 40,000 Premium).',
    alternates: {
        canonical: 'https://pakbonds.app/blog/schedule-2026',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '2026 Pakistan Prize Bond Draw Schedule',
    description: 'Mark your calendars. Get the complete and official 2026 draw schedule for all active Pakistan Prize Bond denominations (100 to 40,000 Premium).',
    url: 'https://pakbonds.app/blog/schedule-2026',
    author: {
        '@type': 'Organization',
        name: 'PakBonds',
        url: 'https://pakbonds.app'
    },
    publisher: {
        '@type': 'Organization',
        name: 'PakBonds',
        logo: {
            '@type': 'ImageObject',
            url: 'https://pakbonds.app/icon.png'
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
