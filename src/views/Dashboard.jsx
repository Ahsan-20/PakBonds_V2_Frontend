'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import {
    FileText, BarChart2, Download, ArrowRight, Calendar,
    Loader2, TrendingUp, Award, Activity, Hexagon, Layers,
    ShieldCheck, Zap, Globe
} from 'lucide-react';
import api from '@/lib/api';
import LoadingScreen from '../components/LoadingScreen';
import { AlertTriangle } from 'lucide-react';

// --- Design System Tokens ---
// Backgrounds: Obsidian (#050505), Glass (#ffffff05)
// Accents: Cyan (#00F0FF), Gold (#FFD700), Crimson (#FF003C)

// Hardcoded denominations
const DENOMINATIONS = [
    { value: '100', label: '100', color: 'text-slate-400', border: 'border-slate-800' },
    { value: '200', label: '200', color: 'text-zinc-400', border: 'border-zinc-800' },
    { value: '750', label: '750', color: 'text-cyan-400', border: 'border-cyan-900/50' },
    { value: '1500', label: '1.5K', color: 'text-purple-400', border: 'border-purple-900/50' },
    { value: '25000', label: '25K', color: 'text-amber-400', border: 'border-amber-900/50', premium: true },
    { value: '40000', label: '40K', color: 'text-rose-400', border: 'border-rose-900/50', premium: true },
];

// Utility: API URL for denomination
const getApiUrl = (options, denomValue) => {
    for (const [name, url] of Object.entries(options)) {
        const match = name.replace(/,/g, '').match(/Rs\.?\s*(\d+)/i);
        if (match && match[1] === denomValue) return url;
        // Fallback for strict matching
        if (name.includes(denomValue)) return url;
    }
    return null;
};

// Utility: Parse date
const parseDrawDate = (dateStr) => {
    if (!dateStr) return null;
    const parts = dateStr.split(/[-\/]/);
    if (parts.length === 3) {
        // Handle DD-MM-YYYY or YYYY-MM-DD
        if (parts[0].length === 4) return new Date(`${parts[0]}-${parts[1]}-${parts[2]}`);
        return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    }
    return new Date(dateStr);
};

