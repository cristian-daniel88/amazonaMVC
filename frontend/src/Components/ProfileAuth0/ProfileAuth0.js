import React from 'react'
import {ProfileDatails, ProfileDiv} from './ProfileAuth0Styles';
import { useAuth0 } from "@auth0/auth0-react";

// ?.

function ProfileAuth0() {
    const { user, isAuthenticated, isLoading} = useAuth0();
    

    
   
    
    if (isLoading) {
        return <ProfileDatails><ProfileDiv>...Loading</ProfileDiv></ProfileDatails>
    }
    return (
       isAuthenticated && ( 
        <ProfileDatails>
        
        <ProfileDiv>Hi {user.name.split(' ')[0]}, welcome to Amazona</ProfileDiv>
       </ProfileDatails>
       ) 
      
    )
}

export default ProfileAuth0
