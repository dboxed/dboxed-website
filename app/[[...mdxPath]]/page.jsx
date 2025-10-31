import {generateStaticParamsFor, importPage} from 'nextra/pages'
import {useMDXComponents as getMDXComponents} from '../../mdx-components'
import {execSync} from "node:child_process";
import * as fs from "node:fs";

export const generateStaticParams = generateStaticParamsFor('mdxPath')

function getGitModTime(path) {
    if (!path) {
        return undefined
    }

    try {
        const allAuthorDates = execSync(
            `git log --follow --name-status --pretty=format:%aI -- ${path}`,
        ).toString()
        const [lastEditExceptPathChangeDate] = allAuthorDates.match(/20[\d-T:.Z+]+$(?!\r?\nR)/m) || []
        const d = new Date(lastEditExceptPathChangeDate)

        return d.getTime()
    } catch {
        const st = fs.statSync(path)
        return Math.trunc(st.mtimeMs)
    }
}

function updateMetadata(metadata) {
    const modTime = getGitModTime(metadata.filePath)

    if (modTime) {
        metadata.timestamp = modTime

        // put the gitModTime into <meta> so that we can later use it to generate the sitemap.xml
        metadata.other = {
            gitModTime: modTime,
        }
    }
}

export async function generateMetadata(props) {
    const params = await props.params
    const {metadata} = await importPage(params.mdxPath)
    updateMetadata(metadata)
    return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
    const params = await props.params
    const result = await importPage(params.mdxPath)
    const {default: MDXContent, toc, metadata} = result

    updateMetadata(metadata)

    return (
        <Wrapper toc={toc} metadata={metadata}>
            <MDXContent {...props} params={params}/>
        </Wrapper>
    )
}