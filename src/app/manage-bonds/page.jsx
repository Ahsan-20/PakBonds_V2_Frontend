import ProtectedRoute from '@/components/ProtectedRoute';
import ManageBonds from '@/views/ManageBonds';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'My Bonds',
  robots: { index: false, follow: false }
};

export default function Page() {
  return <ProtectedRoute><ManageBonds /></ProtectedRoute>;
}

