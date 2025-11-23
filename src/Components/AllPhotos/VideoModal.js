// src/Components/AllPhotos/VideoModal.js
import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const VideoModal = ({ isOpen, mediaUrl, mediaType, onClose, onPrev, onNext }) => {
  const handleModalClose = () => {
    onClose && onClose();
  };

  // Same fixed-position navigation buttons as ImageModal
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
      contentLabel="Video Modal"
      className="media-modal"
      overlayClassName="media-modal-overlay"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className="modal-navigation">

        {/* 🔹 FIXED PREV BUTTON */}
        <div
          className="navigation-button prev-button"
          style={prevButtonStyle}
          onClick={onPrev}
        >
          &lt;
        </div>

        {/* VIDEO CONTENT */}
        {mediaType === "video" && mediaUrl ? (
          <>
            <video
              controls
              autoPlay
              className="modal-video"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                borderRadius: "10px",
              }}
            >
              <source src={mediaUrl} type="video/mp4" />
              आपका ब्राउज़र वीडियो प्लेबैक को सपोर्ट नहीं करता।
            </video>

            {/* Close Button */}
            <div className="close-button" onClick={handleModalClose}>
              <span>×</span>
            </div>
          </>
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center text-muted">
            <p>कोई वीडियो उपलब्ध नहीं है।</p>
            <div className="close-button" onClick={handleModalClose}>
              <span>×</span>
            </div>
          </div>
        )}

        {/* 🔹 FIXED NEXT BUTTON */}
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

export default VideoModal;
