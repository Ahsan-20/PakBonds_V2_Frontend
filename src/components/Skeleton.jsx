import React from 'react';

const Skeleton = ({ className = '', variant = 'text' }) => {
    const baseClasses = 'skeleton';

    const variantClasses = {
        text: 'h-4 w-full',
        title: 'h-6 w-3/5',
        card: 'h-32 w-full rounded-xl',
        avatar: 'h-10 w-10 rounded-full',
        button: 'h-10 w-24 rounded-lg',
        badge: 'h-6 w-16 rounded-full',
    };

    return (
        <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
    );
};

const SkeletonCard = ({ lines = 3 }) => {
    return (
        <div className="glass-card p-6 space-y-4">
            <Skeleton variant="title" />
            {[...Array(lines)].map((_, i) => (
                <Skeleton
                    key={i}
                    variant="text"
                    className={i === lines - 1 ? 'w-4/5' : 'w-full'}
                />
            ))}
        </div>
    );
};

const SkeletonTable = ({ rows = 5, cols = 4 }) => {
    return (
        <div className="glass-card overflow-hidden">
            {/* Header */}
            <div className="flex gap-4 p-4 border-b border-white/10">
                {[...Array(cols)].map((_, i) => (
                    <Skeleton key={i} variant="text" className="flex-1" />
                ))}
            </div>
            {/* Rows */}
            {[...Array(rows)].map((_, rowIdx) => (
                <div key={rowIdx} className="flex gap-4 p-4 border-b border-white/5">
                    {[...Array(cols)].map((_, colIdx) => (
                        <Skeleton key={colIdx} variant="text" className="flex-1" />
                    ))}
                </div>
            ))}
        </div>
    );
};

const SkeletonGrid = ({ items = 6, cols = 3 }) => {
    return (
        <div className={`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols}`}>
            {[...Array(items)].map((_, i) => (
                <SkeletonCard key={i} />
            ))}
        </div>
    );
};

export { Skeleton, SkeletonCard, SkeletonTable, SkeletonGrid };
export default Skeleton;
