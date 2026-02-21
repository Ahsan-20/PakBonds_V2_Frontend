'use client';

import React, { useState, useEffect } from 'react';
import api from '@/lib/api';
import { toast } from 'react-toastify';
import { Plus, Upload, Trash2, RefreshCw, FileSpreadsheet, X, ChevronDown, Cpu, Shield, Save, ListOrdered } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { NeonButton } from '../components/ui/NeonButton'; // Assuming we can reuse or inline styles if not available
import { GlassCard } from '../components/ui/GlassCard'; // Assuming reuse

const ManageBonds = () => {
    const { user } = useAuth();
    const [denomination, setDenomination] = useState('100');
    const [bonds, setBonds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [addNumbers, setAddNumbers] = useState('');
    const [deleteNumbers, setDeleteNumbers] = useState('');
    const [file, setFile] = useState(null);
    const [activeTab, setActiveTab] = useState('view'); // 'view', 'add', 'range', 'upload', 'delete'
    const [searchTerm, setSearchTerm] = useState(''); // New search state

    // New Range State
    const [rangeStart, setRangeStart] = useState('');
    const [rangeEnd, setRangeEnd] = useState('');

    const denominations = ['100', '200', '750', '1500', '25000', '40000'];

    const getDenomColor = (d) => {
        const colors = {
            '100': 'text-cyan-400 border-cyan-500/50 shadow-cyan-500/20',
            '200': 'text-blue-400 border-blue-500/50 shadow-blue-500/20',
            '750': 'text-purple-400 border-purple-500/50 shadow-purple-500/20',
            '1500': 'text-fuchsia-400 border-fuchsia-500/50 shadow-fuchsia-500/20',
            '25000': 'text-amber-400 border-amber-500/50 shadow-amber-500/20',
            '40000': 'text-rose-400 border-rose-500/50 shadow-rose-500/20',
        };
        return colors[d] || 'text-white border-white/50 shadow-white/20';
    };

    const fetchBonds = async () => {
        setLoading(true);
        try {
            const response = await api.get('/get_bond_numbers', {
                params: { denomination },
            });
            setBonds(response.data.numbers || []);
        } catch (error) {
            if (error.response?.status === 404) {
                setBonds([]);
            } else {
                toast.error('Failed to fetch bonds.');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user?.email) fetchBonds();
    }, [denomination, user]);

    const handleAdd = async (e) => {
        e.preventDefault();
        if (!addNumbers) return;

        const formData = new FormData();
        formData.append('denomination', denomination);
        formData.append('numbers', addNumbers);

        try {
            const response = await api.post('/add_specific_bond_number', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            toast.success(response.data.detail || 'Bonds added successfully');
            setAddNumbers('');
            fetchBonds();
        } catch (error) {
            toast.error(error.response?.data?.detail || 'Failed to add bonds');
        }
    };

    const handleAddRange = async (e) => {
        e.preventDefault();

        if (rangeStart.length !== 6 || rangeEnd.length !== 6) {
            toast.error("Both Start and End numbers must be exactly 6 digits.");
            return;
        }

        const formData = new FormData();
        formData.append('denomination', denomination);
        formData.append('start_number', rangeStart);
        formData.append('end_number', rangeEnd);

        setLoading(true);
        try {
            const response = await api.post('/add_bond_range', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            toast.success(response.data.detail || 'Bond range added successfully');
            setRangeStart('');
            setRangeEnd('');
            fetchBonds();
            setActiveTab('view');
        } catch (error) {
            toast.error(error.response?.data?.detail || 'Failed to add bond range');
        } finally {
            setLoading(false);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('denomination', denomination);

        try {
            const response = await api.post('/upload_bond_numbers', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            toast.success(response.data.detail || 'File uploaded successfully');
            setFile(null);
            fetchBonds();
        } catch (error) {
            toast.error(error.response?.data?.detail || 'Upload failed');
        }
    };

    const handleDeleteSpecific = async (e) => {
        e.preventDefault();
        if (!deleteNumbers) return;

        try {
            await api.delete('/delete_specific_bond_number', {
                params: { denomination, numbers: deleteNumbers },
            });
            toast.success('Bonds deleted successfully');
            setDeleteNumbers('');
            fetchBonds();
        } catch (error) {
            toast.error(error.response?.data?.detail || 'Failed to delete bonds');
        }
    };

    const handleDeleteAll = async () => {
        if (!window.confirm(`Delete ALL ${denomination} PKR bonds? This cannot be undone.`)) return;

        try {
            await api.delete('/delete_all_bond_numbers', {
                params: { denomination },
            });
            toast.success('All bonds deleted');
            fetchBonds();
        } catch (error) {
            toast.error('Failed to delete all bonds');
        }
    };

    const tabs = [
        { id: 'view', label: 'INVENTORY', icon: Cpu },
        { id: 'add', label: 'MANUAL ENTRY', icon: Plus },
        { id: 'range', label: 'RANGE ENTRY', icon: ListOrdered },
        { id: 'upload', label: 'DATA UPLOAD', icon: Upload },
        { id: 'delete', label: 'PURGE', icon: Trash2 },
    ];

    return (
        <div className="max-w-5xl mx-auto pt-28 pb-12">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
                        Bond <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Inventory</span>
                    </h1>
                    <p className="text-zinc-400">Manage and track your digital assets.</p>
                </div>

                {/* Denomination Selector */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-30 group-hover:opacity-60 blur transition duration-500" />
                    <div className="relative flex items-center bg-black rounded-xl p-1 border border-white/10">
                        <div className="px-3 text-xs font-mono text-purple-400 uppercase tracking-widest border-r border-white/10">Denom</div>
                        <select
                            value={denomination}
                            onChange={(e) => setDenomination(e.target.value)}
                            className="bg-transparent text-white font-bold px-4 py-2 focus:outline-none cursor-pointer appearance-none pr-8 relative z-10"
                            style={{ backgroundColor: '#000000', color: '#ffffff' }}
                        >
                            {denominations.map((d) => (
                                <option key={d} value={d} className="bg-black text-white">PKR {d}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none z-0" />
                    </div>
                </div>
            </div>

            {/* Glass Navigation Tabs */}
            <div className="flex p-1 mb-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-x-auto">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold tracking-widest transition-all duration-300 ${isActive
                                ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10'
                                : 'text-zinc-500 hover:text-white/70 hover:bg-white/5'
                                }`}
                        >
                            <tab.icon size={16} className={isActive ? 'text-purple-400' : ''} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Main Content Area */}
            <div className="relative">
                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/5 to-transparent -z-10 rounded-3xl blur-3xl pointer-events-none" />

                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 min-h-[400px] shadow-2xl">

                    {/* VIEW BONDS */}
                    {activeTab === 'view' && (
                        <div className="animate-fade-in">
                            <div className="flex flex-col gap-4 mb-8 pb-6 border-b border-white/10">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-white mb-1">Stored Assets</h2>
                                        <p className="text-sm text-zinc-500 font-mono">
                                            TOTAL: <span className="text-white">{bonds.length}</span> UNITS |
                                            VALUE: <span className="text-purple-400">PKR {(bonds.length * parseInt(denomination)).toLocaleString()}</span>
                                        </p>
                                    </div>
                                    <button
                                        onClick={fetchBonds}
                                        className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:rotate-180 duration-500"
                                    >
                                        <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
                                    </button>
                                </div>

                                {/* Search Bar */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search bond number..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full px-4 py-3 pl-10 rounded-xl bg-black border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 transition-all font-mono"
                                    />
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </div>
                                </div>
                            </div>

                            {loading ? (
                                <div className="py-20 flex flex-col items-center justify-center opacity-50">
                                    <div className="relative w-16 h-16">
                                        <div className="absolute inset-0 border-t-2 border-purple-500 rounded-full animate-spin"></div>
                                        <div className="absolute inset-2 border-r-2 border-cyan-500 rounded-full animate-spin-slow"></div>
                                    </div>
                                    <p className="mt-4 text-xs font-mono text-purple-400 animate-pulse">DECRYPTING STORAGE...</p>
                                </div>
                            ) : bonds.length > 0 ? (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                    {bonds
                                        .filter(bond => bond.includes(searchTerm))
                                        .map((bond, idx) => (
                                            <div key={idx} className={`relative group px-4 py-3 rounded-lg border bg-black/50 text-center font-mono font-bold tracking-widest transition-all duration-300 hover:scale-105 cursor-default ${getDenomColor(denomination)}`}>
                                                <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 rounded-lg transition-opacity" />
                                                {bond}
                                            </div>
                                        ))}
                                    {bonds.filter(bond => bond.includes(searchTerm)).length === 0 && (
                                        <div className="col-span-full py-8 text-center text-zinc-500">
                                            No bonds match "{searchTerm}"
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="py-20 text-center">
                                    <div className="inline-flex p-6 rounded-full bg-white/5 border border-white/10 mb-6 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <Shield className="w-12 h-12 text-zinc-600 group-hover:text-purple-400 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Vault Empty</h3>
                                    <p className="text-zinc-500 mb-6">No bond data found for this denomination.</p>
                                    <button
                                        onClick={() => setActiveTab('add')}
                                        className="px-6 py-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all font-bold text-sm"
                                    >
                                        INITIALIZE ENTRY
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* ADD BONDS */}
                    {activeTab === 'add' && (
                        <div className="animate-fade-in max-w-2xl mx-auto">
                            <div className="text-center mb-8">
                                <div className="inline-flex w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 items-center justify-center mb-4 border border-cyan-500/20">
                                    <Plus size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Manual Injection</h2>
                                <p className="text-zinc-400 text-sm mt-1">Add bond sequences directly to the database.</p>
                            </div>

                            <form onSubmit={handleAdd} className="space-y-6">
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
                                    <textarea
                                        value={addNumbers}
                                        onChange={(e) => setAddNumbers(e.target.value)}
                                        rows={6}
                                        className="relative w-full px-6 py-4 rounded-xl bg-black border border-white/10 text-white placeholder-zinc-600 text-lg font-mono focus:outline-none focus:border-cyan-500/50 transition-colors resize-none custom-scrollbar"
                                        placeholder="ENTER SEQUENCES:&#10;123456, 789012, 345678..."
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={!addNumbers}
                                        className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                                    >
                                        EXECUTE UPLOAD
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* RANGE ENTRY */}
                    {activeTab === 'range' && (
                        <div className="animate-fade-in max-w-2xl mx-auto">
                            <div className="text-center mb-8">
                                <div className="inline-flex w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 items-center justify-center mb-4 border border-emerald-500/20">
                                    <ListOrdered size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Continuous Range Entry</h2>
                                <p className="text-zinc-400 text-sm mt-1">Automatically generate and store a sequence of bonds.</p>
                            </div>

                            <form onSubmit={handleAddRange} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-emerald-400 uppercase tracking-widest ml-1">Start Number (6 Digits)</label>
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
                                            <input
                                                type="text"
                                                maxLength={6}
                                                required
                                                value={rangeStart}
                                                onChange={(e) => setRangeStart(e.target.value.replace(/\D/g, ''))}
                                                className="relative block w-full px-6 py-4 bg-black border border-white/10 rounded-xl text-white font-mono text-xl tracking-widest text-center shadow-inner placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-all"
                                                placeholder="000000"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-emerald-400 uppercase tracking-widest ml-1">End Number (6 Digits)</label>
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
                                            <input
                                                type="text"
                                                maxLength={6}
                                                required
                                                value={rangeEnd}
                                                onChange={(e) => setRangeEnd(e.target.value.replace(/\D/g, ''))}
                                                className="relative block w-full px-6 py-4 bg-black border border-white/10 rounded-xl text-white font-mono text-xl tracking-widest text-center shadow-inner placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-all"
                                                placeholder="999999"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 text-center">
                                    <p className="text-zinc-400 text-sm">
                                        Generating: <span className="text-emerald-400 font-mono font-bold">
                                            {rangeStart.length === 6 && rangeEnd.length === 6 && parseInt(rangeEnd) >= parseInt(rangeStart)
                                                ? ((parseInt(rangeEnd) - parseInt(rangeStart)) + 1).toLocaleString()
                                                : 0}
                                        </span> total bonds
                                    </p>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={loading || rangeStart.length !== 6 || rangeEnd.length !== 6 || parseInt(rangeStart) > parseInt(rangeEnd)}
                                        className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-bold tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                                    >
                                        GENERATE SEQUENCE
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* UPLOAD FILE */}
                    {activeTab === 'upload' && (
                        <div className="animate-fade-in max-w-2xl mx-auto">
                            <div className="text-center mb-8">
                                <div className="inline-flex w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 items-center justify-center mb-4 border border-blue-500/20">
                                    <Upload size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Bulk Data Transfer</h2>
                                <p className="text-zinc-400 text-sm mt-1">Import large datasets via CSV or TXT.</p>
                            </div>

                            <form onSubmit={handleUpload} className="space-y-6">
                                <div
                                    className={`relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 group ${file
                                        ? 'border-blue-500 bg-blue-500/5'
                                        : 'border-white/10 hover:border-blue-400/50 hover:bg-white/[0.02]'
                                        }`}
                                    onClick={() => document.getElementById('file-upload').click()}
                                >
                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept=".csv,.xlsx,.xls,.txt"
                                        onChange={(e) => setFile(e.target.files[0])}
                                        className="hidden"
                                    />

                                    {/* Holographic Element */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                                    {file ? (
                                        <div className="relative z-10 animate-fade-in-up">
                                            <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                                <FileSpreadsheet className="w-8 h-8 text-blue-400" />
                                            </div>
                                            <p className="text-xl font-bold text-white mb-1">{file.name}</p>
                                            <p className="text-sm font-mono text-blue-400">SIZE: {(file.size / 1024).toFixed(1)} KB</p>
                                            <button
                                                type="button"
                                                onClick={(e) => { e.stopPropagation(); setFile(null); }}
                                                className="mt-6 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider"
                                            >
                                                Cancel Selection
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="relative z-10 transition-transform group-hover:scale-105 duration-300">
                                            <div className="w-20 h-20 mx-auto bg-black rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-xl group-hover:border-blue-500/50 group-hover:shadow-blue-500/20 transition-all">
                                                <Upload className="w-10 h-10 text-white/20 group-hover:text-blue-400 transition-colors" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-2">Drop Frequency File</h3>
                                            <p className="text-zinc-500 text-sm">
                                                Or click to browse system<br />
                                                <span className="text-xs opacity-50 uppercase mt-2 block">Supports CSV, TXT, Excel</span>
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={!file}
                                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wide shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                                >
                                    INITIATE DATA MERGE
                                </button>
                            </form>
                        </div>
                    )}

                    {/* DELETE BONDS */}
                    {activeTab === 'delete' && (
                        <div className="animate-fade-in max-w-2xl mx-auto">
                            <div className="text-center mb-8">
                                <div className="inline-flex w-12 h-12 rounded-xl bg-red-500/10 text-red-500 items-center justify-center mb-4 border border-red-500/20">
                                    <Trash2 size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Hazard Zone</h2>
                                <p className="text-red-400/60 text-sm mt-1">Permanent data removal protocols.</p>
                            </div>

                            <div className="space-y-8">
                                {/* Delete Specific */}
                                <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/40">
                                    <h3 className="text-lg font-bold text-red-200 mb-4 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        Surgical Removal
                                    </h3>
                                    <form onSubmit={handleDeleteSpecific} className="space-y-4">
                                        <textarea
                                            value={deleteNumbers}
                                            onChange={(e) => setDeleteNumbers(e.target.value)}
                                            rows={2}
                                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-red-900/30 text-red-200 placeholder-red-900/50 text-sm font-mono focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                                            placeholder="TARGET SEQUENCES: 123456, 789012..."
                                        />
                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                disabled={!deleteNumbers}
                                                className="px-6 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-600/30 text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50"
                                            >
                                                Purge Selection
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* Delete All */}
                                <div className="p-6 rounded-2xl border border-red-500/20 bg-red-950/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors" />
                                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Total System Purge</h3>
                                            <p className="text-red-400/50 text-xs uppercase tracking-wider">
                                                Wipe all {denomination} PKR records
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleDeleteAll}
                                            className="px-8 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-black font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all"
                                        >
                                            EXECUTE WIPE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div >
    );
};

export default ManageBonds;


