const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'src/app/blog');
const dirs = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

dirs.forEach(slug => {
    const pagePath = path.join(blogDir, slug, 'page.jsx');
    if (!fs.existsSync(pagePath)) return;

    let content = fs.readFileSync(pagePath, 'utf8');

    // Extract the existing title
    const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
    let title = titleMatch ? titleMatch[1] : 'PakBonds Blog Post';

    // Remove the old metadata export
    content = content.replace(/export const metadata = \{[^}]*\};?\n?/g, '');

    // We also need to extract the component name being imported
    const importMatch = content.match(/import\s+(\w+)\s+from\s+['"]@\/views\/Blog\/posts\/.*?['"];/);
    const componentName = importMatch ? importMatch[1] : 'BlogPost';

    const newMetadataAndSchema = `
export const metadata = {
    title: '${title} | PakBonds Blog',
    description: 'Read our comprehensive guide: ${title}. Learn more about Pakistan Prize Bonds, draw schedules, and investment strategies.',
    alternates: {
        canonical: 'https://pakbonds.app/blog/${slug}',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '${title}',
    description: 'Read our comprehensive guide: ${title}. Learn more about Pakistan Prize Bonds, draw schedules, and investment strategies.',
    url: 'https://pakbonds.app/blog/${slug}',
    author: {
        '@type': 'Organization',
        name: 'PakBonds'
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

    // Replace the default export
    content = content.replace(/export default function Page\(\) \{[\s\S]*?\}\n?/g, newMetadataAndSchema);

    // If there was no default export (rare), just append it
    if (!content.includes('export default function')) {
        content += newMetadataAndSchema;
    }

    fs.writeFileSync(pagePath, content, 'utf8');
    console.log('Updated SEO for ' + slug);
});

console.log('All blog posts updated with JSON-LD and Metadata!');
