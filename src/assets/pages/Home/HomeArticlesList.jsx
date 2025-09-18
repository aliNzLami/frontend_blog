import React, { useContext, useEffect, useState } from 'react';

// icon
import search from "../../pics/search.png";

// Context
import { RoutesList } from '../../context/RoutesList';

// Components
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';



function HomeArticlesList() {

    // ------------------------ State ------------------------ //
    const [articles, setArticles] = useState(null);
    
    
    // ------------------------ Context ------------------------ //
    const routesList = useContext(RoutesList);


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
                                    <Link to={article.url} className='card' key={article.title}>
                                        <Card data={article} />
                                    </Link>
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