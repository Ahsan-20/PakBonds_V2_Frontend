import HowToClaim from '@/views/Blog/posts/HowToClaim';

export const metadata = {
    title: 'How to Claim Prize Bond Winnings | Required Documents & Process',
    description: 'You won! Now what? Here is the exact procedure, required documents, and time limits to safely claim your Prize Bond money from the State Bank.',
    keywords: ['How to Claim Prize Bond', 'Prize Bond Winnings', 'State Bank of Pakistan Prize Bond Claim', 'Prize Bond Documents'],
    openGraph: {
        title: 'How to Claim Prize Bond Winnings | Complete Guide',
        description: 'Here is the exact procedure, required documents, and time limits to safely claim your Prize Bond money.',
        type: 'article',
        url: 'https://pakbonds.com/blog/how-to-claim',
    images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'How to Claim Prize Bond Winnings',
        description: 'You won! Now what? Here is the exact procedure to claim your cash.',
    },
    alternates: {
        canonical: 'https://pakbonds.com/blog/how-to-claim',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Claim Prize Bond Winnings',
    description: 'You won! Now what? Here is the exact procedure, required documents, and time limits to safely claim your Prize Bond money from the State Bank.',
    url: 'https://pakbonds.com/blog/how-to-claim',
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
            <HowToClaim />
        </>
    );
}
