import React, { createContext } from "react";

import webpack_icon from "../pics/webpack-icon.svg";
import js_icon from "../pics/js-icon.svg";
import css_icon from "../pics/css-icon.svg";
import github_icon from "../pics/github-iocn.png";
import react_icon from "../pics/react-icon.svg";
import next_icon from "../pics/next-icon.svg";
import three_icon from "../pics/three.jpg";


export const TagsList = createContext();

const TagsListProvider = (props) => {
    const tagsList = {
        webpack: webpack_icon,
        js: js_icon,
        css: css_icon,
        github: github_icon,
        react: react_icon,
        next: next_icon,
        three: three_icon,
    };

    return (
        <TagsList.Provider value={tagsList}>
            {props.children}
        </TagsList.Provider>
    );
};

export default TagsListProvider;
