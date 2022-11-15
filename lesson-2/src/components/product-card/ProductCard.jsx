import React from 'react'

const ProductCard = ({image, title, linkLabel, linkURL}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt="" />
      <a href={linkURL}>{linkLabel}</a>
    </div>
  )
}

export default ProductCard