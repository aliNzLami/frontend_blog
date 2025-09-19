import ArticlesHeader from '../../../components/ArticlesHeader';
import carousel from './carousel.PNG';
import carousel_mobile from './carousel-mobile.PNG';
import imgRatio from './imgRatio.PNG';
import Centered from '../../../components/Centered';

function ImgRatio() {
  return (
    <div>
        <ArticlesHeader />

        <p className='artcileParagraph mb-50'>
            Imagine you have a carousel like this:
        </p>

        <Centered>
          <img src={carousel} width="90%" className='rounded-10 desktop mb-50' alt="carousel in e-commerce" />
          <img src={carousel_mobile} width="90%" className='rounded-10 mobile mb-50' alt="carousel in e-commerce" />
        </Centered>

        <p className='artcileParagraph'>
          How could you manage the image sizes in different devices?
        </p>
        <p className='artcileParagraph mb-50'>
          Well, this is the formula that my dear mentor taught me:
        </p>

        <Centered>
          <img src={imgRatio} className='rounded-10 block mb-20' alt="image ratio code" />
        </Centered>
        
    </div>
  )
}

export default ImgRatio