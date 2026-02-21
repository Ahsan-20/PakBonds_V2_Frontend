import HowToBuy from '@/views/Blog/posts/HowToBuy';

export const metadata = {
    title: 'How to Buy Prize Bonds in Pakistan | Complete Investment Guide',
    description: 'A step-by-step guide to purchasing standard and Premium Prize Bonds in Pakistan. Learn about denominations, authorized banks, and required documents.',
    alternates: {
        canonical: 'https://pakbonds.app/blog/how-to-buy',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Buy Prize Bonds in Pakistan',
    description: 'A step-by-step guide to purchasing standard and Premium Prize Bonds in Pakistan. Learn about denominations, authorized banks, and required documents.',
    url: 'https://pakbonds.app/blog/how-to-buy',
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
            <HowToBuy />
        </>
    );
}
