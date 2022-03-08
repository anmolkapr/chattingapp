import React from 'react'
import {Container,Box,Text,Tabs,TabList,TabPanels,Tab,TabPanel} from "@chakra-ui/react"
import Login from '../components/authentication/Login'
import Signup from '../components/authentication/Signup'
import { useHistory } from "react-router-dom";
import { useEffect } from "react";


const HomePage = () => {
  const history = useHistory();
    //stroginf user vsalue in local storage 
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));
        // if user is not logged in push in the log in page 
        if (user) history.push("/chats");
        // if user is there push inchats pasge 
      },[history])///whenever history changes run again


  return (
    <Container maxW='xl' centerContent>
      <Box
      d = "flex"
      justifyContent="center"
      padding={3}
      bg = {"white"}
      w = "100%"
      m = "40px 0 15px 0 "
      borderRadius="1g"
      borderWidth = "1px"
      >
        <Text fontSize={'4xl'} fontFamily = "Work Sans">Talk Bot</Text>
      </Box>
      <Box bg = "white" w = "100%" p={4} borderRadius = "1g" borderWidth="1px">
      <Tabs variant='soft-rounded'>
  <TabList mb= "1em">
    <Tab width = "50%">Login</Tab>
    <Tab width = "50%">Sign up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login></Login>
    </TabPanel>
    <TabPanel>
     <Signup></Signup>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
      
    </Container>
  )
}

export default HomePage;
