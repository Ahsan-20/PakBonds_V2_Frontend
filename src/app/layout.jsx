import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
    metadataBase: new URL('https://pakbonds.com'),
    title: {
        default: 'PakBonds | Automatic Prize Bond Checker & Portfolio Manager',
        template: '%s | PakBonds',
    },
    description: 'The easiest way for overseas Pakistanis and locals to check Pakistan Prize Bonds online. Automated draw checking, instant win alerts, and secure portfolio management.',
    keywords: ['PakBonds', 'Prize Bond Check', 'Pakistan Prize Bonds', 'Prize Bond Draw', 'Check Bonds Online', 'Prize Bond Schedule', 'National Savings'],
    authors: [{ name: 'PakBonds' }],
    creator: 'PakBonds',
    publisher: 'PakBonds',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://pakbonds.com',
        siteName: 'PakBonds',
        title: 'PakBonds | Check Prize Bonds Automatically',
        description: 'Automated draw checking, instant win alerts, and secure portfolio management for Pakistan Prize Bonds.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PakBonds | Automatic Prize Bond Checker',
        description: 'The easiest way to check Pakistani Prize Bonds online. Automated checking and instant win alerts.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: '#050505',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">
                <AuthProvider>
                    <NextTopLoader color="#00f0ff" showSpinner={false} shadow="0 0 10px #00f0ff,0 0 5px #00f0ff" />
                    <div className="min-h-screen flex flex-col bg-[#050505]">
                        <Navbar />
                        <main className="flex-1 w-full relative">
                            {children}
                        </main>
                        <Footer />
                    </div>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </AuthProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
