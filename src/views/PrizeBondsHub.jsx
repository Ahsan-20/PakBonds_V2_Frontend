import Link from 'next/link';
import {
    Award, TrendingUp, Wallet, ArrowRight, Sparkles,
    Zap, Shield, BarChart3
} from 'lucide-react';

// ── Bond data (static — no need for client-side fetching) ──────────────────
const BONDS = [
    {
        value: '100',
        label: 'Rs. 100',
        type: 'Standard',
        firstPrize: 'Rs. 700,000',
        draws: '4 / year',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
        glow: 'from-cyan-500/15',
        desc: 'The most accessible entry point — compete for Rs. 700,000 four times a year.',
    },
    {
        value: '200',
        label: 'Rs. 200',
        type: 'Standard',
        firstPrize: 'Rs. 750,000',
        draws: '4 / year',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        glow: 'from-blue-500/15',
        desc: 'A popular choice with a higher first prize and excellent secondary prize distribution.',
    },
    {
        value: '750',
        label: 'Rs. 750',
        type: 'Standard',
        firstPrize: 'Rs. 1,500,000',
        draws: '4 / year',
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        border: 'border-green-500/20',
        glow: 'from-green-500/15',
        desc: 'Mid-range investment with a 1.5 million first prize — the sweet spot for most investors.',
    },
    {
        value: '1500',
        label: 'Rs. 1,500',
        type: 'Standard',
        firstPrize: 'Rs. 3,000,000',
        draws: '4 / year',
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/20',
        glow: 'from-yellow-500/15',
        desc: 'High-reward tier with the best ratio of prize amount to investment cost.',
    },
    {
        value: '25000',
        label: 'Rs. 25,000',
        type: 'Premium',
        firstPrize: 'Rs. 50,000,000',
        draws: '4 / year',
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/25',
        glow: 'from-orange-500/15',
        desc: 'Registered premium bond with guaranteed bi-annual profit AND a shot at Rs. 50 million.',
        isPremium: true,
    },
    {
        value: '40000',
        label: 'Rs. 40,000',
        type: 'Premium',
        firstPrize: 'Rs. 80,000,000',
        draws: '4 / year',
        color: 'text-pink-400',
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/25',
        glow: 'from-pink-500/15',
        desc: 'The highest available denomination. Registered and insured with the nation\'s largest jackpot.',
        isPremium: true,
    },
];

