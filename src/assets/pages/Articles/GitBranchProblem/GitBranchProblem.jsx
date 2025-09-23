import React from 'react'
import ArticlesHeader from '../../../components/ArticlesHeader'
import Paragraph from '../../../components/Paragraph'

function GitBranchProblem() {
  return (
    <>
        <ArticlesHeader />
        
        <Paragraph mb={true}>
            fatal: Not a valid object name: 'master‘
        </Paragraph>

        <Paragraph mb={true}>
            Familiar, huh?
        </Paragraph>

        <Paragraph>
            You follow these steps so well:
        </Paragraph>
        <Paragraph>
            - Git init
        </Paragraph>
        <Paragraph>
            - Git remote add origin 'blah blah blah URL'
        </Paragraph>
        <Paragraph>
            - Git branch main
        </Paragraph>
        <Paragraph mb={true}>
            ---{`>`} fatal: Not a valid object name: 'master‘
        </Paragraph>

        <Paragraph>
            Because you have not commit anything.
        </Paragraph>
        <Paragraph>
            In order to make a new branch after git initial, you need at least one commit.
        </Paragraph>
        <Paragraph>
            Just make a new file, commit it, delete it, commit it, then make your branch.
        </Paragraph>
        <Paragraph>
            Easy.
        </Paragraph>
    </>
  )
}

export default GitBranchProblem