'use client';

import React from 'react';
import { ArrowLeft, BarChart3, TrendingUp, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const WinningOdds = () => (
    <div className="min-h-screen pt-32 pb-20">
        

        <article className="max-w-3xl mx-auto px-6">
            <Link href="/tutorials" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Guides
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Understanding Your <span className="text-amber-400">Winning Odds</span>
            </h1>

            <div className="flex items-center gap-4 text-zinc-500 text-sm mb-12 pb-8 border-b border-white/[0.08]">
                <span>Updated Feb 2026</span>
                <span>•</span>
                <span>Analysis</span>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
                <p className="text-xl leading-relaxed mb-10">
                    Many investors buy prize bonds based on "lucky numbers" or gut feeling. But prize bonds are a mathematical game. Understanding the probability can help you build a smarter portfolio.
                </p>

                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-10">
                    <div className="flex gap-4">
                        <AlertCircle className="shrink-0 text-amber-400" />
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">The Basic Math</h3>
                            <p className="text-sm text-amber-200/70">
                                In a typical series (e.g., 000001 to 999999), there are usually 1 million bonds.
                                Only a fixed number of prizes are distributed per series.
                                The more bonds you hold, the higher your statistical probability.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Odds by Denomination</h2>

                <div className="overflow-hidden rounded-xl border border-white/10 mb-8">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-white font-bold">
                            <tr>
                                <th className="p-4">Bond (PKR)</th>
                                <th className="p-4">1st Prize</th>
                                <th className="p-4">2nd Prize</th>
                                <th className="p-4">Total Prizes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/[0.02]">
                                <td className="p-4 font-mono text-cyan-400">100</td>
                                <td className="p-4">700,000</td>
                                <td className="p-4">200,000 (x3)</td>
                                <td className="p-4">1,203</td>
                            </tr>
                            <tr className="hover:bg-white/[0.02]">
                                <td className="p-4 font-mono text-blue-400">200</td>
                                <td className="p-4">750,000</td>
                                <td className="p-4">250,000 (x5)</td>
                                <td className="p-4">2,355</td>
                            </tr>
                            <tr className="hover:bg-white/[0.02]">
                                <td className="p-4 font-mono text-purple-400">750</td>
                                <td className="p-4">1,500,000</td>
                                <td className="p-4">500,000 (x3)</td>
                                <td className="p-4">1,700</td>
                            </tr>
                            <tr className="hover:bg-white/[0.02]">
                                <td className="p-4 font-mono text-pink-400">1,500</td>
                                <td className="p-4">3,000,000</td>
                                <td className="p-4">1,000,000 (x3)</td>
                                <td className="p-4">1,700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Improve Your Odds</h2>
                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">1</div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Buy in Sequence</h3>
                            <p className="text-white/60">Buying a packet of 100 sequential numbers (e.g., ends in 00-99) guarantees that one number will match the last digit of any draw, statistically improving your coverage.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">2</div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Diversify Denominations</h3>
                            <p className="text-white/60">Don't put all your investment in one type. Smaller bonds (100, 200) have more frequent draws and more total prizes, while larger bonds have life-changing jackpots.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-white">3</div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Never Miss a Check</h3>
                            <p className="text-white/60">The biggest reason people lose money is simply forgetting to check. Use our <Link href="/tutorials/automation-guide" className="text-blue-400 hover:underline">Automation Tools</Link> to ensure every bond is checked every time.</p>
                        </div>
                    </li>
                </ul>

            </div>
        </article>
    </div>
);

export default WinningOdds;





