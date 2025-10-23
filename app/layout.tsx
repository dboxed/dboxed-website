import {Layout, Navbar, Footer} from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

import "./globals.css"
import { Suspense } from "react";
import { MatomoAnalytics } from "@/app/mtmo";
import CookieConsentComponent from "@/components/cookie-consent/CookieConsent";
import FooterContent from "@/app/FooterContent";
import { FaXTwitter } from 'react-icons/fa6';

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

const banner = <Banner dismissible={false}>
    👷Please note that Dboxed is in a very early stage, including the documentation. Things are being built right now! 👷 Follow <a href="https://x.com/codablock" target="_blank" rel="noopener noreferrer" className="underline font-semibold">@codablock</a> on X for updates!
</Banner>

const navbar = (
    <Navbar
        logo={
            <div className="flex items-center gap-2">
                <img src="/images/general/icon.svg" alt="Logo" width={48} height={48}/>
                <span className="font-bold text-4xl">Dboxed</span>
            </div>
        }
        projectLink="https://github.com/dboxed/dboxed"
    >
        <a
            href="https://x.com/dboxed_io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            aria-label="X (Twitter)"
        >
            <FaXTwitter className="w-5 h-5" />
        </a>
        <a
            href="https://app.test.dboxed.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#51a684] to-[#115748] rounded-lg no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
            Login
        </a>
    </Navbar>
)

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
            banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/dboxed/dboxed-website/tree/main"
            //footer={<Footer/>}
            // ... Your additional layout options
        >
            {children}
            <Footer>
                <FooterContent/>
            </Footer>
        </Layout>
        <Suspense fallback={null}>
          <MatomoAnalytics />
        </Suspense>
        <CookieConsentComponent/>
        </body>
        </html>
    )
}