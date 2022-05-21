
   
import React from 'react'
import Form from 'react-bootstrap/Form'


class HornCount extends React.Component {

  render() {
    return (
      <>
        <Form>
          <fieldset>Filter by Horns</fieldset>
          <Form.Group className="filterHorns">
            <Form.Select onChange={this.props.handleSelect}>
              <option>Choose here...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>
        </Form>

      </>
    )
  }
}

export default HornCount;

 render() { 
   let renderSomeHornedBeasts = this.props.data.map((beastsData, idx) => {
        // console.log(beastsData.image_url);
        return (
        <HornedBeast name={beastsData.title}
         image_url={beastsData.image_url} 
         key={beastsData._id}
         horns={beastsData.horns}
         description={beastsData.description}
          alt={beastsData.alt}
          openModalControl={this.props.openModalControl}
           />)
      });



  render () {
    
    let numbers = this.state.data.map((num, idx) => {
      return (
        <ListGroup.Item key={idx}>
          {num}
        </ListGroup.Item>
      )
    });

       let renderSomeHornedBeasts = this.props.data.map((beastsData, idx) => {
        // console.log(beastsData.image_url);
        return (
        <HornedBeast name={beastsData.title}
         image_url={beastsData.image_url} 
         key={beastsData._id}
         horns={beastsData.horns}
         description={beastsData.description}
          alt={beastsData.alt}
          openModalControl={this.props.openModalControl}
          
           />)
      });
