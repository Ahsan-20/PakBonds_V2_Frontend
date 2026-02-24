import BlogIndex from '@/views/Blog/BlogIndex';

export const metadata = {
  title: 'Pakistan Prize Bonds Blog | Guides, News & Updates',
  description: 'Read the latest guides, news, and strategies about Pakistan Prize Bonds. Learn about winning odds, automation, and investment history.',
  keywords: ['Prize Bond Blog', 'PakBonds Articles', 'Prize Bond Schedule 2026', 'How to Check Prize Bonds', 'Winning Odds'],
  openGraph: {
    title: 'Pakistan Prize Bonds Blog | Guides, News & Updates',
    description: 'Expert guides, statistical analysis, and practical insights on the National Savings Prize Bonds.',
    type: 'website',
    url: 'https://pakbonds.com/blog',
  images: [{ url: 'https://pakbonds.com/opengraph-image.png', width: 1200, height: 630, alt: 'PakBonds Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pakistan Prize Bonds Blog | Guides, News & Updates',
    description: 'Read the latest guides, news, and strategies about Pakistan Prize Bonds.',
  },
  alternates: {
    canonical: 'https://pakbonds.com/blog',
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Pakistan Prize Bonds Blog',
  description: 'Read the latest guides, news, and strategies about Pakistan Prize Bonds.',
  url: 'https://pakbonds.com/blog',
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
      <BlogIndex />
    </>
  );
}


