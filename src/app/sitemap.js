import fs from 'fs';
import path from 'path';

export default function sitemap() {
    const baseUrl = 'https://pakbonds.app';

    // 1. Core Platform Pages
    const routes = [
        '',
        '/about',
        '/prizebonds',
        '/blog',
        '/privacy-policy',
        '/terms-of-service',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/prizebonds' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Discover Statically Defined Blog Posts
    const blogDir = path.join(process.cwd(), 'src/app/blog');

    // We try to read the directory. If it errors out during dev/build because 
    // paths are different, we gracefully fall back to an empty array.
    let blogDirs = [];
    try {
        blogDirs = fs.readdirSync(blogDir, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);
    } catch (error) {
        console.warn('Failed to read blog directory for sitemap generation:', error);
    }

    const blogRoutes = blogDirs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // 3. Prize Bond Denomination Pages
    const denominations = ['100', '200', '750', '1500', '25000', '40000'];
    const denominationRoutes = denominations.map((denom) => ({
        url: `${baseUrl}/bonds/${denom}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [...routes, ...blogRoutes, ...denominationRoutes];
}
