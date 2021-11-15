import React, {useEffect } from "react";
import { Img } from "./ImgLoginAuthStyles";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch} from "react-redux";
import { token } from "../../redux/token/tokenActions";
import { userImgActions } from "../../redux/userImage/userImageActions";
import { takeEmail } from "../../redux/email/emailActions";

var axios = require("axios");


function ImgLoginAuth() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch()


  
  
  
  
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(userImgActions(user.picture));
      dispatch(takeEmail(user.email));
  

       
      
      
      
      var data = {
        "name": user.given_name,
        "sub": user.sub,
        "email": user.email,
        "picture": user.picture
      };
      
      var config = {
      
        method: "post",
        url: process.env.REACT_APP_USER_URL,
        headers: {},
        data: data,
      };
  
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data.token));
          dispatch(token(response.data.token))
        
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
    
  }, [isAuthenticated, user, dispatch])



 
  return (
    isAuthenticated && (
      <>
        <Img src={user.picture} />
        
        
      </>
    )
  );
}

export default ImgLoginAuth;
