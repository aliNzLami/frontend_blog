import React from 'react'
import ArticlesHeader from '../../../components/ArticlesHeader'

function ViteAndCRA() {
  return (
    <>
        <ArticlesHeader />

        <div className='artcileParagraph mb-50'>
            <p>
                First, Vite vs CRA {`(Create React App)`}:
            </p>
            <p>
                - You can use both of them to create your React application.
            </p>
            <p>
                - Vite uses Vite itself for bundling and environmental control.
            </p>
            <p>
                - CRA uses Webpack for bundling and environmental control.
            </p>
        </div>

        <div className='artcileParagraph mb-50'>
            <p>
                Speed:
            </p>
            <p>
                - Vite has definitely higher speed, both in running development and the deployment version.
            </p>
        </div>

        <div className='artcileParagraph mb-50'>
            <p>
                TailwindCSS:
            </p>
            <p>
                - You can use TailwindCSS locally only via Vite.
            </p>
            <p>
                - To use TailwindCSS in CRA project, you need to go with CDN.
            </p>
        </div>

        <div className='artcileParagraph mb-50'>
            <p>
                Next.js:
            </p>
            <p>
                - By default Next ecosystem is based on Webpack.
            </p>
        </div>

        <div className='artcileParagraph mb-50'>
            <p>
                GitHub Pages:
            </p>
            <p>
                - If you want deploy your project by GitHub Pages, and your project is bundled via Vite, you will have problem in the routings.
            </p>
        </div>

        <div className='artcileParagraph mb-50'>
            <p>
                React Testing Library:
            </p>
            <p>
                - You can use both Jest and RTL {`(with all their dependencies)`} in CRA without installing any third party.
            </p>
        </div>
    </>
  )
}

export default ViteAndCRA