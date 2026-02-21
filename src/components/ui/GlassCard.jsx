import React from 'react';

export const GlassCard = ({ children, className = "", hoverEffect = false }) => (
    <div className={`
        relative overflow-hidden bg-[#0a0a0b] border border-white/[0.08] 
        shadow-2xl backdrop-blur-sm rounded-2xl
        ${hoverEffect ? 'hover:border-white/20 hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1' : ''}
        ${className}
    `}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10">
            {children}
        </div>
    </div>
);
