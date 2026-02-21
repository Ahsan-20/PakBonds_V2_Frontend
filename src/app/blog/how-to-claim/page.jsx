import HowToClaim from '@/views/Blog/posts/HowToClaim';

export const metadata = {
    title: 'How to Claim Prize Bond Winnings | Required Documents & Process',
    description: 'You won! Now what? Here is the exact procedure, required documents, and time limits to safely claim your Prize Bond money from the State Bank.',
    alternates: {
        canonical: 'https://pakbonds.app/blog/how-to-claim',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Claim Prize Bond Winnings',
    description: 'You won! Now what? Here is the exact procedure, required documents, and time limits to safely claim your Prize Bond money from the State Bank.',
    url: 'https://pakbonds.app/blog/how-to-claim',
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
            <HowToClaim />
        </>
    );
}
