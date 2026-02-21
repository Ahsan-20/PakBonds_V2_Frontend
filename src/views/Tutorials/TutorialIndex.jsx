'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Zap, BarChart3, HelpCircle, ArrowRight, Shield } from 'lucide-react';

const TutorialIndex = () => {
    const guides = [];

    return (
        <div className="min-h-screen pt-32 pb-20">
            

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6">
                        <BookOpen size={32} className="text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Bond Investment <span className="text-cyan-400">Masterclass</span>
                    </h1>
                    <p className="text-xl text-white/50">
                        Everything you need to know about managing, checking, and winning with Pakistani Prize Bonds.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: HelpCircle,
                            title: "How to Check Bonds",
                            desc: "The complete guide to manually and automatically checking your prize bonds.",
                            link: "/tutorials/how-to-check",
                            color: "text-cyan-400",
                            bg: "bg-cyan-500/10",
                            border: "border-cyan-500/20"
                        },
                        {
                            icon: BarChart3,
                            title: "Winning Odds Explained",
                            desc: "Learn about the probability of winning for each denomination.",
                            link: "/tutorials/winning-odds",
                            color: "text-purple-400",
                            bg: "bg-purple-500/10",
                            border: "border-purple-500/20"
                        },
                        {
                            icon: Zap,
                            title: "Automate Your Wins",
                            desc: "Set up the 'My Bonds' feature to never miss a draw again.",
                            link: "/tutorials/automation-guide",
                            color: "text-blue-400",
                            bg: "bg-blue-500/10",
                            border: "border-blue-500/20"
                        }
                    ].map((guide, i) => (
                        <Link
                            key={i}
                            href={guide.link}
                            className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${guide.bg} ${guide.border} border flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                                <guide.icon size={28} className={guide.color} />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3">{guide.title}</h2>
                            <p className="text-white/50 mb-8 leading-relaxed">
                                {guide.desc}
                            </p>
                            <div className="flex items-center text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                                Read Guide <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 text-center">
                    <Shield size={48} className="text-cyan-400 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-white mb-4">Ready to apply what you've learned?</h2>
                    <p className="text-white/50 mb-8 max-w-xl mx-auto">
                        Create your free account today and start tracking your bonds with professional tools.
                    </p>
                    <Link href="/signup" className="inline-flex items-center px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-colors">
                        Get Started Free
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TutorialIndex;





