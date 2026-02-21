import BlogPostLayout from '@/components/blog/BlogPostLayout';
import { Clock, Building } from 'lucide-react';

const docs = [
    'Original CNIC and a legible photocopy.',
    'The Original Prize Bond (signed by you on the back).',
    'A photocopy of the prize bond (signed on the back).',
    'Completed Claim Form (available free at the bank).',
    'Bank Account details (IBAN) for direct credit of funds.',
];

const claimLocations = [
    { tier: 'Small Prizes (Up to Rs. 1,250)', where: 'Any National Savings Centre, authorized commercial bank, or State Bank (SBP BSC) office.' },
    { tier: 'Large Prizes (Above Rs. 1,250)', where: 'Must be claimed at State Bank of Pakistan (SBP BSC) offices. Commercial banks can process up to Rs. 500,000 for their account holders.' },
];

const timing = [
    { range: 'Up to Rs. 18,500', time: 'Same day cash or next-day transfer.' },
    { range: 'Up to Rs. 500,000', time: 'Approx. 15 working days.' },
    { range: 'Above Rs. 1 Million', time: 'Up to 30 working days (PSPC verification).' },
];

export default function HowToClaim() {
    return (
        <BlogPostLayout meta={{
            category: 'Claim Guide',
            title: 'How to Claim Your Prize Money',
            subtitle: 'You won! Now what? Here is the exact procedure to get your money in your bank account safely.',
            readTime: '5 min read',
            icon: Clock,
            accentColor: 'text-amber-400',
            accentBg: 'bg-amber-500/10',
            accentBorder: 'border-amber-500/20',
        }}>
            <div className="bg-amber-900/20 border border-amber-500/25 rounded-2xl p-5 mb-10 flex gap-4">
                <Clock className="text-amber-400 shrink-0 mt-0.5" size={18} />
                <div>
                    <strong className="text-white text-sm block mb-1">⏳ Time Limit</strong>
                    <p className="text-sm text-amber-200/60 leading-relaxed">
                        You have a maximum of <strong className="text-amber-200/80">6 years</strong> from the date of the draw to claim your prize. After that, the money expires and is forfeited.
                    </p>
                </div>
            </div>

            <h2>Where to Go?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {claimLocations.map(loc => (
                    <div key={loc.tier} className="prose-box">
                        <h3 className="font-bold text-white mb-2 text-base">{loc.tier}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed">{loc.where}</p>
                    </div>
                ))}
            </div>

            <h2>Required Documents</h2>
            <div className="space-y-3 mb-10">
                {docs.map((doc, i) => (
                    <div key={i} className="flex gap-4 items-start">
                        <div className="shrink-0 w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">{i + 1}</div>
                        <p className="text-zinc-400 text-sm leading-relaxed mt-0.5" dangerouslySetInnerHTML={{ __html: doc.replace(/\*\*(.*?)\*\*/g, '<strong class="text-zinc-200">$1</strong>') }} />
                    </div>
                ))}
            </div>

            <h2>Processing Time</h2>
            <div className="overflow-hidden rounded-xl border border-white/[0.08] mb-6">
                <table className="w-full text-sm">
                    <thead className="bg-white/[0.04]">
                        <tr>
                            <th className="p-4 text-left font-bold text-white">Prize Range</th>
                            <th className="p-4 text-left font-bold text-white">Processing Time</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                        {timing.map(t => (
                            <tr key={t.range} className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-4 font-mono text-amber-400">{t.range}</td>
                                <td className="p-4 text-zinc-400">{t.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </BlogPostLayout>
    );
}
