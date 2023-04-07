import React, { useState } from 'react';
import logoLight from './aerio_logo_light.png';

const Header = () => {

  const [lightMode, setLightMode] = useState(true);

  const handleLightModeClick = (e) => {
    e.preventDefault();
    console.log('Light Mode Button Clicked!');
    lightMode ? setLightMode(false) : setLightMode(true);
  }

  return (
    <div id="header">
      <img src={logoLight} alt="Atelier by Aerio (Logo)" height="35px"></img>
      <button className="light_dark_mode_toggle">
        {lightMode ? <img className="dark_mode_button" src="https://cdn-icons-png.flaticon.com/512/606/606807.png" alt="Change to Dark Mode" height="25px" onClick={handleLightModeClick}></img> : <img className="light_mode_button" src="https://cdn-icons-png.flaticon.com/512/702/702459.png" alt="Change to Light Mode" height="25px" onClick={handleLightModeClick}></img>}
      </button>
    </div>
  );
}

// {mainImageIndex > 0 ? <img className="main_image_previous" onClick={handleMainPreviousClick} src="https://cdn-icons-png.flaticon.com/512/2732/2732652.png" alt="Previous"></img> : null}

export default Header;
