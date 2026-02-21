import WinningOdds from '@/views/Blog/posts/WinningOdds';

export const metadata = {
    title: 'Mathematical Odds of Winning a Prize Bond | Data Analysis',
    description: 'Replace luck with logic. Understand the mathematical probability of winning each Prize Bond denomination and learn strategies to improve your odds.',
    alternates: {
        canonical: 'https://pakbonds.app/blog/winning-odds',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mathematical Odds of Winning a Prize Bond',
    description: 'Replace luck with logic. Understand the mathematical probability of winning each Prize Bond denomination and learn strategies to improve your odds.',
    url: 'https://pakbonds.app/blog/winning-odds',
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
            <WinningOdds />
        </>
    );
}
