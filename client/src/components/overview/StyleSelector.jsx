import React from 'react';

const StyleSelector = ( { selectedStyle } ) => {

  // Refactor Need: Need to limit to 4 thumbnails in a row ***
  // Hard-coding this with the test product thumbnails for now, will have to re-factor when connected to live API ***
  let count = -1;
  const styleThumbnails = selectedStyle.photos.map(thumbnail => {
    count++;
    let thumbnailDescription = selectedStyle.name.concat(' Image #', count);
    return (
      <div key={count} className="style_thumbnail_cropper">
        <img className="style_thumbnail" src={thumbnail.thumbnail_url} alt={thumbnailDescription}></img>
      </div>
    )
  })

  return (
    <div className="overview_style_selector">
      {/* <h3>This is the Style Selector Component!</h3> */}
      <div>
        <span><b>{selectedStyle.name.toUpperCase()} > </b></span>
        <span>SELECTED STYLE</span>
      </div>
      <div className="style_selector_thumbnails">
        {styleThumbnails}
      </div>
    </div>
  )
}

export default StyleSelector;
