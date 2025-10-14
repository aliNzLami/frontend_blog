import React, { createContext } from "react";

import Home from '../pages/Home/Home';
const XP = React.lazy(() => import("../pages/Articles/XP/XP"))
const ImgRatio = React.lazy(() => import("../pages/Articles/ImgRatio/ImgRatio"))
const MapArray = React.lazy(() => import("../pages/Articles/MapArray/MapArray"))
const ViteAndCRA = React.lazy(() => import("../pages/Articles/ViteAndCRA/ViteAndCRA"))
const RoutingGitHubPages = React.lazy(() => import("../pages/Articles/RoutingGitHubPages/RoutingGitHubPages"))
const BadIdeaMathRandom = React.lazy(() => import("../pages/Articles/BadIdeaMathRandom/BadIdeaMathRandom"))
const GitBranchProblem = React.lazy(() => import("../pages/Articles/GitBranchProblem/GitBranchProblem"))
const ReduxNextJS = React.lazy(() => import("../pages/Articles/ReduxNextJS/ReduxNextJS"))
const FastestOptimising = React.lazy(() => import("../pages/Articles/FastestOptimising/FastestOptimising"))
const GithubDeploymentError = React.lazy(() => import("../pages/Articles/GithubDeploymentError/GithubDeploymentError"))
const VideosNextJS = React.lazy(() => import("../pages/Articles/VideosNextJS/VideosNextJS"))
const ImagesThreeJS = React.lazy(() => import("../pages/Articles/ImagesThreeJS/ImagesThreeJS"))
const GLBFilesReact = React.lazy(() => import("../pages/Articles/GLB_Files/GLBFilesReact"))
const CommonErrorsRTL = React.lazy(() => import("../pages/Articles/CommonErrorsRTL/CommonErrorsRTL"))


export const RoutesList = createContext();

const RoutesListProvider = (props) => {
    const routesList = {
        home: { url: "/", element: <Home /> },
        
        
        XP: { 
            title: "Why This Blog? ⚡", 
            subTitle: "Let's talk about the Y2K, the era I was born, Errrrrr",
            time: '"Lifeline"', 
            url: "/blog-brand", 
            tag: '',
            date:{year: 2000, month: 'OCT', day: '11'},
            element: <XP /> 
        },
        
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
            subTitle: "My personal opinion about these two bundlers.",
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

        mathRandom_badIdea: { 
            title: "Math.Random() Is a Bad Idea", 
            subTitle: "If you are using math.random() in your JSX file, you are in trouble.",
            time: '7', 
            url: "/mathRandom_badIdea", 
            tag: 'react',
            date:{year: 2025, month: 'Sep', day: '23'},
            element: <BadIdeaMathRandom /> 
        },

        gitBranchProblem: { 
            title: "fatal: Not a valid object name: 'master'", 
            subTitle: "Bad, on nerve, and exhausting error you could see from Git.",
            time: '3', 
            url: "/git-branch-problem", 
            tag: 'github',
            date:{year: 2025, month: 'Sep', day: '23'},
            element: <GitBranchProblem /> 
        },

        reduxNextJS: { 
            title: "Redux Toolkit in Next.js", 
            subTitle: "I will explain Redux Toolkit architecture and usage in Next.js",
            time: '7', 
            url: "/redux-nextjs", 
            tag: 'next',
            date:{year: 2025, month: 'Sep', day: '23'},
            element: <ReduxNextJS /> 
        },

        fastOptimise: { 
            title: "Fastest Way to Optimise Your Web App", 
            subTitle: "Before you go on hard refactoring phase, you can follow these steps.",
            time: '5', 
            url: "/fast-optimise", 
            tag: 'react',
            date:{year: 2025, month: 'Sep', day: '28'},
            element: <FastestOptimising /> 
        },

        GithubDeploymentError: { 
            title: "GitHub Pages: Deployment Error", 
            subTitle: "You say npm run deploy, but it says failed to connect.",
            time: '3', 
            url: "/error-deployment-githubpages", 
            tag: 'github',
            date:{year: 2025, month: 'Sep', day: '28'},
            element: <GithubDeploymentError /> 
        },

        VideosNextJS: { 
            title: "Videos in Next.js", 
            subTitle: "How to import videos to Next.js environment?",
            time: '3', 
            url: "/videos-nextjs", 
            tag: 'next',
            date:{year: 2025, month: 'Sep', day: '28'},
            element: <VideosNextJS /> 
        },

        ImagesThreeJS: { 
            title: "Images in Three.js", 
            subTitle: "How can you use an image on a surface?",
            time: '7', 
            url: "/images-three", 
            tag: 'three',
            date:{year: 2025, month: 'Sep', day: '28'},
            element: <ImagesThreeJS /> 
        },

        "3D Files": { 
            title: "3D Files in React", 
            subTitle: "How to use .glb files in React Project?",
            time: '7', 
            url: "/glb-files-react", 
            tag: 'three',
            date:{year: 2025, month: 'Oct', day: '14'},
            element: <GLBFilesReact /> 
        },

        commonErrorsRTL: { 
            title: "Common Errors in RTL", 
            subTitle: "Prevent common errors in React Testing Library by these steps.",
            time: '10', 
            url: "/errors-rtl", 
            tag: 'rtl',
            date:{year: 2025, month: 'Oct', day: '14'},
            element: <CommonErrorsRTL /> 
        },
    };

    return (
        <RoutesList.Provider value={routesList}>
            {props.children}
        </RoutesList.Provider>
    );
};

export default RoutesListProvider;
