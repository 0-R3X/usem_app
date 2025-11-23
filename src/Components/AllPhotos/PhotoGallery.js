import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ImageModal from "./ImageModal";

// Cloudinary base URL (public, safe to use in frontend)
const CLOUD_NAME = "dkhjn75hj";
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

// 🔹 Configure your image events here.
// - id:    numeric part of "eventN"
// - name:  display name for the event
// - imageCount: how many images are in that event folder
//
// To add a new event:
// 1) Upload assets/eventN to Cloudinary with your script
// 2) Add { id: N, name: '...', imageCount: X } here
const IMAGE_EVENTS = [
  { id: 11, name: "स्वतंत्रता दिवस - 2025", imageCount: 33 },
  { id: 10, name: "मकरेणी कौथिक महोत्सव - 2025", imageCount: 21 },
  { id: 9, name: "वृक्षारोपण - 2025", imageCount: 26 },
  { id: 8, name: "जागरण - 2024", imageCount: 80 },
  { id: 7, name: "रक्तदान शिविर - 2024", imageCount: 15 },
  { id: 6, name: "वृक्षारोपण - 2024", imageCount: 18 },
  { id: 5, name: "माता के लिए जागरण", imageCount: 42 },
  { id: 4, name: "मकरेणी कौथिक महोत्सव", imageCount: 19 },
  { id: 2, name: "होली मिलन समारोह", imageCount: 15 },
  { id: 1, name: "रक्तदान शिविर - 2023", imageCount: 19 },
  { id: 0, name: "एकता मंच", imageCount: 27 },
];

// 🔹 Simple list of videos (still local for now).
// You can later move these to Cloudinary "video/upload" and just swap the URLs.
const VIDEOS = [
  "assets/event1/1 (1).mp4",
  "assets/event1/1 (2).mp4",
  "assets/event1/1 (3).mp4",
  "assets/event1/1 (4).mp4",

  "assets/event2/1 (1).mp4",
  "assets/event2/1 (2).mp4",
  "assets/event2/1 (3).mp4",
  "assets/event2/1 (4).mp4",
  "assets/event2/1 (5).mp4",
  "assets/event2/1 (6).mp4",
  "assets/event2/1 (7).mp4",

  "assets/event6/1 (1).mp4",
  "assets/event6/1 (2).mp4",

  "assets/event7/1 (1).mp4",
  "assets/event7/1 (2).mp4",
  "assets/event7/1 (3).mp4",
  "assets/event7/1 (4).mp4",

  "assets/event10/1 (1).mp4",
  "assets/event10/1 (2).mp4",
  "assets/event10/1 (3).mp4",
  "assets/event10/1 (4).mp4",
  "assets/event10/1 (5).mp4",

  "assets/event11/1 (1).mp4",
  "assets/event11/1 (2).mp4",
  "assets/event11/1 (3).mp4",
  "assets/event11/1 (4).mp4",
  "assets/event11/1 (5).mp4",
  "assets/event11/1 (6).mp4",
  "assets/event11/1 (7).mp4",
];

// 🔹 Build a Cloudinary URL for an image in assets/event{eventId}/1_{index}.jpg
// variant = 'thumb' | 'full'
const getCloudinaryImageUrl = (eventId, index, variant = "thumb") => {
  const transform =
    variant === "thumb"
      ? "f_auto,q_auto,w_320,c_fill"
      : "f_auto,q_auto,w_1600";

  // We assume all images are jpg as in your original setup
  return `${CLOUDINARY_BASE}/${transform}/assets/event${eventId}/1_${index}.jpg`;
};

const PhotoGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState(null);
  // activeMedia:
  // { type: 'image', eventId, imageIndex }
  // { type: 'video', videoIndex }

  // Sort events by id desc so latest (highest eventN) is first
  const sortedEvents = useMemo(
    () => [...IMAGE_EVENTS].sort((a, b) => b.id - a.id),
    []
  );

  const openImageModal = (eventId, imageIndex) => {
    setActiveMedia({ type: "image", eventId, imageIndex });
    setIsModalOpen(true);
  };

  const openVideoModal = (videoIndex) => {
    setActiveMedia({ type: "video", videoIndex });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveMedia(null);
  };

  const handlePrev = () => {
    if (!activeMedia) return;

    if (activeMedia.type === "image") {
      const event = IMAGE_EVENTS.find((e) => e.id === activeMedia.eventId);
      if (!event) return;

      const newIndex = Math.max(1, activeMedia.imageIndex - 1);
      setActiveMedia({ ...activeMedia, imageIndex: newIndex });
    } else if (activeMedia.type === "video") {
      const newIndex = Math.max(0, activeMedia.videoIndex - 1);
      setActiveMedia({ ...activeMedia, videoIndex: newIndex });
    }
  };

  const handleNext = () => {
    if (!activeMedia) return;

    if (activeMedia.type === "image") {
      const event = IMAGE_EVENTS.find((e) => e.id === activeMedia.eventId);
      if (!event) return;

      const newIndex = Math.min(event.imageCount, activeMedia.imageIndex + 1);
      setActiveMedia({ ...activeMedia, imageIndex: newIndex });
    } else if (activeMedia.type === "video") {
      const newIndex = Math.min(VIDEOS.length - 1, activeMedia.videoIndex + 1);
      setActiveMedia({ ...activeMedia, videoIndex: newIndex });
    }
  };

  const currentMediaUrl = (() => {
    if (!activeMedia) return null;

    if (activeMedia.type === "image") {
      return getCloudinaryImageUrl(
        activeMedia.eventId,
        activeMedia.imageIndex,
        "full"
      );
    } else if (activeMedia.type === "video") {
      return VIDEOS[activeMedia.videoIndex] || null;
    }
    return null;
  })();

  const currentMediaType = activeMedia?.type || "image";

  return (
    <>
      <div className="jumbotron pt-3 mx-4">
        <Container className="my-2">
          <Row className="mb-4">
            <Col className="text-center">
              <div
                style={{
                  background: "#198754",
                  padding: "18px 20px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  color: "#ffffff",
                }}
              >
                <h2 className="fw-bold mb-1" style={{ color: "white" }}>
                  फोटो एवं वीडियो गैलरी
                </h2>

                {sortedEvents.length > 0 && (
                  <p className="mb-0" style={{ fontSize: "1rem", color: "white" }}>
                    नवीनतम कार्यक्रम:{" "}
                    <strong style={{ color: "#F9F9F9" }}>{sortedEvents[0].name}</strong>
                  </p>
                )}
              </div>
            </Col>
          </Row>

          {/* IMAGE GALLERY */}
          <Row className="mt-4">
            <Col>
              {sortedEvents.map((event) => (
                <div key={event.id} className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0">{event.name}</h5>
                    <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                      {event.imageCount} फोटो
                    </span>
                  </div>

                  <div className="d-flex flex-wrap gap-2">
                    {Array.from({ length: event.imageCount }, (_, i) => {
                      const idx = i + 1;
                      const thumbUrl = getCloudinaryImageUrl(
                        event.id,
                        idx,
                        "thumb"
                      );
                      return (
                        <button
                          key={idx}
                          type="button"
                          className="p-0 border-0 bg-transparent"
                          onClick={() => openImageModal(event.id, idx)}
                        >
                          <img
                            src={thumbUrl}
                            alt={`${event.name} - फोटो ${idx}`}
                            loading="lazy"
                            style={{
                              width: 110,
                              height: 110,
                              objectFit: "cover",
                              borderRadius: 8,
                              boxShadow:
                                "0 1px 3px rgba(0,0,0,0.18)",
                            }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </Col>
          </Row>

          {/* VIDEO SECTION */}
          {VIDEOS.length > 0 && (
            <Row className="mt-4">
              <Col>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0">वीडियो</h5>
                  <span
                    className="text-muted"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {VIDEOS.length} वीडियो
                  </span>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {VIDEOS.map((videoSrc, index) => (
                    <button
                      key={index}
                      type="button"
                      className="p-0 border-0 bg-transparent"
                      onClick={() => openVideoModal(index)}
                    >
                      <video
                        src={videoSrc}
                        style={{
                          width: 140,
                          height: 90,
                          objectFit: "cover",
                          borderRadius: 8,
                          boxShadow:
                            "0 1px 3px rgba(0,0,0,0.18)",
                        }}
                        preload="metadata"
                      />
                    </button>
                  ))}
                </div>
              </Col>
            </Row>
          )}

          {/* Small note / CTA if you want */}
          <Row className="mt-4">
            <Col className="text-center">
              <Button
                variant="success"
                className="px-4"
                onClick={() => {
                  // Scroll to top of gallery, or any future action.
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                ऊपर जाएँ
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* MODAL FOR IMAGES & VIDEOS */}
      <ImageModal
        isOpen={isModalOpen}
        mediaUrl={currentMediaUrl}
        mediaType={currentMediaType}
        mediaOrientation="landscape"
        onClose={closeModal}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
};

export default PhotoGallery;
