import React, {useContext} from "react";
import RoleContext from "./roleContext";

function ShowUserRole() {
    const role = useContext(RoleContext);

    let message;
    switch (role){
        case 'guest':
            message = 'Hello Guest! Feel free to explore.';
            break;
        case 'member':
            message = 'Welcome back, Member!';
            break;
        case 'Admin':
            message = 'Hello Admin! You have full access.';
            break
        default:
             message = 'Unknown Role'
    }
    return <h2>{message}</h2>
};

export default ShowUserRole;