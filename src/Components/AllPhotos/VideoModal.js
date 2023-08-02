import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80vw',
    maxHeight: '80vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

Modal.setAppElement('#root');

const VideoModal = ({ isOpen, mediaUrl, mediaType, onClose, onPrev, onNext }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div>
        {mediaType === 'video' && (
          <video controls autoPlay>
            <source src={mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <button onClick={onPrev} className="btn btn-light btn-lg">
        &lt;
      </button>
      <button onClick={onNext} className="btn btn-light btn-lg">
        &gt;
      </button>
    </Modal>
  );
};

export default VideoModal;
