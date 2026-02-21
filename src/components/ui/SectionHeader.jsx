import React from 'react';

export const SectionHeader = ({ title, subtitle, align = "center", className = "" }) => (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {title}
        </h2>
        {subtitle && (
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                {subtitle}
            </p>
        )}
        <div className={`h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-6 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
);
