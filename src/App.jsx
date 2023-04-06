// // import Workspace from 'polotno/canvas/workspace';

// import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
// import { Toolbar } from 'polotno/toolbar/toolbar';
// import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
// import { SidePanel } from 'polotno/side-panel';
// import { Workspace } from 'polotno/canvas/workspace';
// import { createStore } from 'polotno/model/store';

// const store = createStore();
// const page = store.addPage();

// page.addElement({
//   x: 50,
//   y: 50,
//   type: 'text',
//   fill: 'black',
//   text: 'hello',
// });

// export const App = ({ store }) => {
//   return (
//     <PolotnoContainer style={{ width: '100vw', height: '100vh' }}>
//       <SidePanelWrap>
//         <SidePanel store={store} />
//       </SidePanelWrap>
//       <WorkspaceWrap>
//         <Toolbar store={store} downloadButtonEnabled />
//         <Workspace store={store} />
//         <ZoomButtons store={store} />
//       </WorkspaceWrap>
//     </PolotnoContainer>
//   );
// };

import AppLayout from "./components/sri/AppLayout"

  function App(){
    return(
    <>
      <AppLayout/> 
    </>
    )
  }

export default App 