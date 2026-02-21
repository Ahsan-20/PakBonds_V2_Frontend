import ProtectedRoute from '@/components/ProtectedRoute';
import Settings from '@/views/Settings';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Settings',
  robots: { index: false, follow: false }
};

export default function Page() {
  return <ProtectedRoute><Settings /></ProtectedRoute>;
}

