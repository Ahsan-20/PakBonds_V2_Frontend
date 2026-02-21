import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import ScannerMockup from './ScannerMockup';

const STATS = [
    { value: '10M+', label: 'Bonds Checked' },
    { value: '2.3K', label: 'Winners Found' },
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: 'Free', label: 'Forever' },
];

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
            {/* Layered background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Deep grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />

                {/* Color blobs */}
                <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] rounded-full bg-cyan-600/6 blur-[160px]" />
                <div className="absolute top-[20%] right-[-15%] w-[700px] h-[700px] rounded-full bg-blue-700/6 blur-[160px]" />
                <div className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] rounded-full bg-purple-700/5 blur-[140px]" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.04),transparent)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Text Content */}
                    <div className="text-center lg:text-left">

                        {/* Status badge */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/20 mb-8 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 group cursor-default">
                            <div className="relative">
                                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-60" />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Sparkles size={11} className="text-cyan-400" />
                                <span className="text-xs font-mono text-cyan-300 tracking-widest uppercase">Optimized for 2026 Prize Draws</span>
                            </div>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tight leading-[0.88] mb-6">
                            <span className="text-white block">Your Bonds.</span>
                            <span className="block mt-1">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">Auto-Checked.</span>
                            </span>
                            <span className="text-white block mt-1">Always.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                            Stop searching through thousands of numbers by hand.
                            <span className="text-zinc-200"> Digitize your entire portfolio</span> and
                            let our intelligent scanner detect every winning bond — instantly.
                        </p>

                        {/* CTA stack */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14">
                            <Link
                                href="/signup"
                                className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-cyan-400 text-black font-bold text-base overflow-hidden transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.25)] hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                            >
                                Start for Free
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>

                            <Link
                                href="/prizebonds"
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-zinc-300 font-medium hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto justify-center"
                            >
                                View Bond Types
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                            {['No credit card', 'Completely free', 'Secure & private'].map((item) => (
                                <div key={item} className="flex items-center gap-1.5 text-sm text-zinc-500">
                                    <CheckCircle2 size={14} className="text-cyan-500/70 flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Scanner Mockup + Stats */}
                    <div className="relative flex flex-col items-center gap-6 lg:items-end">

                        {/* Floating scanner UI */}
                        <div className="relative">
                            {/* Glow behind scanner */}
                            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full scale-110" />
                            <ScannerMockup />
                        </div>

                        {/* Stat pills floating around it */}
                        <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                            {STATS.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="group px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 text-center"
                                >
                                    <div className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">{stat.value}</div>
                                    <div className="text-xs text-zinc-500 mt-0.5 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <div className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center pt-2">
                    <div className="w-1.5 h-2.5 rounded-full bg-cyan-400/60 animate-[scroll-down_1.8s_ease-in-out_infinite]" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
