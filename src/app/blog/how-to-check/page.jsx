import HowToCheck from '@/views/Blog/posts/HowToCheck';

export const metadata = {
    title: 'How to Check Prize Bonds Online | 3 Easy Methods',
    description: 'Stop wasting hours scanning lists. Learn the 3 most effective ways to check your Prize Bonds in Pakistan, including our instant archive scanner.',
    keywords: ['How to Check Prize Bonds', 'Check Prize Bonds Online', 'Prize Bond Scanner', 'Pakistan Prize Bond Draw Results'],
    openGraph: {
        title: 'How to Check Prize Bonds Online | 3 Easy Methods',
        description: 'Learn the 3 most effective ways to check your Prize Bonds in Pakistan.',
        type: 'article',
        url: 'https://pakbonds.com/blog/how-to-check',
    images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'How to Check Prize Bonds Online',
        description: 'Stop wasting hours scanning lists. Learn the most effective checking methods.',
    },
    alternates: {
        canonical: 'https://pakbonds.com/blog/how-to-check',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Check Prize Bonds Online',
    description: 'Stop wasting hours scanning lists. Learn the 3 most effective ways to check your Prize Bonds in Pakistan, including our instant archive scanner.',
    url: 'https://pakbonds.com/blog/how-to-check',
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
            <HowToCheck />
        </>
    );
}
