import React from 'react';

import { projects } from './Data';

class Data extends React.Component{
  render() {
    return (img key={p.id} src={p.src} alt="beast1"
      <div className="beast">
       <img src={beast1} alt="beast1"/>
       </div>
    );
  }
}

<div className="beast">
{projects.map(p => {
  return <img key={p.id} src={p.src} alt="beast" />;
})}
</div>

// myData.js
export const projects = [
  {
    id: 1,
    name: "Beast1",
    src: "src/beast1.png"
  },
  {
    id: 2,
    name: "Tic Tac Toe game",
    src: "./images/tictactoe.gif"
  }
];
 
export default Data