'use client';

import Link from 'next/link';
import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen pt-32 pb-20">



            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-white/50">Last updated: February 14, 2026</p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
                    <p className="lead text-xl text-white/80 mb-8">
                        At PakBonds, we take your privacy seriously. We understand that your financial data and prize bond numbers are sensitive assets. This policy outlines how we handle your data in compliance with Pakistan's data protection standards.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                            <Shield className="text-emerald-400 mb-4" size={32} />
                            <h3 className="text-lg font-bold text-white mb-2">Data Encryption</h3>
                            <p className="text-sm text-white/60">All bond numbers are encrypted before being stored in our database. Not even our staff can view your actual bond sequences.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                            <Lock className="text-emerald-400 mb-4" size={32} />
                            <h3 className="text-lg font-bold text-white mb-2">Zero Sharing</h3>
                            <p className="text-sm text-white/60">We do not sell, trade, or share your personal data with third-party advertisers or agencies.</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Information We Collect</h2>
                    <ul className="list-disc pl-6 space-y-3 mb-8">
                        <li><strong>Account Information:</strong> Email address and username (required for login).</li>
                        <li><strong>Bond Data:</strong> The prize bond numbers you manually enter or upload.</li>
                        <li><strong>Usage Data:</strong> Anonymous statistics about website performance (e.g., page load times).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. How We Use Your Data</h2>
                    <p className="mb-4">We use your data solely for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-3 mb-8">
                        <li>To automatically match your bonds against National Savings draw lists.</li>
                        <li>To send you email notifications when you win a prize.</li>
                        <li>To improve the performance and accuracy of our checking engine.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Data Security</h2>
                    <p className="mb-8">
                        We implement industry-standard security measures, including SSL/TLS encryption for data in transit and AES-256 encryption for data at rest. Our servers are hosted in secure data centers with 24/7 monitoring.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Your Rights</h2>
                    <p className="mb-8">
                        You have full control over your data. You can:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-8">
                        <li><strong>Export:</strong> Download a copy of all your stored bonds.</li>
                        <li><strong>Delete:</strong> Permanently delete your account and all associated data from the "Settings" page. This action is irreversible.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@pakbonds.com" className="text-emerald-400 hover:underline">privacy@pakbonds.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;






