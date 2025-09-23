import React from 'react'
import ArticlesHeader from '../../../components/ArticlesHeader'
import Paragraph from '../../../components/Paragraph'
import Pic from '../../../components/Pic'
import initial from './initial.PNG';
import provide from './provide.PNG';
import last from './last.PNG';

function ReduxNextJS() {
  return (
    <>
        <ArticlesHeader />
        
        <Paragraph>
            First question,
        </Paragraph>
        <Paragraph>
            Is it a good idea to use Redux in Next.js project? Well, depends...
        </Paragraph>
        <Paragraph>
            If your ecosystem is SSR ... No
        </Paragraph>
        <Paragraph>
            If your ecosystem is CSR ... Yes
        </Paragraph>
        <Paragraph mb={true}>
            Because in every step you must write 'use client.', sure, Redux has not server DNA.
        </Paragraph>

        <Paragraph>
            Look at this picture. Step 1:
        </Paragraph>
        <Pic src={initial} alt={'software architectures'} />

        <Paragraph>
            Step 2:
        </Paragraph>
        <Pic src={provide} alt={'software architectures'} />

        
        <Paragraph>
            This provider must be a component itself.
        </Paragraph>
        <Paragraph>
            Why?
        </Paragraph>
        <Paragraph mb={true}>
            Because, we cannot say 'use client' in root "layout.tsx" file.
        </Paragraph>

        <Paragraph>
            Last step:
        </Paragraph>
        <Pic src={last} alt={'software architectures'} />
    </>
  )
}

export default ReduxNextJS