import React from 'react';

const ProductGallery = ( { productPhotos, productName, styleName } ) => {

  const imageDescription = productName.concat(', ', styleName);
  console.log('Image description: ', imageDescription);

  return (
    <div className="gallery">
      <h2>This is the Product Gallery Component!</h2>
      <img className="mainImage" src={productPhotos[0].url} alt={imageDescription}></img>
    </div>
  )
}

export default ProductGallery;
