import ProtectedRoute from '@/components/ProtectedRoute';
import NotificationHistory from '@/views/NotificationHistory';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Notification History',
  robots: { index: false, follow: false }
};

export default function Page() {
  return <ProtectedRoute><NotificationHistory /></ProtectedRoute>;
}

