import TermsOfService from '@/views/TermsOfService';

export const metadata = {
  title: 'Terms of Service | PakBonds',
  description: 'Read the PakBonds Terms of Service. Understand the rules, guidelines, and limitations of using our prize bond checking platform.',
  keywords: ['PakBonds Terms', 'Prize Bond Checker Terms of Service', 'Legal'],
  openGraph: {
    title: 'Terms of Service | PakBonds',
    description: 'Understand the rules, guidelines, and limitations of using the PakBonds platform.',
    type: 'website',
    url: 'https://pakbonds.com/terms-of-service',
    images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds Terms of Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | PakBonds',
    description: 'Read the PakBonds Terms of Service.',
  },
  alternates: {
    canonical: 'https://pakbonds.com/terms-of-service',
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service',
  description: 'Read the PakBonds Terms of Service. Understand the rules, guidelines, and limitations of using our platform.',
  url: 'https://pakbonds.com/terms-of-service',
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
      <TermsOfService />
    </>
  );
}
