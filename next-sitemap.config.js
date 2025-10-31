import * as fs from "node:fs";

import * as jsdom from "jsdom";
const { JSDOM } = jsdom;

/** @type {import('next-sitemap').IConfig} */
export default {
    siteUrl: 'https://dboxed.io',
    changefreq: 'weekly',
    priority: '0.5',
    generateIndexSitemap: false,

    transform: async (config, path) => {
        const basePath = '.next/server/app'
        const filePath = `${basePath + path}.html`

        let lastmod = undefined

        if (fs.existsSync(filePath)) {
            try {
                const filePathStats = fs.statSync(filePath)
                lastmod = Math.trunc(filePathStats.mtimeMs)

                const data = await fs.promises.readFile(filePath, 'utf8')
                const dom = new JSDOM(data)

                const robots = dom.window.document.querySelector('meta[name="robots"]')?.content
                if (robots && robots.indexOf("noindex") !== -1) {
                    console.log("skipping due to noindex", filePath)
                    return null
                }

                // this is generated in page.jsx
                const gitModTime = dom.window.document.querySelector('meta[name="gitModTime"]')?.content
                if (gitModTime) {
                   lastmod = parseInt(gitModTime)
                }
            } catch (error) {
                console.error('err', error)
            }
        }

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? lastmod : undefined,
            alternateRefs: config.alternateRefs || [],
        }
    },
}