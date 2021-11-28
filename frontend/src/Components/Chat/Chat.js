import React from "react";
import  "./ChatStyles.css"
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHamburguerHiddenChat } from "../../redux/hamburguer/hamburguerActions";
import {
  ButtonChat,
  ChatIconContainer,
  ChatWindow,
  CloseChat,
  ContainerChat,

  Iconchat,
  InputContainer,

  
} from "./ChatStyles";
 import ScrollToBottom from "react-scroll-to-bottom";
import {  InputLogin } from "../FormLogin/FormLoginStyles";

function Chat({ socket, username, room, messageServer }) {
  const hidden = useSelector((state) => state.hamburguer.hiddenChat);
  const [currentMessage, setCurrentMessage] = useState("");
const [messageList, setMessageList] = useState([]);
const dispatch = useDispatch();

async function sendMessage(params) {
  

  const messageData = {
    room: room,
    username: username,
    text: currentMessage,
    time:
      new Date(Date.now()).getHours() +
      ":" +
      new Date(Date.now()).getMinutes(),
  };
  await socket.emit("send_message", messageData);
  setMessageList((list) => [...list, messageData]);
  setCurrentMessage("");
}

useEffect(() => {
    
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
                <InputContainer>
                <InputLogin
                    style={{width:'60%', display:"inline", marginRight:'2%'}}
                   type="text"
                   value={currentMessage}
                   placeholder="Hey..."
                   onChange={(event) => {
                     setCurrentMessage(event.target.value);
                    }}
                    onKeyPress={(event) => {
                      event.key === "Enter" && sendMessage();
                    }}
                    />
                  
                   <ButtonChat onClick={sendMessage}>Send</ButtonChat>

                  </InputContainer>
          </ContainerChat>
            
        </CloseChat>
      </ChatWindow>
    </>
  );
}

export default Chat;
