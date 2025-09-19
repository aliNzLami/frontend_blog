import React from 'react'
import ArticlesHeader from '../../../components/ArticlesHeader'
import Centered from '../../../components/Centered'
import hash from './hash.PNG'

function RoutingGitHubPages() {
  return (
    <>
        <ArticlesHeader />

        <div className='artcileParagraph mb-50'>
            <p>
                You deployed your project on GitHub Pages. Everything's fine.
            </p>
            <p>
                Looks like fine...
            </p>
            <p>
                When you go to the other pages {`(like from "Home" to "Contact Us")`}, it goes there. Still, fine.
            </p>
        </div>

        <div className='artcileParagraph mb-50'>
            <p>
                You click on back button to go back in previous page..... 404
            </p>
            <p>
                Or, you do not click back. You just refresh your current page..... 404
            </p>
        </div>

        <div className='artcileParagraph mb-50'>
            <p>
                Why?
            </p>
            <p>
                During the development, you have used React-Router. it works ok. What happes on GitHub Pages?
            </p>
            <p>
                GitHub Pages only sees static files. So, it looks for "/contact/index.html"
            </p>
            <p>
                which does not exist.
            </p>
        </div>

        <div className='artcileParagraph mb-50'>
            <p>
                Solution?
            </p>
            <p>
                Do not use BrowseRoute.
            </p>
            <p>
                Use HashRoute:
            </p>
        </div>

        <Centered>
            <img 
                src={hash} 
                className='rounded-10 dBlock mb-50 fullImgMobile'
                alt="js code" 
            />
        </Centered>

        <div className='artcileParagraph mb-50'>
            <p>
                What happens?
            </p>
            <p>
                Your URL looks like this: "website.com/#/contact"
            </p>
            <p>
                GitHub Pages won't look for "/contact/index.html" file anymore. Because of hashtag.
            </p>
        </div>
    </>
  )
}

export default RoutingGitHubPages