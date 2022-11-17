// import React from 'react';
import { useState } from 'react';

const Comment = () => {
  const[number, setNumber] = useState(0);

  const images = [
    "https://i.pinimg.com/originals/15/f6/a3/15f6a3aac562ee0fadbbad3d4cdf47bc.jpg",
    "https://wallpaper.dog/large/10880383.jpg",
    "https://wallpaperaccess.com/full/969650.jpg"
  ]

  const increment = () => {
    if(number < images.length - 1){
      setNumber(number => number + 1);
    }
    else{
      setNumber(0)
    }
  }

  const decrement = () => {
    if(number > 0){
      setNumber(number => number - 1);
    }
    else{
      setNumber(images.length - 1)
    }
  }

  


  const imageStyle = {
    width: "500px",
    height: "300px"
  }

  // TODO: nimaga man set ni ichida functionni return
  return (
    <div>
      <button onClick={decrement}>Prev</button>
      <img style={imageStyle} src={images[number]} alt="" />
      <button onClick={increment}>Next</button>
      <input type="file"/>
    </div>
  )
}

export default Comment