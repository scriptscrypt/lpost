//
//  @Sri - 6Apr2023
//

import {Button, Text, Modal} from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import { IconDatabase, IconShare, IconUpload, IconWallet } from '@tabler/icons-react';

//Import styles CSS Link
import "./StylesSri.css"

export default function NavbarImplement() {
  // const [openedModal, { openModal, closeModal }] = useDisclosure(false);
 
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

        <Button onClick={openModal} variant="subtle" m={4} leftIcon={<IconUpload size="1rem" />}> Upload </Button> 
        <Button variant="subtle" m={4} leftIcon={<IconShare size="1rem" />}> Share </Button> 
        <Button variant="filled" m={4} leftIcon={<IconWallet size="1rem" />}> Connect Wallet </Button> 
      </div>
    
  </div>

    <Modal opened={openedModal} onClose={closeModal} title="Upload" centered>
        <Text>Modal Content</Text>
    </Modal> 
    </>
  )
}
