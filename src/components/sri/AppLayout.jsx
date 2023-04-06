//
//  @Sri - 6Apr2023
//

import { AppShell, Navbar, Header } from '@mantine/core';
import NavbarImplement from "./Navbar"
import CompPolotnoSetup from "./polotno/Setup"
// import PolotnoEditor from "./polotno/Setup2"
import { createStore } from 'polotno/model/store';

import { SidePanel } from 'polotno/side-panel';


function AppLayout() {

  
const store = createStore({
  key: "N332Q4lexvN9uJgLaw8n",
  showCredit: true
});

  return (

    <AppShell
      padding="md"
      navbar={
      // Left Navbar
      <Navbar width={{ base: 450}} p="">

        {/* Navbar Seperate Implementation in Navbar.jsx */}
        {/* <SidePanelWrap> */}

        {/* Sidepanel from POLOTNO SDK */}
        <SidePanel store={store} />
      {/* </SidePanelWrap> */}

      </Navbar>}

      //Header - is the Top Navbar

      header={<Header height={64} p={8}>
        
        <NavbarImplement />
        
        </Header>
        }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Polotno SDK will render here */}

      {/* Editor component from POLOTNO SDK */}
        <CompPolotnoSetup store={store}/>
      {/* <PolotnoEditor /> */}
     
    </AppShell>
  );
}
export default AppLayout;