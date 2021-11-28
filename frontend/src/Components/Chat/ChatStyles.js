import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat';


export const ChatWindow = styled.div`
width: 25%;
height: 50vh;

position: fixed;
bottom: 0;
right: 0px;
z-index: 2;
display: flex;
justify-content: space-between;
transform: ${(props) => (!props.show ? "translateX(0%)" : "translateX(82%)")};
transition: transform 0.5s ease-in-out;

@media screen and (max-width: 550px) {
  margin-right: 5px;
  width: 60%;
  height: 65vh;
  transform: ${(props) => (!props.show ? "translateX(2%)" : "translateX(77%)")};
}

`


export const ChatIconContainer = styled.div`

height: 65vh;
z-index: 20;



`
export const Iconchat = styled(ChatIcon)`
font-size: 5%;
color: blue;
cursor: pointer;
`

export const CloseChat = styled.div`
width: 77%;
height: 100%;
display: flex;
justify-content: center;
text-align: right;
/* background-color: aqua; */
align-items: flex-end;


`

export const ContainerChat = styled.div`
height: 89%;
width: 100%;
background: white;
text-align: left;
border-radius: 10px;
padding: 5px;
border: 1px solid #a4a4a4;

&:hover, &:focus  {
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 150%;
    outline: none;
  }

`;

export const InputContainer = styled.div`
display: inline;
`

export const ButtonChat = styled.button`
width: 35%;
cursor: pointer;
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

  @media screen and (max-width: 550px) {
 
  width: 35%;
 };
}



`



