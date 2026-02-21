'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-toastify';
import { Lock, Eye, EyeOff, Shield, CheckCircle, ArrowLeft, Loader2, KeyRound, Sparkles } from 'lucide-react';
import api from '@/lib/api';

const ChangePassword = () => {
    const { user } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const getPasswordStrength = (password) => {
        if (!password) return { strength: 0, label: '', color: '' };

        let strength = 0;
        if (password.length >= 6) strength++;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        if (strength <= 1) return { strength: 20, label: 'Weak', color: 'bg-red-500 shadow-red-500/50' };
        if (strength === 2) return { strength: 40, label: 'Fair', color: 'bg-orange-500 shadow-orange-500/50' };
        if (strength === 3) return { strength: 60, label: 'Good', color: 'bg-yellow-500 shadow-yellow-500/50' };
        if (strength === 4) return { strength: 80, label: 'Strong', color: 'bg-cyan-500 shadow-cyan-500/50' };
        return { strength: 100, label: 'Maximum', color: 'bg-purple-500 shadow-purple-500/50' };
    };

    const passwordStrength = getPasswordStrength(formData.newPassword);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.currentPassword) {
            newErrors.currentPassword = 'Current password is required';
        }

        if (!formData.newPassword) {
            newErrors.newPassword = 'New password is required';
        } else if (formData.newPassword.length < 6) {
            newErrors.newPassword = 'Password must be at least 6 characters';
        } else if (formData.newPassword === formData.currentPassword) {
            newErrors.newPassword = 'New password must be different from current';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your new password';
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        try {
            await api.post('/change-password', {
                current_password: formData.currentPassword,
                new_password: formData.newPassword
            });

            toast.success('Security protocols updated successfully!');
            router.push('/dashboard');
        } catch (error) {
            const message = error.response?.data?.detail || 'Failed to update credentials';
            toast.error(message);

            if (message.includes('Current password')) {
                setErrors({ currentPassword: message });
            }
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-28 pb-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-[#050505] pointer-events-none -z-10" />
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="max-w-lg mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                        <div className="w-16 h-16 rounded-2xl bg-[#0a0a0b] border border-white/10 flex items-center justify-center mx-auto mb-4 relative z-10 shadow-2xl">
                            <KeyRound size={32} className="text-cyan-400" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Upgrade</span></h1>
                    <p className="text-zinc-500 text-sm max-w-xs mx-auto">
                        Elevate your account clearance with a stronger passkey.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-[#0a0a0b]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                    {/* Glass Shine */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Current Password */}
                        <div>
                            <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest ml-1 mb-2 block">
                                Current Access Key
                            </label>
                            <div className="relative group">
                                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-cyan-400 transition-colors" />
                                <input
                                    type={showCurrentPassword ? 'text' : 'password'}
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className={`w-full pl-11 pr-11 py-3.5 bg-black/50 border rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono tracking-wider ${errors.currentPassword ? 'border-red-500/50 focus:border-red-500' : 'border-white/10'
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                                >
                                    {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.currentPassword && (
                                <p className="text-xs text-red-400 mt-2 flex items-center gap-1 animate-fade-in">
                                    <span className="w-1 h-1 rounded-full bg-red-400" /> {errors.currentPassword}
                                </p>
                            )}
                        </div>

                        {/* New Password */}
                        <div>
                            <label className="text-xs font-mono text-purple-400 uppercase tracking-widest ml-1 mb-2 block">
                                New Access Key
                            </label>
                            <div className="relative group">
                                <KeyRound size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className={`w-full pl-11 pr-11 py-3.5 bg-black/50 border rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-mono tracking-wider ${errors.newPassword ? 'border-red-500/50 focus:border-red-500' : 'border-white/10'
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                                >
                                    {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.newPassword && (
                                <p className="text-xs text-red-400 mt-2 flex items-center gap-1 animate-fade-in">
                                    <span className="w-1 h-1 rounded-full bg-red-400" /> {errors.newPassword}
                                </p>
                            )}

                            {/* Cyber Strength Indicator */}
                            {formData.newPassword && (
                                <div className="mt-3 p-3 bg-white/5 rounded-xl border border-white/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Encryption Level</span>
                                        <span className={`text-xs font-bold ${passwordStrength.strength >= 80 ? 'text-cyan-400' :
                                            passwordStrength.strength >= 60 ? 'text-yellow-400' :
                                                'text-red-400'
                                            }`}>
                                            {passwordStrength.label.toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="h-1.5 bg-black/50 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${passwordStrength.color} transition-all duration-500 shadow-[0_0_10px_currentColor]`}
                                            style={{ width: `${passwordStrength.strength}%` }}
                                        />
                                    </div>
                                    <div className="mt-2 text-[10px] text-zinc-600 flex justify-between font-mono">
                                        <span>MIN: 6 CHARS</span>
                                        <span>MIXED CASE + NUMS</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest ml-1 mb-2 block">
                                Confirm Sequence
                            </label>
                            <div className="relative group">
                                <Shield size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors" />
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className={`w-full pl-11 pr-11 py-3.5 bg-black/50 border rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all font-mono tracking-wider ${errors.confirmPassword ? 'border-red-500/50 focus:border-red-500' : 'border-white/10'
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-xs text-red-400 mt-2 flex items-center gap-1 animate-fade-in">
                                    <span className="w-1 h-1 rounded-full bg-red-400" /> {errors.confirmPassword}
                                </p>
                            )}
                            {formData.confirmPassword && formData.newPassword === formData.confirmPassword && !errors.confirmPassword && (
                                <p className="text-xs text-green-400 mt-2 flex items-center gap-1 animate-fade-in">
                                    <CheckCircle size={12} /> Sequence Match Verified
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5"
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    ENCRYPTING...
                                </>
                            ) : (
                                <>
                                    <Shield size={18} />
                                    INITIATE PROTOCOL UPDATE
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;


