import Link from 'next/link';
import {
    BookOpen, Zap, BarChart3, HelpCircle, ArrowRight,
    Shield, Calendar, TrendingUp, Clock, FileText, Landmark, Scale, Sparkles
} from 'lucide-react';

const POSTS = [
    {
        icon: HelpCircle,
        category: 'Beginner',
        title: 'How to Check Bonds',
        desc: 'The complete guide to manually and automatically checking your prize bonds for 2026.',
        link: '/blog/how-to-check',
        readTime: '5 min read',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
        glow: 'from-cyan-500/20',
        featured: true,
    },
    {
        icon: BarChart3,
        category: 'Analysis',
        title: 'Winning Odds Explained',
        desc: 'Deep dive into the mathematics of winning. Which denomination has the best probability?',
        link: '/blog/winning-odds',
        readTime: '8 min read',
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        glow: 'from-purple-500/20',
        featured: true,
    },
    {
        icon: Zap,
        category: 'Guide',
        title: 'Automate Your Wins',
        desc: 'Stop checking lists manually. Learn how to set up automatic win alerts on PakBonds.',
        link: '/blog/automation-guide',
        readTime: '6 min read',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        glow: 'from-blue-500/20',
        featured: true,
    },
    {
        icon: TrendingUp,
        category: 'Investing',
        title: 'How to Buy Bonds',
        desc: 'A complete guide to purchasing standard and premium bonds from National Savings.',
        link: '/blog/how-to-buy',
        readTime: '7 min read',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        glow: 'from-emerald-500/20',
    },
    {
        icon: Clock,
        category: 'Claims',
        title: 'How to Claim Prize',
        desc: "Don't let your prize expire! Step-by-step guide to claiming your winnings fast.",
        link: '/blog/how-to-claim',
        readTime: '5 min read',
        color: 'text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/20',
        glow: 'from-amber-500/20',
    },
    {
        icon: Calendar,
        category: 'Schedule',
        title: '2026 Draw Schedule',
        desc: 'Mark your calendar. Full list of official dates for all active draws in 2026.',
        link: '/blog/schedule-2026',
        readTime: '4 min read',
        color: 'text-pink-400',
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/20',
        glow: 'from-pink-500/20',
    },
    {
        icon: FileText,
        category: 'Tax',
        title: 'Tax Rates 2026',
        desc: 'Filer vs Non-Filer tax rates explained. How much will you actually take home?',
        link: '/blog/tax-info',
        readTime: '6 min read',
        color: 'text-rose-400',
        bg: 'bg-rose-500/10',
        border: 'border-rose-500/20',
        glow: 'from-rose-500/20',
    },
    {
        icon: Scale,
        category: 'Comparison',
        title: 'Premium vs Standard',
        desc: 'Which bond is better? We compare profit rates and prize structures side-by-side.',
        link: '/blog/premium-vs-standard',
        readTime: '7 min read',
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/20',
        glow: 'from-indigo-500/20',
    },
    {
        icon: Landmark,
        category: 'History',
        title: 'Are Bonds Safe?',
        desc: 'Understanding the government backing and the rich history of Pakistan prize bonds.',
        link: '/blog/history',
        readTime: '10 min read',
        color: 'text-zinc-400',
        bg: 'bg-zinc-500/10',
        border: 'border-zinc-500/20',
        glow: 'from-zinc-500/20',
    },
];

const featured = POSTS.filter(p => p.featured);
const rest = POSTS.filter(p => !p.featured);

