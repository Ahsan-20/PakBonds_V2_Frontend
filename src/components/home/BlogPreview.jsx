'use client';

import Link from 'next/link';
import React from 'react';
import { Activity, Zap, BookOpen, TrendingUp, ArrowUpRight } from 'lucide-react';

const posts = [
    {
        href: '/blog/winning-odds',
        category: 'Analysis',
        categoryIcon: Activity,
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        gradientFrom: 'from-purple-900/30',
        title: 'Winning Probabilities: A Statistical Deep Dive',
        desc: 'We analysed 10 years of official draw data to uncover the real odds for every denomination.',
        readTime: '8 min read',
    },
    {
        href: '/blog/automation-guide',
        category: 'Guide',
        categoryIcon: Zap,
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
        gradientFrom: 'from-cyan-900/30',
        title: 'Automation 101: Set Up Your Account in Minutes',
        desc: 'A complete walkthrough for configuring smart alerts and bulk bond imports on PakBonds.',
        readTime: '5 min read',
    },
    {
        href: '/blog/history',
        category: 'History',
        categoryIcon: BookOpen,
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        gradientFrom: 'from-orange-900/20',
        title: 'The Rich History of Pakistan Prize Bonds',
        desc: 'From their 1960 introduction to becoming the country\'s most popular savings instrument.',
        readTime: '12 min read',
    },
];

const BlogPreview = () => {
    return (
        <section className="py-24 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs text-zinc-500 font-mono tracking-widest uppercase px-3 py-1.5 border border-white/8 rounded-full mb-5 bg-white/[0.02]">
                            ✦ Knowledge Base
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            Expert Guides &{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Insights</span>
                        </h2>
                        <p className="text-zinc-500 mt-2 max-w-md leading-relaxed text-sm">
                            Deep dives, statistical analysis, and practical guides authored by Pakistan's bond community.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors whitespace-nowrap"
                    >
                        View All Articles
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {posts.map((post) => (
                        <Link
                            key={post.href}
                            href={post.href}
                            className="group relative rounded-2xl overflow-hidden bg-[#0d0d10] border border-white/[0.07] hover:border-white/15 transition-all duration-300 flex flex-col"
                        >
                            {/* Coloured thumbnail area */}
                            <div className={`relative h-44 bg-gradient-to-br ${post.gradientFrom} to-[#0d0d10] overflow-hidden border-b border-white/[0.06]`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradientFrom} to-transparent opacity-60`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`w-16 h-16 rounded-2xl ${post.bg} border ${post.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <post.categoryIcon size={28} className={post.color} />
                                    </div>
                                </div>
                                {/* Hover reveal arrow */}
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                    <ArrowUpRight size={14} className="text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase ${post.color} ${post.bg} px-2.5 py-1 rounded-full border ${post.border} w-fit mb-4`}>
                                    {post.category}
                                </div>
                                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors leading-snug flex-1">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{post.desc}</p>
                                <div className="flex items-center justify-between text-xs text-zinc-600 border-t border-white/5 pt-4 mt-auto">
                                    <span className="font-mono">{post.readTime}</span>
                                    <span className={`${post.color} font-medium group-hover:underline transition-all`}>Read →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
