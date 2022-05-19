import React from 'react';
import './App.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      modalImg: '',
      modalDesc: '',
      modalName: ''
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

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
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