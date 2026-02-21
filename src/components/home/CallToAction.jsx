import Link from 'next/link';
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const AVATARS = [
    'A', 'M', 'Z', 'K', 'F',
];

const CallToAction = () => {
    return (
        <>
            {/* Smooth fade to the CTA section */}
            <div className="h-16 bg-gradient-to-b from-transparent to-[#050505]" />

            <section className="py-24 relative overflow-hidden bg-[#050505]">
                {/* Top border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Glow blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/8 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-blue-600/6 blur-[80px] rounded-full pointer-events-none" />

                {/* Subtle grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">

                    {/* Social proof */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="flex -space-x-2">
                            {AVATARS.map((letter, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-700 to-blue-800 border-2 border-[#050505] flex items-center justify-center text-[10px] font-bold text-white"
                                >
                                    {letter}
                                </div>
                            ))}
                        </div>
                        <div className="text-sm text-zinc-400">
                            <span className="text-white font-semibold">2,300+ investors</span> already automated
                        </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                        <span className="text-sm text-zinc-500 ml-2 font-mono">5.0 / 5.0</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[0.9] mb-6">
                        Ready to stop
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
                            missing wins?
                        </span>
                    </h2>

                    <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                        Set up your automated portfolio in under 5 minutes. Completely free, always.
                    </p>

                    {/* Primary CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="relative group">
                            {/* Animated glow border effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                            <Link
                                href="/signup"
                                className="relative flex items-center gap-2.5 px-10 py-4 rounded-xl bg-cyan-400 text-black font-bold text-lg hover:bg-cyan-300 transition-colors"
                            >
                                Create Free Account
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <Link
                            href="/about"
                            className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm font-medium py-4 px-6"
                        >
                            Learn more about PakBonds →
                        </Link>
                    </div>

                    {/* Bottom note */}
                    <p className="text-xs text-zinc-700 mt-8 font-mono">
                        No credit card required · No hidden fees · Cancel anytime
                    </p>
                </div>
            </section>
        </>
    );
};

export default CallToAction;
