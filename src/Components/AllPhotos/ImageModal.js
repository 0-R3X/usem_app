// src/Components/AllPhotos/ImageModal.js
import React from "react";
import ReactModal from "react-modal";

const ImageModal = ({
  isOpen,
  mediaUrl,
  mediaType,
  mediaOrientation,
  onClose,
  onPrev,
  onNext,
}) => {
  const handleModalClose = () => {
    onClose && onClose();
  };

  const getImageClass = () => {
    return mediaOrientation === "portrait"
      ? "modal-image portrait"
      : "modal-image";
  };

  // 🔹 Keep buttons visually styled by your CSS classes,
  // but override their POSITION so they stay fixed in the middle
  const baseNavButtonStyle = {
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1001,
    cursor: "pointer",
    userSelect: "none",
  };

  const prevButtonStyle = {
    ...baseNavButtonStyle,
    left: "24px",
  };

  const nextButtonStyle = {
    ...baseNavButtonStyle,
    right: "24px",
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      contentLabel="Image Modal"
      className="media-modal"
      overlayClassName="media-modal-overlay"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className="modal-navigation">
        {/* 🔹 PREV BUTTON – now fixed in viewport */}
        <div
          className="navigation-button prev-button"
          style={prevButtonStyle}
          onClick={onPrev}
        >
          &lt;
        </div>

        {/* IMAGE */}
        {mediaType === "image" && mediaUrl && (
          <>
            <img src={mediaUrl} alt="" className={getImageClass()} />
            <div className="close-button" onClick={handleModalClose}>
              <span>×</span>
            </div>
          </>
        )}

        {/* VIDEO */}
        {mediaType === "video" && mediaUrl && (
          <>
            <video
              src={mediaUrl}
              controls
              className="modal-video"
              style={{ maxHeight: "80vh", maxWidth: "100%" }}
            >
              आपका ब्राउज़र वीडियो टैग को सपोर्ट नहीं करता।
            </video>
            <div className="close-button" onClick={handleModalClose}>
              <span>×</span>
            </div>
          </>
        )}

        {/* FALLBACK */}
        {!mediaUrl && (
          <div className="d-flex flex-column align-items-center justify-content-center text-muted">
            <p>कोई मीडिया उपलब्ध नहीं है।</p>
            <div className="close-button" onClick={handleModalClose}>
              <span>×</span>
            </div>
          </div>
        )}

        {/* 🔹 NEXT BUTTON – now fixed in viewport */}
        <div
          className="navigation-button next-button"
          style={nextButtonStyle}
          onClick={onNext}
        >
          &gt;
        </div>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
