'use client';

import React from 'react';
import { ArrowLeft, Zap, Bell, Database } from 'lucide-react';
import Link from 'next/link';

const AutomationGuide = () => (
    <div className="min-h-screen pt-32 pb-20">
        

        <article className="max-w-3xl mx-auto px-6">
            <Link href="/tutorials" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Guides
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Guide to <span className="text-blue-400">Automated Checking</span>
            </h1>

            <div className="flex items-center gap-4 text-zinc-500 text-sm mb-12 pb-8 border-b border-white/[0.08]">
                <span>Updated Feb 2026</span>
                <span>•</span>
                <span>3 min setup</span>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
                <p className="text-xl leading-relaxed mb-10">
                    The average investor spends 2-3 hours per year checking prize bond lists. Our automation tools reduce that to zero. Here is how to set up your "Set & Forget" portfolio.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                        <Database className="text-blue-400 mb-4" size={32} />
                        <h3 className="text-lg font-bold text-white mb-2">1. One-Time Setup</h3>
                        <p className="text-sm text-white/50">Enter your bond numbers once. We store them encrypted in your personal vault.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                        <Bell className="text-blue-400 mb-4" size={32} />
                        <h3 className="text-lg font-bold text-white mb-2">2. Silent Monitoring</h3>
                        <p className="text-sm text-white/50">We check every new draw against your vault automatically.</p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-12 mb-6">Setup Instructions</h2>

                <div className="space-y-8">
                    <div className="relative pl-8 border-l-2 border-blue-500/30">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-blue-500" />
                        <h3 className="text-xl font-bold text-white mb-2">Step 1: Sign Up</h3>
                        <p className="mb-4">Create a free account. You only need an email address.</p>
                        <Link href="/signup" className="text-blue-400 hover:text-blue-300 font-medium">Create Account →</Link>
                    </div>

                    <div className="relative pl-8 border-l-2 border-blue-500/30">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-blue-500" />
                        <h3 className="text-xl font-bold text-white mb-2">Step 2: Add Bonds</h3>
                        <p className="mb-4">Go to <strong>Manage Bonds</strong> in your dashboard. You have three ways to add numbers:</p>
                        <ul className="space-y-2 mb-4 text-sm text-white/70">
                            <li>• <strong>Manual:</strong> Type single numbers (e.g., 123456)</li>
                            <li>• <strong>Range:</strong> Add a full packet (e.g., 000001 - 000100)</li>
                            <li>• <strong>Upload:</strong> Drop a CSV or Excel file if you have many bonds</li>
                        </ul>
                    </div>

                    <div className="relative pl-8 border-l-2 border-blue-500/30">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-blue-500" />
                        <h3 className="text-xl font-bold text-white mb-2">Step 3: Verify & Relax</h3>
                        <p>Check your <strong>Dashboard</strong> to see your total "Net Asset Value". That's it! If any of these numbers appear in a future draw, you will receive an alert.</p>
                    </div>
                </div>

                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 to-black border border-blue-500/20 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Start Automating Today</h2>
                    <p className="text-white/50 mb-8">It's completely free for basic use.</p>
                    <Link href="/manage-bonds" className="inline-flex items-center px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">
                        Go to My Bonds
                    </Link>
                </div>

            </div>
        </article>
    </div>
);

export default AutomationGuide;





