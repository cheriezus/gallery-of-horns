import React from 'react';
import './App.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import data from './data.json';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      modalImg: '',
      modalDesc: '',
      modalName: '',
      beastsData: data
    }
  }


  openModalControl = (image, description, name) => {
    this.setState({
      isModalDisplaying: true,
      modalImg: image,
      modalDesc: description,
      modalName: name
    });
  };

  closeModalControl = () => {
    this.setState({
      isModalDisplaying: false,
    });
  };


  hornSelected = (e) => {
    let selected = e.target.value;
    console.log(selected);
    if (selected === 'one') {
      // return all one horned beasts
      let newData = data.filter(beastsData => beastsData.horns === 1);
      console.log(newData);
      this.setState({ beastsData: newData });
    } else if (selected === 'two') {
      // return all two horned beasts
      let newData = data.filter(beastsData => beastsData.horns === 2);
      this.setState({ beastsData: newData });
    } else if (selected === 'threeOrMore') {
      // return all beasts with three or more horns
      let newData = data.filter(beastsData => beastsData.horns >= 3);
      this.setState({ beastsData: newData });
    } else {
      this.setState({ beastsData: data })
    }

  }

  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Select
              onChange={this.hornSelected}>
              <option>All</option>
              <option value="one">One Horn</option>
              <option value="two">Two Horns</option>
              <option value="threeOrMore">Three or More Horns</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          data={this.state.beastsData}
          openModalControl={this.openModalControl}
         
        />
        <Footer />
        <SelectedBeast
          closeModalControl={this.closeModalControl}
          isModalDisplaying={this.state.isModalDisplaying}
          modalImg={this.state.modalImg}
          modalDesc={this.state.modalDesc}
          modalName={this.state.modalName}
        />
      </>
    );
  }
}

export default App;