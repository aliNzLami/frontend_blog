import React, { createContext } from "react";

import Home from '../pages/Home/Home';
const ImgRatio = React.lazy(() => import("../pages/Articles/ImgRatio/ImgRatio"))


export const RoutesList = createContext();

const RoutesListProvider = (props) => {
    const routesList = {
        home: { url: "/", element: <Home /> },
        
        imgRatio: { 
            title: "Image Ratio", 
            subTitle: "A formula for image sizes to use everywhere.",
            time: '5', 
            url: "/imgRatio", 
            tag: 'css',
            date:{year: 2025, month: 'Sep', day: '23'},
            element: <ImgRatio /> 
        },
    };

    return (
        <RoutesList.Provider value={routesList}>
            {props.children}
        </RoutesList.Provider>
    );
};

export default RoutesListProvider;
