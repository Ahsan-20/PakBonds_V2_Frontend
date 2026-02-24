import Home from '@/views/Home';

export const metadata = {
    title: 'PakBonds | Automatic Weekly Prize Bond Checker',
    description: 'The easiest way to check Pakistani Prize Bonds online. Create a portfolio, get automated checking, and receive instant win alerts for every draw.',
    keywords: ['Prize Bond Checker', 'Pakistan Prize Bonds', 'Check Prize Bonds Online', 'National Savings Pakistan', 'Automated Bond Checking'],
    openGraph: {
        title: 'PakBonds | Automatic Weekly Prize Bond Checker',
        description: 'Instantly check winning bonds, manage your portfolio securely, and get notified of draw results.',
        type: 'website',
        url: 'https://pakbonds.com',
        images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds - Automatic Prize Bond Checker' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PakBonds | Automatic Weekly Prize Bond Checker',
        description: 'The easiest way to check Pakistani Prize Bonds online.',
    },
    alternates: {
        canonical: 'https://pakbonds.com',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PakBonds',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'PKR',
    },
    description: 'Automatic Prize Bond checking portal for Pakistan National Savings. Instantly check winning bonds, manage your portfolio, and get notified of draw results.',
    url: 'https://pakbonds.com',
    provider: {
        '@type': 'Organization',
        name: 'PakBonds',
        url: 'https://pakbonds.com'
    }
};

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Home />
        </>
    );
}

