import PremiumVsStandard from '@/views/Blog/posts/PremiumVsStandard';

export const metadata = {
    title: 'Premium vs Standard Prize Bonds | Which is Better? (2026)',
    description: 'Should you buy old bearer bonds or new Premium registered bonds? Compare profit rates, security features, and prize structures side-by-side.',
    alternates: {
        canonical: 'https://pakbonds.app/blog/premium-vs-standard',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Premium vs Standard Prize Bonds (Comparison)',
    description: 'Should you buy old bearer bonds or new Premium registered bonds? Compare profit rates, security features, and prize structures side-by-side.',
    url: 'https://pakbonds.app/blog/premium-vs-standard',
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
            <PremiumVsStandard />
        </>
    );
}
