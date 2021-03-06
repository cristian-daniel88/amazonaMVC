import React, { } from "react";
import { useAuth0 } from "@auth0/auth0-react";
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
  LiCartSignIn,
} from "./NavBarStyles";
import LoginAuth0 from "../LoginAuth0/LoginAuth0";
import LogOutAuth0 from "../LogOutAuth0/LogOutAuth0";
import ImgLoginAuth from "../ImgLoginAuth/ImgLoginAuth";
import { Cart, Cart0, CartContainer } from "../Cart/CartStyles";
import * as hamburguerActions from "../../redux/hamburguer/hamburguerActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { useFind } from "../../hooks/useFind";
import { findAction, loadingAction, resultAction } from "../../redux/product/productActions";

import { notFoundAction } from "../../redux/notFound/notFoundActions";

var axios = require("axios");

function NavBar() {
  const ordenes = useSelector((state) => state.cart.cartItems);
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const history = useHistory();
  const { find, setFind } = useFind();
  const notFound = useSelector(state => state.notFound.notFound)
  function handler(e) {
    setFind(e.target.value.toLowerCase());
  }


 
  
  function findProduct(e) {
    if (notFound) {
      dispatch(notFoundAction()); 
    }
    
    dispatch(loadingAction())
    e.preventDefault();
    
    
    if (find === '') {
      history.push('/')
      return
    }
    
    
    
    var data = { termino: find };
    
    
    var config = {
      method: "post",
      url: process.env.REACT_APP_SEARCH_URL,
      headers: {},
      data: data,
    };
    
    axios(config)
    .then(function (response) {
      
      if (response.data.result.length === 0) {
        
        setTimeout(() => {
          dispatch(notFoundAction())
          
        }, 2000);
      }
      setTimeout(() => {
        
        dispatch(findAction(response.data.result))
        
      }, 1500);
      
    })
    .catch(function (error) {
      console.log(error);
    });

    dispatch(resultAction(find))

    history.push('/search')



  }
  const goCart = ()=> {
    history.push('/cart')
  }

  const handleToggle = () => {
    dispatch(hamburguerActions.toggleHamburguerHidden());
  };

  const home = () => {
    history.push('/')
  }

  return (
    <ContainerNavBar>
      <ContainerBurguerAndH1>
        <ContainerBurguerNavBar>
          <IconBurguerNavBar onClick={handleToggle} />
        </ContainerBurguerNavBar>

        <H1Amazona onClick={home}>
          <p
            style={{
              display: "inline",
              fontFamily: "'Satisfy', cursive",
              paddingTop: "1%",
            }}
          >
            A
          </p>
          mazona
        </H1Amazona>
      </ContainerBurguerAndH1>

      <ContainerInputAndSearch type="sumbit" onSubmit={findProduct}>
        <InputSearch type="text" onChange={handler} />

        <ContainerSearch type="submit">
          <IconSearch />
        </ContainerSearch>
      </ContainerInputAndSearch>

      <ContainerCartSignIn>
        <LiCartSignIn></LiCartSignIn>
        <CartContainer onClick={goCart}>
          <Cart />
          <Cart0>
            <div style={{ textAlign: "center", fontSize:'1.5em' }}>{ordenes?.length}</div>
          </Cart0>
        </CartContainer>
        {isAuthenticated ? <LogOutAuth0 /> : <LoginAuth0 />}
        {isAuthenticated && <ImgLoginAuth />}
      </ContainerCartSignIn>
    </ContainerNavBar>
  );
}

export default NavBar
