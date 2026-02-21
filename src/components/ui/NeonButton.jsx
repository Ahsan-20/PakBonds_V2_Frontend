import React from 'react';


export const NeonButton = ({ children, to, onClick, variant = 'cyan', className = "", icon: Icon }) => {
    const variants = {
        cyan: "from-cyan-500 to-blue-600 shadow-cyan-500/25",
        gold: "from-amber-400 to-orange-500 shadow-amber-500/25",
        crimson: "from-rose-500 to-red-600 shadow-rose-500/25",
        obsidian: "from-zinc-800 to-zinc-900 border border-white/10 hover:border-white/20"
    };

    const baseStyles = `
        group relative inline-flex items-center justify-center gap-2 
        px-6 py-3 rounded-xl font-bold text-white transition-all duration-300
        hover:scale-[1.02] hover:shadow-lg active:scale-95
        overflow-hidden
        ${className}
    `;

    const gradientStyles = variant === 'obsidian'
        ? variants.obsidian
        : `bg-gradient-to-r ${variants[variant]}`;

    const content = (
        <>
            {variant !== 'obsidian' && (
                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors" />
            )}
            {Icon && <Icon size={18} className="relative z-10" />}
            <span className="relative z-10">{children}</span>
        </>
    );

    if (to) {
        return (
            <Link href={to} className={`${baseStyles} ${gradientStyles}`}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${gradientStyles}`}>
            {content}
        </button>
    );
};

