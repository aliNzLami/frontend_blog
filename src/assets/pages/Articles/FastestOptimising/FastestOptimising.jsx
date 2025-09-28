import React from 'react'
import ArticlesHeader from '../../../components/ArticlesHeader'
import Paragraph from '../../../components/Paragraph'

function FastestOptimising() {
    return (
        <>
            <ArticlesHeader />
            
            <Paragraph>
                This project of mine:
            </Paragraph>
            <Paragraph mb={true}>
                <a target='_blank' href="https://alinzlami.github.io/gameShop/#/">
                    Video Game Online Shop
                </a>
            </Paragraph>

            <Paragraph mb={true}>
                It used to take more than 20 seconds to be loaded completely. Yes, 20 secondes!!!!!! 
            </Paragraph>
            
            <Paragraph>
                Before going on hard refactoring,
            </Paragraph>
            <Paragraph mb={true}>
                such as migration to SSR ecosystem, using useMemo and useCallback in the essential components, and etc... 
            </Paragraph>

            <Paragraph>
                I said ok, let's do it fast.
            </Paragraph>
            <Paragraph mb={true}>
                I am representing this project on this week, I want a fast solution...
            </Paragraph>

            <Paragraph>
                This project is an e-commerce one. Which means?
            </Paragraph>
            <Paragraph>
                Many images...
            </Paragraph>
            <Paragraph>
                All the products have images.
            </Paragraph>
            <Paragraph>
                There are many images on the home page.
            </Paragraph>
            <Paragraph mb={true}>
                Why not start with images?
            </Paragraph>

            <Paragraph>
                - First, I compress all images to under 500kb size.
            </Paragraph>
            <Paragraph mb={true}>
                - Seconde, I converted all images from png and jpg, to... .webp!!! This format can do magic. Holding quality, but much lighter size. It is made for browsers and internet. use it. That's all.
            </Paragraph>

            <Paragraph>
                Also, in the routing section, where I import all of the pages:
            </Paragraph>
            <Paragraph>
                <a target='_blank' href="https://github.com/aliNzLami/gameShop/blob/main/src/assets/context/RouteContext.jsx">
                    Routing Section
                </a>
            </Paragraph>
            <Paragraph>
                I used lazy loading.
            </Paragraph>
            <Paragraph mb={true}>
                It is a 'must' for e-commerce platforms. Why to load other pages full of images when the client has not gone there yet?
            </Paragraph>

            <Paragraph>
                Lastly, using GSAP.
            </Paragraph>
            <Paragraph>
                If you have a page full of animations, especially those animations that happens when a user scroll on it,
            </Paragraph>
            <Paragraph>
                GSAP is a good idea.
            </Paragraph>
            <Paragraph>
                So clean, so effecient, in time, syntax, and component rendering.
            </Paragraph>
            <Paragraph mb={true}>
                You do not need to write heavy logical codes, and have a dangerous game with React mounting hooks.
            </Paragraph>
            
            <Paragraph>
                Summary
            </Paragraph>
            <Paragraph>
                - Compress all images and videos to under 500kb.
            </Paragraph>
            <Paragraph>
                - Convert all images to .webp format.
            </Paragraph>
            <Paragraph>
                - Go for lazy loading for importing the pages.
            </Paragraph>
            <Paragraph>
                - Use GSAP for heavy-like and complex animations. 
            </Paragraph>
        </>
    )
}

export default FastestOptimising