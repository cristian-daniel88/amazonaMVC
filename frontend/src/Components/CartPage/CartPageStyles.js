import styled from "styled-components";

export const ListContainer = styled.div`
width: 90%;

height: auto;
margin: auto;
margin-top: 5%;
`

export const UlList = styled.div`
width: 100%;
height: auto;
font-family: Helvetica, Arial, sans-serif;

`;

export const Li = styled.div`
width: 100%;

list-style: none;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin: auto;
@media screen and (max-width: 700px) {
    border: 1px solid grey;
    border-radius: 10px;
    
  
    margin-bottom: 10px;
    
  }



`;

export const ImagenChica = styled.img`
width: 40px;
height: 40px;

@media screen and (max-width: 700px) {
    width: 95%;
    height: auto;
    border-radius: 10px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
   
  }

`;

export const LabelContainer1 = styled.div`
width:5%;
text-align: left;

;
@media screen and (max-width: 700px) {
    width: 100%;
    text-align: center;
   
  }
`;

export const LabelContainer2 = styled.div`
width:30%;
text-align:left;

margin-bottom: 1%;


@media screen and (max-width: 700px) {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const LabelContainer3 = styled.div`
width:30%;
text-align:left;
margin-bottom: 1%;


@media screen and (max-width: 700px) {
    width: 100%;
    margin-bottom: 10px;
    padding-left: 5px;
    
  }
`;

export const LabelContainer4 = styled.div`
width:12%;
text-align:left;


@media screen and (max-width: 700px) {
    width: 100%;
    padding-left: 5px;
    
  }
`;

export const LabelContainer5 = styled.div`
width:15%;
text-align:left;
color: blue;
height: auto;


@media screen and (max-width: 700px) {
    width: 100%;
    text-align: right;
    padding-right: 5px;
  }
`;

export const LabelContainer6 = styled.div`
width: 5%;
text-align: left;


@media screen and (max-width: 700px) {
    width: 100%;
  
  }
`;


export const ProceedToCheckOut = styled.div`
  width: 50%;

margin: auto;
border: 0.1rem solid silver;
background-color: #f8f8f8;
border-radius: 10px;
padding: 2%;
margin-top: 10%;
font-family: Helvetica, Arial, sans-serif;
font-weight: 600;


@media screen and (max-width: 700px) {
  width: 100%;
}

`

export const ButtonToCheckOut = styled.div`
width: 90%;
background: #f0c040;
border: 1px solid #a4a4a4;
font-family: Helvetica,Arial,sans-serif;
border-radius: .5rem;
padding: 0.5rem;
font-size: 1rem;
text-align: center;
font-weight: 300;
user-select: none;
cursor: pointer;
margin: auto;
&:hover{
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 150%;
    outline: none;
  }


`