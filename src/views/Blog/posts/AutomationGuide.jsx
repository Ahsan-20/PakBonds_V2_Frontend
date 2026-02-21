import BlogPostLayout from '@/components/blog/BlogPostLayout';
import Link from 'next/link';
import { Zap, Database, Bell, ArrowRight } from 'lucide-react';

const steps = [
    {
        title: 'Step 1: Sign Up',
        body: 'Create a free account. You only need an email address.',
        cta: { label: 'Create Account', href: '/signup' },
    },
    {
        title: 'Step 2: Add Your Bonds',
        body: 'Go to Manage Bonds in your dashboard. You can add ranges or enter specific numbers one-by-one.',
    },
    {
        title: 'Step 3: Verify & Relax',
        body: 'Check your Dashboard to see your total "Net Asset Value". That\'s it! If any of these numbers appear in a future draw, you will receive an instant alert.',
    },
];

export default function AutomationGuide() {
    return (
        <BlogPostLayout meta={{
            category: 'Pro Features',
            title: 'Guide to Automated Bond Checking',
            subtitle: 'The average investor spends 2–3 hours per year scanning lists. Our automation tools reduce that to zero.',
            readTime: '6 min read',
            icon: Zap,
            accentColor: 'text-blue-400',
            accentBg: 'bg-blue-500/10',
            accentBorder: 'border-blue-500/20',
        }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                {[
                    { Icon: Database, title: '1. One-Time Setup', body: 'Enter your bond numbers once. We store them encrypted in your personal vault.' },
                    { Icon: Bell, title: '2. Silent Monitoring', body: 'We check every new draw against your vault automatically — no action required.' },
                ].map(({ Icon, title, body }) => (
                    <div key={title} className="prose-box">
                        <Icon className="text-blue-400 mb-4" size={28} />
                        <h3 className="font-bold text-white mb-2">{title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed">{body}</p>
                    </div>
                ))}
            </div>

            <h2>Setup Instructions</h2>

            <div className="space-y-0">
                {steps.map((step, i) => (
                    <div key={i} className="relative pl-10 pb-10 border-l-2 border-blue-500/20 last:border-l-transparent last:pb-0">
                        <div className="absolute -left-[9px] top-0 w-[18px] h-[18px] rounded-full bg-[#050505] border-2 border-blue-500" />
                        <h3>{step.title}</h3>
                        <p className="text-zinc-500">{step.body}</p>
                        {step.cta && (
                            <Link href={step.cta.href} className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-semibold mt-2">
                                {step.cta.label} <ArrowRight size={13} />
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-black border border-blue-500/20 text-center">
                <h2 className="text-2xl font-bold text-white mb-3">Start Automating Today</h2>
                <p className="text-zinc-500 mb-6">Completely free for basic use.</p>
                <Link href="/manage-bonds" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">
                    Go to My Bonds <ArrowRight size={15} />
                </Link>
            </div>
        </BlogPostLayout>
    );
}
