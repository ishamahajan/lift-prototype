
import './App.css';

import LiftButtons from './components/lift-buttons' ;
import Building from './components/building';

function LiftSystem() {
  return (
    <div style={{display: 'flex'}}>
      <LiftButtons/>
      <Building/>
    </div>
  );
}

export default LiftSystem;
