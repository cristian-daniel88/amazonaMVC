import React from "react";
import  "./ChatStyles.css"
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHamburguerHiddenChat } from "../../redux/hamburguer/hamburguerActions";
import {
  ChatIconContainer,
  ChatWindow,
  CloseChat,
  ContainerChat,

  Iconchat,

  
} from "./ChatStyles";
 import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room, messageServer }) {
  const hidden = useSelector((state) => state.hamburguer.hiddenChat);
//   const [currentMessage, setCurrentMessage] = useState("");
const [messageList, setMessageList] = useState([]);
const dispatch = useDispatch();

useEffect(() => {
    console.log(username);
    console.log(socket);
    
    console.log(messageServer)
    if (messageServer) {
    // // Message from server
    setMessageList((list) => [...list, messageServer]);
}
   

}, [socket, username, room, messageServer]);



  function handleCloseChat() {
    dispatch(toggleHamburguerHiddenChat());
  }

  return (
    <>
      <ChatWindow show={hidden}>
        <ChatIconContainer>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "40px",
              background: "rgba(1,1,1,0.3)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Iconchat onClick={handleCloseChat} />
          </div>
        </ChatIconContainer>

            
        <CloseChat>
          <ContainerChat>
              <ScrollToBottom className="hola">
                 

               {messageList?.map((value, k)=> {
                   let colorAdmin= value.username === "Manager" ? "blue" : "green"
                   return (
                   < div className="a" key={k}>
                    
                   <div style={{color:colorAdmin}}>{value.username}:</div>
                   <div>&nbsp;&nbsp;{value.text}&nbsp;{value.time}</div>
                                      
                   </div>       
                    )
                })}
              
                </ScrollToBottom>
                
          </ContainerChat>
            
        </CloseChat>
      </ChatWindow>
    </>
  );
}

export default Chat;
