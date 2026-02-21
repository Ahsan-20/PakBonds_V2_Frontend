import ProtectedRoute from '@/components/ProtectedRoute';
import Download from '@/views/Download';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Download Data',
  robots: { index: false, follow: false }
};

export default function Page() {
  return <ProtectedRoute><Download /></ProtectedRoute>;
}

