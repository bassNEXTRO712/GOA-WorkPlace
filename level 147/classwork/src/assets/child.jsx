import React,{useContext} from "react";
import ThemeContext from "./themeContext";

function Child(){
    const theme = useContext(ThemeContext);

    return(
        <div>
            <h1>Current Theme: {theme}</h1>
        </div>
    )
};

export default Child;