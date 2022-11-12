import React from 'react'

const UserCard = ({ firstName, avatar, networth, mashinalar }) => {
  // props => properties => xossa
  const imageStyle = {
    width: "200px",
    height: "200px", 
    objectFit: "cover" 
  }
  
  // console.log(props)
  return (
    <>
      <img style={imageStyle} src={avatar} alt="" />
      <h3>{firstName}</h3>
      <div>{networth}</div>
      {
        mashinalar.map((car, index) => 
          <li key={index}>{car}</li>  
        )
      }
    </>
  )
}

export default UserCard