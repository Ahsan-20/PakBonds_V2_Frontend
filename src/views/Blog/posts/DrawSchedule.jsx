import BlogPostLayout from '@/components/blog/BlogPostLayout';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
    { month: 'JAN', day: '15', bonds: [{ label: 'Rs. 750 Bond', color: 'text-purple-400', bg: 'bg-purple-500/20' }], title: 'Draw No. 105', sub: 'First Prize: Rs. 1,500,000 — Peshawar' },
    { month: 'FEB', day: '16', bonds: [{ label: 'Rs. 100 Bond', color: 'text-cyan-400', bg: 'bg-cyan-500/20' }, { label: 'Rs. 1,500 Bond', color: 'text-pink-400', bg: 'bg-pink-500/20' }], title: 'Combined Draws (Karachi / Lahore)', sub: '100 Bond (Draw 53) & 1500 Bond (Draw 109)' },
    { month: 'MAR', day: '10', bonds: [{ label: 'Premium 25k', color: 'text-amber-400', bg: 'bg-amber-500/20' }, { label: 'Premium 40k', color: 'text-rose-400', bg: 'bg-rose-500/20' }], title: 'Premium Bond Draws', sub: 'Multan & Rawalpindi' },
];

export default function DrawSchedule() {
    return (
        <BlogPostLayout meta={{
            category: '2026 Calendar',
            title: '2026 Prize Bond Draw Schedule',
            subtitle: 'Mark your calendars. Here is when the next draws are happening for each active denomination.',
            readTime: '4 min read',
            icon: Calendar,
            accentColor: 'text-pink-400',
            accentBg: 'bg-pink-500/10',
            accentBorder: 'border-pink-500/20',
        }}>
            <h2>Upcoming Draws (Q1 2026)</h2>
            <div className="space-y-4 mb-12">
                {events.map(ev => (
                    <div key={ev.day + ev.month} className="flex flex-col sm:flex-row gap-5 prose-box hover:border-cyan-500/30 transition-all duration-300 cursor-default">
                        <div className="shrink-0 flex flex-col items-center justify-center w-18 h-18 sm:w-20 sm:h-20 bg-white/[0.04] rounded-2xl border border-white/[0.07] px-4 py-2">
                            <span className="text-[10px] font-mono uppercase text-zinc-600 tracking-widest">{ev.month}</span>
                            <span className="text-3xl font-black text-white">{ev.day}</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 flex-wrap mb-2">
                                {ev.bonds.map(b => (
                                    <span key={b.label} className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full ${b.bg} ${b.color} text-[10px] font-bold font-mono uppercase tracking-wider`}>{b.label}</span>
                                ))}
                            </div>
                            <h3 className="!text-white !mt-0 !mb-1">{ev.title}</h3>
                            <p className="text-xs text-zinc-600 flex items-center gap-1"><MapPin size={11} />{ev.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-r from-pink-900/20 to-black border border-pink-500/20 text-center">
                <Calendar size={40} className="mx-auto text-pink-400 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-3">Never Miss a Date</h2>
                <p className="text-zinc-500 mb-6">Why memorize dates? Add your bonds to our app and we will notify you automatically when a draw happens.</p>
                <Link href="/signup" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-semibold transition-colors">
                    Get Auto Alerts <ArrowRight size={15} />
                </Link>
            </div>
        </BlogPostLayout>
    );
}
