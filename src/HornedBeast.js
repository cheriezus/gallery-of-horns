import React from 'react';
import Image from './Image.js';

class HornedBeast extends React.Component {
  render() {
    return (
      <>
        <h2> {this.props.title} </h2>
       <img src={this.props.url} alt={this.props.title} title={this.props.title}
       />
       <p>{this.props.description}</p>
      </>
    );
  
  }
}



export default HornedBeast;