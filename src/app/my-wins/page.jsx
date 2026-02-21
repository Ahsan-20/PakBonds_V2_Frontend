import ProtectedRoute from '@/components/ProtectedRoute';
import MyWins from '@/views/MyWins';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'My Wins',
  robots: { index: false, follow: false }
};

export default function Page() {
  return <ProtectedRoute><MyWins /></ProtectedRoute>;
}

