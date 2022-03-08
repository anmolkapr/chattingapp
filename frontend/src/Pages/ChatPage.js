import { Box } from '@chakra-ui/react';
import React from 'react'
import Chatbox from '../components/Chatbox';
import SideDrawer from '../components/miscellanious/SideDrawer';
import MyChats from '../components/MyChats';
import { ChatState } from '../Context/ChatProvider'

const ChatPage = () => {

  const {user } = ChatState();
  return (
    <div style={{width : "100%"}}>
      {user && <SideDrawer></SideDrawer>}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px" >
        {user && <MyChats></MyChats>}
        {user && <Chatbox></Chatbox>}
      </Box>
      
    </div>
  )
}

export default ChatPage
