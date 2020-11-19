import React from 'react';
import './lift.css';

function Lift(props){
    var floorPixel= parseInt(props.floornum)*41;
   return(<div className="lift" style={{marginTop: `${floorPixel}px`}}> Lift </div>);
}
export default Lift