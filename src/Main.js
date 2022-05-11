import React from 'react';

import HornedBeast from './HornedBeast';


class Main extends React.Component{
  render() {
    return (
      <>
      <HornedBeast
      title='Beast1'
      description = {'this is a beast'}
      url = {
        'https://img.etimg.com/thumb/msid-91314399,width-650,imgsize-64026,,resizemode-4,quality-100/beast-poster.jpg'
      }
      />

      <HornedBeast
      title='Beast1'
      description = {'this is a beast'}
      url = {
       'https://img.etimg.com/thumb/msid-91314399,width-650,imgsize-64026,,resizemode-4,quality-100/beast-poster.jpg'
      }
      />
      </>
    )
  }
}
 
export default Main;