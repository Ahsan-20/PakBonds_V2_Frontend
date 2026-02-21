import VerifyEmail from '@/views/VerifyEmail';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Verify Email',
  robots: { index: false, follow: false }
};

export default function Page() {
  return <VerifyEmail />;
}
