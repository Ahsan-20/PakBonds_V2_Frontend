import TaxInformation from '@/views/Blog/posts/TaxInformation';

export const metadata = {
    title: 'Tax on Prize Bond Winnings 2026 | Filer vs Non-Filer Rates',
    description: 'The government deducts tax at source before paying your prize. Understand the active 15% (Filer) vs 30% (Non-Filer) tax rates on prize bond winnings.',
    alternates: {
        canonical: 'https://pakbonds.app/blog/tax-info',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tax Rates on Prize Bond Winnings (2026)',
    description: 'The government deducts tax at source before paying your prize. Understand the active 15% (Filer) vs 30% (Non-Filer) tax rates on prize bond winnings.',
    url: 'https://pakbonds.app/blog/tax-info',
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
            <TaxInformation />
        </>
    );
}
