# Getting Started with lift prototype 

This project is built using ReactJS, css. User  can call lift to a particular floor using up(/\) and down(\/) buttons. These buttons are available for each floor.
User can also control lift movement using the lift-buttons.

This project consists of components:
1. lift.js: controls lift movement to a particular floor. Expects floornum (string) as prop. This is the floor  number to where lift needs to go.
2. lift-buttons.js: consists of buttons (1-10 and G) depicting floor. To allow lift to move to a particular floor. Expects OnClick (callback function) as prop.
3. floor-level.js: specisifies floor number and has two buttons (/\) and (\/) to call lift to that level. Expects OnClick (callback function) as prop.
4. building.js: calls the above mentioned components to  create the lift prototype. 
  
