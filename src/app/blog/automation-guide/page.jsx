import AutomationGuide from '@/views/Blog/posts/AutomationGuide';

export const metadata = {
    title: 'Guide to Automated Prize Bond Checking | PakBonds Pro',
    description: 'Stop scanning manual lists. Learn how to set up automatic win alerts for your Prize Bond portfolio and get instant notifications on draw day.',
    keywords: ['Automated Prize Bond Checking', 'Prize Bond Alerts', 'PakBonds Automation', 'Check Bonds Automatically'],
    openGraph: {
        title: 'Guide to Automated Prize Bond Checking | PakBonds Pro',
        description: 'Stop scanning manual lists. Learn how to set up automatic win alerts for your Prize Bond portfolio.',
        type: 'article',
        url: 'https://pakbonds.com/blog/automation-guide',
    images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Guide to Automated Prize Bond Checking',
        description: 'Learn how to set up automatic win alerts for your Prize Bond portfolio.',
    },
    alternates: {
        canonical: 'https://pakbonds.com/blog/automation-guide',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Guide to Automated Prize Bond Checking',
    description: 'Stop scanning manual lists. Learn how to set up automatic win alerts for your Prize Bond portfolio and get instant notifications on draw day.',
    url: 'https://pakbonds.com/blog/automation-guide',
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
            <AutomationGuide />
        </>
    );
}
