import PrivacyPolicy from '@/views/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Read the PakBonds Privacy Policy to understand how we protect your data, handle your prize bond portfolio, and respect your privacy.',
  alternates: {
    canonical: 'https://pakbonds.app/privacy-policy',
  }
};

export default function Page() {
  return <PrivacyPolicy />;
}


