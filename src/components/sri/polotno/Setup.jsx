//
//  @Sri - 6Apr2023
//

//Reference - https://polotno.com/docs/demo-full-editor
import { createStore } from 'polotno/model/store';

// CSS for Editor
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

//Imports for POLOTNO SDK
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';

var key = "N332Q4lexvN9uJgLaw8n";
  // but it will be good if you can keep it for Polotno project support
var showCredit = true;

const store = createStore({
  key: "N332Q4lexvN9uJgLaw8n",
  showCredit: true
});

const page = store.addPage();


// page.addElement({
//   x: 50,
//   y: 50,
//   type: 'text',
//   fill: 'black',
//   text: 'hello',
// });

function CompPolotnoSetup ({ store }) {

  return (<>
      <PolotnoContainer style={{ width: '100%', height: '100%' }}>
      {/* <SidePanelWrap>
        <SidePanel store={store} />
      </SidePanelWrap> */}
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
      <Workspace store={store} />
      <ZoomButtons store={store} />
    </WorkspaceWrap>
  </PolotnoContainer>
  </>
  );
};


export default CompPolotnoSetup;