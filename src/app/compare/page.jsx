import ProtectedRoute from '@/components/ProtectedRoute';
import Compare from '@/views/Compare';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Check Results',
  robots: { index: false, follow: false }
};

export default function Page() {
  return <ProtectedRoute><Compare /></ProtectedRoute>;
}

