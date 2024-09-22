import React, { useState } from 'react';

const PopupPoster = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);

  const closePopup = () => {
    setPopupVisible(false);
  };

  return isPopupVisible ? (
    <div className="popup-container">
      <div className="popup-content">
        <button className="close-button" onClick={closePopup}>
          X
        </button>
        <img src='/assets/images/popUpP1.jpg' alt='poster1' width="400px" height="500px"/>
      </div>
    </div>
  ) : null;
};

export default PopupPoster;
