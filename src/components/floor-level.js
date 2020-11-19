import React from 'react';

import './floor-level.css';

function FloorLevel(props) {
 
  return (  
        <div>
          <span value='0' className="floor">
            <span className="floor-number">10</span>
            <button value='0' onClick={(e) => props.OnClick(e.target.value)}>/\</button>
            <button value='0' onClick={(e) => props.OnClick(e.target.value)}>\/</button>
          </span>
          <span value='1' className="floor">
          <span className="floor-number">9</span>
            <button value='1' onClick={(e) => props.OnClick(e.target.value)}>/\</button>
            <button value='1' onClick={(e) => props.OnClick(e.target.value)}>\/</button>
          </span>
          <span value='2' className="floor">
            <span className="floor-number">8</span>
            <button value='2' onClick={(e) => props.OnClick(e.target.value)}>/\</button>
            <button value='2' onClick={(e) => props.OnClick(e.target.value)}>\/</button>
          </span>
          <span value='3' className="floor">
            <span className="floor-number">7</span>
            <button value='3' onClick={(e) => props.OnClick(e.target.value)}>/\</button>
            <button value='3' onClick={(e) => props.OnClick(e.target.value)}>\/</button>
          </span>
          <span value='4' className="floor">
            <span className="floor-number">6</span>
            <button value='4' onClick={(e) => props.OnClick(e.target.value)}>/\</button>
            <button value='4' onClick={(e) => props.OnClick(e.target.value)}>\/</button>
          </span>
          <span value='5' className="floor">
            <span className="floor-number">5</span>
            <button value='5' onClick={(e) => props.OnClick(e.target.value)}>/\</button>
            <button value='5' onClick={(e) => props.OnClick(e.target.value)}>\/</button>
          </span>
          <span value='6' className="floor">
            <span className="floor-number">4</span>
            <button value='6' onClick={(e) => props.OnClick(e.target.value)}>/\</button>
            <button value='6' onClick={(e) => props.OnClick(e.target.value)}>\/</button>
          </span>
          <span value='7' className="floor">
            <span className="floor-number">3</span>
            <button value='7' onClick={(e) => props.OnClick(e.target.value)}>/\</button>
            <button value='7' onClick={(e) => props.OnClick(e.target.value)}>\/</button>
          </span>
          <span value='8' className="floor">
            <span className="floor-number">2</span>
            <button value='8' onClick={(e) => props.OnClick(e.target.value)}>/\</button>
            <button value='8' onClick={(e) => props.OnClick(e.target.value)}>\/</button>
          </span>
          <span value='9' className="floor">
            <span className="floor-number">1</span>
            <button value='9' onClick={(e) => props.OnClick(e.target.value)}>/\</button>
            <button value='9' onClick={(e) => props.OnClick(e.target.value)}>\/</button>
          </span>
          <span value='10' className="floor">
            <span className="floor-number">G</span>
            <button value='10' onClick={(e) => props.OnClick(e.target.value)}>/\</button>
            <button value='10' onClick={(e) => props.OnClick(e.target.value)}>\/</button>
          </span>
        </div>     

  );
}

export default FloorLevel;
