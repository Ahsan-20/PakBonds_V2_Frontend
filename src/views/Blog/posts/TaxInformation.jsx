import BlogPostLayout from '@/components/blog/BlogPostLayout';
import { FileText, Calculator, TrendingDown } from 'lucide-react';

const tips = [
    { n: 1, title: 'File Your Returns', body: "Become a Filer before claiming your prize. It's a Rs. 225,000 saving on the Rs. 750 bond alone." },
    { n: 2, title: 'Check ATL Status', body: 'Ensure your name is active on FBR\'s Active Taxpayer List before the draw date.' },
    { n: 3, title: 'Claim Online (Premium Bonds)', body: 'Premium bonds are credited automatically. Tax is deducted based on your CNIC status at that moment.' },
];

export default function TaxInformation() {
    return (
        <BlogPostLayout meta={{
            category: 'Financial Update',
            title: 'Tax on Prize Bond Winnings (2026)',
            subtitle: "The government deducts tax at source before you receive your prize money. Here's how much you'll actually take home.",
            readTime: '6 min read',
            icon: FileText,
            accentColor: 'text-rose-400',
            accentBg: 'bg-rose-500/10',
            accentBorder: 'border-rose-500/20',
        }}>
            <h2>Current Tax Rates (2025–26)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="prose-box bg-emerald-900/20 border-emerald-500/20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.08]"><Calculator size={90} /></div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">For Filers</span>
                    <div className="text-5xl font-black text-white mb-2">15%</div>
                    <p className="text-sm text-emerald-200/50">Active Taxpayers on the ATL list.</p>
                </div>
                <div className="prose-box bg-rose-900/20 border-rose-500/20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.08]"><TrendingDown size={90} /></div>
                    <span className="text-xs font-mono text-rose-400 uppercase tracking-widest block mb-2">For Non-Filers</span>
                    <div className="text-5xl font-black text-white mb-2">30%</div>
                    <p className="text-sm text-rose-200/50">Individuals not on the Active Taxpayer List.</p>
                </div>
            </div>

            <h2>Example: Rs. 750 Bond 1st Prize</h2>
            <div className="prose-box mb-10">
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-white/[0.06] pb-3">
                        <span className="text-zinc-400">Total Prize Amount:</span>
                        <span className="font-mono font-bold text-white">Rs. 1,500,000</span>
                    </div>
                    <div className="flex justify-between text-emerald-400">
                        <span>Filer Deduction (15%):</span>
                        <span className="font-mono">– Rs. 225,000</span>
                    </div>
                    <div className="flex justify-between text-rose-400">
                        <span>Non-Filer Deduction (30%):</span>
                        <span className="font-mono">– Rs. 450,000</span>
                    </div>
                    <p className="text-xs text-zinc-600 text-right pt-1">*Non-filers lose an extra Rs. 225,000!</p>
                </div>
            </div>

            <h2>How to Save Money?</h2>
            <div className="space-y-4">
                {tips.map(t => (
                    <div key={t.n} className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 text-xs font-bold">{t.n}</div>
                        <div>
                            <strong className="text-zinc-200 text-sm">{t.title}</strong>
                            <p className="text-zinc-500 text-sm leading-relaxed mt-0.5">{t.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </BlogPostLayout>
    );
}
