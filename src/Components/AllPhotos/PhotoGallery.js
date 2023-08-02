import { Container, Row, Col, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import galleryData from "./galleryData";
import Gallery from "./Gallery";
import React, {useState } from 'react';
// useEffect, 


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
    event: 'रक्तदान शिविर',
    videos: [
      'assets/event1/1 (1).mp4',
      'assets/event1/1 (2).mp4',
      'assets/event1/1 (3).mp4',
      'assets/event1/1 (4).mp4',
      'assets/event1/1 (5).mp4',
    ]
  },
  {
    event: 'होली मिलन समारोह',
    videos: [
      'assets/event2/1 (1).mp4',
      'assets/event2/1 (3).mp4',
      'assets/event2/1 (4).mp4',
      'assets/event2/1 (5).mp4',
      'assets/event2/1 (6).mp4',
      'assets/event2/1 (7).mp4',
    ]
  }
  // Your videoData array containing the video URLs in the same sequence as the images
];


const PhotoGallery = () => {

  const initialImageCount = 3; // Number of images to initially show
  const [expanded, setExpanded] = useState(false);
  const [visibleImages, setVisibleImages] = useState(
    galleryData.slice(0, initialImageCount)
  );

  const handleViewMore = () => {
    if (!expanded) {
      setVisibleImages(galleryData); // Show all images when "View More" is clicked
    } else {
      setVisibleImages(galleryData.slice(0, initialImageCount)); // Show initial set of images when "View Less" is clicked
    }
    setExpanded(!expanded); // Toggle expanded state
  };

  return (
    <>
    <div className="jumbotron pt-3 mx-4">
      <h1>फोटो गैलरी</h1>
      <p>कल्पना की उड़ान, रंगों की दुनिया में खोये ख्वाब!</p>
      <Container className="my-5">
        <Row>
          <Col>
            <ImageGallery
              items={visibleImages}
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={false}
              showBullets
              lazyLoad
              slideInterval={5000}
              slideDuration={450}
              slideOnThumbnailOver />
          </Col>
        </Row>
        <div className="d-flex justify-content-center align-items-center">
          <Button className="bg-success text-white" variant="text-white" onClick={handleViewMore}>
            {expanded ? "View Less" : "View More"}
          </Button>
        </div>
      </Container>
    </div>
    <Gallery photoData={photoData} videoData={videoData} />
    </>
  );
};

export default PhotoGallery;
