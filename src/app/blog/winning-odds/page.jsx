import WinningOdds from '@/views/Blog/posts/WinningOdds';

export const metadata = {
    title: 'Mathematical Odds of Winning a Prize Bond | Data Analysis',
    description: 'Replace luck with logic. Understand the mathematical probability of winning each Prize Bond denomination and learn strategies to improve your odds.',
    keywords: ['Prize Bond Winning Odds', 'Probability of Winning Prize Bond', 'How to Win Prize Bond'],
    openGraph: {
        title: 'Mathematical Odds of Winning a Prize Bond',
        description: 'Understand the statistical probability of winning each Prize Bond denomination.',
        type: 'article',
        url: 'https://pakbonds.com/blog/winning-odds',
    images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mathematical Odds of Winning a Prize Bond',
        description: 'Replace luck with logic and learn the true odds behind your investments.',
    },
    alternates: {
        canonical: 'https://pakbonds.com/blog/winning-odds',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mathematical Odds of Winning a Prize Bond',
    description: 'Replace luck with logic. Understand the mathematical probability of winning each Prize Bond denomination and learn strategies to improve your odds.',
    url: 'https://pakbonds.com/blog/winning-odds',
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
            <WinningOdds />
        </>
    );
}
