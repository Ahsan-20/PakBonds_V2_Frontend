import React from 'react';
import Link from 'next/link';
import { Mail, Lock, ArrowUpRight } from 'lucide-react';
import Logo from './common/Logo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#050505] border-t border-white/[0.08] overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none translate-y-[-50%]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none translate-y-[50%]" />

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    <div className="md:col-span-4 space-y-6">
                        <Link href="/" className="inline-block"><Logo /></Link>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                            The advanced automated bond checking platform for the modern Pakistani investor. Secure, fast, and always free.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-mono text-green-400 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                SYSTEMS OPERATIONAL
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-white font-mono text-sm font-bold mb-6 tracking-wider uppercase opacity-50">Platform</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Login', path: '/login' },
                                    { name: 'Create Account', path: '/signup' },
                                    { name: 'Check Results', path: '/compare' },
                                    { name: 'Download Lists', path: '/download' },
                                ].map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.path} className="text-zinc-500 hover:text-cyan-400 text-sm transition-colors flex items-center gap-1 group">
                                            {item.name}
                                            <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-mono text-sm font-bold mb-6 tracking-wider uppercase opacity-50">Resources</h4>
                            <ul className="space-y-4 text-sm text-zinc-400">
                                <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog & Guides</Link></li>
                                <li><Link href="/blog/schedule-2026" className="hover:text-cyan-400 transition-colors">Draw Schedule 2026</Link></li>
                                <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-mono text-sm font-bold mb-6 tracking-wider uppercase opacity-50">Legal</h4>
                            <ul className="space-y-4">
                                <li><Link href="/privacy-policy" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms-of-service" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
                                <li className="pt-4">
                                    <a href="mailto:support@pakbonds.com" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                                        <Mail size={14} /> Contact Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-zinc-600 text-xs font-mono">© {currentYear} PAKBONDS // INC.</div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-zinc-600 text-xs font-mono">
                            <Lock size={12} /> SSL ENCRYPTED
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