const FEATURES = [
    { Icon: Award, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', title: 'Historical Winning Lists', body: 'Access complete searchable draw archives for every denomination — all the way back to the first draws.' },
    { Icon: BarChart3, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', title: 'Odds & Prize Analysis', body: 'Understand your exact probability of winning per bond and compare prize distributions across denominations.' },
    { Icon: Wallet, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', title: 'Premium Bond Tracker', body: 'Special section for registered Premium Bonds (25k & 40k) with bi-annual profit tracking.' },
];

const PrizeBondsHub = () => {
    const standard = BONDS.filter(b => !b.isPremium);
    const premium = BONDS.filter(b => b.isPremium);

    return (
        <div className="min-h-screen relative overflow-hidden">

            {/* ── Ambient background (matches homepage) ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-[-5%] left-[5%] w-[700px] h-[700px] rounded-full bg-cyan-600/5 blur-[160px]" />
                <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-700/5 blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

                {/* ── Page Header ── */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/20 mb-6 backdrop-blur-md">
                        <Sparkles size={11} className="text-cyan-400" />
                        <span className="text-xs font-mono text-cyan-300 tracking-widest uppercase">Pakistan Prize Bonds</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.0] text-white mb-6">
                        Choose Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-emerald-400">
                            Bond
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-400 leading-relaxed">
                        Select a denomination to view draw schedules, prize structures, winning odds, and historical results.
                    </p>
                </div>

                {/* ── Standard Bonds Grid ── */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">Standard Bonds</span>
                        <div className="flex-1 h-px bg-white/[0.06]" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {standard.map((bond) => (
                            <Link
                                key={bond.value}
                                href={`/bonds/${bond.value}`}
                                className="group relative flex flex-col rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-white/[0.18] overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40"
                            >
                                {/* Gradient thumbnail / colour stripe */}
                                <div className={`relative h-24 bg-gradient-to-br ${bond.glow} to-[#0d0d10] flex items-center justify-between px-5 overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${bond.glow} to-transparent opacity-60`} />
                                    <span className={`relative z-10 text-3xl font-black ${bond.color} tracking-tight`}>{bond.label}</span>
                                    <span className={`relative z-10 text-[10px] font-mono ${bond.color} ${bond.bg} border ${bond.border} px-2 py-0.5 rounded-full uppercase tracking-wider`}>{bond.type}</span>
                                </div>

                                {/* Card body */}
                                <div className="flex flex-col flex-1 p-5">
                                    <div className="mb-3">
                                        <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-0.5">First Prize</div>
                                        <div className={`text-base font-bold ${bond.color}`}>{bond.firstPrize}</div>
                                    </div>
                                    <p className="text-xs text-zinc-600 leading-relaxed flex-1">{bond.desc}</p>
                                    <div className={`flex items-center justify-between mt-4 pt-3 border-t border-white/[0.05]`}>
                                        <span className="text-[10px] font-mono text-zinc-700">{bond.draws}</span>
                                        <span className={`text-xs ${bond.color} font-semibold flex items-center gap-1 group-hover:gap-2 transition-all`}>
                                            Details <ArrowRight size={11} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ── Premium Bonds Grid ── */}
                <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <Shield size={11} className="text-amber-400" />
                        <span className="text-xs font-mono text-amber-500/70 tracking-widest uppercase">Premium Bonds (Registered)</span>
                        <div className="flex-1 h-px bg-white/[0.06]" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {premium.map((bond) => (
                            <Link
                                key={bond.value}
                                href={`/bonds/${bond.value}`}
                                className="group relative flex rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-white/[0.18] overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40"
                            >
                                {/* Left colour stripe */}
                                <div className={`relative w-32 sm:w-40 flex-shrink-0 bg-gradient-to-b ${bond.glow} to-[#0d0d10] flex flex-col items-center justify-center p-4 overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-b ${bond.glow} to-transparent opacity-60`} />
                                    <span className={`relative z-10 text-2xl font-black ${bond.color} tracking-tight text-center leading-tight`}>{bond.label}</span>
                                    <span className={`relative z-10 text-[9px] font-mono ${bond.color} ${bond.bg} border ${bond.border} px-1.5 py-0.5 rounded-full uppercase tracking-wider mt-2`}>Premium</span>
                                </div>

                                {/* Card body */}
                                <div className="flex flex-col flex-1 p-5">
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <div>
                                            <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-0.5">First Prize</div>
                                            <div className={`text-lg font-bold ${bond.color}`}>{bond.firstPrize}</div>
                                        </div>
                                        <Zap size={14} className="text-amber-400 mt-1 shrink-0" />
                                    </div>
                                    <p className="text-xs text-zinc-600 leading-relaxed flex-1">{bond.desc}</p>
                                    <div className={`flex items-center justify-between mt-4 pt-3 border-t border-white/[0.05]`}>
                                        <span className="text-[10px] font-mono text-zinc-700">+ Bi-annual profit</span>
                                        <span className={`text-xs ${bond.color} font-semibold flex items-center gap-1 group-hover:gap-2 transition-all`}>
                                            Details <ArrowRight size={11} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ── 3-feature section ── */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">What you get</span>
                        <div className="flex-1 h-px bg-white/[0.06]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {FEATURES.map(({ Icon, color, bg, border, title, body }) => (
                            <div key={title} className="p-6 rounded-2xl bg-white/[0.025] border border-white/[0.07]">
                                <div className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center mb-5`}>
                                    <Icon size={20} className={color} />
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default PrizeBondsHub;
