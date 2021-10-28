import styled from "styled-components";


export const ContainerForm = styled.div`

width: auto;
height: auto;
background-color: #fff;
display: flex;
justify-content: center;
padding-top: 7em;


`


export const Structure = styled.div `

width: 40%;
height: auto;
/* background-color: beige; */
user-select: none; 
@media screen and (max-width: 500px) {
  width: 100%;
  margin-left: 2%;
  }


`

export const H1Form =  styled.h1 `

font-family: Helvetica,Arial,sans-serif;
font-weight: bold;
font-size: 1.3rem;
`


export const FormSignIn = styled.form`

`

export const LabelLogIn = styled.label`

font-family: Helvetica,Arial,sans-serif;
display: block;
margin-bottom: 10px;
`

export const InputLogin = styled.input`

width: 90%;
display: block;
padding: 0.5rem;
font-size: 1rem;
border: 1px solid #a4a4a4;
  
border-radius: .5rem;
margin-bottom: 15px;

&:hover, &:focus  {
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 150%;
    outline: none;
  }
`





export const ButtonLogIn = styled.button`
width: 90%;

background: #f0c040;
border: 1px solid #a4a4a4;
font-family: Helvetica,Arial,sans-serif;
border-radius: .5rem;
padding: 0.5rem;
font-size: 1rem;
&:hover{
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 150%;
    outline: none;
  }



`










