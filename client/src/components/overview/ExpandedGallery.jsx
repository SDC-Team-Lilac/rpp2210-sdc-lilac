import React, { useState } from 'react';

const ExpandedGallery = ( { mainImage, imageDescription, setShowExpanded } ) => {

  const handleCloseClick = (e) => {
    e.preventDefault();
    setShowExpanded(false);
  }
  return (
    <div className="expanded_gallery">
      {/* Hello, I'm the expanded gallery component! */}
      <img className="expanded_gallery_mainImage" src={mainImage} alt={imageDescription}></img>
      <button className="expanded_gallery_close" onClick={handleCloseClick}>Close</button>
    </div>
  )
}

export default ExpandedGallery;