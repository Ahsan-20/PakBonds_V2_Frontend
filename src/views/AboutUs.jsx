'use client';

import React from 'react';
import { Target, Shield, Users, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-28 pb-20 overflow-hidden">



            {/* Hero Section */}
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Revolutionizing <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Prize Bonds.
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-400 leading-relaxed mb-8 border-l-4 border-cyan-500 pl-6">
                        We built PakBonds because we were tired of checking endless PDFs manually. Our mission is to modernize how Pakistanis manage, track, and claim their prize bonds.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/signup" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                            Join Us Free
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: 'Active Users', value: '50,000+' },
                        { label: 'Bonds Checked', value: '12 Million' },
                        { label: 'Prizes Found', value: 'PKR 450M+' },
                        { label: 'Uptime', value: '99.9%' }
                    ].map((stat, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] text-center backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
                            <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                            <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Core Values */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
                    <p className="text-zinc-400 text-lg">The principles that drive every feature we build.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Shield className="text-cyan-400 mb-6" size={40} />
                        <h3 className="text-xl font-bold text-white mb-4">Absolute Security</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Your bond numbers are encrypted. We never ask for personal financial details. Security is our foundation, not an afterthought.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Target className="text-purple-400 mb-6" size={40} />
                        <h3 className="text-xl font-bold text-white mb-4">100% Accuracy</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            We cross-reference multiple official sources to ensure our draw database is flawless. If you won, we will find it.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Users className="text-emerald-400 mb-6" size={40} />
                        <h3 className="text-xl font-bold text-white mb-4">User First</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            From our ad-free interface to our lightning-fast servers, everything is optimized for the best user experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Story / Contact CTA */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center bg-white/[0.02] border border-white/10 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-cyan-500/10 to-transparent -z-10 blur-xl" />
                <Award className="mx-auto text-cyan-400 mb-6" size={48} />
                <h2 className="text-3xl font-bold text-white mb-6">Have questions?</h2>
                <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                    Whether you need help setting up your portfolio or have a business inquiry, our team is always ready to assist you.
                </p>
                <a href="mailto:support@pakbonds.com" className="inline-flex items-center text-cyan-400 font-bold hover:text-cyan-300 transition-colors text-lg">
                    Contact Support <ArrowRight className="ml-2" size={20} />
                </a>
            </div>
        </div>
    );
};

export default AboutUs;




