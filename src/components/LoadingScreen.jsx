'use client';

import React from 'react';
import { Hexagon } from 'lucide-react';

const LoadingScreen = ({ message = "Loading..." }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] transition-opacity duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
            <div className="relative flex flex-col items-center gap-8">
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <Hexagon size={96} className="text-zinc-800 absolute inset-0 fill-zinc-900/50 drop-shadow-2xl" strokeWidth={1} />
                    <Hexagon size={48} className="text-cyan-500 relative z-10 animate-[spin_3s_linear_infinite]" strokeWidth={2.5} />
                    <div className="absolute inset-0 bg-cyan-500/30 blur-2xl animate-pulse" />
                    <div className="absolute inset-0 bg-cyan-400/20 blur-xl animate-ping" style={{ animationDuration: '2s' }} />
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xl font-bold text-white tracking-widest uppercase animate-pulse">{message}</span>
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0s' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0.15s' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
