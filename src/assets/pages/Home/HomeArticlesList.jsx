import React from 'react';

// Context
import { RoutesList } from './assets/context/RoutesList';

function HomeArticlesList() {
    const routesList = useContext(RoutesList);

    return (
        <div>
            {
                routesList
                &&
                Object.entries(routesList).map( (route) => {
                // route --> ['home', {…}] 
                return (
                    <></>
                )
                } )
            }
        </div>
    )
}

export default HomeArticlesList