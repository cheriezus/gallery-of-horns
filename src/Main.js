import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';


class Main extends React.Component{
  render() { 

      let hornedBeasts = [];
      data.forEach((beasts, idx) => {
        console.log(beasts.image_url);
        hornedBeasts.push(<HornedBeast name={beasts.title} image_url={beasts.image_url} key={beasts._id} description={beasts.description} alt={beasts.alt} />)
      });

    

    return (
      <main>
      {hornedBeasts}
    
      </main>
    );
  }
}
 
export default Main;