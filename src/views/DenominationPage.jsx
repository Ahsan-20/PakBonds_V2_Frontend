'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import {
    Share2, TrendingUp, Calendar, AlertTriangle,
    ArrowRight, ArrowLeft, CheckCircle, Smartphone,
    Zap, Trophy, Medal, Award
} from 'lucide-react';
import api from '@/lib/api';
import LoadingScreen from '../components/LoadingScreen';

// ── Per-denomination colour themes ────────────────────────────────────────────
const THEMES = {
    '100': { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/25', glow: 'bg-cyan-500/5' },
    '200': { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/25', glow: 'bg-blue-500/5' },
    '750': { text: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/25', glow: 'bg-green-500/5' },
    '1500': { text: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/25', glow: 'bg-yellow-500/5' },
    '25000': { text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/25', glow: 'bg-orange-500/5' },
    '40000': { text: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/25', glow: 'bg-pink-500/5' },
};

const DEFAULT_THEME = { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/25', glow: 'bg-cyan-500/5' };

const OTHER_BONDS = ['100', '200', '750', '1500', '25000', '40000'];

const HOW_STEPS = [
    { n: 1, color: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400', title: 'Create Free Account', body: 'Sign up on PakBonds to start tracking your portfolio.' },
    { n: 2, color: 'bg-purple-500/10 border-purple-500/25 text-purple-400', title: 'Add Your Numbers', body: 'Enter your bond serial numbers individually or as a range.' },
    { n: 3, color: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400', title: 'Auto-Check', body: 'Our system scans every new draw against your portfolio automatically.' },
    { n: 4, color: 'bg-amber-500/10 border-amber-500/25 text-amber-400', title: 'Get Notified', body: 'Receive an instant email alert if any of your bonds win.' },
];

const DenominationPage = () => {
    const { message } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const theme = THEMES[message] || DEFAULT_THEME;

    useEffect(() => {
        if (!message) return;
        setLoading(true);
        api.get(`/public/denomination-info/${message}`)
            .then(r => { setData(r.data); setError(false); })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [message]);

    if (loading) return <LoadingScreen message={`Loading Rs. ${message} Bond Data...`} />;

    if (error || !data) return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <div className="text-center">
                <AlertTriangle size={48} className="mx-auto text-red-500 mb-4" />
                <h1 className="text-2xl font-bold mb-2">Bond Not Found</h1>
                <p className="text-zinc-500 text-sm mb-6">We couldn&apos;t load data for this denomination.</p>
                <Link href="/bonds" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ArrowLeft size={16} /> All Bonds
                </Link>
            </div>
        </div>
    );

    const info = data.data;

    const prizes = [
        { Icon: Trophy, rank: '1st Prize', count: info.prizes_count?.['1st'], amount: info.first_prize, textColor: 'text-yellow-400', border: 'border-yellow-500/20', bg: 'bg-yellow-500/5' },
        { Icon: Medal, rank: '2nd Prize', count: info.prizes_count?.['2nd'], amount: info.second_prize, textColor: 'text-zinc-300', border: 'border-white/[0.07]', bg: 'bg-white/[0.02]' },
        { Icon: Award, rank: '3rd Prize', count: info.prizes_count?.['3rd'], amount: info.third_prize, textColor: 'text-zinc-400', border: 'border-white/[0.07]', bg: 'bg-white/[0.02]' },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">

            {/* ── Ambient background ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className={`absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full ${theme.glow} blur-[160px]`} />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-700/4 blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">

                {/* ── Back nav ── */}
                <Link
                    href="/bonds"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200 mb-10 group text-sm"
                >
                    <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
                    <span className="font-mono tracking-wide uppercase text-xs">All Bonds</span>
                </Link>

                {/* ── Hero Header ── */}
                <div className={`relative overflow-hidden rounded-3xl border ${theme.border} bg-white/[0.025] backdrop-blur-md p-8 md:p-10 mb-10`}>
                    <div className={`absolute top-0 right-0 w-[300px] h-[300px] rounded-full ${theme.glow} blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/4`} />

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${theme.bg} border ${theme.border} mb-4`}>
                                <Zap size={11} className={theme.text} />
                                <span className={`text-[10px] font-mono ${theme.text} tracking-widest uppercase`}>
                                    {info.type || 'Standard'} Bond
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-3">
                                Rs. {message}{' '}
                                <span className="text-zinc-600">Note</span>
                            </h1>
                            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">{info.description}</p>
                        </div>

                        <div className="text-right shrink-0">
                            <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">First Prize</div>
                            <div className={`text-4xl font-black ${theme.text} tracking-tight`}>{info.first_prize}</div>
                        </div>
                    </div>
                </div>

                {/* ── Main 2-column layout ── */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                    {/* ─── Left / Main Column (3/5) ─── */}
                    <div className="lg:col-span-3 space-y-8">

                        {/* Prize Structure */}
                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                            <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2.5">
                                <TrendingUp size={18} className={theme.text} />
                                Prize Structure
                            </h2>

                            <div className="space-y-3">
                                {prizes.map(({ Icon, rank, count, amount, textColor, border, bg }) => (
                                    <div key={rank} className={`flex items-center justify-between p-4 rounded-xl border ${border} ${bg}`}>
                                        <div className="flex items-center gap-3">
                                            <Icon size={18} className={textColor} />
                                            <div>
                                                <div className={`font-bold text-sm ${textColor}`}>{rank}</div>
                                                {count && <div className="text-zinc-600 text-xs">{count} winner(s)</div>}
                                            </div>
                                        </div>
                                        <div className={`text-xl font-mono font-bold ${textColor}`}>{amount}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/[0.05] flex justify-between text-xs font-mono text-zinc-600">
                                <span>Total prizes: {info.total_prizes}</span>
                                <span>Odds: {info.odds}</span>
                            </div>
                        </div>

                        {/* How to Check — Timeline */}
                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                            <h2 className="text-lg font-bold text-white mb-6">
                                How to Check Rs. {message} Bonds?
                            </h2>
                            <div className="space-y-0">
                                {HOW_STEPS.map((step, i) => (
                                    <div key={step.n} className={`relative pl-10 pb-7 ${i < HOW_STEPS.length - 1 ? 'border-l-2 border-white/[0.06]' : ''} last:pb-0`}>
                                        <div className={`absolute -left-[9px] top-0 w-[18px] h-[18px] rounded-full border ${step.color.split(' ')[1]} ${step.color.split(' ')[0]} flex items-center justify-center text-[9px] font-bold`}>
                                            {step.n}
                                        </div>
                                        <h4 className="text-white font-semibold text-sm mb-0.5">{step.title}</h4>
                                        <p className="text-zinc-600 text-xs leading-relaxed">{step.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* ─── Right / Sidebar (2/5) ─── */}
                    <div className="lg:col-span-2 space-y-5">

                        {/* Primary CTA */}
                        <div className={`relative overflow-hidden rounded-2xl border ${theme.border} bg-gradient-to-br from-[#0d1520] to-black p-6 text-center`}>
                            <div className={`absolute inset-0 ${theme.glow} opacity-40`} />
                            <div className="relative z-10">
                                <Smartphone size={36} className={`mx-auto ${theme.text} mb-3`} />
                                <h3 className="text-lg font-bold text-white mb-2">
                                    Check Your Rs. {message} Bonds
                                </h3>
                                <p className="text-zinc-500 text-xs mb-5 leading-relaxed">
                                    Instantly cross-reference your bond numbers against the full draw history.
                                </p>
                                <Link
                                    href="/compare"
                                    className={`block w-full py-3 rounded-xl ${theme.bg} border ${theme.border} ${theme.text} font-bold text-sm transition-all hover:shadow-lg`}
                                >
                                    Check Now →
                                </Link>
                            </div>
                        </div>

                        {/* Signup CTA */}
                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 text-center">
                            <CheckCircle size={30} className={`mx-auto ${theme.text} mb-3`} />
                            <h3 className="text-base font-bold text-white mb-1">Auto-check Every Draw</h3>
                            <p className="text-zinc-600 text-xs mb-4 leading-relaxed">
                                Save your bond portfolio once, never check manually again.
                            </p>
                            <Link
                                href="/signup"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-colors"
                            >
                                Start for Free <ArrowRight size={13} />
                            </Link>
                        </div>

                        {/* Next Draw Date */}
                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                            <div className="flex items-center gap-2.5 mb-3">
                                <Calendar size={15} className="text-purple-400" />
                                <h3 className="font-bold text-white text-sm">Next Draw</h3>
                            </div>
                            <div className="text-2xl font-black text-white mb-1">{data.next_draw || 'TBA'}</div>
                            <p className="text-[10px] font-mono text-zinc-700">
                                *Calculated based on the annual National Savings draw schedule.
                            </p>
                        </div>

                        {/* Other Bonds Widget */}
                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                            <h3 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Other Denominations</h3>
                            <div className="flex flex-wrap gap-2">
                                {OTHER_BONDS.filter(v => v !== message).map(val => (
                                    <Link
                                        key={val}
                                        href={`/bonds/${val}`}
                                        className={`px-3 py-1.5 rounded-lg border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.07] text-zinc-400 hover:text-white text-xs font-mono transition-all`}
                                    >
                                        Rs. {Number(val).toLocaleString()}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DenominationPage;
