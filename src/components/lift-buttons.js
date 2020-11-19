import React from 'react';
import './lift-button.css';

function LiftButtons(props) {
  return (
    <div className="lift-button-panel">
      <button value="10" className="list-button" onClick={(e)=>props.OnClick(e.target.value)}>G</button>
      <button value="9" className="list-button" onClick={(e)=>props.OnClick(e.target.value)}>1</button>
      <button value="8" className="list-button" onClick={(e)=>props.OnClick(e.target.value)}>2</button>
      <button value="7" className="list-button" onClick={(e)=>props.OnClick(e.target.value)}>3</button>
      <button value="6" className="list-button" onClick={(e)=>props.OnClick(e.target.value)}>4</button>
      <button value="5" className="list-button" onClick={(e)=>props.OnClick(e.target.value)}>5</button>
      <button value="4" className="list-button" onClick={(e)=>props.OnClick(e.target.value)}>6</button>
      <button value="3" className="list-button" onClick={(e)=>props.OnClick(e.target.value)}>7</button>
      <button value="2" className="list-button" onClick={(e)=>props.OnClick(e.target.value)}>8</button>
      <button value="1" className="list-button" onClick={(e)=>props.OnClick(e.target.value)}>9</button>
      <button value="0" className="list-button" onClick={(e)=>props.OnClick(e.target.value)}>10</button>
    </div>
  );
}

export default LiftButtons;
