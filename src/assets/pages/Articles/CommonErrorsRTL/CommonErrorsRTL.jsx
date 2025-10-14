import React from 'react'
import ArticlesHeader from '../../../components/ArticlesHeader'
import Paragraph from '../../../components/Paragraph'
import Centered from '../../../components/Centered'
import Pic from '../../../components/Pic'
import rendering from './rendering.JPG';
import waitfor from './waitfor.JPG';

function CommonErrorsRTL() {
  return (
    <>
        <ArticlesHeader />
        
        <Paragraph>
            We want to talk about 3 main factors:
        </Paragraph>
        <Paragraph>
            1{`)`} React Router DOM
        </Paragraph>
        <Paragraph>
            2{`)`} useEffect {`(Life Cycles)`}
        </Paragraph>
        <Paragraph mb={true}>
            3{`)`} State Management
        </Paragraph>

        <br />

        <Paragraph>
            If you are testing a component, which you used some hooks like "useNavigate" or some features like "{`<Link> </Link>`}"... 
        </Paragraph>
        <Paragraph>
            And you imported "react-router-dom" ...
        </Paragraph>
        <Paragraph mb={true}>
            You should take two steps in testing:
        </Paragraph>

        <Paragraph>
            First, remove 'dom'. Wrtie "react-router" in the component.
        </Paragraph>
        <Paragraph>
            Seconde, use "MemoryRouter" during rendering the component in RTL.
        </Paragraph>
        <Paragraph mb={true}>
            Like: {`render(<MemoryRouter> <YourComponent /> </MemoryRouter>)`}
        </Paragraph>


        <br />

        <Paragraph>
            About the life cycles
        </Paragraph>
        <Paragraph>
            Rendering the component in RTL is no different than browser.
        </Paragraph>
        <Paragraph>
            Which means, first the pre-loading, the effects which is called onDidMount
        </Paragraph>
        <Paragraph>
            If your component has useEffect, write <b>{`waitFor(() => {})`}</b>
        </Paragraph>
        <Paragraph mb={true}>
            And remember, your testing function is async now.
        </Paragraph>

        <br />

        <Paragraph>
            And about the state management...
        </Paragraph>     
        <Paragraph mb={true}>
            So simple, you have to wrap your component with the Provider inside RTL as well.
        </Paragraph>   

        <br />
        <br />

        <Centered>
            <Paragraph mb={true}>
                Let's assume you want to test a component...
            </Paragraph>        
        </Centered>

        <Paragraph>
            - It has useEffect
        </Paragraph>        
        <Paragraph>
            - It uses global state management with Context API
        </Paragraph>  
        <Paragraph>
            - It uses {`<Link>`} or useNavigae or useLocation or ... from "react-router"
        </Paragraph>  

        <br />
        <br />
        <br />

        <Pic src={rendering} alt={'rendering jsx in RTL'} />
        <br />
        <Pic src={waitfor} alt={'testing jsx in RTL'} />

    </>
  )
}

export default CommonErrorsRTL