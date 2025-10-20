import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

import "./globals.css"

export const metadata = {
    icons: {
        icon: [
            { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicons/favicon.ico', sizes: 'any' },
        ],
        apple: [
            { url: '/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            { url: '/favicons/android-36x36.png', sizes: '36x36', type: 'image/png' },
            { url: '/favicons/android-48x48.png', sizes: '48x48', type: 'image/png' },
            { url: '/favicons/android-72x72.png', sizes: '72x72', type: 'image/png' },
            { url: '/favicons/android-96x96.png', sizes: '96x96', type: 'image/png' },
            { url: '/favicons/android-144x144.png', sizes: '144x144', type: 'image/png' },
            { url: '/favicons/android-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/favicons/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/favicons/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
    },
    manifest: '/favicons/site.webmanifest',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Dboxed',
    },
}

// const banner = <Banner storageKey="some-key">This template was created with 🩸 and 💦 by <Link href="https://github.com/phucbm">PHUCBM</Link> 🐧</Banner>
const navbar = (
    <Navbar
        logo={<img src="/images/general/icon.svg" alt="Logo" width={48} height={20}/>}
        projectLink="https://github.com/dboxed/dboxed"
    />
)
const footer = <Footer>codablock {new Date().getFullYear()} © Dboxed.</Footer>

export default async function RootLayout({children}) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
        <Head
            // ... Your additional head options
        >
            <link rel="shortcut icon" href="/images/general/icon.svg"/>
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            // banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/dboxed/dboxed-website/tree/main"
            footer={footer}
            // ... Your additional layout options
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}