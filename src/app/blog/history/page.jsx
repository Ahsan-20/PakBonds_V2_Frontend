import BondHistory from '@/views/Blog/posts/BondHistory';

export const metadata = {
    title: 'Are Pakistan Prize Bonds Safe? A Complete History',
    description: 'Discover the history, government backing, and Islamic status of Pakistan Prize Bonds. Learn why they are considered a 100% secure, liquid investment.',
    alternates: {
        canonical: 'https://pakbonds.app/blog/history',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Are Pakistan Prize Bonds Safe? A Complete History',
    description: 'Discover the history, government backing, and Islamic status of Pakistan Prize Bonds. Learn why they are considered a 100% secure, liquid investment.',
    url: 'https://pakbonds.app/blog/history',
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
            <BondHistory />
        </>
    );
}
