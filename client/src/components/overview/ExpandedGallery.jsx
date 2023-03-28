import React, { useState } from 'react';

const ExpandedGallery = ( { mainImage, imageDescription, setShowExpanded } ) => {

  const [transformOrigin, setTransformOrigin] = useState({});
  const [transform, setTransform] = useState('none');

  const handleCloseClick = (e) => {
    e.preventDefault();
    setShowExpanded(false);
  }


  const handleExpandedMainImageClick = (e) => {
    const expandedGallery = document.getElementById("expanded_gallery");
    const expandedMainImage = document.querySelector("expanded_gallery_mainImage");
    expandedGallery.addEventListener("mousemove", (e) => {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;

      // console.log(x, y);

      setTransformOrigin(`${x}px ${y}px`);
      setTransform('scale(2.5)');
      // expandedMainImage.transformOrigin = `${x}px ${y}px`;
      // expandedMainImage.transform = "scale(2.5)";
    })
  }

  return (
    <div id="expanded_gallery">
      {/* Hello, I'm the expanded gallery component! */}
      <img className="expanded_gallery_mainImage" src={mainImage} alt={imageDescription} transformOrigin={transformOrigin} transform={transform} onClick={handleExpandedMainImageClick}></img>
      <button className="expanded_gallery_close" onClick={handleCloseClick}>Close</button>
    </div>
  )
}

export default ExpandedGallery;