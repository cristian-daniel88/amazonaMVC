import styled from "styled-components";

import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';


export const ContainerNavBar = styled.nav`
position: fixed;
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #203040;

user-select: none;
flex-wrap: wrap;
z-index: 100;

@media screen and (max-width: 550px) {
  height: auto;
  }

`


export const ContainerBurguerAndH1 = styled.div`
display: flex;
justify-content: space-between;
align-self: center;
width: auto;
`

export const ContainerBurguerNavBar = styled.div`
display: flex;
justify-content: center;
align-self: center;
border: .02em solid #fff;
border-radius: 10%;
margin-right: 10%;
margin-left: 1%;




`
export const IconBurguerNavBar = styled(DehazeIcon)`
font-size: 30px;
color: #fff;
cursor: pointer;


`
export const H1Amazona = styled.h1`
cursor: pointer;
color: #fff;
font-family: Helvetica,Arial,sans-serif;
font-weight: bold;
margin-top: 0;
margin-bottom: 0;
`


export const ContainerInputAndSearch = styled.form`
display: flex;
width: 30%;

@media screen and (max-width: 550px) {
  width: 100%;
  max-width: 500px;
  margin-right: 3%;
  }


`

export const InputSearch = styled.input`
width: 100%;
height: 5vh;
box-sizing: border-box;
border: none;
border-radius: .5rem 0 0 .5rem;
border-right: none;
font-size: 15px;

font-weight: 500;
letter-spacing: 0.5px;
&:hover, &:focus  {
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 150%;
    outline: none;
  }


  @media screen and (max-width: 800px) {
    margin-top: 1%;
    font-size: 13px;

  }
  @media screen and (max-width: 500px) {


    
  margin-left: 10%;
  }


`

export const ContainerSearch = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 18%;
background-color: #f0c040;
height: 5vh;
border: none;
border-radius: 0 .5rem .5rem 0;
border-right: none;
@media screen and (max-width: 800px) {
  margin-right: 10%;
  margin-top: 1%;

  }
  @media screen and (max-width: 500px) {
  margin-right: 0%;

  }

`

export const IconSearch = styled(SearchIcon)`

`


export const ContainerCartSignIn = styled.ul`
width: 30%;
padding-top: 1%;
padding-right: 1%;
display: flex;
justify-content: right;
box-sizing: border-box;
height: auto;

@media screen and (max-width: 800px) {
  width: 100%;
  max-width: 500px;
  margin-right: 5%;
  }




`

export const LiCartSignIn = styled.li`
list-style: none;
width: auto;
text-align: right;
font-family: Helvetica,Arial,sans-serif;
cursor: pointer;
margin-left: 7%;
color: #fff;

font-size: 1.3em;
`







