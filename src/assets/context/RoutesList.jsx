import React, { createContext } from "react";

import Home from '../pages/Home/Home';
const ImgRatio = React.lazy(() => import("../pages/Articles/ImgRatio/ImgRatio"))
const MapArray = React.lazy(() => import("../pages/Articles/MapArray/MapArray"))
const ViteAndCRA = React.lazy(() => import("../pages/Articles/ViteAndCRA/ViteAndCRA"))
const RoutingGitHubPages = React.lazy(() => import("../pages/Articles/RoutingGitHubPages/RoutingGitHubPages"))


export const RoutesList = createContext();

const RoutesListProvider = (props) => {
    const routesList = {
        home: { url: "/", element: <Home /> },
        
        imgRatio: { 
            title: "Image Ratio", 
            subTitle: "A formula for image sizes to use everywhere.",
            time: '3', 
            url: "/imgRatio", 
            tag: 'css',
            date:{year: 2025, month: 'Sep', day: '23'},
            element: <ImgRatio /> 
        },

        mapArray: { 
            title: "Map Over an Empty Array", 
            subTitle: "An array is empty, and you want to map over it in JSX.",
            time: '3', 
            url: "/mapArr", 
            tag: 'js',
            date:{year: 2025, month: 'Sep', day: '23'},
            element: <MapArray /> 
        },

        viteWebpack: { 
            title: "Vite vs Webpack", 
            subTitle: "My personal opinion about these two bundlers",
            time: '2', 
            url: "/vitevswebpack", 
            tag: 'js',
            date:{year: 2025, month: 'Sep', day: '23'},
            element: <ViteAndCRA /> 
        },

        routingGitHub: { 
            title: "Routing on GitHub Pages", 
            subTitle: "Routing on GitHub Pages is challenging, but there's a solution.",
            time: '5', 
            url: "/routing-githubpages", 
            tag: 'github',
            date:{year: 2025, month: 'Sep', day: '23'},
            element: <RoutingGitHubPages /> 
        },
    };

    return (
        <RoutesList.Provider value={routesList}>
            {props.children}
        </RoutesList.Provider>
    );
};

export default RoutesListProvider;
