'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import {
    Trophy, Trash2, Loader2, ArrowLeft, Sparkles,
    DollarSign, Calendar, Hash, Plus, X, ChevronRight
} from 'lucide-react';
import { toast } from 'react-toastify';
import api from '@/lib/api';

const MyWins = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({ total_wins: 0, total_amount: 0, winning_bonds: [] });
    const [deleting, setDeleting] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        number: '',
        denomination: '100',
        prize: 'Third Prize',
        prize_amount: '',
        draw_date: ''
    });
    const [saving, setSaving] = useState(false);

    const fetchWins = async () => {
        if (!user?.email) return;

        try {
            const response = await api.get('/get_winning_bonds');
            setData(response.data);
        } catch (error) {
            console.error('Failed to fetch wins:', error);
            toast.error('Failed to load winning bonds');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWins();
    }, [user]);

    const handleDelete = async (bondId) => {
        setDeleting(bondId);
        try {
            await api.delete('/delete_winning_bond', {
                params: { bond_id: bondId }
            });
            toast.success('Winning bond removed');
            fetchWins(); // Refresh list
        } catch (error) {
            toast.error('Failed to delete');
        } finally {
            setDeleting(null);
        }
    };

    const handleManualSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            await api.post('/save_manual_win', formData);
            toast.success('Manual win added successfully!');
            setIsModalOpen(false);
            setFormData({
                number: '',
                denomination: '100',
                prize: 'Third Prize',
                prize_amount: '',
                draw_date: ''
            });
            fetchWins();
        } catch (error) {
            toast.error(error.response?.data?.detail || 'Failed to save win');
        } finally {
            setSaving(false);
        }
    };

    const formatAmount = (amount) => {
        if (amount >= 1000000) {
            return `${(amount / 1000000).toFixed(1)}M`;
        } else if (amount >= 1000) {
            return `${(amount / 1000).toFixed(0)}K`;
        }
        return amount.toLocaleString();
    };

    return (
        <div className="min-h-screen relative bg-[#050505] text-white overflow-hidden">
            {/* ── Ambient Background ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-amber-600/10 blur-[150px]" />
                <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-12">
                {/* Header */}
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/[0.05] backdrop-blur-sm shadow-xl">
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-colors mb-4"
                        >
                            <ArrowLeft size={16} />
                            Back to Dashboard
                        </Link>
                        <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
                            <Trophy className="text-amber-400" />
                            My Winning Bonds
                        </h1>
                        <p className="text-zinc-500 mt-1 text-sm">
                            Track and manage your saved winning bonds
                        </p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.04] hover:bg-white/[0.08] text-white rounded-xl font-bold transition-all border border-white/10 hover:border-white/20 shadow-lg"
                    >
                        <Plus size={18} />
                        Add Manual Win
                    </button>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="relative overflow-hidden bg-white/[0.02] border border-white/[0.08] backdrop-blur-md rounded-2xl p-6 shadow-xl">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 opacity-40" />
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                <Trophy size={22} className="text-amber-400" />
                            </div>
                            <div>
                                <p className="text-3xl font-black text-white font-mono tracking-tight">{data.total_wins}</p>
                                <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Total Wins</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden bg-white/[0.02] border border-white/[0.08] backdrop-blur-md rounded-2xl p-6 shadow-xl">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 opacity-40" />
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <DollarSign size={22} className="text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-3xl font-black text-white font-mono tracking-tight">Rs. {formatAmount(data.total_amount)}</p>
                                <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Total Won</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Winning Bonds List */}
                {loading ? (
                    <div className="py-24 flex flex-col items-center justify-center">
                        <Loader2 className="w-10 h-10 text-white/30 animate-spin mx-auto mb-4" />
                        <p className="text-zinc-500 text-sm">Loading your wins...</p>
                    </div>
                ) : data.winning_bonds.length === 0 ? (
                    <div className="bg-white/[0.02] border border-white/[0.08] backdrop-blur-md rounded-2xl p-12 text-center shadow-xl">
                        <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mx-auto mb-4">
                            <Trophy className="w-8 h-8 text-white/20" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">No Wins Yet</h3>
                        <p className="text-zinc-500 mb-6">
                            When you find winning bonds, save them here to track your wins.
                        </p>
                        <Link
                            href="/compare"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold hover:bg-cyan-500/20 transition-all"
                        >
                            Check Your Bonds
                            <ChevronRight size={18} />
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white/[0.02] border border-white/[0.08] backdrop-blur-md rounded-2xl overflow-hidden shadow-xl">
                        <div className="px-6 py-4 border-b border-white/[0.05] bg-white/[0.02]">
                            <h3 className="font-bold text-white flex items-center gap-2 text-sm">
                                <Sparkles size={16} className="text-amber-400" />
                                Your Wins ({data.winning_bonds.length})
                            </h3>
                        </div>
                        <div className="divide-y divide-white/[0.05]">
                            {data.winning_bonds.map((bond) => (
                                <div key={bond.id} className="p-5 hover:bg-white/[0.02] transition-colors">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <p className="font-mono text-2xl font-bold text-white tracking-wider">
                                                    {bond.number}
                                                </p>
                                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${bond.source === 'manual'
                                                    ? 'bg-zinc-700/50 text-zinc-300 border border-zinc-600/30'
                                                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                                    }`}>
                                                    {bond.prize}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                                                <span className="flex items-center gap-1.5">
                                                    <Hash size={12} />
                                                    Rs. {bond.denomination}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar size={12} />
                                                    {bond.draw_date}
                                                </span>
                                                {bond.draw_number && (
                                                    <span>Draw: {bond.draw_number}</span>
                                                )}
                                            </div>
                                            <p className="text-emerald-400 font-bold mt-2 font-mono">
                                                {bond.prize_amount}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(bond.id)}
                                            disabled={deleting === bond.id}
                                            className="p-2.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors disabled:opacity-50 border border-red-500/10"
                                            title="Remove"
                                        >
                                            {deleting === bond.id ? (
                                                <Loader2 size={18} className="animate-spin" />
                                            ) : (
                                                <Trash2 size={18} />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Manual Entry Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-md">
                        <div className="bg-[#0a0f18] border border-white/[0.08] rounded-2xl w-full max-w-md p-6 relative shadow-2xl">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <h2 className="text-xl font-bold text-white mb-6">Add Manual Win</h2>

                            <form onSubmit={handleManualSave} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                                        Bond Number
                                    </label>
                                    <input
                                        type="text"
                                        maxLength="6"
                                        value={formData.number}
                                        onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                                        placeholder="e.g. 123456"
                                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white font-mono focus:outline-none focus:border-cyan-500/50 transition-colors shadow-inner"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                                            Denomination
                                        </label>
                                        <select
                                            value={formData.denomination}
                                            onChange={(e) => setFormData({ ...formData, denomination: e.target.value })}
                                            className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                                        >
                                            <option value="100">100</option>
                                            <option value="200">200</option>
                                            <option value="750">750</option>
                                            <option value="1500">1500</option>
                                            <option value="7500">7500</option>
                                            <option value="15000">15000</option>
                                            <option value="25000">25000 Premium</option>
                                            <option value="40000">40000 Premium</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                                            Amount (Rs)
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.prize_amount}
                                            onChange={(e) => setFormData({ ...formData, prize_amount: e.target.value })}
                                            placeholder="e.g. 5000"
                                            className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white font-mono focus:outline-none focus:border-cyan-500/50 transition-colors shadow-inner"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                                        Draw Date
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.draw_date}
                                        onChange={(e) => setFormData({ ...formData, draw_date: e.target.value })}
                                        placeholder="DD-MM-YYYY"
                                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white font-mono focus:outline-none focus:border-cyan-500/50 transition-colors shadow-inner"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                                        Prize Rank
                                    </label>
                                    <select
                                        value={formData.prize}
                                        onChange={(e) => setFormData({ ...formData, prize: e.target.value })}
                                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    >
                                        <option value="First Prize">First Prize</option>
                                        <option value="Second Prize">Second Prize</option>
                                        <option value="Third Prize">Third Prize</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold py-3.5 rounded-xl transition-all mt-2 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                                >
                                    {saving ? <Loader2 size={20} className="animate-spin mx-auto" /> : 'Save Win'}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyWins;



