'use client';

import React from 'react';
import { ArrowLeft, CheckCircle, Search, Smartphone } from 'lucide-react';
import Link from 'next/link';

const HowToCheck = () => (
    <div className="min-h-screen pt-32 pb-20">
        

        <article className="max-w-3xl mx-auto px-6">
            <Link href="/tutorials" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Guides
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The Ultimate Guide to <span className="text-emerald-400">Checking Prize Bonds</span>
            </h1>

            <div className="flex items-center gap-4 text-zinc-500 text-sm mb-12 pb-8 border-b border-white/[0.08]">
                <span>Updated Feb 2026</span>
                <span>•</span>
                <span>5 min read</span>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
                <p className="text-xl leading-relaxed mb-10">
                    For decades, checking prize bonds meant buying a "list" from a street vendor and spending hours scanning tiny numbers with a magnifying glass. Those days are over. Here is the modern way to track your wealth.
                </p>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20">1</span>
                    Method A: Instant Search
                </h2>
                <p className="mb-6">
                    If you just bought a bond and want to check its history, use our <strong>Check Results</strong> tool.
                </p>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 mb-8">
                    <ol className="space-y-4">
                        <li className="flex gap-4">
                            <Search className="shrink-0 text-emerald-400 mt-1" size={20} />
                            <span>Go to the <strong>Result Check</strong> page.</span>
                        </li>
                        <li className="flex gap-4">
                            <CheckCircle className="shrink-0 text-emerald-400 mt-1" size={20} />
                            <span>Select your bond denomination (e.g., 750).</span>
                        </li>
                        <li className="flex gap-4">
                            <CheckCircle className="shrink-0 text-emerald-400 mt-1" size={20} />
                            <span>Enter your bond series using the easy input tool.</span>
                        </li>
                    </ol>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20">2</span>
                    Method B: The "Set & Forget" Automation
                </h2>
                <p className="mb-6">
                    This is the recommended method for serious investors. Instead of checking every time a draw happens, you simply add your bonds to your digital wallet ONE time.
                </p>
                <div className="bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Why use Automation?</h3>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5" />
                            <span><strong>Zero Effort:</strong> We check every single past and future draw for you.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5" />
                            <span><strong>Miss Nothing:</strong> Human error is eliminated.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5" />
                            <span><strong>Notifications:</strong> Get an email the moment you win.</span>
                        </li>
                    </ul>
                    <Link href="/signup" className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors">
                        Create Automated Portfolio
                    </Link>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Common Questions</h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">How accurate is the data?</h3>
                        <p className="text-white/60">We sync directly with National Savings official gazettes. Our database is updated within hours of any new draw.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">Is it free?</h3>
                        <p className="text-white/60">Yes, checking bonds and basic automation is 100% free for all Pakistani citizens.</p>
                    </div>
                </div>
            </div>
        </article>
    </div>
);

export default HowToCheck;





