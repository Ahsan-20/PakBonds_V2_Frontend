'use client';

import Link from 'next/link';
import React from 'react';

import { ChevronRight, Activity, Zap } from 'lucide-react';

const TutorialsPreview = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-3">Master the Market</h2>
                        <p className="text-zinc-500">Essential guides for the modern investor.</p>
                    </div>
                    <Link href="`/tutorials" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group">
                        View All Guides <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link href="`/tutorials/winning-odds" className="group relative rounded-3xl overflow-hidden aspect-video bg-zinc-900 border border-white/10 block">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0 transition-opacity group-hover:opacity-80" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform">
                                <Activity className="text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Winning Probabilities</h3>
                            <p className="text-zinc-400">Statistical analysis of every denomination.</p>
                        </div>
                    </Link>

                    <Link href="`/tutorials/automation-guide" className="group relative rounded-3xl overflow-hidden aspect-video bg-zinc-900 border border-white/10 block">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-black z-0 transition-opacity group-hover:opacity-80" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform">
                                <Zap className="text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Automation 101</h3>
                            <p className="text-zinc-400">Set up your account for auto-pilot wins.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TutorialsPreview;


