import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {LiCartSignOutInAuth0} from "./LogOutAuth0Styles"


function LogOutAuth0() {
    const { logout } = useAuth0();

    return (
        <LiCartSignOutInAuth0 onClick={()=>logout({returnTo: window.location.origin})}>
            Sign Out
        </LiCartSignOutInAuth0>
    )
}

export default LogOutAuth0
