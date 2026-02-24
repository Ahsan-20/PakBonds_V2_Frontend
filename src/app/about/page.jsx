import AboutUs from '@/views/AboutUs';

export const metadata = {
    title: 'About Us | PakBonds',
    description: 'Learn about PakBonds, our mission to modernize prize bond management in Pakistan, and the core values that drive our platform.',
    keywords: ['About PakBonds', 'Prize Bond Checker', 'Pakistan Prize Bonds', 'Prize Bond Management'],
    openGraph: {
        title: 'About Us | PakBonds',
        description: 'Revolutionizing how Pakistanis manage, track, and claim their prize bonds with 100% accuracy and absolute security.',
        type: 'website',
        url: 'https://pakbonds.com/about',
        images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'About PakBonds' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Us | PakBonds',
        description: 'Discover our mission to modernize prize bond management in Pakistan.',
    },
    alternates: {
        canonical: 'https://pakbonds.com/about',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About PakBonds',
    description: 'Learn about PakBonds and our mission to modernize prize bond checking for Pakistanis worldwide.',
    url: 'https://pakbonds.com/about',
    mainEntity: {
        '@type': 'Organization',
        name: 'PakBonds',
        url: 'https://pakbonds.com',
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

