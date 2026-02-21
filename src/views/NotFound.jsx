'use client';

import React from 'react';
import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">


            <div className="relative mb-8">
                <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full" />
                <AlertTriangle size={80} className="relative z-10 text-red-400" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                404
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-300 mb-6">
                Page Not Found
            </h2>

            <p className="text-zinc-400 max-w-md mb-10 text-lg">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
            >
                <Home size={20} />
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;




