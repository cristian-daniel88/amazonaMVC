import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as hamburguerActions from "../../redux/hamburguer/hamburguerActions"

import {CategoriesStyled} from "./CategoriesStyles"

function Categories() {
    
    
    const hidden = useSelector(state => state.hamburguer.hidden);
  
    const dispatch = useDispatch()
    const handleToggle = () => {
        dispatch(hamburguerActions.toggleHamburguerHidden())
    } 
    
    return (
        <>
        <CategoriesStyled show={!hidden} onClick={handleToggle}></CategoriesStyled>
        </>
    )
    
    
}

export default Categories
