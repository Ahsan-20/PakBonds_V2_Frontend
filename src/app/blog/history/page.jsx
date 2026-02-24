import BondHistory from '@/views/Blog/posts/BondHistory';

export const metadata = {
    title: 'Are Pakistan Prize Bonds Safe? A Complete History',
    description: 'Discover the history, government backing, and Islamic status of Pakistan Prize Bonds. Learn why they are considered a 100% secure, liquid investment.',
    keywords: ['Pakistan Prize Bonds History', 'Are Prize Bonds Safe', 'CDNS History', 'Government Backed Bonds'],
    openGraph: {
        title: 'Are Pakistan Prize Bonds Safe? A Complete History',
        description: 'Discover the history, government backing, and Islamic status of Pakistan Prize Bonds.',
        type: 'article',
        url: 'https://pakbonds.com/blog/history',
    images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Are Pakistan Prize Bonds Safe?',
        description: 'Learn why Prize Bonds are considered a 100% secure, liquid investment.',
    },
    alternates: {
        canonical: 'https://pakbonds.com/blog/history',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Are Pakistan Prize Bonds Safe? A Complete History',
    description: 'Discover the history, government backing, and Islamic status of Pakistan Prize Bonds. Learn why they are considered a 100% secure, liquid investment.',
    url: 'https://pakbonds.com/blog/history',
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
            <BondHistory />
        </>
    );
}
