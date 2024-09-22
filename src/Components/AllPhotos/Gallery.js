import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageModal from './ImageModal';
import VideoModal from './VideoModal';

const Gallery = ({ photoData, videoData }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [currentMediaType, setCurrentMediaType] = useState('image');
  const [currentMediaEventIndex, setCurrentMediaEventIndex] = useState(0);

  const handleImageClick = (eventIndex, mediaIndex) => {
    setCurrentMediaIndex(mediaIndex);
    setCurrentMediaType('image');
    setCurrentMediaEventIndex(eventIndex);
    setIsImageModalOpen(true);
  };

  const handleVideoClick = (eventIndex, mediaIndex) => {
    setCurrentMediaIndex(mediaIndex);
    setCurrentMediaType('video');
    setCurrentMediaEventIndex(eventIndex);
    setIsVideoModalOpen(true);
  };

  const handleImageModalClose = () => {
    setIsImageModalOpen(false);
  };

  const handleVideoModalClose = () => {
    setIsVideoModalOpen(false);
  };

  const handlePrev = () => {
    if (currentMediaType === 'image') {
      setCurrentMediaIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else {
      setCurrentMediaIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    }
  };

  const handleNext = () => {
    if (currentMediaType === 'image') {
      setCurrentMediaIndex((prevIndex) =>
        prevIndex < photoData[currentMediaEventIndex]?.photos?.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else {
      setCurrentMediaIndex((prevIndex) =>
        prevIndex < videoData[currentMediaEventIndex]?.videos?.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  return (
    <div className=" mt-3 p-5 bg-light">

      {photoData.map((event, eventIndex) => (
        <div key={eventIndex} className="mb-5 mt-2">
          <h2 className='fw-bold'>{event.event}</h2>
          <div className="row">
            {event.photos.map((photoUrl, photoIndex) => (
              <div key={photoIndex} className="col-md-2 mb-3">
                <img
                  src={photoUrl}
                  alt=""
                  className={`img-fluid thumbnail-image ${photoData[currentMediaEventIndex].photos[currentMediaIndex].endsWith('.jpg') ? 'landscape' : ''}`}
                  onClick={() => handleImageClick(eventIndex, photoIndex)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      {videoData.map((event, eventIndex) => (
        <div key={eventIndex} className="mb-5 mt-2">
          <h2 className='fw-bold'>{event.event}</h2>
          <div className="row">
            {event.videos.map((videoUrl, videoIndex) => (
              <div key={videoIndex} className="col-md-2 mb-3">
                <video
                  src={videoUrl}
                  alt=""
                  className="img-fluid thumbnail-image"
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  onClick={() => handleVideoClick(eventIndex, videoIndex)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <ImageModal
        isOpen={isImageModalOpen}
        mediaUrl={photoData[currentMediaEventIndex]?.photos?.[currentMediaIndex]}
        mediaType={currentMediaType}
        mediaOrientation="portrait"
        onClose={handleImageModalClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <VideoModal
        isOpen={isVideoModalOpen}
        mediaUrl={videoData[currentMediaEventIndex]?.videos?.[currentMediaIndex]}
        mediaType={currentMediaType}
        onClose={handleVideoModalClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default Gallery;
