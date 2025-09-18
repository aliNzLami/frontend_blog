import React, { createContext } from "react";

import Home from '../pages/Home/Home';
const WebpackInVanillaJS = React.lazy(() => import('../../assets/pages/Articles/WebpackInVanillaJS'))


export const RoutesList = createContext();

const RoutesListProvider = (props) => {
    const routesList = {
        home: { url: "/", element: <Home /> },
        
        webpackInVanillaJS: { 
            title: "Webpack for Vannila JS Project", 
            subTitle: "How to config Webpack for a no-framework project (Pure JS)",
            time: '10', 
            url: "/webpackInVanillaJS", 
            tag: 'webpack',
            element: <WebpackInVanillaJS /> 
        },

        webpackInVanillaJS1: { 
            title: "Webpack for Vannila JS Project", 
            subTitle: "How to config Webpack for a no-framework project (Pure JS)",
            time: '10', 
            url: "/webpackInVanillaJS", 
            tag: 'js',
            element: <WebpackInVanillaJS /> 
        },

        webpackInVanillaJS2: { 
            title: "Webpack for Vannila JS Project", 
            subTitle: "How to config Webpack for a no-framework project (Pure JS)",
            time: '10', 
            url: "/webpackInVanillaJS", 
            tag: 'js',
            element: <WebpackInVanillaJS /> 
        },

        webpackInVanillaJS3: { 
            title: "Webpack for Vannila JS Project", 
            subTitle: "How to config Webpack for a no-framework project (Pure JS)",
            time: '10', 
            url: "/webpackInVanillaJS", 
            tag: 'webpack',
            element: <WebpackInVanillaJS /> 
        },
    };

    return (
        <RoutesList.Provider value={routesList}>
            {props.children}
        </RoutesList.Provider>
    );
};

export default RoutesListProvider;
