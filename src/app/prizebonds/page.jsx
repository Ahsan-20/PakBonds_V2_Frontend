import PrizeBondsHub from '@/views/PrizeBondsHub';

export const metadata = {
  title: 'Pakistan Prize Bonds Hub | Schedule, Denominations & Results',
  description: 'Explore all Pakistan Prize Bonds (Rs. 100 to Premium Rs. 40,000). View the latest draw schedules, historical winning numbers, and analyze your prize odds.',
  keywords: ['Prize Bonds Pakistan', 'Prize Bond Schedule', 'Prize Bond Denominations', 'National Savings Pakistan', 'Check Prize Bonds'],
  openGraph: {
    title: 'Pakistan Prize Bonds Hub | The Complete Guide',
    description: 'Explore all Pakistan Prize Bonds (Rs. 100 to Premium Rs. 40,000). View draw schedules, winning numbers, and analyze your odds.',
    type: 'website',
    url: 'https://pakbonds.com/prizebonds',
    images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'Pakistan Prize Bonds Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pakistan Prize Bonds Hub',
    description: 'Explore all denominations, draw schedules, and historical winning numbers.',
  },
  alternates: {
    canonical: 'https://pakbonds.com/prizebonds',
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Pakistan Prize Bonds Hub',
  description: 'Explore all Pakistan Prize Bonds (Rs. 100 to Premium Rs. 40,000). View the latest draw schedules, historical winning numbers, and analyze your prize odds.',
  url: 'https://pakbonds.com/prizebonds',
  publisher: {
    '@type': 'Organization',
    name: 'PakBonds',
    url: 'https://pakbonds.com'
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PrizeBondsHub />
    </>
  );
}


