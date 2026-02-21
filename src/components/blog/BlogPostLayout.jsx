import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

// Shared layout wrapper for every blog post — consistent premium design.
// Usage: wrap your post content with <BlogPostLayout meta={...}>...content...</BlogPostLayout>
const BlogPostLayout = ({
    meta = {},   // { category, title, subtitle, readTime, icon: LucideIconComponent, accentColor }
    children,
}) => {
    const Icon = meta.icon ?? null;
    const accentColor = meta.accentColor ?? 'text-cyan-400';
    const accentBg = meta.accentBg ?? 'bg-cyan-500/10';
    const accentBorder = meta.accentBorder ?? 'border-cyan-500/20';

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* ── Ambient background ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-0 left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-600/5 blur-[160px]" />
                <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-700/5 blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

                {/* ── Back navigation ── */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200 mb-12 group text-sm"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                    <span className="font-mono tracking-wide uppercase text-xs">Back to Blog</span>
                </Link>

                {/* ── Article hero header ── */}
                <header className="mb-14">
                    {/* Category pill */}
                    <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full ${accentBg} border ${accentBorder} mb-6 backdrop-blur-md`}>
                        {Icon && <Icon size={13} className={accentColor} />}
                        <span className={`text-[11px] font-mono ${accentColor} tracking-widest uppercase`}>
                            {meta.category ?? 'Guide'}
                        </span>
                        {meta.readTime && (
                            <>
                                <span className="text-zinc-700">·</span>
                                <Clock size={11} className="text-zinc-600" />
                                <span className="text-[11px] font-mono text-zinc-500">{meta.readTime}</span>
                            </>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.05] text-white mb-6">
                        {meta.title}
                    </h1>

                    {/* Subtitle / lead */}
                    {meta.subtitle && (
                        <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
                            {meta.subtitle}
                        </p>
                    )}

                    {/* Divider */}
                    <div className="mt-10 h-px bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-transparent" />
                </header>

                {/* ── Article body ── */}
                <article className="prose-custom">
                    {children}
                </article>

                {/* ── Bottom navigation ── */}
                <div className="mt-20 pt-10 border-t border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            All Articles
                        </Link>
                        <Link
                            href="/signup"
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-all duration-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:-translate-y-0.5 group"
                        >
                            Start checking automatically
                            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostLayout;
