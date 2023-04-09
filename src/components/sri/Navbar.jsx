//
//  @Sri - 6Apr2023
//

import { useEffect, useState } from "react";
import {Button, Text, Modal, Avatar, Drawer, Flex, Box, Chip, Badge, Switch} from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import { IconDatabase, IconShare, IconUpload, IconWallet } from '@tabler/icons-react';

//Import styles CSS Link
import "./StylesSri.css"

export default function NavbarImplement() {
  // const [openedModal, { openModal, closeModal }] = useDisclosure(false);
  const [stOpenModal, setStOpenModal] = useState(false)

  //To check if the Modal opened is Upload/Share/Download
  const [stIsUploadModal, setStIsUploadModal] = useState(false)

  //To check if the Drawer is opened or not
  const [stOpenDrawer, setStOpenDrawer] = useState(false)
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

        <Button onClick={() => {setStOpenModal(true); setStIsUploadModal(true)} } variant="subtle" m={4} leftIcon={<IconUpload size="1rem" />}> Upload </Button> 
        <Button onClick={() => {setStOpenModal(true); setStIsUploadModal(false)} }variant="subtle" m={4} leftIcon={<IconShare size="1rem" />}> Share </Button> 
        {/* <Button variant="filled" m={4} leftIcon={<IconWallet size="1rem" />}> Connect Wallet </Button>  */}
        <Button variant="filled" m={4} > Connect Wallet </Button> 
      </div>
    
  </div>

    <Modal opened={stOpenModal} onClose={() =>{setStOpenModal(!stOpenModal)}} title={stIsUploadModal? "Upload" : "Share"} centered>
        {/* <Text>Modal Content</Text> */}
        
        {/* <Center maw={400} h={100} mx="auto"> */}
        {
        //Check if this is an upload Modal
        //If Yes display this (till line No 78)
        //Else display from line No 79

        stIsUploadModal ? 
        <Flex
        
        mih={50}
            gap="lg"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
          <Box bg={"#fafafa"} className="cf" miw={160}>
            <Avatar size={40} m={8} color="blue">D</Avatar>
            <Text m={8}>Lens DP</Text>
          </Box >

          <Box bg={"#fafafa"} className="cf" miw={160}>
            <Avatar size={40} m={8} color="blue">C</Avatar>
            <Text m={8}>Lens Cover Picture</Text>
          </Box >

          <Box bg={"#fafafa"} className="cf" miw={160} >
            <Avatar size={40} m={8} color="blue">N</Avatar>
            <Text m={8}>Follower NFT</Text>
          </Box >

      </Flex> 
       
      :
      <Flex
        
      mih={50}
          gap="lg"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
      >
        <Box onClick={()=>{setStOpenDrawer(true)}} bg={"#fafafa"} className="cf" miw={160} >
          <Avatar size={40} m={8} color="blue">L</Avatar>
          <Text m={8}>Lens publishing Dapps</Text>
        </Box >
        
        {/* On click of the above button Open this drawer */}
        <Drawer position="right" opened={stOpenDrawer} onClose={() =>{setStOpenDrawer(!stOpenDrawer)}} title="Publish on Lens">
            <Text> Collect Settings </Text>
            <Switch m={16} label="This Post can be collected"/>

            <Text ml={32}>Charge for Collecting</Text>
            <Switch m={16} label="Get paid whenever someone collects your post"/>
        </Drawer>

        <Box bg={"#fafafa"} className="cf" miw={160}>
          <Avatar size={40} m={8} color="blue">T</Avatar>
          <Text m={8}>Twitter</Text>
        </Box >

        <Box bg={"#fafafa"} className="cf" miw={160} >
          <Avatar size={40} m={8} color="blue">W</Avatar>
          <Text m={8}>Warpcast </Text>
          <Badge m={8} variant="light" color="yellow" size="sm"> Coming Soon </Badge>
        </Box >

    </Flex> 



     
     }
        {/* </Center> */}

        </Modal> 
    </>
  )
}
