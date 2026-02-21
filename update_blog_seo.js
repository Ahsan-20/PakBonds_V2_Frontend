const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'src', 'app', 'blog');

// The exact, high-quality SEO metadata we want for each specific blog post
const seoData = {
    'automation-guide': {
        title: 'Guide to Automated Prize Bond Checking | PakBonds Pro',
        description: 'Stop scanning manual lists. Learn how to set up automatic win alerts for your Prize Bond portfolio and get instant notifications on draw day.',
        headline: 'Guide to Automated Prize Bond Checking'
    },
    'history': {
        title: 'Are Pakistan Prize Bonds Safe? A Complete History',
        description: 'Discover the history, government backing, and Islamic status of Pakistan Prize Bonds. Learn why they are considered a 100% secure, liquid investment.',
        headline: 'Are Pakistan Prize Bonds Safe? A Complete History'
    },
    'how-to-buy': {
        title: 'How to Buy Prize Bonds in Pakistan | Complete Investment Guide',
        description: 'A step-by-step guide to purchasing standard and Premium Prize Bonds in Pakistan. Learn about denominations, authorized banks, and required documents.',
        headline: 'How to Buy Prize Bonds in Pakistan'
    },
    'how-to-check': {
        title: 'How to Check Prize Bonds Online | 3 Easy Methods',
        description: 'Stop wasting hours scanning lists. Learn the 3 most effective ways to check your Prize Bonds in Pakistan, including our instant archive scanner.',
        headline: 'How to Check Prize Bonds Online'
    },
    'how-to-claim': {
        title: 'How to Claim Prize Bond Winnings | Required Documents & Process',
        description: 'You won! Now what? Here is the exact procedure, required documents, and time limits to safely claim your Prize Bond money from the State Bank.',
        headline: 'How to Claim Prize Bond Winnings'
    },
    'premium-vs-standard': {
        title: 'Premium vs Standard Prize Bonds | Which is Better? (2026)',
        description: 'Should you buy old bearer bonds or new Premium registered bonds? Compare profit rates, security features, and prize structures side-by-side.',
        headline: 'Premium vs Standard Prize Bonds (Comparison)'
    },
    'schedule-2026': {
        title: '2026 Prize Bond Draw Schedule | Official Dates & Locations',
        description: 'Mark your calendars. Get the complete and official 2026 draw schedule for all active Pakistan Prize Bond denominations (100 to 40,000 Premium).',
        headline: '2026 Pakistan Prize Bond Draw Schedule'
    },
    'tax-info': {
        title: 'Tax on Prize Bond Winnings 2026 | Filer vs Non-Filer Rates',
        description: 'The government deducts tax at source before paying your prize. Understand the active 15% (Filer) vs 30% (Non-Filer) tax rates on prize bond winnings.',
        headline: 'Tax Rates on Prize Bond Winnings (2026)'
    },
    'winning-odds': {
        title: 'Mathematical Odds of Winning a Prize Bond | Data Analysis',
        description: 'Replace luck with logic. Understand the mathematical probability of winning each Prize Bond denomination and learn strategies to improve your odds.',
        headline: 'Mathematical Odds of Winning a Prize Bond'
    }
};

const generatePageContent = (slug, data) => {
    // Convert kebab-case slug to PascalCase component name
    const componentName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    return `import ${componentName} from '@/views/Blog/posts/${componentName}';

export const metadata = {
    title: '${data.title}',
    description: '${data.description}',
    alternates: {
        canonical: 'https://pakbonds.app/blog/${slug}',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '${data.headline}',
    description: '${data.description}',
    url: 'https://pakbonds.app/blog/${slug}',
    author: {
        '@type': 'Organization',
        name: 'PakBonds',
        url: 'https://pakbonds.app'
    },
    publisher: {
        '@type': 'Organization',
        name: 'PakBonds',
        logo: {
            '@type': 'ImageObject',
            url: 'https://pakbonds.app/icon.png'
        }
    }
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <${componentName} />
        </>
    );
}
`;
};

// Process each directory
Object.entries(seoData).forEach(([slug, data]) => {
    const pagePath = path.join(BLOG_DIR, slug, 'page.jsx');
    if (fs.existsSync(pagePath)) {
        fs.writeFileSync(pagePath, generatePageContent(slug, data));
        console.log(`✅ Updated SEO for: /blog/${slug}`);
    } else {
        console.error(`❌ Could not find: ${pagePath}`);
    }
});
