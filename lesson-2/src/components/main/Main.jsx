import React from 'react';
import collectionData from '../../dummy-data-collection.json';
import ProductCard from '../product-card/ProductCard';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  return (
    <div>
      {
        collectionData.map((collectionItem, index) =>
          <ProductCard key={uuidv4()} linkLabel={collectionItem.linkLabel} linkURL={collectionItem.linkURL} image={collectionItem.image} title={collectionItem.title}/>  
        )
      }
    </div>
  )
}

export default Main