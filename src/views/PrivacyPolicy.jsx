import React from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative pb-24">

            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-[0%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-emerald-600/10 blur-[150px]" />
            </div>

            <div className="relative z-10 pt-32 max-w-4xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
                        <FileText className="text-emerald-400" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Privacy Policy</h1>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05]">
                        <CheckCircle2 size={14} className="text-emerald-400" />
                        <span className="text-sm text-zinc-400">Last updated: February 2026</span>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none prose-p:text-zinc-400 prose-headings:text-white prose-li:text-zinc-400 prose-a:text-emerald-400 hover:prose-a:text-emerald-300">

                    <div className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/20 mb-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-transparent" />
                        <p className="text-xl text-emerald-50 leading-relaxed m-0">
                            At PakBonds, we take your privacy seriously. We understand that your financial data and prize bond numbers are sensitive assets. This policy outlines exactly how we handle your data in strict compliance with international and Pakistani data protection standards.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mb-16 not-prose">
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 transition-colors group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Shield className="text-emerald-400 mb-5 relative z-10" size={36} />
                            <h3 className="text-xl font-bold text-white mb-3 relative z-10">Data Encryption</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm relative z-10">All bond numbers are heavily encrypted before being stored in our database. Not even our technical staff can view your actual bond sequences or financial portfolio.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 transition-colors group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Lock className="text-emerald-400 mb-5 relative z-10" size={36} />
                            <h3 className="text-xl font-bold text-white mb-3 relative z-10">Zero Sharing</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm relative z-10">We operate on a strict privacy-first model. We do not sell, trade, or share your personal data with third-party advertisers, agencies, or external entities.</p>
                        </div>
                    </div>

                    <div className="space-y-12 bg-white/[0.01] border border-white/[0.05] rounded-3xl p-8 md:p-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm">1</span>
                                Information We Collect
                            </h2>
                            <ul className="space-y-3">
                                <li><strong className="text-white">Account Information:</strong> Your validated email address and secure password hash (required for secure authentication).</li>
                                <li><strong className="text-white">Bond Data:</strong> The specific denomination and prize bond numbers you manually enter or upload.</li>
                                <li><strong className="text-white">Usage Data:</strong> Anonymous, aggregated statistics about website performance (e.g., page load times, error logs) to improve the platform.</li>
                            </ul>
                        </section>

                        <hr className="border-white/[0.05]" />

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm">2</span>
                                How We Use Your Data
                            </h2>
                            <p>We restrict the use of your data exclusively to the following technical purposes:</p>
                            <ul className="space-y-3">
                                <li>To automatically match your saved bonds against official National Savings draw lists.</li>
                                <li>To send you proactive, timely email notifications when you win a prize or there is a security alert.</li>
                                <li>To optimize the performance, accuracy, and scalability of our algorithmic checking engine.</li>
                            </ul>
                        </section>

                        <hr className="border-white/[0.05]" />

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm">3</span>
                                Data Security Infrastructure
                            </h2>
                            <p>
                                We implement rigorous, industry-standard security measures. This includes TLS 1.3 encryption for all data in transit between your browser and our servers, and AES-256 encryption for data at rest. Our infrastructure is hosted in compliant, highly secure data centers equipped with 24/7 technical monitoring.
                            </p>
                        </section>

                        <hr className="border-white/[0.05]" />

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm">4</span>
                                Your Digital Rights
                            </h2>
                            <p>You retain absolute control over your digital footprint on our platform. At any time, you can:</p>
                            <ul className="space-y-3">
                                <li><strong className="text-white">Export:</strong> Instantly download a complete CSV copy of all your stored bonds.</li>
                                <li><strong className="text-white">Delete:</strong> Permanently and irrevocably delete your account and all associated data from the "Settings" page. This completely flushes your records from our active databases.</li>
                            </ul>
                        </section>

                        <hr className="border-white/[0.05]" />

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm">5</span>
                                Contact Us
                            </h2>
                            <p>
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our security practices, please contact our privacy compliance team directly at <a href="mailto:privacy@pakbonds.com" className="font-semibold transition-colors">privacy@pakbonds.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;






