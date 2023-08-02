// ImageModal.js

import React from 'react';
import ReactModal from 'react-modal';

const ImageModal = ({ isOpen, mediaUrl, mediaType, mediaOrientation, onClose, onPrev, onNext }) => {
  const handleModalClose = () => {
    onClose();
  };

  const getImageClass = () => {
    return mediaOrientation === 'portrait' ? 'modal-image portrait' : 'modal-image';
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      contentLabel="Media Modal"
      className="media-modal"
      overlayClassName="media-modal-overlay"
    >
      <div className="modal-navigation">
        <div className="navigation-button prev-button" onClick={onPrev}>
          &lt;
        </div>
        {mediaType === 'image' && (
          <>
            <img src={mediaUrl} alt="" className={getImageClass()} />
            <div className="close-button" onClick={handleModalClose}>
              <span>×</span>
            </div>
          </>
        )}
        {mediaType === 'video' && (
          <>
            <video controls className="modal-video">
              <source src={mediaUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="close-button" onClick={handleModalClose}>
              <span>×</span>
            </div>
          </>
        )}
        <div className="navigation-button next-button" onClick={onNext}>
          &gt;
        </div>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
