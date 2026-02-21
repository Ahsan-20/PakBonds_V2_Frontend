'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-toastify';
import { Lock, Mail, UserPlus, Loader2, ArrowRight, ShieldCheck } from 'lucide-react';

const Signup = () => {
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        setLoading(true);
        const result = await signup(userId, email, password);
        setLoading(false);

        if (result.success) {
            toast.success('Account created! Initializing login sequence...');
            router.push('/login');
        } else {
            toast.error(result.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] pt-28 pb-12 px-4 relative overflow-hidden">


            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-[#050505] pointer-events-none" />

            {/* Background Orbs */}
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                        <UserPlus className="w-8 h-8 text-purple-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Join the Network</h2>
                    <p className="text-zinc-400 text-sm uppercase tracking-widest">Create Your Identity</p>
                </div>

                <div className="bg-[#0a0a0b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-purple-400 uppercase tracking-widest ml-1">User Identity (ID)</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <UserPlus className="h-5 w-5 text-zinc-500" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                    placeholder="agent_007"
                                    minLength={3}
                                    maxLength={50}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-purple-400 uppercase tracking-widest ml-1">Email Coordinates</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-zinc-500" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                    placeholder="user@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-purple-400 uppercase tracking-widest ml-1">Set Access Key</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-zinc-500" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                    placeholder="••••••••"
                                    minLength={6}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-purple-400 uppercase tracking-widest ml-1">Confirm Key</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <ShieldCheck className="h-5 w-5 text-zinc-500" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-bold text-black bg-white hover:bg-zinc-200 transition-all disabled:opacity-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
                        >
                            {loading ? (
                                <Loader2 className="animate-spin h-5 w-5" />
                            ) : (
                                <>
                                    INITIALIZE ACCOUNT <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                        <p className="text-zinc-500 text-sm">
                            Already initialized?{' '}
                            <Link href="/login" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                                Access Portal
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;





