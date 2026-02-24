import React from 'react';
import { Scale, AlertTriangle, CheckCircle2, FileText } from 'lucide-react';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative pb-24">

            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-[0%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-amber-600/10 blur-[150px]" />
            </div>

            <div className="relative z-10 pt-32 max-w-4xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6">
                        <Scale className="text-amber-400" size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Terms of Service</h1>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05]">
                        <CheckCircle2 size={14} className="text-amber-400" />
                        <span className="text-sm text-zinc-400">Effective Date: February 2026</span>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none prose-p:text-zinc-400 prose-headings:text-white prose-li:text-zinc-400 prose-a:text-amber-400 hover:prose-a:text-amber-300">

                    <p className="text-xl text-zinc-300 leading-relaxed mb-12">
                        Welcome to PakBonds. By accessing or using our website, applications, and checking services, you agree to be bound by these Terms of Service. Please read them carefully.
                    </p>

                    {/* Disclaimer Banner */}
                    <div className="p-8 rounded-3xl bg-amber-500/10 border border-amber-500/20 mb-16 relative overflow-hidden not-prose">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-transparent" />
                        <div className="flex gap-5 items-start">
                            <AlertTriangle className="shrink-0 text-amber-400 mt-1" size={28} />
                            <div>
                                <h3 className="text-xl font-bold text-amber-50 mb-3">Important Legal Disclaimer</h3>
                                <p className="text-amber-200/80 leading-relaxed text-sm m-0">
                                    PakBonds is a strictly independent technological utility service. We are <strong>NOT</strong> affiliated, endorsed, or partnered with the Central Directorate of National Savings (CDNS), the State Bank of Pakistan, or any government entity. We extract and process data from publicly available official gazettes. While we continuously strive for 100% accuracy, we are not legally liable for any typographical errors, missed checks, or omissions. <strong>Always physically verify major winnings with official government branches.</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12 bg-white/[0.01] border border-white/[0.05] rounded-3xl p-8 md:p-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 text-sm">1</span>
                                Usage License
                            </h2>
                            <p>
                                We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the PakBonds platform strictly for your personal, non-commercial prize bond management. Under this license, you specifically agree <strong>not</strong> to:
                            </p>
                            <ul className="space-y-3">
                                <li>Deploy automated bots, spiders, or intensive scrapers to systematically extract data from our service.</li>
                                <li>Reverse engineer, decompile, or copy any proprietary code or algorithms powering the site.</li>
                                <li>Utilize the service to facilitate any illegal financial activities under the jurisdiction of Pakistani law.</li>
                            </ul>
                        </section>

                        <hr className="border-white/[0.05]" />

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 text-sm">2</span>
                                Account Security & Responsibility
                            </h2>
                            <p>
                                When creating an account, you assume full responsibility for maintaining the strict confidentiality of your login credentials. You explicitly agree to immediately notify our team of any suspected unauthorized access or breaches of your account. PakBonds holds no liability for loss or corruption of data resulting from your failure to adequately secure your password.
                            </p>
                        </section>

                        <hr className="border-white/[0.05]" />

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 text-sm">3</span>
                                Reliability & Service Availability
                            </h2>
                            <p>
                                We architect our infrastructure to achieve 99.9% uptime. However, we do not strictly guarantee totally uninterrupted, error-free access. We reserve the absolute right to temporarily suspend, materially modify, or permanently discontinue the service (or segments of the service) at our sole discretion, with or without prior warning, to perform critical maintenance or upgrades.
                            </p>
                        </section>

                        <hr className="border-white/[0.05]" />

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 text-sm">4</span>
                                Limitation of Liability
                            </h2>
                            <p>
                                To the maximum extent permitted by applicable law, PakBonds, its developers, and stakeholders shall NOT be held liable for any direct, indirect, incidental, special, or consequential damages resulting from your use, or inability to use, our platform. This explicitly includes, but is not limited to, the loss of physical bonds, unrealized prize claims due to alert failures, data loss, or emotional distress.
                            </p>
                        </section>

                        <hr className="border-white/[0.05]" />

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 text-sm">5</span>
                                Contact & Jurisdiction
                            </h2>
                            <p>
                                We retain the right to routinely update these Terms to reflect expanding features or changing laws. Continued usage assumes consent. For formal legal inquiries, partnership proposals, or to report terms violations, please contact us at <a href="mailto:legal@pakbonds.com" className="font-semibold transition-colors">legal@pakbonds.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;






