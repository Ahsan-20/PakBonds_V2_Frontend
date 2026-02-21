'use client';

import React from 'react';
import { Upload, ScanLine, Trophy } from 'lucide-react';

const steps = [
    {
        step: '01',
        icon: Upload,
        title: 'Build Your Portfolio',
        desc: 'Enter your bond numbers manually or bulk-import an entire range. Organize by denomination in your private vault.',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
        glow: 'shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]',
    },
    {
        step: '02',
        icon: ScanLine,
        title: 'Automated Scanning',
        desc: 'Our engine cross-references your entire portfolio against official draw databases, covering all denominations in seconds.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        glow: 'shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]',
    },
    {
        step: '03',
        icon: Trophy,
        title: 'Collect Your Winnings',
        desc: 'Receive an instant email alert the moment a winning bond is detected. Never miss a prize again.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/20',
        glow: 'shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]',
    },
];

const HowItWorks = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Full-width subtle background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.012] to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 text-xs text-zinc-500 font-mono tracking-widest uppercase px-3 py-1.5 border border-white/8 rounded-full mb-5 bg-white/[0.02]">
                        ✦ How It Works
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Three steps to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-cyan-400 to-blue-500">
                            effortless wins.
                        </span>
                    </h2>
                    <p className="text-zinc-500 max-w-md mx-auto leading-relaxed">
                        Going from manual searching to fully automated checking takes less than 5 minutes.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative">
                    {/* Connection line between steps on desktop */}
                    <div className="hidden md:block absolute top-14 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-yellow-500/30 z-0" />

                    {steps.map((item, i) => (
                        <div key={i} className="relative group flex flex-col items-center text-center z-10">
                            {/* Icon container */}
                            <div className={`relative w-28 h-28 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center mb-8 group-hover:${item.glow} transition-all duration-500 group-hover:scale-105`}>
                                {/* Step number watermark */}
                                <span className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-[#0d0d10] border border-white/10 text-xs font-black text-zinc-600 flex items-center justify-center font-mono">
                                    {i + 1}
                                </span>
                                <item.icon size={36} className={`${item.color} group-hover:scale-110 transition-transform duration-300`} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
