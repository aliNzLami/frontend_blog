import React from 'react'
import ArticlesHeader from '../../../components/ArticlesHeader'
import Paragraph from '../../../components/Paragraph'
import Centered from '../../../components/Centered'
import Pic from '../../../components/Pic';
import pic1 from './stable.JPG';
import pic2 from './noStable.JPG';
import arr from './arr.JPG';
import func from './func.JPG';

function ImagesThreeJS() {
    return (
        <>
            <ArticlesHeader />

            <Paragraph>
                Look at these 3D shapes:
            </Paragraph>
            <Pic src={pic1} alt={'3D shapes of Three.js'} />
            <Pic src={pic2} alt={'3D shapes of Three.js'} />

            <Centered>
                <Paragraph mb={true}>
                    <a target='_blank' href="https://alinzlami.github.io/dreamNote/">
                        And if you wanted to interact with it, checkout here.
                    </a>
                </Paragraph>
            </Centered>

            <br />

            <Paragraph>
                So, the question is,
            </Paragraph>
            <Paragraph mb={true}>
                how to put those images on the surfeces? 
            </Paragraph>

            <br />

            <Paragraph>
                Step 1:
            </Paragraph>
            <Paragraph>
                Make an array of the images.
            </Paragraph>
            <Paragraph>
                Note: 
            </Paragraph>
            <Paragraph>
                - The images MUST be in .webp format. 
            </Paragraph>
            <Paragraph>
                - You MUST upload them on some hosting website, then use the link.
            </Paragraph>
            <Paragraph>
                - Why? It does not accept direct local url of images.
            </Paragraph>
            <Paragraph>
                Like this:
            </Paragraph>
            <Pic src={arr} alt={'array js'} />
            
            <br />

            <Paragraph>
                Then, to use this images on the surfaces,
            </Paragraph>
            <Paragraph>
                You should know it's a async process
            </Paragraph>
            <Paragraph>
                Like this:
            </Paragraph>
            <Pic src={func} alt={'function js'} />
            
            <br />

            <Paragraph>
                <span>
                    To look at the entire code, checkout {` `} 
                </span>
                <a target='_blank' href="https://github.com/aliNzLami/dreamNote/blob/main/assets/js/book.js">
                    here
                </a>
            </Paragraph>
        </>
    )
}

export default ImagesThreeJS