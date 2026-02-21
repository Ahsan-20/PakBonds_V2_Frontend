'use client';

import React, { useState, useEffect } from 'react';
import { Bell, Check, Trash2, Info, Trophy, AlertTriangle, XCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import LoadingScreen from '../components/LoadingScreen';

const NotificationHistory = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    // Fetch notifications
    const fetchNotifications = async () => {
        try {
            // Check for token presence (api interceptor handles adding it, but we can check early)

            const response = await api.get('/notifications/');
            setNotifications(response.data);
        } catch (err) {
            console.error("Fetch notifications error:", err);
            // 401 is handled by interceptor (optional check here if needed)
            setError(err.message || 'Failed to fetch notifications');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    // Mark all as read
    const markAllRead = async () => {
        try {
            await api.put('/notifications/read-all');
            // Update local state
            setNotifications(notifications.map(n => ({ ...n, is_read: true })));
        } catch (err) {
            console.error("Failed to mark all read", err);
        }
    };

    // Mark single as read
    const markAsRead = async (id) => {
        try {
            await api.put(`/notifications/${id}/read`);
            setNotifications(notifications.map(n => n._id === id ? { ...n, is_read: true } : n));
        } catch (err) {
            console.error("Failed to mark read", err);
        }
    };

    const getIcon = (type) => {
        switch (type) {
            case 'win': return <Trophy className="text-yellow-400" size={24} />;
            case 'error': return <XCircle className="text-red-400" size={24} />;
            case 'alert': return <AlertTriangle className="text-orange-400" size={24} />;
            default: return <Info className="text-blue-400" size={24} />;
        }
    };



    return (
        <div className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-6">


            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                        <Bell className="text-cyan-400" /> Notifications
                    </h1>
                    <p className="text-zinc-400 mt-2">Stay updated on your wins and draw alerts.</p>
                </div>

                {notifications.some(n => !n.is_read) && (
                    <button
                        onClick={markAllRead}
                        className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <Check size={16} /> Mark all read
                    </button>
                )}
            </header>

            {loading ? (
                <LoadingScreen />
            ) : error ? (
                <div className="text-center py-20 text-red-400">Error: {error}</div>
            ) : notifications.length === 0 ? (
                <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-white/5">
                    <Bell size={48} className="mx-auto text-zinc-700 mb-4" />
                    <p className="text-zinc-500">No notifications yet.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {notifications.map((note) => (
                        <div
                            key={note._id}
                            className={`relative p-6 rounded-xl border transition-all hover:bg-white/[0.02] ${note.is_read
                                ? 'bg-zinc-900/30 border-white/5 opacity-70'
                                : 'bg-zinc-900 border-cyan-500/30 shadow-[0_0_15px_-5px_rgba(6,182,212,0.15)]'
                                }`}
                            onClick={() => !note.is_read && markAsRead(note._id)}
                        >
                            <div className="flex gap-4">
                                <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-zinc-800 border border-white/5 select-none`}>
                                    {getIcon(note.type)}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start gap-4">
                                        <h3 className={`font-semibold text-lg truncate pr-8 ${note.is_read ? 'text-zinc-400' : 'text-white'}`}>
                                            {note.title}
                                        </h3>
                                        <span className="text-xs text-zinc-500 whitespace-nowrap shrink-0">
                                            {new Date(note.created_at).toLocaleDateString()}
                                        </span>
                                    </div>

                                    <p className="text-zinc-400 mt-1 leading-relaxed">
                                        {note.message}
                                    </p>

                                    {note.link && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                markAsRead(note._id);
                                                router.push(note.link);
                                            }}
                                            className="mt-3 text-sm text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
                                        >
                                            View Details
                                        </button>
                                    )}
                                </div>

                                {/* Unread Dot */}
                                {!note.is_read && (
                                    <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_cyan]" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NotificationHistory;





