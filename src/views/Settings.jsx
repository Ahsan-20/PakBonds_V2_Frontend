'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import {
    Bell,
    Shield,
    Mail,
    Smartphone,
    LogOut,
    ChevronRight,
    ToggleLeft,
    ToggleRight,
    User,
    Key
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import api from '@/lib/api';

const Settings = () => {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const [settings, setSettings] = useState({
        emailAlerts: true,
        winNotifications: true,
        drawReminders: false,
        securityAlerts: true,
        marketingEmails: false
    });

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await api.get('/settings');
                setSettings(response.data);
            } catch (error) {
                console.error('Failed to fetch settings:', error);
                toast.error('Failed to load settings.');
            } finally {
                setLoading(false);
            }
        };
        fetchSettings();
    }, []);

    const toggleSetting = async (key) => {
        const newSettings = { ...settings, [key]: !settings[key] };
        setSettings(newSettings); // Optimistic update

        try {
            await api.put('/settings', newSettings);
            toast.success('Settings updated.');
        } catch (error) {
            console.error('Failed to update settings:', error);
            toast.error('Failed to save changes.');
            setSettings(prev => ({ ...prev, [key]: !prev[key] })); // Revert on failure
        }
    };

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <div className="min-h-screen relative bg-[#050505] text-white overflow-hidden">
            {/* ── Ambient Background ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
                <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-12">
                {/* Header */}
                <div className="mb-10">
                    <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/[0.05] backdrop-blur-sm shadow-xl inline-block">
                        <h1 className="text-3xl font-black text-white tracking-tight">
                            Settings
                        </h1>
                        <p className="text-zinc-500 mt-1 text-sm">Manage your preferences and security.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sidebar / User Card */}
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30" />
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-4">
                                    <User size={32} className="text-white/60" />
                                </div>
                                <h3 className="font-bold text-lg">{user?.user_id || 'User'}</h3>
                                <p className="text-sm text-zinc-500 font-mono mb-4">{user?.email || 'user@example.com'}</p>

                                <div className="w-full h-px bg-white/[0.05] my-4" />

                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm font-bold"
                                >
                                    <LogOut size={16} /> Log Out
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Settings Area */}
                    <div className="md:col-span-2 space-y-6">

                        {/* Notifications */}
                        <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20">
                                    <Bell size={20} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold">Notifications</h2>
                                    <p className="text-xs text-zinc-500">Choose what you want to be notified about.</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {/* Win Alerts */}
                                <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:border-white/[0.1] transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 border border-amber-500/20 opacity-60 group-hover:opacity-100 transition-opacity">
                                            <Smartphone size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">Prize Win Alerts</h4>
                                            <p className="text-xs text-zinc-500">Get notified when your bond wins a prize.</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => toggleSetting('winNotifications')}
                                        className={`transition-colors ${settings.winNotifications ? 'text-cyan-400' : 'text-zinc-600'}`}
                                    >
                                        {settings.winNotifications ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
                                    </button>
                                </div>

                                {/* Draw Reminders */}
                                <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:border-white/[0.1] transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20 opacity-60 group-hover:opacity-100 transition-opacity">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">Draw Reminders</h4>
                                            <p className="text-xs text-zinc-500">Email reminder 24h before scheduled draws.</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => toggleSetting('drawReminders')}
                                        className={`transition-colors ${settings.drawReminders ? 'text-cyan-400' : 'text-zinc-600'}`}
                                    >
                                        {settings.drawReminders ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
                                    </button>
                                </div>

                                {/* Security Alerts */}
                                <div className="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:border-white/[0.1] transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-red-500/10 rounded-lg text-red-400 border border-red-500/20 opacity-60 group-hover:opacity-100 transition-opacity">
                                            <Shield size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">Security Alerts</h4>
                                            <p className="text-xs text-zinc-500">Get notified on new device logins or password changes.</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => toggleSetting('securityAlerts')}
                                        className={`transition-colors ${settings.securityAlerts ? 'text-cyan-400' : 'text-zinc-600'}`}
                                    >
                                        {settings.securityAlerts ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Security Settings */}
                        <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold">Security</h2>
                                    <p className="text-xs text-zinc-500">Manage your account security.</p>
                                </div>
                            </div>

                            <div
                                onClick={() => router.push('/change-password')}
                                className="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:border-purple-500/30 cursor-pointer transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/[0.03] rounded-lg text-zinc-400 border border-white/[0.05] group-hover:text-white group-hover:border-purple-500/30 transition-all">
                                        <Key size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm group-hover:text-white transition-colors">Change Password</h4>
                                        <p className="text-xs text-zinc-500">Update your password securely.</p>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
