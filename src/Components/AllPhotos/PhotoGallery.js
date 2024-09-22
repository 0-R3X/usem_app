import { Container, Row, Col, Button } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import galleryData from "./galleryData";
import Gallery from "./Gallery";
import React, {useState } from 'react';


const photoData = [
  {
    event: 'रक्तदान शिविर - 2024',
    photos: [
      'assets/event7/1 (1).jpg',
      'assets/event7/1 (2).jpg',
      'assets/event7/1 (3).jpg',
      'assets/event7/1 (4).jpg',
      'assets/event7/1 (5).jpg',
      'assets/event7/1 (6).jpg',
      'assets/event7/1 (7).jpg',
      'assets/event7/1 (8).jpg',
      'assets/event7/1 (9).jpg',
      'assets/event7/1 (10).jpg',
      'assets/event7/1 (11).jpg',
      'assets/event7/1 (12).jpg',
      'assets/event7/1 (13).jpg',
      'assets/event7/1 (14).jpg',
      'assets/event7/1 (15).jpg',
    ],
  },

  {
    event: 'वृक्षारोपण - 2024',
    photos: [
      'assets/event6/1 (1).jpg',
      'assets/event6/1 (2).jpg',
      'assets/event6/1 (3).jpg',
      'assets/event6/1 (4).jpg',
      'assets/event6/1 (5).jpg',
      'assets/event6/1 (6).jpg',
      'assets/event6/1 (7).jpg',
      'assets/event6/1 (8).jpg',
      'assets/event6/1 (9).jpg',
      'assets/event6/1 (10).jpg',
      'assets/event6/1 (11).jpg',
      'assets/event6/1 (12).jpg',
      'assets/event6/1 (13).jpg',
      'assets/event6/1 (14).jpg',
      'assets/event6/1 (15).jpg',
      'assets/event6/1 (16).jpg',
      'assets/event6/1 (17).jpg',
      'assets/event6/1 (18).jpg',
    ],
  },

  {
    event: 'मकरेणी कौथिक महोत्सव',
      photos: [
        'assets/event4/1 (1).jpg',
        'assets/event4/1 (2).jpg',
        'assets/event4/1 (3).jpg',
        'assets/event4/1 (4).jpg',
        'assets/event4/1 (5).jpg',
        'assets/event4/1 (6).jpg',
        'assets/event4/1 (7).jpg',
        'assets/event4/1 (8).jpg',
        'assets/event4/1 (9).jpg',
        'assets/event4/1 (10).jpg',
        'assets/event4/1 (11).jpg',
        'assets/event4/1 (12).jpg',
        'assets/event4/1 (13).jpg',
        'assets/event4/1 (14).jpg',
        'assets/event4/1 (15).jpg',
        'assets/event4/1 (16).jpg',
        'assets/event4/1 (17).jpg',
        'assets/event4/1 (18).jpg',
        'assets/event4/1 (19).jpg',
        'assets/event4/1 (20).jpg',
      ],
  },
  
  {
  event: 'माता के लिए जागरण',
  photos: [
    'assets/event5/1 (1).jpg',
    'assets/event5/1 (2).jpg',
    'assets/event5/1 (3).jpg',
    'assets/event5/1 (4).jpg',
    'assets/event5/1 (5).jpg',
    'assets/event5/1 (6).jpg',
    'assets/event5/1 (7).jpg',
    'assets/event5/1 (8).jpg',
    'assets/event5/1 (9).jpg',
    'assets/event5/1 (10).jpg',
    'assets/event5/1 (11).jpg',
    'assets/event5/1 (12).jpg',
    'assets/event5/1 (13).jpg',
    'assets/event5/1 (14).jpg',
    'assets/event5/1 (15).jpg',
    'assets/event5/1 (16).jpg',
    'assets/event5/1 (17).jpg',
    'assets/event5/1 (18).jpg',
    'assets/event5/1 (19).jpg',
    'assets/event5/1 (20).jpg',
    'assets/event5/1 (21).jpg',
    'assets/event5/1 (22).jpg',
    'assets/event5/1 (23).jpg',
    'assets/event5/1 (24).jpg',
    'assets/event5/1 (25).jpg',
    'assets/event5/1 (26).jpg',
    'assets/event5/1 (27).jpg',
    'assets/event5/1 (28).jpg',
    'assets/event5/1 (29).jpg',
    'assets/event5/1 (30).jpg',
    'assets/event5/1 (31).jpg',
    'assets/event5/1 (32).jpg',
    'assets/event5/1 (33).jpg',
    'assets/event5/1 (34).jpg',
    'assets/event5/1 (35).jpg',
    'assets/event5/1 (36).jpg',
    'assets/event5/1 (37).jpg',
    'assets/event5/1 (38).jpg',
    'assets/event5/1 (39).jpg',
    'assets/event5/1 (40).jpg',
    'assets/event5/1 (41).jpg',
    'assets/event5/1 (42).jpg',

  ],
},

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
    event: 'रक्तदान शिविर - 2023',
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

      'assets/event2/1 (1).mp4',
      'assets/event2/1 (2).mp4',
      'assets/event2/1 (3).mp4',
      'assets/event2/1 (4).mp4',
      'assets/event2/1 (5).mp4',
      'assets/event2/1 (6).mp4',
      'assets/event2/1 (7).mp4',

      'assets/event6/1 (1).mp4',
      'assets/event6/1 (2).mp4',

      'assets/event7/1 (1).mp4',
      'assets/event7/1 (2).mp4',
      'assets/event7/1 (3).mp4',
      'assets/event7/1 (4).mp4',
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

  const thumbnailStyle = {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    objectPosition: 'center',
  };

  const mainImageStyle = {
    objectFit: 'contain',
    maxHeight: '500px',
  };

  const galleryItems = galleryData.map((item) => ({
    original: item.original,
    thumbnail: item.thumbnail,
    originalAlt: item.originalAlt,
    thumbnailAlt: item.thumbnailAlt,
  }));

  return (
    <>
      <div className="jumbotron pt-3 mx-4">
        <Container className="my-2">
          <Row>
            <Col>
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
                    <img 
                      src={item.original} 
                      alt={item.originalAlt} 
                      style={mainImageStyle} 
                      loading="lazy" // Lazy load for main images
                    />
                  </div>
                )}
                renderThumbInner={(item) => (
                  <div className="image-gallery-thumbnail-inner">
                    <img 
                      src={item.thumbnail} 
                      alt={item.thumbnailAlt} 
                      style={thumbnailStyle} 
                      loading="lazy" // Lazy load for thumbnails
                    />
                  </div>
                )}
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-center align-items-center">
            <Button className="bg-success text-white" variant="text-white" onClick={handleViewMore}>
              {expanded ? 'कम देखें' : 'और देखें'}
            </Button>
          </div>
        </Container>
      </div>
      <Gallery photoData={photoData} videoData={videoData} />
    </>
  );
};

export default PhotoGallery;