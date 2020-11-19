import React, {useState} from 'react';
import Lift from './lift';
import LiftButtons from './lift-buttons';
import FloorLevel from './floor-level';
import './building.css';

function Building() {
  const [currFloor, setCurrFloor]=useState('9');
 
  return (
    <div style={{display: 'flex'}}>
      <LiftButtons OnClick={(floorNum) => setCurrFloor(floorNum)} />
      
    <div className="building">
      <Lift floornum={currFloor}/>
      <FloorLevel OnClick={(floorNum) => setCurrFloor(floorNum)} />
    </div>
    </div>
  );
}

export default Building;
