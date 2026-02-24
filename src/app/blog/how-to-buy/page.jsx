import HowToBuy from '@/views/Blog/posts/HowToBuy';

export const metadata = {
    title: 'How to Buy Prize Bonds in Pakistan | Complete Investment Guide',
    description: 'A step-by-step guide to purchasing standard and Premium Prize Bonds in Pakistan. Learn about denominations, authorized banks, and required documents.',
    keywords: ['How to Buy Prize Bonds', 'Buy Premium Prize Bonds', 'Authorized Banks for Prize Bonds', 'Investment Guide Pakistan'],
    openGraph: {
        title: 'How to Buy Prize Bonds in Pakistan | Complete Guide',
        description: 'A step-by-step guide to purchasing standard and Premium Prize Bonds in Pakistan.',
        type: 'article',
        url: 'https://pakbonds.com/blog/how-to-buy',
    images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'How to Buy Prize Bonds in Pakistan',
        description: 'Learn about denominations, authorized banks, and required documents.',
    },
    alternates: {
        canonical: 'https://pakbonds.com/blog/how-to-buy',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Buy Prize Bonds in Pakistan',
    description: 'A step-by-step guide to purchasing standard and Premium Prize Bonds in Pakistan. Learn about denominations, authorized banks, and required documents.',
    url: 'https://pakbonds.com/blog/how-to-buy',
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
            <HowToBuy />
        </>
    );
}
