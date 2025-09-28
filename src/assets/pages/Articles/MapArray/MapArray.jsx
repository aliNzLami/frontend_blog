import ArticlesHeader from '../../../components/ArticlesHeader'
import Centered from '../../../components/Centered'
import Pic from '../../../components/Pic';
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

        <Pic src={code} alt={'js code'} />
    </>
  )
}

export default MapArray