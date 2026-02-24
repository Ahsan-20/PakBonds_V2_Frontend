import TaxInformation from '@/views/Blog/posts/TaxInformation';

export const metadata = {
    title: 'Tax on Prize Bond Winnings 2026 | Filer vs Non-Filer Rates',
    description: 'The government deducts tax at source before paying your prize. Understand the active 15% (Filer) vs 30% (Non-Filer) tax rates on prize bond winnings.',
    keywords: ['Prize Bond Tax Rate', 'Tax on Prize Bonds Pakistan', 'Filer vs Non Filer Tax', 'FBR Prize Bond Tax'],
    openGraph: {
        title: 'Tax on Prize Bond Winnings 2026 | Complete Breakdown',
        description: 'Understand the active 15% (Filer) vs 30% (Non-Filer) tax rates on prize bond winnings.',
        type: 'article',
        url: 'https://pakbonds.com/blog/tax-info',
    images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds Blog' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tax on Prize Bond Winnings 2026',
        description: 'Understand the difference between Filer and Non-Filer tax rates on Winnings.',
    },
    alternates: {
        canonical: 'https://pakbonds.com/blog/tax-info',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tax Rates on Prize Bond Winnings (2026)',
    description: 'The government deducts tax at source before paying your prize. Understand the active 15% (Filer) vs 30% (Non-Filer) tax rates on prize bond winnings.',
    url: 'https://pakbonds.com/blog/tax-info',
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
            <TaxInformation />
        </>
    );
}
