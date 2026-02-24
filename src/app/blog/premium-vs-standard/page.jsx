import PremiumVsStandard from '@/views/Blog/posts/PremiumVsStandard';

export const metadata = {
    title: 'Premium vs Standard Prize Bonds | Which is Better? (2026)',
    description: 'Should you buy old bearer bonds or new Premium registered bonds? Compare profit rates, security features, and prize structures side-by-side.',
    keywords: ['Premium Prize Bonds', 'Standard Prize Bonds', 'Compare Prize Bonds Pakistan', 'Premium vs Standard Bonds'],
    openGraph: {
        title: 'Premium vs Standard Prize Bonds | Which is Better?',
        description: 'Compare profit rates, security features, and prize structures side-by-side.',
        type: 'article',
        url: 'https://pakbonds.com/blog/premium-vs-standard',
    images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Premium vs Standard Prize Bonds',
        description: 'Should you buy old bearer bonds or new Premium registered bonds?',
    },
    alternates: {
        canonical: 'https://pakbonds.com/blog/premium-vs-standard',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Premium vs Standard Prize Bonds (Comparison)',
    description: 'Should you buy old bearer bonds or new Premium registered bonds? Compare profit rates, security features, and prize structures side-by-side.',
    url: 'https://pakbonds.com/blog/premium-vs-standard',
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
            <PremiumVsStandard />
        </>
    );
}
