import AutomationGuide from '@/views/Blog/posts/AutomationGuide';

export const metadata = {
    title: 'Guide to Automated Prize Bond Checking | PakBonds Pro',
    description: 'Stop scanning manual lists. Learn how to set up automatic win alerts for your Prize Bond portfolio and get instant notifications on draw day.',
    alternates: {
        canonical: 'https://pakbonds.app/blog/automation-guide',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Guide to Automated Prize Bond Checking',
    description: 'Stop scanning manual lists. Learn how to set up automatic win alerts for your Prize Bond portfolio and get instant notifications on draw day.',
    url: 'https://pakbonds.app/blog/automation-guide',
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
            <AutomationGuide />
        </>
    );
}
