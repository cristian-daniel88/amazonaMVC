import React  from "react";
import { useAuth0 } from '@auth0/auth0-react';
import {
  ContainerBurguerAndH1,
  ContainerBurguerNavBar,
 
  ContainerNavBar,
  ContainerSearch,
  H1Amazona,
  IconBurguerNavBar,
  InputSearch,
  
  ContainerInputAndSearch,
  IconSearch,
  ContainerCartSignIn,
  LiCartSignIn
} from "./NavBarStyles";
import LoginAuth0 from "../LoginAuth0/LoginAuth0";
import LogOutAuth0 from "../LogOutAuth0/LogOutAuth0";
import ImgLoginAuth from "../ImgLoginAuth/ImgLoginAuth";
import {  Cart, Cart0, CartContainer } from "../Cart/CartStyles";
import * as hamburguerActions from "../../redux/hamburguer/hamburguerActions"
import { useDispatch, useSelector } from "react-redux";

import { useFind } from "../../hooks/useFind";
import { cleanAction, findAction } from "../../redux/product/productActions";




function NavBar() {
  const {isAuthenticated} = useAuth0();
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  let arrayProducts = Object.entries(products);
  let arrayProducts0 = arrayProducts[0]?.[1];
  const {find, setFind} = useFind()
 
  


  function handler (e) {
    setFind(e.target.value.toLowerCase());
    
    if (find === '' ) {
      dispatch(cleanAction());
     }
  
  }
  
  function findProduct(e) {
    e.preventDefault();
    if (find === '' ) {
     return  dispatch(cleanAction());
    }
     dispatch(cleanAction());
    
    for(let producto of arrayProducts0){
      
      let nombre = producto.name.toLowerCase();
      if (nombre.indexOf(find) !== -1 ) {
        
      
        dispatch(findAction(producto))
          
        } 
      }

      setFind('')

    }

   
  
 

  
  const handleToggle = () => {
    dispatch(hamburguerActions.toggleHamburguerHidden())
  }

  


  return (
    <ContainerNavBar>

      <ContainerBurguerAndH1>

        <ContainerBurguerNavBar>
          <IconBurguerNavBar onClick={handleToggle} />
        </ContainerBurguerNavBar>

        <H1Amazona><a style={{display:"line", fontFamily: "'Satisfy', cursive", paddingTop:"1%"}}>A</a>mazona</H1Amazona>

      </ContainerBurguerAndH1>

      <ContainerInputAndSearch type='sumbit' onSubmit={findProduct}>
          <InputSearch type='text'  onChange={handler}/>

          <ContainerSearch type='submit'>
              <IconSearch/>
          </ContainerSearch>
      </ContainerInputAndSearch>


      <ContainerCartSignIn>
        <LiCartSignIn></LiCartSignIn><CartContainer><Cart/><Cart0><div style={{textAlign:'center'}}></div></Cart0></CartContainer>
        {isAuthenticated ? (<LogOutAuth0/>) : (<LoginAuth0/>)}
        {isAuthenticated && <ImgLoginAuth/>}
       
      </ContainerCartSignIn>



    </ContainerNavBar>
  );
}

export default NavBar;
