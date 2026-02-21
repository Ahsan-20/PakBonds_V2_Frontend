import BlogPostLayout from '@/components/blog/BlogPostLayout';
import { BarChart3, AlertCircle } from 'lucide-react';

export default function WinningOdds() {
    return (
        <BlogPostLayout meta={{
            category: 'Analysis',
            title: 'Understanding Your Winning Odds',
            subtitle: "Replace luck with logic. Here's the mathematical probability of winning each prize bond denomination in 2026.",
            readTime: '8 min read',
            icon: BarChart3,
            accentColor: 'text-purple-400',
            accentBg: 'bg-purple-500/10',
            accentBorder: 'border-purple-500/20',
        }}>
            <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-10">
                <div className="flex gap-4">
                    <BarChart3 className="shrink-0 text-purple-400 mt-0.5" size={22} />
                    <div>
                        <h3 className="text-base font-bold text-white mb-2">The Basic Math</h3>
                        <p className="text-sm text-purple-200/70 leading-relaxed">
                            In a typical series (e.g., 000001 to 999999), there are usually 1 million bonds.
                            Only a fixed number of prizes are distributed per series.
                            The more bonds you hold, the higher your statistical probability.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Odds by Denomination</h2>

            <div className="overflow-hidden rounded-xl border border-white/10 mb-10 bg-black/40">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/[0.04] text-white font-bold">
                        <tr>
                            <th className="p-4">Bond (PKR)</th>
                            <th className="p-4">1st Prize</th>
                            <th className="p-4">2nd Prize</th>
                            <th className="p-4">Total Prizes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.05]">
                        {[
                            { denom: '100', color: 'text-cyan-400', p1: '700,000', p2: '200,000 (×3)', total: '1,203' },
                            { denom: '200', color: 'text-blue-400', p1: '750,000', p2: '250,000 (×5)', total: '2,355' },
                            { denom: '750', color: 'text-purple-400', p1: '1,500,000', p2: '500,000 (×3)', total: '1,700' },
                            { denom: '1,500', color: 'text-pink-400', p1: '3,000,000', p2: '1,000,000 (×3)', total: '1,700' },
                            { denom: '25,000', color: 'text-amber-400', p1: '50,000,000', p2: '15,000,000 (×3)', total: '1,700' },
                            { denom: '40,000', color: 'text-rose-400', p1: '80,000,000', p2: '30,000,000 (×3)', total: '663' },
                        ].map(row => (
                            <tr key={row.denom} className="hover:bg-white/[0.02] transition-colors">
                                <td className={`p-4 font-mono font-bold ${row.color}`}>{row.denom}</td>
                                <td className="p-4 text-zinc-300">{row.p1}</td>
                                <td className="p-4 text-zinc-300">{row.p2}</td>
                                <td className="p-4 text-zinc-400">{row.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h2>How to Improve Your Odds</h2>

            <div className="space-y-5">
                {[
                    { n: 1, title: 'Buy in Sequence', body: 'Buying a packet of 100 sequential numbers (e.g., ends in 00–99) guarantees that one number will match the last digit of any draw, statistically improving your coverage.' },
                    { n: 2, title: 'Diversify Denominations', body: "Don't put all your investment in one type. Smaller bonds (100, 200) have more frequent draws and more total prizes, while larger bonds have life-changing jackpots." },
                ].map(tip => (
                    <div key={tip.n} className="prose-box flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center font-bold text-white text-sm">
                            {tip.n}
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-1">{tip.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">{tip.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </BlogPostLayout>
    );
}
