import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Customizer } from 'office-ui-fabric-react/lib/Utilities';
import { CoherenceCustomizations } from '@cseo/styles';
import { initializeOBFeedback } from '@cseo/controls/lib/OfficeBrowerFeedback';
import { useLoginOnStartup } from '@micro-frontend-react/employee-experience/lib/useLoginOnStartup';
import { Header } from './Components/Header';
import { Nav } from './Components/Nav';
import { Main } from './Components/Main';
import { Footer } from './Components/Footer';
import { ShellWithStore } from './ShellWithStore';

import { navConfig } from './navConfig';
import { Routes } from './Routes';
import { useHeaderConfig } from './useHeaderConfig';

initializeOBFeedback(
  1111,
  'running-environment',
  '/ocv/OfficeBrowserFeedback.min.js',
  '/ocv/OfficeBrowserFeedback.min.css',
  '/ocv/intl/',
  'https://office365.uservoice.com/'
);

function App(): React.ReactElement {
  useLoginOnStartup();
  const headerConfig = useHeaderConfig();

  return (
    <Customizer {...CoherenceCustomizations}>
      <BrowserRouter>
        <Header {...headerConfig} />
        <Nav groups={navConfig} />
        <Main>
          <Routes />
        </Main>
        <Footer>I am a sticky footer!</Footer>
      </BrowserRouter>
    </Customizer>
  );
}

render(
  <ShellWithStore>
    <App />
  </ShellWithStore>,
  document.getElementById('app')
);
