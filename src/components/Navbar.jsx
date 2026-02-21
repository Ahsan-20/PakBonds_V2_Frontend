'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, LogOut, ChevronDown, Lock, Settings, Hexagon, Bell } from 'lucide-react';
import api from '@/lib/api';

const Navbar = () => {
    const { user, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [isMyToolsOpen, setIsMyToolsOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);

    // Auto-close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setShowUserMenu(false);
    }, [pathname]);

    // Fetch Unread Count
    useEffect(() => {
        if (!user) return;
        const fetchUnread = async () => {
            try {
                const response = await api.get('/notifications/');
                if (response.status === 200) {
                    const data = response.data;
                    const count = data.filter(n => !n.is_read).length;
                    setUnreadCount(count);
                }
            } catch (err) {
                console.error("Failed to fetch notifications", err);
            }
        };
        fetchUnread();
        const interval = setInterval(fetchUnread, 60000);
        return () => clearInterval(interval);
    }, [user]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        router.push('/');
        setShowUserMenu(false);
    };

    const isActive = (path) => pathname === path;

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.08]'
                : 'bg-transparent border-b border-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <Hexagon size={40} className="text-zinc-800 absolute inset-0 fill-zinc-900/50" strokeWidth={1} />
                                <Hexagon size={24} className="text-cyan-500 relative z-10 group-hover:rotate-90 transition-transform duration-500" strokeWidth={2.5} />
                                <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-white tracking-tight leading-none group-hover:text-cyan-400 transition-colors">
                                    Pak<span className="text-zinc-400">Bonds</span>
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1">
                            {user ? (
                                <>
                                    <Link href="/dashboard" className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive('/dashboard') ? 'text-white bg-white/[0.08]' : 'text-zinc-400 hover:text-white hover:bg-white/[0.02]'}`}>
                                        Dashboard
                                    </Link>
                                    {/* My Tools Dropdown */}
                                    <div className="relative group">
                                        <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${['/manage-bonds', '/compare', '/my-wins'].includes(pathname) ? 'text-white' : 'text-zinc-300 hover:text-white'}`}>
                                            My Tools <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                                        </button>
                                        <div className="absolute top-full left-0 w-48 bg-[#0a0a0b] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top pt-2">
                                            <div className="py-2 flex flex-col">
                                                <Link href="/my-wins" className="px-4 py-2 text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/5 text-left">My Wins</Link>
                                                <Link href="/manage-bonds" className="px-4 py-2 text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/5 text-left">My Bonds</Link>
                                                <Link href="/compare" className="px-4 py-2 text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/5 text-left">Check Results</Link>
                                                <Link href="/download" className="px-4 py-2 text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/5 text-left">Download</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link href="/" className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive('/') ? 'text-white bg-white/[0.08]' : 'text-zinc-400 hover:text-white hover:bg-white/[0.02]'}`}>
                                    Home
                                </Link>
                            )}

                            {/* Resources Dropdown */}
                            <div className="relative group">
                                <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${['/blog', '/prizebonds', '/about'].some(p => pathname.startsWith(p)) ? 'text-white' : 'text-zinc-300 hover:text-white'}`}>
                                    Resources <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                                </button>
                                <div className="absolute top-full left-0 w-48 bg-[#0a0a0b] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top pt-2">
                                    <div className="py-2 flex flex-col">
                                        <Link href="/blog" className="px-4 py-2 text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/5 text-left">Blog & Guides</Link>
                                        <Link href="/prizebonds" className="px-4 py-2 text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/5 text-left">Prize Bonds</Link>
                                        <Link href="/about" className="px-4 py-2 text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/5 text-left">About Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="hidden md:flex items-center gap-4">
                            {user ? (
                                <div className="flex items-center gap-4">
                                    <Link href="/notifications" className="relative p-2 text-zinc-400 hover:text-white transition-colors group">
                                        <Bell size={20} className="group-hover:rotate-12 transition-transform" />
                                        {unreadCount > 0 && (
                                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_8px_cyan]" />
                                        )}
                                    </Link>
                                    <div className="relative">
                                        <button
                                            onClick={() => setShowUserMenu(!showUserMenu)}
                                            className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/[0.08] bg-[#0a0a0b] hover:border-white/[0.2] transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                                <span className="text-xs font-bold text-white">{user.user_id?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}</span>
                                            </div>
                                            <span className="text-sm text-zinc-300 max-w-[100px] truncate">{user.user_id || user.email?.split('@')[0]}</span>
                                            <ChevronDown size={14} className="text-zinc-500" />
                                        </button>
                                        {showUserMenu && (
                                            <>
                                                <div className="fixed inset-0" onClick={() => setShowUserMenu(false)} />
                                                <div className="absolute right-0 mt-2 w-48 bg-[#0a0a0b] border border-white/10 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2">
                                                    <div className="px-4 py-2 border-b border-white/5 mb-2">
                                                        <p className="text-xs text-zinc-500">Signed in as</p>
                                                        <p className="text-sm font-bold text-white truncate">{user.user_id || user.email}</p>
                                                        {user.user_id && <p className="text-xs text-zinc-500 truncate">{user.email}</p>}
                                                    </div>
                                                    <Link href="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/5 transition-colors" onClick={() => setShowUserMenu(false)}>
                                                        <Settings size={14} /> Settings
                                                    </Link>
                                                    <Link href="/change-password" className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-400 hover:text-purple-400 hover:bg-white/5 transition-colors" onClick={() => setShowUserMenu(false)}>
                                                        <Lock size={14} /> Change Password
                                                    </Link>
                                                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors">
                                                        <LogOut size={14} /> Sign out
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Log in</Link>
                                    <Link href="/signup" className="px-5 py-2.5 rounded-lg bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-zinc-400 hover:text-white">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-[#050505] border-t border-white/[0.08] p-4 space-y-2">
                        <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05]">Home</Link>
                        {user && (
                            <div className="border-b border-white/[0.05] pb-2 mb-2">
                                <button onClick={() => setIsMyToolsOpen(!isMyToolsOpen)} className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors">
                                    <span className="font-medium text-white">My Tools</span>
                                    <ChevronDown size={16} className={`transition-transform duration-200 ${isMyToolsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMyToolsOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pl-4 space-y-1">
                                        <Link href="/my-wins" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.05]">My Wins</Link>
                                        <Link href="/manage-bonds" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.05]">My Bonds</Link>
                                        <Link href="/compare" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.05]">Check Results</Link>
                                        <Link href="/download" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.05]">Download</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div>
                            <button onClick={() => setIsResourcesOpen(!isResourcesOpen)} className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors">
                                <span className="font-medium">Resources</span>
                                <ChevronDown size={16} className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isResourcesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pl-4 space-y-1 pb-2">
                                    <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.05]">Blog & Guides</Link>
                                    <Link href="/prizebonds" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.05]">Prize Bonds</Link>
                                    <Link href="/about" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.05]">About Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-white/[0.08] pt-4 mt-4">
                            {user ? (
                                <div className="space-y-2">
                                    <Link href="/settings" onClick={() => setIsOpen(false)} className="flex items-center gap-2 px-4 py-3 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-white/[0.05]">
                                        <Settings size={18} /> Settings
                                    </Link>
                                    <Link href="/change-password" onClick={() => setIsOpen(false)} className="flex items-center gap-2 px-4 py-3 rounded-lg text-zinc-400 hover:text-purple-400 hover:bg-white/[0.05]">
                                        <Lock size={18} /> Change Password
                                    </Link>
                                    <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                                        <LogOut size={18} /> Sign Out
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    <Link href="/login" className="block text-center py-2 text-zinc-400">Log In</Link>
                                    <Link href="/signup" className="block text-center py-3 bg-white text-black font-bold rounded-lg">Get Started</Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
