import ArticlesHeader from '../../../components/ArticlesHeader';
import carousel from './carousel.PNG';
import carousel_mobile from './carousel-mobile.PNG';
import imgRatio from './imgRatio.PNG';
import Centered from '../../../components/Centered';
import Pic from '../../../components/Pic';

function ImgRatio() {
  return (
    <>
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

        <Pic src={imgRatio} alt={'image ratio code'} />
    </>
  )
}

export default ImgRatio