import BlogPostLayout from '@/components/blog/BlogPostLayout';
import { Scale, Check, X, Shield, Coins } from 'lucide-react';

const standardPros = ['Small denominations (100–1500)', 'Easy to buy/sell (like cash)'];
const standardCons = ['No Bi-annual Profit', 'Risk of Theft (Bearer document)'];
const premiumPros = ['Pays Profit every 6 months', 'Registered in your name (Safe)', 'Prizes credited to Bank Account', 'Highest Prizes (Rs. 80 Million)'];

const differences = [
    { Icon: Shield, color: 'text-cyan-400', title: 'Security', body: 'Standard Bonds are like cash — lose the paper, lose the money. Premium Bonds are digital and registered to your CNIC. Even if you lose the certificate, your money is safe.' },
    { Icon: Coins, color: 'text-amber-400', title: 'Dual Return (Profit + Prize)', body: 'Standard bonds only pay if you win a draw. Premium bonds pay a guaranteed profit every 6 months (like a savings account) plus you still participate in prize draws. It\'s a win-win.' },
];

export default function PremiumVsStandard() {
    return (
        <BlogPostLayout meta={{
            category: 'Comparison',
            title: 'Premium vs. Standard Bonds',
            subtitle: 'Should you buy the old paper bonds or switch to Premium registered bonds? Here is the complete breakdown.',
            readTime: '7 min read',
            icon: Scale,
            accentColor: 'text-indigo-400',
            accentBg: 'bg-indigo-500/10',
            accentBorder: 'border-indigo-500/20',
        }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Standard */}
                <div className="prose-box">
                    <h3 className="!text-white !mt-0 !mb-4">Standard (Bearer)</h3>
                    <ul className="space-y-2.5">
                        {standardPros.map(p => (
                            <li key={p} className="flex items-start gap-2.5 text-sm text-zinc-400">
                                <Check size={15} className="text-emerald-500 shrink-0 mt-0.5" />{p}
                            </li>
                        ))}
                        {standardCons.map(c => (
                            <li key={c} className="flex items-start gap-2.5 text-sm text-zinc-600 opacity-70">
                                <X size={15} className="text-rose-500 shrink-0 mt-0.5" />{c}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Premium */}
                <div className="relative prose-box bg-amber-900/15 border-amber-500/25 overflow-hidden">
                    <div className="absolute top-0 right-0 bg-amber-500 text-black text-[10px] font-bold px-2.5 py-1 rounded-bl-xl tracking-wider">RECOMMENDED</div>
                    <h3 className="!text-amber-400 !mt-0 !mb-4">Premium (Registered)</h3>
                    <ul className="space-y-2.5">
                        {premiumPros.map(p => (
                            <li key={p} className="flex items-start gap-2.5 text-sm text-zinc-300">
                                <Check size={15} className="text-emerald-500 shrink-0 mt-0.5" /><span dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <h2>Key Differences Explained</h2>
            <div className="space-y-5 mb-10">
                {differences.map(({ Icon, color, title, body }) => (
                    <div key={title} className="prose-box flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center">
                            <Icon size={18} className={color} />
                        </div>
                        <div>
                            <h3 className="!text-white !mt-0 !mb-1 !text-base">{title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{body}</p>
                        </div>
                    </div>
                ))}
            </div>

            <blockquote>
                &ldquo;For large investments (above 100k), we strongly recommend Premium bonds due to the safety and guaranteed profit returns.&rdquo;
            </blockquote>
        </BlogPostLayout>
    );
}
