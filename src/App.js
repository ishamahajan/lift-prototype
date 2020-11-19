import { Helmet } from 'react-helmet';

import './App.css';
import Building from './components/building';

function App() {
  return (
    <>
      <Helmet>
        <title>Lift System Prototype</title>
      </Helmet>
      <div style={{display: 'flex'}}>
        <Building/>
      </div>
    </>
  );
}

export default App;
