import styled from "styled-components";

export const SearchProductsContainer = styled.div`
position: absolute;
/* top: 10%; */
width: 95%;
height: auto;
@media screen and (max-width: 500px) {
    /* top: 20%; */
  }
`;



export const CartGridSearch = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 50px;
  margin-left: 10px;
 

  @media screen and (max-width: 700px) {
    padding: 50px 0;
  }
`;

export const CartSearch = styled.div`
  height: 200px;
  padding: 10px;
  max-width: 500px;
  color: #000;
  border-radius: 7px;
  transition: box-shadow 0.1s ease;
  box-shadow: 0px 0px 2px 0px grey;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 150%;
  }
`;

export const CartImageSearch = styled.img`
  filter: contrast(65%);
  position: absolute;
  top: 0;
  left: 20;
  width: 60%;
  height: auto;
  object-fit: cover;
  transition: 0.5s ease;

  &:hover {
    filter: contrast(100%);
    transform: scale(1.2);
  }
`;

export const CartLabelSearch = styled.div`
  font-weight: 700;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #00000070;
  width: 100%;
  z-index: 1;
`;

export const PriceSearch = styled.div`
position: absolute;
font-size: 15px;
left: 72%;
font-weight: 500;
`

export const StockSearch = styled.div`
position: absolute;
font-size: 15px;
left: 72%;
top: 20%;
font-weight: 500;
`

export const SoldOutSearch = styled.div`
position: absolute;
font-style: cursive;
font-size: 15;
top: 40%;
left: 72%;
font-weight: 500;
color: red;
`
export const AddCartSearch = styled.button`
position: absolute;
font-family: 'Roboto', sans-serif;
font-size: 16px;
left: 72%;
top: 60%;
font-weight: 500;
background-color: #494989;
border-radius: 5%;
font-weight: 600;
color: white;
cursor: pointer;
border: none;
transition-duration: 0.4s;
&:active {

opacity: 0.5;
}

@media screen and (max-width: 700px) {
    margin-right: 5%;
  }

`;



export const ResultSearch = styled.div`
width: 50%;
text-align: center;
margin: 2%;
font-size: 1.5em;

@media screen and (max-width: 800px) {
    margin: 10%;
    font-size: 1em;
  }

`

export const NotFound = styled.div`
width: 50%;
text-align: center;
margin: 2%;
color: red;
font-size: 1.5em;

@media screen and (max-width: 800px) {
    margin: 8%;
  }
`