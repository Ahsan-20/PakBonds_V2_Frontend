import AboutUs from '@/views/AboutUs';

export const metadata = {
    title: 'About PakBonds | The Team Behind Automatic Checking',
    description: 'Learn about PakBonds and our mission to make prize bond checking effortless and secure for overseas Pakistanis and local investors.',
    alternates: {
        canonical: 'https://pakbonds.app/about',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About PakBonds',
    description: 'Learn about PakBonds and our mission to modernize prize bond checking for Pakistanis worldwide.',
    url: 'https://pakbonds.app/about',
    mainEntity: {
        '@type': 'Organization',
        name: 'PakBonds',
        url: 'https://pakbonds.app',
        description: 'A financial technology platform providing automated draw checking and portfolio management for Pakistan National Savings Prize Bonds.',
    }
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AboutUs />
        </>
    );
}

