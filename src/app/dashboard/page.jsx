import ProtectedRoute from '@/components/ProtectedRoute';
import Dashboard from '@/views/Dashboard';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Dashboard',
  robots: { index: false, follow: false }
};

export default function Page() {
  return <ProtectedRoute><Dashboard /></ProtectedRoute>;
}

