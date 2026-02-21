import React from 'react';
import { Loader2 } from 'lucide-react';

const variants = {
    primary: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white',
    secondary: 'bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10',
    success: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
    danger: 'bg-gradient-to-r from-red-500 to-rose-500 text-white',
    gold: 'bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-900',
    ghost: 'bg-transparent text-white hover:bg-white/5',
};

const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
};

const AnimatedButton = ({
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    fullWidth = false,
    icon: Icon = null,
    iconPosition = 'left',
    className = '',
    onClick,
    type = 'button',
    ...props
}) => {
    const isDisabled = disabled || loading;

    const baseClasses = `
        relative inline-flex items-center justify-center gap-2
        font-semibold rounded-lg
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-transparent
        overflow-hidden
    `;

    const stateClasses = isDisabled
        ? 'opacity-50 cursor-not-allowed'
        : 'cursor-pointer hover:-translate-y-0.5 active:translate-y-0';

    const widthClasses = fullWidth ? 'w-full' : '';

    // Glow effect based on variant
    const glowClasses = !isDisabled && variant === 'primary'
        ? 'hover:shadow-[0_10px_40px_rgba(99,102,241,0.4)]'
        : '';

    return (
        <button
            type={type}
            className={`
                ${baseClasses}
                ${variants[variant]}
                ${sizes[size]}
                ${stateClasses}
                ${widthClasses}
                ${glowClasses}
                ${className}
            `}
            disabled={isDisabled}
            onClick={onClick}
            {...props}
        >
            {/* Shine overlay for gradient buttons */}
            {variant === 'primary' && (
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
                </div>
            )}

            {/* Loading spinner */}
            {loading && (
                <Loader2 className="w-4 h-4 animate-spin" />
            )}

            {/* Icon (left) */}
            {!loading && Icon && iconPosition === 'left' && (
                <Icon className="w-4 h-4" />
            )}

            {/* Content */}
            <span className="relative z-10">{children}</span>

            {/* Icon (right) */}
            {!loading && Icon && iconPosition === 'right' && (
                <Icon className="w-4 h-4" />
            )}
        </button>
    );
};

export default AnimatedButton;
