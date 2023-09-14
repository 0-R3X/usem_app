import { Container, Row, Col, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import galleryData from "./galleryData";
import Gallery from "./Gallery";
import React, {useState } from 'react';


const photoData = [
  {
  event: 'एकता मंच',
  photos: [
    'assets/event0/1 (1).jpg',
    'assets/event0/1 (2).jpg',
    'assets/event0/1 (3).jpg',
    'assets/event0/1 (4).jpg',
    'assets/event0/1 (5).jpg',
    'assets/event0/1 (6).jpg',
    'assets/event0/1 (7).jpg',
    'assets/event0/1 (8).jpg',
    'assets/event0/1 (9).jpg',
    'assets/event0/1 (10).jpg',
    'assets/event0/1 (11).jpg',
    'assets/event0/1 (12).jpg',
    'assets/event0/1 (13).jpg',
    'assets/event0/1 (14).jpg',
    'assets/event0/1 (15).jpg',
    'assets/event0/1 (16).jpg',
    'assets/event0/1 (17).jpg',
    'assets/event0/1 (18).jpg',
    'assets/event0/1 (19).jpg',
    'assets/event0/1 (20).jpg',
    'assets/event0/1 (21).jpg',
    'assets/event0/1 (22).jpg',
    'assets/event0/1 (23).jpg',
    'assets/event0/1 (24).jpg',
    'assets/event0/1 (25).jpg',
    'assets/event0/1 (26).jpg',
    'assets/event0/1 (27).jpg',
    ]
  },
  {
    event: 'रक्तदान शिविर',
    photos: [
      'assets/event1/1 (1).jpg',
      'assets/event1/1 (2).jpg',
      'assets/event1/1 (3).jpg',
      'assets/event1/1 (4).jpg',
      'assets/event1/1 (5).jpg',
      'assets/event1/1 (6).jpg',
      'assets/event1/1 (7).jpg',
      'assets/event1/1 (8).jpg',
      'assets/event1/1 (9).jpg',
      'assets/event1/1 (10).jpg',
      'assets/event1/1 (11).jpg',
      'assets/event1/1 (12).jpg',
      'assets/event1/1 (13).jpg',
      'assets/event1/1 (14).jpg',
      'assets/event1/1 (15).jpg',
      'assets/event1/1 (16).jpg',
      'assets/event1/1 (17).jpg',
      'assets/event1/1 (18).jpg',
      'assets/event1/1 (19).jpg',
      // Add more image URLs for Event 1
    ],
  },


  {
    event: 'होली मिलन समारोह',
    photos: [
      'assets/event2/1 (1).jpg',
      'assets/event2/1 (2).jpg',
      'assets/event2/1 (3).jpg',
      'assets/event2/1 (4).jpg',
      'assets/event2/1 (5).jpg',
      'assets/event2/1 (6).jpg',
      'assets/event2/1 (7).jpg',
      'assets/event2/1 (8).jpg',
      'assets/event2/1 (9).jpg',
      'assets/event2/1 (10).jpg',
      'assets/event2/1 (11).jpg',
      'assets/event2/1 (12).jpg',
      'assets/event2/1 (13).jpg',
      'assets/event2/1 (14).jpg',
      'assets/event2/1 (15).jpg',
      'assets/event2/1 (16).jpg',

      // Add more image URLs for Event 1
    ],
  },
  

  {
    event: 'वृक्षारोपण',
    photos: [
      'assets/event3/1 (1).jpg',
      'assets/event3/1 (2).jpg',
      'assets/event3/1 (3).jpg',
      // Add more image URLs for Event 2
    ],
  },

  // Add more events
];

const videoData = [
  {
    event: 'वीडियो',
    videos: [
      'assets/event1/1 (1).mp4',
      'assets/event1/1 (2).mp4',
      'assets/event1/1 (3).mp4',
      'assets/event1/1 (4).mp4',
      'assets/event1/1 (5).mp4',

      'assets/event2/1 (1).mp4',
      'assets/event2/1 (3).mp4',
      'assets/event2/1 (4).mp4',
      'assets/event2/1 (5).mp4',
      'assets/event2/1 (6).mp4',
      'assets/event2/1 (7).mp4',
    ]
  },
  // Your videoData array containing the video URLs in the same sequence as the images
];

const PhotoGallery = () => {
  const initialImageCount = 3;
  const [expanded, setExpanded] = useState(false);

  const handleViewMore = () => {
    setExpanded(!expanded);
  };

  // CSS styles for the thumbnail
  const thumbnailStyle = {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    objectPosition: 'center',
  };

  // CSS styles for the main images in the slider
  const mainImageStyle = {
    objectFit: 'contain',
    maxHeight: '500px',
  };

  // Create an array of objects for the ImageGallery to display both main images and thumbnails
  const galleryItems = galleryData.map((item) => ({
    original: item.original,
    thumbnail: item.thumbnail,
    originalAlt: item.originalAlt,
    thumbnailAlt: item.thumbnailAlt,
  }));

  return (
    <>
      <div className="jumbotron pt-3 mx-4">
        {/* ... */}
        <Container className="my-2">
          <Row>
            <Col>
              {/* Apply the thumbnailStyle and mainImageStyle to the ImageGallery component */}
              <ImageGallery
                items={expanded ? galleryItems : galleryItems.slice(0, initialImageCount)}
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={false}
                showBullets
                lazyLoad
                slideInterval={5000}
                slideDuration={450}
                slideOnThumbnailOver
                thumbnailPosition="bottom"
                additionalClass="custom-image-gallery"
                renderItem={(item) => (
                  <div className="image-gallery-image">
                    <img src={item.original} alt={item.originalAlt} style={mainImageStyle} />
                  </div>
                )}
                renderThumbInner={(item) => (
                  <div className="image-gallery-thumbnail-inner">
                    <img src={item.thumbnail} alt={item.thumbnailAlt} style={thumbnailStyle} />
                  </div>
                )}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-center align-items-center">
            <Button className="bg-success text-white" variant="text-white" onClick={handleViewMore}>
              {expanded ? 'और देखें' : 'कम देखें'}
            </Button>
          </div>
        </Container>
      </div>
      <Gallery photoData={photoData} videoData={videoData} />
    </>
  );
};

export default PhotoGallery;


// <Gallery photoData={photoData} videoData={videoData} />