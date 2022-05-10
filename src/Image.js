import React from 'react';
import beast1 from './beast1.png'

class Image extends React.Component{
  render() {
    return (
      <div className="beast">
       <img src={beast1} alt="beast1"/>
       </div>
    );
  }
}
 
export default Image