const BlogIndex = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">

            {/* ── Ambient background (matches homepage) ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-[-10%] left-[5%] w-[700px] h-[700px] rounded-full bg-cyan-600/5 blur-[160px]" />
                <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-700/5 blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

                {/* ── Page Header ── */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/20 mb-6 backdrop-blur-md">
                        <Sparkles size={11} className="text-cyan-400" />
                        <span className="text-xs font-mono text-cyan-300 tracking-widest uppercase">Knowledge Base</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.0] text-white mb-6">
                        Expert Guides &amp;{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
                            Insights
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-400 leading-relaxed">
                        Deep dives, statistical analysis, and practical guides authored by
                        Pakistan&apos;s bond community.
                    </p>
                </div>

                {/* ── Featured 3-column editorial grid ── */}
                <section className="mb-8">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">Featured Articles</span>
                        <div className="flex-1 h-px bg-white/[0.06]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {featured.map((post) => {
                            const Icon = post.icon;
                            return (
                                <Link
                                    key={post.link}
                                    href={post.link}
                                    className="group relative flex flex-col rounded-2xl bg-white/[0.025] border border-white/[0.08] hover:border-white/[0.18] overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40"
                                >
                                    {/* Coloured gradient thumbnail */}
                                    <div className={`relative h-40 bg-gradient-to-br ${post.glow} to-[#0d0d10] flex items-center justify-center overflow-hidden`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${post.glow} to-transparent opacity-50`} />
                                        <div className={`w-14 h-14 rounded-2xl ${post.bg} border ${post.border} flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                                            <Icon size={28} className={post.color} />
                                        </div>
                                    </div>

                                    {/* Card body */}
                                    <div className="flex flex-col flex-1 p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`text-[10px] font-mono ${post.color} tracking-widest uppercase px-2 py-0.5 rounded-full ${post.bg} border ${post.border}`}>
                                                {post.category}
                                            </span>
                                            <span className="text-zinc-700 text-[10px]">·</span>
                                            <span className="text-[10px] font-mono text-zinc-600">{post.readTime}</span>
                                        </div>
                                        <h2 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors leading-snug">
                                            {post.title}
                                        </h2>
                                        <p className="text-sm text-zinc-500 leading-relaxed flex-1">{post.desc}</p>
                                        <div className={`flex items-center justify-between mt-5 pt-4 border-t border-white/[0.05]`}>
                                            <span className={`text-xs font-mono text-zinc-600`}>pakbonds.app</span>
                                            <span className={`text-xs ${post.color} font-semibold group-hover:underline flex items-center gap-1`}>
                                                Read <ArrowRight size={12} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* ── All other articles — compact list-style ── */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">All Articles</span>
                        <div className="flex-1 h-px bg-white/[0.06]" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {rest.map((post) => {
                            const Icon = post.icon;
                            return (
                                <Link
                                    key={post.link}
                                    href={post.link}
                                    className="group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${post.bg} border ${post.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon size={18} className={post.color} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className={`text-[9px] font-mono ${post.color} tracking-widest uppercase`}>{post.category}</span>
                                            <span className="text-zinc-700 text-[9px]">·</span>
                                            <span className="text-[9px] font-mono text-zinc-600">{post.readTime}</span>
                                        </div>
                                        <h2 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors mb-1 leading-snug">
                                            {post.title}
                                        </h2>
                                        <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2">{post.desc}</p>
                                    </div>
                                    <ArrowRight size={14} className="flex-shrink-0 text-zinc-700 group-hover:text-white group-hover:translate-x-0.5 transition-all mt-0.5" />
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* ── Bottom CTA banner ── */}
                <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-cyan-950/30 to-black text-center p-14 group">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(6,182,212,0.08),transparent)]" />
                    <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <Shield size={26} className="text-cyan-400" />
                        </div>
                        <h2 className="text-3xl font-black text-white mb-3">
                            Don&apos;t rely on luck alone.
                        </h2>
                        <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                            Join thousands of investors who use our automated tools to track their portfolio and never miss a win.
                        </p>
                        <div className="relative inline-block group/btn">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-0 group-hover/btn:opacity-50 transition-opacity duration-500" />
                            <Link
                                href="/signup"
                                className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition-colors"
                            >
                                Create Free Account
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogIndex;
