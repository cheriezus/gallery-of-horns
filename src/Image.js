import React from 'react';
import HornedBeast from './HornedBeast';


class Image extends React.Component{
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
        'https://en.wikipedia.org/wiki/Beast_(character)#/media/File:Beast_(Hank_McCoy_-_circa_2019).png'
      }
      />
      </>
    )
  }
}
 
export default Image