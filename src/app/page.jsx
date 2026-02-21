import Home from '@/views/Home';

export const metadata = {
    title: 'PakBonds | Automatic Weekly Prize Bond Checker',
    description: 'The easiest way to check Pakistani Prize Bonds online. Create a portfolio, get automated checking, and receive instant win alerts for every draw.',
    alternates: {
        canonical: 'https://pakbonds.app',
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
    url: 'https://pakbonds.app',
    provider: {
        '@type': 'Organization',
        name: 'PakBonds',
        url: 'https://pakbonds.app'
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

