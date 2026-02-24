import React from 'react';
import { Target, Shield, Users, Award, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative">

            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
                <div className="absolute bottom-[20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-700/10 blur-[160px]" />
            </div>

            <div className="relative z-10 pt-32 pb-24">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/20 mb-8 backdrop-blur-md">
                            <Sparkles size={11} className="text-cyan-400" />
                            <span className="text-xs font-mono text-cyan-300 tracking-widest uppercase">Our Mission</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]">
                            Revolutionizing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                                Prize Bonds.
                            </span>
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed mb-10 border-l-2 border-cyan-500/50 pl-6">
                            We built PakBonds because we were tired of checking endless PDFs manually. Our mission is to modernize how Pakistanis manage, track, and claim their prize bonds safely and effortlessly.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/signup" className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-1">
                                Join Us Free <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { label: 'Active Users', value: '50k+', color: 'text-cyan-400', accent: 'via-cyan-500' },
                            { label: 'Bonds Checked', value: '12M+', color: 'text-blue-400', accent: 'via-blue-500' },
                            { label: 'Prizes Found', value: 'PKR 450M+', color: 'text-emerald-400', accent: 'via-emerald-500' },
                            { label: 'Uptime', value: '99.9%', color: 'text-purple-400', accent: 'via-purple-500' }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] text-center backdrop-blur-sm hover:border-white/[0.1] transition-all hover:-translate-y-1 relative overflow-hidden group">
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${stat.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                                <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-3 tracking-tighter`}>{stat.value}</div>
                                <div className="text-[11px] font-mono font-medium text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Values */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-zinc-400 text-lg">The uncompromising principles guiding everything we build.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/[0.05] relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8">
                                <Shield className="text-cyan-400" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Absolute Security</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Your bond numbers are heavily encrypted. We never ask for personal financial details. Security is our foundation, not an afterthought.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/[0.05] relative overflow-hidden group hover:border-purple-500/30 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-8">
                                <Target className="text-purple-400" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">100% Accuracy</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                We meticulously cross-reference multiple official government sources to ensure our draw database is completely flawless. If you won, we will find it.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/[0.015] border border-white/[0.05] relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8">
                                <Users className="text-emerald-400" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">User First</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                From our ad-free pristine interface to our lightning-fast servers and proactive draw alerts, everything is optimized for the best user experience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Story / Contact CTA */}
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="text-center bg-white/[0.02] border border-white/[0.07] rounded-3xl p-12 sm:p-20 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/10 to-transparent -z-10 blur-[100px]" />
                        <Award className="mx-auto text-cyan-400 mb-6" size={56} strokeWidth={1.5} />
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Have questions or feedback?</h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            Whether you need help setting up your portfolio, have a feature request, or just want to say hello—our team is always ready to assist you.
                        </p>
                        <a href="mailto:support@pakbonds.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] text-white font-bold transition-all hover:-translate-y-0.5">
                            Contact Support <ArrowRight size={18} className="text-cyan-400" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;




