export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/forgot-password',
                '/reset-password',
                '/verify-email',
                '/change-password',
                '/dashboard',
                '/compare',
                '/manage-bonds',
                '/my-wins',
                '/download',
                '/notifications',
                '/settings',
                '/bonds/[message]',
            ],
        },
        sitemap: 'https://pakbonds.com/sitemap.xml',
    };
}
