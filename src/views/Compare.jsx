'use client';

import React, { useState, useEffect } from 'react';
import api from '@/lib/api';
import { toast } from 'react-toastify';
import {
    Search, CheckCircle, XCircle, Trophy, Loader2,
    ChevronRight, ArrowLeft, Sparkles, Calendar, Banknote, Save
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import confetti from 'canvas-confetti';

// Cyber-Glass Denomination Config
const denominationConfig = {
    '100': { label: 'Rs. 100', shortLabel: '100', color: 'text-cyan-400', border: 'border-cyan-500/50', shadow: 'shadow-none', glow: 'shadow-[0_0_20px_rgba(34,211,238,0.3)]' },
    '200': { label: 'Rs. 200', shortLabel: '200', color: 'text-blue-400', border: 'border-blue-500/50', shadow: 'shadow-none', glow: 'shadow-[0_0_20px_rgba(96,165,250,0.3)]' },
    '750': { label: 'Rs. 750', shortLabel: '750', color: 'text-purple-400', border: 'border-purple-500/50', shadow: 'shadow-none', glow: 'shadow-[0_0_20px_rgba(192,132,252,0.3)]' },
    '1500': { label: 'Rs. 1,500', shortLabel: '1.5K', color: 'text-fuchsia-400', border: 'border-fuchsia-500/50', shadow: 'shadow-none', glow: 'shadow-[0_0_20px_rgba(232,121,249,0.3)]' },
    '25000': { label: 'Rs. 25,000', shortLabel: '25K', color: 'text-amber-400', border: 'border-amber-500/50', shadow: 'shadow-none', glow: 'shadow-[0_0_20px_rgba(251,191,36,0.3)]' },
    '40000': { label: 'Rs. 40,000', shortLabel: '40K', color: 'text-rose-400', border: 'border-rose-500/50', shadow: 'shadow-none', glow: 'shadow-[0_0_20px_rgba(251,113,133,0.3)]' },
};

// Winning Bond Card - Holographic Effect
const WinningBondItem = ({ match, denomination, userEmail, savedBonds = [] }) => {
    const [saving, setSaving] = useState(false);
    const [removing, setRemoving] = useState(false);

    // Check if this bond is already saved
    const existingSaved = savedBonds.find(b =>
        b.number === match.number &&
        b.draw_date === match.draw_date
    );
    const [saved, setSaved] = useState(!!existingSaved);
    const [savedId, setSavedId] = useState(existingSaved?.id || null);

    const handleSave = async () => {
        if (!userEmail) {
            toast.error('Please login to save winning bonds');
            return;
        }

        setSaving(true);
        try {
            const response = await api.post('/save_winning_bond', {
                winning_bond: {
                    number: match.number,
                    denomination: denomination || 'Unknown',
                    prize: match.prize,
                    prize_amount: match.winning_amount || match.declared_prize || match.prize,
                    draw_date: match.draw_date,
                    draw_number: match.draw_number,
                }
            });
            setSaved(true);
            setSavedId(response.data.id);
            toast.success('Winning bond saved!');
        } catch (error) {
            if (error.response?.status === 409) {
                setSaved(true);
                toast.info('Already saved!');
            } else {
                toast.error('Failed to save');
            }
        } finally {
            setSaving(false);
        }
    };

    const handleRemove = async () => {
        if (!savedId) return;

        setRemoving(true);
        try {
            await api.delete('/delete_winning_bond', {
                params: { bond_id: savedId }
            });
            setSaved(false);
            setSavedId(null);
            toast.success('Removed from saved!');
        } catch (error) {
            toast.error('Failed to remove');
        } finally {
            setRemoving(false);
        }
    };

    return (
        <div className="relative group overflow-hidden bg-glass border border-white/10 rounded-xl p-5 hover:border-cyan-500/30 transition-all duration-300">
            {/* Holographic BG Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                    <p className="font-mono text-3xl font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        {match.number}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-white/50">
                        <Calendar size={14} />
                        <span>{match.draw_date}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>Draw #{match.draw_number}</span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="text-right">
                        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                            {match.prize}
                        </p>
                        <p className="text-sm font-medium text-white/40">
                            {match.declared_prize}
                        </p>
                    </div>

                    {saved ? (
                        <button
                            onClick={handleRemove}
                            disabled={removing}
                            className="p-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all"
                            title="Remove from Saved"
                        >
                            {removing ? <Loader2 size={20} className="animate-spin" /> : <XCircle size={20} />}
                        </button>
                    ) : (
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all"
                            title="Save Bond"
                        >
                            {saving ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const Compare = () => {
    const { user } = useAuth();
    const [step, setStep] = useState(1);

    // Data
    const [options, setOptions] = useState([]);
    const [optionsLoading, setOptionsLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const [dates, setDates] = useState([]);
    const [datesLoading, setDatesLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [allDraws, setAllDraws] = useState(false);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [savedBonds, setSavedBonds] = useState([]);

    // Helper for robust date sorting
    const parseDateForSort = (str) => {
        const parts = (str || '').split(/[-\/]/).map(s => s.trim());
        if (parts.length === 3) {
            // Assume DD-MM-YYYY if 4 digits are at the end
            if (parts[2].length === 4) return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`).getTime();
            // Assume YYYY-MM-DD if 4 digits are at the start
            if (parts[0].length === 4) return new Date(`${parts[0]}-${parts[1]}-${parts[2]}`).getTime();
        }
        return new Date(str).getTime();
    };

    // Logic Hooks
    useEffect(() => {
        if (user?.email) api.get('/get_winning_bonds').then(r => setSavedBonds(r.data.winning_bonds || [])).catch(() => { });
    }, [user]);

    useEffect(() => {
        setOptionsLoading(true);
        api.get('/prize_bond_options').then(res => {
            const opts = Object.entries(res.data)
                .map(([name, url]) => {
                    const match = name.match(/Rs\.?\s*([0-9,]+)/);
                    return { name, url, denomination: match ? match[1].replace(/,/g, '') : '' };
                })
                .filter(opt => opt.denomination);
            setOptions(opts);
        })
            .catch(() => toast.error('Failed to load bond options.'))
            .finally(() => setOptionsLoading(false));
    }, []);

    useEffect(() => {
        if (!selectedOption) return;
        setDatesLoading(true);
        setDates([]); // Clear previous dates immediately
        api.get('/available_prize_bond_dates', { params: { bond_url: selectedOption.url } })
            .then(res => {
                const sortedDates = Object.keys(res.data).sort((a, b) => parseDateForSort(b) - parseDateForSort(a));
                setDates(sortedDates);
            })
            .catch(() => toast.error('Failed to load dates.'))
            .finally(() => setDatesLoading(false));
    }, [selectedOption]);

    const handleSelectBond = (option) => {
        setSelectedOption(option);
        setSelectedDate(null);
        setAllDraws(false);
        setResults(null);
        setStep(2);
    };

    const handleCompare = async () => {
        setLoading(true);
        setStep(3);
        try {
            const response = await api.post('/compare', {
                prize_bond_option: selectedOption.denomination,
                draw_date: allDraws ? null : selectedDate,
                all_draws: allDraws
            });
            setResults(response.data);
            if (response.data.matches?.length > 0) {
                toast.success(`Found ${response.data.matches.length} winning bonds!`);
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#00f0ff', '#ffd700', '#ffffff']
                });
            }
        } catch (error) {
            toast.error('Comparison failed');
            setStep(2);
        } finally {
            setLoading(false);
        }
    };

    const getConfig = (denom) => denominationConfig[denom] || { label: `Rs. ${denom}`, color: 'text-white', border: 'border-white/20' };

    return (
        <div className="max-w-4xl mx-auto px-4 pt-28 pb-12">
            
            {/* Header */}
            <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    {step > 1 && (
                        <button onClick={() => setStep(step - 1)} className="p-2 -ml-2 rounded-full hover:bg-white/5 text-white/50 hover:text-white transition-colors">
                            <ArrowLeft size={24} />
                        </button>
                    )}
                    <h1 className="text-4xl font-bold text-white tracking-tight">
                        Check <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Results</span>
                    </h1>
                </div>

                {/* Cyber Stepper */}
                <ol className="flex items-center w-full relative z-0">
                    <div className="absolute top-6 left-0 w-full h-0.5 bg-white/5 -z-10" />
                    {[
                        { id: 1, label: 'Bond Type', icon: Banknote },
                        { id: 2, label: 'Draw Date', icon: Calendar },
                        { id: 3, label: 'Results', icon: Trophy }
                    ].map((s, i) => {
                        const active = step >= s.id;
                        const current = step === s.id;
                        return (
                            <li key={s.id} className={`flex-1 flex flex-col items-center ${i === 0 ? 'items-start' : i === 2 ? 'items-end' : ''}`}>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all duration-500
                                    ${active ? 'bg-black border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'bg-black border-white/10 text-white/30'}`}>
                                    <s.icon size={20} className={active ? 'text-cyan-400' : 'text-white/30'} />
                                </div>
                                <span className={`mt-3 text-sm font-medium tracking-wide ${current ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]' : 'text-white/30'}`}>
                                    {s.label}
                                </span>
                            </li>
                        );
                    })}
                </ol>
            </div>

            {/* Content Area */}
            <div className="min-h-[400px]">
                {/* STEP 1: Select Bond */}
                {step === 1 && (
                    optionsLoading ? (
                        <div className="py-32 flex flex-col items-center justify-center opacity-50">
                            <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mb-4" />
                            <p className="text-white/50 font-mono tracking-widest animate-pulse">LOADING DENOMINATIONS...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
                            {options.map((opt) => {
                                const conf = getConfig(opt.denomination);
                                return (
                                    <button
                                        key={opt.name}
                                        onClick={() => handleSelectBond(opt)}
                                        className={`group relative p-6 rounded-2xl bg-glass border border-white/5 hover:border-cyan-500/50 hover:bg-white/[0.03] transition-all duration-300 overflow-hidden text-left`}
                                    >
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-tr from-cyan-500 to-transparent`} />
                                        <p className="text-white/40 text-xs font-mono mb-2">PKR</p>
                                        <p className={`text-3xl font-bold font-mono ${conf.color} drop-shadow-lg`}>
                                            {conf.shortLabel}
                                        </p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-sm text-white/60 group-hover:text-white transition-colors">{conf.label}</span>
                                            <ChevronRight size={16} className="text-white/20 group-hover:text-cyan-400 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    )
                )}

                {/* STEP 2: Select Date */}
                {step === 2 && (
                    <div className="space-y-6 animate-fade-in">
                        {/* Selected Bond Summary */}
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="p-3 rounded-lg bg-black border border-white/10">
                                <Banknote className="text-cyan-400" size={24} />
                            </div>
                            <div>
                                <p className="text-white/40 text-xs uppercase tracking-wider">Selected Bond</p>
                                <p className="text-lg font-bold text-white">Rs. {selectedOption?.denomination}</p>
                            </div>
                            <button onClick={() => setStep(1)} className="ml-auto text-sm text-cyan-400 hover:text-cyan-300 hover:underline">Change</button>
                        </div>

                        {datesLoading ? (
                            <div className="py-20 flex flex-col items-center justify-center opacity-50">
                                <Loader2 className="w-10 h-10 text-cyan-400 animate-spin mb-4" />
                                <p className="text-white/50 font-mono text-sm">ACCESSING ARCHIVES...</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Global Check */}
                                <button
                                    onClick={() => { setAllDraws(true); setSelectedDate(null); }}
                                    className={`relative p-6 rounded-2xl border transition-all text-left group
                                        ${allDraws
                                            ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                                            : 'bg-glass border-white/10 hover:border-cyan-500/50 hover:bg-white/5'}`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <Sparkles className={`w-8 h-8 mb-4 ${allDraws ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'text-white/20 group-hover:text-white/60'}`} />
                                            <h3 className="text-lg font-bold">Check All Archives</h3>
                                            <p className="text-sm opacity-60 mt-1">Compare against every draw in history.</p>
                                        </div>
                                        {allDraws && <CheckCircle className="text-cyan-400" />}
                                    </div>
                                </button>

                                {/* Date List */}
                                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                    {dates.map((date) => (
                                        <button
                                            key={date}
                                            onClick={() => { setSelectedDate(date); setAllDraws(false); }}
                                            className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all group
                                                ${selectedDate === date
                                                    ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400'
                                                    : 'bg-glass border-white/5 hover:border-white/20 text-white/60 hover:text-white'}`}
                                        >
                                            <span className="font-mono text-lg">{date}</span>
                                            {selectedDate === date && <CheckCircle size={18} />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="pt-6 border-t border-white/10">
                            <button
                                onClick={handleCompare}
                                disabled={!allDraws && !selectedDate}
                                className="w-full py-4 rounded-xl font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
                            >
                                INITIATE SCAN
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 3: Results */}
                {step === 3 && (
                    <div className="animate-fade-in">
                        {loading ? (
                            <div className="py-24 text-center">
                                <div className="relative w-24 h-24 mx-auto mb-8">
                                    <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-ping" />
                                    <div className="absolute inset-2 rounded-full border-2 border-cyan-400/50 animate-spin" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-white tracking-widest mb-2">SCANNING...</h2>
                                <p className="text-cyan-400/60 font-mono">Comparing Bond Data against {allDraws ? 'Archives' : selectedDate}</p>
                            </div>
                        ) : results && (
                            <div className="space-y-8">
                                {/* Result Status */}
                                <div className={`text-center p-8 rounded-2xl border ${results.matches?.length > 0 ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-glass border-white/10'}`}>
                                    {results.matches?.length > 0 ? (
                                        <>
                                            <div className="inline-flex p-4 rounded-full bg-emerald-500/20 text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                                <Trophy size={48} />
                                            </div>
                                            <h2 className="text-4xl font-bold text-white mb-2">MATCH FOUND</h2>
                                            <p className="text-emerald-400 text-lg">You have {results.matches.length} winning bond(s)</p>
                                        </>
                                    ) : (
                                        <>
                                            <div className="inline-flex p-4 rounded-full bg-white/5 text-white/20 mb-4">
                                                <Search size={48} />
                                            </div>
                                            <h2 className="text-2xl font-bold text-white/50">NO MATCHES</h2>
                                            <p className="text-white/30 mt-2">No winning bonds found in this draw.</p>
                                        </>
                                    )}
                                </div>

                                {/* Matches List */}
                                <div className="space-y-4">
                                    {results.matches?.map((match, idx) => (
                                        <WinningBondItem
                                            key={idx}
                                            match={match}
                                            denomination={selectedOption?.denomination}
                                            userEmail={user?.email}
                                            savedBonds={savedBonds}
                                        />
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button onClick={() => { setStep(1); setResults(null); }} className="flex-1 py-4 rounded-xl border border-white/10 hover:bg-white/5 text-white transition-all">
                                        Check Another Bond
                                    </button>
                                    <button onClick={() => { setStep(2); setResults(null); }} className="flex-1 py-4 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all">
                                        Try Different Date
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Compare;






