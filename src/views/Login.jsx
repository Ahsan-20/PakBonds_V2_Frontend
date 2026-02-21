'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-toastify';
import { Lock, Mail, Loader2, ArrowRight, ShieldCheck, MailWarning } from 'lucide-react';
import api from '@/lib/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [requiresVerification, setRequiresVerification] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);

    // Cooldown Timer States
    const [resendCooldown, setResendCooldown] = useState(0);
    const [cooldownDuration, setCooldownDuration] = useState(30); // Starts at 30 seconds

    useEffect(() => {
        let timer;
        if (resendCooldown > 0) {
            timer = setInterval(() => {
                setResendCooldown((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [resendCooldown]);

    const { login } = useAuth();
    const router = useRouter();

    const checkVerification = async () => {
        setLoading(true);
        const result = await login(email, password);
        setLoading(false);

        if (result.success) {
            toast.success('Email verified successfully! Welcome.');
            router.replace('/dashboard');
        } else if (result.errorCode !== 'email_verification_required') {
            toast.error(result.message);
            setRequiresVerification(false);
        } else {
            toast.info('Still waiting for verification. Please check your email.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await login(email, password);
        setLoading(false);

        if (result.success) {
            toast.success('Welcome back, Bond Holder.');
            router.replace('/dashboard');
        } else {
            if (result.errorCode === 'email_verification_required') {
                setRequiresVerification(true);
            } else {
                toast.error(result.message);
            }
        }
    };

    const handleResend = async () => {
        if (resendCooldown > 0) return;

        setResendLoading(true);
        try {
            const res = await api.post('/resend-verification', { email });
            toast.success(res.data.message || 'Verification email sent!');

            // Start the cooldown timer
            setResendCooldown(cooldownDuration);
            // Double the duration for the next time they click it (growing timer)
            setCooldownDuration(prev => prev * 2);

        } catch (error) {
            toast.error(error.response?.data?.detail || 'Failed to resend email.');
        } finally {
            setResendLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] pt-28 pb-12 px-4 relative overflow-hidden">


            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-[#050505] pointer-events-none" />

            {/* Background Orbs (Simpler & Verified Safe) */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Main Content Container - Explicit Z-Index */}
            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-900/20 border border-cyan-500/20 mb-6 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                        <ShieldCheck className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-zinc-400 text-sm uppercase tracking-widest">Secure Portal</p>
                </div>

                {/* Glass Card - Flat Design, No 3D */}
                <div className="bg-[#0a0a0b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                    {/* Subtle Gradient Border Effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest ml-1">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-zinc-500" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                    placeholder="user@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest ml-1">Password</label>
                                <Link href="/forgot-password" className="text-xs text-zinc-500 hover:text-cyan-400 transition-colors">
                                    Forgot?
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-zinc-500" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || requiresVerification}
                            className={`w-full flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-bold transition-all ${requiresVerification
                                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-white/5'
                                : 'text-black bg-cyan-400 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:-translate-y-0.5 disabled:opacity-50'
                                }`}
                        >
                            {loading ? (
                                <Loader2 className="animate-spin h-5 w-5" />
                            ) : (
                                <>
                                    LOGIN <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </button>
                    </form>

                    {requiresVerification && (
                        <div className="mt-6 pt-6 border-t border-amber-500/20 text-center animate-fade-in">
                            <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20 mb-4 text-left flex items-start gap-3">
                                <MailWarning className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-amber-500 font-bold text-sm">Verification Required</h4>
                                    <p className="text-amber-500/80 text-xs mt-1">
                                        Your 24-hour grace period has expired. You must verify your email address to log in.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <button
                                    onClick={checkVerification}
                                    disabled={loading}
                                    className="w-full flex items-center justify-center py-3 px-4 rounded-lg text-sm font-bold text-black bg-amber-500 hover:bg-amber-400 transition-all disabled:opacity-50"
                                >
                                    {loading ? (
                                        <Loader2 className="animate-spin h-4 w-4 mr-2" />
                                    ) : null}
                                    I HAVE VERIFIED - LOGIN NOW
                                </button>

                                <button
                                    onClick={handleResend}
                                    disabled={resendLoading || resendCooldown > 0}
                                    className="w-full flex items-center justify-center py-3 px-4 rounded-lg text-sm font-bold text-amber-500 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all disabled:opacity-50"
                                >
                                    {resendLoading ? (
                                        <Loader2 className="animate-spin h-4 w-4 mr-2" />
                                    ) : null}
                                    {resendLoading
                                        ? 'SENDING...'
                                        : resendCooldown > 0
                                            ? `RESEND AGAIN IN ${resendCooldown}s`
                                            : 'RESEND VERIFICATION LINK'
                                    }
                                </button>
                            </div>
                        </div>
                    )}

                    {!requiresVerification && (
                        <div className="mt-8 pt-6 border-t border-white/10 text-center">
                            <p className="text-zinc-500 text-sm">
                                Don't have an account?{' '}
                                <Link href="/signup" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;





