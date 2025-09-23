import React from 'react'
import ArticlesHeader from '../../../components/ArticlesHeader'
import Paragraph from '../../../components/Paragraph'
import Pic from '../../../components/Pic'
import ui from './ui.PNG';
import arr from './arr.PNG';
import random from './random.png';

function BadIdeaMathRandom() {

    
  return (
    <>
        <ArticlesHeader />

        <Paragraph mb={true}>
            Let's imagine you have this scenario
        </Paragraph>

        <Paragraph>
            The UI:
        </Paragraph>

        <Pic src={ui} alt={'UI picture'} />

        <Paragraph>
            The Array:
        </Paragraph>

        <Pic src={arr} alt={'array js picture'} />
        
        <Paragraph>
            The JSX:
        </Paragraph>

        <Pic src={random} alt={'jsx picture'} />

        <Paragraph>
            What happens when you do that?
        </Paragraph>
        <Paragraph>
            Each time you are typing something, the state will be updated.
        </Paragraph>
        <Paragraph>
            When the state updates, the JSX renders once again.
        </Paragraph>
        <Paragraph mb={true}>
            When the JSX renders again, math.random{`()`} will be called again.
        </Paragraph>

        <Paragraph>
            Conclusion?
        </Paragraph>
        <Paragraph>
            You type something = update state = JSX rendering = new math.random{`()`} call = new key in your loop ==={`>`}
        </Paragraph>
        <Paragraph>
            You can't type anything in that input :{`)`}
        </Paragraph>
    </>
  )
}

export default BadIdeaMathRandom