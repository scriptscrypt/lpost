//
//  @Sri - 6Apr2023
//

import { useState } from "react";
import {Button, Text, Modal, Avatar, Center, Flex, Box} from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import { IconDatabase, IconShare, IconUpload, IconWallet } from '@tabler/icons-react';

//Import styles CSS Link
import "./StylesSri.css"

export default function NavbarImplement() {
  // const [openedModal, { openModal, closeModal }] = useDisclosure(false);
  const [stOpenModal, setStOpenModal] = useState(false)
 
  // Modal Implementation 
  //
 


  return (
    <>
    {/*Right and Left Navbar Wrapper*/}
    <div className="rf jusSpcBtw"> 

      {/* Left Side of the Navbar */}
      <div className="">
        <Text> Logo </Text>
      </div>



      {/* Right Side of the Navbar */}
      <div className="">

        <Button onClick={() => setStOpenModal(true)} variant="subtle" m={4} leftIcon={<IconUpload size="1rem" />}> Upload </Button> 
        <Button variant="subtle" m={4} leftIcon={<IconShare size="1rem" />}> Share </Button> 
        {/* <Button variant="filled" m={4} leftIcon={<IconWallet size="1rem" />}> Connect Wallet </Button>  */}
        <Button variant="filled" m={4} > Connect Wallet </Button> 
      </div>
    
  </div>

    <Modal opened={stOpenModal} onClose={() =>{setStOpenModal(!stOpenModal)}} title="Upload" centered>
        {/* <Text>Modal Content</Text> */}
        
        {/* <Center maw={400} h={100} mx="auto"> */}
        <Flex
            mih={80}
            gap="lg"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
          <Box bg={"#fafafa"} >
            <Avatar size={40} color="blue">D</Avatar>
            <Text m={8}>Lens DP</Text>
          </Box >

          <Box bg={"#fafafa"} >
            <Avatar size={40} color="blue">C</Avatar>
            <Text m={8}>Lens Cover Picture</Text>
          </Box >

          <Box bg={"#fafafa"} >
            <Avatar size={40} color="blue">N</Avatar>
            <Text m={8}>Follower NFT</Text>
          </Box >

      </Flex> 
       
        {/* </Center> */}

    </Modal> 
    </>
  )
}
