import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const getData = () => {
  let data = localStorage.getItem('article');
  data = JSON.parse(data);
  return data;
}

function ArticlesHeader() {
  
    const navigate = useNavigate();

    const data = getData();

    const backHome = () => {
      localStorage.removeItem('article');
      navigate('/');
    }

    useEffect(() => {
      if(localStorage.getItem('article')) {
        localStorage.removeItem('article');
      }
      else {
        navigate('/');
      }
    }, [])
  
  
    return (
      <div className='articleHeaderBox'>

        <nav className='normal-font main-gray'>
          <span className='backArticle' onClick={backHome}>
            {`<<`} back
          </span>
        </nav>

        <h1 className='header-font main-gray articleHeader'>
          { data?.title??"" }
        </h1>

        <h2 className='normal-font main-gray articleSubHeader'>
          { data?.subTitle??"" }
        </h2>

        <div className='articleDetails main-gray normal-font'>
          <span className='articleDetails_time'>
            Read in {data?.time??""} min
          </span>
          <span className='articleDetails_seperator'>
            |
          </span>
          <span>
            Published on {data?.date?.month??""} {data?.date?.day??""}, {data?.date?.year??""}
          </span>
        </div>

      </div>
    )
}

export default ArticlesHeader