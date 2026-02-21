import React from 'react';

const Logo = ({ className = "h-8" }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-500">
                <path d="M20 4L4 12V20C4 29.5 10.8 38.3 20 40C29.2 38.3 36 29.5 36 20V12L20 4Z" className="fill-cyan-500/10 stroke-cyan-500 stroke-2" />
                <path d="M12 20L17 25L28 14" className="stroke-cyan-400 stroke-[3] stroke-linecap-round stroke-linejoin-round" />
            </svg>
            <div className="flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-['Space_Grotesk'] leading-none">
                    Pak<span className="text-cyan-500">Bonds</span>
                </span>
            </div>
        </div>
    );
};

export default Logo;
