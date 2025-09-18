import React, { useContext, useEffect, useState } from 'react';

// router
import { Link, useNavigate } from 'react-router-dom';

// icon
import search from "../../pics/search.png";

// Context
import { RoutesList } from '../../context/RoutesList';
import { TagsList } from '../../context/TagsList';

// Components
import Card from '../../components/Card';
import Loading from '../../components/Loading';



function HomeArticlesList() {

    const navigate = useNavigate();

    // ------------------------ State ------------------------ //
    const [articles, setArticles] = useState(null);
    
    
    // ------------------------ Context ------------------------ //
    const routesList = useContext(RoutesList);
    const tagsList = useContext(TagsList);


    // ------------------------ Functions ------------------------ //
    const prepareAllItems = () => {
        const list = [];
        for(let i in routesList) {
            if(i == 'home') {
                continue;
            }
            else {
                list.push(routesList[i]);
            }
        }
        setArticles([...list]);
    }

    const searchArticles = (txt) => {
        if(!txt.length) {
            prepareAllItems();
        }
        else {
            const result = [];
            txt = txt.toLowerCase();
            articles.map(item => {
                let string = `${item.title} ${item.subTitle}`;
                string = string.toLowerCase();
                if(string.includes(txt)) result.push(item);
            })
            setArticles([...result]);
        }
    }

    const onClickHandler = (article) => {
        const { title, subTitle, time, date } = article;
        localStorage.setItem('article', JSON.stringify({
            title, subTitle, time, date
        }))
        navigate(article.url)
    }

    // ------------------------ Effects ------------------------ //
    useEffect(() => {
        setTimeout(() => {
            prepareAllItems();
        }, 2000);
    }, [])
    
    return (
        <>
            {
                articles &&
                <div className='searchBox'>
                    <img src={search} className='searchIocn' alt="search icon" />
                    <input type="search" placeholder='Search...' className='searchInput' onChange={(element) => searchArticles(element.target.value)} />
                </div>
            }
            {
                articles === null
                ?
                    <div className='loadArticles'>
                        <Loading />
                    </div>
                :
                    <div className='articlesContainer'>
                        {
                            articles.length
                            ?
                                articles.map( (article) => {
                                return (
                                    <div onClick={() => onClickHandler(article)} className='card' key={article.title}>
                                        <Card tag={tagsList[article.tag]} data={article} />
                                    </div>
                                )
                            } )
                            :
                            <div className='noItems normal-font'>
                                No Articles Available
                            </div>
                        }
                    </div>
            }
        </>
    )
}

export default HomeArticlesList