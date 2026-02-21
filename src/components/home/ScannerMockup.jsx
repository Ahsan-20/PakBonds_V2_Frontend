'use client';

import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

const SCAN_RESULTS = [
    { bond: '123456', denom: 'Rs. 750', status: 'checking' },
    { bond: '789012', denom: 'Rs. 200', status: 'no_match' },
    { bond: '345678', denom: 'Rs. 1500', status: 'no_match' },
    { bond: '901234', denom: 'Rs. 100', status: 'winner' },
    { bond: '567890', denom: 'Rs. 750', status: 'no_match' },
];

const ScannerMockup = () => {
    const [visibleItems, setVisibleItems] = useState([SCAN_RESULTS[0]]);
    const [currentIdx, setCurrentIdx] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIdx(prev => {
                const nextIdx = prev < SCAN_RESULTS.length ? prev : 0;
                setVisibleItems(current => {
                    const newItems = [...current, SCAN_RESULTS[nextIdx]];
                    return newItems.slice(-4);
                });
                return nextIdx + 1;
            });
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-sm bg-[#0a0a0e]/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-zinc-500 font-mono">pakbonds_scanner.exe</span>
                <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] text-cyan-400 font-mono">LIVE</span>
                </div>
            </div>

            {/* Scanner body */}
            <div className="p-4 space-y-2 min-h-[220px]">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] text-zinc-600 font-mono">SCANNING DRAW #247 — OCT 2025</span>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-1 h-3 rounded-full bg-cyan-500/40 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                        ))}
                    </div>
                </div>

                {visibleItems.map((item, i) => (
                    <div
                        key={`${item.bond}-${i}`}
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.05] animate-fade-in"
                    >
                        <div className="flex items-center gap-3">
                            {item.status === 'checking' ? (
                                <Loader2 size={14} className="text-cyan-400 animate-spin flex-shrink-0" />
                            ) : item.status === 'winner' ? (
                                <div className="w-3.5 h-3.5 rounded-full bg-green-400 flex-shrink-0 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                            ) : (
                                <div className="w-3.5 h-3.5 rounded-full bg-zinc-700 flex-shrink-0" />
                            )}
                            <span className="text-sm font-mono text-white tracking-wider">{item.bond}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-zinc-500 font-mono">{item.denom}</span>
                            {item.status === 'winner' ? (
                                <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20 animate-pulse">WIN</span>
                            ) : item.status === 'checking' ? (
                                <span className="text-[10px] text-cyan-400 font-mono">...</span>
                            ) : (
                                <span className="text-[10px] text-zinc-700 font-mono">—</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom progress bar */}
            <div className="h-1 w-full bg-zinc-900">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-[scan_3s_ease-in-out_infinite]" style={{ width: '60%' }} />
            </div>
        </div>
    );
};

export default ScannerMockup;
