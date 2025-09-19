import ArticlesHeader from '../../../components/ArticlesHeader'
import Centered from '../../../components/Centered'
import code from './code.PNG';

function MapArray() {
  return (
    <>
        <ArticlesHeader />

        <p className='artcileParagraph mb-50'>
            For example, the API from backend gives you an object:
        </p>

        <p className='artcileParagraph mb-50'>
            {
                `{
                    name: 'product',
                    size: 'large',
                    star: '3'
                }`
            }
        </p>

        <p className='artcileParagraph mb-50'>
            You need to show 3 stars, but how?
        </p>

        <Centered>
            <img 
                src={code} 
                className='rounded-10 dBlock mb-50 fullImgMobile'
                alt="js code" 
            />
        </Centered>
    </>
  )
}

export default MapArray