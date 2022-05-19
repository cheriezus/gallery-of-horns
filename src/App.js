import React from 'react';
import './App.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import './Main';

import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  


  

  render() {
    return (
      <>
        <Header />
        
    
        
        <Main
          data={data}
          displayModalImg={this.displayModalImg}
        />

        <Footer />
        
          
        <SelectedBeast
       
      
        />
        
      </>
    );
  }
}

export default App;