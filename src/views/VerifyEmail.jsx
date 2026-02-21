'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import api from '@/lib/api';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

const VerifyEmail = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const router = useRouter();

    const [status, setStatus] = useState('loading'); // loading, success, error
    const [message, setMessage] = useState('Verifying your email...');

    // Timer state for Resend Verification
    const [resendCooldown, setResendCooldown] = useState(0);
    const [cooldownDuration, setCooldownDuration] = useState(30); // Starts at 30 seconds
    const [resendLoading, setResendLoading] = useState(false);

    useEffect(() => {
        let timer;
        if (resendCooldown > 0) {
            timer = setInterval(() => {
                setResendCooldown((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [resendCooldown]);

    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                setStatus('error');
                setMessage('Verification token is missing.');
                return;
            }

            try {
                const response = await api.post('/verify-email', { token });
                setStatus('success');
                setMessage(response.data.message || 'Email verified successfully!');

                // Redirect to dashboard after 3 seconds
                setTimeout(() => {
                    router.push('/dashboard');
                }, 3000);
            } catch (err) {
                setStatus('error');
                setMessage(err.response?.data?.detail || 'Failed to verify email. The link may be expired or invalid.');
            }
        };

        verifyToken();
    }, [token, router]);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 pt-28 pb-12">
            <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 text-center">
                {status === 'loading' && (
                    <div className="flex flex-col items-center">
                        <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Verifying...</h2>
                        <p className="text-slate-600 dark:text-slate-400">{message}</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-12 w-12 text-emerald-500 mb-4" />
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Success!</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">{message}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">Redirecting to dashboard...</p>
                    </div>
                )}

                {status === 'error' && (
                    <div className="flex flex-col items-center">
                        <XCircle className="h-12 w-12 text-rose-500 mb-4" />
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Verification Failed</h2>
                        <p className="text-rose-600 dark:text-rose-400 mb-6">{message}</p>

                        <div className="flex gap-4 w-full">
                            <button
                                onClick={() => router.push('/login')}
                                className="flex-1 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors font-semibold"
                            >
                                Back to Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;


