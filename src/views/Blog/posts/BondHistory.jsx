import BlogPostLayout from '@/components/blog/BlogPostLayout';
import { Landmark, Scroll, ShieldCheck } from 'lucide-react';

const pillars = [
    { Icon: Landmark, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', title: '100% Secure', body: 'Backed by the State Bank. Your principal amount never decreases.' },
    { Icon: Scroll, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', title: 'Liquid Asset', body: 'Can be cashed out at any bank, anywhere in Pakistan, instantly.' },
    { Icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', title: 'Islamic Status', body: "Considered 'Halal' by many scholars as the principal is safe, though individual opinions vary." },
];

export default function BondHistory() {
    return (
        <BlogPostLayout meta={{
            category: 'History & Education',
            title: 'Are Prize Bonds Safe? A Complete History',
            subtitle: "Understanding the history and government backing behind Pakistan's most popular investment scheme.",
            readTime: '10 min read',
            icon: Landmark,
            accentColor: 'text-zinc-400',
            accentBg: 'bg-zinc-500/10',
            accentBorder: 'border-zinc-500/20',
        }}>
            <h2>A Brief History</h2>

            <p>
                The Prize Bond scheme was introduced in Pakistan (and originally pre-partition India) as a way for the government to borrow money from the public while offering a chance of winning large prizes in return.
            </p>
            <p>
                It is managed by the <strong>Central Directorate of National Savings (CDNS)</strong> and the <strong>State Bank of Pakistan (SBP)</strong>. This means every single bond is backed by the sovereign guarantee of the Government of Pakistan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
                {pillars.map(({ Icon, color, bg, border, title, body }) => (
                    <div key={title} className="prose-box text-center">
                        <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center mx-auto mb-4`}>
                            <Icon size={22} className={color} />
                        </div>
                        <h3 className="!text-white !mt-0 !mb-2 !text-base">{title}</h3>
                        <p className="text-xs text-zinc-500 leading-relaxed">{body}</p>
                    </div>
                ))}
            </div>

            <h2>Why Invest?</h2>

            <p>
                Unlike stocks or crypto, your money in prize bonds is never at risk of going to zero. You can buy a Rs. 1,000 bond today, keep it for 10 years, and it will still be worth Rs. 1,000.
            </p>
            <p>
                However, the <strong>Opportunity Cost</strong> is the interest you would have earned in a bank. In exchange for giving up that small interest, you get a guaranteed ticket to potentially win millions.
            </p>

            <blockquote>
                Pakistan has been running prize bonds since 1960. In over 60 years, not a single winner has ever failed to be paid. That&apos;s a track record no private asset can match.
            </blockquote>
        </BlogPostLayout>
    );
}
