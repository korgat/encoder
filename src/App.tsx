import { MainWrapper } from './components/UI';
import Tabs from './components/Tabs/Tabs';
import Encoder from './components/Encoder/Encoder';

import { useState } from 'react';

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <MainWrapper>
      <div className="window">
        <Tabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
        <Encoder tabIndex={tabIndex} />
      </div>
    </MainWrapper>
  );
}

export default App;
