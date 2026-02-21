import TermsOfService from '@/views/TermsOfService';

export const metadata = {
  title: 'Terms of Service',
  description: 'Read the PakBonds Terms of Service to understand the rules, guidelines, and user agreements for utilizing our automated prize bond checking platform.',
  alternates: {
    canonical: 'https://pakbonds.app/terms-of-service',
  }
};

export default function Page() {
  return <TermsOfService />;
}


