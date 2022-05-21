import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {

    let renderAllHornedBeasts = this.props.data.map((beastsData, idx) => {
      // console.log(beastsData.image_url);
      return (
        <HornedBeast name={beastsData.title}
          image_url={beastsData.image_url}
          key={beastsData._id}
          description={beastsData.description}
          horns={beastsData.horns}
          alt={beastsData.alt}
          openModalControl={this.props.openModalControl}
        />)
    });





    return (
      <main>
        {renderAllHornedBeasts}
      </main>
    );
  }
}

export default Main;