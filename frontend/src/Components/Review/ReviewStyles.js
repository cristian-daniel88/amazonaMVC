import styled from 'styled-components';

export const TextArea = styled.textarea`
resize: none;

width: 90%;
display: block;
padding: 0.5rem;
font-size: 1rem;
border: 1px solid #a4a4a4;
  
border-radius: .5rem;
margin-bottom: 15px;
font-family: Helvetica,Arial,sans-serif;

&:hover, &:focus  {
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 150%;
    outline: none;
  }
`

export const Select = styled.select`
width: 50%;
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
    border-radius: .5rem;
   
  }
`

export const Option = styled.option`

width: 10%;
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