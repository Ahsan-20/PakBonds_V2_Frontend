import BlogPostLayout from '@/components/blog/BlogPostLayout';
import Link from 'next/link';
import { TrendingUp, MapPin, CreditCard, ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react';

const denominations = [100, 200, 750, 1500];
const premiumDenominations = [25000, 40000];

const purchaseLocations = [
    { Icon: MapPin, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', title: '1. National Savings Centres', body: 'The most reliable source. Visit any National Savings Centre (NSC) across Pakistan. You can buy any denomination here.' },
    { Icon: CreditCard, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', title: '2. Commercial Banks', body: 'Designated branches of major banks (HBL, UBL, MCB, NBP, etc.) also sell prize bonds.' },
    { Icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', title: '3. State Bank of Pakistan', body: 'Purchase standard and premium bonds directly from SBP Banking Services Corporation field offices.' },
];

export default function HowToBuy() {
    return (
        <BlogPostLayout meta={{
            category: 'Investment Guide',
            title: 'How to Buy Prize Bonds in Pakistan',
            subtitle: 'A safe, government-backed investment with a chance to become a millionaire. Everything you need to know to get started.',
            readTime: '7 min read',
            icon: TrendingUp,
            accentColor: 'text-emerald-400',
            accentBg: 'bg-emerald-500/10',
            accentBorder: 'border-emerald-500/20',
        }}>
            <h2>Available Denominations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {denominations.map(val => (
                    <div key={val} className="prose-box !py-3 text-center">
                        <span className="text-base font-bold text-white block">Rs. {val.toLocaleString()}</span>
                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider mt-0.5 block">Standard</span>
                    </div>
                ))}
                {premiumDenominations.map(val => (
                    <div key={val} className="bg-emerald-900/20 border border-emerald-500/25 rounded-2xl py-3 text-center">
                        <span className="text-base font-bold text-emerald-400 block">Rs. {val.toLocaleString()}</span>
                        <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-wider mt-0.5 block">Premium</span>
                    </div>
                ))}
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/25 rounded-2xl p-5 mb-10 flex gap-4">
                <AlertTriangle className="text-yellow-400 shrink-0 mt-0.5" size={18} />
                <div>
                    <strong className="text-white text-sm block mb-1">Important Note</strong>
                    <p className="text-sm text-yellow-200/60 leading-relaxed">
                        Regular (Bearer) Rs. 40,000 bonds have been discontinued. Only <strong className="text-yellow-200/80">Premium Rs. 40,000</strong> bonds are currently valid for purchase and draws.
                    </p>
                </div>
            </div>

            <h2>Where to Buy?</h2>
            <div className="space-y-4 mb-10">
                {purchaseLocations.map(({ Icon, color, bg, border, title, body }) => (
                    <div key={title} className="prose-box flex gap-4">
                        <div className={`shrink-0 w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center`}>
                            <Icon size={18} className={color} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-1">{title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{body}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2>The Buying Process</h2>

            <h3 className="!text-cyan-400">For Standard Bonds (100 – 15,000)</h3>
            <ol className="list-decimal list-inside space-y-2 text-zinc-300 mb-8">
                <li>Visit the bank or centre with your CNIC (original + copy).</li>
                <li>Fill out the purchase form (Application for Purchase of Prize Bonds).</li>
                <li>Pay cash or provide a cheque.</li>
                <li>Receive your physical bonds immediately. <strong>Keep them safe!</strong> These are &quot;Bearer&quot; bonds — whoever holds the paper owns the money.</li>
            </ol>

            <h3 className="!text-emerald-400">For Premium Bonds (25,000 &amp; 40,000)</h3>
            <ol className="list-decimal list-inside space-y-2 text-zinc-300 mb-10">
                <li>Requires a bank account and valid CNIC.</li>
                <li>Premium bonds are <strong>Registered</strong> in your name (safe from theft).</li>
                <li>Profit is credited directly to your bank account automatically.</li>
                <li>You will receive a certificate of ownership instead of a bearer bond.</li>
            </ol>

            <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-emerald-900/20 to-black border border-emerald-500/20 text-center">
                <h2 className="text-2xl font-bold text-white mb-3">Already bought some?</h2>
                <p className="text-zinc-500 mb-6">Save your numbers in our secure wallet to get automatic win alerts.</p>
                <Link href="/manage-bonds" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors">
                    Add to My Wallet <ArrowRight size={15} />
                </Link>
            </div>
        </BlogPostLayout>
    );
}
