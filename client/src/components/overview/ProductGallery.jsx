import React from 'react';

const ProductGallery = ( { productPhotos, productName, styleName } ) => {

  console.log('Product Gallery: ', productPhotos, productName, styleName);
  const imageDescription = productName.concat(', ', styleName);
  // console.log('Image description: ', imageDescription);

  let count = -1;
  const thunbnailList = productPhotos.map(photo => {
    count++;
    let thumbnailDescription = imageDescription.concat(' Image #', count);
    return (
      <img key={count} src={photo.thumbnail_url} alt={thumbnailDescription} width="100px"></img>
    );
  });

  return (
    <div className="gallery">
      {/* <h2>This is the Product Gallery Component!</h2> */}
      <img className="mainImage" src={productPhotos[0].url} alt={imageDescription}></img>
      <div className="thumbnailGallery">
        {thunbnailList}
      </div>
    </div>
  )
}

export default ProductGallery;
