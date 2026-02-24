import PrivacyPolicy from '@/views/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy | PakBonds',
  description: 'Read the PakBonds Privacy Policy. Learn how we securely handle, encrypt, and protect your prize bond data and personal information.',
  keywords: ['PakBonds Privacy Policy', 'Data Security', 'Prize Bond Checker Security', 'Pakistan'],
  openGraph: {
    title: 'Privacy Policy | PakBonds',
    description: 'We take your privacy seriously. Learn how we securely handle and protect your prize bond data.',
    type: 'website',
    url: 'https://pakbonds.com/privacy-policy',
    images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds Privacy Policy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | PakBonds',
    description: 'Read the PakBonds Privacy Policy to understand how we protect your data.',
  },
  alternates: {
    canonical: 'https://pakbonds.com/privacy-policy',
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  description: 'Read the PakBonds Privacy Policy. Learn how we securely handle, encrypt, and protect your prize bond data.',
  url: 'https://pakbonds.com/privacy-policy',
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
      <PrivacyPolicy />
    </>
  );
}
