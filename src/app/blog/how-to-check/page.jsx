import HowToCheck from '@/views/Blog/posts/HowToCheck';

export const metadata = {
    title: 'How to Check Prize Bonds Online | 3 Easy Methods',
    description: 'Stop wasting hours scanning lists. Learn the 3 most effective ways to check your Prize Bonds in Pakistan, including our instant archive scanner.',
    alternates: {
        canonical: 'https://pakbonds.app/blog/how-to-check',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Check Prize Bonds Online',
    description: 'Stop wasting hours scanning lists. Learn the 3 most effective ways to check your Prize Bonds in Pakistan, including our instant archive scanner.',
    url: 'https://pakbonds.app/blog/how-to-check',
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
            <HowToCheck />
        </>
    );
}
