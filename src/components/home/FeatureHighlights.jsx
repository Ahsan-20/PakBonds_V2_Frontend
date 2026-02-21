'use client';

import React from 'react';
import { Zap, Bell, Shield, TrendingUp, Clock, Database } from 'lucide-react';

const features = [
    {
        icon: Zap,
        label: 'Instant Detection',
        desc: 'Bond numbers matched against official draw data in milliseconds — no waiting.',
        color: 'text-yellow-400',
        glow: 'from-yellow-500/15',
        border: 'hover:border-yellow-500/25',
    },
    {
        icon: Bell,
        label: 'Smart Alerts',
        desc: 'Automatic email notifications the moment a win is detected in any draw.',
        color: 'text-cyan-400',
        glow: 'from-cyan-500/15',
        border: 'hover:border-cyan-500/25',
    },
    {
        icon: Shield,
        label: 'Bank-Grade Security',
        desc: 'Your data is protected by HttpOnly cookies and end-to-end encryption.',
        color: 'text-blue-400',
        glow: 'from-blue-500/15',
        border: 'hover:border-blue-500/25',
    },
    {
        icon: TrendingUp,
        label: 'Historical Analysis',
        desc: 'Access over 10 years of draw results with denomination-level filtering.',
        color: 'text-purple-400',
        glow: 'from-purple-500/15',
        border: 'hover:border-purple-500/25',
    },
    {
        icon: Database,
        label: 'Portfolio Vault',
        desc: 'Store unlimited bond numbers organized by denomination in your secure vault.',
        color: 'text-emerald-400',
        glow: 'from-emerald-500/15',
        border: 'hover:border-emerald-500/25',
    },
    {
        icon: Clock,
        label: 'Draw Schedules',
        desc: 'Stay informed with accurate upcoming draw dates for all 6 active denominations.',
        color: 'text-rose-400',
        glow: 'from-rose-500/15',
        border: 'hover:border-rose-500/25',
    },
];

const FeatureHighlights = () => {
    return (
        <section className="py-24 relative">
            {/* Background separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-xs text-zinc-500 font-mono tracking-widest uppercase px-3 py-1.5 border border-white/8 rounded-full mb-5 bg-white/[0.02]">
                        ✦ Platform Features
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Everything you need to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            win smarter.
                        </span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto text-base leading-relaxed">
                        PakBonds is engineered for the serious prize bond investor. Stop relying on manual searches and PDF downloads.
                    </p>
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`group relative p-7 rounded-2xl bg-[#0d0d10] border border-white/[0.07] ${feature.border} transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] overflow-hidden cursor-default`}
                        >
                            {/* Gradient glow in corner */}
                            <div className={`absolute -top-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-br ${feature.glow} to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                                <feature.icon size={22} className={feature.color} />
                            </div>

                            {/* Text */}
                            <h3 className={`text-base font-bold text-white mb-2 group-hover:${feature.color} transition-colors`}>
                                {feature.label}
                            </h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>

                            {/* Bottom accent line on hover */}
                            <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${feature.glow.replace('from-', 'from-').replace('/15', '/60')} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureHighlights;
