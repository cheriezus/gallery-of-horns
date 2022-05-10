import React from 'react';
import './App.css';
import Header from './Header.js'
import Main from './Main.js'
import HornedBeast from './HornedBeast.js'



class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Main />
        <footer>
      <HornedBeast />
        </footer>
      </>
    );
  }
}

export default App;