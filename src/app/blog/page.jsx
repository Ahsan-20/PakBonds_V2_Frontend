import BlogIndex from '@/views/Blog/BlogIndex';

export const metadata = {
  title: 'Pakistan Prize Bonds Blog | Guides, News & Updates',
  description: 'Read the latest guides, news, and strategies about Pakistan Prize Bonds. Learn about winning odds, automation, and investment history.',
  alternates: {
    canonical: 'https://pakbonds.app/blog',
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Pakistan Prize Bonds Blog',
  description: 'Read the latest guides, news, and strategies about Pakistan Prize Bonds.',
  url: 'https://pakbonds.app/blog',
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
      <BlogIndex />
    </>
  );
}


