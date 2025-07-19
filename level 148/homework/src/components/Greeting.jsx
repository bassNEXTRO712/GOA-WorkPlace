import { useContext, useState} from "react";
import LanguageContext from "./language";

const Greet = () =>{
    const language = useContext(LanguageContext)
    

    
    let greeting = ''
    switch(language){
        case "English":
            greeting = 'Hello';
                break
        case 'Spanish':
            greeting = 'Holla!'
             break
        case 'French':
            greeting = 'Bonjour!'
                break
        default :
            greeting = 'Choose Your Favorite Language'
    }
    return <h1>{greeting}</h1>
};

export default Greet;
    