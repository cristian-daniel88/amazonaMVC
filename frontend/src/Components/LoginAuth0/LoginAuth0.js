import React from 'react';
import { useAuth0 } from "@auth0/auth0-react"
import {LiCartSignInAuth0} from "./LoginAuth0Styles"


function LoginAuth0() {
    const { loginWithRedirect } = useAuth0();
    return (
       <LiCartSignInAuth0 onClick={()=>loginWithRedirect()}>
           Sign In
       </LiCartSignInAuth0>
    )
}

export default LoginAuth0
