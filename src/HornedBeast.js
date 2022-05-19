import React from 'react';
import './HornedBeast.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
    likes: 0,

    }
  }

  likeBeast = () => {
color-adjusttate({
  likes: this.state.likes + 1
});
 };


 handleBeastClick = () => {
  this.props.displayModalImg(this.props.image_url)
 }


  render() {
    return (
      <>
       

        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image_url} alt={this.props.name} onClick={this.handleBeastClick}/>
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <p>
        💙 {this.state.likes}
        <p> Likes!</p>
        </p>
        
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Button className= 'div-button' onClick={this.likeBeast}> <span class="front">
    Like
  </span> </Button>
  </Card.Body>
</Card>
      </>
    );
  
  }
}



export default HornedBeast;