import React from 'react'
import ArticlesHeader from '../../../components/ArticlesHeader'
import Paragraph from '../../../components/Paragraph'
import Pic from '../../../components/Pic'
import Code from "./vscode.jpg"

function VideosNextJS() {
    return (
        <>
            <ArticlesHeader />

            <Paragraph>
                I killed myself to know how to import videos in Next.js
            </Paragraph>
            <Paragraph>
                I played with Webpack as long as I could
            </Paragraph>
            <Paragraph mb={true}>
                But the solution was simpler than what you think
            </Paragraph>

            <Paragraph>
                Just click on image:
            </Paragraph>
            <Pic src={Code} alt={'importing video to Next.js environment'} />

        </>
    )
}

export default VideosNextJS