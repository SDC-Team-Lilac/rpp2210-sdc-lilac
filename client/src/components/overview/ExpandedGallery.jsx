import React, { useState } from 'react';

const ExpandedGallery = ( { mainImage, imageDescription, setShowExpanded } ) => {

  // Refactor need -- take care of right and bottom whitespace on zoomed image ***

  const [isZoomed, setIsZoomed] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState({});
  const [transform, setTransform] = useState('none');
  const [cursor, setCursor] = useState('crosshair');

  const handleCloseClick = (e) => {
    e.preventDefault();
    setShowExpanded(false);
    setIsZoomed(false);
  }

  const handleExpandedMainImageClick = (e) => {
    console.log('Expanded Image Clicked!');
    if (!isZoomed) {
      setTransform('scale(2.5)');
      // Refactor need -- make this a - sign instead ***
      setCursor('zoom-out');
      setIsZoomed(true);
    } else {
      setTransform('none');
      setCursor('crosshair');
      setIsZoomed(false);
    }
  }

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (isZoomed) {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      setTransformOrigin(`${x}px ${y}px`);
    }
  }

  return (
    <div id="expanded_gallery">
      <img className="expanded_gallery_mainImage" src={mainImage} alt={imageDescription} style={{transform: transform, transformOrigin: transformOrigin, cursor: cursor}} onMouseMove={handleMouseMove} onClick={handleExpandedMainImageClick}></img>
      {isZoomed ? null : <img className="expanded_gallery_close" src="https://cdn-icons-png.flaticon.com/512/607/607863.png" alt="Close" onClick={handleCloseClick}></img>}
    </div>
  )
}

export default ExpandedGallery;
