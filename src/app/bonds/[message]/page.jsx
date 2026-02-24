import DenominationPage from '@/views/DenominationPage';

export async function generateMetadata({ params }) {
    const { message: denomination } = await params;
    const isPremium = ['25000', '40000'].includes(denomination);
    const bondType = isPremium ? 'Premium (Registered)' : 'Standard';
    const title = `Rs. ${Number(denomination).toLocaleString()} ${isPremium ? 'Premium ' : ''}Prize Bond | Draw Schedule & Winning Results`;
    const description = `Check the latest draw schedule, winning numbers, prize structure, and historical results for the Rs. ${Number(denomination).toLocaleString()} ${bondType} Pakistan Prize Bond.`;

    return {
        title,
        description,
        keywords: [
            `Rs ${denomination} Prize Bond`,
            `${isPremium ? 'Premium ' : ''}Prize Bond ${denomination}`,
            `Prize Bond ${denomination} Draw Result`,
            `Prize Bond ${denomination} Schedule 2026`,
            `Check ${denomination} Prize Bond`
        ],
        alternates: {
            canonical: `https://pakbonds.com/bonds/${denomination}`,
        },
        openGraph: {
            title,
            description,
            url: `https://pakbonds.com/bonds/${denomination}`,
            type: 'website',
            images: [
                {
                    url: 'https://pakbonds.com/opengraph-image.png',
                    width: 1200,
                    height: 630,
                    alt: `Rs. ${Number(denomination).toLocaleString()} ${isPremium ? 'Premium ' : ''}Prize Bond Schedule and Results`,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['https://pakbonds.com/opengraph-image.png'],
        },
    };
}

export default async function BondsPage({ params }) {
    const { message: denomination } = await params;
    const isPremium = ['25000', '40000'].includes(denomination);
    const bondType = isPremium ? 'Premium (Registered)' : 'Standard';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemPage',
        name: `Rs. ${Number(denomination).toLocaleString()} ${isPremium ? 'Premium ' : ''}Prize Bond`,
        description: `Complete guide and historical draw results for the Rs. ${Number(denomination).toLocaleString()} ${bondType} Pakistan Prize Bond.`,
        url: `https://pakbonds.com/bonds/${denomination}`,
        provider: {
            '@type': 'Organization',
            name: 'PakBonds'
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DenominationPage params={params} />
        </>
    );
}
