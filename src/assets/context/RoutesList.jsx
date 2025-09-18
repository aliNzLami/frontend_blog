import React, { createContext } from "react";

import Home from '../pages/Home/Home';
const WebpackInVanillaJS = React.lazy(() => import('../../assets/pages/Articles/WebpackInVanillaJS'))


export const RoutesList = createContext();

const RoutesListProvider = (props) => {
    const routesList = {
        home: { url: "/", element: <Home /> },
        
        webpackInVanillaJS2: { 
            title: "Webpack for Vannila JS Project", 
            subTitle: "How to config Webpack for a no-framework project (Pure JS)",
            time: '10', 
            url: "/webpackInVanillaJS", 
            tag: 'js',
            date:{year: 2025, month: 'Jul', day: '11'},
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
