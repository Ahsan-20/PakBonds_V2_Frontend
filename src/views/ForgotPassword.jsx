'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { toast } from 'react-toastify';
import { Lock, Mail, ArrowRight, Loader2, KeyRound } from 'lucide-react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.post('/request-password-reset', { email });
            setEmailSent(true);
            toast.success('Reset link sent to your email!');
        } catch (error) {
            toast.error(error.response?.data?.detail || 'Failed to send recovery link.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] pt-28 pb-12 px-4 relative overflow-hidden">


            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-[#050505] pointer-events-none" />

            {/* Background Orbs */}
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-900/20 border border-blue-500/20 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                        <KeyRound className="w-8 h-8 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Forgot Password</h2>
                    <p className="text-zinc-400 text-sm uppercase tracking-widest">Reset Your Password</p>
                </div>

                <div className="bg-[#0a0a0b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

                    {!emailSent ? (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Enter your email and we'll send you a link to reset your password.
                            </p>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-blue-400 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-zinc-500" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                        placeholder="user@example.com"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-bold text-black bg-blue-400 hover:bg-blue-300 transition-all disabled:opacity-50 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] hover:-translate-y-0.5"
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin h-5 w-5" />
                                ) : (
                                    <>
                                        Send Reset Link <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="text-center py-4">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                                <div className="text-green-400">
                                    <ArrowRight className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Email Sent!</h3>
                            <p className="text-zinc-400 text-sm mb-6">
                                We have sent a recovery link to <span className="text-white font-medium">{email}</span>. Please check your inbox.
                            </p>
                            <button
                                onClick={() => setEmailSent(false)}
                                className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
                            >
                                Try different email
                            </button>
                        </div>
                    )}

                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                        <Link href="/login" className="flex items-center justify-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
                            <ArrowRight className="rotate-180 w-4 h-4" /> Return to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;





