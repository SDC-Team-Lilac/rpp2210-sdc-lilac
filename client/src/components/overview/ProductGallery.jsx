import React, { useState, useEffect } from 'react';

const ProductGallery = ( { productPhotos, productName, styleName } ) => {

  // Current Bug -- when switching style, next click to "next" on mainImage results in undefined URL, but if you click previous and THEN next it's fine (?)
    // Also seems to be happening on any "next" mainImage click if you jump click to another thumbnail

  const [mainImage, setMainImage] = useState('');
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [topThumbnailIndex, setTopThumbnailIndex] = useState(0);
  const [bottomThumbnailIndex, setBottomThumbnailIndex] = useState(7);

  // Current bug -- this takes a noticeable amount of time to render to the page on initial page load
  useEffect(() => {
    setMainImage(productPhotos[mainImageIndex].url);
  }, [productPhotos]);

  const handleThumbnailClick = (e) => {
    e.preventDefault();
    console.log('Thumbnail clicked! ', e.target.id);
    let thumbnail_index = parseInt(e.target.id);
    setMainImage(productPhotos[thumbnail_index].url);
    setMainImageIndex(thumbnail_index);
  }

  const imageDescription = productName.concat(', ', styleName);

  let count = -1;

  const thunbnailList = productPhotos.map(photo => {
    count++;
    let thumbnailDescription = imageDescription.concat(' Image #', count);
    if (photo.url === mainImage) {
      return (
        <img className="selected_gallery_thumbnail" key={count} id={count} data-testid={`galleryThumbnailImage${count}`} src={photo.thumbnail_url} alt={thumbnailDescription} width="100px" onClick={handleThumbnailClick}></img>
      );
    } else {
      return (
        <img className="gallery_thumbnail" key={count} id={count} data-testid={`galleryThumbnailImage${count}`} src={photo.thumbnail_url} alt={thumbnailDescription} width="100px" onClick={handleThumbnailClick}></img>
      );
    }
  });

  const handleMainPreviousClick = (e) => {
    e.preventDefault();
    setMainImage(productPhotos[mainImageIndex - 1].url);
    setMainImageIndex(mainImageIndex - 1);
    if (mainImageIndex - 1 < topThumbnailIndex) {
      setTopThumbnailIndex(topThumbnailIndex - 1);
      setBottomThumbnailIndex(bottomThumbnailIndex - 1);
    }
  }

  const handleMainNextClick = (e) => {
    e.preventDefault();
    setMainImage(productPhotos[mainImageIndex + 1].url);
    setMainImageIndex(mainImageIndex + 1);
    if (mainImageIndex === bottomThumbnailIndex - 1) {
      setTopThumbnailIndex(topThumbnailIndex + 1);
      setBottomThumbnailIndex(bottomThumbnailIndex + 1);
    }
  }

  const handleThumbnailPreviousClick = (e) => {
    e.preventDefault();
    setTopThumbnailIndex(topThumbnailIndex - 1);
    setBottomThumbnailIndex(bottomThumbnailIndex - 1);
  }

  const handleThumbnailNextClick = (e) => {
    e.preventDefault();
    setTopThumbnailIndex(topThumbnailIndex + 1);
    setBottomThumbnailIndex(bottomThumbnailIndex + 1);
  }

  return (
    <div className="gallery">
      {/* <h2>This is the Product Gallery Component!</h2> */}
      {mainImageIndex > 0 ? <button className="main_image_previous" onClick={handleMainPreviousClick}>Previous!!!</button> : null}
      {mainImageIndex < thunbnailList.length - 1 ? <button className="main_image_next" onClick={handleMainNextClick}>Next!!!</button> : null}
      <img className="mainImage" data-testid="mainImage" src={mainImage} alt={imageDescription}></img>
      <div className="thumbnailGallery">
        {topThumbnailIndex > 0 ? <button className="thumbnail_gallery_previous" onClick={handleThumbnailPreviousClick}>Up!!!</button> : null}
        <div className="thumbnailCarousel">{thunbnailList.slice(topThumbnailIndex, bottomThumbnailIndex)}</div>
        {thunbnailList.length > 7 && bottomThumbnailIndex < thunbnailList.length ? <button className="thumbnail_gallery_next" onClick={handleThumbnailNextClick}>Down!!!</button> : null}
      </div>
    </div>
  )
}

export default ProductGallery;
