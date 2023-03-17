import React from 'react';

const StyleSelector = ( { selectedStyle, productStyles, updateSelectedStyle } ) => {

  // Refactor Need: Need to limit to 4 thumbnails in a row ***
  // Hard-coding this with the test product thumbnails for now, will have to re-factor when connected to live API ***
  let count = -1;
  const styleThumbnails = productStyles.map(style => {
    count++;
    let styleDescription = style.name;
    return (
      <div key={count} className="style_thumbnail_cropper">
        <img className="style_thumbnail" data-testid={`styleThumbnailImage${count}`} id={count} src={style.photos[0].thumbnail_url} alt={style.name} onClick={updateSelectedStyle}></img>
      </div>
    )
  })

  return (
    <div className="overview_style_selector">
      {/* <h3>This is the Style Selector Component!</h3> */}
      <div>
        <span data-testid="selectedStyleTitle"><b>{selectedStyle.name.toUpperCase()} > </b></span>
        <span>SELECTED STYLE</span>
      </div>
      <div className="style_selector_thumbnails">
        {styleThumbnails}
      </div>
    </div>
  )
}

export default StyleSelector;
