'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import api from '@/lib/api';
import { toast } from 'react-toastify';
import { Download as DownloadIcon, ExternalLink, Loader2, FileText, CheckCircle, ArrowLeft, ChevronRight, Calendar, Banknote } from 'lucide-react';

const Download = () => {
    const [step, setStep] = useState(1);

    // Data
    const [options, setOptions] = useState([]);
    const [optionsLoading, setOptionsLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const [dates, setDates] = useState([]);
    const [dateUrls, setDateUrls] = useState({});
    const [datesLoading, setDatesLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    // Download state
    const [downloading, setDownloading] = useState(false);
    const [downloadComplete, setDownloadComplete] = useState(false);

    useEffect(() => {
        const fetchOptions = async () => {
            setOptionsLoading(true);
            try {
                const response = await api.get('/prize_bond_options');
                const opts = Object.entries(response.data)
                    .map(([name, url]) => {
                        const match = name.match(/Rs\.?\s*([0-9,]+)/);
                        const denomination = match ? match[1].replace(/,/g, '') : '';
                        return { name, url, denomination };
                    })
                    .filter(opt => opt.denomination);
                setOptions(opts);
            } catch (error) {
                toast.error('Failed to load options.');
            } finally {
                setOptionsLoading(false);
            }
        };
        fetchOptions();
    }, []);

    const parseDateForSort = (str) => {
        const parts = (str || '').split(/[-\/]/).map(s => s.trim());
        if (parts.length === 3) {
            if (parts[0].length === 4) return new Date(`${parts[0]}-${parts[1]}-${parts[2]}`).getTime();
            return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`).getTime();
        }
        return new Date(str).getTime();
    };

    useEffect(() => {
        if (!selectedOption) return;

        const fetchDates = async () => {
            setDatesLoading(true);
            setDates([]);
            setDateUrls({});

            try {
                const response = await api.get('/available_prize_bond_dates', {
                    params: { bond_url: selectedOption.url },
                });
                const rawData = response.data;
                const sortedKeys = Object.keys(rawData).sort((a, b) => parseDateForSort(b) - parseDateForSort(a));
                setDates(sortedKeys);
                setDateUrls(rawData);
            } catch (error) {
                toast.error('Failed to load dates.');
            } finally {
                setDatesLoading(false);
            }
        };
        fetchDates();
    }, [selectedOption]);

    const handleSelectBond = (option) => {
        setSelectedOption(option);
        setSelectedDate(null);
        setDownloadComplete(false);
        setStep(2);
    };

    const handleSelectDate = (date) => {
        setSelectedDate(date);
        setDownloadComplete(false);
        setStep(3);
    };

    const handleBack = () => {
        if (step === 2) {
            setStep(1);
            setSelectedOption(null);
        } else if (step === 3) {
            setStep(2);
            setSelectedDate(null);
            setDownloadComplete(false);
        }
    };

    const handleDownload = async () => {
        if (!selectedDate || !dateUrls[selectedDate]) return;

        const fileUrl = dateUrls[selectedDate];
        const fileName = fileUrl.split('/').pop() || `prizebond-${selectedDate}.txt`;

        setDownloading(true);
        try {
            const response = await api.get('/download_file', {
                params: { file_url: fileUrl },
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);

            setDownloadComplete(true);
            toast.success('Download complete!');
        } catch (error) {
            toast.error('Download failed. Try opening the source instead.');
        } finally {
            setDownloading(false);
        }
    };

    const handleOpenSource = () => {
        if (!selectedDate || !dateUrls[selectedDate]) return;
        window.open(dateUrls[selectedDate], '_blank');
    };

    const handleStartOver = () => {
        setStep(1);
        setSelectedOption(null);
        setSelectedDate(null);
        setDownloadComplete(false);
    };

    const getConfig = (denom) => {
        const config = {
            '100': { color: 'text-cyan-400', border: 'hover:border-cyan-500/30' },
            '200': { color: 'text-blue-400', border: 'hover:border-blue-500/30' },
            '750': { color: 'text-purple-400', border: 'hover:border-purple-500/30' },
            '1500': { color: 'text-fuchsia-400', border: 'hover:border-fuchsia-500/30' },
            '25000': { color: 'text-amber-400', border: 'hover:border-amber-500/30' },
            '40000': { color: 'text-rose-400', border: 'hover:border-rose-500/30' },
        };
        return config[denom] || { color: 'text-white', border: 'hover:border-white/20' };
    };

    return (
        <div className="min-h-screen relative bg-[#050505] text-white overflow-hidden">
            {/* ── Ambient Background ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
                <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-12">

                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        {step > 1 && (
                            <button onClick={handleBack} className="p-2 -ml-2 rounded-full hover:bg-white/5 text-white/50 hover:text-white transition-colors">
                                <ArrowLeft size={24} />
                            </button>
                        )}
                        <h1 className="text-4xl font-black text-white tracking-tight">
                            Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Results</span>
                        </h1>
                    </div>

                    {/* Stepper */}
                    <ol className="flex items-center w-full relative z-0">
                        <div className="absolute top-6 left-0 w-full h-0.5 bg-white/5 -z-10" />
                        {[
                            { id: 1, label: 'Select Bond', icon: Banknote },
                            { id: 2, label: 'Select Date', icon: Calendar },
                            { id: 3, label: 'Download', icon: DownloadIcon }
                        ].map((s, i) => {
                            const active = step >= s.id;
                            const current = step === s.id;
                            return (
                                <li key={s.id} className={`flex-1 flex flex-col items-center ${i === 0 ? 'items-start' : i === 2 ? 'items-end' : ''}`}>
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all duration-500
                                        ${active ? 'bg-black border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'bg-black border-white/10 text-white/30'}`}>
                                        <s.icon size={20} className={active ? 'text-blue-400' : 'text-white/30'} />
                                    </div>
                                    <span className={`mt-3 text-sm font-bold tracking-wide ${current ? 'text-blue-400' : 'text-white/30'}`}>
                                        {s.label}
                                    </span>
                                </li>
                            );
                        })}
                    </ol>
                </div>

                {/* STEP 1: Select Bond Type */}
                {step === 1 && (
                    optionsLoading ? (
                        <div className="py-32 flex flex-col items-center justify-center">
                            <Loader2 className="w-12 h-12 text-blue-400 animate-spin mb-4" />
                            <p className="text-zinc-500 text-sm">Loading denominations...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in">
                            {options.map((opt) => {
                                const conf = getConfig(opt.denomination);
                                return (
                                    <button
                                        key={opt.name}
                                        onClick={() => handleSelectBond(opt)}
                                        className={`group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md ${conf.border} hover:bg-white/[0.04] transition-all duration-300 overflow-hidden text-left shadow-xl`}
                                    >
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-tr from-white to-transparent" />
                                        <p className="text-white/40 text-xs font-mono mb-2">PKR</p>
                                        <p className={`text-4xl font-bold font-mono ${conf.color}`}>
                                            {opt.denomination}
                                        </p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-sm text-zinc-500 group-hover:text-white transition-colors">View Dates</span>
                                            <ChevronRight size={16} className="text-white/20 group-hover:text-white -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    )
                )}

                {/* STEP 2: Select Date */}
                {step === 2 && (
                    <div className="animate-fade-in space-y-6">
                        {/* Selected Bond Summary */}
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md">
                            <div className="p-3 rounded-lg bg-black border border-white/10">
                                <Banknote className="text-blue-400" size={24} />
                            </div>
                            <div>
                                <p className="text-zinc-500 text-xs uppercase tracking-wider">Selected Bond</p>
                                <p className="text-lg font-bold text-white">Rs. {selectedOption?.denomination}</p>
                            </div>
                            <button onClick={() => setStep(1)} className="ml-auto text-sm text-blue-400 hover:text-blue-300 hover:underline">Change</button>
                        </div>

                        {datesLoading ? (
                            <div className="py-20 flex flex-col items-center justify-center">
                                <Loader2 className="w-10 h-10 text-blue-400 animate-spin mb-4" />
                                <p className="text-zinc-500 text-sm">Loading draw dates...</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                {dates.map((date, idx) => (
                                    <button
                                        key={date}
                                        onClick={() => handleSelectDate(date)}
                                        className="group flex items-center px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mr-4 group-hover:border-blue-500/30 transition-colors">
                                            <Calendar size={18} className="text-zinc-500 group-hover:text-blue-400 transition-colors" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <p className="text-white font-mono text-lg">{date}</p>
                                            <p className="text-xs text-zinc-600">Draw Date</p>
                                        </div>
                                        {idx === 0 && (
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20 mr-2">
                                                LATEST
                                            </span>
                                        )}
                                        <ChevronRight size={16} className="text-white/20 group-hover:text-blue-400" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* STEP 3: Download */}
                {step === 3 && (
                    <div className="animate-fade-in">
                        {/* File Preview Card */}
                        <div className={`relative overflow-hidden p-8 rounded-2xl border backdrop-blur-md transition-all duration-500 shadow-xl ${downloadComplete
                            ? 'bg-emerald-500/5 border-emerald-500/30'
                            : 'bg-white/[0.02] border-white/[0.08]'
                            }`}>

                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-[80px] -z-10" />

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="relative">
                                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center border transition-all duration-500 ${downloadComplete
                                        ? 'bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
                                        : 'bg-black border-white/10'
                                        }`}>
                                        {downloadComplete ? (
                                            <CheckCircle className="w-10 h-10 text-emerald-400" />
                                        ) : (
                                            <FileText className="w-10 h-10 text-blue-400" />
                                        )}
                                    </div>
                                    {downloadComplete && (
                                        <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                                            DONE
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {downloadComplete ? 'Download Complete!' : 'Ready to Download'}
                                    </h3>
                                    <p className="text-zinc-400 text-lg mb-6">
                                        Official prize bond list for <span className="text-blue-400 font-bold">Rs. {selectedOption?.denomination}</span>
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 border-t border-white/[0.05] pt-6">
                                        <div>
                                            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-1">DATE</p>
                                            <p className="text-white font-mono">{selectedDate}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-1">FORMAT</p>
                                            <p className="text-white font-mono">TXT</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-1">SOURCE</p>
                                            <p className="text-white font-mono">Official</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                {!downloadComplete ? (
                                    <>
                                        <button
                                            onClick={handleDownload}
                                            disabled={downloading}
                                            className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {downloading ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Downloading...
                                                </>
                                            ) : (
                                                <>
                                                    <DownloadIcon className="w-5 h-5" />
                                                    Download File
                                                </>
                                            )}
                                        </button>
                                        <button
                                            onClick={handleOpenSource}
                                            className="px-6 py-4 rounded-xl border border-white/[0.08] hover:bg-white/[0.04] text-zinc-400 hover:text-white transition-all flex items-center justify-center gap-2"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            View Source
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={handleStartOver}
                                            className="flex-1 py-4 px-6 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-white font-bold tracking-wide transition-all"
                                        >
                                            Download Another
                                        </button>
                                        <button
                                            onClick={() => window.location.href = '/compare'}
                                            className="flex-1 py-4 px-6 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 font-bold tracking-wide transition-all"
                                        >
                                            Check Results
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Download;
