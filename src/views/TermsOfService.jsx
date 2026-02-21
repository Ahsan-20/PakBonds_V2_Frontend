'use client';

import Link from 'next/link';
import React from 'react';
import { Scale, AlertTriangle, CheckCircle, FileText } from 'lucide-react';

const TermsOfService = () => {
    return (
        <div className="min-h-screen pt-32 pb-20">



            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-white/50">Effective Date: February 14, 2026</p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
                    <p className="lead text-xl text-white/80 mb-8">
                        Welcome to PakBonds. By accessing or using our website, you agree to be bound by these Terms. Please read them carefully.
                    </p>

                    <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-10">
                        <div className="flex gap-4">
                            <AlertTriangle className="shrink-0 text-amber-400" size={24} />
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Disclaimer</h3>
                                <p className="text-sm text-amber-200/80">
                                    PakBonds is an independent service and is NOT affiliated with the Central Directorate of National Savings (CDNS) or the State Bank of Pakistan. We provide information based on publicly available gazettes. While we strive for 100% accuracy, we are not liable for any errors or omissions. Always verify large winnings with official sources.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Usage License</h2>
                    <p className="mb-6">
                        We grant you a limited, non-exclusive, non-transferable license to use PakBonds for personal, non-commercial purposes. You agree not to:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-8">
                        <li>Use automated bots or scrapers to access our service.</li>
                        <li>Attempt to reverse engineer any part of the website.</li>
                        <li>Use the service for any illegal activities under Pakistani law.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Account Responsibility</h2>
                    <p className="mb-8">
                        You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. We are not liable for any loss or damage arising from your failure to protect your password.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Service Availability</h2>
                    <p className="mb-8">
                        We strive to keep PakBonds available 24/7. However, we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the service at any time without notice (e.g., for maintenance).
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Limitation of Liability</h2>
                    <p className="mb-8">
                        To the fullest extent permitted by law, PakBonds shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of the service. This includes, but is not limited to, loss of data or loss of potential prize winnings due to system errors.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Changes to Terms</h2>
                    <p className="mb-8">
                        We may update these Terms from time to time. We will notify users of significant changes via email or a prominent notice on our website. Your continued use of the service after such changes constitutes your acceptance of the new Terms.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Contact</h2>
                    <p>
                        For legal inquiries, please contact us at <a href="mailto:legal@pakbonds.com" className="text-emerald-400 hover:underline">legal@pakbonds.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;






