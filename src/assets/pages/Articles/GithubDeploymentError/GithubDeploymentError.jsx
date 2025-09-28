import React from 'react'
import ArticlesHeader from '../../../components/ArticlesHeader'
import Pic from '../../../components/Pic'
import error_pic from './error.jpg'
import Paragraph from '../../../components/Paragraph'

function GithubDeploymentError() {
  return (
    <>
      <ArticlesHeader />
      
      <Paragraph>
        You say 'npm run deploy'
      </Paragraph>
      <Paragraph>
        The Error:
      </Paragraph>
      <Pic src={error_pic} alt={'github pages deployment error'} />

      <Paragraph>
        What deos it mean?
      </Paragraph>
      <Paragraph>
        It says during the time you are deploying your project on the cloud,
      </Paragraph>
      <Paragraph>
        You've been blocked in HTTPs,
      </Paragraph>
      <Paragraph>
        The security thought you are a bad guy.
      </Paragraph>
      <Paragraph mb={true}>
        And it is not a girl to crush on you.
      </Paragraph>

      <Paragraph>
        Solution?
      </Paragraph>
      <Paragraph>
        If you are not in hurry, do it another time.
      </Paragraph>
      <Paragraph>
        else
      </Paragraph>
      <Paragraph>
        Use another device, or VPN to deploy as another green flag guy.
      </Paragraph>
    </>
  )
}

export default GithubDeploymentError