'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';

export default function TransitionProvider({ children }) {
    const pathname = usePathname();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Trigger the Base Animation when the pathname changes
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 600); // 600ms duration for the hexagon animation

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            {isTransitioning && <LoadingScreen />}
            <div className={`w-full transition-opacity duration-300 ease-in ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {children}
            </div>
        </>
    );
}