// Utility: Format date
const formatDate = (date) => {
    if (!date || isNaN(date.getTime())) return 'N/A';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

// Utility: Calc next draw
const calculateExpectedNext = (latestStr) => {
    const latest = parseDrawDate(latestStr);
    if (!latest || isNaN(latest.getTime())) return null;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    let expected = new Date(latest);
    expected.setMonth(expected.getMonth() + 3);
    while (expected < today) expected.setMonth(expected.getMonth() + 3);
    const days = Math.ceil((expected - today) / 86400000);
    return { date: expected, daysUntil: days };
};

// Utility: Format Numbers (Compact)
const formatCompactNumber = (num) => {
    if (!num) return '0';
    // For smaller numbers, show full value with commas
    if (num < 10000) {
        return new Intl.NumberFormat('en-US').format(num);
    }
    // For larger numbers, use compact notation
    return new Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(num);
};

// --- Components ---

const GlassCard = ({ children, className = "", noPadding = false }) => (
    <div className={`relative overflow-hidden bg-white/[0.02] border border-white/[0.08] backdrop-blur-md rounded-2xl ${noPadding ? '' : 'p-6'} ${className}`}>
        {children}
    </div>
);

const SectionHeader = ({ title, subtitle }) => (
    <div className="mb-6 flex items-end justify-between">
        <div>
            <h2 className="text-xl font-bold text-white tracking-tight uppercase font-mono flex items-center gap-2">
                <span className="w-1 h-4 bg-cyan-500 rounded-full" />
                {title}
            </h2>
            {subtitle && <p className="text-xs text-zinc-500 font-mono mt-1 ml-3">{subtitle}</p>}
        </div>
    </div>
);

// Large Command Card (Quick Actions)
const CommandCard = ({ title, subtitle, icon: Icon, href, gradient }) => (
    <Link href={href} className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-32 flex flex-col justify-between p-6 bg-white/[0.02] hover:bg-white/[0.04]">
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${gradient}`} />
        <div className="relative z-10 flex justify-between items-start">
            <div className={`p-2 rounded-lg bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="text-white w-6 h-6" />
            </div>
            <ArrowRight className="text-white/20 group-hover:text-white transition-colors" />
        </div>
        <div className="relative z-10">
            <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{subtitle}</p>
        </div>
    </Link>
);

// Stat Widget
const StatWidget = ({ label, value, subtext, icon: Icon, accentClass = "text-cyan-400" }) => (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
        <div className={`p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] ${accentClass}`}>
            <Icon size={20} />
        </div>
        <div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-0.5">{label}</div>
            <div className={`text-2xl font-bold text-white font-mono leading-none`}>{value}</div>
        </div>
    </div>
);

// Draw Widget
const DrawScheduleWidget = () => {
    const [selected, setSelected] = useState(DENOMINATIONS[2]);
    const [options, setOptions] = useState({});
    const [latestDate, setLatestDate] = useState(null);
    const [expectedDraw, setExpectedDraw] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/prize_bond_options').then(r => setOptions(r.data)).catch(() => { });
    }, []);

    useEffect(() => {
        if (!selected || !Object.keys(options).length) return;
        const url = getApiUrl(options, selected.value);
        if (!url) { setLatestDate(null); setLoading(false); return; }

        setLoading(true);
        api.get('/available_prize_bond_dates', { params: { bond_url: url } })
            .then(r => {
                const dates = Object.keys(r.data).sort((a, b) => parseDrawDate(b) - parseDrawDate(a));
                if (dates.length) {
                    setLatestDate(dates[0]);
                    setExpectedDraw(calculateExpectedNext(dates[0]));
                } else {
                    setLatestDate(null);
                    setExpectedDraw(null);
                }
            })
            .catch(() => { })
            .finally(() => setLoading(false));
    }, [selected, options]);

    return (
        <GlassCard noPadding className="h-full flex flex-col">
            <div className="p-4 border-b border-white/[0.08] bg-white/[0.02] flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Calendar className="text-cyan-400 w-4 h-4" />
                    <span className="text-xs font-bold text-white uppercase tracking-widest font-mono">Draw Intelligence</span>
                </div>
                {loading && <Loader2 size={14} className="animate-spin text-zinc-500" />}
            </div>

            <div className="p-4 grid grid-cols-6 gap-2">
                {DENOMINATIONS.map(d => (
                    <button
                        key={d.value}
                        onClick={() => setSelected(d)}
                        className={`col-span-1 py-2 text-[10px] font-mono border rounded transition-all ${selected.value === d.value
                            ? `${d.border} ${d.color} bg-white/[0.05]`
                            : 'border-transparent text-zinc-600 hover:text-zinc-400 hover:bg-white/[0.02]'
                            }`}
                    >
                        {d.label}
                    </button>
                ))}
            </div>

            <div className="flex-1 p-6 flex flex-col gap-6">
                <div>
                    <span className="text-xs text-zinc-600 uppercase tracking-wider font-mono">Latest Draw</span>
                    <div className="text-xl text-white font-mono font-bold mt-1">
                        {latestDate ? formatDate(parseDrawDate(latestDate)) : 'No Data'}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent" />
                    <div className="pl-4">
                        <span className="text-xs text-cyan-500 uppercase tracking-wider font-mono mb-1 flex items-center gap-2">
                            <Activity size={12} /> Expected Next
                        </span>
                        <div className="text-2xl text-cyan-400 font-mono font-bold">
                            {expectedDraw ? formatDate(expectedDraw.date) : '--'}
                        </div>
                        {expectedDraw && (
                            <div className="mt-2 text-xs font-mono text-zinc-500">
                                Approx. {expectedDraw.daysUntil} days remaining
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};

// --- Main Page ---

const Dashboard = () => {
    const { user } = useAuth();
    const [wins, setWins] = useState({ total_wins: 0, total_amount: 0 });
    const [bondCount, setBondCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isEmailVerified, setIsEmailVerified] = useState(true);

    useEffect(() => {
        if (!user?.email) {
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                const response = await api.get('/dashboard/stats');
                setBondCount(response.data.total_bonds);
                setWins({
                    total_wins: response.data.total_wins,
                    total_amount: response.data.total_win_amount
                });
            } catch (e) {
                console.error("Dashboard data load failed", e);
            }

            try {
                const meResponse = await api.get('/me');
                if (meResponse.data && 'is_email_verified' in meResponse.data) {
                    setIsEmailVerified(meResponse.data.is_email_verified);
                }
            } catch (e) {
                console.error("Failed to load user profile", e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user]);

    const username = user?.user_id || user?.email?.split('@')[0] || 'Agent';

    if (loading) return <LoadingScreen message="Loading Dashboard..." />;

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-12">

                {!isEmailVerified && (
                    <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-bold text-sm">Verify your email address</h3>
                            <p className="text-xs text-amber-500/80 mt-1 mt-1">Please check your inbox for a verification link. Without verifying your email, you might lose access to your account if you forget your password.</p>
                        </div>
                    </div>
                )}

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 mb-1">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                            SYSTEM ONLINE
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight">
                            User <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{username}</span>
                        </h1>
                    </div>

                    <div className="flex gap-4">
                        <StatWidget
                            label="Portfolio"
                            value={loading ? '-' : bondCount}
                            icon={Layers}
                        />
                        <StatWidget
                            label="Total Wins"
                            value={loading ? '-' : wins.total_wins}
                            icon={Award}
                            accentClass="text-amber-400"
                        />
                    </div>
                </div>

                {/* Command Deck (Quick Actions) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    <CommandCard
                        title="Run Check"
                        subtitle="Scan Archives"
                        icon={Zap}
                        href="/compare"
                        gradient="from-cyan-500/20 to-blue-600/20"
                    />
                    <CommandCard
                        title="Inventory"
                        subtitle="Manage Bonds"
                        icon={FileText}
                        href="/manage-bonds"
                        gradient="from-purple-500/20 to-pink-600/20"
                    />
                    <CommandCard
                        title="Ledger"
                        subtitle="View History"
                        icon={BarChart2}
                        href="/my-wins"
                        gradient="from-emerald-500/20 to-teal-600/20"
                    />
                </div>

                {/* Main Content Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left: Net Value Card (Holographic) */}
                    <div className="lg:col-span-2">
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/20 to-black border border-white/10 p-8 h-full flex flex-col justify-center group">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                                <Globe size={120} />
                            </div>

                            <div className="relative z-10">
                                <div className="text-sm font-mono text-indigo-300 uppercase tracking-widest mb-2">Net Realized Value</div>
                                <div className="text-5xl md:text-6xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                                    <span className="text-3xl text-zinc-500 mr-2">PKR</span>
                                    {loading ? '---' : formatCompactNumber(wins.total_amount)}
                                </div>
                                <div className="mt-6 flex items-center gap-2">
                                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-1">
                                        <TrendingUp size={12} />
                                        <span>Active Portfolio</span>
                                    </div>
                                    <Link href="/download" className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white text-xs font-mono transition-colors flex items-center gap-1">
                                        <Download size={12} />
                                        <span>Export Data</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Draw Intelligence */}
                    <div className="lg:col-span-1 h-full min-h-[300px]">
                        <DrawScheduleWidget />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;



