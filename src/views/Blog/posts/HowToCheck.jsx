import BlogPostLayout from '@/components/blog/BlogPostLayout';
import Link from 'next/link';
import { HelpCircle, Globe, Search, Smartphone } from 'lucide-react';

export default function HowToCheck() {
    return (
        <BlogPostLayout meta={{
            category: "Beginner's Guide",
            title: "How to Check Prize Bonds: The Ultimate 2026 Guide",
            subtitle: "Stop wasting hours scanning lists. Here are the 3 most effective ways to check your bonds in Pakistan.",
            readTime: "5 min read",
            icon: HelpCircle,
            accentColor: 'text-cyan-400',
            accentBg: 'bg-cyan-500/10',
            accentBorder: 'border-cyan-500/20',
        }}>
            <div className="prose-box">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <Globe size={20} className="text-cyan-400" />
                    Method 1: The &quot;Digital&quot; Way <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full ml-2">Recommended</span>
                </h3>
                <p className="text-zinc-400 mb-4">Using a dedicated checker tool is 100× faster than manual lists.</p>
                <ol className="list-decimal list-inside space-y-3 text-zinc-300">
                    <li>Go to the <Link href="/compare" className="text-cyan-400 underline underline-offset-4">Check Results</Link> page.</li>
                    <li>Select your bond denomination (e.g., 750, 1500).</li>
                    <li>Enter your bond number.</li>
                    <li>Click &quot;Scan&quot;.</li>
                </ol>
                <div className="prose-box-cyan">
                    <strong>Pro Tip:</strong> Use the &quot;Check All Archives&quot; feature to scan your number against every draw in history instantly.
                </div>
            </div>

            <div className="prose-box opacity-80">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <Search size={20} className="text-purple-400" />
                    Method 2: The Manual List
                </h3>
                <p className="text-zinc-400 mb-4">Old school. Reliable, but slow.</p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                    <li>Download the official Gazettes from National Savings.</li>
                    <li>Open the PDF/TXT file.</li>
                    <li>Use <code>CTRL+F</code> to search for your number.</li>
                </ul>
            </div>

            <div className="prose-box opacity-60">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <Smartphone size={20} className="text-zinc-400" />
                    Method 3: National Savings Official Website
                </h3>
                <p className="text-zinc-400 mb-4">The official state portal — accurate but notoriously slow and often down on draw day.</p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                    <li>Visit <a href="https://savings.gov.pk" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline underline-offset-4">savings.gov.pk</a>.</li>
                    <li>Navigate to Prize Bond → Check Result.</li>
                    <li>Fill in the denomination and bond number.</li>
                </ul>
                <div className="prose-box-tip">
                    The official site goes down frequently on draw announcement days due to high traffic. PakBonds mirrors the draw data from official sources so you never have to rely on it.
                </div>
            </div>
        </BlogPostLayout>
    );
}
