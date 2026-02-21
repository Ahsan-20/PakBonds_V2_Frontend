import ProtectedRoute from '@/components/ProtectedRoute';
import ChangePassword from '@/views/ChangePassword';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Change Password',
  robots: { index: false, follow: false }
};

export default function Page() {
  return <ProtectedRoute><ChangePassword /></ProtectedRoute>;
}

