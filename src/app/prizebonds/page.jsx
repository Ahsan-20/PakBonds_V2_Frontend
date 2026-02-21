import PrizeBondsHub from '@/views/PrizeBondsHub';

export const metadata = {
  title: 'Pakistan Prize Bonds Hub | Schedule, Denominations & Results',
  description: 'Explore all Pakistan Prize Bonds (Rs. 100 to Premium Rs. 40,000). View the latest draw schedules, historical winning numbers, and analyze your prize odds.',
  alternates: {
    canonical: 'https://pakbonds.app/prizebonds',
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Pakistan Prize Bonds Hub',
  description: 'Explore all Pakistan Prize Bonds (Rs. 100 to Premium Rs. 40,000). View the latest draw schedules, historical winning numbers, and analyze your prize odds.',
  url: 'https://pakbonds.app/prizebonds',
  publisher: {
    '@type': 'Organization',
    name: 'PakBonds',
    url: 'https://pakbonds.app'
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


